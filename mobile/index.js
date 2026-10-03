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
    const icons = {
      desktop: {
        path: "M4 2.5c-1.103 0-2 .897-2 2v11c0 1.104.897 2 2 2h7v2H7v2h10v-2h-4v-2h7c1.103 0 2-.896 2-2v-11c0-1.103-.897-2-2-2H4Zm16 2v9H4v-9h16Z",
        viewBox: "0 0 24 24"
      },
      web: {
        path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93Zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39Z",
        viewBox: "0 0 24 24"
      },
      mobile: {
        path: "M 187 0 L 813 0 C 916.277 0 1000 83.723 1000 187 L 1000 1313 C 1000 1416.277 916.277 1500 813 1500 L 187 1500 C 83.723 1500 0 1416.277 0 1313 L 0 187 C 0 83.723 83.723 0 187 0 Z M 125 1000 L 875 1000 L 875 250 L 125 250 Z M 500 1125 C 430.964 1125 375 1180.964 375 1250 C 375 1319.036 430.964 1375 500 1375 C 569.036 1375 625 1319.036 625 1250 C 625 1180.964 569.036 1125 500 1125 Z",
        viewBox: "0 0 1000 1500"
      },
      embedded: {
        path: "M3.06 20.4q-1.53 0-2.37-1.065T.06 16.74l1.26-9q.27-1.8 1.605-2.97T6.06 3.6h11.88q1.8 0 3.135 1.17t1.605 2.97l1.26 9q.21 1.53-.63 2.595T20.94 20.4q-.63 0-1.17-.225T18.78 19.5l-2.7-2.7H7.92l-2.7 2.7q-.45.45-.99.675t-1.17.225Zm14.94-7.2q.51 0 .855-.345T19.2 12q0-.51-.345-.855T18 10.8q-.51 0-.855.345T16.8 12q0 .51.345 .855T18 13.2Zm-2.4-3.6q.51 0 .855-.345T16.8 8.4q0-.51-.345-.855T15.6 7.2q-.51 0-.855.345T14.4 8.4q0 .51.345 .855T15.6 9.6ZM6.9 13.2h1.8v-2.1h2.1v-1.8h-2.1v-2.1h-1.8v2.1h-2.1v1.8h2.1v2.1Z",
        viewBox: "0 0 24 24"
      },
      vr: {
        path: "M8.46 8.64a1 1 0 0 1 1 1c0 .44-.3.8-.72.92l-.11.07c-.08.06-.2.19-.2.41a.99.99 0 0 1-.98.86h-.06a1 1 0 0 1-.94-1.05l.02-.32c.05-1.06.92-1.9 1.99-1.9ZM15.55 5a5.5 5.5 0 0 1 5.15 3.67h.3a2 2 0 0 1 2 2v3.18a2 2 0 0 1-2 1.99h-.2A4.54 4.54 0 0 1 16.55 19a4.45 4.45 0 0 1-3.6-1.83 1.2 1.2 0 0 0-1.9 0 4.44 4.44 0 0 1-3.9 1.82 4.54 4.54 0 0 1-3.94-3.15H3a2 2 0 0 1-2-2v-3.18c0-1.1.9-1.99 2-1.99h.3A5.5 5.5 0 0 1 8.46 5h7.09Zm-7.1 2C6.6 7 5.06 8.5 4.97 10.41l-.02.66v3.18c0 1.43 1.05 2.66 2.34 2.74.85.06 1.63-.32 2.14-1.01a3.2 3.2 0 0 1 2.57-1.3c1 0 1.97.48 2.57 1.3.5.69 1.3 1.08 2.14 1.01 1.3-.08 2.34-1.31 2.34-2.74l-.02-3.84a3.54 3.54 0 0 0-3.49-3.43H8.45Z",
        viewBox: "0 4 24 16"
      }
    };
    const icon = icons[platform] ?? icons.desktop;
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
    const iconSize = props.size ?? 16;
    const statuses = getUserStatuses(userId);
    return /* @__PURE__ */ vendetta.metro.common.React.createElement(vendetta.metro.common.React.Fragment, null, Object.keys(statuses ?? {}).map((s) => /* @__PURE__ */ vendetta.metro.common.React.createElement(StatusIcon, { platform: s, color: getStatusColor(statuses[s], storage.fallbackColors), iconSize })));
  }

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
        label: "Hide mobile status from the normal indicator",
        value: storage.removeDefaultMobile ?? true,
        onValueChange: (v) => storage.removeDefaultMobile = v,
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
      (_d = storage).removeDefaultMobile ?? (_d.removeDefaultMobile = true);
      (_e = storage).fallbackColors ?? (_e.fallbackColors = false);
      (_f = storage).oldUserListIcons ?? (_f.oldUserListIcons = false);
      const debugLabels = false;
      const patchAfterIfFound = (method, target, callback) => {
        if (target) unpatches.push(patcher.after(method, target, callback));
      };
      const patchBeforeIfFound = (method, target, callback) => {
        if (target) unpatches.push(patcher.before(method, target, callback));
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
      const displayNameByProps = findByProps("DisplayName");
      const displayNameByName = displayNameByProps ? null : findByName("DisplayName", false);
      const displayNameTarget = displayNameByProps ?? displayNameByName;
      const displayNameMethod = displayNameByProps ? "DisplayName" : "default";
      patchAfterIfFound(displayNameMethod, displayNameTarget, (args, res) => {
        if (!storage.profileUsername || !res?.props) return;
        const profileNameRow = findInReactTree(res, (child) => child?.props?.style?.flexDirection === "row") ?? res;
        if (!profileNameRow?.props) return;
        if (!findInReactTree(profileNameRow, (child) => child?.key === "ProfileIndicatorDebug")) {
          const debugMarker = /* @__PURE__ */ vendetta.metro.common.React.createElement(Text3, { key: "ProfileIndicatorDebug", style: { color: "#ff4b4b", fontSize: 12 } }, "PI hook");
          const children2 = profileNameRow.props.children;
          profileNameRow.props.children = Array.isArray(children2) ? [...children2, debugMarker] : [children2, debugMarker];
        }
        const userId = args[0]?.user?.id ?? args[0]?.userId ?? findInReactTree(args[0], (entry) => entry?.user?.id)?.user?.id;
        if (!userId || findInReactTree(profileNameRow, (child) => child?.key === "ProfilePlatformIndicators")) return;
        const indicators = /* @__PURE__ */ vendetta.metro.common.React.createElement(PresenceUpdatedContainer_default, { key: "ProfilePlatformIndicators" }, /* @__PURE__ */ vendetta.metro.common.React.createElement(View4, { style: { flexDirection: "row", alignItems: "center" } }, /* @__PURE__ */ vendetta.metro.common.React.createElement(StatusIcons, { userId })));
        const children = profileNameRow.props.children;
        profileNameRow.props.children = Array.isArray(children) ? [indicators, ...children] : [indicators, children];
      });
      const Status = findByName("Status", false);
      patchBeforeIfFound("default", Status, (args) => {
        if (!args) return;
        if (!args[0]) return;
        if (!storage.removeDefaultMobile) return;
        args[0].isMobileOnline = false;
      });
      const Rows = findByProps("GuildMemberRow");
      if (Rows?.GuildMemberRow) {
        unpatches.push(patcher.after("type", Rows.GuildMemberRow, ([{ user }], res) => {
          if (!storage.userList) return;
          if (storage.oldUserListIcons) return;
          const statusIconsView = findInReactTree(res, (c) => c.key == "GuildMemberRowStatusIconsView");
          if (!statusIconsView) {
            const row = findInReactTree(res, (c) => c.props.style.flexDirection === "row");
            row.props.children.splice(
              2,
              0,
              /* @__PURE__ */ vendetta.metro.common.React.createElement(
                View4,
                {
                  key: "GuildMemberRowStatusIconsView",
                  style: {
                    flexDirection: "row"
                  }
                },
                debugLabels ? /* @__PURE__ */ vendetta.metro.common.React.createElement(Text3, null, "GMRSIV") : /* @__PURE__ */ vendetta.metro.common.React.createElement(StatusIcons, { userId: user.id })
              )
            );
          }
        }));
      }
      let patchedAvatar = false;
      const rowPatch = ([{ user }], res) => {
        if (!storage.userList) return;
        const modifiedStatusIcons = findInReactTree(res?.props?.label, (c) => c.key == "TabsV2MemberListStatusIconsView");
        if (!modifiedStatusIcons) {
          window.mst = res;
          res.props.label = /* @__PURE__ */ vendetta.metro.common.React.createElement(
            View4,
            {
              style: {
                //flex:1,
                justifyContent: storage.oldUserListIcons ? "space-between" : "flex-start",
                flexDirection: "row",
                alignItems: "center"
              },
              key: "TabsV2MemberListStatusIconsView"
            },
            res.props.label,
            /* @__PURE__ */ vendetta.metro.common.React.createElement(View4, { key: "TabsV2MemberListStatusIconsView", style: {
              flexDirection: "row"
            } }, debugLabels ? /* @__PURE__ */ vendetta.metro.common.React.createElement(Text3, null, "TV2MLSIV") : /* @__PURE__ */ vendetta.metro.common.React.createElement(StatusIcons, { userId: user.id }))
          );
          if (!patchedAvatar) {
            if (res?.props?.icon?.type) {
              unpatches.push(patcher.before("type", res.props.icon.type, (args) => {
                if (storage.removeDefaultMobile) {
                  args[0].isMobileOnline = false;
                }
              }));
              patchedAvatar = true;
            }
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
