import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";

const root = new URL(".", import.meta.url);
const manifestPath = fileURLToPath(new URL("mobile/manifest.json", root));
const outputPath = fileURLToPath(new URL("mobile/index.js", root));

const modules = {
    "@vendetta": {
        patcher: "vendetta.patcher"
    },
    "@vendetta/metro": {
        findByDisplayName: "vendetta.metro.findByDisplayName",
        findByName: "vendetta.metro.findByName",
        findByProps: "vendetta.metro.findByProps",
        findByPropsAll: "vendetta.metro.findByPropsAll",
        findByStoreName: "vendetta.metro.findByStoreName",
        findByTypeNameAll: "vendetta.metro.findByTypeNameAll",
        findByTypeName: "vendetta.metro.findByTypeName"
    },
    "@vendetta/metro/common": {
        React: "vendetta.metro.common.React",
        ReactNative: "vendetta.metro.common.ReactNative",
        chroma: "vendetta.metro.common.chroma",
        FluxDispatcher: "vendetta.metro.common.FluxDispatcher"
    },
    "@vendetta/ui/components": {
        General: "vendetta.ui.components.General",
        Forms: "vendetta.ui.components.Forms"
    },
    "@vendetta/ui/assets": {
        getAssetByName: "vendetta.ui.assets.getAssetByName",
        getAssetIDByName: "vendetta.ui.assets.getAssetIDByName"
    },
    "@vendetta/ui": {
        rawColors: "vendetta.ui.rawColors"
    },
    "@vendetta/utils": {
        findInReactTree: "vendetta.utils.findInReactTree"
    },
    "@vendetta/plugin": {
        storage: "vendetta.plugin.storage"
    },
    "@vendetta/storage": {
        useProxy: "vendetta.storage.useProxy"
    },
    react: {
        default: "vendetta.metro.common.React",
        useState: "vendetta.metro.common.React.useState",
        useEffect: "vendetta.metro.common.React.useEffect"
    }
};

const compatibilityPlugin = {
    name: "vendetta-runtime-compatibility",
    setup(buildContext) {
        buildContext.onResolve({ filter: /.*/ }, ({ path }) => {
            if (Object.hasOwn(modules, path)) {
                return { path, namespace: "vendetta-runtime" };
            }
        });

        buildContext.onLoad({ filter: /.*/, namespace: "vendetta-runtime" }, ({ path }) => {
            const exports = Object.entries(modules[path]).map(([name, expression]) =>
                name === "default"
                    ? `export default ${expression};`
                    : `export const ${name} = ${expression};`
            );
            return { contents: exports.join("\n"), loader: "js" };
        });
    }
};

const result = await build({
    entryPoints: [fileURLToPath(new URL("mobile/index.tsx", root))],
    bundle: true,
    write: false,
    format: "iife",
    globalName: "__pluginBundle",
    platform: "browser",
    target: "es2020",
    jsx: "transform",
    jsxFactory: "vendetta.metro.common.React.createElement",
    jsxFragment: "vendetta.metro.common.React.Fragment",
    plugins: [compatibilityPlugin]
});

const bundle = `(() => {\n${result.outputFiles[0].text}\nreturn __pluginBundle;\n})()`;
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
manifest.main = "index.js";
manifest.hash = createHash("sha256").update(bundle).digest("hex");

await writeFile(outputPath, `${bundle}\n`);
await writeFile(manifestPath, `${JSON.stringify(manifest, null, 4)}\n`);