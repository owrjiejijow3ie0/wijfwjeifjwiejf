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

  // mobile/platformBadgeSources.json
  var platformBadgeSources_default = { desktop: { online: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA/0lEQVR4nL3USw6CQAwG4PYmJup53MNCb8J4E13A2vuoCTcZ/1ZGTcMgKY8voR2ptAwhMC1s3QHbpjxyjBuaIDK3z6K+YqkYh0LzC8V4xHI65iuGnAi+A+oiIsmJM5IbmlRI9CwbRpJ+b2lAKnjZPhqELXjZPhqELXjZPhqELXjZPhqELXjZPhqELXjZPhqELXjZPhqELXjZPhpEKuBEoAnQJBBkB8xl/QG7urhhwgHL6fo+dmJfFycM2VAGahUS8cAHkYnae9lcqIPf46XHmLY/xuAf8dgqpI/YvSG4KNCPR9mckXoxjqx0x/8M7ShbENhBoBGwg0AZgwPmsPiAF7JGgxkvIE8vAAAAAElFTkSuQmCC", dnd: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABBElEQVR4nMXU7YkCQQwG4KSA81qwkxtw77claCeunWgH/ldh7cQW1ALim+AoRGddsn48sMlAJHGWJUxv9tkBxzSaMPGQehCS/aDZLnE0jMeg+QLVCY79MS0xZEpwG/A3EiQS5jlSGIvMkGiw2zLS/YBciPJ9LChfiPJ9LChfiPJ9LChfiPJ9LChfiPJ9LChfiPJ9LChfiPJ9LChfiPJ9LKhcYOaaehCRmqA44FW+MCBVK9xvjGN//GDZqWP6n2LdDqkgL7K2hYh1j3W9XtAF4+ksv8Z8/S5af3hK1QzpKn8h/kv7aTZzpIcYT1H+x8+03ahYUIdU1dTBb7OpqaB1wCu8fcAZupmLGVQJKyAAAAAASUVORK5CYII=", idle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABEElEQVR4nL3UgW3CQAwFUHuBttmAGZI1CowAm+SyCWzQhq5BZmCDtF3A/bZ6CJlciC7Ak84+yZGdS5QwPdhzB/x+VRsRWdAMzHx6eT/usTWMZfpDtWORDbazCfO+WB63BOcB320pSCRCDVI2ZqqR6G3VMdL1gFjI5ftYUL6Qy/exoHwhl+9jQflCLt/HgvKFXL6PBeULuXwfC8oXcvk+FpQv5PJ9LKhYwIcSaAZ8qIEgOeBenj+gb6sPJlljO9vgz071bbkloQUl4P3USPqcG6RhTKdi1e3oH2NNFh9jPP4Uoxf+HMoa6Qx3HghwkkAXXpddgzSIsZLiHd8ydqJkQfWfZaAJinUXKGF0wD08fMAfYYmJGfaQVp0AAAAASUVORK5CYII=", offline: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA+klEQVR4nMXUYQ7BUAwH8NZJ3MgRuAI+IusLPuIK3MCRnMTzb2Mi5c1SG7/k/SuptNuyjKlnv12QNvsxMQ/pGzlfquXshF+GcYxs9kciGuN04STL2YTgeUFG0StIyDjmCklYwCivC+pGlJ9joXwjys+xUL4R5edYKN+I8nMslG9E+TkWyjei/BwL5RtRfo6F8o0oP8dC1Q1mFvpCzlkIigu68pcFZ5QRThdeP3ZKtocJXa9DKrl/yPCgE/K9weAii+mR7hinNdxlRnncfhuNf0zbQ4XyUL8h/k2rFtOE8hbjFNVX/EnTHRUbStY7oRZkNRcqaFzQhd4X3AC9ZIYZBJj9YwAAAABJRU5ErkJggg==" }, web: { online: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACMUlEQVR4nMWUQW7aQBSG31hqt+UGAUHXcW6QI6TL2JHCDTAnaG6AOUGphN1l6AnaG2B2lQKKOUGRKnXRBdPPDh7GYONsUD7p8Z7Hb+Z/M2+wkjPz9gLd2L8Xra9JdDXGkBAnxAl+tvTj7wzVQk413fjuRvR2RNiW06SinOHKm86Ij1DYEb3YH2mtA8Im1tgFJkqpcOlFQ8ISCivRjbwQN8CaWK/8uN2LvAct8pnnjDFjAd5QEtgdyyNhE2vlOP3l7fSnwMfI629FvhCyovPJPq6yQOQ949pSA9UpXCUca8CxjghT8jr4HIXllKqogYkmvwoKTCXribULM4HrOOE63hNWQhMXNNElrMUUqdTXlRf1BYwAzZrrl3s+xgZYTlPVNr1vd9d6u/3BhIT/xxVDewG2x/ovC5pKIHvGvQr3sd/68/ffb0IzL//JsAVw++3WQJKp0uZwnfwng1uQcAsu3znvO79uJ6lAk0ixSAH5Lvlzu18moWgyL4e8DBnKYVKtyKEARQYUOapssrVQysQO3lBs+xDyFM5A3jOuXXlNM0hIhXt8uAvGN7gPWAVq44geaqVaefX8yxFuy46ygPWpcESunvw4ISyu30QQxypQGxHdIiDcV59REsig2hA3wBBxgid/OibM4Z3GneL0x66AhUJcLgIpTXtwtF7QoznPdRwtnlEpkLE7rpDwAjvFmmMJ7GOxqRUoyIVE35Do0sRLhtiQWmiRhGhWt3AB887L2QX+AxNpBSgRyF2OAAAAAElFTkSuQmCC", dnd: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACNklEQVR4nMWU0W3bMBCG7wTkoUBjeYM4E0SZwALkvLsT2BvUnqDZwM4EdSeI+1YgFiJPEHmCuhM0tvPsy39EqFCSKQcIgnwAxdOJvP94JMX0wXy+wDZOBuhiEY6YJIJNQpwzS07M89b94jdcXrwCCNwXoQkGdKgBIVoz07iVpXO81mC0Gru4NxGREcxGhOkfC53BJGaenmaLMcwSNYFdnEyR+XeYjWjwMEs7m7h3zSI/4III3ZxmaSmxkoCWBWu+hdmIBg+Ih8g4I7CNr4Yk+58wNeI3t1wlgU03+QtHhzy0limjOwhWMsJKJoI9CZfpOVwGRjOUsvDQJKBs4mRt9sRZRTEB5ZmhPAOYh2FaYVIEy0uRJNMvjB0SKAQ23d6DnnPdKHeTj2XtgtOH+yL3gnsSLheXcL0KbLuJoDMBi0yAvqN7ExL32zvZ/YdZzDMPxRVA97pcD26WLtU45qFgD3LMujjhk/Mv2Z81gWMiNojlKb6K9rJ/QNRiv4oBEJhBYCDM4zBbTOEyNIlUBexRRdT6JttAUjnHil12lZqAvUd84Jgq9hxXVwH/I/whzBpQfmQOxkLS1uwFt1x/IfRCSQBl6mPGLUwKOLj8mt3lMM3x25PMIHKG1xqiIkRtmBqxyF6Bv4z7sxMORmF2dwPT4CuVRe9Q48/OUhLBnmDidUDBypwQDxhTC64cFFC0XAg+9ZXFojVHkJFbFhd8a0aF0GmLsJwL9DprhWeONvcFthwVeC8fLvAMVhofKGcBmrMAAAAASUVORK5CYII=", idle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACUklEQVR4nMWUS3LaQBCGu3ElyxhOAJzAWDh7tqkUhJzAugFwgvgGwAlwThDAydpZpioGixNYOYGIs4bJN8KSBXokG8pflZi/Wz39z0OFypF5eYPHr81Ls5WWMdIQNQ1SIkY9VfFUdPqmczcjk0uuQXDT7KoxQ2RNivGN6qDSXkzRKZQnxe+5MzQifWQh1PyiQRVpG41OO8sBcg/y+7DyESvvIQsxNK90lrVg5lypyidSwk7G7GRvYXsGNO/S/AuyEENz0ZJbad99FwjmjkujCdKafMRkigwh/8x67jww1CSHcmepDJlg0uflEOlTV2cMUZ4QClyCCTIXJlKSDz18CqrJXRDv4HiuOZ5LZCZGZMWZN5C5YODScILBZwxcAeId61nzXvjOeTnGqEcq5F+rThLcXLTUbG+5CK/8YXFOKmEwd1jkrmG0EsIwZvgvgttWWf88Bsh4XvhjSRowxNtFZpNYZZLDPuGPhYYewZl59bpeeffDFyDnkpsgM4maRATf3jZ0s7k3ifuKC6JL5uWAlyNSIUUmKYOnT5V7TF8yL10C28hnYp0xJtr2IdQpQwx1Dww1DNKfqQUTn0TVHO5i5qxV5RSZxdrWM5aZO0SHfyHyBLlnOKb4r8KcnJxX3v/0kOQvWmK21xRXCbNY85R5JLl6C3P2wWSESQ8pqto/bS/GyBCOwDDkQvMxzfvImJSBJWkCfqmkVxstrewXQpxJVnNLpoEFk64YM6KgSpiL4czZap/mU8IUzC8mNBKxZg2Kz9C26YqmHnKa1ziCOcfl6AZ/AcWcCiheEbrQAAAAAElFTkSuQmCC", offline: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACEElEQVR4nMWU33HTQBCHd6EA3EHsCqJ0kBJCBXEHWH4Dm/ExcXjDsivAVICpADqwXEGkCvALrxzfHZI4xTqLGSbDN7PelbW3v70/OpUn5v8LvFuubq3otYhNRMSZI2dormJ3i/n0C89RogLmfXYjP21GOJTzFPJMU/Mm3RGfoNgJZplR2E4I+yixCwx0beZpStBCsRbmfrUWK68I+yjNfDo0dx+MqC54FqptzGzaaqwlUC3LZ8I+SrE6Nm/TbwLmPhuLtR8JheV6GS5XW2C5esANJQIdK64TlnUi4vesIG+E9yjmaXURgYFNfhc0WIjbk2AWzQBebkXkFotxQCDBRwma/ETuWCAU2OMS/tmEm0xik9OHucuuRe1XwpxxV3jKVSBgcb5g0Il/xv0VJssG8sN+J2zG+R9HKIALpxuj6TLkcR3/4+BFjruU5zoyr9NCoE+kLlJDfkL+nrDZryYBga34Teazn6drYg+DoiIUacY7gqPascl/ChW8HOEbELe4E8hTXAN5D7hh5zF1kFCIO8ePZ7FcHXEvsC6OXBUpJ28gv7svER5KRVsgvCpUr8wszYnq47cVL97JERtgEnbvaAk4wstOVSaL2XRD6GEmFheHb+jsZVcTikBBkrGqB/Zoz3M3HcUdjO2mWq414QV2jpJlmYTLEhIVqKmEbggT7BJzHLCcwrtY4ZpegX/lyQV+AQ5B9xkHsajQAAAAAElFTkSuQmCC" }, mobile: { online: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABSklEQVR4nM2WMU7DQBREd6PYEghEcgKCaCi5ARyBlMSNOUE4AtwgnAA3CWWuADegpCCCnIAUSEhxlGW+hK1826MlS8OTvnbHmvkjV7Y1FU6naefzK586587NFlhrH/d2ov5zP1tAltQKjseDEY4hJoS7WTK5xlnSUJB8GOM6uAZgF7Nk3MWlpKFg4HAEgzdQO5UQioKq0QfLKSEwow+WU0JgRh8sp4TAjD5YTgmBGX2wnBICM/pgOSUEZvTBckoIzOiD5ZQQmNEHyykhMKMPllNCYEYfLKeEwIw+WE4JoTCG8n8LYHxqt+LUgNV6mcF0hmuN4IKoFR+9XGbvBpw8pL18vXzDtUZwwf5u3C2+t38tkCUHGIV81Ns2usLVrFx+75p/CuYo6JkNLEaBghGOIWZrsOz2NZncmA3wrM5PyQXmEPMb5liUVZcL33yUvRmL6NnhAAAAAElFTkSuQmCC", dnd: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABSUlEQVR4nM3VsU3DUBAG4P8kXFAYJxMQJoklN5RhA5gARoANYAKyAZQUWHqeBJgABxcURjzuCls5W6eTnYZPQno/+u9dkuYRBmK+WTRonhCRYwpCSJFeUHiuOfVGC5q8uI8R13ycjAgPaShv+NgbLditi0/+54KPk0Wgzqpyycce36V9rQvuzXdSlepOFUS3YFj0WHMqCKvoseZUEFbRY82pIKyix5pTQVhFjzWngrCKHmtOBWEVPdacCsIqeqw5FYRV9FhzKgir6LHmVBBW0WPNqSCsoseaU0F0xbn+8QKiKsHRJViLny1iXPNxZPaChJKz4/DyDvadn6/a2L7xcWT2gpTSZffeHrRglxc1RWR81PhRT5Bc8Yl/ovaR38ccA5HwkYVyhT3Ef8ohj34kusvC6y32jBYIWfILbPibnHJ0ySfnq7bDy8UfSaPBGWRjHJkAAAAASUVORK5CYII=", idle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABRElEQVR4nM3VsVHDUAwGYKlwOoPfBIQVQkOHKSkIsAFMACPABjAB2YADCkpCR4NXACaw79LFxUMq7Its/tPFafLdOX5/8stKZ6aO8j3PeLF4Ioo5rYXnMU0vwvG8ktDqL3g9uOcYr+W4tsj8EE6/buTY6i2oXial3DK5hqiyaRHk3vpvQZTbYLLAPNME1SzoFj1ozgSFih40Z4JCRQ+aM0GhogfNmaBQ0YPmTFCo6EFzJihU9KA5ExQqetCcCQoVPWjOBIWKHjRngkJFD5ozQaGiB82ZoJriUNu7QL78oGR0SapezmTwSE49wxcko/1w8vlDonw7HHO9/JZjz/AF6U5o3rcbLSifJxUz7cqxQ17qSXIlB+K6fpSVOXVEot8wLca0guUyNnrpR7oLZ8UtregtULpE2ufy455EV5R/Lh+z7sPVH2e2wxn36qExAAAAAElFTkSuQmCC", offline: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABMElEQVR4nM2VsU0DQRBFZwWZA+wKMJXgEqADqADORAiQFglE5oMKcAe0YCoBV4ATMtDyR+JOnlt/jb1O/KS9nS/9P18XbZAOsa778p3eMI5kM2bSC6exqhaYW/KCx8mzJLnAuDlBXuLN+BJTS17wMPnC1ccpYRFvxwPcLasKEq5iUGB2GqE0BV2jB8sZoTCjB8sZoTCjB8sZoTCjB8sZoTCjB8sZoTCjB8sZoTCjB8sZoTCjB8sZoTCjB8sZoTCjB8sZoTCjB8sZoTCjB8sZoTTGUna4IMm77IczUX7SFMljTBnlBXvhKF5XnwLiUz2U3/SBMaO8oBcGzXu7bYEuOcDpMsNfnOMWLH/FdyQ5cxQMZYmAY9jq0U/pPt5dRVkiK1D+S04wHuKswxzLp93lyh/blbgZk/H1NQAAAABJRU5ErkJggg==" }, embedded: { online: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB4ElEQVR4nN2UX07CQBDGZxCNGo14AkzQxMd6AusJxEdbE+sNvIF6Ar2BmFh4BE9guUF9MxEinEAIRoz8Gb+Wgi20BAw86C9ZZpbdnW9ndlKmOfMPBXZzxlZbOkmSjkrTwAtWnBeqz8eZCvkYCCh5I/HebF2IyDmmv4aZb9ZWFq/so0wN0x+BlKndwhg0GzJlPXsG2xNIZU/SJN083NnBsaOydl/wBPQMiZzCDcCx2AH+V1C2a0wDoBRP+DnHmoE9I2exdlfWTMMV2DY1S4j24QZAmrydO1Gl233ENAAOXpX07OWY9SLWVVhkYGoC49K/GVwqHd9b7uN/thXcUsFtfZlwjUlu4KRxWIEdgmtl3dwcFfCUaYiom3pUMRySGAOcCkSWwMHZMG7do7q+uuRm0Pj4smGSGC7OG/K4DppQoAKBPVgItF6JJAG3BzqJ8cCXQnSB6Qh4Dwu1T0hojQNUqMcW+WA0AjIIb9GZgFZ1MrAkpEVnATIocsrU38hftyB1bLJhI5Fe+TYwQkAr+1t0iHqMSH3Rszb8SHZMTekSWRQhwihRAQqH8P1MFLxPlAiyf+CQxamC9wmJU0WcNERQRO9zIEKJ9ZW41f+WT4sTp9Fsq8xUW1uO204cV2Ce/H2Bb1cX3ZlpwrX8AAAAAElFTkSuQmCC", dnd: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB2ElEQVR4nN2VzVEbQRCF3wNfXCWt5AgghHUEGpfkKt8sR4CcARkAEdgZWERgcaMKqRhlICIARYD+qriAmjfoh12xSyFKHOC7TLd6t99Md++IeGM+oMCN+7F7y7sdmDmsA+k/2Xb/sz+9QoKlgLl6eYLJgZnty301JP8WUDiibw3kPgqMXPUfDA1sAqIZ+c5vWTKFkteV/L/MzUH8kkhrIdCUwJ7MFDrutykQ0+yP3DTEBcF9gzWy3lX8WAKNuUDNq6kVmSmibodjV3Pqy7ncFEYelXz7MC+u3XUj33YzgUrVtMyY70wWir7t582PV0+iFwZbaujUUCcs1k8pQrzU7XzJEJgpY4XcnQoj+lpAw46WJaECuSUIhAeeiwdC8gjFhxOMMO4lRUIPqQbnTtCLBICriMWvMjGy8SWBsswZmiQOXe1QtT2Q+xTCm7GcVeMkJhEIJd9FgjAI4QRNPbEnf/MQxxKoeWSM6EYguxxWqtdM1i2BEUONbE9mLvrQYjW2JPMJBgyYGtEEIfk2tlzBnz0rMHHf4ztMfZ5IKFFLJfope8lLky/IFSFPuBpcN/mCjDx95amr/HLm14HqWS7qgljc5esS8oz1zatvA/0n9EKeB4G35P0L3AOlxO95uJLFzgAAAABJRU5ErkJggg==", idle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB40lEQVR4nN2UQU7jQBBFf8XMLgn2CeAInmRGmt2Y5WhECCcgcwNuAJxguAHhBEAQYonZIQFROAHhBDYJO4iL3zGO4sRGBIUFPMnqX2p3/e7qsgUfzBc0CE5/LS88DpYiGXiYgYJa/tM36875c9HFGCOD4MyzC/3elgKbDN8NE+5GpfKOs+KHDE0cc9+q7im0gTkgkOZi7fofJTUJjqt1UT2gnBsqsu6sXh8mBk0abFCmUCmsQCOXL/1nmEKBG0hhk6qRvVb2adDgWhq0Kj7Fb8oUdq0twfEPTzQ6Y5hCFTvOWns7dx44d2ptj3mBsFVhHEPxsjPAWb3yzeXj4cHNOEkogl2NpA5Rl/EkITfocA1V2mDojAnydmpQ4I4DBFjiMIIGklsCg3nhtXmDmuSlcnyCfq8zbmLukAnyO+gtBqSrpfJ3jpB+75aDzWcIL3pdgqPKNmu5xTgD8blFG9k1HqeLmGWMYRqBO6w2eYINxnOHJ9iXvBadB8qGEXZQQG3zmYJHvIegQ5mPwmWJF6myCI0BjaYZJl+wPOfv5asGwclPF08DP8+EJaoeCnSNesRbkyfkmSjkSCYnZ02eMJXHfB+WVef9cjL5HUBtFEt+8i+flThP32NhQhSLHZNnaPCRfH6DZxrL69FjwJbhAAAAAElFTkSuQmCC", offline: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABtklEQVR4nN2UX07CQBDGv9Eng4l4AjhCPYH1BOIJxBtQfFIhLAH1ScoNhBOIJ7DeAE8gnMCSSHyS9WsXCH9aArE86C+Z7kx2O9/O7rSCLfMPBdS9m93ROqO12NgAEe2NRPrqyulhhqmAct00hqgAusDwF0gTKVSV4/gMZgTq7iOT55EI0lIl54KOEVB3bg4j/UQ3OXbkTF07HSNQb7QAnNPm0XLCLVh0XEaLvHG+AAmrXn4XaKtSMW8Eag0PgmO6c3CBqJprM8kLw3m0rqrypYqfx6sqF20jUG9oDhPMzogqO154+Z+sYrkSX0SaWuscfYu2iM8NHi4LjJWxQOxODX1aQIY2hQISfwQkWLBqfkwfKbE4AkPd5TNDM/AOZVUHrSnQo8ARx0Dgnc80zcBOYoIHxc+wwjAKD+YFi7aKHgxZzMJGEJ5/C9FtlgRtVhDdoonAhgkq+KCbpkUx4KIux3jC9sUBLQo/ENB0ohjwbmx143Tpx6JuXYtn7SFGJBDocDylzbJW8gkrRJ4lYnKj5BMi8vSZJyd0MP0d7PIu9uBN/uWbEub5go1v+NhHN8gTCmyTvy/wA+thwXu1xfC+AAAAAElFTkSuQmCC" }, vr: { online: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB2ElEQVR4nO2TX0oCURTGvzuhUAS1A4UMestWkK0ge0wLphXUDhx3YDsYKMdHdQXaCpreggx0BxMEQdacvjs6/p1RfJBe/MHh3HvPud85lzmjsGY2BZbyPwWOama673+XGMwKjUexMMdljpswkuXXS7uLGRif5rBayPpQLUD2uV0B5RmQs7ei43IzYqrAoPP+sxZnoEmzZi/MohsS5tHOKecljMTJ5EuoMUAn+kCJyzwPm52ik9cFf+Q31Sk8PPF8IZlqoSFBETQMoBw2pmg4qBYqdLe0ACacbBlJL3wN9ze8YGMBwwaZP+L+vejchQVYfAwDih3pZ5eUUi+724mce2F7DC0kSie2wIFzlVcQS4mY7N7l8VKidGIL0K1MlE4gFBWgW5konUCIgS6AFC1AB+jmyDjXp3SImyrqCF1IjzppxUUwAYzoj5oDsKcM46xz+djGEB3nhNS5TGNA1wAuJr9NpnaVE99vcfmhgDbN0nH6MeHkcHo9fmCT/0KTZ+cCZetxBbuiaVJxOYr/AM8sDOF+TLZu7n9+9dsicsztFEwMfj4udSNtAU65nCJqpHlvHgpYzM4PC/WYZFPcwgQ6RwATfI0WhkhjdydZmRTX8O562RRYytoL/AGDj94Z7UWk7wAAAABJRU5ErkJggg==", dnd: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB4ElEQVR4nO2TUU7CQBCGZ0owMbGFG8ANxBOwBEx8s94AT6A3oNxAb8ANxDcTIKwnEG+ANwBqYiLa8d/WQsEW9IH4wpc0O7s7+/8z6S7TjtkbbOV/DN7UWXlO85YIV5ikgqVMhHjELKM85duH+mFMa/wweFWnlU8JhtgoYvprhGiSY6t2pHsjTBdAZ4mp/F3mT1gsEvO9ReytH1jHFBSQeCRybkwOOH+S7ARaEVFi0EIprhF3dN81hh/8WbKHvUekbGSmGl1jAsWuRVY7Lozxka/qNyJ0hTDEYuskR7nJshvr0tG9Dm0gLFCCJ4QhzHRr68E1zsO9WhcMC5zHAU9Vw2ORFkp4tslWrLsTbG0kTSfTYKbqLkIP7TbjdreRppNpgOHPpOmEQmkbGP5Mmk4oNFX1MQuVEIaYDQw/8GunVQyUdauSBsL0UtCDMiOObgDuspAoGBWYuWbrvqZvzD4e3x2SywSgMsajukj+G181lIgMITxlYh2/IcbegvjmQGDCFjedYf9+VmucSyAdJBZx+AVphCJK2TncLui+R99gbYkot+iTr1HiMaarcPT4EJlHhRypIlwl5UqvGMSEnZC4xiiqmjvJqgwmh0iaphuCsBB3HTq6SYobGN9O2RtsZecGXzGQ8xkyPSNaAAAAAElFTkSuQmCC", idle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB4klEQVR4nO2TQU7CUBCGZ1pxJ9ITwA1E0MSdsDTGgjfAE+gNKDfQG3ADocS4BHcmKuIN8AStupO04/8KhQIFwoK44Uua97czb/437ZRpw2wNVvI/Bs7jSUYbDKoilCWWLB4tRrjHTD0/kagZZ899mmHOwHk4zrLntSFTuNbBFV0vGucvPegxUwbq5Dz4fYdMCXGTdM2a3TCLOhB5vsUkJdy6ktg9jHYyNlCJ7PlV9FxWxQ3zrawMdwZees98eULKUhw73xiacEN0rRYejHGR08rfssg1ZABaPSRNdyfd0JVhduu0hOEBPZUfIMx3xsXbTWDg2jnUmJAyu+w0cxY+XhWBD9pLFoxix0VoKXF1Fhu08mUSsUjXK2G7q4irs9AAy9rE1QkKxQWwrE1cnaCQY+f6EGnIABXAMsePfXyKhRZNVdQA4hODkWHoYALULOOdF2C5L6wVjYvXDo1QcUzIPWSGhvQxaZfRb+O0jgosfluEvoi5E/5DjNiYcHIgXY20StJ8bX7bRyWf/DqhMcGpsBIPu43PEaoZpa5FI5A7wWkXUvTz3cHDA9xOEf58kOqVqpxTyCkkZqSRN4/qBJEyggfY9Imd9eipFKOcCnLSyPlAToOSydtocQXim2VrsJKNG/wB0ATpGYtoMg8AAAAASUVORK5CYII=", offline: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABvElEQVR4nO2TzVECQRCFX+NRqyQDyECNQIwAzAAj0MWTvzSKenJXMyADJQIxAjEDzAAPHrV9sz+4LgsUVVJe+Kq6une7p1/P7oxgwSwFZvI/AnoTlPGJJmCbfHQ2jT7b9LGClh55A2QYE9CrYBNmTwyLtHkYQmRHT7w+4xG/BKLJ7YVhkdblAs0uyBIPpACqtCFWZCu9k5FAWAh+FrMafVdPGzUnWDArnR83nvluKtr2H+mqHMr5VjKY0Njcv4Nhn2GEyBYKnCbZjcgeF3QwhXBAC+sjBPd60jiIBNq+0Y3g9KKXt8rGTT6+YlUq6nlDxlPJ6zNZ4Dqo4YvfVqTO6ft8PZO8PhMF6OYmr0/YKC9BNzd5fcJGTAwAlGghLkE3xsW1v02HSaeKfYwu4Y19ysIgOQEKoAJgHcYLc+b1EBPnHxiWETHgv9lN/xu9DCqQ8IK+03rMq8sLH0akTs6QiXrztNFttf2qAR2448qpaI4SLb/GrKVnh4oY1vygQVDEh/UAbNCyhJePnoP4Pa7cZphl7Ej/EkiId1Jj6ITeOFUnPZUjrqkj2s0rax6xVrhLN3fkCvwlS4GZLFzgGw/3yxk2IPMkAAAAAElFTkSuQmCC" } };

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
        const platformStatuses = Object.entries(statuses ?? {}).filter(([platform]) => ["desktop", "web", "mobile", "embedded", "vr"].includes(platform));
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
