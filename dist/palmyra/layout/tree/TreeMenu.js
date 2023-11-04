var En = Object.defineProperty;
var Cn = (e, t, r) => t in e ? En(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var bt = (e, t, r) => (Cn(e, typeof t != "symbol" ? t + "" : t, r), r);
import { jsx as I, jsxs as G, Fragment as nt } from "react/jsx-runtime";
import { useNavigate as $n } from "react-router-dom";
import Ie, { createContext as le, memo as it, useEffect as H, isValidElement as _n, cloneElement as St, useLayoutEffect as xn, useMemo as N, useContext as de, useState as ot, useCallback as $r, createElement as xe, PureComponent as Nn, forwardRef as at, useRef as te, useImperativeHandle as Rn } from "react";
import { g as Pn } from "../../../_commonjsHelpers-10dfc225.js";
import { ArrowDropDown as kn, ArrowRight as An } from "@mui/icons-material";
import { getIcon as Mn } from "../flexiLayout/IconProvider.js";
/* empty css                          */var Ge = { exports: {} }, Ne = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ot;
function Ln() {
  if (Ot)
    return Ne;
  Ot = 1;
  var e = Ie;
  function t(h, v) {
    return h === v && (h !== 0 || 1 / h === 1 / v) || h !== h && v !== v;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, i = e.useEffect, o = e.useLayoutEffect, a = e.useDebugValue;
  function s(h, v) {
    var b = v(), D = n({ inst: { value: b, getSnapshot: v } }), c = D[0].inst, f = D[1];
    return o(function() {
      c.value = b, c.getSnapshot = v, u(c) && f({ inst: c });
    }, [h, b, v]), i(function() {
      return u(c) && f({ inst: c }), h(function() {
        u(c) && f({ inst: c });
      });
    }, [h]), a(b), b;
  }
  function u(h) {
    var v = h.getSnapshot;
    h = h.value;
    try {
      var b = v();
      return !r(h, b);
    } catch {
      return !0;
    }
  }
  function l(h, v) {
    return v();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : s;
  return Ne.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, Ne;
}
var Re = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dt;
function Hn() {
  return Dt || (Dt = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Ie, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(p) {
      {
        for (var m = arguments.length, S = new Array(m > 1 ? m - 1 : 0), O = 1; O < m; O++)
          S[O - 1] = arguments[O];
        n("error", p, S);
      }
    }
    function n(p, m, S) {
      {
        var O = t.ReactDebugCurrentFrame, E = O.getStackAddendum();
        E !== "" && (m += "%s", S = S.concat([E]));
        var x = S.map(function($) {
          return String($);
        });
        x.unshift("Warning: " + m), Function.prototype.apply.call(console[p], console, x);
      }
    }
    function i(p, m) {
      return p === m && (p !== 0 || 1 / p === 1 / m) || p !== p && m !== m;
    }
    var o = typeof Object.is == "function" ? Object.is : i, a = e.useState, s = e.useEffect, u = e.useLayoutEffect, l = e.useDebugValue, d = !1, h = !1;
    function v(p, m, S) {
      d || e.startTransition !== void 0 && (d = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var O = m();
      if (!h) {
        var E = m();
        o(O, E) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), h = !0);
      }
      var x = a({
        inst: {
          value: O,
          getSnapshot: m
        }
      }), $ = x[0].inst, z = x[1];
      return u(function() {
        $.value = O, $.getSnapshot = m, b($) && z({
          inst: $
        });
      }, [p, O, m]), s(function() {
        b($) && z({
          inst: $
        });
        var X = function() {
          b($) && z({
            inst: $
          });
        };
        return p(X);
      }, [p]), l(O), O;
    }
    function b(p) {
      var m = p.getSnapshot, S = p.value;
      try {
        var O = m();
        return !o(S, O);
      } catch {
        return !0;
      }
    }
    function D(p, m, S) {
      return m();
    }
    var c = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", f = !c, g = f ? D : v, y = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : g;
    Re.useSyncExternalStore = y, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Re;
}
process.env.NODE_ENV === "production" ? Ge.exports = Ln() : Ge.exports = Hn();
var jn = Ge.exports;
function _r(e) {
  var t = null, r = function() {
    return t == null && (t = e()), t;
  };
  return r;
}
function Fn(e, t) {
  return e.filter(function(r) {
    return r !== t;
  });
}
function Un(e, t) {
  var r = /* @__PURE__ */ new Set(), n = function(a) {
    return r.add(a);
  };
  e.forEach(n), t.forEach(n);
  var i = [];
  return r.forEach(function(o) {
    return i.push(o);
  }), i;
}
function Vn(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function It(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function zn(e, t, r) {
  return t && It(e.prototype, t), r && It(e, r), e;
}
function Tt(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Wn = /* @__PURE__ */ function() {
  function e(t) {
    Vn(this, e), Tt(this, "entered", []), Tt(this, "isNodeInDocument", void 0), this.isNodeInDocument = t;
  }
  return zn(e, [{
    key: "enter",
    value: function(r) {
      var n = this, i = this.entered.length, o = function(s) {
        return n.isNodeInDocument(s) && (!s.contains || s.contains(r));
      };
      return this.entered = Un(this.entered.filter(o), [r]), i === 0 && this.entered.length > 0;
    }
  }, {
    key: "leave",
    value: function(r) {
      var n = this.entered.length;
      return this.entered = Fn(this.entered.filter(this.isNodeInDocument), r), n > 0 && this.entered.length === 0;
    }
  }, {
    key: "reset",
    value: function() {
      this.entered = [];
    }
  }]), e;
}(), Bn = _r(function() {
  return /firefox/i.test(navigator.userAgent);
}), xr = _r(function() {
  return !!window.safari;
});
function qn(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wt(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Gn(e, t, r) {
  return t && wt(e.prototype, t), r && wt(e, r), e;
}
function oe(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Et = /* @__PURE__ */ function() {
  function e(t, r) {
    qn(this, e), oe(this, "xs", void 0), oe(this, "ys", void 0), oe(this, "c1s", void 0), oe(this, "c2s", void 0), oe(this, "c3s", void 0);
    for (var n = t.length, i = [], o = 0; o < n; o++)
      i.push(o);
    i.sort(function(x, $) {
      return t[x] < t[$] ? -1 : 1;
    });
    for (var a = [], s = [], u, l, d = 0; d < n - 1; d++)
      u = t[d + 1] - t[d], l = r[d + 1] - r[d], a.push(u), s.push(l / u);
    for (var h = [s[0]], v = 0; v < a.length - 1; v++) {
      var b = s[v], D = s[v + 1];
      if (b * D <= 0)
        h.push(0);
      else {
        u = a[v];
        var c = a[v + 1], f = u + c;
        h.push(3 * f / ((f + c) / b + (f + u) / D));
      }
    }
    h.push(s[s.length - 1]);
    for (var g = [], y = [], p, m = 0; m < h.length - 1; m++) {
      p = s[m];
      var S = h[m], O = 1 / a[m], E = S + h[m + 1] - p - p;
      g.push((p - S - E) * O), y.push(E * O * O);
    }
    this.xs = t, this.ys = r, this.c1s = h, this.c2s = g, this.c3s = y;
  }
  return Gn(e, [{
    key: "interpolate",
    value: function(r) {
      var n = this.xs, i = this.ys, o = this.c1s, a = this.c2s, s = this.c3s, u = n.length - 1;
      if (r === n[u])
        return i[u];
      for (var l = 0, d = s.length - 1, h; l <= d; ) {
        h = Math.floor(0.5 * (l + d));
        var v = n[h];
        if (v < r)
          l = h + 1;
        else if (v > r)
          d = h - 1;
        else
          return i[h];
      }
      u = Math.max(0, d);
      var b = r - n[u], D = b * b;
      return i[u] + o[u] * b + a[u] * D + s[u] * b * D;
    }
  }]), e;
}(), Kn = 1;
function Nr(e) {
  var t = e.nodeType === Kn ? e : e.parentElement;
  if (!t)
    return null;
  var r = t.getBoundingClientRect(), n = r.top, i = r.left;
  return {
    x: i,
    y: n
  };
}
function fe(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function Yn(e) {
  var t;
  return e.nodeName === "IMG" && (Bn() || !((t = document.documentElement) !== null && t !== void 0 && t.contains(e)));
}
function Xn(e, t, r, n) {
  var i = e ? t.width : r, o = e ? t.height : n;
  return xr() && e && (o /= window.devicePixelRatio, i /= window.devicePixelRatio), {
    dragPreviewWidth: i,
    dragPreviewHeight: o
  };
}
function Qn(e, t, r, n, i) {
  var o = Yn(t), a = o ? e : t, s = Nr(a), u = {
    x: r.x - s.x,
    y: r.y - s.y
  }, l = e.offsetWidth, d = e.offsetHeight, h = n.anchorX, v = n.anchorY, b = Xn(o, t, l, d), D = b.dragPreviewWidth, c = b.dragPreviewHeight, f = function() {
    var E = new Et([0, 0.5, 1], [
      // Dock to the top
      u.y,
      // Align at the center
      u.y / d * c,
      // Dock to the bottom
      u.y + c - d
    ]), x = E.interpolate(v);
    return xr() && o && (x += (window.devicePixelRatio - 1) * c), x;
  }, g = function() {
    var E = new Et([0, 0.5, 1], [
      // Dock to the left
      u.x,
      // Align at the center
      u.x / l * D,
      // Dock to the right
      u.x + D - l
    ]);
    return E.interpolate(h);
  }, y = i.offsetX, p = i.offsetY, m = y === 0 || y, S = p === 0 || p;
  return {
    x: m ? y : g(),
    y: S ? p : f()
  };
}
var Rr = "__NATIVE_FILE__", Pr = "__NATIVE_URL__", kr = "__NATIVE_TEXT__", Ar = "__NATIVE_HTML__";
const Ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FILE: Rr,
  HTML: Ar,
  TEXT: kr,
  URL: Pr
}, Symbol.toStringTag, { value: "Module" }));
function Pe(e, t, r) {
  var n = t.reduce(function(i, o) {
    return i || e.getData(o);
  }, "");
  return n ?? r;
}
var Q;
function he(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Ke = (Q = {}, he(Q, Rr, {
  exposeProperties: {
    files: function(t) {
      return Array.prototype.slice.call(t.files);
    },
    items: function(t) {
      return t.items;
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Files"]
}), he(Q, Ar, {
  exposeProperties: {
    html: function(t, r) {
      return Pe(t, r, "");
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Html", "text/html"]
}), he(Q, Pr, {
  exposeProperties: {
    urls: function(t, r) {
      return Pe(t, r, "").split(`
`);
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Url", "text/uri-list"]
}), he(Q, kr, {
  exposeProperties: {
    text: function(t, r) {
      return Pe(t, r, "");
    },
    dataTransfer: function(t) {
      return t;
    }
  },
  matchesTypes: ["Text", "text/plain"]
}), Q);
function Jn(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $t(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Zn(e, t, r) {
  return t && $t(e.prototype, t), r && $t(e, r), e;
}
function _t(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var ei = /* @__PURE__ */ function() {
  function e(t) {
    Jn(this, e), _t(this, "item", void 0), _t(this, "config", void 0), this.config = t, this.item = {}, this.initializeExposedProperties();
  }
  return Zn(e, [{
    key: "initializeExposedProperties",
    value: function() {
      var r = this;
      Object.keys(this.config.exposeProperties).forEach(function(n) {
        Object.defineProperty(r.item, n, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return console.warn(`Browser doesn't allow reading "`.concat(n, '" until the drop event.')), null;
          }
        });
      });
    }
  }, {
    key: "loadDataTransfer",
    value: function(r) {
      var n = this;
      if (r) {
        var i = {};
        Object.keys(this.config.exposeProperties).forEach(function(o) {
          i[o] = {
            value: n.config.exposeProperties[o](r, n.config.matchesTypes),
            configurable: !0,
            enumerable: !0
          };
        }), Object.defineProperties(this.item, i);
      }
    }
  }, {
    key: "canDrag",
    value: function() {
      return !0;
    }
  }, {
    key: "beginDrag",
    value: function() {
      return this.item;
    }
  }, {
    key: "isDragging",
    value: function(r, n) {
      return n === r.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function() {
    }
  }]), e;
}();
function ti(e, t) {
  var r = new ei(Ke[e]);
  return r.loadDataTransfer(t), r;
}
function ke(e) {
  if (!e)
    return null;
  var t = Array.prototype.slice.call(e.types || []);
  return Object.keys(Ke).filter(function(r) {
    var n = Ke[r].matchesTypes;
    return n.some(function(i) {
      return t.indexOf(i) > -1;
    });
  })[0] || null;
}
function ri(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xt(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ni(e, t, r) {
  return t && xt(e.prototype, t), r && xt(e, r), e;
}
function Ae(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var ii = /* @__PURE__ */ function() {
  function e(t, r) {
    ri(this, e), Ae(this, "ownerDocument", null), Ae(this, "globalContext", void 0), Ae(this, "optionsArgs", void 0), this.globalContext = t, this.optionsArgs = r;
  }
  return ni(e, [{
    key: "window",
    get: function() {
      if (this.globalContext)
        return this.globalContext;
      if (typeof window < "u")
        return window;
    }
  }, {
    key: "document",
    get: function() {
      var r;
      return (r = this.globalContext) !== null && r !== void 0 && r.document ? this.globalContext.document : this.window ? this.window.document : void 0;
    }
  }, {
    key: "rootElement",
    get: function() {
      var r;
      return ((r = this.optionsArgs) === null || r === void 0 ? void 0 : r.rootElement) || this.window;
    }
  }]), e;
}();
function Nt(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nt(Object(r), !0).forEach(function(n) {
      w(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nt(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oi(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Pt(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ai(e, t, r) {
  return t && Pt(e.prototype, t), r && Pt(e, r), e;
}
function w(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var si = /* @__PURE__ */ function() {
  function e(t, r, n) {
    var i = this;
    oi(this, e), w(this, "options", void 0), w(this, "actions", void 0), w(this, "monitor", void 0), w(this, "registry", void 0), w(this, "enterLeaveCounter", void 0), w(this, "sourcePreviewNodes", /* @__PURE__ */ new Map()), w(this, "sourcePreviewNodeOptions", /* @__PURE__ */ new Map()), w(this, "sourceNodes", /* @__PURE__ */ new Map()), w(this, "sourceNodeOptions", /* @__PURE__ */ new Map()), w(this, "dragStartSourceIds", null), w(this, "dropTargetIds", []), w(this, "dragEnterTargetIds", []), w(this, "currentNativeSource", null), w(this, "currentNativeHandle", null), w(this, "currentDragSourceNode", null), w(this, "altKeyPressed", !1), w(this, "mouseMoveTimeoutTimer", null), w(this, "asyncEndDragFrameId", null), w(this, "dragOverTargetIds", null), w(this, "lastClientOffset", null), w(this, "hoverRafId", null), w(this, "getSourceClientOffset", function(o) {
      var a = i.sourceNodes.get(o);
      return a && Nr(a) || null;
    }), w(this, "endDragNativeItem", function() {
      i.isDraggingNativeItem() && (i.actions.endDrag(), i.currentNativeHandle && i.registry.removeSource(i.currentNativeHandle), i.currentNativeHandle = null, i.currentNativeSource = null);
    }), w(this, "isNodeInDocument", function(o) {
      return !!(o && i.document && i.document.body && i.document.body.contains(o));
    }), w(this, "endDragIfSourceWasRemovedFromDOM", function() {
      var o = i.currentDragSourceNode;
      o == null || i.isNodeInDocument(o) || i.clearCurrentDragSourceNode() && i.monitor.isDragging() && i.actions.endDrag();
    }), w(this, "handleTopDragStartCapture", function() {
      i.clearCurrentDragSourceNode(), i.dragStartSourceIds = [];
    }), w(this, "handleTopDragStart", function(o) {
      if (!o.defaultPrevented) {
        var a = i.dragStartSourceIds;
        i.dragStartSourceIds = null;
        var s = fe(o);
        i.monitor.isDragging() && i.actions.endDrag(), i.actions.beginDrag(a || [], {
          publishSource: !1,
          getSourceClientOffset: i.getSourceClientOffset,
          clientOffset: s
        });
        var u = o.dataTransfer, l = ke(u);
        if (i.monitor.isDragging()) {
          if (u && typeof u.setDragImage == "function") {
            var d = i.monitor.getSourceId(), h = i.sourceNodes.get(d), v = i.sourcePreviewNodes.get(d) || h;
            if (v) {
              var b = i.getCurrentSourcePreviewNodeOptions(), D = b.anchorX, c = b.anchorY, f = b.offsetX, g = b.offsetY, y = {
                anchorX: D,
                anchorY: c
              }, p = {
                offsetX: f,
                offsetY: g
              }, m = Qn(h, v, s, y, p);
              u.setDragImage(v, m.x, m.y);
            }
          }
          try {
            u == null || u.setData("application/json", {});
          } catch {
          }
          i.setCurrentDragSourceNode(o.target);
          var S = i.getCurrentSourcePreviewNodeOptions(), O = S.captureDraggingState;
          O ? i.actions.publishDragSource() : setTimeout(function() {
            return i.actions.publishDragSource();
          }, 0);
        } else if (l)
          i.beginDragNativeItem(l);
        else {
          if (u && !u.types && (o.target && !o.target.hasAttribute || !o.target.hasAttribute("draggable")))
            return;
          o.preventDefault();
        }
      }
    }), w(this, "handleTopDragEndCapture", function() {
      i.clearCurrentDragSourceNode() && i.monitor.isDragging() && i.actions.endDrag();
    }), w(this, "handleTopDragEnterCapture", function(o) {
      i.dragEnterTargetIds = [];
      var a = i.enterLeaveCounter.enter(o.target);
      if (!(!a || i.monitor.isDragging())) {
        var s = o.dataTransfer, u = ke(s);
        u && i.beginDragNativeItem(u, s);
      }
    }), w(this, "handleTopDragEnter", function(o) {
      var a = i.dragEnterTargetIds;
      if (i.dragEnterTargetIds = [], !!i.monitor.isDragging()) {
        i.altKeyPressed = o.altKey, a.length > 0 && i.actions.hover(a, {
          clientOffset: fe(o)
        });
        var s = a.some(function(u) {
          return i.monitor.canDropOnTarget(u);
        });
        s && (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = i.getCurrentDropEffect()));
      }
    }), w(this, "handleTopDragOverCapture", function() {
      i.dragOverTargetIds = [];
    }), w(this, "handleTopDragOver", function(o) {
      var a = i.dragOverTargetIds;
      if (i.dragOverTargetIds = [], !i.monitor.isDragging()) {
        o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = "none");
        return;
      }
      i.altKeyPressed = o.altKey, i.lastClientOffset = fe(o), i.hoverRafId === null && typeof requestAnimationFrame < "u" && (i.hoverRafId = requestAnimationFrame(function() {
        i.monitor.isDragging() && i.actions.hover(a || [], {
          clientOffset: i.lastClientOffset
        }), i.hoverRafId = null;
      }));
      var s = (a || []).some(function(u) {
        return i.monitor.canDropOnTarget(u);
      });
      s ? (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = i.getCurrentDropEffect())) : i.isDraggingNativeItem() ? o.preventDefault() : (o.preventDefault(), o.dataTransfer && (o.dataTransfer.dropEffect = "none"));
    }), w(this, "handleTopDragLeaveCapture", function(o) {
      i.isDraggingNativeItem() && o.preventDefault();
      var a = i.enterLeaveCounter.leave(o.target);
      a && i.isDraggingNativeItem() && setTimeout(function() {
        return i.endDragNativeItem();
      }, 0);
    }), w(this, "handleTopDropCapture", function(o) {
      if (i.dropTargetIds = [], i.isDraggingNativeItem()) {
        var a;
        o.preventDefault(), (a = i.currentNativeSource) === null || a === void 0 || a.loadDataTransfer(o.dataTransfer);
      } else
        ke(o.dataTransfer) && o.preventDefault();
      i.enterLeaveCounter.reset();
    }), w(this, "handleTopDrop", function(o) {
      var a = i.dropTargetIds;
      i.dropTargetIds = [], i.actions.hover(a, {
        clientOffset: fe(o)
      }), i.actions.drop({
        dropEffect: i.getCurrentDropEffect()
      }), i.isDraggingNativeItem() ? i.endDragNativeItem() : i.monitor.isDragging() && i.actions.endDrag();
    }), w(this, "handleSelectStart", function(o) {
      var a = o.target;
      typeof a.dragDrop == "function" && (a.tagName === "INPUT" || a.tagName === "SELECT" || a.tagName === "TEXTAREA" || a.isContentEditable || (o.preventDefault(), a.dragDrop()));
    }), this.options = new ii(r, n), this.actions = t.getActions(), this.monitor = t.getMonitor(), this.registry = t.getRegistry(), this.enterLeaveCounter = new Wn(this.isNodeInDocument);
  }
  return ai(e, [{
    key: "profile",
    value: function() {
      var r, n;
      return {
        sourcePreviewNodes: this.sourcePreviewNodes.size,
        sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
        sourceNodeOptions: this.sourceNodeOptions.size,
        sourceNodes: this.sourceNodes.size,
        dragStartSourceIds: ((r = this.dragStartSourceIds) === null || r === void 0 ? void 0 : r.length) || 0,
        dropTargetIds: this.dropTargetIds.length,
        dragEnterTargetIds: this.dragEnterTargetIds.length,
        dragOverTargetIds: ((n = this.dragOverTargetIds) === null || n === void 0 ? void 0 : n.length) || 0
      };
    }
    // public for test
  }, {
    key: "window",
    get: function() {
      return this.options.window;
    }
  }, {
    key: "document",
    get: function() {
      return this.options.document;
    }
    /**
     * Get the root element to use for event subscriptions
     */
  }, {
    key: "rootElement",
    get: function() {
      return this.options.rootElement;
    }
  }, {
    key: "setup",
    value: function() {
      var r = this.rootElement;
      if (r !== void 0) {
        if (r.__isReactDndBackendSetUp)
          throw new Error("Cannot have two HTML5 backends at the same time.");
        r.__isReactDndBackendSetUp = !0, this.addEventListeners(r);
      }
    }
  }, {
    key: "teardown",
    value: function() {
      var r = this.rootElement;
      if (r !== void 0 && (r.__isReactDndBackendSetUp = !1, this.removeEventListeners(this.rootElement), this.clearCurrentDragSourceNode(), this.asyncEndDragFrameId)) {
        var n;
        (n = this.window) === null || n === void 0 || n.cancelAnimationFrame(this.asyncEndDragFrameId);
      }
    }
  }, {
    key: "connectDragPreview",
    value: function(r, n, i) {
      var o = this;
      return this.sourcePreviewNodeOptions.set(r, i), this.sourcePreviewNodes.set(r, n), function() {
        o.sourcePreviewNodes.delete(r), o.sourcePreviewNodeOptions.delete(r);
      };
    }
  }, {
    key: "connectDragSource",
    value: function(r, n, i) {
      var o = this;
      this.sourceNodes.set(r, n), this.sourceNodeOptions.set(r, i);
      var a = function(l) {
        return o.handleDragStart(l, r);
      }, s = function(l) {
        return o.handleSelectStart(l);
      };
      return n.setAttribute("draggable", "true"), n.addEventListener("dragstart", a), n.addEventListener("selectstart", s), function() {
        o.sourceNodes.delete(r), o.sourceNodeOptions.delete(r), n.removeEventListener("dragstart", a), n.removeEventListener("selectstart", s), n.setAttribute("draggable", "false");
      };
    }
  }, {
    key: "connectDropTarget",
    value: function(r, n) {
      var i = this, o = function(l) {
        return i.handleDragEnter(l, r);
      }, a = function(l) {
        return i.handleDragOver(l, r);
      }, s = function(l) {
        return i.handleDrop(l, r);
      };
      return n.addEventListener("dragenter", o), n.addEventListener("dragover", a), n.addEventListener("drop", s), function() {
        n.removeEventListener("dragenter", o), n.removeEventListener("dragover", a), n.removeEventListener("drop", s);
      };
    }
  }, {
    key: "addEventListeners",
    value: function(r) {
      r.addEventListener && (r.addEventListener("dragstart", this.handleTopDragStart), r.addEventListener("dragstart", this.handleTopDragStartCapture, !0), r.addEventListener("dragend", this.handleTopDragEndCapture, !0), r.addEventListener("dragenter", this.handleTopDragEnter), r.addEventListener("dragenter", this.handleTopDragEnterCapture, !0), r.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0), r.addEventListener("dragover", this.handleTopDragOver), r.addEventListener("dragover", this.handleTopDragOverCapture, !0), r.addEventListener("drop", this.handleTopDrop), r.addEventListener("drop", this.handleTopDropCapture, !0));
    }
  }, {
    key: "removeEventListeners",
    value: function(r) {
      r.removeEventListener && (r.removeEventListener("dragstart", this.handleTopDragStart), r.removeEventListener("dragstart", this.handleTopDragStartCapture, !0), r.removeEventListener("dragend", this.handleTopDragEndCapture, !0), r.removeEventListener("dragenter", this.handleTopDragEnter), r.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0), r.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0), r.removeEventListener("dragover", this.handleTopDragOver), r.removeEventListener("dragover", this.handleTopDragOverCapture, !0), r.removeEventListener("drop", this.handleTopDrop), r.removeEventListener("drop", this.handleTopDropCapture, !0));
    }
  }, {
    key: "getCurrentSourceNodeOptions",
    value: function() {
      var r = this.monitor.getSourceId(), n = this.sourceNodeOptions.get(r);
      return Rt({
        dropEffect: this.altKeyPressed ? "copy" : "move"
      }, n || {});
    }
  }, {
    key: "getCurrentDropEffect",
    value: function() {
      return this.isDraggingNativeItem() ? "copy" : this.getCurrentSourceNodeOptions().dropEffect;
    }
  }, {
    key: "getCurrentSourcePreviewNodeOptions",
    value: function() {
      var r = this.monitor.getSourceId(), n = this.sourcePreviewNodeOptions.get(r);
      return Rt({
        anchorX: 0.5,
        anchorY: 0.5,
        captureDraggingState: !1
      }, n || {});
    }
  }, {
    key: "isDraggingNativeItem",
    value: function() {
      var r = this.monitor.getItemType();
      return Object.keys(Ct).some(function(n) {
        return Ct[n] === r;
      });
    }
  }, {
    key: "beginDragNativeItem",
    value: function(r, n) {
      this.clearCurrentDragSourceNode(), this.currentNativeSource = ti(r, n), this.currentNativeHandle = this.registry.addSource(r, this.currentNativeSource), this.actions.beginDrag([this.currentNativeHandle]);
    }
  }, {
    key: "setCurrentDragSourceNode",
    value: function(r) {
      var n = this;
      this.clearCurrentDragSourceNode(), this.currentDragSourceNode = r;
      var i = 1e3;
      this.mouseMoveTimeoutTimer = setTimeout(function() {
        var o;
        return (o = n.rootElement) === null || o === void 0 ? void 0 : o.addEventListener("mousemove", n.endDragIfSourceWasRemovedFromDOM, !0);
      }, i);
    }
  }, {
    key: "clearCurrentDragSourceNode",
    value: function() {
      if (this.currentDragSourceNode) {
        if (this.currentDragSourceNode = null, this.rootElement) {
          var r;
          (r = this.window) === null || r === void 0 || r.clearTimeout(this.mouseMoveTimeoutTimer || void 0), this.rootElement.removeEventListener("mousemove", this.endDragIfSourceWasRemovedFromDOM, !0);
        }
        return this.mouseMoveTimeoutTimer = null, !0;
      }
      return !1;
    }
  }, {
    key: "handleDragStart",
    value: function(r, n) {
      r.defaultPrevented || (this.dragStartSourceIds || (this.dragStartSourceIds = []), this.dragStartSourceIds.unshift(n));
    }
  }, {
    key: "handleDragEnter",
    value: function(r, n) {
      this.dragEnterTargetIds.unshift(n);
    }
  }, {
    key: "handleDragOver",
    value: function(r, n) {
      this.dragOverTargetIds === null && (this.dragOverTargetIds = []), this.dragOverTargetIds.unshift(n);
    }
  }, {
    key: "handleDrop",
    value: function(r, n) {
      this.dropTargetIds.unshift(n);
    }
  }]), e;
}(), ge;
function ui() {
  return ge || (ge = new Image(), ge.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), ge;
}
var ci = function(t, r, n) {
  return new si(t, r, n);
}, Mr = le({
  dragDropManager: void 0
}), L;
(function(e) {
  e.SOURCE = "SOURCE", e.TARGET = "TARGET";
})(L || (L = {}));
function T(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    n[i - 2] = arguments[i];
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error("invariant requires an error message argument");
  if (!e) {
    var o;
    if (t === void 0)
      o = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var a = 0;
      o = new Error(t.replace(/%s/g, function() {
        return n[a++];
      })), o.name = "Invariant Violation";
    }
    throw o.framesToPop = 1, o;
  }
}
var st = "dnd-core/INIT_COORDS", Te = "dnd-core/BEGIN_DRAG", ut = "dnd-core/PUBLISH_DRAG_SOURCE", we = "dnd-core/HOVER", Ee = "dnd-core/DROP", Ce = "dnd-core/END_DRAG";
function kt(e, t) {
  return {
    type: st,
    payload: {
      sourceClientOffset: t || null,
      clientOffset: e || null
    }
  };
}
function pe(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? pe = function(r) {
    return typeof r;
  } : pe = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, pe(e);
}
function li(e, t, r) {
  return t.split(".").reduce(function(n, i) {
    return n && n[i] ? n[i] : r || null;
  }, e);
}
function di(e, t) {
  return e.filter(function(r) {
    return r !== t;
  });
}
function Lr(e) {
  return pe(e) === "object";
}
function fi(e, t) {
  var r = /* @__PURE__ */ new Map(), n = function(a) {
    r.set(a, r.has(a) ? r.get(a) + 1 : 1);
  };
  e.forEach(n), t.forEach(n);
  var i = [];
  return r.forEach(function(o, a) {
    o === 1 && i.push(a);
  }), i;
}
function hi(e, t) {
  return e.filter(function(r) {
    return t.indexOf(r) > -1;
  });
}
var gi = {
  type: st,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function pi(e) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      publishSource: !0
    }, i = n.publishSource, o = i === void 0 ? !0 : i, a = n.clientOffset, s = n.getSourceClientOffset, u = e.getMonitor(), l = e.getRegistry();
    e.dispatch(kt(a)), vi(r, u, l);
    var d = bi(r, u);
    if (d === null) {
      e.dispatch(gi);
      return;
    }
    var h = null;
    if (a) {
      if (!s)
        throw new Error("getSourceClientOffset must be defined");
      yi(s), h = s(d);
    }
    e.dispatch(kt(a, h));
    var v = l.getSource(d), b = v.beginDrag(u, d);
    if (b != null) {
      mi(b), l.pinSource(d);
      var D = l.getSourceType(d);
      return {
        type: Te,
        payload: {
          itemType: D,
          item: b,
          sourceId: d,
          clientOffset: a || null,
          sourceClientOffset: h || null,
          isSourcePublic: !!o
        }
      };
    }
  };
}
function vi(e, t, r) {
  T(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(n) {
    T(r.getSource(n), "Expected sourceIds to be registered.");
  });
}
function yi(e) {
  T(typeof e == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function mi(e) {
  T(Lr(e), "Item must be an object.");
}
function bi(e, t) {
  for (var r = null, n = e.length - 1; n >= 0; n--)
    if (t.canDragSource(e[n])) {
      r = e[n];
      break;
    }
  return r;
}
function Si(e) {
  return function() {
    var r = e.getMonitor();
    if (r.isDragging())
      return {
        type: ut
      };
  };
}
function Ye(e, t) {
  return t === null ? e === null : Array.isArray(e) ? e.some(function(r) {
    return r === t;
  }) : e === t;
}
function Oi(e) {
  return function(r) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.clientOffset;
    Di(r);
    var o = r.slice(0), a = e.getMonitor(), s = e.getRegistry();
    Ii(o, a, s);
    var u = a.getItemType();
    return Ti(o, s, u), wi(o, a, s), {
      type: we,
      payload: {
        targetIds: o,
        clientOffset: i || null
      }
    };
  };
}
function Di(e) {
  T(Array.isArray(e), "Expected targetIds to be an array.");
}
function Ii(e, t, r) {
  T(t.isDragging(), "Cannot call hover while not dragging."), T(!t.didDrop(), "Cannot call hover after drop.");
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    T(e.lastIndexOf(i) === n, "Expected targetIds to be unique in the passed array.");
    var o = r.getTarget(i);
    T(o, "Expected targetIds to be registered.");
  }
}
function Ti(e, t, r) {
  for (var n = e.length - 1; n >= 0; n--) {
    var i = e[n], o = t.getTargetType(i);
    Ye(o, r) || e.splice(n, 1);
  }
}
function wi(e, t, r) {
  e.forEach(function(n) {
    var i = r.getTarget(n);
    i.hover(t, n);
  });
}
function At(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? At(Object(r), !0).forEach(function(n) {
      Ei(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : At(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ei(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ci(e) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.getMonitor(), i = e.getRegistry();
    $i(n);
    var o = Ni(n);
    o.forEach(function(a, s) {
      var u = _i(a, s, i, n), l = {
        type: Ee,
        payload: {
          dropResult: Mt(Mt({}, r), u)
        }
      };
      e.dispatch(l);
    });
  };
}
function $i(e) {
  T(e.isDragging(), "Cannot call drop while not dragging."), T(!e.didDrop(), "Cannot call drop twice during one drag operation.");
}
function _i(e, t, r, n) {
  var i = r.getTarget(e), o = i ? i.drop(n, e) : void 0;
  return xi(o), typeof o > "u" && (o = t === 0 ? {} : n.getDropResult()), o;
}
function xi(e) {
  T(typeof e > "u" || Lr(e), "Drop result must either be an object or undefined.");
}
function Ni(e) {
  var t = e.getTargetIds().filter(e.canDropOnTarget, e);
  return t.reverse(), t;
}
function Ri(e) {
  return function() {
    var r = e.getMonitor(), n = e.getRegistry();
    Pi(r);
    var i = r.getSourceId();
    if (i != null) {
      var o = n.getSource(i, !0);
      o.endDrag(r, i), n.unpinSource();
    }
    return {
      type: Ce
    };
  };
}
function Pi(e) {
  T(e.isDragging(), "Cannot call endDrag while not dragging.");
}
function ki(e) {
  return {
    beginDrag: pi(e),
    publishDragSource: Si(e),
    hover: Oi(e),
    drop: Ci(e),
    endDrag: Ri(e)
  };
}
function Ai(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Lt(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Mi(e, t, r) {
  return t && Lt(e.prototype, t), r && Lt(e, r), e;
}
function ae(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Li = /* @__PURE__ */ function() {
  function e(t, r) {
    var n = this;
    Ai(this, e), ae(this, "store", void 0), ae(this, "monitor", void 0), ae(this, "backend", void 0), ae(this, "isSetUp", !1), ae(this, "handleRefCountChange", function() {
      var i = n.store.getState().refCount > 0;
      n.backend && (i && !n.isSetUp ? (n.backend.setup(), n.isSetUp = !0) : !i && n.isSetUp && (n.backend.teardown(), n.isSetUp = !1));
    }), this.store = t, this.monitor = r, t.subscribe(this.handleRefCountChange);
  }
  return Mi(e, [{
    key: "receiveBackend",
    value: function(r) {
      this.backend = r;
    }
  }, {
    key: "getMonitor",
    value: function() {
      return this.monitor;
    }
  }, {
    key: "getBackend",
    value: function() {
      return this.backend;
    }
  }, {
    key: "getRegistry",
    value: function() {
      return this.monitor.registry;
    }
  }, {
    key: "getActions",
    value: function() {
      var r = this, n = this.store.dispatch;
      function i(a) {
        return function() {
          for (var s = arguments.length, u = new Array(s), l = 0; l < s; l++)
            u[l] = arguments[l];
          var d = a.apply(r, u);
          typeof d < "u" && n(d);
        };
      }
      var o = ki(this);
      return Object.keys(o).reduce(function(a, s) {
        var u = o[s];
        return a[s] = i(u), a;
      }, {});
    }
  }, {
    key: "dispatch",
    value: function(r) {
      this.store.dispatch(r);
    }
  }]), e;
}();
function k(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var Ht = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}(), Me = function() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, q = {
  INIT: "@@redux/INIT" + Me(),
  REPLACE: "@@redux/REPLACE" + Me(),
  PROBE_UNKNOWN_ACTION: function() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + Me();
  }
};
function Hr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Hi(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  var t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (Ui(e))
    return "date";
  if (Fi(e))
    return "error";
  var r = ji(e);
  switch (r) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return r;
  }
  return t.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ji(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function Fi(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function Ui(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function W(e) {
  var t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Hi(e)), t;
}
function ct(e, t, r) {
  var n;
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? k(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? k(1) : "Expected the enhancer to be a function. Instead, received: '" + W(r) + "'");
    return r(ct)(e, t);
  }
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? k(2) : "Expected the root reducer to be a function. Instead, received: '" + W(e) + "'");
  var i = e, o = t, a = [], s = a, u = !1;
  function l() {
    s === a && (s = a.slice());
  }
  function d() {
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? k(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function h(c) {
    if (typeof c != "function")
      throw new Error(process.env.NODE_ENV === "production" ? k(4) : "Expected the listener to be a function. Instead, received: '" + W(c) + "'");
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? k(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    var f = !0;
    return l(), s.push(c), function() {
      if (f) {
        if (u)
          throw new Error(process.env.NODE_ENV === "production" ? k(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        f = !1, l();
        var y = s.indexOf(c);
        s.splice(y, 1), a = null;
      }
    };
  }
  function v(c) {
    if (!Hr(c))
      throw new Error(process.env.NODE_ENV === "production" ? k(7) : "Actions must be plain objects. Instead, the actual type was: '" + W(c) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    if (typeof c.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? k(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (u)
      throw new Error(process.env.NODE_ENV === "production" ? k(9) : "Reducers may not dispatch actions.");
    try {
      u = !0, o = i(o, c);
    } finally {
      u = !1;
    }
    for (var f = a = s, g = 0; g < f.length; g++) {
      var y = f[g];
      y();
    }
    return c;
  }
  function b(c) {
    if (typeof c != "function")
      throw new Error(process.env.NODE_ENV === "production" ? k(10) : "Expected the nextReducer to be a function. Instead, received: '" + W(c));
    i = c, v({
      type: q.REPLACE
    });
  }
  function D() {
    var c, f = h;
    return c = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function(y) {
        if (typeof y != "object" || y === null)
          throw new Error(process.env.NODE_ENV === "production" ? k(11) : "Expected the observer to be an object. Instead, received: '" + W(y) + "'");
        function p() {
          y.next && y.next(d());
        }
        p();
        var m = f(p);
        return {
          unsubscribe: m
        };
      }
    }, c[Ht] = function() {
      return this;
    }, c;
  }
  return v({
    type: q.INIT
  }), n = {
    dispatch: v,
    subscribe: h,
    getState: d,
    replaceReducer: b
  }, n[Ht] = D, n;
}
function jt(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Vi(e, t, r, n) {
  var i = Object.keys(t), o = r && r.type === q.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Hr(e))
    return "The " + o + ' has unexpected type of "' + W(e) + '". Expected argument to be an object with the following ' + ('keys: "' + i.join('", "') + '"');
  var a = Object.keys(e).filter(function(s) {
    return !t.hasOwnProperty(s) && !n[s];
  });
  if (a.forEach(function(s) {
    n[s] = !0;
  }), !(r && r.type === q.REPLACE) && a.length > 0)
    return "Unexpected " + (a.length > 1 ? "keys" : "key") + " " + ('"' + a.join('", "') + '" found in ' + o + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + i.join('", "') + '". Unexpected keys will be ignored.');
}
function zi(e) {
  Object.keys(e).forEach(function(t) {
    var r = e[t], n = r(void 0, {
      type: q.INIT
    });
    if (typeof n > "u")
      throw new Error(process.env.NODE_ENV === "production" ? k(12) : 'The slice reducer for key "' + t + `" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: q.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? k(13) : 'The slice reducer for key "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle '" + q.INIT + `' or other actions in "redux/*" `) + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.");
  });
}
function Ft(e) {
  for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
    var i = t[n];
    process.env.NODE_ENV !== "production" && typeof e[i] > "u" && jt('No reducer provided for key "' + i + '"'), typeof e[i] == "function" && (r[i] = e[i]);
  }
  var o = Object.keys(r), a;
  process.env.NODE_ENV !== "production" && (a = {});
  var s;
  try {
    zi(r);
  } catch (u) {
    s = u;
  }
  return function(l, d) {
    if (l === void 0 && (l = {}), s)
      throw s;
    if (process.env.NODE_ENV !== "production") {
      var h = Vi(l, r, d, a);
      h && jt(h);
    }
    for (var v = !1, b = {}, D = 0; D < o.length; D++) {
      var c = o[D], f = r[c], g = l[c], y = f(g, d);
      if (typeof y > "u") {
        var p = d && d.type;
        throw new Error(process.env.NODE_ENV === "production" ? k(14) : "When called with an action of type " + (p ? '"' + String(p) + '"' : "(unknown type)") + ', the slice reducer for key "' + c + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.');
      }
      b[c] = y, v = v || y !== g;
    }
    return v = v || o.length !== Object.keys(l).length, v ? b : l;
  };
}
var Wi = function(t, r) {
  return t === r;
};
function Bi(e, t) {
  return !e && !t ? !0 : !e || !t ? !1 : e.x === t.x && e.y === t.y;
}
function qi(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Wi;
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; ++n)
    if (!r(e[n], t[n]))
      return !1;
  return !0;
}
function Ut(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ut(Object(r), !0).forEach(function(n) {
      Gi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ut(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Gi(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var zt = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function Ki() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zt, t = arguments.length > 1 ? arguments[1] : void 0, r = t.payload;
  switch (t.type) {
    case st:
    case Te:
      return {
        initialSourceClientOffset: r.sourceClientOffset,
        initialClientOffset: r.clientOffset,
        clientOffset: r.clientOffset
      };
    case we:
      return Bi(e.clientOffset, r.clientOffset) ? e : Vt(Vt({}, e), {}, {
        clientOffset: r.clientOffset
      });
    case Ce:
    case Ee:
      return zt;
    default:
      return e;
  }
}
var lt = "dnd-core/ADD_SOURCE", dt = "dnd-core/ADD_TARGET", ft = "dnd-core/REMOVE_SOURCE", $e = "dnd-core/REMOVE_TARGET";
function Yi(e) {
  return {
    type: lt,
    payload: {
      sourceId: e
    }
  };
}
function Xi(e) {
  return {
    type: dt,
    payload: {
      targetId: e
    }
  };
}
function Qi(e) {
  return {
    type: ft,
    payload: {
      sourceId: e
    }
  };
}
function Ji(e) {
  return {
    type: $e,
    payload: {
      targetId: e
    }
  };
}
function Wt(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wt(Object(r), !0).forEach(function(n) {
      Zi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wt(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Zi(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var eo = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null
};
function to() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : eo, t = arguments.length > 1 ? arguments[1] : void 0, r = t.payload;
  switch (t.type) {
    case Te:
      return M(M({}, e), {}, {
        itemType: r.itemType,
        item: r.item,
        sourceId: r.sourceId,
        isSourcePublic: r.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case ut:
      return M(M({}, e), {}, {
        isSourcePublic: !0
      });
    case we:
      return M(M({}, e), {}, {
        targetIds: r.targetIds
      });
    case $e:
      return e.targetIds.indexOf(r.targetId) === -1 ? e : M(M({}, e), {}, {
        targetIds: di(e.targetIds, r.targetId)
      });
    case Ee:
      return M(M({}, e), {}, {
        dropResult: r.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case Ce:
      return M(M({}, e), {}, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return e;
  }
}
function ro() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case lt:
    case dt:
      return e + 1;
    case ft:
    case $e:
      return e - 1;
    default:
      return e;
  }
}
var De = [], ht = [];
De.__IS_NONE__ = !0;
ht.__IS_ALL__ = !0;
function no(e, t) {
  if (e === De)
    return !1;
  if (e === ht || typeof t > "u")
    return !0;
  var r = hi(t, e);
  return r.length > 0;
}
function io() {
  var e = arguments.length > 1 ? arguments[1] : void 0;
  switch (e.type) {
    case we:
      break;
    case lt:
    case dt:
    case $e:
    case ft:
      return De;
    case Te:
    case ut:
    case Ce:
    case Ee:
    default:
      return ht;
  }
  var t = e.payload, r = t.targetIds, n = r === void 0 ? [] : r, i = t.prevTargetIds, o = i === void 0 ? [] : i, a = fi(n, o), s = a.length > 0 || !qi(n, o);
  if (!s)
    return De;
  var u = o[o.length - 1], l = n[n.length - 1];
  return u !== l && (u && a.push(u), l && a.push(l)), a;
}
function oo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return e + 1;
}
function Bt(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bt(Object(r), !0).forEach(function(n) {
      ao(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bt(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ao(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function so() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0;
  return {
    dirtyHandlerIds: io(e.dirtyHandlerIds, {
      type: t.type,
      payload: qt(qt({}, t.payload), {}, {
        prevTargetIds: li(e, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: Ki(e.dragOffset, t),
    refCount: ro(e.refCount, t),
    dragOperation: to(e.dragOperation, t),
    stateId: oo(e.stateId)
  };
}
function uo(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function jr(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function co(e) {
  var t = e.clientOffset, r = e.initialClientOffset, n = e.initialSourceClientOffset;
  return !t || !r || !n ? null : jr(uo(t, n), r);
}
function lo(e) {
  var t = e.clientOffset, r = e.initialClientOffset;
  return !t || !r ? null : jr(t, r);
}
function fo(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gt(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ho(e, t, r) {
  return t && Gt(e.prototype, t), r && Gt(e, r), e;
}
function Kt(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var go = /* @__PURE__ */ function() {
  function e(t, r) {
    fo(this, e), Kt(this, "store", void 0), Kt(this, "registry", void 0), this.store = t, this.registry = r;
  }
  return ho(e, [{
    key: "subscribeToStateChange",
    value: function(r) {
      var n = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        handlerIds: void 0
      }, o = i.handlerIds;
      T(typeof r == "function", "listener must be a function."), T(typeof o > "u" || Array.isArray(o), "handlerIds, when specified, must be an array of strings.");
      var a = this.store.getState().stateId, s = function() {
        var l = n.store.getState(), d = l.stateId;
        try {
          var h = d === a || d === a + 1 && !no(l.dirtyHandlerIds, o);
          h || r();
        } finally {
          a = d;
        }
      };
      return this.store.subscribe(s);
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function(r) {
      var n = this;
      T(typeof r == "function", "listener must be a function.");
      var i = this.store.getState().dragOffset, o = function() {
        var s = n.store.getState().dragOffset;
        s !== i && (i = s, r());
      };
      return this.store.subscribe(o);
    }
  }, {
    key: "canDragSource",
    value: function(r) {
      if (!r)
        return !1;
      var n = this.registry.getSource(r);
      return T(n, "Expected to find a valid source. sourceId=".concat(r)), this.isDragging() ? !1 : n.canDrag(this, r);
    }
  }, {
    key: "canDropOnTarget",
    value: function(r) {
      if (!r)
        return !1;
      var n = this.registry.getTarget(r);
      if (T(n, "Expected to find a valid target. targetId=".concat(r)), !this.isDragging() || this.didDrop())
        return !1;
      var i = this.registry.getTargetType(r), o = this.getItemType();
      return Ye(i, o) && n.canDrop(this, r);
    }
  }, {
    key: "isDragging",
    value: function() {
      return !!this.getItemType();
    }
  }, {
    key: "isDraggingSource",
    value: function(r) {
      if (!r)
        return !1;
      var n = this.registry.getSource(r, !0);
      if (T(n, "Expected to find a valid source. sourceId=".concat(r)), !this.isDragging() || !this.isSourcePublic())
        return !1;
      var i = this.registry.getSourceType(r), o = this.getItemType();
      return i !== o ? !1 : n.isDragging(this, r);
    }
  }, {
    key: "isOverTarget",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        shallow: !1
      };
      if (!r)
        return !1;
      var i = n.shallow;
      if (!this.isDragging())
        return !1;
      var o = this.registry.getTargetType(r), a = this.getItemType();
      if (a && !Ye(o, a))
        return !1;
      var s = this.getTargetIds();
      if (!s.length)
        return !1;
      var u = s.indexOf(r);
      return i ? u === s.length - 1 : u > -1;
    }
  }, {
    key: "getItemType",
    value: function() {
      return this.store.getState().dragOperation.itemType;
    }
  }, {
    key: "getItem",
    value: function() {
      return this.store.getState().dragOperation.item;
    }
  }, {
    key: "getSourceId",
    value: function() {
      return this.store.getState().dragOperation.sourceId;
    }
  }, {
    key: "getTargetIds",
    value: function() {
      return this.store.getState().dragOperation.targetIds;
    }
  }, {
    key: "getDropResult",
    value: function() {
      return this.store.getState().dragOperation.dropResult;
    }
  }, {
    key: "didDrop",
    value: function() {
      return this.store.getState().dragOperation.didDrop;
    }
  }, {
    key: "isSourcePublic",
    value: function() {
      return !!this.store.getState().dragOperation.isSourcePublic;
    }
  }, {
    key: "getInitialClientOffset",
    value: function() {
      return this.store.getState().dragOffset.initialClientOffset;
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function() {
      return this.store.getState().dragOffset.initialSourceClientOffset;
    }
  }, {
    key: "getClientOffset",
    value: function() {
      return this.store.getState().dragOffset.clientOffset;
    }
  }, {
    key: "getSourceClientOffset",
    value: function() {
      return co(this.store.getState().dragOffset);
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function() {
      return lo(this.store.getState().dragOffset);
    }
  }]), e;
}(), po = 0;
function vo() {
  return po++;
}
function ve(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ve = function(r) {
    return typeof r;
  } : ve = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, ve(e);
}
function yo(e) {
  T(typeof e.canDrag == "function", "Expected canDrag to be a function."), T(typeof e.beginDrag == "function", "Expected beginDrag to be a function."), T(typeof e.endDrag == "function", "Expected endDrag to be a function.");
}
function mo(e) {
  T(typeof e.canDrop == "function", "Expected canDrop to be a function."), T(typeof e.hover == "function", "Expected hover to be a function."), T(typeof e.drop == "function", "Expected beginDrag to be a function.");
}
function Xe(e, t) {
  if (t && Array.isArray(e)) {
    e.forEach(function(r) {
      return Xe(r, !1);
    });
    return;
  }
  T(typeof e == "string" || ve(e) === "symbol", t ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
const Yt = typeof global < "u" ? global : self, Fr = Yt.MutationObserver || Yt.WebKitMutationObserver;
function Ur(e) {
  return function() {
    const r = setTimeout(i, 0), n = setInterval(i, 50);
    function i() {
      clearTimeout(r), clearInterval(n), e();
    }
  };
}
function bo(e) {
  let t = 1;
  const r = new Fr(e), n = document.createTextNode("");
  return r.observe(n, {
    characterData: !0
  }), function() {
    t = -t, n.data = t;
  };
}
const So = typeof Fr == "function" ? (
  // reliably everywhere they are implemented.
  // They are implemented in all modern browsers.
  //
  // - Android 4-4.3
  // - Chrome 26-34
  // - Firefox 14-29
  // - Internet Explorer 11
  // - iPad Safari 6-7.1
  // - iPhone Safari 7-7.1
  // - Safari 6-7
  bo
) : (
  // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
  // 11-12, and in web workers in many engines.
  // Although message channels yield to any queued rendering and IO tasks, they
  // would be better than imposing the 4ms delay of timers.
  // However, they do not work reliably in Internet Explorer or Safari.
  // Internet Explorer 10 is the only browser that has setImmediate but does
  // not have MutationObservers.
  // Although setImmediate yields to the browser's renderer, it would be
  // preferrable to falling back to setTimeout since it does not have
  // the minimum 4ms penalty.
  // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
  // Desktop to a lesser extent) that renders both setImmediate and
  // MessageChannel useless for the purposes of ASAP.
  // https://github.com/kriskowal/q/issues/396
  // Timers are implemented universally.
  // We fall back to timers in workers in most engines, and in foreground
  // contexts in the following browsers.
  // However, note that even this simple case requires nuances to operate in a
  // broad spectrum of browsers.
  //
  // - Firefox 3-13
  // - Internet Explorer 6-9
  // - iPad Safari 4.3
  // - Lynx 2.8.7
  Ur
);
class Oo {
  // Use the fastest means possible to execute a task in its own turn, with
  // priority over other events including IO, animation, reflow, and redraw
  // events in browsers.
  //
  // An exception thrown by a task will permanently interrupt the processing of
  // subsequent tasks. The higher level `asap` function ensures that if an
  // exception is thrown by a task, that the task queue will continue flushing as
  // soon as possible, but if you use `rawAsap` directly, you are responsible to
  // either ensure that no exceptions are thrown from your task, or to manually
  // call `rawAsap.requestFlush` if an exception is thrown.
  enqueueTask(t) {
    const { queue: r, requestFlush: n } = this;
    r.length || (n(), this.flushing = !0), r[r.length] = t;
  }
  constructor() {
    this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
      const { queue: t } = this;
      for (; this.index < t.length; ) {
        const r = this.index;
        if (this.index++, t[r].call(), this.index > this.capacity) {
          for (let n = 0, i = t.length - this.index; n < i; n++)
            t[n] = t[n + this.index];
          t.length -= this.index, this.index = 0;
        }
      }
      t.length = 0, this.index = 0, this.flushing = !1;
    }, this.registerPendingError = (t) => {
      this.pendingErrors.push(t), this.requestErrorThrow();
    }, this.requestFlush = So(this.flush), this.requestErrorThrow = Ur(() => {
      if (this.pendingErrors.length)
        throw this.pendingErrors.shift();
    });
  }
}
class Do {
  call() {
    try {
      this.task && this.task();
    } catch (t) {
      this.onError(t);
    } finally {
      this.task = null, this.release(this);
    }
  }
  constructor(t, r) {
    this.onError = t, this.release = r, this.task = null;
  }
}
class Io {
  create(t) {
    const r = this.freeTasks, n = r.length ? r.pop() : new Do(
      this.onError,
      (i) => r[r.length] = i
    );
    return n.task = t, n;
  }
  constructor(t) {
    this.onError = t, this.freeTasks = [];
  }
}
const Vr = new Oo(), To = new Io(Vr.registerPendingError);
function wo(e) {
  Vr.enqueueTask(To.create(e));
}
function Eo(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Xt(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Co(e, t, r) {
  return t && Xt(e.prototype, t), r && Xt(e, r), e;
}
function J(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $o(e, t) {
  return Ro(e) || No(e, t) || xo(e, t) || _o();
}
function _o() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xo(e, t) {
  if (e) {
    if (typeof e == "string")
      return Qt(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Qt(e, t);
  }
}
function Qt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function No(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, s;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (n.push(a.value), !(t && n.length === t)); i = !0)
        ;
    } catch (u) {
      o = !0, s = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return n;
  }
}
function Ro(e) {
  if (Array.isArray(e))
    return e;
}
function Po(e) {
  var t = vo().toString();
  switch (e) {
    case L.SOURCE:
      return "S".concat(t);
    case L.TARGET:
      return "T".concat(t);
    default:
      throw new Error("Unknown Handler Role: ".concat(e));
  }
}
function Jt(e) {
  switch (e[0]) {
    case "S":
      return L.SOURCE;
    case "T":
      return L.TARGET;
    default:
      T(!1, "Cannot parse handler ID: ".concat(e));
  }
}
function Zt(e, t) {
  var r = e.entries(), n = !1;
  do {
    var i = r.next(), o = i.done, a = $o(i.value, 2), s = a[1];
    if (s === t)
      return !0;
    n = !!o;
  } while (!n);
  return !1;
}
var ko = /* @__PURE__ */ function() {
  function e(t) {
    Eo(this, e), J(this, "types", /* @__PURE__ */ new Map()), J(this, "dragSources", /* @__PURE__ */ new Map()), J(this, "dropTargets", /* @__PURE__ */ new Map()), J(this, "pinnedSourceId", null), J(this, "pinnedSource", null), J(this, "store", void 0), this.store = t;
  }
  return Co(e, [{
    key: "addSource",
    value: function(r, n) {
      Xe(r), yo(n);
      var i = this.addHandler(L.SOURCE, r, n);
      return this.store.dispatch(Yi(i)), i;
    }
  }, {
    key: "addTarget",
    value: function(r, n) {
      Xe(r, !0), mo(n);
      var i = this.addHandler(L.TARGET, r, n);
      return this.store.dispatch(Xi(i)), i;
    }
  }, {
    key: "containsHandler",
    value: function(r) {
      return Zt(this.dragSources, r) || Zt(this.dropTargets, r);
    }
  }, {
    key: "getSource",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      T(this.isSourceId(r), "Expected a valid source ID.");
      var i = n && r === this.pinnedSourceId, o = i ? this.pinnedSource : this.dragSources.get(r);
      return o;
    }
  }, {
    key: "getTarget",
    value: function(r) {
      return T(this.isTargetId(r), "Expected a valid target ID."), this.dropTargets.get(r);
    }
  }, {
    key: "getSourceType",
    value: function(r) {
      return T(this.isSourceId(r), "Expected a valid source ID."), this.types.get(r);
    }
  }, {
    key: "getTargetType",
    value: function(r) {
      return T(this.isTargetId(r), "Expected a valid target ID."), this.types.get(r);
    }
  }, {
    key: "isSourceId",
    value: function(r) {
      var n = Jt(r);
      return n === L.SOURCE;
    }
  }, {
    key: "isTargetId",
    value: function(r) {
      var n = Jt(r);
      return n === L.TARGET;
    }
  }, {
    key: "removeSource",
    value: function(r) {
      var n = this;
      T(this.getSource(r), "Expected an existing source."), this.store.dispatch(Qi(r)), wo(function() {
        n.dragSources.delete(r), n.types.delete(r);
      });
    }
  }, {
    key: "removeTarget",
    value: function(r) {
      T(this.getTarget(r), "Expected an existing target."), this.store.dispatch(Ji(r)), this.dropTargets.delete(r), this.types.delete(r);
    }
  }, {
    key: "pinSource",
    value: function(r) {
      var n = this.getSource(r);
      T(n, "Expected an existing source."), this.pinnedSourceId = r, this.pinnedSource = n;
    }
  }, {
    key: "unpinSource",
    value: function() {
      T(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null;
    }
  }, {
    key: "addHandler",
    value: function(r, n, i) {
      var o = Po(r);
      return this.types.set(o, n), r === L.SOURCE ? this.dragSources.set(o, i) : r === L.TARGET && this.dropTargets.set(o, i), o;
    }
  }]), e;
}();
function Ao(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, i = Mo(n), o = new go(i, new ko(i)), a = new Li(i, o), s = e(a, t, r);
  return a.receiveBackend(s), a;
}
function Mo(e) {
  var t = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return ct(so, e && t && t({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
var Lo = ["children"];
function Ho(e, t) {
  return Vo(e) || Uo(e, t) || Fo(e, t) || jo();
}
function jo() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fo(e, t) {
  if (e) {
    if (typeof e == "string")
      return er(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return er(e, t);
  }
}
function er(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Uo(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, s;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (n.push(a.value), !(t && n.length === t)); i = !0)
        ;
    } catch (u) {
      o = !0, s = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return n;
  }
}
function Vo(e) {
  if (Array.isArray(e))
    return e;
}
function zo(e, t) {
  if (e == null)
    return {};
  var r = Wo(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Wo(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, o;
  for (o = 0; o < n.length; o++)
    i = n[o], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var tr = 0, ye = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"), Bo = it(function(t) {
  var r = t.children, n = zo(t, Lo), i = qo(n), o = Ho(i, 2), a = o[0], s = o[1];
  return H(function() {
    if (s) {
      var u = zr();
      return ++tr, function() {
        --tr === 0 && (u[ye] = null);
      };
    }
  }, []), I(Mr.Provider, Object.assign({
    value: a
  }, {
    children: r
  }), void 0);
});
function qo(e) {
  if ("manager" in e) {
    var t = {
      dragDropManager: e.manager
    };
    return [t, !1];
  }
  var r = Go(e.backend, e.context, e.options, e.debugMode), n = !e.context;
  return [r, n];
}
function Go(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : zr(), r = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0, i = t;
  return i[ye] || (i[ye] = {
    dragDropManager: Ao(e, t, r, n)
  }), i[ye];
}
function zr() {
  return typeof global < "u" ? global : window;
}
function Ko(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function rr(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Yo(e, t, r) {
  return t && rr(e.prototype, t), r && rr(e, r), e;
}
function nr(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Le = !1, He = !1, Xo = /* @__PURE__ */ function() {
  function e(t) {
    Ko(this, e), nr(this, "internalMonitor", void 0), nr(this, "sourceId", null), this.internalMonitor = t.getMonitor();
  }
  return Yo(e, [{
    key: "receiveHandlerId",
    value: function(r) {
      this.sourceId = r;
    }
  }, {
    key: "getHandlerId",
    value: function() {
      return this.sourceId;
    }
  }, {
    key: "canDrag",
    value: function() {
      T(!Le, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return Le = !0, this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        Le = !1;
      }
    }
  }, {
    key: "isDragging",
    value: function() {
      if (!this.sourceId)
        return !1;
      T(!He, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
      try {
        return He = !0, this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        He = !1;
      }
    }
  }, {
    key: "subscribeToStateChange",
    value: function(r, n) {
      return this.internalMonitor.subscribeToStateChange(r, n);
    }
  }, {
    key: "isDraggingSource",
    value: function(r) {
      return this.internalMonitor.isDraggingSource(r);
    }
  }, {
    key: "isOverTarget",
    value: function(r, n) {
      return this.internalMonitor.isOverTarget(r, n);
    }
  }, {
    key: "getTargetIds",
    value: function() {
      return this.internalMonitor.getTargetIds();
    }
  }, {
    key: "isSourcePublic",
    value: function() {
      return this.internalMonitor.isSourcePublic();
    }
  }, {
    key: "getSourceId",
    value: function() {
      return this.internalMonitor.getSourceId();
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function(r) {
      return this.internalMonitor.subscribeToOffsetChange(r);
    }
  }, {
    key: "canDragSource",
    value: function(r) {
      return this.internalMonitor.canDragSource(r);
    }
  }, {
    key: "canDropOnTarget",
    value: function(r) {
      return this.internalMonitor.canDropOnTarget(r);
    }
  }, {
    key: "getItemType",
    value: function() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]), e;
}();
function Qo(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ir(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Jo(e, t, r) {
  return t && ir(e.prototype, t), r && ir(e, r), e;
}
function or(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var je = !1, Zo = /* @__PURE__ */ function() {
  function e(t) {
    Qo(this, e), or(this, "internalMonitor", void 0), or(this, "targetId", null), this.internalMonitor = t.getMonitor();
  }
  return Jo(e, [{
    key: "receiveHandlerId",
    value: function(r) {
      this.targetId = r;
    }
  }, {
    key: "getHandlerId",
    value: function() {
      return this.targetId;
    }
  }, {
    key: "subscribeToStateChange",
    value: function(r, n) {
      return this.internalMonitor.subscribeToStateChange(r, n);
    }
  }, {
    key: "canDrop",
    value: function() {
      if (!this.targetId)
        return !1;
      T(!je, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
      try {
        return je = !0, this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        je = !1;
      }
    }
  }, {
    key: "isOver",
    value: function(r) {
      return this.targetId ? this.internalMonitor.isOverTarget(this.targetId, r) : !1;
    }
  }, {
    key: "getItemType",
    value: function() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]), e;
}();
function ea(e) {
  if (typeof e.type != "string") {
    var t = e.type.displayName || e.type.name || "the component";
    throw new Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(t, " into a <div>, or turn it into a ") + "drag source or a drop target itself.");
  }
}
function ta(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!_n(t)) {
      var n = t;
      return e(n, r), n;
    }
    var i = t;
    ea(i);
    var o = r ? function(a) {
      return e(a, r);
    } : e;
    return ra(i, o);
  };
}
function Wr(e) {
  var t = {};
  return Object.keys(e).forEach(function(r) {
    var n = e[r];
    if (r.endsWith("Ref"))
      t[r] = e[r];
    else {
      var i = ta(n);
      t[r] = function() {
        return i;
      };
    }
  }), t;
}
function ar(e, t) {
  typeof e == "function" ? e(t) : e.current = t;
}
function ra(e, t) {
  var r = e.ref;
  return T(typeof r != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), r ? St(e, {
    ref: function(i) {
      ar(r, i), ar(t, i);
    }
  }) : St(e, {
    ref: t
  });
}
function me(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? me = function(r) {
    return typeof r;
  } : me = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, me(e);
}
function Qe(e) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    e !== null && me(e) === "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Je(e, t, r, n) {
  var i = r ? r.call(n, e, t) : void 0;
  if (i !== void 0)
    return !!i;
  if (e === t)
    return !0;
  if (typeof e != "object" || !e || typeof t != "object" || !t)
    return !1;
  var o = Object.keys(e), a = Object.keys(t);
  if (o.length !== a.length)
    return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(t), u = 0; u < o.length; u++) {
    var l = o[u];
    if (!s(l))
      return !1;
    var d = e[l], h = t[l];
    if (i = r ? r.call(n, d, h, l) : void 0, i === !1 || i === void 0 && d !== h)
      return !1;
  }
  return !0;
}
function na(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function sr(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ia(e, t, r) {
  return t && sr(e.prototype, t), r && sr(e, r), e;
}
function P(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var oa = /* @__PURE__ */ function() {
  function e(t) {
    var r = this;
    na(this, e), P(this, "hooks", Wr({
      dragSource: function(i, o) {
        r.clearDragSource(), r.dragSourceOptions = o || null, Qe(i) ? r.dragSourceRef = i : r.dragSourceNode = i, r.reconnectDragSource();
      },
      dragPreview: function(i, o) {
        r.clearDragPreview(), r.dragPreviewOptions = o || null, Qe(i) ? r.dragPreviewRef = i : r.dragPreviewNode = i, r.reconnectDragPreview();
      }
    })), P(this, "handlerId", null), P(this, "dragSourceRef", null), P(this, "dragSourceNode", void 0), P(this, "dragSourceOptionsInternal", null), P(this, "dragSourceUnsubscribe", void 0), P(this, "dragPreviewRef", null), P(this, "dragPreviewNode", void 0), P(this, "dragPreviewOptionsInternal", null), P(this, "dragPreviewUnsubscribe", void 0), P(this, "lastConnectedHandlerId", null), P(this, "lastConnectedDragSource", null), P(this, "lastConnectedDragSourceOptions", null), P(this, "lastConnectedDragPreview", null), P(this, "lastConnectedDragPreviewOptions", null), P(this, "backend", void 0), this.backend = t;
  }
  return ia(e, [{
    key: "receiveHandlerId",
    value: function(r) {
      this.handlerId !== r && (this.handlerId = r, this.reconnect());
    }
  }, {
    key: "connectTarget",
    get: function() {
      return this.dragSource;
    }
  }, {
    key: "dragSourceOptions",
    get: function() {
      return this.dragSourceOptionsInternal;
    },
    set: function(r) {
      this.dragSourceOptionsInternal = r;
    }
  }, {
    key: "dragPreviewOptions",
    get: function() {
      return this.dragPreviewOptionsInternal;
    },
    set: function(r) {
      this.dragPreviewOptionsInternal = r;
    }
  }, {
    key: "reconnect",
    value: function() {
      this.reconnectDragSource(), this.reconnectDragPreview();
    }
  }, {
    key: "reconnectDragSource",
    value: function() {
      var r = this.dragSource, n = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
      if (n && this.disconnectDragSource(), !!this.handlerId) {
        if (!r) {
          this.lastConnectedDragSource = r;
          return;
        }
        n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = r, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, r, this.dragSourceOptions));
      }
    }
  }, {
    key: "reconnectDragPreview",
    value: function() {
      var r = this.dragPreview, n = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
      if (n && this.disconnectDragPreview(), !!this.handlerId) {
        if (!r) {
          this.lastConnectedDragPreview = r;
          return;
        }
        n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = r, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, r, this.dragPreviewOptions));
      }
    }
  }, {
    key: "didHandlerIdChange",
    value: function() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didConnectedDragSourceChange",
    value: function() {
      return this.lastConnectedDragSource !== this.dragSource;
    }
  }, {
    key: "didConnectedDragPreviewChange",
    value: function() {
      return this.lastConnectedDragPreview !== this.dragPreview;
    }
  }, {
    key: "didDragSourceOptionsChange",
    value: function() {
      return !Je(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
  }, {
    key: "didDragPreviewOptionsChange",
    value: function() {
      return !Je(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
    }
  }, {
    key: "disconnectDragSource",
    value: function() {
      this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), this.dragSourceUnsubscribe = void 0);
    }
  }, {
    key: "disconnectDragPreview",
    value: function() {
      this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null);
    }
  }, {
    key: "dragSource",
    get: function() {
      return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
    }
  }, {
    key: "dragPreview",
    get: function() {
      return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
    }
  }, {
    key: "clearDragSource",
    value: function() {
      this.dragSourceNode = null, this.dragSourceRef = null;
    }
  }, {
    key: "clearDragPreview",
    value: function() {
      this.dragPreviewNode = null, this.dragPreviewRef = null;
    }
  }]), e;
}();
function aa(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ur(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function sa(e, t, r) {
  return t && ur(e.prototype, t), r && ur(e, r), e;
}
function U(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var ua = /* @__PURE__ */ function() {
  function e(t) {
    var r = this;
    aa(this, e), U(this, "hooks", Wr({
      dropTarget: function(i, o) {
        r.clearDropTarget(), r.dropTargetOptions = o, Qe(i) ? r.dropTargetRef = i : r.dropTargetNode = i, r.reconnect();
      }
    })), U(this, "handlerId", null), U(this, "dropTargetRef", null), U(this, "dropTargetNode", void 0), U(this, "dropTargetOptionsInternal", null), U(this, "unsubscribeDropTarget", void 0), U(this, "lastConnectedHandlerId", null), U(this, "lastConnectedDropTarget", null), U(this, "lastConnectedDropTargetOptions", null), U(this, "backend", void 0), this.backend = t;
  }
  return sa(e, [{
    key: "connectTarget",
    get: function() {
      return this.dropTarget;
    }
  }, {
    key: "reconnect",
    value: function() {
      var r = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
      r && this.disconnectDropTarget();
      var n = this.dropTarget;
      if (this.handlerId) {
        if (!n) {
          this.lastConnectedDropTarget = n;
          return;
        }
        r && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = n, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, n, this.dropTargetOptions));
      }
    }
  }, {
    key: "receiveHandlerId",
    value: function(r) {
      r !== this.handlerId && (this.handlerId = r, this.reconnect());
    }
  }, {
    key: "dropTargetOptions",
    get: function() {
      return this.dropTargetOptionsInternal;
    },
    set: function(r) {
      this.dropTargetOptionsInternal = r;
    }
  }, {
    key: "didHandlerIdChange",
    value: function() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didDropTargetChange",
    value: function() {
      return this.lastConnectedDropTarget !== this.dropTarget;
    }
  }, {
    key: "didOptionsChange",
    value: function() {
      return !Je(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
    }
  }, {
    key: "disconnectDropTarget",
    value: function() {
      this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), this.unsubscribeDropTarget = void 0);
    }
  }, {
    key: "dropTarget",
    get: function() {
      return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
    }
  }, {
    key: "clearDropTarget",
    value: function() {
      this.dropTargetRef = null, this.dropTargetNode = null;
    }
  }]), e;
}();
function ca(e, t, r) {
  var n = r.getRegistry(), i = n.addTarget(e, t);
  return [i, function() {
    return n.removeTarget(i);
  }];
}
function la(e, t, r) {
  var n = r.getRegistry(), i = n.addSource(e, t);
  return [i, function() {
    return n.removeSource(i);
  }];
}
var K = typeof window < "u" ? xn : H;
function be(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? be = function(r) {
    return typeof r;
  } : be = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, be(e);
}
function da(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cr(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function fa(e, t, r) {
  return t && cr(e.prototype, t), r && cr(e, r), e;
}
function Fe(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var ha = /* @__PURE__ */ function() {
  function e(t, r, n) {
    da(this, e), Fe(this, "spec", void 0), Fe(this, "monitor", void 0), Fe(this, "connector", void 0), this.spec = t, this.monitor = r, this.connector = n;
  }
  return fa(e, [{
    key: "beginDrag",
    value: function() {
      var r, n = this.spec, i = this.monitor, o = null;
      return be(n.item) === "object" ? o = n.item : typeof n.item == "function" ? o = n.item(i) : o = {}, (r = o) !== null && r !== void 0 ? r : null;
    }
  }, {
    key: "canDrag",
    value: function() {
      var r = this.spec, n = this.monitor;
      return typeof r.canDrag == "boolean" ? r.canDrag : typeof r.canDrag == "function" ? r.canDrag(n) : !0;
    }
  }, {
    key: "isDragging",
    value: function(r, n) {
      var i = this.spec, o = this.monitor, a = i.isDragging;
      return a ? a(o) : n === r.getSourceId();
    }
  }, {
    key: "endDrag",
    value: function() {
      var r = this.spec, n = this.monitor, i = this.connector, o = r.end;
      o && o(n.getItem(), n), i.reconnect();
    }
  }]), e;
}();
function ga(e, t, r) {
  var n = N(function() {
    return new ha(e, t, r);
  }, [t, r]);
  return H(function() {
    n.spec = e;
  }, [e]), n;
}
function Y() {
  var e = de(Mr), t = e.dragDropManager;
  return T(t != null, "Expected drag drop context"), t;
}
function pa(e) {
  return N(function() {
    var t = e.type;
    return T(t != null, "spec.type must be defined"), t;
  }, [e]);
}
function va(e, t) {
  return Sa(e) || ba(e, t) || ma(e, t) || ya();
}
function ya() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ma(e, t) {
  if (e) {
    if (typeof e == "string")
      return lr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return lr(e, t);
  }
}
function lr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function ba(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, s;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (n.push(a.value), !(t && n.length === t)); i = !0)
        ;
    } catch (u) {
      o = !0, s = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return n;
  }
}
function Sa(e) {
  if (Array.isArray(e))
    return e;
}
function Oa(e, t, r) {
  var n = Y(), i = ga(e, t, r), o = pa(e);
  K(function() {
    if (o != null) {
      var s = la(o, i, n), u = va(s, 2), l = u[0], d = u[1];
      return t.receiveHandlerId(l), r.receiveHandlerId(l), d;
    }
  }, [n, t, r, i, o]);
}
function Da(e) {
  return Ea(e) || wa(e) || Ta(e) || Ia();
}
function Ia() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ta(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ze(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ze(e, t);
  }
}
function wa(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Ea(e) {
  if (Array.isArray(e))
    return Ze(e);
}
function Ze(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Br(e, t) {
  var r = Da(t || []);
  return t == null && typeof e != "function" && r.push(e), N(function() {
    return typeof e == "function" ? e() : e;
  }, r);
}
function Ca() {
  var e = Y();
  return N(function() {
    return new Xo(e);
  }, [e]);
}
function $a(e, t) {
  var r = Y(), n = N(function() {
    return new oa(r.getBackend());
  }, [r]);
  return K(function() {
    return n.dragSourceOptions = e || null, n.reconnect(), function() {
      return n.disconnectDragSource();
    };
  }, [n, e]), K(function() {
    return n.dragPreviewOptions = t || null, n.reconnect(), function() {
      return n.disconnectDragPreview();
    };
  }, [n, t]), n;
}
var _a = function e(t, r) {
  if (t === r)
    return !0;
  if (t && r && typeof t == "object" && typeof r == "object") {
    if (t.constructor !== r.constructor)
      return !1;
    var n, i, o;
    if (Array.isArray(t)) {
      if (n = t.length, n != r.length)
        return !1;
      for (i = n; i-- !== 0; )
        if (!e(t[i], r[i]))
          return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === r.source && t.flags === r.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === r.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === r.toString();
    if (o = Object.keys(t), n = o.length, n !== Object.keys(r).length)
      return !1;
    for (i = n; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, o[i]))
        return !1;
    for (i = n; i-- !== 0; ) {
      var a = o[i];
      if (!e(t[a], r[a]))
        return !1;
    }
    return !0;
  }
  return t !== t && r !== r;
};
const xa = /* @__PURE__ */ Pn(_a);
function Na(e, t) {
  return Aa(e) || ka(e, t) || Pa(e, t) || Ra();
}
function Ra() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pa(e, t) {
  if (e) {
    if (typeof e == "string")
      return dr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return dr(e, t);
  }
}
function dr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function ka(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, s;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (n.push(a.value), !(t && n.length === t)); i = !0)
        ;
    } catch (u) {
      o = !0, s = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return n;
  }
}
function Aa(e) {
  if (Array.isArray(e))
    return e;
}
function qr(e, t, r) {
  var n = ot(function() {
    return t(e);
  }), i = Na(n, 2), o = i[0], a = i[1], s = $r(function() {
    var u = t(e);
    xa(o, u) || (a(u), r && r());
  }, [o, e, r]);
  return K(s), [o, s];
}
function Ma(e, t) {
  return Fa(e) || ja(e, t) || Ha(e, t) || La();
}
function La() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ha(e, t) {
  if (e) {
    if (typeof e == "string")
      return fr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return fr(e, t);
  }
}
function fr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function ja(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, s;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (n.push(a.value), !(t && n.length === t)); i = !0)
        ;
    } catch (u) {
      o = !0, s = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return n;
  }
}
function Fa(e) {
  if (Array.isArray(e))
    return e;
}
function Ua(e, t, r) {
  var n = qr(e, t, r), i = Ma(n, 2), o = i[0], a = i[1];
  return K(function() {
    var u = e.getHandlerId();
    if (u != null)
      return e.subscribeToStateChange(a, {
        handlerIds: [u]
      });
  }, [e, a]), o;
}
function Gr(e, t, r) {
  return Ua(t, e || function() {
    return {};
  }, function() {
    return r.reconnect();
  });
}
function Va(e) {
  return N(function() {
    return e.hooks.dragSource();
  }, [e]);
}
function za(e) {
  return N(function() {
    return e.hooks.dragPreview();
  }, [e]);
}
function Wa(e, t) {
  var r = Br(e, t);
  T(!r.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  var n = Ca(), i = $a(r.options, r.previewOptions);
  return Oa(r, n, i), [Gr(r.collect, n, i), Va(i), za(i)];
}
function Ba(e) {
  var t = e.accept;
  return N(function() {
    return T(e.accept != null, "accept must be defined"), Array.isArray(t) ? t : [t];
  }, [t]);
}
function qa(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hr(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Ga(e, t, r) {
  return t && hr(e.prototype, t), r && hr(e, r), e;
}
function gr(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Ka = /* @__PURE__ */ function() {
  function e(t, r) {
    qa(this, e), gr(this, "spec", void 0), gr(this, "monitor", void 0), this.spec = t, this.monitor = r;
  }
  return Ga(e, [{
    key: "canDrop",
    value: function() {
      var r = this.spec, n = this.monitor;
      return r.canDrop ? r.canDrop(n.getItem(), n) : !0;
    }
  }, {
    key: "hover",
    value: function() {
      var r = this.spec, n = this.monitor;
      r.hover && r.hover(n.getItem(), n);
    }
  }, {
    key: "drop",
    value: function() {
      var r = this.spec, n = this.monitor;
      if (r.drop)
        return r.drop(n.getItem(), n);
    }
  }]), e;
}();
function Ya(e, t) {
  var r = N(function() {
    return new Ka(e, t);
  }, [t]);
  return H(function() {
    r.spec = e;
  }, [e]), r;
}
function Xa(e, t) {
  return es(e) || Za(e, t) || Ja(e, t) || Qa();
}
function Qa() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ja(e, t) {
  if (e) {
    if (typeof e == "string")
      return pr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return pr(e, t);
  }
}
function pr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Za(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, s;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (n.push(a.value), !(t && n.length === t)); i = !0)
        ;
    } catch (u) {
      o = !0, s = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return n;
  }
}
function es(e) {
  if (Array.isArray(e))
    return e;
}
function ts(e, t, r) {
  var n = Y(), i = Ya(e, t), o = Ba(e);
  K(function() {
    var s = ca(o, i, n), u = Xa(s, 2), l = u[0], d = u[1];
    return t.receiveHandlerId(l), r.receiveHandlerId(l), d;
  }, [n, t, i, r, o.map(function(a) {
    return a.toString();
  }).join("|")]);
}
function rs() {
  var e = Y();
  return N(function() {
    return new Zo(e);
  }, [e]);
}
function ns(e) {
  var t = Y(), r = N(function() {
    return new ua(t.getBackend());
  }, [t]);
  return K(function() {
    return r.dropTargetOptions = e || null, r.reconnect(), function() {
      return r.disconnectDropTarget();
    };
  }, [e]), r;
}
function is(e) {
  return N(function() {
    return e.hooks.dropTarget();
  }, [e]);
}
function Kr(e, t) {
  var r = Br(e, t), n = rs(), i = ns(r.options);
  return ts(r, n, i), [Gr(r.collect, n, i), is(i)];
}
function os(e, t) {
  return cs(e) || us(e, t) || ss(e, t) || as();
}
function as() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ss(e, t) {
  if (e) {
    if (typeof e == "string")
      return vr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return vr(e, t);
  }
}
function vr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function us(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, s;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (n.push(a.value), !(t && n.length === t)); i = !0)
        ;
    } catch (u) {
      o = !0, s = u;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return n;
  }
}
function cs(e) {
  if (Array.isArray(e))
    return e;
}
function ls(e) {
  var t = Y(), r = t.getMonitor(), n = qr(r, e), i = os(n, 2), o = i[0], a = i[1];
  return H(function() {
    return r.subscribeToOffsetChange(a);
  }), H(function() {
    return r.subscribeToStateChange(a);
  }), o;
}
function et() {
  return et = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, et.apply(this, arguments);
}
function yr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function tt(e, t) {
  return tt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, tt(e, t);
}
function ds(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, tt(e, t);
}
var mr = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function fs(e, t) {
  return !!(e === t || mr(e) && mr(t));
}
function hs(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!fs(e[r], t[r]))
      return !1;
  return !0;
}
function Ue(e, t) {
  t === void 0 && (t = hs);
  var r, n = [], i, o = !1;
  function a() {
    for (var s = [], u = 0; u < arguments.length; u++)
      s[u] = arguments[u];
    return o && r === this && t(s, n) || (i = e.apply(this, s), o = !0, r = this, n = s), i;
  }
  return a;
}
var gs = typeof performance == "object" && typeof performance.now == "function", br = gs ? function() {
  return performance.now();
} : function() {
  return Date.now();
};
function Sr(e) {
  cancelAnimationFrame(e.id);
}
function ps(e, t) {
  var r = br();
  function n() {
    br() - r >= t ? e.call(null) : i.id = requestAnimationFrame(n);
  }
  var i = {
    id: requestAnimationFrame(n)
  };
  return i;
}
var Ve = -1;
function Or(e) {
  if (e === void 0 && (e = !1), Ve === -1 || e) {
    var t = document.createElement("div"), r = t.style;
    r.width = "50px", r.height = "50px", r.overflow = "scroll", document.body.appendChild(t), Ve = t.offsetWidth - t.clientWidth, document.body.removeChild(t);
  }
  return Ve;
}
var Z = null;
function Dr(e) {
  if (e === void 0 && (e = !1), Z === null || e) {
    var t = document.createElement("div"), r = t.style;
    r.width = "50px", r.height = "50px", r.overflow = "scroll", r.direction = "rtl";
    var n = document.createElement("div"), i = n.style;
    return i.width = "100px", i.height = "100px", t.appendChild(n), document.body.appendChild(t), t.scrollLeft > 0 ? Z = "positive-descending" : (t.scrollLeft = 1, t.scrollLeft === 0 ? Z = "negative" : Z = "positive-ascending"), document.body.removeChild(t), Z;
  }
  return Z;
}
process.env.NODE_ENV;
var vs = 150, ys = function(t, r) {
  return t;
}, Se = null, Oe = null;
process.env.NODE_ENV !== "production" && typeof window < "u" && typeof window.WeakSet < "u" && (Se = /* @__PURE__ */ new WeakSet(), Oe = /* @__PURE__ */ new WeakSet());
function ms(e) {
  var t, r = e.getItemOffset, n = e.getEstimatedTotalSize, i = e.getItemSize, o = e.getOffsetForIndexAndAlignment, a = e.getStartIndexForOffset, s = e.getStopIndexForStartIndex, u = e.initInstanceProps, l = e.shouldResetStyleCacheOnItemSizeChange, d = e.validateProps;
  return t = /* @__PURE__ */ function(h) {
    ds(v, h);
    function v(D) {
      var c;
      return c = h.call(this, D) || this, c._instanceProps = u(c.props, yr(c)), c._outerRef = void 0, c._resetIsScrollingTimeoutId = null, c.state = {
        instance: yr(c),
        isScrolling: !1,
        scrollDirection: "forward",
        scrollOffset: typeof c.props.initialScrollOffset == "number" ? c.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: !1
      }, c._callOnItemsRendered = void 0, c._callOnItemsRendered = Ue(function(f, g, y, p) {
        return c.props.onItemsRendered({
          overscanStartIndex: f,
          overscanStopIndex: g,
          visibleStartIndex: y,
          visibleStopIndex: p
        });
      }), c._callOnScroll = void 0, c._callOnScroll = Ue(function(f, g, y) {
        return c.props.onScroll({
          scrollDirection: f,
          scrollOffset: g,
          scrollUpdateWasRequested: y
        });
      }), c._getItemStyle = void 0, c._getItemStyle = function(f) {
        var g = c.props, y = g.direction, p = g.itemSize, m = g.layout, S = c._getItemStyleCache(l && p, l && m, l && y), O;
        if (S.hasOwnProperty(f))
          O = S[f];
        else {
          var E = r(c.props, f, c._instanceProps), x = i(c.props, f, c._instanceProps), $ = y === "horizontal" || m === "horizontal", z = y === "rtl", X = $ ? E : 0;
          S[f] = O = {
            position: "absolute",
            left: z ? void 0 : X,
            right: z ? X : void 0,
            top: $ ? 0 : E,
            height: $ ? "100%" : x,
            width: $ ? x : "100%"
          };
        }
        return O;
      }, c._getItemStyleCache = void 0, c._getItemStyleCache = Ue(function(f, g, y) {
        return {};
      }), c._onScrollHorizontal = function(f) {
        var g = f.currentTarget, y = g.clientWidth, p = g.scrollLeft, m = g.scrollWidth;
        c.setState(function(S) {
          if (S.scrollOffset === p)
            return null;
          var O = c.props.direction, E = p;
          if (O === "rtl")
            switch (Dr()) {
              case "negative":
                E = -p;
                break;
              case "positive-descending":
                E = m - y - p;
                break;
            }
          return E = Math.max(0, Math.min(E, m - y)), {
            isScrolling: !0,
            scrollDirection: S.scrollOffset < p ? "forward" : "backward",
            scrollOffset: E,
            scrollUpdateWasRequested: !1
          };
        }, c._resetIsScrollingDebounced);
      }, c._onScrollVertical = function(f) {
        var g = f.currentTarget, y = g.clientHeight, p = g.scrollHeight, m = g.scrollTop;
        c.setState(function(S) {
          if (S.scrollOffset === m)
            return null;
          var O = Math.max(0, Math.min(m, p - y));
          return {
            isScrolling: !0,
            scrollDirection: S.scrollOffset < O ? "forward" : "backward",
            scrollOffset: O,
            scrollUpdateWasRequested: !1
          };
        }, c._resetIsScrollingDebounced);
      }, c._outerRefSetter = function(f) {
        var g = c.props.outerRef;
        c._outerRef = f, typeof g == "function" ? g(f) : g != null && typeof g == "object" && g.hasOwnProperty("current") && (g.current = f);
      }, c._resetIsScrollingDebounced = function() {
        c._resetIsScrollingTimeoutId !== null && Sr(c._resetIsScrollingTimeoutId), c._resetIsScrollingTimeoutId = ps(c._resetIsScrolling, vs);
      }, c._resetIsScrolling = function() {
        c._resetIsScrollingTimeoutId = null, c.setState({
          isScrolling: !1
        }, function() {
          c._getItemStyleCache(-1, null);
        });
      }, c;
    }
    v.getDerivedStateFromProps = function(c, f) {
      return bs(c, f), d(c), null;
    };
    var b = v.prototype;
    return b.scrollTo = function(c) {
      c = Math.max(0, c), this.setState(function(f) {
        return f.scrollOffset === c ? null : {
          scrollDirection: f.scrollOffset < c ? "forward" : "backward",
          scrollOffset: c,
          scrollUpdateWasRequested: !0
        };
      }, this._resetIsScrollingDebounced);
    }, b.scrollToItem = function(c, f) {
      f === void 0 && (f = "auto");
      var g = this.props, y = g.itemCount, p = g.layout, m = this.state.scrollOffset;
      c = Math.max(0, Math.min(c, y - 1));
      var S = 0;
      if (this._outerRef) {
        var O = this._outerRef;
        p === "vertical" ? S = O.scrollWidth > O.clientWidth ? Or() : 0 : S = O.scrollHeight > O.clientHeight ? Or() : 0;
      }
      this.scrollTo(o(this.props, c, f, m, this._instanceProps, S));
    }, b.componentDidMount = function() {
      var c = this.props, f = c.direction, g = c.initialScrollOffset, y = c.layout;
      if (typeof g == "number" && this._outerRef != null) {
        var p = this._outerRef;
        f === "horizontal" || y === "horizontal" ? p.scrollLeft = g : p.scrollTop = g;
      }
      this._callPropsCallbacks();
    }, b.componentDidUpdate = function() {
      var c = this.props, f = c.direction, g = c.layout, y = this.state, p = y.scrollOffset, m = y.scrollUpdateWasRequested;
      if (m && this._outerRef != null) {
        var S = this._outerRef;
        if (f === "horizontal" || g === "horizontal")
          if (f === "rtl")
            switch (Dr()) {
              case "negative":
                S.scrollLeft = -p;
                break;
              case "positive-ascending":
                S.scrollLeft = p;
                break;
              default:
                var O = S.clientWidth, E = S.scrollWidth;
                S.scrollLeft = E - O - p;
                break;
            }
          else
            S.scrollLeft = p;
        else
          S.scrollTop = p;
      }
      this._callPropsCallbacks();
    }, b.componentWillUnmount = function() {
      this._resetIsScrollingTimeoutId !== null && Sr(this._resetIsScrollingTimeoutId);
    }, b.render = function() {
      var c = this.props, f = c.children, g = c.className, y = c.direction, p = c.height, m = c.innerRef, S = c.innerElementType, O = c.innerTagName, E = c.itemCount, x = c.itemData, $ = c.itemKey, z = $ === void 0 ? ys : $, X = c.layout, mn = c.outerElementType, bn = c.outerTagName, Sn = c.style, On = c.useIsScrolling, Dn = c.width, pt = this.state.isScrolling, _e = y === "horizontal" || X === "horizontal", In = _e ? this._onScrollHorizontal : this._onScrollVertical, vt = this._getRangeToRender(), Tn = vt[0], wn = vt[1], yt = [];
      if (E > 0)
        for (var ie = Tn; ie <= wn; ie++)
          yt.push(xe(f, {
            data: x,
            key: z(ie, x),
            index: ie,
            isScrolling: On ? pt : void 0,
            style: this._getItemStyle(ie)
          }));
      var mt = n(this.props, this._instanceProps);
      return xe(mn || bn || "div", {
        className: g,
        onScroll: In,
        ref: this._outerRefSetter,
        style: et({
          position: "relative",
          height: p,
          width: Dn,
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          willChange: "transform",
          direction: y
        }, Sn)
      }, xe(S || O || "div", {
        children: yt,
        ref: m,
        style: {
          height: _e ? "100%" : mt,
          pointerEvents: pt ? "none" : void 0,
          width: _e ? mt : "100%"
        }
      }));
    }, b._callPropsCallbacks = function() {
      if (typeof this.props.onItemsRendered == "function") {
        var c = this.props.itemCount;
        if (c > 0) {
          var f = this._getRangeToRender(), g = f[0], y = f[1], p = f[2], m = f[3];
          this._callOnItemsRendered(g, y, p, m);
        }
      }
      if (typeof this.props.onScroll == "function") {
        var S = this.state, O = S.scrollDirection, E = S.scrollOffset, x = S.scrollUpdateWasRequested;
        this._callOnScroll(O, E, x);
      }
    }, b._getRangeToRender = function() {
      var c = this.props, f = c.itemCount, g = c.overscanCount, y = this.state, p = y.isScrolling, m = y.scrollDirection, S = y.scrollOffset;
      if (f === 0)
        return [0, 0, 0, 0];
      var O = a(this.props, S, this._instanceProps), E = s(this.props, O, S, this._instanceProps), x = !p || m === "backward" ? Math.max(1, g) : 1, $ = !p || m === "forward" ? Math.max(1, g) : 1;
      return [Math.max(0, O - x), Math.max(0, Math.min(f - 1, E + $)), O, E];
    }, v;
  }(Nn), t.defaultProps = {
    direction: "ltr",
    itemData: void 0,
    layout: "vertical",
    overscanCount: 2,
    useIsScrolling: !1
  }, t;
}
var bs = function(t, r) {
  var n = t.children, i = t.direction, o = t.height, a = t.layout, s = t.innerTagName, u = t.outerTagName, l = t.width, d = r.instance;
  if (process.env.NODE_ENV !== "production") {
    (s != null || u != null) && Oe && !Oe.has(d) && (Oe.add(d), console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead."));
    var h = i === "horizontal" || a === "horizontal";
    switch (i) {
      case "horizontal":
      case "vertical":
        Se && !Se.has(d) && (Se.add(d), console.warn('The direction prop should be either "ltr" (default) or "rtl". Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.'));
        break;
      case "ltr":
      case "rtl":
        break;
      default:
        throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". ' + ('"' + i + '" was specified.'));
    }
    switch (a) {
      case "horizontal":
      case "vertical":
        break;
      default:
        throw Error('An invalid "layout" prop has been specified. Value should be either "horizontal" or "vertical". ' + ('"' + a + '" was specified.'));
    }
    if (n == null)
      throw Error('An invalid "children" prop has been specified. Value should be a React component. ' + ('"' + (n === null ? "null" : typeof n) + '" was specified.'));
    if (h && typeof l != "number")
      throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. ' + ('"' + (l === null ? "null" : typeof l) + '" was specified.'));
    if (!h && typeof o != "number")
      throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. ' + ('"' + (o === null ? "null" : typeof o) + '" was specified.'));
  }
}, Ss = /* @__PURE__ */ ms({
  getItemOffset: function(t, r) {
    var n = t.itemSize;
    return r * n;
  },
  getItemSize: function(t, r) {
    var n = t.itemSize;
    return n;
  },
  getEstimatedTotalSize: function(t) {
    var r = t.itemCount, n = t.itemSize;
    return n * r;
  },
  getOffsetForIndexAndAlignment: function(t, r, n, i, o, a) {
    var s = t.direction, u = t.height, l = t.itemCount, d = t.itemSize, h = t.layout, v = t.width, b = s === "horizontal" || h === "horizontal", D = b ? v : u, c = Math.max(0, l * d - D), f = Math.min(c, r * d), g = Math.max(0, r * d - D + d + a);
    switch (n === "smart" && (i >= g - D && i <= f + D ? n = "auto" : n = "center"), n) {
      case "start":
        return f;
      case "end":
        return g;
      case "center": {
        var y = Math.round(g + (f - g) / 2);
        return y < Math.ceil(D / 2) ? 0 : y > c + Math.floor(D / 2) ? c : y;
      }
      case "auto":
      default:
        return i >= g && i <= f ? i : i < g ? g : f;
    }
  },
  getStartIndexForOffset: function(t, r) {
    var n = t.itemCount, i = t.itemSize;
    return Math.max(0, Math.min(n - 1, Math.floor(r / i)));
  },
  getStopIndexForStartIndex: function(t, r, n) {
    var i = t.direction, o = t.height, a = t.itemCount, s = t.itemSize, u = t.layout, l = t.width, d = i === "horizontal" || u === "horizontal", h = r * s, v = d ? l : o, b = Math.ceil((v + n - h) / s);
    return Math.max(0, Math.min(
      a - 1,
      r + b - 1
      // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function(t) {
  },
  shouldResetStyleCacheOnItemSizeChange: !0,
  validateProps: function(t) {
    var r = t.itemSize;
    if (process.env.NODE_ENV !== "production" && typeof r != "number")
      throw Error('An invalid "itemSize" prop has been specified. Value should be a number. ' + ('"' + (r === null ? "null" : typeof r) + '" was specified.'));
  }
});
function _(e, t, r, n) {
  Object.defineProperty(e, t, { get: r, set: n, enumerable: !0, configurable: !0 });
}
const Yr = le(null);
function A() {
  const e = de(Yr);
  if (e === null)
    throw new Error("No Tree Api Provided");
  return e;
}
const Xr = le(null);
function Os() {
  const e = de(Xr);
  if (e === null)
    throw new Error("Provide a NodesContext");
  return e;
}
const Qr = le(null);
function Ds() {
  const e = de(Qr);
  if (e === null)
    throw new Error("Provide a DnDContext");
  return e;
}
const Jr = le(0);
function Zr() {
  de(Jr);
}
var Is = {};
_(Is, "TreeApi", () => re);
var C = {};
_(C, "bound", () => en);
_(C, "isItem", () => tn);
_(C, "isClosed", () => rn);
_(C, "isDecendent", () => Ts);
_(C, "indexOf", () => nn);
_(C, "noop", () => ws);
_(C, "dfs", () => on);
_(C, "walk", () => an);
_(C, "focusNextElement", () => sn);
_(C, "focusPrevElement", () => un);
_(C, "access", () => $s);
_(C, "identifyNull", () => _s);
_(C, "identify", () => B);
_(C, "mergeRefs", () => xs);
_(C, "safeRun", () => ln);
_(C, "waitFor", () => Ns);
_(C, "getInsertIndex", () => Rs);
_(C, "getInsertParentId", () => Ps);
function en(e, t, r) {
  return Math.max(Math.min(e, r), t);
}
function tn(e) {
  return e && e.isLeaf;
}
function rn(e) {
  return e && e.isInternal && !e.isOpen;
}
const Ts = (e, t) => {
  let r = e;
  for (; r; ) {
    if (r.id === t.id)
      return !0;
    r = r.parent;
  }
  return !1;
}, nn = (e) => {
  if (!e.parent)
    throw Error("Node does not have a parent");
  return e.parent.children.findIndex((t) => t.id === e.id);
};
function ws() {
}
function on(e, t) {
  if (!e)
    return null;
  if (e.id === t)
    return e;
  if (e.children)
    for (let r of e.children) {
      const n = on(r, t);
      if (n)
        return n;
    }
  return null;
}
function an(e, t) {
  if (t(e), e.children)
    for (let r of e.children)
      an(r, t);
}
function sn(e) {
  const t = cn(e);
  let r;
  for (let n = 0; n < t.length; ++n)
    if (t[n] === e) {
      r = Es(t, n);
      break;
    }
  r == null || r.focus();
}
function un(e) {
  const t = cn(e);
  let r;
  for (let n = 0; n < t.length; ++n)
    if (t[n] === e) {
      r = Cs(t, n);
      break;
    }
  r == null || r.focus();
}
function Es(e, t) {
  return t + 1 < e.length ? e[t + 1] : e[0];
}
function Cs(e, t) {
  return t - 1 >= 0 ? e[t - 1] : e[e.length - 1];
}
function cn(e) {
  return Array.from(document.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)')).filter((t) => t === e || !e.contains(t));
}
function $s(e, t) {
  return typeof t == "boolean" ? t : typeof t == "string" ? e[t] : t(e);
}
function _s(e) {
  return e === null ? null : B(e);
}
function B(e) {
  return typeof e == "string" ? e : e.id;
}
function xs(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
function ln(e, ...t) {
  if (e)
    return e(...t);
}
function Ns(e) {
  return new Promise((t, r) => {
    let n = 0;
    function i() {
      n += 1, n === 100 && r(), e() ? t() : setTimeout(i, 10);
    }
    i();
  });
}
function Rs(e) {
  var r;
  const t = e.focusedNode;
  return t ? t.isOpen ? 0 : t.parent ? t.childIndex + 1 : 0 : ((r = e.root.children) == null ? void 0 : r.length) ?? 0;
}
function Ps(e) {
  const t = e.focusedNode;
  return t ? t.isOpen ? t.id : t.parent && !t.parent.isRoot ? t.parent.id : null : null;
}
const ks = {
  display: "flex",
  alignItems: "center",
  zIndex: 1
}, As = {
  flex: 1,
  height: "2px",
  background: "#4B91E2",
  borderRadius: "1px"
}, Ms = {
  width: "4px",
  height: "4px",
  boxShadow: "0 0 0 3px #4B91E2",
  borderRadius: "50%"
}, Ls = /* @__PURE__ */ Ie.memo(function({ top: t, left: r, indent: n }) {
  const i = {
    position: "absolute",
    pointerEvents: "none",
    top: t - 2 + "px",
    left: r + "px",
    right: n + "px"
  };
  return /* @__PURE__ */ G("div", {
    style: {
      ...ks,
      ...i
    },
    children: [
      /* @__PURE__ */ I("div", {
        style: {
          ...Ms
        }
      }),
      /* @__PURE__ */ I("div", {
        style: {
          ...As
        }
      })
    ]
  });
});
function Hs({ node: e, attrs: t, innerRef: r, children: n }) {
  return /* @__PURE__ */ I("div", {
    ...t,
    ref: r,
    onFocus: (i) => i.stopPropagation(),
    onClick: e.handleClick,
    children: n
  });
}
function js(e) {
  return /* @__PURE__ */ G("div", {
    ref: e.dragHandle,
    style: e.style,
    children: [
      /* @__PURE__ */ I("span", {
        onClick: (t) => {
          t.stopPropagation(), e.node.toggle();
        },
        children: e.node.isLeaf ? "🌳" : e.node.isOpen ? "🗁" : "🗀"
      }),
      " ",
      e.node.isEditing ? /* @__PURE__ */ I(Us, {
        ...e
      }) : /* @__PURE__ */ I(Fs, {
        ...e
      })
    ]
  });
}
function Fs(e) {
  return /* @__PURE__ */ I(nt, {
    children: /* @__PURE__ */ I("span", {
      children: e.node.data.name
    })
  });
}
function Us({ node: e }) {
  const t = te();
  return H(() => {
    var r, n;
    (r = t.current) == null || r.focus(), (n = t.current) == null || n.select();
  }, []), /* @__PURE__ */ I("input", {
    ref: t,
    // @ts-ignore
    defaultValue: e.data.name,
    onBlur: () => e.reset(),
    onKeyDown: (r) => {
      var n;
      r.key === "Escape" && e.reset(), r.key === "Enter" && e.submit(((n = t.current) == null ? void 0 : n.value) || "");
    }
  });
}
function ze(e) {
  return {
    type: "EDIT",
    id: e
  };
}
function Vs(e = {
  id: null
}, t) {
  return t.type === "EDIT" ? {
    ...e,
    id: t.id
  } : e;
}
function ee(e) {
  return {
    type: "FOCUS",
    id: e
  };
}
function zs() {
  return {
    type: "TREE_BLUR"
  };
}
function Ws(e = {
  id: null,
  treeFocused: !1
}, t) {
  return t.type === "FOCUS" ? {
    ...e,
    id: t.id,
    treeFocused: !0
  } : t.type === "TREE_BLUR" ? {
    ...e,
    treeFocused: !1
  } : e;
}
var Bs = {};
_(Bs, "NodeApi", () => se);
class se {
  constructor(t) {
    bt(this, "handleClick", (t) => {
      t.metaKey && !this.tree.props.disableMultiSelection ? this.isSelected ? this.deselect() : this.selectMulti() : t.shiftKey && !this.tree.props.disableMultiSelection ? this.selectContiguous() : (this.select(), this.activate());
    });
    this.tree = t.tree, this.id = t.id, this.data = t.data, this.level = t.level, this.children = t.children, this.parent = t.parent, this.isDraggable = t.isDraggable, this.rowIndex = t.rowIndex;
  }
  get isRoot() {
    return this.id === ue;
  }
  get isLeaf() {
    return !Array.isArray(this.children);
  }
  get isInternal() {
    return !this.isLeaf;
  }
  get isOpen() {
    return this.isLeaf ? !1 : this.tree.isOpen(this.id);
  }
  get isClosed() {
    return this.isLeaf ? !1 : !this.tree.isOpen(this.id);
  }
  get isEditable() {
    return this.tree.isEditable(this.data);
  }
  get isEditing() {
    return this.tree.editingId === this.id;
  }
  get isSelected() {
    return this.tree.isSelected(this.id);
  }
  get isOnlySelection() {
    return this.isSelected && this.tree.hasOneSelection;
  }
  get isSelectedStart() {
    var t;
    return this.isSelected && !((t = this.prev) != null && t.isSelected);
  }
  get isSelectedEnd() {
    var t;
    return this.isSelected && !((t = this.next) != null && t.isSelected);
  }
  get isFocused() {
    return this.tree.isFocused(this.id);
  }
  get isDragging() {
    return this.tree.isDragging(this.id);
  }
  get willReceiveDrop() {
    return this.tree.willReceiveDrop(this.id);
  }
  get state() {
    return {
      isClosed: this.isClosed,
      isDragging: this.isDragging,
      isEditing: this.isEditing,
      isFocused: this.isFocused,
      isInternal: this.isInternal,
      isLeaf: this.isLeaf,
      isOpen: this.isOpen,
      isSelected: this.isSelected,
      isSelectedEnd: this.isSelectedEnd,
      isSelectedStart: this.isSelectedStart,
      willReceiveDrop: this.willReceiveDrop
    };
  }
  get childIndex() {
    return this.parent && this.parent.children ? this.parent.children.findIndex((t) => t.id === this.id) : -1;
  }
  get next() {
    return this.rowIndex === null ? null : this.tree.at(this.rowIndex + 1);
  }
  get prev() {
    return this.rowIndex === null ? null : this.tree.at(this.rowIndex - 1);
  }
  get nextSibling() {
    var r;
    const t = this.childIndex;
    return ((r = this.parent) == null ? void 0 : r.children[t + 1]) ?? null;
  }
  select() {
    this.tree.select(this);
  }
  deselect() {
    this.tree.deselect(this);
  }
  selectMulti() {
    this.tree.selectMulti(this);
  }
  selectContiguous() {
    this.tree.selectContiguous(this);
  }
  activate() {
    this.tree.activate(this);
  }
  focus() {
    this.tree.focus(this);
  }
  toggle() {
    this.tree.toggle(this);
  }
  open() {
    this.tree.open(this);
  }
  openParents() {
    this.tree.openParents(this);
  }
  close() {
    this.tree.close(this);
  }
  submit(t) {
    this.tree.submit(this, t);
  }
  reset() {
    this.tree.reset();
  }
  clone() {
    return new se({
      ...this
    });
  }
  edit() {
    return this.tree.edit(this);
  }
}
const ue = "__REACT_ARBORIST_INTERNAL_ROOT__";
function Ir(e) {
  function t(i, o, a) {
    const s = e.accessId(i), u = new se({
      tree: e,
      data: i,
      level: o,
      parent: a,
      id: s,
      children: null,
      isDraggable: e.isDraggable(i),
      rowIndex: null
    }), l = e.accessChildren(i);
    return l && (u.children = l.map((d) => t(d, o + 1, u))), u;
  }
  const r = new se({
    tree: e,
    id: ue,
    // @ts-ignore
    data: {
      id: ue
    },
    level: -1,
    parent: null,
    children: null,
    isDraggable: !0,
    rowIndex: null
  }), n = e.props.data ?? [];
  return r.children = n.map((i) => t(i, 0, r)), r;
}
const rt = {
  open(e, t) {
    return {
      type: "VISIBILITY_OPEN",
      id: e,
      filtered: t
    };
  },
  close(e, t) {
    return {
      type: "VISIBILITY_CLOSE",
      id: e,
      filtered: t
    };
  },
  toggle(e, t) {
    return {
      type: "VISIBILITY_TOGGLE",
      id: e,
      filtered: t
    };
  },
  clear(e) {
    return {
      type: "VISIBILITY_CLEAR",
      filtered: e
    };
  }
};
function Tr(e = {}, t) {
  if (t.type === "VISIBILITY_OPEN")
    return {
      ...e,
      [t.id]: !0
    };
  if (t.type === "VISIBILITY_CLOSE")
    return {
      ...e,
      [t.id]: !1
    };
  if (t.type === "VISIBILITY_TOGGLE") {
    const r = e[t.id];
    return {
      ...e,
      [t.id]: !r
    };
  } else
    return t.type === "VISIBILITY_CLEAR" ? {} : e;
}
function qs(e = {
  filtered: {},
  unfiltered: {}
}, t) {
  return t.type.startsWith("VISIBILITY") ? t.filtered ? {
    ...e,
    filtered: Tr(e.filtered, t)
  } : {
    ...e,
    unfiltered: Tr(e.unfiltered, t)
  } : e;
}
const ce = (e) => ({
  nodes: {
    // Changes together
    open: {
      filtered: {},
      unfiltered: (e == null ? void 0 : e.initialOpenState) ?? {}
    },
    focus: {
      id: null,
      treeFocused: !1
    },
    edit: {
      id: null
    },
    drag: {
      id: null,
      idWillReceiveDrop: null
    },
    selection: {
      ids: /* @__PURE__ */ new Set(),
      anchor: null,
      mostRecent: null
    }
  },
  dnd: {
    cursor: {
      type: "none"
    },
    dragId: null,
    dragIds: [],
    parentId: null,
    index: -1
  }
}), j = {
  clear: () => ({
    type: "SELECTION_CLEAR"
  }),
  only: (e) => ({
    type: "SELECTION_ONLY",
    id: B(e)
  }),
  add: (e) => ({
    type: "SELECTION_ADD",
    ids: (Array.isArray(e) ? e : [
      e
    ]).map(B)
  }),
  remove: (e) => ({
    type: "SELECTION_REMOVE",
    ids: (Array.isArray(e) ? e : [
      e
    ]).map(B)
  }),
  set: (e) => ({
    type: "SELECTION_SET",
    ...e
  }),
  mostRecent: (e) => ({
    type: "SELECTION_MOST_RECENT",
    id: e === null ? null : B(e)
  }),
  anchor: (e) => ({
    type: "SELECTION_ANCHOR",
    id: e === null ? null : B(e)
  })
};
function Gs(e = ce().nodes.selection, t) {
  const r = e.ids;
  switch (t.type) {
    case "SELECTION_CLEAR":
      return {
        ...e,
        ids: /* @__PURE__ */ new Set()
      };
    case "SELECTION_ONLY":
      return {
        ...e,
        ids: /* @__PURE__ */ new Set([
          t.id
        ])
      };
    case "SELECTION_ADD":
      return t.ids.length === 0 ? e : (t.ids.forEach((n) => r.add(n)), {
        ...e,
        ids: new Set(r)
      });
    case "SELECTION_REMOVE":
      return t.ids.length === 0 ? e : (t.ids.forEach((n) => r.delete(n)), {
        ...e,
        ids: new Set(r)
      });
    case "SELECTION_SET":
      return {
        ...e,
        ids: t.ids,
        mostRecent: t.mostRecent,
        anchor: t.anchor
      };
    case "SELECTION_MOST_RECENT":
      return {
        ...e,
        mostRecent: t.id
      };
    case "SELECTION_ANCHOR":
      return {
        ...e,
        anchor: t.id
      };
    default:
      return e;
  }
}
const ne = {
  cursor(e) {
    return {
      type: "DND_CURSOR",
      cursor: e
    };
  },
  dragStart(e, t) {
    return {
      type: "DND_DRAG_START",
      id: e,
      dragIds: t
    };
  },
  dragEnd() {
    return {
      type: "DND_DRAG_END"
    };
  },
  hovering(e, t) {
    return {
      type: "DND_HOVERING",
      parentId: e,
      index: t
    };
  }
};
function Ks(e = ce().dnd, t) {
  switch (t.type) {
    case "DND_CURSOR":
      return {
        ...e,
        cursor: t.cursor
      };
    case "DND_DRAG_START":
      return {
        ...e,
        dragId: t.id,
        dragIds: t.dragIds
      };
    case "DND_DRAG_END":
      return ce().dnd;
    case "DND_HOVERING":
      return {
        ...e,
        parentId: t.parentId,
        index: t.index
      };
    default:
      return e;
  }
}
const Ys = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 100,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%"
}, Xs = (e) => {
  if (!e)
    return {
      display: "none"
    };
  const { x: t, y: r } = e;
  return {
    transform: `translate(${t}px, ${r}px)`
  };
}, Qs = (e) => {
  if (!e)
    return {
      display: "none"
    };
  const { x: t, y: r } = e;
  return {
    transform: `translate(${t + 10}px, ${r + 10}px)`
  };
};
function dn({ offset: e, mouse: t, id: r, dragIds: n, isDragging: i }) {
  return /* @__PURE__ */ G(Js, {
    isDragging: i,
    children: [
      /* @__PURE__ */ I(Zs, {
        offset: e,
        children: /* @__PURE__ */ I(tu, {
          id: r,
          dragIds: n
        })
      }),
      /* @__PURE__ */ I(eu, {
        mouse: t,
        count: n.length
      })
    ]
  });
}
const Js = /* @__PURE__ */ it(function(t) {
  return t.isDragging ? /* @__PURE__ */ I("div", {
    style: Ys,
    children: t.children
  }) : null;
});
function Zs(e) {
  return /* @__PURE__ */ I("div", {
    className: "row preview",
    style: Xs(e.offset),
    children: e.children
  });
}
function eu(e) {
  const { count: t, mouse: r } = e;
  return t > 1 ? /* @__PURE__ */ I("div", {
    className: "selected-count",
    style: Qs(r),
    children: t
  }) : null;
}
const tu = /* @__PURE__ */ it(function(t) {
  const r = A(), n = r.get(t.id);
  return n ? /* @__PURE__ */ I(r.renderNode, {
    preview: !0,
    node: n,
    style: {
      paddingLeft: n.level * r.indent,
      opacity: 0.2,
      background: "transparent"
    },
    tree: r
  }) : null;
});
function ru() {
  const e = A(), r = Ds().cursor;
  if (!r || r.type !== "line")
    return null;
  const n = e.indent, i = e.rowHeight * r.index + (e.props.padding ?? e.props.paddingTop ?? 0), o = n * r.level, a = e.renderCursor;
  return /* @__PURE__ */ I(a, {
    top: i,
    left: o,
    indent: n
  });
}
const nu = /* @__PURE__ */ at(function(t, r) {
  const { children: n, ...i } = t, o = A();
  return /* @__PURE__ */ G("div", {
    // @ts-ignore
    ref: r,
    ...i,
    onClick: (a) => {
      a.currentTarget === a.target && o.deselectAll();
    },
    children: [
      /* @__PURE__ */ I(iu, {}),
      n
    ]
  });
}), iu = () => {
  const e = A();
  return /* @__PURE__ */ I("div", {
    style: {
      height: e.visibleNodes.length * e.rowHeight,
      width: "100%",
      position: "absolute",
      left: "0",
      right: "0"
    },
    children: /* @__PURE__ */ I(ru, {})
  });
}, ou = /* @__PURE__ */ at(function({ style: t, ...r }, n) {
  const i = A(), o = i.props.padding ?? i.props.paddingTop ?? 0, a = i.props.padding ?? i.props.paddingBottom ?? 0;
  return /* @__PURE__ */ I("div", {
    ref: n,
    style: {
      ...t,
      height: `${parseFloat(t.height) + o + a}px`
    },
    ...r
  });
});
function au(e) {
  const t = A(), r = t.selectedIds, [n, i, o] = Wa(() => ({
    canDrag: () => e.isDraggable,
    type: "NODE",
    item: () => {
      const a = t.isSelected(e.id) ? Array.from(r) : [
        e.id
      ];
      return t.dispatch(ne.dragStart(e.id, a)), {
        id: e.id
      };
    },
    end: () => {
      t.hideCursor();
      let { parentId: a, index: s, dragIds: u } = t.state.dnd;
      t.canDrop() && (ln(t.props.onMove, {
        dragIds: u,
        parentId: a === ue ? null : a,
        index: s,
        dragNodes: t.dragNodes,
        parentNode: t.get(a)
      }), t.open(a)), t.dispatch(ne.dragEnd());
    }
  }), [
    r,
    e
  ]);
  return H(() => {
    o(ui());
  }, [
    o
  ]), i;
}
function su(e, t) {
  const r = e.getBoundingClientRect(), n = t.x - Math.round(r.x), i = t.y - Math.round(r.y), o = r.height, a = i < o / 2, s = !a, u = o / 4, l = i > u && i < o - u;
  return {
    x: n,
    inTopHalf: a,
    inBottomHalf: s,
    inMiddle: l,
    atTop: !l && a,
    atBottom: !l && s
  };
}
function uu(e, t, r, n) {
  return e ? e.isInternal ? n.atTop ? [
    t,
    e
  ] : n.inMiddle ? [
    e,
    e
  ] : [
    e,
    r
  ] : n.inTopHalf ? [
    t,
    e
  ] : [
    e,
    r
  ] : [
    t,
    null
  ];
}
function cu(e, t, r, n) {
  const i = Math.round(Math.max(0, e.x - n) / n);
  let o, a;
  return t ? r ? (a = t.level, o = r.level) : (a = t.level, o = 0) : (a = 0, o = 0), en(i, o, a);
}
function We(e, t) {
  return {
    parentId: e || null,
    index: t
  };
}
function Be(e, t) {
  return {
    type: "line",
    index: e,
    level: t
  };
}
function lu(e) {
  return {
    type: "highlight",
    id: e
  };
}
function du(e, t) {
  var o;
  let r = e;
  for (; r.parent && r.level > t; )
    r = r.parent;
  const n = ((o = r.parent) == null ? void 0 : o.id) || null, i = nn(r) + 1;
  return {
    parentId: n,
    index: i
  };
}
function fn(e) {
  var s;
  const t = su(e.element, e.offset), { node: r, nextNode: n, prevNode: i } = e, [o, a] = uu(r, i, n, t);
  if (r && r.isInternal && t.inMiddle)
    return {
      drop: We(r.id, 0),
      cursor: lu(r.id)
    };
  if (!o)
    return {
      drop: We((s = a == null ? void 0 : a.parent) == null ? void 0 : s.id, 0),
      cursor: Be(0, 0)
    };
  if (tn(o) || rn(o)) {
    const u = cu(t, o, a, e.indent);
    return {
      drop: du(o, u),
      cursor: Be(o.rowIndex + 1, u)
    };
  }
  return {
    drop: We(o == null ? void 0 : o.id, 0),
    cursor: Be(o.rowIndex + 1, o.level + 1)
  };
}
function fu(e, t) {
  const r = A(), [n, i] = Kr(() => ({
    accept: "NODE",
    canDrop: () => r.canDrop(),
    hover: (o, a) => {
      const s = a.getClientOffset();
      if (!e.current || !s)
        return;
      const { cursor: u, drop: l } = fn({
        element: e.current,
        offset: s,
        indent: r.indent,
        node: t,
        prevNode: t.prev,
        nextNode: t.next
      });
      l && r.dispatch(ne.hovering(l.parentId, l.index)), a.canDrop() ? u && r.showCursor(u) : r.hideCursor();
    },
    drop: (o, a) => {
      if (!a.canDrop())
        return null;
    }
  }), [
    t,
    e.current,
    r.props
  ]);
  return i;
}
function hu(e) {
  const t = A(), r = t.at(e);
  if (!r)
    throw new Error(`Could not find node for index: ${e}`);
  return N(() => {
    const n = r.clone();
    return t.visibleNodes[e] = n, n;
  }, [
    ...Object.values(r.state),
    r
  ]);
}
const gu = /* @__PURE__ */ Ie.memo(function({ index: t, style: r }) {
  Zr(), Os();
  const n = A(), i = hu(t), o = te(null), a = au(i), s = fu(o, i), u = $r((c) => {
    o.current = c, s(c);
  }, [
    s
  ]), l = n.indent * i.level, d = N(() => ({
    paddingLeft: l
  }), [
    l
  ]), h = N(() => ({
    ...r,
    top: parseFloat(r.top) + (n.props.padding ?? n.props.paddingTop ?? 0)
  }), [
    r,
    n.props.padding,
    n.props.paddingTop
  ]), v = {
    role: "treeitem",
    "aria-level": i.level,
    "aria-selected": i.isSelected,
    style: h,
    tabIndex: -1,
    className: n.props.rowClassName
  };
  H(() => {
    var c;
    !i.isEditing && i.isFocused && ((c = o.current) == null || c.focus({
      preventScroll: !0
    }));
  }, [
    i.isEditing,
    i.isFocused,
    o.current
  ]);
  const b = n.renderNode, D = n.renderRow;
  return /* @__PURE__ */ I(D, {
    node: i,
    innerRef: u,
    attrs: v,
    children: /* @__PURE__ */ I(b, {
      node: i,
      tree: n,
      style: d,
      dragHandle: a
    })
  });
});
let qe = "", wr = null;
function hn() {
  Zr();
  const e = A();
  return /* @__PURE__ */ I("div", {
    style: {
      height: e.height,
      width: e.width,
      minHeight: 0,
      minWidth: 0
    },
    onContextMenu: e.props.onContextMenu,
    onClick: e.props.onClick,
    tabIndex: 0,
    onFocus: (t) => {
      t.currentTarget.contains(t.relatedTarget) || e.onFocus();
    },
    onBlur: (t) => {
      t.currentTarget.contains(t.relatedTarget) || e.onBlur();
    },
    onKeyDown: (t) => {
      var n;
      if (e.isEditing)
        return;
      if (t.key === "Backspace") {
        if (!e.props.onDelete)
          return;
        const i = Array.from(e.selectedIds);
        if (i.length > 1) {
          let o = e.mostRecentNode;
          for (; o && o.isSelected; )
            o = o.nextSibling;
          o || (o = e.lastNode), e.focus(o, {
            scroll: !1
          }), e.delete(Array.from(i));
        } else {
          const o = e.focusedNode;
          if (o) {
            const a = o.nextSibling, s = o.parent;
            e.focus(a || s, {
              scroll: !1
            }), e.delete(o);
          }
        }
        return;
      }
      if (t.key === "Tab" && !t.shiftKey) {
        t.preventDefault(), sn(t.currentTarget);
        return;
      }
      if (t.key === "Tab" && t.shiftKey) {
        t.preventDefault(), un(t.currentTarget);
        return;
      }
      if (t.key === "ArrowDown") {
        t.preventDefault();
        const i = e.nextNode;
        if (t.metaKey) {
          e.select(e.focusedNode), e.activate(e.focusedNode);
          return;
        } else if (!t.shiftKey || e.props.disableMultiSelection) {
          e.focus(i);
          return;
        } else {
          if (!i)
            return;
          const o = e.focusedNode;
          o ? o.isSelected ? e.selectContiguous(i) : e.selectMulti(i) : e.focus(e.firstNode);
          return;
        }
      }
      if (t.key === "ArrowUp") {
        t.preventDefault();
        const i = e.prevNode;
        if (!t.shiftKey || e.props.disableMultiSelection) {
          e.focus(i);
          return;
        } else {
          if (!i)
            return;
          const o = e.focusedNode;
          o ? o.isSelected ? e.selectContiguous(i) : e.selectMulti(i) : e.focus(e.lastNode);
          return;
        }
      }
      if (t.key === "ArrowRight") {
        const i = e.focusedNode;
        if (!i)
          return;
        i.isInternal && i.isOpen ? e.focus(e.nextNode) : i.isInternal && e.open(i.id);
        return;
      }
      if (t.key === "ArrowLeft") {
        const i = e.focusedNode;
        if (!i || i.isRoot)
          return;
        i.isInternal && i.isOpen ? e.close(i.id) : (n = i.parent) != null && n.isRoot || e.focus(i.parent);
        return;
      }
      if (t.key === "a" && t.metaKey && !e.props.disableMultiSelection) {
        t.preventDefault(), e.selectAll();
        return;
      }
      if (t.key === "a" && !t.metaKey && e.props.onCreate) {
        e.createLeaf();
        return;
      }
      if (t.key === "A" && !t.metaKey) {
        if (!e.props.onCreate)
          return;
        e.createInternal();
        return;
      }
      if (t.key === "Home") {
        t.preventDefault(), e.focus(e.firstNode);
        return;
      }
      if (t.key === "End") {
        t.preventDefault(), e.focus(e.lastNode);
        return;
      }
      if (t.key === "Enter") {
        const i = e.focusedNode;
        if (!i || !i.isEditable || !e.props.onRename)
          return;
        setTimeout(() => {
          i && e.edit(i);
        });
        return;
      }
      if (t.key === " ") {
        t.preventDefault();
        const i = e.focusedNode;
        if (!i)
          return;
        i.isLeaf ? (i.select(), i.activate()) : i.toggle();
        return;
      }
      if (t.key === "*") {
        const i = e.focusedNode;
        if (!i)
          return;
        e.openSiblings(i);
        return;
      }
      if (t.key === "PageUp") {
        t.preventDefault(), e.pageUp();
        return;
      }
      t.key === "PageDown" && (t.preventDefault(), e.pageDown()), clearTimeout(wr), qe += t.key, wr = setTimeout(() => {
        qe = "";
      }, 600);
      const r = e.visibleNodes.find((i) => {
        const o = i.data.name;
        return typeof o == "string" ? o.toLowerCase().startsWith(qe) : !1;
      });
      r && e.focus(r.id);
    },
    children: /* @__PURE__ */ I(Ss, {
      className: e.props.className,
      outerRef: e.listEl,
      itemCount: e.visibleNodes.length,
      height: e.height,
      width: e.width,
      itemSize: e.rowHeight,
      overscanCount: e.overscanCount,
      itemKey: (t) => {
        var r;
        return ((r = e.visibleNodes[t]) == null ? void 0 : r.id) || t;
      },
      outerElementType: nu,
      innerElementType: ou,
      onScroll: e.props.onScroll,
      onItemsRendered: e.onItemsRendered.bind(e),
      ref: e.list,
      children: gu
    })
  });
}
function Er(e) {
  return e.isFiltered ? vu(e.root, e.isMatch.bind(e)) : pu(e.root);
}
function pu(e) {
  const t = [];
  function r(n) {
    var i;
    n.level >= 0 && t.push(n), n.isOpen && ((i = n.children) == null || i.forEach(r));
  }
  return r(e), t.forEach(gn), t;
}
function vu(e, t) {
  const r = {}, n = [];
  function i(a) {
    if (!a.isRoot && t(a)) {
      r[a.id] = !0;
      let u = a.parent;
      for (; u; )
        r[u.id] = !0, u = u.parent;
    }
    if (a.children)
      for (let u of a.children)
        i(u);
  }
  function o(a) {
    var s;
    a.level >= 0 && r[a.id] && n.push(a), a.isOpen && ((s = a.children) == null || s.forEach(o));
  }
  return i(e), o(e), n.forEach(gn), n;
}
function gn(e, t) {
  e.rowIndex = t;
}
const Cr = (e) => e.reduce((t, r, n) => (t[r.id] = n, t), {}), { safeRun: R, identify: V, identifyNull: F } = C;
class re {
  constructor(t, r, n, i) {
    this.store = t, this.props = r, this.list = n, this.listEl = i, this.visibleStartIndex = 0, this.visibleStopIndex = 0, this.root = Ir(this), this.visibleNodes = Er(this), this.idToIndex = Cr(this.visibleNodes);
  }
  /* Changes here must also be made in constructor() */
  update(t) {
    this.props = t, this.root = Ir(this), this.visibleNodes = Er(this), this.idToIndex = Cr(this.visibleNodes);
  }
  /* Store helpers */
  dispatch(t) {
    return this.store.dispatch(t);
  }
  get state() {
    return this.store.getState();
  }
  get openState() {
    return this.state.nodes.open.unfiltered;
  }
  /* Tree Props */
  get width() {
    return this.props.width ?? 300;
  }
  get height() {
    return this.props.height ?? 500;
  }
  get indent() {
    return this.props.indent ?? 24;
  }
  get rowHeight() {
    return this.props.rowHeight ?? 24;
  }
  get overscanCount() {
    return this.props.overscanCount ?? 1;
  }
  get searchTerm() {
    return (this.props.searchTerm || "").trim();
  }
  get matchFn() {
    const t = this.props.searchMatch ?? ((r, n) => JSON.stringify(Object.values(r.data)).toLocaleLowerCase().includes(n.toLocaleLowerCase()));
    return (r) => t(r, this.searchTerm);
  }
  accessChildren(t) {
    const r = this.props.childrenAccessor || "children";
    return C.access(t, r) ?? null;
  }
  accessId(t) {
    const r = this.props.idAccessor || "id", n = C.access(t, r);
    if (!n)
      throw new Error("Data must contain an 'id' property or props.idAccessor must return a string");
    return n;
  }
  /* Node Access */
  get firstNode() {
    return this.visibleNodes[0] ?? null;
  }
  get lastNode() {
    return this.visibleNodes[this.visibleNodes.length - 1] ?? null;
  }
  get focusedNode() {
    return this.get(this.state.nodes.focus.id) ?? null;
  }
  get mostRecentNode() {
    return this.get(this.state.nodes.selection.mostRecent) ?? null;
  }
  get nextNode() {
    const t = this.indexOf(this.focusedNode);
    return t === null ? null : this.at(t + 1);
  }
  get prevNode() {
    const t = this.indexOf(this.focusedNode);
    return t === null ? null : this.at(t - 1);
  }
  get(t) {
    return t && t in this.idToIndex && this.visibleNodes[this.idToIndex[t]] || null;
  }
  at(t) {
    return this.visibleNodes[t] || null;
  }
  nodesBetween(t, r) {
    if (t === null || r === null)
      return [];
    const n = this.indexOf(t) ?? 0, i = this.indexOf(r);
    if (i === null)
      return [];
    const o = Math.min(n, i), a = Math.max(n, i);
    return this.visibleNodes.slice(o, a + 1);
  }
  indexOf(t) {
    const r = C.identifyNull(t);
    return r ? this.idToIndex[r] : null;
  }
  /* Data Operations */
  get editingId() {
    return this.state.nodes.edit.id;
  }
  createInternal() {
    return this.create({
      type: "internal"
    });
  }
  createLeaf() {
    return this.create({
      type: "leaf"
    });
  }
  async create(t = {}) {
    const r = t.parentId === void 0 ? C.getInsertParentId(this) : t.parentId, n = t.index ?? C.getInsertIndex(this), i = t.type ?? "leaf", o = await R(this.props.onCreate, {
      type: i,
      parentId: r,
      index: n,
      parentNode: this.get(r)
    });
    o && (this.focus(o), setTimeout(() => {
      this.edit(o).then(() => {
        this.select(o), this.activate(o);
      });
    }));
  }
  async delete(t) {
    if (!t)
      return;
    const n = (Array.isArray(t) ? t : [
      t
    ]).map(V), i = n.map((o) => this.get(o)).filter((o) => !!o);
    await R(this.props.onDelete, {
      nodes: i,
      ids: n
    });
  }
  edit(t) {
    const r = V(t);
    return this.resolveEdit({
      cancelled: !0
    }), this.scrollTo(r), this.dispatch(ze(r)), new Promise((n) => {
      re.editPromise = n;
    });
  }
  async submit(t, r) {
    if (!t)
      return;
    const n = V(t);
    await R(this.props.onRename, {
      id: n,
      name: r,
      node: this.get(n)
    }), this.dispatch(ze(null)), this.resolveEdit({
      cancelled: !1,
      value: r
    }), setTimeout(() => this.onFocus());
  }
  reset() {
    this.dispatch(ze(null)), this.resolveEdit({
      cancelled: !0
    }), setTimeout(() => this.onFocus());
  }
  activate(t) {
    const r = this.get(F(t));
    r && R(this.props.onActivate, r);
  }
  resolveEdit(t) {
    const r = re.editPromise;
    r && r(t), re.editPromise = null;
  }
  /* Focus and Selection */
  get selectedIds() {
    return this.state.nodes.selection.ids;
  }
  get selectedNodes() {
    let t = [];
    for (let r of Array.from(this.selectedIds)) {
      const n = this.get(r);
      n && t.push(n);
    }
    return t;
  }
  focus(t, r = {}) {
    t && (this.props.selectionFollowsFocus ? this.select(t) : (this.dispatch(ee(V(t))), r.scroll !== !1 && this.scrollTo(t), this.focusedNode && R(this.props.onFocus, this.focusedNode)));
  }
  pageUp() {
    var o;
    const t = this.visibleStartIndex, n = this.visibleStopIndex - t;
    let i = ((o = this.focusedNode) == null ? void 0 : o.rowIndex) ?? 0;
    i > t ? i = t : i = Math.max(t - n, 0), this.focus(this.at(i));
  }
  pageDown() {
    var o;
    const t = this.visibleStartIndex, r = this.visibleStopIndex, n = r - t;
    let i = ((o = this.focusedNode) == null ? void 0 : o.rowIndex) ?? 0;
    i < r ? i = r : i = Math.min(i + n, this.visibleNodes.length - 1), this.focus(this.at(i));
  }
  select(t, r = {}) {
    if (!t)
      return;
    const n = r.focus !== !1, i = V(t);
    n && this.dispatch(ee(i)), this.dispatch(j.only(i)), this.dispatch(j.anchor(i)), this.dispatch(j.mostRecent(i)), this.scrollTo(i, r.align), this.focusedNode && n && R(this.props.onFocus, this.focusedNode), R(this.props.onSelect, this.selectedNodes);
  }
  deselect(t) {
    if (!t)
      return;
    const r = V(t);
    this.dispatch(j.remove(r));
  }
  selectMulti(t) {
    const r = this.get(F(t));
    r && (this.dispatch(ee(r.id)), this.dispatch(j.add(r.id)), this.dispatch(j.anchor(r.id)), this.dispatch(j.mostRecent(r.id)), this.scrollTo(r), this.focusedNode && R(this.props.onFocus, this.focusedNode), R(this.props.onSelect, this.selectedNodes));
  }
  selectContiguous(t) {
    if (!t)
      return;
    const r = V(t), { anchor: n, mostRecent: i } = this.state.nodes.selection;
    this.dispatch(ee(r)), this.dispatch(j.remove(this.nodesBetween(n, i))), this.dispatch(j.add(this.nodesBetween(n, F(r)))), this.dispatch(j.mostRecent(r)), this.scrollTo(r), this.focusedNode && R(this.props.onFocus, this.focusedNode), R(this.props.onSelect, this.selectedNodes);
  }
  deselectAll() {
    this.setSelection({
      ids: [],
      anchor: null,
      mostRecent: null
    }), R(this.props.onSelect, this.selectedNodes);
  }
  selectAll() {
    var t;
    this.setSelection({
      ids: Object.keys(this.idToIndex),
      anchor: this.firstNode,
      mostRecent: this.lastNode
    }), this.dispatch(ee((t = this.lastNode) == null ? void 0 : t.id)), this.focusedNode && R(this.props.onFocus, this.focusedNode), R(this.props.onSelect, this.selectedNodes);
  }
  setSelection(t) {
    var o;
    const r = new Set((o = t.ids) == null ? void 0 : o.map(V)), n = F(t.anchor), i = F(t.mostRecent);
    this.dispatch(j.set({
      ids: r,
      anchor: n,
      mostRecent: i
    })), R(this.props.onSelect, this.selectedNodes);
  }
  /* Drag and Drop */
  get cursorParentId() {
    const { cursor: t } = this.state.dnd;
    switch (t.type) {
      case "highlight":
        return t.id;
      default:
        return null;
    }
  }
  get cursorOverFolder() {
    return this.state.dnd.cursor.type === "highlight";
  }
  get dragNodes() {
    return this.state.dnd.dragIds.map((t) => this.get(t)).filter((t) => !!t);
  }
  canDrop() {
    if (this.isFiltered)
      return !1;
    const t = this.get(this.state.dnd.parentId) ?? this.root, r = this.dragNodes, n = this.props.disableDrop;
    for (const i of r)
      if (!i || !t || i.isInternal && C.isDecendent(t, i))
        return !1;
    return typeof n == "function" ? !n({
      parentNode: t,
      dragNodes: this.dragNodes,
      index: this.state.dnd.index
    }) : typeof n == "string" ? !t.data[n] : typeof n == "boolean" ? !n : !0;
  }
  hideCursor() {
    this.dispatch(ne.cursor({
      type: "none"
    }));
  }
  showCursor(t) {
    this.dispatch(ne.cursor(t));
  }
  /* Visibility */
  open(t) {
    const r = F(t);
    r && (this.isOpen(r) || (this.dispatch(rt.open(r, this.isFiltered)), R(this.props.onToggle, r)));
  }
  close(t) {
    const r = F(t);
    r && this.isOpen(r) && (this.dispatch(rt.close(r, this.isFiltered)), R(this.props.onToggle, r));
  }
  toggle(t) {
    const r = F(t);
    if (r)
      return this.isOpen(r) ? this.close(r) : this.open(r);
  }
  openParents(t) {
    const r = F(t);
    if (!r)
      return;
    const n = C.dfs(this.root, r);
    let i = n == null ? void 0 : n.parent;
    for (; i; )
      this.open(i.id), i = i.parent;
  }
  openSiblings(t) {
    const r = t.parent;
    if (!r)
      this.toggle(t.id);
    else if (r.children) {
      const n = t.isOpen;
      for (let i of r.children)
        i.isInternal && (n ? this.close(i.id) : this.open(i.id));
      this.scrollTo(this.focusedNode);
    }
  }
  openAll() {
    C.walk(this.root, (t) => {
      t.isInternal && t.open();
    });
  }
  closeAll() {
    C.walk(this.root, (t) => {
      t.isInternal && t.close();
    });
  }
  /* Scrolling */
  scrollTo(t, r = "smart") {
    if (!t)
      return;
    const n = V(t);
    return this.openParents(n), C.waitFor(() => n in this.idToIndex).then(() => {
      var o;
      const i = this.idToIndex[n];
      i !== void 0 && ((o = this.list.current) == null || o.scrollToItem(i, r));
    }).catch(() => {
    });
  }
  /* State Checks */
  get isEditing() {
    return this.state.nodes.edit.id !== null;
  }
  get isFiltered() {
    var t;
    return !!((t = this.props.searchTerm) != null && t.trim());
  }
  get hasFocus() {
    return this.state.nodes.focus.treeFocused;
  }
  get hasNoSelection() {
    return this.state.nodes.selection.ids.size === 0;
  }
  get hasOneSelection() {
    return this.state.nodes.selection.ids.size === 1;
  }
  get hasMultipleSelections() {
    return this.state.nodes.selection.ids.size > 1;
  }
  isSelected(t) {
    return t ? this.state.nodes.selection.ids.has(t) : !1;
  }
  isOpen(t) {
    if (!t)
      return !1;
    if (t === ue)
      return !0;
    const r = this.props.openByDefault ?? !0;
    return this.isFiltered ? this.state.nodes.open.filtered[t] ?? !0 : this.state.nodes.open.unfiltered[t] ?? r;
  }
  isEditable(t) {
    const r = this.props.disableEdit || (() => !1);
    return !C.access(t, r);
  }
  isDraggable(t) {
    const r = this.props.disableDrag || (() => !1);
    return !C.access(t, r);
  }
  isDragging(t) {
    const r = F(t);
    return r ? this.state.nodes.drag.id === r : !1;
  }
  isFocused(t) {
    return this.hasFocus && this.state.nodes.focus.id === t;
  }
  isMatch(t) {
    return this.matchFn(t);
  }
  willReceiveDrop(t) {
    const r = F(t);
    return r ? r === this.state.nodes.drag.idWillReceiveDrop : !1;
  }
  /* Tree Event Handlers */
  onFocus() {
    const t = this.focusedNode || this.firstNode;
    t && this.dispatch(ee(t.id));
  }
  onBlur() {
    this.dispatch(zs());
  }
  onItemsRendered(t) {
    this.visibleStartIndex = t.visibleStartIndex, this.visibleStopIndex = t.visibleStopIndex;
  }
  /* Get Renderers */
  get renderContainer() {
    return this.props.renderContainer || hn;
  }
  get renderRow() {
    return this.props.renderRow || Hs;
  }
  get renderNode() {
    return this.props.children || js;
  }
  get renderDragPreview() {
    return this.props.renderDragPreview || dn;
  }
  get renderCursor() {
    return this.props.renderCursor || Ls;
  }
}
function yu(e = {
  id: null,
  idWillReceiveDrop: null
}, t) {
  switch (t.type) {
    case "DND_DRAG_START":
      return {
        ...e,
        id: t.id
      };
    case "DND_DRAG_END":
      return {
        ...e,
        id: null
      };
    case "DND_CURSOR":
      const r = t.cursor;
      return r.type === "highlight" && r.id !== e.idWillReceiveDrop ? {
        ...e,
        idWillReceiveDrop: r.id
      } : r.type !== "highlight" && e.idWillReceiveDrop !== null ? {
        ...e,
        idWillReceiveDrop: null
      } : e;
    default:
      return e;
  }
}
const mu = Ft({
  nodes: Ft({
    focus: Ws,
    edit: Vs,
    open: qs,
    selection: Gs,
    drag: yu
  }),
  dnd: Ks
}), bu = ce();
function Su({ treeProps: e, imperativeHandle: t, children: r }) {
  const n = te(null), i = te(null), o = te(ct(mu, ce(e))), a = jn.useSyncExternalStore(o.current.subscribe, o.current.getState, () => bu), s = N(() => new re(o.current, e, n, i), []), u = te(0);
  return N(() => {
    u.current += 1, s.update(e);
  }, [
    ...Object.values(e),
    a.nodes.open
  ]), Rn(t, () => s), H(() => {
    s.props.selection ? s.select(s.props.selection, {
      focus: !1
    }) : s.deselectAll();
  }, [
    s.props.selection
  ]), H(() => {
    s.props.searchTerm || o.current.dispatch(rt.clear(!0));
  }, [
    s.props.searchTerm
  ]), /* @__PURE__ */ I(Yr.Provider, {
    value: s,
    children: /* @__PURE__ */ I(Jr.Provider, {
      value: u.current,
      children: /* @__PURE__ */ I(Xr.Provider, {
        value: a.nodes,
        children: /* @__PURE__ */ I(Qr.Provider, {
          value: a.dnd,
          children: /* @__PURE__ */ I(Bo, {
            backend: ci,
            options: {
              rootElement: s.props.dndRootElement || void 0
            },
            ...e.dndManager && {
              manager: e.dndManager
            },
            children: r
          })
        })
      })
    })
  });
}
function Ou() {
  const e = A(), [, t] = Kr(() => ({
    accept: "NODE",
    canDrop: (r, n) => n.isOver({
      shallow: !0
    }) ? e.canDrop() : !1,
    hover: (r, n) => {
      if (!n.isOver({
        shallow: !0
      }))
        return;
      const i = n.getClientOffset();
      if (!e.listEl.current || !i)
        return;
      const { cursor: o, drop: a } = fn({
        element: e.listEl.current,
        offset: i,
        indent: e.indent,
        node: null,
        prevNode: e.visibleNodes[e.visibleNodes.length - 1],
        nextNode: null
      });
      a && e.dispatch(ne.hovering(a.parentId, a.index)), n.canDrop() ? o && e.showCursor(o) : e.hideCursor();
    }
  }), [
    e
  ]);
  t(e.listEl);
}
function Du(e) {
  return Ou(), e.children;
}
function Iu() {
  const t = A().props.renderContainer || hn;
  return /* @__PURE__ */ I(nt, {
    children: /* @__PURE__ */ I(t, {})
  });
}
function Tu() {
  const e = A(), { offset: t, mouse: r, item: n, isDragging: i } = ls((a) => ({
    offset: a.getSourceClientOffset(),
    mouse: a.getClientOffset(),
    item: a.getItem(),
    isDragging: a.isDragging()
  })), o = e.props.renderDragPreview || dn;
  return /* @__PURE__ */ I(o, {
    offset: t,
    mouse: r,
    id: (n == null ? void 0 : n.id) || null,
    dragIds: (n == null ? void 0 : n.dragIds) || [],
    isDragging: i
  });
}
var wu = {};
_(wu, "useSimpleTree", () => yn);
var Eu = {};
_(Eu, "SimpleTree", () => pn);
class pn {
  constructor(t) {
    this.root = Cu(t);
  }
  get data() {
    var t;
    return ((t = this.root.children) == null ? void 0 : t.map((r) => r.data)) ?? [];
  }
  create(t) {
    const r = t.parentId ? this.find(t.parentId) : this.root;
    if (!r)
      return null;
    r.addChild(t.data, t.index);
  }
  move(t) {
    const r = this.find(t.id), n = t.parentId ? this.find(t.parentId) : this.root;
    !r || !n || (n.addChild(r.data, t.index), r.drop());
  }
  update(t) {
    const r = this.find(t.id);
    r && r.update(t.changes);
  }
  drop(t) {
    const r = this.find(t.id);
    r && r.drop();
  }
  find(t, r = this.root) {
    if (!r)
      return null;
    if (r.id === t)
      return r;
    if (r.children) {
      for (let n of r.children) {
        const i = this.find(t, n);
        if (i)
          return i;
      }
      return null;
    }
    return null;
  }
}
function Cu(e) {
  const t = new vn({
    id: "ROOT"
  }, null);
  return t.children = e.map((r) => gt(r, t)), t;
}
function gt(e, t) {
  const r = new vn(e, t);
  return e.children && (r.children = e.children.map((n) => gt(n, r))), r;
}
class vn {
  constructor(t, r) {
    this.data = t, this.parent = r, this.id = t.id;
  }
  hasParent() {
    return !!this.parent;
  }
  get childIndex() {
    return this.hasParent() ? this.parent.children.indexOf(this) : -1;
  }
  addChild(t, r) {
    const n = gt(t, this);
    this.children = this.children ?? [], this.children.splice(r, 0, n), this.data.children = this.data.children ?? [], this.data.children.splice(r, 0, t);
  }
  removeChild(t) {
    var r, n;
    (r = this.children) == null || r.splice(t, 1), (n = this.data.children) == null || n.splice(t, 1);
  }
  update(t) {
    if (this.hasParent()) {
      const r = this.childIndex;
      this.parent.addChild({
        ...this.data,
        ...t
      }, r), this.drop();
    }
  }
  drop() {
    this.hasParent() && this.parent.removeChild(this.childIndex);
  }
}
let $u = 0;
function yn(e) {
  const [t, r] = ot(e), n = N(() => new pn(t), [
    t
  ]);
  return [
    t,
    {
      onMove: (l) => {
        for (const d of l.dragIds)
          n.move({
            id: d,
            parentId: l.parentId,
            index: l.index
          });
        r(n.data);
      },
      onRename: ({ name: l, id: d }) => {
        n.update({
          id: d,
          changes: {
            name: l
          }
        }), r(n.data);
      },
      onCreate: ({ parentId: l, index: d, type: h }) => {
        const v = {
          id: `simple-tree-id-${$u++}`,
          name: ""
        };
        return h === "internal" && (v.children = []), n.create({
          parentId: l,
          index: d,
          data: v
        }), r(n.data), v;
      },
      onDelete: (l) => {
        l.ids.forEach((d) => n.drop({
          id: d
        })), r(n.data);
      }
    }
  ];
}
function _u(e) {
  if (e.initialData && e.data)
    throw new Error("React Arborist Tree => Provide either a data or initialData prop, but not both.");
  if (e.initialData && (e.onCreate || e.onDelete || e.onMove || e.onRename))
    throw new Error(`React Arborist Tree => You passed the initialData prop along with a data handler.
Use the data prop if you want to provide your own handlers.`);
  if (e.initialData) {
    const [t, r] = yn(e.initialData);
    return {
      ...e,
      ...r,
      data: t
    };
  } else
    return e;
}
function xu(e, t) {
  const r = _u(e);
  return /* @__PURE__ */ G(Su, {
    treeProps: r,
    imperativeHandle: t,
    children: [
      /* @__PURE__ */ I(Du, {
        children: /* @__PURE__ */ I(Iu, {})
      }),
      /* @__PURE__ */ I(Tu, {})
    ]
  });
}
const Nu = /* @__PURE__ */ at(xu), Ru = (e) => {
  if (e.data.icon)
    return Mn(e.data.icon);
}, Pu = (e) => {
  if (!e.isLeaf)
    return e.isOpen ? kn : An;
}, ku = ({ node: e, style: t, dragHandle: r }) => {
  var n = Pu(e), i = Ru(e);
  return /* @__PURE__ */ G(
    "div",
    {
      className: "tree-menu",
      onClick: () => e.isInternal && e.toggle(),
      children: [
        /* @__PURE__ */ G(
          "div",
          {
            className: "tree-menu-list",
            style: { ...t },
            ref: r,
            children: [
              i ? /* @__PURE__ */ I(i, { className: "label-icon" }) : /* @__PURE__ */ I(nt, {}),
              /* @__PURE__ */ I("div", { children: e.data.name })
            ]
          }
        ),
        n ? /* @__PURE__ */ I("div", { className: "arrow-icon", children: /* @__PURE__ */ I(n, {}) }) : /* @__PURE__ */ I("div", {})
      ]
    }
  );
};
function zu(e) {
  const t = $n(), [r, n] = ot(e.data);
  return H(() => {
    n(e.data);
  }, [e.data]), /* @__PURE__ */ I(
    Nu,
    {
      initialData: r,
      padding: 0,
      width: "100%",
      rowHeight: 40,
      height: 500,
      idAccessor: "name",
      childrenAccessor: (i) => i.children,
      onSelect: (i) => {
        var a, s;
        var o = (s = (a = i[0]) == null ? void 0 : a.data) == null ? void 0 : s.path;
        t(o);
      },
      children: ku
    }
  );
}
export {
  zu as default
};
