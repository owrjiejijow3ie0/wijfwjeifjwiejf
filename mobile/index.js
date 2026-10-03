(() => {
var __pluginBundle = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // mobile/index.tsx
  var index_exports = {};
  __export(index_exports, {
    default: () => index_default
  });

  // vendetta-runtime:@vendetta
  var patcher = vendetta.patcher;

  // vendetta-runtime:@vendetta/metro
  var findByDisplayName = vendetta.metro.findByDisplayName;
  var findByName = vendetta.metro.findByName;
  var findByProps = vendetta.metro.findByProps;
  var findByPropsAll = vendetta.metro.findByPropsAll;
  var findByStoreName = vendetta.metro.findByStoreName;
  var findByTypeNameAll = vendetta.metro.findByTypeNameAll;
  var findByTypeName = vendetta.metro.findByTypeName;

  // vendetta-runtime:@vendetta/ui/components
  var General = vendetta.ui.components.General;
  var Forms = vendetta.ui.components.Forms;

  // vendetta-runtime:@vendetta/utils
  var findInReactTree = vendetta.utils.findInReactTree;

  // vendetta-runtime:@vendetta/metro/common
  var React = vendetta.metro.common.React;
  var ReactNative = vendetta.metro.common.ReactNative;
  var chroma = vendetta.metro.common.chroma;
  var FluxDispatcher = vendetta.metro.common.FluxDispatcher;

  // vendetta-runtime:@vendetta/ui/assets
  var getAssetByName = vendetta.ui.assets.getAssetByName;
  var getAssetIDByName = vendetta.ui.assets.getAssetIDByName;

  // mobile/platformIcons.json
  var platformIcons_default = {
    desktop: {
      viewBox: "0 0 24 24",
      path: "M4 2.5c-1.103 0-2 .897-2 2v11c0 1.104.897 2 2 2h7v2H7v2h10v-2h-4v-2h7c1.103 0 2-.896 2-2v-11c0-1.103-.897-2-2-2H4Zm16 2v9H4v-9h16Z"
    },
    web: {
      viewBox: "0 0 24 24",
      path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93Zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39Z"
    },
    mobile: {
      viewBox: "0 0 1000 1500",
      path: "M 187 0 L 813 0 C 916.277 0 1000 83.723 1000 187 L 1000 1313 C 1000 1416.277 916.277 1500 813 1500 L 187 1500 C 83.723 1500 0 1416.277 0 1313 L 0 187 C 0 83.723 83.723 0 187 0 Z M 125 1000 L 875 1000 L 875 250 L 125 250 Z M 500 1125 C 430.964 1125 375 1180.964 375 1250 C 375 1319.036 430.964 1375 500 1375 C 569.036 1375 625 1319.036 625 1250 C 625 1180.964 569.036 1125 500 1125 Z"
    },
    embedded: {
      viewBox: "0 0 24 24",
      path: "M3.06 20.4q-1.53 0-2.37-1.065T.06 16.74l1.26-9q.27-1.8 1.605-2.97T6.06 3.6h11.88q1.8 0 3.135 1.17t1.605 2.97l1.26 9q.21 1.53-.63 2.595T20.94 20.4q-.63 0-1.17-.225T18.78 19.5l-2.7-2.7H7.92l-2.7 2.7q-.45.45-.99.675t-1.17.225Zm14.94-7.2q.51 0 .855-.345T19.2 12q0-.51-.345-.855T18 10.8q-.51 0-.855.345T16.8 12q0 .51.345 .855T18 13.2Zm-2.4-3.6q.51 0 .855-.345T16.8 8.4q0-.51-.345-.855T15.6 7.2q-.51 0-.855.345T14.4 8.4q0 .51.345 .855T15.6 9.6ZM6.9 13.2h1.8v-2.1h2.1v-1.8h-2.1v-2.1h-1.8v2.1h-2.1v1.8h2.1v2.1Z"
    },
    vr: {
      viewBox: "0 4 24 16",
      path: "M8.46 8.64a1 1 0 0 1 1 1c0 .44-.3.8-.72.92l-.11.07c-.08.06-.2.19-.2.41a.99.99 0 0 1-.98.86h-.06a1 1 0 0 1-.94-1.05l.02-.32c.05-1.06.92-1.9 1.99-1.9ZM15.55 5a5.5 5.5 0 0 1 5.15 3.67h.3a2 2 0 0 1 2 2v3.18a2 2 0 0 1-2 1.99h-.2A4.54 4.54 0 0 1 16.55 19a4.45 4.45 0 0 1-3.6-1.83 1.2 1.2 0 0 0-1.9 0 4.44 4.44 0 0 1-3.9 1.82 4.54 4.54 0 0 1-3.94-3.15H3a2 2 0 0 1-2-2v-3.18c0-1.1.9-1.99 2-1.99h.3A5.5 5.5 0 0 1 8.46 5h7.09Zm-7.1 2C6.6 7 5.06 8.5 4.97 10.41l-.02.66v3.18c0 1.43 1.05 2.66 2.34 2.74.85.06 1.63-.32 2.14-1.01a3.2 3.2 0 0 1 2.57-1.3c1 0 1.97.48 2.57 1.3.5.69 1.3 1.08 2.14 1.01 1.3-.08 2.34-1.31 2.34-2.74l-.02-3.84a3.54 3.54 0 0 0-3.49-3.43H8.45Z"
    }
  };

  // mobile/StatusIcon.tsx
  var { View, Text, Image, Pressable } = ReactNative;
  var Svg = findByName("Svg", false).default;
  var Path = findByName("Svg", false).Path;
  var IconIDs = {
    desktop: getAssetIDByName("ic_monitor_24px"),
    web: getAssetIDByName("ic_globe_24px"),
    //mobile: getAssetIDByName("ic_mobile_status"),
    mobile: getAssetIDByName("ic_mobile_device"),
    embedded: getAssetIDByName("ic_monitor_24px"),
    //provisional
    vr: getAssetIDByName("ic_vr_headset_24px")
    // not provisional
  };
  function StatusIcon(props) {
    const { platform, color } = props;
    const iconSize = props.iconSize ?? 16;
    const icon = platformIcons_default[platform] ?? platformIcons_default.desktop;
    return /* @__PURE__ */ vendetta.metro.common.React.createElement(View, { style: { width: iconSize, height: iconSize } }, /* @__PURE__ */ vendetta.metro.common.React.createElement(Svg, { width: iconSize, height: iconSize, viewBox: icon.viewBox }, /* @__PURE__ */ vendetta.metro.common.React.createElement(Path, { d: icon.path, fill: color })));
  }

  // vendetta-runtime:@vendetta/ui
  var rawColors = vendetta.ui.rawColors;

  // mobile/colors.ts
  var Colors = {
    online: chroma(rawColors.GREEN_360).hex(),
    dnd: chroma(rawColors.RED_400).hex(),
    idle: chroma(rawColors.YELLOW_300).hex(),
    offline: chroma(rawColors.PRIMARY_400).hex()
  };
  var FallbackColors = {
    online: "#23a55a",
    dnd: "#f23f43",
    idle: "#f0b232",
    offline: "#80848e"
  };
  function getStatusColor(status, useFallback = false) {
    if (useFallback) {
      return FallbackColors[status];
    }
    return Colors[status];
  }

  // vendetta-runtime:@vendetta/plugin
  var storage = vendetta.plugin.storage;

  // vendetta-runtime:@vendetta/storage
  var useProxy = vendetta.storage.useProxy;

  // mobile/StatusIcons.tsx
  var platformOrder = ["desktop", "embedded", "mobile", "web", "vr"];
  var PresenceStore = findByStoreName("PresenceStore");
  var SessionsStore = findByStoreName("SessionsStore");
  var UserStore = findByStoreName("UserStore");
  var statusCache;
  var statusCacheHits = 0;
  var statusCacheTimeout;
  var currentUserId;
  function queryPresenceStoreWithCache() {
    if (!statusCacheTimeout) {
      statusCacheTimeout = setTimeout(() => {
        statusCacheHits = 0;
        statusCacheTimeout = null;
      }, 5e3);
    }
    if (!statusCache || statusCacheHits == 0) {
      statusCache = PresenceStore.getState();
    }
    statusCacheHits = (statusCacheHits + 1) % 20;
    return statusCache;
  }
  function getUserStatuses(userId) {
    let statuses;
    if (!currentUserId) {
      currentUserId = UserStore.getCurrentUser()?.id;
    }
    if (userId == currentUserId) {
      statuses = Object.values(SessionsStore.getSessions()).reduce((acc, curr) => {
        if (curr.clientInfo.client !== "unknown")
          acc[curr.clientInfo.client] = curr.status;
        return acc;
      }, {});
    } else {
      statuses = queryPresenceStoreWithCache()?.clientStatuses[userId];
    }
    return statuses;
  }
  function StatusIcons(props) {
    useProxy(storage);
    const userId = props.userId;
    const iconSize = props.size ?? (props.small ? 17 : 16);
    const statuses = getUserStatuses(userId);
    const orderedPlatforms = props.mobileFirst && statuses?.mobile ? ["mobile", ...platformOrder.filter((platform) => platform !== "mobile")] : platformOrder;
    const platformStatuses = Object.entries(statuses ?? {}).sort(([left], [right]) => {
      const leftOrder = orderedPlatforms.indexOf(left);
      const rightOrder = orderedPlatforms.indexOf(right);
      return (leftOrder < 0 ? orderedPlatforms.length : leftOrder) - (rightOrder < 0 ? orderedPlatforms.length : rightOrder);
    });
    return /* @__PURE__ */ vendetta.metro.common.React.createElement(ReactNative.View, { style: [{ flexDirection: "row", alignItems: "center" }, props.containerStyle] }, platformStatuses.map(([platform, status], index) => {
      const platformIconSize = props.small && platform === "mobile" ? 14 : iconSize;
      return /* @__PURE__ */ vendetta.metro.common.React.createElement(
        ReactNative.View,
        {
          key: platform,
          style: { width: platformIconSize, height: platformIconSize, marginRight: index < platformStatuses.length - 1 ? 2 : 0 }
        },
        /* @__PURE__ */ vendetta.metro.common.React.createElement(StatusIcon, { platform, color: getStatusColor(status, storage.fallbackColors), iconSize: platformIconSize })
      );
    }));
  }

  // mobile/platformBadgeSources.json
  var platformBadgeSources_default = { desktop: { online: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAC5klEQVR4nO3cQW4TURAE0PmIcA4QXrADbpBrYG+4gc1JcG7AxuYauQHOjoURnIMgPl2CLIYo/f+4ommlU0+KYtFBBVW2s3MZJJQGCKYBgmmAYBogmAYIpgGCaYBgGiCYBgg2eYBXn98//1Wv10Ot53UY3tgfPXpW4mEo5fJpObv4+u7Tj2EC+7v9FvvVx1rrxh7KHUop2+Ny98EedukeYLFbftEzvo+Vejiu9m/tYZP9bNvL3XJr39b2Jf0uvq32G/vuag6A9/zr3z+/20OZ6OzJsxet3wnNAfTspzRfBc0B9N5/Oiu3+bvAfsZnrwDrX05lrwC3Y/cIrQFaAdmx/bhHYAOyY/txj8AGZMf24x6BDciO7cc9AhuQHduPewQ2IDu2H/cIbEB2bD/uEdiA7Nh+3COwAdmx/bhHYAOyY/txj8AGZMf24x6BDciO7cc9AhuQHduPewQ2IDu2H/cIbEB2bD/uEdiA7Nh+3COwAdmx/bhHYAOyY/txj8AGZMf24x6BDciO7cc9AhuQHduPewQ2IDu2H/cIbEB2bD/uEdiA7Nh+3COwAdmx/bhHYAOyY/txj8AGZMf24x6BDciO7cc9AhuQHduPewQ2IDu2H/cIbEB2bD/uEdiA7Nh+3COwAdmx/bhHYAOyY/txj8AGZMf24x6BDciO7cc9QitAfBogmAYIpgGCaYBgGiCYBgimAYJpgGD0AIv96lBrfW0PZaJSytVxuXM/6qc5gL0CtvZtbV8yHf+BTfrIstPdy0eWgV4FJ2k++6FrANDvgn497/03ugcAvRK6dD3zb0waAP79TtjYyud6RfxlXVxZF5f2nr9tvef/b/IA0exVWO3bnezZ96D+Tw/qHwsaIJgGCKYBgmmAYBogmAYIpgFIrQKjzT3grGGgAcZmDQMNMDZrGGiAsVnDQAOMzRoGGmBs1jDQAGOzhoEGGJs1TG7TAME0QDANEEwDBNMAwTRAMA0QTAME0wDB/gDFrvJwCnnfNQAAAABJRU5ErkJggg==", dnd: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAC3klEQVR4nO3cQW4TQRQE0G4UL1gkXAFOAJwgIzkLbhNzEpzbsIilyQkIJ4ArQBYsbNF0SWQxIH73uKL55KfehhFfqFCVHcPGOYkrDeBMAzjTAM40gDMN4EwDONMAzjSAMw3gbPYAP4Z3Lw/pcPmzpCGn8qb+1pNXUr59ltN4kk6uno8fv6YZZg1wN1x8KKVs6qP8Q855ezpev6+PXboH+HZ+8Umv+D54R7y4uX5bH5u6Brgb1ttS0mV9lE45p6vTcbepj6bmAPiZvy/7L/VRZlrl1avWZ0JzAL36j9fzLmgOoJ/9x+v5LGgO8P18XeovcqSzm53ZsXmE1gCtgOjYfswjsAHRsf2YR2ADomP7MY/ABkTH9mMegQ2Iju3HPAIbEB3bj3kENiA6th/zCGxAdGw/5hHYgOjYfswjsAHRsf2YR2ADomP7MY/ABkTH9mMegQ2Iju3HPAIbEB3bj3kENiA6th/zCGxAdGw/5hHYgOjYfswjsAHRsf2YR2ADomP7MY/ABkTH9mMegQ2Iju3HPAIbEB3bj3kENiA6th/zCGxAdGw/5hHYgOjYfswjsAHRsf2YR2ADomP7MY/ABkTH9mMegQ2Iju3HPAIbEB3bj3kENiA6th/zCGxAdGw/5hHYgOjYfswjsAHRsf2YR2ADomP7MY/ABkTH9mMeoRUgNg3gTAM40wDONIAzDeBMAzjTAM40gDN+gGF9m0p6XR9lrpw+n40786t+mgPoC5uO9yBf2KSvLDveg3xlGehdMF/Pqx+6BgB9FszQ8bP/XvcAoHdCW+8r/96sAQCfCYe035SUBr0jfquv+FrkeJJW29bP/D/VP/e4tP5f0vp39//mUf1lQQM40wDONIAzDeBMAzjTAM40AKlVoLelB1w0DDTA1KJhoAGmFg0DDTC1aBhogKlFw0ADTC0aBhpgatEw0ABTi4bJ3zSAMw3gTAM40wDONIAzDeBMAzjTAM40gLNf2Xv1cGLyjcAAAAAASUVORK5CYII=", idle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAC5UlEQVR4nO3cPXJTQRAE4LcUcop1AziBQU4InRIgjmJxEuSjIAJShyQW5gRwA0FqUSzbgYMHxew+tWsHj/tLUDGmmurWDyRKg7jSAM40gDMN4EwDONMAzjSAMw3gTAM40wDOJg+w+/jy6aP9zXnO6WxI+Xn5LcnpOqV8+Wt2dDF/9enbMMGkAX5sFu/yMKzKQ/mHUuj6yXL7tjxsUn6+zff3p5/1jG9UXhHHb65elEdVTQPsPpyuU87n5aE0yildzF9frcpDU3UAvOen/c3X8lAmyrOjZ7XPhPoAevYfrOVVUB1A7/2Ehs+C+gCbRS6/yIGOl1uzY/MItQFqAdGx/ZhHYAOiY/sxj8AGRMf2Yx6BDYiO7cc8AhsQHduPeQQ2IDq2H/MIbEB0bD/mEdiA6Nh+zCOwAdGx/ZhHYAOiY/sxj8AGRMf2Yx6BDYiO7cc8AhsQHduPeQQ2IDq2H/MIbEB0bD/mEdiA6Nh+zCOwAdGx/ZhHYAOiY/sxj8AGRMf2Yx6BDYiO7cc8AhsQHduPeQQ2IDq2H/MIbEB0bD/mEdiA6Nh+zCOwAdGx/ZhHYAOiY/sxj8AGRMf2Yx6BDYiO7cc8AhsQHduPeQQ2IDq2H/MIbEB0bD/mEdiA6Nh+zCOwAdGx/ZhHYAOiY/sxj8AGRMf2Yx6BDYiO7cc8Qi1AbBrAmQZwpgGcaQBnGsCZBnCmAZxpAGf0ALvN4rr80El5KBOVZ+6X+XJrftVP6damL2w63J18YZO+suxwd/KVZaBXwXQtz35oGgD0WdAuN7z33yqdttMroa71mX9r0gCAz4Th53415HxW/vBJ+a0HD8/4IaXL4fFsXXvP/1Pp8H6p/b+k9u/u/829+suCBnCmAZxpAGcawJkGcKYBnGkAUq1Ab70H7BoGGmCsaxhogLGuYaABxrqGgQYY6xoGGmCsaxhogLGuYaABxrqGyd80gDMN4EwDONMAzjSAMw3gTAM40wDONICz3yDv+3ADVac1AAAAAElFTkSuQmCC", offline: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAACxklEQVR4nO3cTW4TURAE4DfkInACzA1yI+zsEFnMIohdbG6UG+CcAC4Ck65EXkwi93szZb1WWvVJkS31oqDKPzsPRUJpgGAaIJgGCKYBgmmAYBogmAYIpgGCaYBgiwcYf+4/ln/laynTdSllY39SytGqfChX5df4bfe3LLBogPFuv7fit/ZUzhoO4+1uZ0+aNA8w3t3/toeN/Undcby9+WKPVU0DjD/uD2XCx440G+zj6PvN1p65qgO8fOZPf+ypLHU1fKp9J9QH0Kt/vYZ3QX0AffYzqt8FLQNM9iAr2QBux+4RagPUArJj+3GPwAZkx/bjHoENyI7txz0CG5Ad2497BDYgO7Yf9whsQHZsP+4R2IDs2H7cI7AB2bH9uEdgA7Jj+3GPwAZkx/bjHoENyI7txz0CG5Ad2497BDYgO7Yf9whsQHZsP+4R2IDs2H7cI7AB2bH9uEdgA7Jj+3GPwAZkx/bjHoENyI7txz0CG5Ad2497BDYgO7Yf9whsQHZsP+4R2IDs2H7cI7AB2bH9uEdgA7Jj+3GPwAZkx/bjHoENyI7txz0CG5Ad2497BDYgO7Yf9whsQHZsP+4R2IDs2H7cI7AB2bH9uEdgA7Jj+3GPwAZkx/bjHoENyI7txz0CG5Ad2497hFqA+DRAMA0QTAME0wDBNEAwDRBMAwTTAMEuMcDRHj7bnyz3aANs7PGs+gD6wab1LvKDTfrJsvUu8ZNloHfBCg2vfmgaAPRdsEj1s/+keQDQO6FB4yv/ZNEA8Pyd8H/a2hDXRe+Ik0dr8qF8GA61z/zXFg8QzT4KJ3s4y9767+r/9K7+saABgmmAYBogmAYIpgGCaYBgGoBUKzBa7wG7hoEGmOsaBhpgrmsYaIC5rmGgAea6hoEGmOsaBhpgrmsYaIC5rmHylgYIpgGCaYBgGiCYBgimAYJpgGAaIJgGCPYEi8fhcK6d0cYAAAAASUVORK5CYII=" }, web: { online: "data:image/png;base64,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", dnd: "data:image/png;base64,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", idle: "data:image/png;base64,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", offline: "data:image/png;base64,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" }, mobile: { online: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAEkElEQVR4nO2dX04bVxSHz3VIpFatQlcQKoLUR7qCsATyWBspzgrwDurswKygrhS7j8kSLisoj5UIKllBjRqlEoE5/UZRnlIIh57L9Z/zSaO5k4eff3M+xx4BmkkSVCUEVCYEVCYEVCYEVCYEVCYEVCYEVCYEVOZOBfzwW3/jQi8fiV6uc7jNNk8cSbo3W0v33v7x0/hU7ojiArZf9dffvT/fV5G+iGzIYnCaRMbffP3g4OjpeMZxMXidcmxN9vYb0aGIrstCkmYdScPj3ssDDopQTMDmpPsLu74sB+OT3vQ5e3cSmztLNvxPFJGQ2FzZmnT7jUgrYOnoiDw/7k3H4oi7gM1J76/F/cz/Eml20pt8x8INVwGb071d0eYVy+UldZ6edF++ZuWCs4DeWFSfsVxmDvguGLB3wVXA40k3q8gTlksLAzt805vuiBPk+REC7JDnRwiwQ54fIcAOeX5cJ4AXOmSXZTHY0WvOY1EFvKD4UBYAzmOoIj+z/AzO45Dz2BEnyPOD4llDgAny/KB41hBggjw/KJ41BJggzw+KZw0BJsjzg+JZQ4AJ8vygeNYQYII8PyieNQSYIM8PimcNASbI84PiWUOACfL8oHjWEGCCPD8onjUEmCDPD4pnDQEmyPOD4llDgAny/KB41hBggjw/KJ41BJggzw+KZw0BJsjzg+JZQ4AJ8vygeNYQYII8PyieNQSYIM8PimcNASbI84PiWUOACfL8oHjWEGCCPD8onjUEmCDPD4pnDQEmyPOD4llDgAny/KB41hBggjw/KJ41BJggzw+KZw0BJsjzg+JZQ4AJ8vygeNYQYII8PyieNQSYIM8PimcNASbI84PiWUOACfL8oHjWEGCCPD8onjUEmCDPD4pnDQEmyPOD4lmvEADjlO6NZQFQvezLFbfbYWALK2ApYGAhoCYMLATUhIGFgJowsBBQEwYWAmrCwFZewJmk9LqjmrXTORVITbPRpLTD9eMuhw/ZisHAVlhASr9++9X9wVV3s23v0vv3Px9GiHjGYREY2GoKoOgLTnwoN2Bz0h2x22dzhx6H9NgRJ8jzo5QASppPep66XAd5fpQ66Y7Ij8e96RHLG7M16W43Ir+zdIWBrZyAs5PedJ29GT6KlJ0rDGy1BFDw1ic8b33+C/L8KHHCVLz17YJL3EaZga2aAJH7nQffW59q0T6t40Nz/idLVxjY6glor/9PupO+GCh1G2UGtoICgCuhG986niugflPoFvoMbH4FlHrXfaIjncGXHify8bEpzYhlKQ64Khuwd8FZwN7uHdy+/hQRI5HmkP8RRxwz9O42ep4w+AGHG1KSeb59fQvX3jN2D9mWkTPe/evs3XAXwLux2OdvbSzfQzfFXUBL6e+CKtziSuwmFBHQslQSCg2/pZiAlsfT3kC1fZDbwn4nnKWUhm+6kxHrIhQV0NL+kuTd+/OBfvxDp0dsi8BbBtM+ynB01S9/vOB17o72xwMXcrGhKutJm23+aW7Q1DlKSWZrsnZq/bHH/+FOBQSfEwIqEwIqEwIqEwIqEwIqEwIqEwIqEwIq8y9esDqOxAuxDgAAAABJRU5ErkJggg==", dnd: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAADd0lEQVR4nO3dX04aURTH8XNGfWiCQFcg3YFdAZOgSR/tCsQVyA5Kd4ArcFxBfWyiJOMK6g6KKyggSR/UOT23qU8WdeRezvz5fRLigQcZ5qvDv+QOE5hCAGMIYAwBjCGAMQQwhgDGEMAYAhhba4Df8afOPT/sCEmbhXb1psIQpmsmnm7Kxs279PuE1iR4AIkP2gtaHGcifb2zDpWAEE0i5qRBjRNOz6d6UzCsl2Bm8f4xSTbUO2nr1dLREFPiaNhKL070ahC6b8KYx71TEupTFTAlzXR8pJN3rBfvKrXzHwWKwHrxah7v9/Wwc6pj9XB01EwvEvLIe4BZt/dLf2kpj/kvEX1OaF2N3+voje4rf/TQc6Bb+U3H6mL6rIeic5288B0g0QCHOlYWM51sp+OBjl54DrCXkkhXx+pivmqmlzF5ggB5IYAxBDBW2gC64UKUUgnoTomfexylDCDMX1vp5ZBKYBbvDVnki45PIUB4CGAMAYwhgDEEMIYAxhDAGAIYQwBjCGAMAYwhgDEEMIYAxhDAGAIYQwBjCGAMAYwhgDEEMIYAxhDAGAIYQwBjCGAMAYwhgDEEMIYAxhDAGAIYQwBjCGAMAYwhgLFKBtB7SpijhEpAJOvTsuV2ShugKhDAGAIYQwBjCGAMAYzVPYAwzXSjz4milEkmpIS4Q5TFQnTAQi0KqdYBmM62aXuwbDVbt0rvLd2OKOSyaXUNkOed9G3cG4nQsY7+1TLAGx50kbblOaUIEHH0sZFeXOv4aot4fzeT7IeOftUtgHvSbaXjto65zbs90R9+1S3AKg+4aNvzP4UPICssFxxkGeW6BXC2eOtD3rNauLN13MndTx39qmMA3cqzZjruUw7BllGuZQAnx9LxQZfQL3aAXhLkr+4f4Wjw0ulE3GlTWLKRjkEUfPHu8MvXC9FE/xtGG0RXj+8N3Gv+B6Ku/tUP9AF1KKQiL1/vzOLeNPgHYkZWeU+yjPcAQY+/1nI8D72W9wCOHooSPVYc6lgdb3gl9hpBAjiVihBo5zvBAjizeG9AJMOyPie4Y77uoqF+DD7Sq0EEDeC4L0nmtBjo1NcQO3pT4emOv9FdkzSpMVr25Y8vrJe1cR8P3NN9R0ja+jXirt5UGPr15vXfk3nS5iTvxx6rWGsAeAoBjCGAMQQwhgDGEMAYAhhDAGMIYOwPYPfNjjk+GwgAAAAASUVORK5CYII=", idle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAADrUlEQVR4nO3dXU4TURjG8fcM6BVCuwLqDrDExDvqpTEgrMCyAroD6w7KCqgrEEuMl5Y7E1NkB5YVTItcCczrM0ausMDAOX07M88vKT3tRTtz/vT0K5k6IVMMYIwBjDGAMQYwxgDGGMAYAxhjAGNTDRB/eVGbP79cVtGKumQFV80Mp9GxEze6eDR3Un31bShTEjxA/LVRic5Od1SlKSI1yYehc9JNFhZ3qy/7I1wOxuEUzPhgFROvbRGp4JRHI+dce2l9sItxEMECjHure1hqmlIAWJq6SxuDbQy9czh5V6TJvxIqgsPJq7hXb+JG9zAsHBXZrm4cdcUjzJVfo149xlle1/zbjCobR1Wce+M1QHywuulUP2JYWOrcVnV9sI+hF74DdBHgLYaFhQC7CNDC0Au/AXr1Pm5wDcPCUpFDPA80xBPMlz8MkB3myx8GyA7z5Q8DZIf58uemAIoNx5++5IGTxk37kc8AKu+rb47akgPxp3obH8a9w/AaZYDwGMAYAxhjAGMMYIwBjDGAMQYwxgDGGMAYAxhjAGMMYIwBjDGAMQYwxgDGGMAYAxhjAGMMYIwBjDGAMQYwxgDGGMAYAxhjAGMMYIwBjDGAMQYwxgDGGMAYAxhjAGOFDJAe7iWSqCs5kEjSnHS4Hc1rgKJQBrClDGBLGcCWMoAtZQBbWvYAeD8xlsjtY9AXFw0lpUlNnGtIopt4/b6Ea4LRMgdQ5z7IwpPWpKPZpkfplbNfnZCHTdOyBtAM76Tjg9U0wg6G3mkZA+g9dnqWtuUm2EZ/gu303Nyz6uvvxxjeWfz5+Yq7vPyBoVdatgBYesZYeioYZjbq1RVnXuEGSxbgATs8a9vzP9g+f0LsMNz7cMF4BMQ4u9ejZxItYQDRR4+fZv1Vi/TXOtz5758YeqWlDIDX/9X1QVMywEvRIIdR1jIGSGmGQ8djO5rYjj0MvdOZDhDov+6Kc65128+J/PvZlA6GQeDROMMH757O4euHCNFJoujw6r1B+po/SpI1VW3hYk0CQoAtBNjH0AuHk1f4QnsU+gMxKw95TzKJ/wAB119rmuF56K4wV/5hKQr6XGABS0/mV2J3ESRAqkgRQk1+KliAFJajFh637bw+J6RrPmaojWWng4tBBA2Q+vslyelpC/fUxJ0t46qZpyIn+NOVxcXOpC9/fMGcTE/68YBcXNSwixV8fbgisyRyx5iOkczPD7N+7PEQUw1A1zGAMQYwxgDGGMAYAxhjAGMMYIwBjP0BUWR6jrol05QAAAAASUVORK5CYII=", offline: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAADaElEQVR4nO3dTU7bQBjG8XdMV20l0hOQ3iA9ARyBnoBwAuJ01SaIQSTtqnE4Ae4JyhHgBM0NGk5AkNquiqePEZUqlY8YZnj98fykwZMsUOJ/HNuJ5BghVQygjAGUMYAyBlDGAMoYQBkDKGMAZU8awH5K2pFzay6TlhjTwV3l4dzMRLLIjDmz7+O5PJHgAWyStMwv2XHOdUWkLdUwN8ak7rkc2jhe4HYwBiOY/fEEK16siLQwqmhhjNi9Qf8Q8yCCBbCj5AjbdVdqwaR2GG9j4p3B8K5eK/+vMBEMhld2nHSxQ0OAGjJm2w7iVDzyH2A0Oceiqu/591nYYf8Vlt54DWA/JpuSua+Y1ldk3toP8TFmXvgNMJqkIrKFUV8Gh6aDfg8zL/wGOJic4D+uY1pfTk7tbn9DPGGAohhAGQMoq2wAPHD8OZFKMBt3PY+KBnD7dvedlQqwB58tTrr2MP0fA4THAMoYQBkDKGMAZQygjAGUMYAyBlDGAMoYQBkDKGMAZQygjAGUMYAyBlDGAMoYQBkDKGMAZQygjAGUMYAyBlDGAMoYQBkDKGMAZQygjAGUMYAyBlDGAMoYQBkDKKtnADFpFLlUKiDLTBdrGuMG1Q1QEwygjAGUMYAyBlDGAMoYQC4wjnGcfiKZzCUXSRvnGRsisomxihFOwwN8kRemd9vVbPOr9MpPN8V0CyOMxgYocCZtx5MpVtQOpv41MsADnnSZHstdqhHAmDd2EM8wW5odJx1sNd8w9auBAS7ssN/CsjA7mjgs/GpcgEc84bI9npuUP8AjLheMLeAcixaGPw0MILJiXhf9VYv81zrk0n3H1K9GBsDxP7aCrhSAV38qIc4HGhpAcCS09KXjcQTUxRHQEab+lTpAqFfdNWOkd9/PiVz/bMoU0zBKffHup7l8/Rwhpk7MKbaIGW7nr/iOEbeOFd/DzbaEVObL1+ewFSywWMWoowefk9zGf4CQ77/aCuyHluU9QA5bQSoB9wVKCh+JLSNIgFzNIgRZ+blgAXJ2lPREnJXq7hMusIqsHcZTzIMIGiB39SXJj6yH98+uiKxhVMEZ9mOpvIymt33540vwAP+6+njgt7RlBZ/PXGYd3FUeK9FMLmUhz2Re9GOPxzAYpIgBlDGAMgZQxgDKGEAZAyhjAGUMoOwPnH1TjneJt0UAAAAASUVORK5CYII=" }, embedded: { online: "data:image/png;base64,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", dnd: "data:image/png;base64,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", idle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAG4klEQVR4nO2cXVIbRxDHe1Y2L7FgdYKIE1gGuypvkh9TKWP5BBYnMD6B8Qkin0DyCSygUnm0eEuVAyYnQDmBZCAv2NrOf1Ys0q60q4/9GCH6VzWeHoR3dvo/PdP7IRQJRhEBDCMCGEYEMIwIYBgRwDAigGFEAMOIAIYRAQwjAhhGBDCMCGAYEcAwiQtwefiszJZTZOYirRBKqY5yrE5+58sxmomhUGLR/Vyxc/9dvnQcqhJxhYhslFWmB7e1LYta/Z/yB4XnbbQXZ2EBtOOtq4s3zLSHpo1yH+kpRXXn0fqHRYVYSIDu0dOKYucTTBtFgBCsrFeFF3+3aU7mFuDb0dY7zPp9EsZANOxvvDh9D3NmFMrMfDvcbjBxjYRQFKnmxs7JLsyZUCgzIc6fnXlEUChTEefPz6wiKJRIukfbVcWsN1xhTlgpbMwnLZihRAqgU011eXEO00YR5qfH+fXNqBQ1WoCj7SZm/2uYwoIgCj4iCmoUQqgAN7O/C1OICaKgEBYF4QIcbO0jr30HU4gJM70vvDzdpwmECtA73DpHVSQhCTr2zukm6jEUyhjdP38pqu/XWoBEYaJ/UXVoMrYieow6E3Au/2Ta38O1zcKvf3UoAM5hnO7hVg0fNGAmSlQo3txf+gwzNRhOp1yuVvjtyxmaLkg0quRwE8vtBpqpgb53CzunTQoAP4+Dk2qmkf2YFICJjuGACk1AJxx0cdFJU4SwbGiyAIdbbXxQhpkoRgUIWQI8MOlSveDkkAkAP4+DDRi/nzymBOCQwQdJa9we2IjH/D32Ax2OaeX/5gRQB4WdkyrMSBD5Z3DIY5ipMOl6AP35SdURxgRYjgjAQ5vnwYc24wKklAFpTAmgmTT7Rkm7fw024rGbc/C1nzSvgE0KgKG27J2TVzAm0jvY/kqKSzBTY9L4xwU42m4iG3gNc26Y6C0p6wzmZB486IRlInrvoaurEsxw2KnjhB/DWhDV4nx+dzQSBhed3xs4eIVSBhHwERFQoxEwHj9Ygtr4YRnm3Exa45Ikzrn5UW3CpMeMKVLKs34UnrAXKRQf2Ii6qGyUubk7Ahijh1S0gPoWjMcPBGBUCyECTAcCYAhDfI24G6EIMJ2gjzCeIdiAY12OBw+eNKshgD8VxXiGxE1BV0UA1rfNmZpkWW3SOE6FiPbgmw3UsQimohjPEERAExHwGuZCKFJNUtyhEByyjsME0umg9eM6sm9mqhFRkVKEkalQfr06mqpq3DT58qKlYk4ARMBHRECNbsDxhqQ9w+BAn/qjxN1/koD1zM+vl4LO93BFiHnbGn34UlH4ewgyoC4qGyUVll6AiPPziLtMA18qGhSAUaVG1ACXQgA1fQ9L4jwhwK3fb40kDjwNEWAA53JPvMeiIsAIUefnkcAS5BN6KEACB55G1ACXQQDQw23rzahNGA+rzmHaKAsz6oehAEfbdaSgb2CmxmjHQZZEAKDauGP6KijCwPmXnzCKCsUEqegHpKJ7MEcESDkF1ShcJ1hkNWkCjnJKzFyHuQz0sBrULc61CTiqX8Hk2YNpo8SGR1JR+HwAMqBzVEUSsqCDTGgTNSkUFwjAqISMgACu791/un88K6l+/ytMISO8VHQgwNJsgPcHLxUdCJBBCir4wabuZoQDATJIQQU/Xio6ECCDFFTwwzepKPzuZkDnqIokZAerM/vlyRMFUwvAqISM0amo0k+i0vg2jDAd/cq8khTUHDoVVdiA9U78O9pCxjDRWyXXAObQ1wI6AtqIgDLaQsYwUlGjAjBCMPJt6ixgp4TxG1mCMf5jZSoFRae7uBBp0hKASViDCA2YmaP3AP3wYQN2ZvASOd/DhAjYA75lvgTxEjrfA76owRcNmJnAegnK8kYcOlxa53tkKYK+IaeXoEzSUL4DzvfISgRGEoIIeJr6lTDfIed7ZCGCfiqGPtzO2jDKMBOH76DzPeCXGvzSgJk4jPUffqng+OgopSjgO+x8j7RE0PeBbh9JatCRbpRhJgKvgPM94JsafNOAmQh8M/sJ4LgD9G1pur4+w4a8gWYs0MEuOmjSCpGUCDr3p7W1kvd9aRxziH49hX7024uK4B7cUjU862yhuXJoETC76rH88yBX0a+joOniE0DjRsL36yY+KKM5M6y/XZLLVUcPvoq4k7Tfb8E/P6M5M4xlhx6u1byZ74HjTAYXaFVItodfKKMZCus/A0ZUX7UlZxpuNOgv7k350wnwzzEpVQ9bFfD/o9FvBdPVZYWcwFf6FfWgaCuo6H3jZsXAZCUbzSGWOqNH+XbwLesgUwUQ0kUEMIwIYBgRwDAigGFEAMOIAIYRAQwjAhhGBDCMCGAYEcAwIoBhRADD/A9pDaQ2AFGf8QAAAABJRU5ErkJggg==", offline: "data:image/png;base64,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" }, vr: { online: "data:image/png;base64,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", dnd: "data:image/png;base64,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", idle: "data:image/png;base64,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", offline: "data:image/png;base64,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" } };

  // mobile/settings.tsx
  var { View: View2, ScrollView } = ReactNative;
  function Settings() {
    useProxy(storage);
    return /* @__PURE__ */ vendetta.metro.common.React.createElement(ScrollView, null, /* @__PURE__ */ vendetta.metro.common.React.createElement(View2, null, /* @__PURE__ */ vendetta.metro.common.React.createElement(
      Forms.FormSwitchRow,
      {
        label: "Show icons on the dm top bar",
        value: storage.dmTopBar ?? true,
        onValueChange: (v) => storage.dmTopBar = v,
        note: ""
      }
    ), /* @__PURE__ */ vendetta.metro.common.React.createElement(
      Forms.FormSwitchRow,
      {
        label: "Show icons on the users and DMs list",
        value: storage.userList ?? true,
        onValueChange: (v) => storage.userList = v,
        note: ""
      }
    ), /* @__PURE__ */ vendetta.metro.common.React.createElement(
      Forms.FormSwitchRow,
      {
        label: "Show icons on user profiles",
        value: storage.profileUsername ?? true,
        onValueChange: (v) => storage.profileUsername = v,
        note: ""
      }
    ), /* @__PURE__ */ vendetta.metro.common.React.createElement(
      Forms.FormSwitchRow,
      {
        label: "Hide mobile icon next to avatar",
        value: storage.hideMobileStatus ?? false,
        onValueChange: (v) => storage.hideMobileStatus = v,
        note: ""
      }
    ), /* @__PURE__ */ vendetta.metro.common.React.createElement(
      Forms.FormSwitchRow,
      {
        label: "Theme compatibility mode",
        value: storage.fallbackColors ?? false,
        onValueChange: (v) => storage.fallbackColors = v,
        note: ""
      }
    ), /* @__PURE__ */ vendetta.metro.common.React.createElement(
      Forms.FormSwitchRow,
      {
        label: "Old user list icon style",
        value: storage.oldUserListIcons ?? false,
        onValueChange: (v) => storage.oldUserListIcons = v,
        note: "Moves status indicators to the right"
      }
    )));
  }

  // vendetta-runtime:react
  var react_default = vendetta.metro.common.React;
  var useState = vendetta.metro.common.React.useState;
  var useEffect = vendetta.metro.common.React.useEffect;

  // mobile/PresenceUpdatedContainer.tsx
  var { Text: Text2, View: View3 } = General;
  var PresenceUpdatedContainer = ({ children }) => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
      const presenceUpdate = () => {
        setCounter((prevCounter) => prevCounter + 1);
      };
      FluxDispatcher.subscribe("PRESENCE_UPDATES", presenceUpdate);
      return () => {
        FluxDispatcher.unsubscribe("PRESENCE_UPDATES", presenceUpdate);
      };
    }, []);
    return react_default.Children.map(children, (child, index) => {
      return react_default.cloneElement(child, { key: `${index}-${counter}` });
    });
  };
  var PresenceUpdatedContainer_default = PresenceUpdatedContainer;

  // mobile/index.tsx
  var { Text: Text3, View: View4 } = General;
  var unpatches = [];
  var index_default = {
    onLoad: () => {
      var _a, _b, _c, _d, _e, _f;
      (_a = storage).dmTopBar ?? (_a.dmTopBar = true);
      (_b = storage).userList ?? (_b.userList = true);
      (_c = storage).profileUsername ?? (_c.profileUsername = true);
      (_d = storage).hideMobileStatus ?? (_d.hideMobileStatus = false);
      (_e = storage).fallbackColors ?? (_e.fallbackColors = false);
      (_f = storage).oldUserListIcons ?? (_f.oldUserListIcons = false);
      const debugLabels = false;
      const patchAfterIfFound = (method, target, callback) => {
        if (target) unpatches.push(patcher.after(method, target, callback));
      };
      const patchBeforeIfFound = (method, target, callback) => {
        if (target) unpatches.push(patcher.before(method, target, callback));
      };
      const insertStatusIconsAfterName = (root, userId, key) => {
        if (findInReactTree(root, (child) => child?.key === key)) return true;
        const nameContainer = findInReactTree(
          root,
          (child) => Array.isArray(child?.props?.children) && child.props.children.some((item) => typeof item === "string" || typeof item?.props?.children === "string")
        );
        if (!nameContainer) return false;
        const nameChildren = nameContainer.props.children;
        const nameIndex = nameChildren.findIndex(
          (item) => typeof item === "string" || typeof item?.props?.children === "string"
        );
        if (nameIndex === -1) return false;
        nameChildren.splice(
          nameIndex + 1,
          0,
          /* @__PURE__ */ vendetta.metro.common.React.createElement(View4, { key, style: { flexDirection: "row", alignItems: "center", alignSelf: "center" } }, debugLabels ? /* @__PURE__ */ vendetta.metro.common.React.createElement(Text3, null, key) : /* @__PURE__ */ vendetta.metro.common.React.createElement(StatusIcons, { userId, small: true, mobileFirst: true }))
        );
        return true;
      };
      const PresenceStore2 = findByStoreName("PresenceStore");
      patchAfterIfFound("default", findByName("ChannelHeader", false), (args, res) => {
        if (!storage.dmTopBar) return;
        if (!(res.type?.type?.name == "PrivateChannelHeader")) return;
        patcher.after("type", res.type, (args2, res2) => {
          if (!res2.props?.children?.props?.children) return;
          const userId = findInReactTree(res2, (m) => m.props?.user?.id)?.props?.user?.id;
          if (!userId) return;
          const dmTopBar = res2.props?.children;
          if (!findInReactTree(res2, (m) => m.key == "DMTabsV2Header")) {
            if (dmTopBar.props?.children?.props?.children[1]) {
              if (typeof dmTopBar.props?.children?.props?.children[1]?.type == "function") {
                const titleThing = dmTopBar.props?.children?.props?.children[1];
                const unpatchTV2HdrV2 = patcher.after("type", titleThing, (args3, res3) => {
                  unpatchTV2HdrV2();
                  if (!findInReactTree(res3, (c) => c.key == "DMTabsV2Header-v2")) {
                    res3.props.children[0].props.children.push(
                      /* @__PURE__ */ vendetta.metro.common.React.createElement(PresenceUpdatedContainer_default, { key: "DMTabsV2Header-v2" }, debugLabels ? /* @__PURE__ */ vendetta.metro.common.React.createElement(Text3, null, "DTV2H-v2") : /* @__PURE__ */ vendetta.metro.common.React.createElement(StatusIcons, { userId }))
                    );
                  }
                });
              } else {
                const arrowId = getAssetIDByName("arrow-right");
                const container1 = findInReactTree(dmTopBar, (m) => m.props?.children[1]?.props?.source == arrowId);
                container1?.props?.children?.push(/* @__PURE__ */ vendetta.metro.common.React.createElement(
                  View4,
                  {
                    key: "DMTabsV2Header",
                    style: {
                      flexDirection: "row",
                      justifyContent: "center",
                      alignContent: "flex-start"
                    }
                  },
                  /* @__PURE__ */ vendetta.metro.common.React.createElement(
                    View4,
                    {
                      key: "DMTabsV2HeaderIcons",
                      style: {
                        flexDirection: "row"
                      }
                    }
                  )
                ));
              }
            }
          }
          const topIcons = findInReactTree(res2, (m) => m.key == "DMTabsV2HeaderIcons");
          if (topIcons) {
            topIcons.props.children = /* @__PURE__ */ vendetta.metro.common.React.createElement(StatusIcons, { userId });
          }
        });
      });
      const profileBadgeProps = {};
      const applyProfileBadgeProps = (_, element) => {
        const badge = profileBadgeProps[element?.props?.id];
        if (badge && element?.props) {
          element.props.source = badge.source;
          element.props.label = badge.label;
          element.props.id = badge.id;
        }
      };
      const applyRenderBadgeProps = (_, element) => {
        const badge = profileBadgeProps[element?.props?.id];
        if (badge && element?.props) Object.assign(element.props, badge);
      };
      const jsxApi = globalThis.bunny?.api?.react?.jsx;
      if (jsxApi?.onJsxCreate) {
        jsxApi.onJsxCreate("ProfileBadge", applyProfileBadgeProps);
        jsxApi.onJsxCreate("RenderBadge", applyRenderBadgeProps);
        unpatches.push(() => {
          jsxApi.deleteJsxCreate?.("ProfileBadge", applyProfileBadgeProps);
          jsxApi.deleteJsxCreate?.("RenderBadge", applyRenderBadgeProps);
        });
      } else {
        const jsxRuntime = findByProps("jsx", "jsxs");
        const applyBadgeJsx = ([component], element) => {
          if (component?.name === "ProfileBadge") applyProfileBadgeProps(component, element);
          if (component?.name === "RenderBadge") applyRenderBadgeProps(component, element);
        };
        patchAfterIfFound("jsx", jsxRuntime, applyBadgeJsx);
        patchAfterIfFound("jsxs", jsxRuntime, applyBadgeJsx);
      }
      const useBadges = findByName("useBadges", false);
      patchAfterIfFound("default", useBadges, (args, badges) => {
        const userId = args[0]?.userId;
        if (!storage.profileUsername || !userId || !Array.isArray(badges)) return;
        const cachedStatuses = getUserStatuses(userId);
        const statuses = cachedStatuses && Object.keys(cachedStatuses).length ? cachedStatuses : PresenceStore2.getClientStatus?.(userId) ?? cachedStatuses;
        const platformStatuses = Object.entries(statuses ?? {}).filter(([platform]) => platformOrder.includes(platform)).sort(([left], [right]) => platformOrder.indexOf(left) - platformOrder.indexOf(right));
        for (const [platform, status] of platformStatuses.reverse()) {
          const iconUri = platformBadgeSources_default[platform]?.[status];
          if (!iconUri) continue;
          const id = `platform-indicator-${userId}-${platform}`;
          const label = `${platform.charAt(0).toUpperCase()}${platform.slice(1)} (${status})`;
          profileBadgeProps[id] = {
            id,
            source: { uri: iconUri },
            label,
            userId
          };
          badges.unshift({ id, description: label, icon: "platform-indicator" });
        }
      });
      const Status = findByName("Status", false);
      patchBeforeIfFound("default", Status, (args) => {
        if (!args) return;
        if (!args[0]) return;
        if (!storage.hideMobileStatus) return;
        args[0].isMobileOnline = false;
      });
      const Rows = findByProps("GuildMemberRow");
      if (Rows?.GuildMemberRow) {
        unpatches.push(patcher.after("type", Rows.GuildMemberRow, ([{ user }], res) => {
          if (!storage.userList) return;
          if (!user || user.bot) return;
          if (storage.oldUserListIcons) return;
          insertStatusIconsAfterName(res, user.id, "GuildMemberRowStatusIconsView");
        }));
      }
      let patchedAvatar = false;
      const rowPatch = ([{ user }], res) => {
        if (!storage.userList) return;
        if (!user || user.bot) return;
        const label = res?.props?.label;
        const modifiedStatusIcons = findInReactTree(label, (c) => c.key == "TabsV2MemberListStatusIconsView");
        if (!modifiedStatusIcons) {
          if (storage.oldUserListIcons) {
            res.props.label = /* @__PURE__ */ vendetta.metro.common.React.createElement(View4, { style: {
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center"
            }, key: "TabsV2MemberListStatusIconsView" }, label, /* @__PURE__ */ vendetta.metro.common.React.createElement(View4, { style: { flexDirection: "row", alignItems: "center", marginLeft: 2 } }, debugLabels ? /* @__PURE__ */ vendetta.metro.common.React.createElement(Text3, null, "TV2MLSIV") : /* @__PURE__ */ vendetta.metro.common.React.createElement(StatusIcons, { userId: user.id, small: true, mobileFirst: true })));
          } else insertStatusIconsAfterName(label, user.id, "TabsV2MemberListStatusIconsView");
          if (!patchedAvatar && res?.props?.icon?.type) {
            unpatches.push(patcher.before("type", res.props.icon.type, (args) => {
              if (storage.hideMobileStatus) {
                args[0].isMobileOnline = false;
              }
            }));
            patchedAvatar = true;
          }
        }
      };
      findByTypeNameAll("UserRow").forEach((UserRow) => unpatches.push(patcher.after("type", UserRow, rowPatch)));
      const MessagesItemChannelContent = findByTypeName("MessagesItemChannelContent");
      patchAfterIfFound("type", MessagesItemChannelContent, (args, res) => {
        console.log("MessagesItemChannelContent-B", args, res);
        const channel = args[0]?.channel;
        if (channel?.recipients?.length == 1) {
          const userId = channel.recipients[0];
          if (findInReactTree(res, (m) => m?.key == "TabsV2RedesignDMListIcons2")) return;
          const nameContainer = findInReactTree(res, (m) => m?.props?.children?.some((h) => h?.props?.ellipsizeMode));
          window.nc = nameContainer;
          if (nameContainer?.props?.children) {
            const orig = nameContainer.props.children[0];
            nameContainer.props.children = /* @__PURE__ */ vendetta.metro.common.React.createElement(View4, { key: "TabsV2RedesignDMListIcons2", style: {
              flexDirection: "row"
            } }, orig, /* @__PURE__ */ vendetta.metro.common.React.createElement(StatusIcons, { userId }));
          }
        }
      });
    },
    onUnload: () => {
      unpatches.forEach((u) => u());
    },
    settings: () => {
      return /* @__PURE__ */ vendetta.metro.common.React.createElement(Settings, null);
    }
  };
  return __toCommonJS(index_exports);
})();

return __pluginBundle;
})()
