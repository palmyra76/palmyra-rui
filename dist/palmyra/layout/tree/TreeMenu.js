var En = Object.defineProperty;
var Cn = (t, e, r) => e in t ? En(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var bt = (t, e, r) => (Cn(t, typeof e != "symbol" ? e + "" : e, r), r);
import { jsx as I, jsxs as G, Fragment as nt } from "react/jsx-runtime";
import { useNavigate as $n } from "react-router-dom";
import Ie, { createContext as le, memo as it, useEffect as H, isValidElement as _n, cloneElement as St, useLayoutEffect as Nn, useMemo as x, useContext as de, useState as ot, useCallback as $r, createElement as Ne, PureComponent as xn, forwardRef as at, useRef as te, useImperativeHandle as Rn } from "react";
import { g as Pn } from "../../../assets/_commonjsHelpers.js";
import { ArrowDropDown as kn, ArrowRight as An } from "@mui/icons-material";
import { SimpleIconProvider as Mn } from "../flexiLayout/IconProvider.js";
/* empty css                        */var Ge = { exports: {} }, xe = {};
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
    return xe;
  Ot = 1;
  var t = Ie;
  function e(h, v) {
    return h === v && (h !== 0 || 1 / h === 1 / v) || h !== h && v !== v;
  }
  var r = typeof Object.is == "function" ? Object.is : e, n = t.useState, i = t.useEffect, o = t.useLayoutEffect, a = t.useDebugValue;
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
  return xe.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : d, xe;
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
    var t = Ie, e = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(p) {
      {
        for (var m = arguments.length, S = new Array(m > 1 ? m - 1 : 0), O = 1; O < m; O++)
          S[O - 1] = arguments[O];
        n("error", p, S);
      }
    }
    function n(p, m, S) {
      {
        var O = e.ReactDebugCurrentFrame, E = O.getStackAddendum();
        E !== "" && (m += "%s", S = S.concat([E]));
        var N = S.map(function($) {
          return String($);
        });
        N.unshift("Warning: " + m), Function.prototype.apply.call(console[p], console, N);
      }
    }
    function i(p, m) {
      return p === m && (p !== 0 || 1 / p === 1 / m) || p !== p && m !== m;
    }
    var o = typeof Object.is == "function" ? Object.is : i, a = t.useState, s = t.useEffect, u = t.useLayoutEffect, l = t.useDebugValue, d = !1, h = !1;
    function v(p, m, S) {
      d || t.startTransition !== void 0 && (d = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var O = m();
      if (!h) {
        var E = m();
        o(O, E) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), h = !0);
      }
      var N = a({
        inst: {
          value: O,
          getSnapshot: m
        }
      }), $ = N[0].inst, z = N[1];
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
    var c = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", f = !c, g = f ? D : v, y = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : g;
    Re.useSyncExternalStore = y, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Re;
}
process.env.NODE_ENV === "production" ? Ge.exports = Ln() : Ge.exports = Hn();
var jn = Ge.exports;
function _r(t) {
  var e = null, r = function() {
    return e == null && (e = t()), e;
  };
  return r;
}
function Fn(t, e) {
  return t.filter(function(r) {
    return r !== e;
  });
}
function Un(t, e) {
  var r = /* @__PURE__ */ new Set(), n = function(a) {
    return r.add(a);
  };
  t.forEach(n), e.forEach(n);
  var i = [];
  return r.forEach(function(o) {
    return i.push(o);
  }), i;
}
function Vn(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function It(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function zn(t, e, r) {
  return e && It(t.prototype, e), r && It(t, r), t;
}
function Tt(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Wn = /* @__PURE__ */ function() {
  function t(e) {
    Vn(this, t), Tt(this, "entered", []), Tt(this, "isNodeInDocument", void 0), this.isNodeInDocument = e;
  }
  return zn(t, [{
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
  }]), t;
}(), Bn = _r(function() {
  return /firefox/i.test(navigator.userAgent);
}), Nr = _r(function() {
  return !!window.safari;
});
function qn(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function wt(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Gn(t, e, r) {
  return e && wt(t.prototype, e), r && wt(t, r), t;
}
function oe(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Et = /* @__PURE__ */ function() {
  function t(e, r) {
    qn(this, t), oe(this, "xs", void 0), oe(this, "ys", void 0), oe(this, "c1s", void 0), oe(this, "c2s", void 0), oe(this, "c3s", void 0);
    for (var n = e.length, i = [], o = 0; o < n; o++)
      i.push(o);
    i.sort(function(N, $) {
      return e[N] < e[$] ? -1 : 1;
    });
    for (var a = [], s = [], u, l, d = 0; d < n - 1; d++)
      u = e[d + 1] - e[d], l = r[d + 1] - r[d], a.push(u), s.push(l / u);
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
    this.xs = e, this.ys = r, this.c1s = h, this.c2s = g, this.c3s = y;
  }
  return Gn(t, [{
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
  }]), t;
}(), Kn = 1;
function xr(t) {
  var e = t.nodeType === Kn ? t : t.parentElement;
  if (!e)
    return null;
  var r = e.getBoundingClientRect(), n = r.top, i = r.left;
  return {
    x: i,
    y: n
  };
}
function fe(t) {
  return {
    x: t.clientX,
    y: t.clientY
  };
}
function Yn(t) {
  var e;
  return t.nodeName === "IMG" && (Bn() || !((e = document.documentElement) !== null && e !== void 0 && e.contains(t)));
}
function Xn(t, e, r, n) {
  var i = t ? e.width : r, o = t ? e.height : n;
  return Nr() && t && (o /= window.devicePixelRatio, i /= window.devicePixelRatio), {
    dragPreviewWidth: i,
    dragPreviewHeight: o
  };
}
function Qn(t, e, r, n, i) {
  var o = Yn(e), a = o ? t : e, s = xr(a), u = {
    x: r.x - s.x,
    y: r.y - s.y
  }, l = t.offsetWidth, d = t.offsetHeight, h = n.anchorX, v = n.anchorY, b = Xn(o, e, l, d), D = b.dragPreviewWidth, c = b.dragPreviewHeight, f = function() {
    var E = new Et([0, 0.5, 1], [
      // Dock to the top
      u.y,
      // Align at the center
      u.y / d * c,
      // Dock to the bottom
      u.y + c - d
    ]), N = E.interpolate(v);
    return Nr() && o && (N += (window.devicePixelRatio - 1) * c), N;
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
function Pe(t, e, r) {
  var n = e.reduce(function(i, o) {
    return i || t.getData(o);
  }, "");
  return n ?? r;
}
var Q;
function he(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Ke = (Q = {}, he(Q, Rr, {
  exposeProperties: {
    files: function(e) {
      return Array.prototype.slice.call(e.files);
    },
    items: function(e) {
      return e.items;
    },
    dataTransfer: function(e) {
      return e;
    }
  },
  matchesTypes: ["Files"]
}), he(Q, Ar, {
  exposeProperties: {
    html: function(e, r) {
      return Pe(e, r, "");
    },
    dataTransfer: function(e) {
      return e;
    }
  },
  matchesTypes: ["Html", "text/html"]
}), he(Q, Pr, {
  exposeProperties: {
    urls: function(e, r) {
      return Pe(e, r, "").split(`
`);
    },
    dataTransfer: function(e) {
      return e;
    }
  },
  matchesTypes: ["Url", "text/uri-list"]
}), he(Q, kr, {
  exposeProperties: {
    text: function(e, r) {
      return Pe(e, r, "");
    },
    dataTransfer: function(e) {
      return e;
    }
  },
  matchesTypes: ["Text", "text/plain"]
}), Q);
function Jn(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function $t(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Zn(t, e, r) {
  return e && $t(t.prototype, e), r && $t(t, r), t;
}
function _t(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var ei = /* @__PURE__ */ function() {
  function t(e) {
    Jn(this, t), _t(this, "item", void 0), _t(this, "config", void 0), this.config = e, this.item = {}, this.initializeExposedProperties();
  }
  return Zn(t, [{
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
  }]), t;
}();
function ti(t, e) {
  var r = new ei(Ke[t]);
  return r.loadDataTransfer(e), r;
}
function ke(t) {
  if (!t)
    return null;
  var e = Array.prototype.slice.call(t.types || []);
  return Object.keys(Ke).filter(function(r) {
    var n = Ke[r].matchesTypes;
    return n.some(function(i) {
      return e.indexOf(i) > -1;
    });
  })[0] || null;
}
function ri(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Nt(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function ni(t, e, r) {
  return e && Nt(t.prototype, e), r && Nt(t, r), t;
}
function Ae(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var ii = /* @__PURE__ */ function() {
  function t(e, r) {
    ri(this, t), Ae(this, "ownerDocument", null), Ae(this, "globalContext", void 0), Ae(this, "optionsArgs", void 0), this.globalContext = e, this.optionsArgs = r;
  }
  return ni(t, [{
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
  }]), t;
}();
function xt(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? xt(Object(r), !0).forEach(function(n) {
      w(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : xt(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function oi(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Pt(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function ai(t, e, r) {
  return e && Pt(t.prototype, e), r && Pt(t, r), t;
}
function w(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var si = /* @__PURE__ */ function() {
  function t(e, r, n) {
    var i = this;
    oi(this, t), w(this, "options", void 0), w(this, "actions", void 0), w(this, "monitor", void 0), w(this, "registry", void 0), w(this, "enterLeaveCounter", void 0), w(this, "sourcePreviewNodes", /* @__PURE__ */ new Map()), w(this, "sourcePreviewNodeOptions", /* @__PURE__ */ new Map()), w(this, "sourceNodes", /* @__PURE__ */ new Map()), w(this, "sourceNodeOptions", /* @__PURE__ */ new Map()), w(this, "dragStartSourceIds", null), w(this, "dropTargetIds", []), w(this, "dragEnterTargetIds", []), w(this, "currentNativeSource", null), w(this, "currentNativeHandle", null), w(this, "currentDragSourceNode", null), w(this, "altKeyPressed", !1), w(this, "mouseMoveTimeoutTimer", null), w(this, "asyncEndDragFrameId", null), w(this, "dragOverTargetIds", null), w(this, "lastClientOffset", null), w(this, "hoverRafId", null), w(this, "getSourceClientOffset", function(o) {
      var a = i.sourceNodes.get(o);
      return a && xr(a) || null;
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
    }), this.options = new ii(r, n), this.actions = e.getActions(), this.monitor = e.getMonitor(), this.registry = e.getRegistry(), this.enterLeaveCounter = new Wn(this.isNodeInDocument);
  }
  return ai(t, [{
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
  }]), t;
}(), ge;
function ui() {
  return ge || (ge = new Image(), ge.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), ge;
}
var ci = function(e, r, n) {
  return new si(e, r, n);
}, Mr = le({
  dragDropManager: void 0
}), L;
(function(t) {
  t.SOURCE = "SOURCE", t.TARGET = "TARGET";
})(L || (L = {}));
function T(t, e) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    n[i - 2] = arguments[i];
  if (process.env.NODE_ENV !== "production" && e === void 0)
    throw new Error("invariant requires an error message argument");
  if (!t) {
    var o;
    if (e === void 0)
      o = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var a = 0;
      o = new Error(e.replace(/%s/g, function() {
        return n[a++];
      })), o.name = "Invariant Violation";
    }
    throw o.framesToPop = 1, o;
  }
}
var st = "dnd-core/INIT_COORDS", Te = "dnd-core/BEGIN_DRAG", ut = "dnd-core/PUBLISH_DRAG_SOURCE", we = "dnd-core/HOVER", Ee = "dnd-core/DROP", Ce = "dnd-core/END_DRAG";
function kt(t, e) {
  return {
    type: st,
    payload: {
      sourceClientOffset: e || null,
      clientOffset: t || null
    }
  };
}
function pe(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? pe = function(r) {
    return typeof r;
  } : pe = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, pe(t);
}
function li(t, e, r) {
  return e.split(".").reduce(function(n, i) {
    return n && n[i] ? n[i] : r || null;
  }, t);
}
function di(t, e) {
  return t.filter(function(r) {
    return r !== e;
  });
}
function Lr(t) {
  return pe(t) === "object";
}
function fi(t, e) {
  var r = /* @__PURE__ */ new Map(), n = function(a) {
    r.set(a, r.has(a) ? r.get(a) + 1 : 1);
  };
  t.forEach(n), e.forEach(n);
  var i = [];
  return r.forEach(function(o, a) {
    o === 1 && i.push(a);
  }), i;
}
function hi(t, e) {
  return t.filter(function(r) {
    return e.indexOf(r) > -1;
  });
}
var gi = {
  type: st,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function pi(t) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      publishSource: !0
    }, i = n.publishSource, o = i === void 0 ? !0 : i, a = n.clientOffset, s = n.getSourceClientOffset, u = t.getMonitor(), l = t.getRegistry();
    t.dispatch(kt(a)), vi(r, u, l);
    var d = bi(r, u);
    if (d === null) {
      t.dispatch(gi);
      return;
    }
    var h = null;
    if (a) {
      if (!s)
        throw new Error("getSourceClientOffset must be defined");
      yi(s), h = s(d);
    }
    t.dispatch(kt(a, h));
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
function vi(t, e, r) {
  T(!e.isDragging(), "Cannot call beginDrag while dragging."), t.forEach(function(n) {
    T(r.getSource(n), "Expected sourceIds to be registered.");
  });
}
function yi(t) {
  T(typeof t == "function", "When clientOffset is provided, getSourceClientOffset must be a function.");
}
function mi(t) {
  T(Lr(t), "Item must be an object.");
}
function bi(t, e) {
  for (var r = null, n = t.length - 1; n >= 0; n--)
    if (e.canDragSource(t[n])) {
      r = t[n];
      break;
    }
  return r;
}
function Si(t) {
  return function() {
    var r = t.getMonitor();
    if (r.isDragging())
      return {
        type: ut
      };
  };
}
function Ye(t, e) {
  return e === null ? t === null : Array.isArray(t) ? t.some(function(r) {
    return r === e;
  }) : t === e;
}
function Oi(t) {
  return function(r) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.clientOffset;
    Di(r);
    var o = r.slice(0), a = t.getMonitor(), s = t.getRegistry();
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
function Di(t) {
  T(Array.isArray(t), "Expected targetIds to be an array.");
}
function Ii(t, e, r) {
  T(e.isDragging(), "Cannot call hover while not dragging."), T(!e.didDrop(), "Cannot call hover after drop.");
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    T(t.lastIndexOf(i) === n, "Expected targetIds to be unique in the passed array.");
    var o = r.getTarget(i);
    T(o, "Expected targetIds to be registered.");
  }
}
function Ti(t, e, r) {
  for (var n = t.length - 1; n >= 0; n--) {
    var i = t[n], o = e.getTargetType(i);
    Ye(o, r) || t.splice(n, 1);
  }
}
function wi(t, e, r) {
  t.forEach(function(n) {
    var i = r.getTarget(n);
    i.hover(e, n);
  });
}
function At(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? At(Object(r), !0).forEach(function(n) {
      Ei(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : At(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Ei(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function Ci(t) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.getMonitor(), i = t.getRegistry();
    $i(n);
    var o = xi(n);
    o.forEach(function(a, s) {
      var u = _i(a, s, i, n), l = {
        type: Ee,
        payload: {
          dropResult: Mt(Mt({}, r), u)
        }
      };
      t.dispatch(l);
    });
  };
}
function $i(t) {
  T(t.isDragging(), "Cannot call drop while not dragging."), T(!t.didDrop(), "Cannot call drop twice during one drag operation.");
}
function _i(t, e, r, n) {
  var i = r.getTarget(t), o = i ? i.drop(n, t) : void 0;
  return Ni(o), typeof o > "u" && (o = e === 0 ? {} : n.getDropResult()), o;
}
function Ni(t) {
  T(typeof t > "u" || Lr(t), "Drop result must either be an object or undefined.");
}
function xi(t) {
  var e = t.getTargetIds().filter(t.canDropOnTarget, t);
  return e.reverse(), e;
}
function Ri(t) {
  return function() {
    var r = t.getMonitor(), n = t.getRegistry();
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
function Pi(t) {
  T(t.isDragging(), "Cannot call endDrag while not dragging.");
}
function ki(t) {
  return {
    beginDrag: pi(t),
    publishDragSource: Si(t),
    hover: Oi(t),
    drop: Ci(t),
    endDrag: Ri(t)
  };
}
function Ai(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Lt(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Mi(t, e, r) {
  return e && Lt(t.prototype, e), r && Lt(t, r), t;
}
function ae(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Li = /* @__PURE__ */ function() {
  function t(e, r) {
    var n = this;
    Ai(this, t), ae(this, "store", void 0), ae(this, "monitor", void 0), ae(this, "backend", void 0), ae(this, "isSetUp", !1), ae(this, "handleRefCountChange", function() {
      var i = n.store.getState().refCount > 0;
      n.backend && (i && !n.isSetUp ? (n.backend.setup(), n.isSetUp = !0) : !i && n.isSetUp && (n.backend.teardown(), n.isSetUp = !1));
    }), this.store = e, this.monitor = r, e.subscribe(this.handleRefCountChange);
  }
  return Mi(t, [{
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
  }]), t;
}();
function k(t) {
  return "Minified Redux error #" + t + "; visit https://redux.js.org/Errors?code=" + t + " for the full message or use the non-minified dev environment for full errors. ";
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
function Hr(t) {
  if (typeof t != "object" || t === null)
    return !1;
  for (var e = t; Object.getPrototypeOf(e) !== null; )
    e = Object.getPrototypeOf(e);
  return Object.getPrototypeOf(t) === e;
}
function Hi(t) {
  if (t === void 0)
    return "undefined";
  if (t === null)
    return "null";
  var e = typeof t;
  switch (e) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return e;
  }
  if (Array.isArray(t))
    return "array";
  if (Ui(t))
    return "date";
  if (Fi(t))
    return "error";
  var r = ji(t);
  switch (r) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return r;
  }
  return e.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ji(t) {
  return typeof t.constructor == "function" ? t.constructor.name : null;
}
function Fi(t) {
  return t instanceof Error || typeof t.message == "string" && t.constructor && typeof t.constructor.stackTraceLimit == "number";
}
function Ui(t) {
  return t instanceof Date ? !0 : typeof t.toDateString == "function" && typeof t.getDate == "function" && typeof t.setDate == "function";
}
function W(t) {
  var e = typeof t;
  return process.env.NODE_ENV !== "production" && (e = Hi(t)), e;
}
function ct(t, e, r) {
  var n;
  if (typeof e == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? k(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof e == "function" && typeof r > "u" && (r = e, e = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? k(1) : "Expected the enhancer to be a function. Instead, received: '" + W(r) + "'");
    return r(ct)(t, e);
  }
  if (typeof t != "function")
    throw new Error(process.env.NODE_ENV === "production" ? k(2) : "Expected the root reducer to be a function. Instead, received: '" + W(t) + "'");
  var i = t, o = e, a = [], s = a, u = !1;
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
function jt(t) {
  typeof console < "u" && typeof console.error == "function" && console.error(t);
  try {
    throw new Error(t);
  } catch {
  }
}
function Vi(t, e, r, n) {
  var i = Object.keys(e), o = r && r.type === q.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Hr(t))
    return "The " + o + ' has unexpected type of "' + W(t) + '". Expected argument to be an object with the following ' + ('keys: "' + i.join('", "') + '"');
  var a = Object.keys(t).filter(function(s) {
    return !e.hasOwnProperty(s) && !n[s];
  });
  if (a.forEach(function(s) {
    n[s] = !0;
  }), !(r && r.type === q.REPLACE) && a.length > 0)
    return "Unexpected " + (a.length > 1 ? "keys" : "key") + " " + ('"' + a.join('", "') + '" found in ' + o + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + i.join('", "') + '". Unexpected keys will be ignored.');
}
function zi(t) {
  Object.keys(t).forEach(function(e) {
    var r = t[e], n = r(void 0, {
      type: q.INIT
    });
    if (typeof n > "u")
      throw new Error(process.env.NODE_ENV === "production" ? k(12) : 'The slice reducer for key "' + e + `" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: q.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? k(13) : 'The slice reducer for key "' + e + '" returned undefined when probed with a random type. ' + ("Don't try to handle '" + q.INIT + `' or other actions in "redux/*" `) + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.");
  });
}
function Ft(t) {
  for (var e = Object.keys(t), r = {}, n = 0; n < e.length; n++) {
    var i = e[n];
    process.env.NODE_ENV !== "production" && typeof t[i] > "u" && jt('No reducer provided for key "' + i + '"'), typeof t[i] == "function" && (r[i] = t[i]);
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
var Wi = function(e, r) {
  return e === r;
};
function Bi(t, e) {
  return !t && !e ? !0 : !t || !e ? !1 : t.x === e.x && t.y === e.y;
}
function qi(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Wi;
  if (t.length !== e.length)
    return !1;
  for (var n = 0; n < t.length; ++n)
    if (!r(t[n], e[n]))
      return !1;
  return !0;
}
function Ut(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ut(Object(r), !0).forEach(function(n) {
      Gi(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ut(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Gi(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var zt = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function Ki() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zt, e = arguments.length > 1 ? arguments[1] : void 0, r = e.payload;
  switch (e.type) {
    case st:
    case Te:
      return {
        initialSourceClientOffset: r.sourceClientOffset,
        initialClientOffset: r.clientOffset,
        clientOffset: r.clientOffset
      };
    case we:
      return Bi(t.clientOffset, r.clientOffset) ? t : Vt(Vt({}, t), {}, {
        clientOffset: r.clientOffset
      });
    case Ce:
    case Ee:
      return zt;
    default:
      return t;
  }
}
var lt = "dnd-core/ADD_SOURCE", dt = "dnd-core/ADD_TARGET", ft = "dnd-core/REMOVE_SOURCE", $e = "dnd-core/REMOVE_TARGET";
function Yi(t) {
  return {
    type: lt,
    payload: {
      sourceId: t
    }
  };
}
function Xi(t) {
  return {
    type: dt,
    payload: {
      targetId: t
    }
  };
}
function Qi(t) {
  return {
    type: ft,
    payload: {
      sourceId: t
    }
  };
}
function Ji(t) {
  return {
    type: $e,
    payload: {
      targetId: t
    }
  };
}
function Wt(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function M(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Wt(Object(r), !0).forEach(function(n) {
      Zi(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Wt(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Zi(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
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
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : eo, e = arguments.length > 1 ? arguments[1] : void 0, r = e.payload;
  switch (e.type) {
    case Te:
      return M(M({}, t), {}, {
        itemType: r.itemType,
        item: r.item,
        sourceId: r.sourceId,
        isSourcePublic: r.isSourcePublic,
        dropResult: null,
        didDrop: !1
      });
    case ut:
      return M(M({}, t), {}, {
        isSourcePublic: !0
      });
    case we:
      return M(M({}, t), {}, {
        targetIds: r.targetIds
      });
    case $e:
      return t.targetIds.indexOf(r.targetId) === -1 ? t : M(M({}, t), {}, {
        targetIds: di(t.targetIds, r.targetId)
      });
    case Ee:
      return M(M({}, t), {}, {
        dropResult: r.dropResult,
        didDrop: !0,
        targetIds: []
      });
    case Ce:
      return M(M({}, t), {}, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
        targetIds: []
      });
    default:
      return t;
  }
}
function ro() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 ? arguments[1] : void 0;
  switch (e.type) {
    case lt:
    case dt:
      return t + 1;
    case ft:
    case $e:
      return t - 1;
    default:
      return t;
  }
}
var De = [], ht = [];
De.__IS_NONE__ = !0;
ht.__IS_ALL__ = !0;
function no(t, e) {
  if (t === De)
    return !1;
  if (t === ht || typeof e > "u")
    return !0;
  var r = hi(e, t);
  return r.length > 0;
}
function io() {
  var t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
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
  var e = t.payload, r = e.targetIds, n = r === void 0 ? [] : r, i = e.prevTargetIds, o = i === void 0 ? [] : i, a = fi(n, o), s = a.length > 0 || !qi(n, o);
  if (!s)
    return De;
  var u = o[o.length - 1], l = n[n.length - 1];
  return u !== l && (u && a.push(u), l && a.push(l)), a;
}
function oo() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return t + 1;
}
function Bt(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Bt(Object(r), !0).forEach(function(n) {
      ao(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Bt(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function ao(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function so() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0;
  return {
    dirtyHandlerIds: io(t.dirtyHandlerIds, {
      type: e.type,
      payload: qt(qt({}, e.payload), {}, {
        prevTargetIds: li(t, "dragOperation.targetIds", [])
      })
    }),
    dragOffset: Ki(t.dragOffset, e),
    refCount: ro(t.refCount, e),
    dragOperation: to(t.dragOperation, e),
    stateId: oo(t.stateId)
  };
}
function uo(t, e) {
  return {
    x: t.x + e.x,
    y: t.y + e.y
  };
}
function jr(t, e) {
  return {
    x: t.x - e.x,
    y: t.y - e.y
  };
}
function co(t) {
  var e = t.clientOffset, r = t.initialClientOffset, n = t.initialSourceClientOffset;
  return !e || !r || !n ? null : jr(uo(e, n), r);
}
function lo(t) {
  var e = t.clientOffset, r = t.initialClientOffset;
  return !e || !r ? null : jr(e, r);
}
function fo(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Gt(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function ho(t, e, r) {
  return e && Gt(t.prototype, e), r && Gt(t, r), t;
}
function Kt(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var go = /* @__PURE__ */ function() {
  function t(e, r) {
    fo(this, t), Kt(this, "store", void 0), Kt(this, "registry", void 0), this.store = e, this.registry = r;
  }
  return ho(t, [{
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
  }]), t;
}(), po = 0;
function vo() {
  return po++;
}
function ve(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ve = function(r) {
    return typeof r;
  } : ve = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, ve(t);
}
function yo(t) {
  T(typeof t.canDrag == "function", "Expected canDrag to be a function."), T(typeof t.beginDrag == "function", "Expected beginDrag to be a function."), T(typeof t.endDrag == "function", "Expected endDrag to be a function.");
}
function mo(t) {
  T(typeof t.canDrop == "function", "Expected canDrop to be a function."), T(typeof t.hover == "function", "Expected hover to be a function."), T(typeof t.drop == "function", "Expected beginDrag to be a function.");
}
function Xe(t, e) {
  if (e && Array.isArray(t)) {
    t.forEach(function(r) {
      return Xe(r, !1);
    });
    return;
  }
  T(typeof t == "string" || ve(t) === "symbol", e ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.");
}
const Yt = typeof global < "u" ? global : self, Fr = Yt.MutationObserver || Yt.WebKitMutationObserver;
function Ur(t) {
  return function() {
    const r = setTimeout(i, 0), n = setInterval(i, 50);
    function i() {
      clearTimeout(r), clearInterval(n), t();
    }
  };
}
function bo(t) {
  let e = 1;
  const r = new Fr(t), n = document.createTextNode("");
  return r.observe(n, {
    characterData: !0
  }), function() {
    e = -e, n.data = e;
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
  enqueueTask(e) {
    const { queue: r, requestFlush: n } = this;
    r.length || (n(), this.flushing = !0), r[r.length] = e;
  }
  constructor() {
    this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
      const { queue: e } = this;
      for (; this.index < e.length; ) {
        const r = this.index;
        if (this.index++, e[r].call(), this.index > this.capacity) {
          for (let n = 0, i = e.length - this.index; n < i; n++)
            e[n] = e[n + this.index];
          e.length -= this.index, this.index = 0;
        }
      }
      e.length = 0, this.index = 0, this.flushing = !1;
    }, this.registerPendingError = (e) => {
      this.pendingErrors.push(e), this.requestErrorThrow();
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
    } catch (e) {
      this.onError(e);
    } finally {
      this.task = null, this.release(this);
    }
  }
  constructor(e, r) {
    this.onError = e, this.release = r, this.task = null;
  }
}
class Io {
  create(e) {
    const r = this.freeTasks, n = r.length ? r.pop() : new Do(
      this.onError,
      (i) => r[r.length] = i
    );
    return n.task = e, n;
  }
  constructor(e) {
    this.onError = e, this.freeTasks = [];
  }
}
const Vr = new Oo(), To = new Io(Vr.registerPendingError);
function wo(t) {
  Vr.enqueueTask(To.create(t));
}
function Eo(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Xt(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Co(t, e, r) {
  return e && Xt(t.prototype, e), r && Xt(t, r), t;
}
function J(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function $o(t, e) {
  return Ro(t) || xo(t, e) || No(t, e) || _o();
}
function _o() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function No(t, e) {
  if (t) {
    if (typeof t == "string")
      return Qt(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Qt(t, e);
  }
}
function Qt(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function xo(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, s;
    try {
      for (r = r.call(t); !(i = (a = r.next()).done) && (n.push(a.value), !(e && n.length === e)); i = !0)
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
function Ro(t) {
  if (Array.isArray(t))
    return t;
}
function Po(t) {
  var e = vo().toString();
  switch (t) {
    case L.SOURCE:
      return "S".concat(e);
    case L.TARGET:
      return "T".concat(e);
    default:
      throw new Error("Unknown Handler Role: ".concat(t));
  }
}
function Jt(t) {
  switch (t[0]) {
    case "S":
      return L.SOURCE;
    case "T":
      return L.TARGET;
    default:
      T(!1, "Cannot parse handler ID: ".concat(t));
  }
}
function Zt(t, e) {
  var r = t.entries(), n = !1;
  do {
    var i = r.next(), o = i.done, a = $o(i.value, 2), s = a[1];
    if (s === e)
      return !0;
    n = !!o;
  } while (!n);
  return !1;
}
var ko = /* @__PURE__ */ function() {
  function t(e) {
    Eo(this, t), J(this, "types", /* @__PURE__ */ new Map()), J(this, "dragSources", /* @__PURE__ */ new Map()), J(this, "dropTargets", /* @__PURE__ */ new Map()), J(this, "pinnedSourceId", null), J(this, "pinnedSource", null), J(this, "store", void 0), this.store = e;
  }
  return Co(t, [{
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
  }]), t;
}();
function Ao(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, i = Mo(n), o = new go(i, new ko(i)), a = new Li(i, o), s = t(a, e, r);
  return a.receiveBackend(s), a;
}
function Mo(t) {
  var e = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return ct(so, t && e && e({
    name: "dnd-core",
    instanceId: "dnd-core"
  }));
}
var Lo = ["children"];
function Ho(t, e) {
  return Vo(t) || Uo(t, e) || Fo(t, e) || jo();
}
function jo() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fo(t, e) {
  if (t) {
    if (typeof t == "string")
      return er(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return er(t, e);
  }
}
function er(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function Uo(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, s;
    try {
      for (r = r.call(t); !(i = (a = r.next()).done) && (n.push(a.value), !(e && n.length === e)); i = !0)
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
function Vo(t) {
  if (Array.isArray(t))
    return t;
}
function zo(t, e) {
  if (t == null)
    return {};
  var r = Wo(t, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      n = o[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function Wo(t, e) {
  if (t == null)
    return {};
  var r = {}, n = Object.keys(t), i, o;
  for (o = 0; o < n.length; o++)
    i = n[o], !(e.indexOf(i) >= 0) && (r[i] = t[i]);
  return r;
}
var tr = 0, ye = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"), Bo = it(function(e) {
  var r = e.children, n = zo(e, Lo), i = qo(n), o = Ho(i, 2), a = o[0], s = o[1];
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
function qo(t) {
  if ("manager" in t) {
    var e = {
      dragDropManager: t.manager
    };
    return [e, !1];
  }
  var r = Go(t.backend, t.context, t.options, t.debugMode), n = !t.context;
  return [r, n];
}
function Go(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : zr(), r = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0, i = e;
  return i[ye] || (i[ye] = {
    dragDropManager: Ao(t, e, r, n)
  }), i[ye];
}
function zr() {
  return typeof global < "u" ? global : window;
}
function Ko(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function rr(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Yo(t, e, r) {
  return e && rr(t.prototype, e), r && rr(t, r), t;
}
function nr(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Le = !1, He = !1, Xo = /* @__PURE__ */ function() {
  function t(e) {
    Ko(this, t), nr(this, "internalMonitor", void 0), nr(this, "sourceId", null), this.internalMonitor = e.getMonitor();
  }
  return Yo(t, [{
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
  }]), t;
}();
function Qo(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ir(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Jo(t, e, r) {
  return e && ir(t.prototype, e), r && ir(t, r), t;
}
function or(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var je = !1, Zo = /* @__PURE__ */ function() {
  function t(e) {
    Qo(this, t), or(this, "internalMonitor", void 0), or(this, "targetId", null), this.internalMonitor = e.getMonitor();
  }
  return Jo(t, [{
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
  }]), t;
}();
function ea(t) {
  if (typeof t.type != "string") {
    var e = t.type.displayName || t.type.name || "the component";
    throw new Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(e, " into a <div>, or turn it into a ") + "drag source or a drop target itself.");
  }
}
function ta(t) {
  return function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!_n(e)) {
      var n = e;
      return t(n, r), n;
    }
    var i = e;
    ea(i);
    var o = r ? function(a) {
      return t(a, r);
    } : t;
    return ra(i, o);
  };
}
function Wr(t) {
  var e = {};
  return Object.keys(t).forEach(function(r) {
    var n = t[r];
    if (r.endsWith("Ref"))
      e[r] = t[r];
    else {
      var i = ta(n);
      e[r] = function() {
        return i;
      };
    }
  }), e;
}
function ar(t, e) {
  typeof t == "function" ? t(e) : t.current = e;
}
function ra(t, e) {
  var r = t.ref;
  return T(typeof r != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), r ? St(t, {
    ref: function(i) {
      ar(r, i), ar(e, i);
    }
  }) : St(t, {
    ref: e
  });
}
function me(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? me = function(r) {
    return typeof r;
  } : me = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, me(t);
}
function Qe(t) {
  return (
    // eslint-disable-next-line no-prototype-builtins
    t !== null && me(t) === "object" && Object.prototype.hasOwnProperty.call(t, "current")
  );
}
function Je(t, e, r, n) {
  var i = r ? r.call(n, t, e) : void 0;
  if (i !== void 0)
    return !!i;
  if (t === e)
    return !0;
  if (typeof t != "object" || !t || typeof e != "object" || !e)
    return !1;
  var o = Object.keys(t), a = Object.keys(e);
  if (o.length !== a.length)
    return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(e), u = 0; u < o.length; u++) {
    var l = o[u];
    if (!s(l))
      return !1;
    var d = t[l], h = e[l];
    if (i = r ? r.call(n, d, h, l) : void 0, i === !1 || i === void 0 && d !== h)
      return !1;
  }
  return !0;
}
function na(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function sr(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function ia(t, e, r) {
  return e && sr(t.prototype, e), r && sr(t, r), t;
}
function P(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var oa = /* @__PURE__ */ function() {
  function t(e) {
    var r = this;
    na(this, t), P(this, "hooks", Wr({
      dragSource: function(i, o) {
        r.clearDragSource(), r.dragSourceOptions = o || null, Qe(i) ? r.dragSourceRef = i : r.dragSourceNode = i, r.reconnectDragSource();
      },
      dragPreview: function(i, o) {
        r.clearDragPreview(), r.dragPreviewOptions = o || null, Qe(i) ? r.dragPreviewRef = i : r.dragPreviewNode = i, r.reconnectDragPreview();
      }
    })), P(this, "handlerId", null), P(this, "dragSourceRef", null), P(this, "dragSourceNode", void 0), P(this, "dragSourceOptionsInternal", null), P(this, "dragSourceUnsubscribe", void 0), P(this, "dragPreviewRef", null), P(this, "dragPreviewNode", void 0), P(this, "dragPreviewOptionsInternal", null), P(this, "dragPreviewUnsubscribe", void 0), P(this, "lastConnectedHandlerId", null), P(this, "lastConnectedDragSource", null), P(this, "lastConnectedDragSourceOptions", null), P(this, "lastConnectedDragPreview", null), P(this, "lastConnectedDragPreviewOptions", null), P(this, "backend", void 0), this.backend = e;
  }
  return ia(t, [{
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
  }]), t;
}();
function aa(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ur(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function sa(t, e, r) {
  return e && ur(t.prototype, e), r && ur(t, r), t;
}
function U(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var ua = /* @__PURE__ */ function() {
  function t(e) {
    var r = this;
    aa(this, t), U(this, "hooks", Wr({
      dropTarget: function(i, o) {
        r.clearDropTarget(), r.dropTargetOptions = o, Qe(i) ? r.dropTargetRef = i : r.dropTargetNode = i, r.reconnect();
      }
    })), U(this, "handlerId", null), U(this, "dropTargetRef", null), U(this, "dropTargetNode", void 0), U(this, "dropTargetOptionsInternal", null), U(this, "unsubscribeDropTarget", void 0), U(this, "lastConnectedHandlerId", null), U(this, "lastConnectedDropTarget", null), U(this, "lastConnectedDropTargetOptions", null), U(this, "backend", void 0), this.backend = e;
  }
  return sa(t, [{
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
  }]), t;
}();
function ca(t, e, r) {
  var n = r.getRegistry(), i = n.addTarget(t, e);
  return [i, function() {
    return n.removeTarget(i);
  }];
}
function la(t, e, r) {
  var n = r.getRegistry(), i = n.addSource(t, e);
  return [i, function() {
    return n.removeSource(i);
  }];
}
var K = typeof window < "u" ? Nn : H;
function be(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? be = function(r) {
    return typeof r;
  } : be = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, be(t);
}
function da(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function cr(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function fa(t, e, r) {
  return e && cr(t.prototype, e), r && cr(t, r), t;
}
function Fe(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var ha = /* @__PURE__ */ function() {
  function t(e, r, n) {
    da(this, t), Fe(this, "spec", void 0), Fe(this, "monitor", void 0), Fe(this, "connector", void 0), this.spec = e, this.monitor = r, this.connector = n;
  }
  return fa(t, [{
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
  }]), t;
}();
function ga(t, e, r) {
  var n = x(function() {
    return new ha(t, e, r);
  }, [e, r]);
  return H(function() {
    n.spec = t;
  }, [t]), n;
}
function Y() {
  var t = de(Mr), e = t.dragDropManager;
  return T(e != null, "Expected drag drop context"), e;
}
function pa(t) {
  return x(function() {
    var e = t.type;
    return T(e != null, "spec.type must be defined"), e;
  }, [t]);
}
function va(t, e) {
  return Sa(t) || ba(t, e) || ma(t, e) || ya();
}
function ya() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ma(t, e) {
  if (t) {
    if (typeof t == "string")
      return lr(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return lr(t, e);
  }
}
function lr(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function ba(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, s;
    try {
      for (r = r.call(t); !(i = (a = r.next()).done) && (n.push(a.value), !(e && n.length === e)); i = !0)
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
function Sa(t) {
  if (Array.isArray(t))
    return t;
}
function Oa(t, e, r) {
  var n = Y(), i = ga(t, e, r), o = pa(t);
  K(function() {
    if (o != null) {
      var s = la(o, i, n), u = va(s, 2), l = u[0], d = u[1];
      return e.receiveHandlerId(l), r.receiveHandlerId(l), d;
    }
  }, [n, e, r, i, o]);
}
function Da(t) {
  return Ea(t) || wa(t) || Ta(t) || Ia();
}
function Ia() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ta(t, e) {
  if (t) {
    if (typeof t == "string")
      return Ze(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ze(t, e);
  }
}
function wa(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Ea(t) {
  if (Array.isArray(t))
    return Ze(t);
}
function Ze(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function Br(t, e) {
  var r = Da(e || []);
  return e == null && typeof t != "function" && r.push(t), x(function() {
    return typeof t == "function" ? t() : t;
  }, r);
}
function Ca() {
  var t = Y();
  return x(function() {
    return new Xo(t);
  }, [t]);
}
function $a(t, e) {
  var r = Y(), n = x(function() {
    return new oa(r.getBackend());
  }, [r]);
  return K(function() {
    return n.dragSourceOptions = t || null, n.reconnect(), function() {
      return n.disconnectDragSource();
    };
  }, [n, t]), K(function() {
    return n.dragPreviewOptions = e || null, n.reconnect(), function() {
      return n.disconnectDragPreview();
    };
  }, [n, e]), n;
}
var _a = function t(e, r) {
  if (e === r)
    return !0;
  if (e && r && typeof e == "object" && typeof r == "object") {
    if (e.constructor !== r.constructor)
      return !1;
    var n, i, o;
    if (Array.isArray(e)) {
      if (n = e.length, n != r.length)
        return !1;
      for (i = n; i-- !== 0; )
        if (!t(e[i], r[i]))
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === r.source && e.flags === r.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === r.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === r.toString();
    if (o = Object.keys(e), n = o.length, n !== Object.keys(r).length)
      return !1;
    for (i = n; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, o[i]))
        return !1;
    for (i = n; i-- !== 0; ) {
      var a = o[i];
      if (!t(e[a], r[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && r !== r;
};
const Na = /* @__PURE__ */ Pn(_a);
function xa(t, e) {
  return Aa(t) || ka(t, e) || Pa(t, e) || Ra();
}
function Ra() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pa(t, e) {
  if (t) {
    if (typeof t == "string")
      return dr(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return dr(t, e);
  }
}
function dr(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function ka(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, s;
    try {
      for (r = r.call(t); !(i = (a = r.next()).done) && (n.push(a.value), !(e && n.length === e)); i = !0)
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
function Aa(t) {
  if (Array.isArray(t))
    return t;
}
function qr(t, e, r) {
  var n = ot(function() {
    return e(t);
  }), i = xa(n, 2), o = i[0], a = i[1], s = $r(function() {
    var u = e(t);
    Na(o, u) || (a(u), r && r());
  }, [o, t, r]);
  return K(s), [o, s];
}
function Ma(t, e) {
  return Fa(t) || ja(t, e) || Ha(t, e) || La();
}
function La() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ha(t, e) {
  if (t) {
    if (typeof t == "string")
      return fr(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return fr(t, e);
  }
}
function fr(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function ja(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, s;
    try {
      for (r = r.call(t); !(i = (a = r.next()).done) && (n.push(a.value), !(e && n.length === e)); i = !0)
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
function Fa(t) {
  if (Array.isArray(t))
    return t;
}
function Ua(t, e, r) {
  var n = qr(t, e, r), i = Ma(n, 2), o = i[0], a = i[1];
  return K(function() {
    var u = t.getHandlerId();
    if (u != null)
      return t.subscribeToStateChange(a, {
        handlerIds: [u]
      });
  }, [t, a]), o;
}
function Gr(t, e, r) {
  return Ua(e, t || function() {
    return {};
  }, function() {
    return r.reconnect();
  });
}
function Va(t) {
  return x(function() {
    return t.hooks.dragSource();
  }, [t]);
}
function za(t) {
  return x(function() {
    return t.hooks.dragPreview();
  }, [t]);
}
function Wa(t, e) {
  var r = Br(t, e);
  T(!r.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
  var n = Ca(), i = $a(r.options, r.previewOptions);
  return Oa(r, n, i), [Gr(r.collect, n, i), Va(i), za(i)];
}
function Ba(t) {
  var e = t.accept;
  return x(function() {
    return T(t.accept != null, "accept must be defined"), Array.isArray(e) ? e : [e];
  }, [e]);
}
function qa(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function hr(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Ga(t, e, r) {
  return e && hr(t.prototype, e), r && hr(t, r), t;
}
function gr(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var Ka = /* @__PURE__ */ function() {
  function t(e, r) {
    qa(this, t), gr(this, "spec", void 0), gr(this, "monitor", void 0), this.spec = e, this.monitor = r;
  }
  return Ga(t, [{
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
  }]), t;
}();
function Ya(t, e) {
  var r = x(function() {
    return new Ka(t, e);
  }, [e]);
  return H(function() {
    r.spec = t;
  }, [t]), r;
}
function Xa(t, e) {
  return es(t) || Za(t, e) || Ja(t, e) || Qa();
}
function Qa() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ja(t, e) {
  if (t) {
    if (typeof t == "string")
      return pr(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return pr(t, e);
  }
}
function pr(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function Za(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, s;
    try {
      for (r = r.call(t); !(i = (a = r.next()).done) && (n.push(a.value), !(e && n.length === e)); i = !0)
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
function es(t) {
  if (Array.isArray(t))
    return t;
}
function ts(t, e, r) {
  var n = Y(), i = Ya(t, e), o = Ba(t);
  K(function() {
    var s = ca(o, i, n), u = Xa(s, 2), l = u[0], d = u[1];
    return e.receiveHandlerId(l), r.receiveHandlerId(l), d;
  }, [n, e, i, r, o.map(function(a) {
    return a.toString();
  }).join("|")]);
}
function rs() {
  var t = Y();
  return x(function() {
    return new Zo(t);
  }, [t]);
}
function ns(t) {
  var e = Y(), r = x(function() {
    return new ua(e.getBackend());
  }, [e]);
  return K(function() {
    return r.dropTargetOptions = t || null, r.reconnect(), function() {
      return r.disconnectDropTarget();
    };
  }, [t]), r;
}
function is(t) {
  return x(function() {
    return t.hooks.dropTarget();
  }, [t]);
}
function Kr(t, e) {
  var r = Br(t, e), n = rs(), i = ns(r.options);
  return ts(r, n, i), [Gr(r.collect, n, i), is(i)];
}
function os(t, e) {
  return cs(t) || us(t, e) || ss(t, e) || as();
}
function as() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ss(t, e) {
  if (t) {
    if (typeof t == "string")
      return vr(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return vr(t, e);
  }
}
function vr(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function us(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, s;
    try {
      for (r = r.call(t); !(i = (a = r.next()).done) && (n.push(a.value), !(e && n.length === e)); i = !0)
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
function cs(t) {
  if (Array.isArray(t))
    return t;
}
function ls(t) {
  var e = Y(), r = e.getMonitor(), n = qr(r, t), i = os(n, 2), o = i[0], a = i[1];
  return H(function() {
    return r.subscribeToOffsetChange(a);
  }), H(function() {
    return r.subscribeToStateChange(a);
  }), o;
}
function et() {
  return et = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, et.apply(this, arguments);
}
function yr(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function tt(t, e) {
  return tt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, tt(t, e);
}
function ds(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, tt(t, e);
}
var mr = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function fs(t, e) {
  return !!(t === e || mr(t) && mr(e));
}
function hs(t, e) {
  if (t.length !== e.length)
    return !1;
  for (var r = 0; r < t.length; r++)
    if (!fs(t[r], e[r]))
      return !1;
  return !0;
}
function Ue(t, e) {
  e === void 0 && (e = hs);
  var r, n = [], i, o = !1;
  function a() {
    for (var s = [], u = 0; u < arguments.length; u++)
      s[u] = arguments[u];
    return o && r === this && e(s, n) || (i = t.apply(this, s), o = !0, r = this, n = s), i;
  }
  return a;
}
var gs = typeof performance == "object" && typeof performance.now == "function", br = gs ? function() {
  return performance.now();
} : function() {
  return Date.now();
};
function Sr(t) {
  cancelAnimationFrame(t.id);
}
function ps(t, e) {
  var r = br();
  function n() {
    br() - r >= e ? t.call(null) : i.id = requestAnimationFrame(n);
  }
  var i = {
    id: requestAnimationFrame(n)
  };
  return i;
}
var Ve = -1;
function Or(t) {
  if (t === void 0 && (t = !1), Ve === -1 || t) {
    var e = document.createElement("div"), r = e.style;
    r.width = "50px", r.height = "50px", r.overflow = "scroll", document.body.appendChild(e), Ve = e.offsetWidth - e.clientWidth, document.body.removeChild(e);
  }
  return Ve;
}
var Z = null;
function Dr(t) {
  if (t === void 0 && (t = !1), Z === null || t) {
    var e = document.createElement("div"), r = e.style;
    r.width = "50px", r.height = "50px", r.overflow = "scroll", r.direction = "rtl";
    var n = document.createElement("div"), i = n.style;
    return i.width = "100px", i.height = "100px", e.appendChild(n), document.body.appendChild(e), e.scrollLeft > 0 ? Z = "positive-descending" : (e.scrollLeft = 1, e.scrollLeft === 0 ? Z = "negative" : Z = "positive-ascending"), document.body.removeChild(e), Z;
  }
  return Z;
}
process.env.NODE_ENV;
var vs = 150, ys = function(e, r) {
  return e;
}, Se = null, Oe = null;
process.env.NODE_ENV !== "production" && typeof window < "u" && typeof window.WeakSet < "u" && (Se = /* @__PURE__ */ new WeakSet(), Oe = /* @__PURE__ */ new WeakSet());
function ms(t) {
  var e, r = t.getItemOffset, n = t.getEstimatedTotalSize, i = t.getItemSize, o = t.getOffsetForIndexAndAlignment, a = t.getStartIndexForOffset, s = t.getStopIndexForStartIndex, u = t.initInstanceProps, l = t.shouldResetStyleCacheOnItemSizeChange, d = t.validateProps;
  return e = /* @__PURE__ */ function(h) {
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
          var E = r(c.props, f, c._instanceProps), N = i(c.props, f, c._instanceProps), $ = y === "horizontal" || m === "horizontal", z = y === "rtl", X = $ ? E : 0;
          S[f] = O = {
            position: "absolute",
            left: z ? void 0 : X,
            right: z ? X : void 0,
            top: $ ? 0 : E,
            height: $ ? "100%" : N,
            width: $ ? N : "100%"
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
      var c = this.props, f = c.children, g = c.className, y = c.direction, p = c.height, m = c.innerRef, S = c.innerElementType, O = c.innerTagName, E = c.itemCount, N = c.itemData, $ = c.itemKey, z = $ === void 0 ? ys : $, X = c.layout, mn = c.outerElementType, bn = c.outerTagName, Sn = c.style, On = c.useIsScrolling, Dn = c.width, pt = this.state.isScrolling, _e = y === "horizontal" || X === "horizontal", In = _e ? this._onScrollHorizontal : this._onScrollVertical, vt = this._getRangeToRender(), Tn = vt[0], wn = vt[1], yt = [];
      if (E > 0)
        for (var ie = Tn; ie <= wn; ie++)
          yt.push(Ne(f, {
            data: N,
            key: z(ie, N),
            index: ie,
            isScrolling: On ? pt : void 0,
            style: this._getItemStyle(ie)
          }));
      var mt = n(this.props, this._instanceProps);
      return Ne(mn || bn || "div", {
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
      }, Ne(S || O || "div", {
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
        var S = this.state, O = S.scrollDirection, E = S.scrollOffset, N = S.scrollUpdateWasRequested;
        this._callOnScroll(O, E, N);
      }
    }, b._getRangeToRender = function() {
      var c = this.props, f = c.itemCount, g = c.overscanCount, y = this.state, p = y.isScrolling, m = y.scrollDirection, S = y.scrollOffset;
      if (f === 0)
        return [0, 0, 0, 0];
      var O = a(this.props, S, this._instanceProps), E = s(this.props, O, S, this._instanceProps), N = !p || m === "backward" ? Math.max(1, g) : 1, $ = !p || m === "forward" ? Math.max(1, g) : 1;
      return [Math.max(0, O - N), Math.max(0, Math.min(f - 1, E + $)), O, E];
    }, v;
  }(xn), e.defaultProps = {
    direction: "ltr",
    itemData: void 0,
    layout: "vertical",
    overscanCount: 2,
    useIsScrolling: !1
  }, e;
}
var bs = function(e, r) {
  var n = e.children, i = e.direction, o = e.height, a = e.layout, s = e.innerTagName, u = e.outerTagName, l = e.width, d = r.instance;
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
  getItemOffset: function(e, r) {
    var n = e.itemSize;
    return r * n;
  },
  getItemSize: function(e, r) {
    var n = e.itemSize;
    return n;
  },
  getEstimatedTotalSize: function(e) {
    var r = e.itemCount, n = e.itemSize;
    return n * r;
  },
  getOffsetForIndexAndAlignment: function(e, r, n, i, o, a) {
    var s = e.direction, u = e.height, l = e.itemCount, d = e.itemSize, h = e.layout, v = e.width, b = s === "horizontal" || h === "horizontal", D = b ? v : u, c = Math.max(0, l * d - D), f = Math.min(c, r * d), g = Math.max(0, r * d - D + d + a);
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
  getStartIndexForOffset: function(e, r) {
    var n = e.itemCount, i = e.itemSize;
    return Math.max(0, Math.min(n - 1, Math.floor(r / i)));
  },
  getStopIndexForStartIndex: function(e, r, n) {
    var i = e.direction, o = e.height, a = e.itemCount, s = e.itemSize, u = e.layout, l = e.width, d = i === "horizontal" || u === "horizontal", h = r * s, v = d ? l : o, b = Math.ceil((v + n - h) / s);
    return Math.max(0, Math.min(
      a - 1,
      r + b - 1
      // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function(e) {
  },
  shouldResetStyleCacheOnItemSizeChange: !0,
  validateProps: function(e) {
    var r = e.itemSize;
    if (process.env.NODE_ENV !== "production" && typeof r != "number")
      throw Error('An invalid "itemSize" prop has been specified. Value should be a number. ' + ('"' + (r === null ? "null" : typeof r) + '" was specified.'));
  }
});
function _(t, e, r, n) {
  Object.defineProperty(t, e, { get: r, set: n, enumerable: !0, configurable: !0 });
}
const Yr = le(null);
function A() {
  const t = de(Yr);
  if (t === null)
    throw new Error("No Tree Api Provided");
  return t;
}
const Xr = le(null);
function Os() {
  const t = de(Xr);
  if (t === null)
    throw new Error("Provide a NodesContext");
  return t;
}
const Qr = le(null);
function Ds() {
  const t = de(Qr);
  if (t === null)
    throw new Error("Provide a DnDContext");
  return t;
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
_(C, "mergeRefs", () => Ns);
_(C, "safeRun", () => ln);
_(C, "waitFor", () => xs);
_(C, "getInsertIndex", () => Rs);
_(C, "getInsertParentId", () => Ps);
function en(t, e, r) {
  return Math.max(Math.min(t, r), e);
}
function tn(t) {
  return t && t.isLeaf;
}
function rn(t) {
  return t && t.isInternal && !t.isOpen;
}
const Ts = (t, e) => {
  let r = t;
  for (; r; ) {
    if (r.id === e.id)
      return !0;
    r = r.parent;
  }
  return !1;
}, nn = (t) => {
  if (!t.parent)
    throw Error("Node does not have a parent");
  return t.parent.children.findIndex((e) => e.id === t.id);
};
function ws() {
}
function on(t, e) {
  if (!t)
    return null;
  if (t.id === e)
    return t;
  if (t.children)
    for (let r of t.children) {
      const n = on(r, e);
      if (n)
        return n;
    }
  return null;
}
function an(t, e) {
  if (e(t), t.children)
    for (let r of t.children)
      an(r, e);
}
function sn(t) {
  const e = cn(t);
  let r;
  for (let n = 0; n < e.length; ++n)
    if (e[n] === t) {
      r = Es(e, n);
      break;
    }
  r == null || r.focus();
}
function un(t) {
  const e = cn(t);
  let r;
  for (let n = 0; n < e.length; ++n)
    if (e[n] === t) {
      r = Cs(e, n);
      break;
    }
  r == null || r.focus();
}
function Es(t, e) {
  return e + 1 < t.length ? t[e + 1] : t[0];
}
function Cs(t, e) {
  return e - 1 >= 0 ? t[e - 1] : t[t.length - 1];
}
function cn(t) {
  return Array.from(document.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)')).filter((e) => e === t || !t.contains(e));
}
function $s(t, e) {
  return typeof e == "boolean" ? e : typeof e == "string" ? t[e] : e(t);
}
function _s(t) {
  return t === null ? null : B(t);
}
function B(t) {
  return typeof t == "string" ? t : t.id;
}
function Ns(...t) {
  return (e) => {
    t.forEach((r) => {
      typeof r == "function" ? r(e) : r != null && (r.current = e);
    });
  };
}
function ln(t, ...e) {
  if (t)
    return t(...e);
}
function xs(t) {
  return new Promise((e, r) => {
    let n = 0;
    function i() {
      n += 1, n === 100 && r(), t() ? e() : setTimeout(i, 10);
    }
    i();
  });
}
function Rs(t) {
  var r;
  const e = t.focusedNode;
  return e ? e.isOpen ? 0 : e.parent ? e.childIndex + 1 : 0 : ((r = t.root.children) == null ? void 0 : r.length) ?? 0;
}
function Ps(t) {
  const e = t.focusedNode;
  return e ? e.isOpen ? e.id : e.parent && !e.parent.isRoot ? e.parent.id : null : null;
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
}, Ls = /* @__PURE__ */ Ie.memo(function({ top: e, left: r, indent: n }) {
  const i = {
    position: "absolute",
    pointerEvents: "none",
    top: e - 2 + "px",
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
function Hs({ node: t, attrs: e, innerRef: r, children: n }) {
  return /* @__PURE__ */ I("div", {
    ...e,
    ref: r,
    onFocus: (i) => i.stopPropagation(),
    onClick: t.handleClick,
    children: n
  });
}
function js(t) {
  return /* @__PURE__ */ G("div", {
    ref: t.dragHandle,
    style: t.style,
    children: [
      /* @__PURE__ */ I("span", {
        onClick: (e) => {
          e.stopPropagation(), t.node.toggle();
        },
        children: t.node.isLeaf ? "🌳" : t.node.isOpen ? "🗁" : "🗀"
      }),
      " ",
      t.node.isEditing ? /* @__PURE__ */ I(Us, {
        ...t
      }) : /* @__PURE__ */ I(Fs, {
        ...t
      })
    ]
  });
}
function Fs(t) {
  return /* @__PURE__ */ I(nt, {
    children: /* @__PURE__ */ I("span", {
      children: t.node.data.name
    })
  });
}
function Us({ node: t }) {
  const e = te();
  return H(() => {
    var r, n;
    (r = e.current) == null || r.focus(), (n = e.current) == null || n.select();
  }, []), /* @__PURE__ */ I("input", {
    ref: e,
    // @ts-ignore
    defaultValue: t.data.name,
    onBlur: () => t.reset(),
    onKeyDown: (r) => {
      var n;
      r.key === "Escape" && t.reset(), r.key === "Enter" && t.submit(((n = e.current) == null ? void 0 : n.value) || "");
    }
  });
}
function ze(t) {
  return {
    type: "EDIT",
    id: t
  };
}
function Vs(t = {
  id: null
}, e) {
  return e.type === "EDIT" ? {
    ...t,
    id: e.id
  } : t;
}
function ee(t) {
  return {
    type: "FOCUS",
    id: t
  };
}
function zs() {
  return {
    type: "TREE_BLUR"
  };
}
function Ws(t = {
  id: null,
  treeFocused: !1
}, e) {
  return e.type === "FOCUS" ? {
    ...t,
    id: e.id,
    treeFocused: !0
  } : e.type === "TREE_BLUR" ? {
    ...t,
    treeFocused: !1
  } : t;
}
var Bs = {};
_(Bs, "NodeApi", () => se);
class se {
  constructor(e) {
    bt(this, "handleClick", (e) => {
      e.metaKey && !this.tree.props.disableMultiSelection ? this.isSelected ? this.deselect() : this.selectMulti() : e.shiftKey && !this.tree.props.disableMultiSelection ? this.selectContiguous() : (this.select(), this.activate());
    });
    this.tree = e.tree, this.id = e.id, this.data = e.data, this.level = e.level, this.children = e.children, this.parent = e.parent, this.isDraggable = e.isDraggable, this.rowIndex = e.rowIndex;
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
    var e;
    return this.isSelected && !((e = this.prev) != null && e.isSelected);
  }
  get isSelectedEnd() {
    var e;
    return this.isSelected && !((e = this.next) != null && e.isSelected);
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
    return this.parent && this.parent.children ? this.parent.children.findIndex((e) => e.id === this.id) : -1;
  }
  get next() {
    return this.rowIndex === null ? null : this.tree.at(this.rowIndex + 1);
  }
  get prev() {
    return this.rowIndex === null ? null : this.tree.at(this.rowIndex - 1);
  }
  get nextSibling() {
    var r;
    const e = this.childIndex;
    return ((r = this.parent) == null ? void 0 : r.children[e + 1]) ?? null;
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
  submit(e) {
    this.tree.submit(this, e);
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
function Ir(t) {
  function e(i, o, a) {
    const s = t.accessId(i), u = new se({
      tree: t,
      data: i,
      level: o,
      parent: a,
      id: s,
      children: null,
      isDraggable: t.isDraggable(i),
      rowIndex: null
    }), l = t.accessChildren(i);
    return l && (u.children = l.map((d) => e(d, o + 1, u))), u;
  }
  const r = new se({
    tree: t,
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
  }), n = t.props.data ?? [];
  return r.children = n.map((i) => e(i, 0, r)), r;
}
const rt = {
  open(t, e) {
    return {
      type: "VISIBILITY_OPEN",
      id: t,
      filtered: e
    };
  },
  close(t, e) {
    return {
      type: "VISIBILITY_CLOSE",
      id: t,
      filtered: e
    };
  },
  toggle(t, e) {
    return {
      type: "VISIBILITY_TOGGLE",
      id: t,
      filtered: e
    };
  },
  clear(t) {
    return {
      type: "VISIBILITY_CLEAR",
      filtered: t
    };
  }
};
function Tr(t = {}, e) {
  if (e.type === "VISIBILITY_OPEN")
    return {
      ...t,
      [e.id]: !0
    };
  if (e.type === "VISIBILITY_CLOSE")
    return {
      ...t,
      [e.id]: !1
    };
  if (e.type === "VISIBILITY_TOGGLE") {
    const r = t[e.id];
    return {
      ...t,
      [e.id]: !r
    };
  } else
    return e.type === "VISIBILITY_CLEAR" ? {} : t;
}
function qs(t = {
  filtered: {},
  unfiltered: {}
}, e) {
  return e.type.startsWith("VISIBILITY") ? e.filtered ? {
    ...t,
    filtered: Tr(t.filtered, e)
  } : {
    ...t,
    unfiltered: Tr(t.unfiltered, e)
  } : t;
}
const ce = (t) => ({
  nodes: {
    // Changes together
    open: {
      filtered: {},
      unfiltered: (t == null ? void 0 : t.initialOpenState) ?? {}
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
  only: (t) => ({
    type: "SELECTION_ONLY",
    id: B(t)
  }),
  add: (t) => ({
    type: "SELECTION_ADD",
    ids: (Array.isArray(t) ? t : [
      t
    ]).map(B)
  }),
  remove: (t) => ({
    type: "SELECTION_REMOVE",
    ids: (Array.isArray(t) ? t : [
      t
    ]).map(B)
  }),
  set: (t) => ({
    type: "SELECTION_SET",
    ...t
  }),
  mostRecent: (t) => ({
    type: "SELECTION_MOST_RECENT",
    id: t === null ? null : B(t)
  }),
  anchor: (t) => ({
    type: "SELECTION_ANCHOR",
    id: t === null ? null : B(t)
  })
};
function Gs(t = ce().nodes.selection, e) {
  const r = t.ids;
  switch (e.type) {
    case "SELECTION_CLEAR":
      return {
        ...t,
        ids: /* @__PURE__ */ new Set()
      };
    case "SELECTION_ONLY":
      return {
        ...t,
        ids: /* @__PURE__ */ new Set([
          e.id
        ])
      };
    case "SELECTION_ADD":
      return e.ids.length === 0 ? t : (e.ids.forEach((n) => r.add(n)), {
        ...t,
        ids: new Set(r)
      });
    case "SELECTION_REMOVE":
      return e.ids.length === 0 ? t : (e.ids.forEach((n) => r.delete(n)), {
        ...t,
        ids: new Set(r)
      });
    case "SELECTION_SET":
      return {
        ...t,
        ids: e.ids,
        mostRecent: e.mostRecent,
        anchor: e.anchor
      };
    case "SELECTION_MOST_RECENT":
      return {
        ...t,
        mostRecent: e.id
      };
    case "SELECTION_ANCHOR":
      return {
        ...t,
        anchor: e.id
      };
    default:
      return t;
  }
}
const ne = {
  cursor(t) {
    return {
      type: "DND_CURSOR",
      cursor: t
    };
  },
  dragStart(t, e) {
    return {
      type: "DND_DRAG_START",
      id: t,
      dragIds: e
    };
  },
  dragEnd() {
    return {
      type: "DND_DRAG_END"
    };
  },
  hovering(t, e) {
    return {
      type: "DND_HOVERING",
      parentId: t,
      index: e
    };
  }
};
function Ks(t = ce().dnd, e) {
  switch (e.type) {
    case "DND_CURSOR":
      return {
        ...t,
        cursor: e.cursor
      };
    case "DND_DRAG_START":
      return {
        ...t,
        dragId: e.id,
        dragIds: e.dragIds
      };
    case "DND_DRAG_END":
      return ce().dnd;
    case "DND_HOVERING":
      return {
        ...t,
        parentId: e.parentId,
        index: e.index
      };
    default:
      return t;
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
}, Xs = (t) => {
  if (!t)
    return {
      display: "none"
    };
  const { x: e, y: r } = t;
  return {
    transform: `translate(${e}px, ${r}px)`
  };
}, Qs = (t) => {
  if (!t)
    return {
      display: "none"
    };
  const { x: e, y: r } = t;
  return {
    transform: `translate(${e + 10}px, ${r + 10}px)`
  };
};
function dn({ offset: t, mouse: e, id: r, dragIds: n, isDragging: i }) {
  return /* @__PURE__ */ G(Js, {
    isDragging: i,
    children: [
      /* @__PURE__ */ I(Zs, {
        offset: t,
        children: /* @__PURE__ */ I(tu, {
          id: r,
          dragIds: n
        })
      }),
      /* @__PURE__ */ I(eu, {
        mouse: e,
        count: n.length
      })
    ]
  });
}
const Js = /* @__PURE__ */ it(function(e) {
  return e.isDragging ? /* @__PURE__ */ I("div", {
    style: Ys,
    children: e.children
  }) : null;
});
function Zs(t) {
  return /* @__PURE__ */ I("div", {
    className: "row preview",
    style: Xs(t.offset),
    children: t.children
  });
}
function eu(t) {
  const { count: e, mouse: r } = t;
  return e > 1 ? /* @__PURE__ */ I("div", {
    className: "selected-count",
    style: Qs(r),
    children: e
  }) : null;
}
const tu = /* @__PURE__ */ it(function(e) {
  const r = A(), n = r.get(e.id);
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
  const t = A(), r = Ds().cursor;
  if (!r || r.type !== "line")
    return null;
  const n = t.indent, i = t.rowHeight * r.index + (t.props.padding ?? t.props.paddingTop ?? 0), o = n * r.level, a = t.renderCursor;
  return /* @__PURE__ */ I(a, {
    top: i,
    left: o,
    indent: n
  });
}
const nu = /* @__PURE__ */ at(function(e, r) {
  const { children: n, ...i } = e, o = A();
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
  const t = A();
  return /* @__PURE__ */ I("div", {
    style: {
      height: t.visibleNodes.length * t.rowHeight,
      width: "100%",
      position: "absolute",
      left: "0",
      right: "0"
    },
    children: /* @__PURE__ */ I(ru, {})
  });
}, ou = /* @__PURE__ */ at(function({ style: e, ...r }, n) {
  const i = A(), o = i.props.padding ?? i.props.paddingTop ?? 0, a = i.props.padding ?? i.props.paddingBottom ?? 0;
  return /* @__PURE__ */ I("div", {
    ref: n,
    style: {
      ...e,
      height: `${parseFloat(e.height) + o + a}px`
    },
    ...r
  });
});
function au(t) {
  const e = A(), r = e.selectedIds, [n, i, o] = Wa(() => ({
    canDrag: () => t.isDraggable,
    type: "NODE",
    item: () => {
      const a = e.isSelected(t.id) ? Array.from(r) : [
        t.id
      ];
      return e.dispatch(ne.dragStart(t.id, a)), {
        id: t.id
      };
    },
    end: () => {
      e.hideCursor();
      let { parentId: a, index: s, dragIds: u } = e.state.dnd;
      e.canDrop() && (ln(e.props.onMove, {
        dragIds: u,
        parentId: a === ue ? null : a,
        index: s,
        dragNodes: e.dragNodes,
        parentNode: e.get(a)
      }), e.open(a)), e.dispatch(ne.dragEnd());
    }
  }), [
    r,
    t
  ]);
  return H(() => {
    o(ui());
  }, [
    o
  ]), i;
}
function su(t, e) {
  const r = t.getBoundingClientRect(), n = e.x - Math.round(r.x), i = e.y - Math.round(r.y), o = r.height, a = i < o / 2, s = !a, u = o / 4, l = i > u && i < o - u;
  return {
    x: n,
    inTopHalf: a,
    inBottomHalf: s,
    inMiddle: l,
    atTop: !l && a,
    atBottom: !l && s
  };
}
function uu(t, e, r, n) {
  return t ? t.isInternal ? n.atTop ? [
    e,
    t
  ] : n.inMiddle ? [
    t,
    t
  ] : [
    t,
    r
  ] : n.inTopHalf ? [
    e,
    t
  ] : [
    t,
    r
  ] : [
    e,
    null
  ];
}
function cu(t, e, r, n) {
  const i = Math.round(Math.max(0, t.x - n) / n);
  let o, a;
  return e ? r ? (a = e.level, o = r.level) : (a = e.level, o = 0) : (a = 0, o = 0), en(i, o, a);
}
function We(t, e) {
  return {
    parentId: t || null,
    index: e
  };
}
function Be(t, e) {
  return {
    type: "line",
    index: t,
    level: e
  };
}
function lu(t) {
  return {
    type: "highlight",
    id: t
  };
}
function du(t, e) {
  var o;
  let r = t;
  for (; r.parent && r.level > e; )
    r = r.parent;
  const n = ((o = r.parent) == null ? void 0 : o.id) || null, i = nn(r) + 1;
  return {
    parentId: n,
    index: i
  };
}
function fn(t) {
  var s;
  const e = su(t.element, t.offset), { node: r, nextNode: n, prevNode: i } = t, [o, a] = uu(r, i, n, e);
  if (r && r.isInternal && e.inMiddle)
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
    const u = cu(e, o, a, t.indent);
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
function fu(t, e) {
  const r = A(), [n, i] = Kr(() => ({
    accept: "NODE",
    canDrop: () => r.canDrop(),
    hover: (o, a) => {
      const s = a.getClientOffset();
      if (!t.current || !s)
        return;
      const { cursor: u, drop: l } = fn({
        element: t.current,
        offset: s,
        indent: r.indent,
        node: e,
        prevNode: e.prev,
        nextNode: e.next
      });
      l && r.dispatch(ne.hovering(l.parentId, l.index)), a.canDrop() ? u && r.showCursor(u) : r.hideCursor();
    },
    drop: (o, a) => {
      if (!a.canDrop())
        return null;
    }
  }), [
    e,
    t.current,
    r.props
  ]);
  return i;
}
function hu(t) {
  const e = A(), r = e.at(t);
  if (!r)
    throw new Error(`Could not find node for index: ${t}`);
  return x(() => {
    const n = r.clone();
    return e.visibleNodes[t] = n, n;
  }, [
    ...Object.values(r.state),
    r
  ]);
}
const gu = /* @__PURE__ */ Ie.memo(function({ index: e, style: r }) {
  Zr(), Os();
  const n = A(), i = hu(e), o = te(null), a = au(i), s = fu(o, i), u = $r((c) => {
    o.current = c, s(c);
  }, [
    s
  ]), l = n.indent * i.level, d = x(() => ({
    paddingLeft: l
  }), [
    l
  ]), h = x(() => ({
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
  const t = A();
  return /* @__PURE__ */ I("div", {
    style: {
      height: t.height,
      width: t.width,
      minHeight: 0,
      minWidth: 0
    },
    onContextMenu: t.props.onContextMenu,
    onClick: t.props.onClick,
    tabIndex: 0,
    onFocus: (e) => {
      e.currentTarget.contains(e.relatedTarget) || t.onFocus();
    },
    onBlur: (e) => {
      e.currentTarget.contains(e.relatedTarget) || t.onBlur();
    },
    onKeyDown: (e) => {
      var n;
      if (t.isEditing)
        return;
      if (e.key === "Backspace") {
        if (!t.props.onDelete)
          return;
        const i = Array.from(t.selectedIds);
        if (i.length > 1) {
          let o = t.mostRecentNode;
          for (; o && o.isSelected; )
            o = o.nextSibling;
          o || (o = t.lastNode), t.focus(o, {
            scroll: !1
          }), t.delete(Array.from(i));
        } else {
          const o = t.focusedNode;
          if (o) {
            const a = o.nextSibling, s = o.parent;
            t.focus(a || s, {
              scroll: !1
            }), t.delete(o);
          }
        }
        return;
      }
      if (e.key === "Tab" && !e.shiftKey) {
        e.preventDefault(), sn(e.currentTarget);
        return;
      }
      if (e.key === "Tab" && e.shiftKey) {
        e.preventDefault(), un(e.currentTarget);
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const i = t.nextNode;
        if (e.metaKey) {
          t.select(t.focusedNode), t.activate(t.focusedNode);
          return;
        } else if (!e.shiftKey || t.props.disableMultiSelection) {
          t.focus(i);
          return;
        } else {
          if (!i)
            return;
          const o = t.focusedNode;
          o ? o.isSelected ? t.selectContiguous(i) : t.selectMulti(i) : t.focus(t.firstNode);
          return;
        }
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        const i = t.prevNode;
        if (!e.shiftKey || t.props.disableMultiSelection) {
          t.focus(i);
          return;
        } else {
          if (!i)
            return;
          const o = t.focusedNode;
          o ? o.isSelected ? t.selectContiguous(i) : t.selectMulti(i) : t.focus(t.lastNode);
          return;
        }
      }
      if (e.key === "ArrowRight") {
        const i = t.focusedNode;
        if (!i)
          return;
        i.isInternal && i.isOpen ? t.focus(t.nextNode) : i.isInternal && t.open(i.id);
        return;
      }
      if (e.key === "ArrowLeft") {
        const i = t.focusedNode;
        if (!i || i.isRoot)
          return;
        i.isInternal && i.isOpen ? t.close(i.id) : (n = i.parent) != null && n.isRoot || t.focus(i.parent);
        return;
      }
      if (e.key === "a" && e.metaKey && !t.props.disableMultiSelection) {
        e.preventDefault(), t.selectAll();
        return;
      }
      if (e.key === "a" && !e.metaKey && t.props.onCreate) {
        t.createLeaf();
        return;
      }
      if (e.key === "A" && !e.metaKey) {
        if (!t.props.onCreate)
          return;
        t.createInternal();
        return;
      }
      if (e.key === "Home") {
        e.preventDefault(), t.focus(t.firstNode);
        return;
      }
      if (e.key === "End") {
        e.preventDefault(), t.focus(t.lastNode);
        return;
      }
      if (e.key === "Enter") {
        const i = t.focusedNode;
        if (!i || !i.isEditable || !t.props.onRename)
          return;
        setTimeout(() => {
          i && t.edit(i);
        });
        return;
      }
      if (e.key === " ") {
        e.preventDefault();
        const i = t.focusedNode;
        if (!i)
          return;
        i.isLeaf ? (i.select(), i.activate()) : i.toggle();
        return;
      }
      if (e.key === "*") {
        const i = t.focusedNode;
        if (!i)
          return;
        t.openSiblings(i);
        return;
      }
      if (e.key === "PageUp") {
        e.preventDefault(), t.pageUp();
        return;
      }
      e.key === "PageDown" && (e.preventDefault(), t.pageDown()), clearTimeout(wr), qe += e.key, wr = setTimeout(() => {
        qe = "";
      }, 600);
      const r = t.visibleNodes.find((i) => {
        const o = i.data.name;
        return typeof o == "string" ? o.toLowerCase().startsWith(qe) : !1;
      });
      r && t.focus(r.id);
    },
    children: /* @__PURE__ */ I(Ss, {
      className: t.props.className,
      outerRef: t.listEl,
      itemCount: t.visibleNodes.length,
      height: t.height,
      width: t.width,
      itemSize: t.rowHeight,
      overscanCount: t.overscanCount,
      itemKey: (e) => {
        var r;
        return ((r = t.visibleNodes[e]) == null ? void 0 : r.id) || e;
      },
      outerElementType: nu,
      innerElementType: ou,
      onScroll: t.props.onScroll,
      onItemsRendered: t.onItemsRendered.bind(t),
      ref: t.list,
      children: gu
    })
  });
}
function Er(t) {
  return t.isFiltered ? vu(t.root, t.isMatch.bind(t)) : pu(t.root);
}
function pu(t) {
  const e = [];
  function r(n) {
    var i;
    n.level >= 0 && e.push(n), n.isOpen && ((i = n.children) == null || i.forEach(r));
  }
  return r(t), e.forEach(gn), e;
}
function vu(t, e) {
  const r = {}, n = [];
  function i(a) {
    if (!a.isRoot && e(a)) {
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
  return i(t), o(t), n.forEach(gn), n;
}
function gn(t, e) {
  t.rowIndex = e;
}
const Cr = (t) => t.reduce((e, r, n) => (e[r.id] = n, e), {}), { safeRun: R, identify: V, identifyNull: F } = C;
class re {
  constructor(e, r, n, i) {
    this.store = e, this.props = r, this.list = n, this.listEl = i, this.visibleStartIndex = 0, this.visibleStopIndex = 0, this.root = Ir(this), this.visibleNodes = Er(this), this.idToIndex = Cr(this.visibleNodes);
  }
  /* Changes here must also be made in constructor() */
  update(e) {
    this.props = e, this.root = Ir(this), this.visibleNodes = Er(this), this.idToIndex = Cr(this.visibleNodes);
  }
  /* Store helpers */
  dispatch(e) {
    return this.store.dispatch(e);
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
    const e = this.props.searchMatch ?? ((r, n) => JSON.stringify(Object.values(r.data)).toLocaleLowerCase().includes(n.toLocaleLowerCase()));
    return (r) => e(r, this.searchTerm);
  }
  accessChildren(e) {
    const r = this.props.childrenAccessor || "children";
    return C.access(e, r) ?? null;
  }
  accessId(e) {
    const r = this.props.idAccessor || "id", n = C.access(e, r);
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
    const e = this.indexOf(this.focusedNode);
    return e === null ? null : this.at(e + 1);
  }
  get prevNode() {
    const e = this.indexOf(this.focusedNode);
    return e === null ? null : this.at(e - 1);
  }
  get(e) {
    return e && e in this.idToIndex && this.visibleNodes[this.idToIndex[e]] || null;
  }
  at(e) {
    return this.visibleNodes[e] || null;
  }
  nodesBetween(e, r) {
    if (e === null || r === null)
      return [];
    const n = this.indexOf(e) ?? 0, i = this.indexOf(r);
    if (i === null)
      return [];
    const o = Math.min(n, i), a = Math.max(n, i);
    return this.visibleNodes.slice(o, a + 1);
  }
  indexOf(e) {
    const r = C.identifyNull(e);
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
  async create(e = {}) {
    const r = e.parentId === void 0 ? C.getInsertParentId(this) : e.parentId, n = e.index ?? C.getInsertIndex(this), i = e.type ?? "leaf", o = await R(this.props.onCreate, {
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
  async delete(e) {
    if (!e)
      return;
    const n = (Array.isArray(e) ? e : [
      e
    ]).map(V), i = n.map((o) => this.get(o)).filter((o) => !!o);
    await R(this.props.onDelete, {
      nodes: i,
      ids: n
    });
  }
  edit(e) {
    const r = V(e);
    return this.resolveEdit({
      cancelled: !0
    }), this.scrollTo(r), this.dispatch(ze(r)), new Promise((n) => {
      re.editPromise = n;
    });
  }
  async submit(e, r) {
    if (!e)
      return;
    const n = V(e);
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
  activate(e) {
    const r = this.get(F(e));
    r && R(this.props.onActivate, r);
  }
  resolveEdit(e) {
    const r = re.editPromise;
    r && r(e), re.editPromise = null;
  }
  /* Focus and Selection */
  get selectedIds() {
    return this.state.nodes.selection.ids;
  }
  get selectedNodes() {
    let e = [];
    for (let r of Array.from(this.selectedIds)) {
      const n = this.get(r);
      n && e.push(n);
    }
    return e;
  }
  focus(e, r = {}) {
    e && (this.props.selectionFollowsFocus ? this.select(e) : (this.dispatch(ee(V(e))), r.scroll !== !1 && this.scrollTo(e), this.focusedNode && R(this.props.onFocus, this.focusedNode)));
  }
  pageUp() {
    var o;
    const e = this.visibleStartIndex, n = this.visibleStopIndex - e;
    let i = ((o = this.focusedNode) == null ? void 0 : o.rowIndex) ?? 0;
    i > e ? i = e : i = Math.max(e - n, 0), this.focus(this.at(i));
  }
  pageDown() {
    var o;
    const e = this.visibleStartIndex, r = this.visibleStopIndex, n = r - e;
    let i = ((o = this.focusedNode) == null ? void 0 : o.rowIndex) ?? 0;
    i < r ? i = r : i = Math.min(i + n, this.visibleNodes.length - 1), this.focus(this.at(i));
  }
  select(e, r = {}) {
    if (!e)
      return;
    const n = r.focus !== !1, i = V(e);
    n && this.dispatch(ee(i)), this.dispatch(j.only(i)), this.dispatch(j.anchor(i)), this.dispatch(j.mostRecent(i)), this.scrollTo(i, r.align), this.focusedNode && n && R(this.props.onFocus, this.focusedNode), R(this.props.onSelect, this.selectedNodes);
  }
  deselect(e) {
    if (!e)
      return;
    const r = V(e);
    this.dispatch(j.remove(r));
  }
  selectMulti(e) {
    const r = this.get(F(e));
    r && (this.dispatch(ee(r.id)), this.dispatch(j.add(r.id)), this.dispatch(j.anchor(r.id)), this.dispatch(j.mostRecent(r.id)), this.scrollTo(r), this.focusedNode && R(this.props.onFocus, this.focusedNode), R(this.props.onSelect, this.selectedNodes));
  }
  selectContiguous(e) {
    if (!e)
      return;
    const r = V(e), { anchor: n, mostRecent: i } = this.state.nodes.selection;
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
    var e;
    this.setSelection({
      ids: Object.keys(this.idToIndex),
      anchor: this.firstNode,
      mostRecent: this.lastNode
    }), this.dispatch(ee((e = this.lastNode) == null ? void 0 : e.id)), this.focusedNode && R(this.props.onFocus, this.focusedNode), R(this.props.onSelect, this.selectedNodes);
  }
  setSelection(e) {
    var o;
    const r = new Set((o = e.ids) == null ? void 0 : o.map(V)), n = F(e.anchor), i = F(e.mostRecent);
    this.dispatch(j.set({
      ids: r,
      anchor: n,
      mostRecent: i
    })), R(this.props.onSelect, this.selectedNodes);
  }
  /* Drag and Drop */
  get cursorParentId() {
    const { cursor: e } = this.state.dnd;
    switch (e.type) {
      case "highlight":
        return e.id;
      default:
        return null;
    }
  }
  get cursorOverFolder() {
    return this.state.dnd.cursor.type === "highlight";
  }
  get dragNodes() {
    return this.state.dnd.dragIds.map((e) => this.get(e)).filter((e) => !!e);
  }
  canDrop() {
    if (this.isFiltered)
      return !1;
    const e = this.get(this.state.dnd.parentId) ?? this.root, r = this.dragNodes, n = this.props.disableDrop;
    for (const i of r)
      if (!i || !e || i.isInternal && C.isDecendent(e, i))
        return !1;
    return typeof n == "function" ? !n({
      parentNode: e,
      dragNodes: this.dragNodes,
      index: this.state.dnd.index
    }) : typeof n == "string" ? !e.data[n] : typeof n == "boolean" ? !n : !0;
  }
  hideCursor() {
    this.dispatch(ne.cursor({
      type: "none"
    }));
  }
  showCursor(e) {
    this.dispatch(ne.cursor(e));
  }
  /* Visibility */
  open(e) {
    const r = F(e);
    r && (this.isOpen(r) || (this.dispatch(rt.open(r, this.isFiltered)), R(this.props.onToggle, r)));
  }
  close(e) {
    const r = F(e);
    r && this.isOpen(r) && (this.dispatch(rt.close(r, this.isFiltered)), R(this.props.onToggle, r));
  }
  toggle(e) {
    const r = F(e);
    if (r)
      return this.isOpen(r) ? this.close(r) : this.open(r);
  }
  openParents(e) {
    const r = F(e);
    if (!r)
      return;
    const n = C.dfs(this.root, r);
    let i = n == null ? void 0 : n.parent;
    for (; i; )
      this.open(i.id), i = i.parent;
  }
  openSiblings(e) {
    const r = e.parent;
    if (!r)
      this.toggle(e.id);
    else if (r.children) {
      const n = e.isOpen;
      for (let i of r.children)
        i.isInternal && (n ? this.close(i.id) : this.open(i.id));
      this.scrollTo(this.focusedNode);
    }
  }
  openAll() {
    C.walk(this.root, (e) => {
      e.isInternal && e.open();
    });
  }
  closeAll() {
    C.walk(this.root, (e) => {
      e.isInternal && e.close();
    });
  }
  /* Scrolling */
  scrollTo(e, r = "smart") {
    if (!e)
      return;
    const n = V(e);
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
    var e;
    return !!((e = this.props.searchTerm) != null && e.trim());
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
  isSelected(e) {
    return e ? this.state.nodes.selection.ids.has(e) : !1;
  }
  isOpen(e) {
    if (!e)
      return !1;
    if (e === ue)
      return !0;
    const r = this.props.openByDefault ?? !0;
    return this.isFiltered ? this.state.nodes.open.filtered[e] ?? !0 : this.state.nodes.open.unfiltered[e] ?? r;
  }
  isEditable(e) {
    const r = this.props.disableEdit || (() => !1);
    return !C.access(e, r);
  }
  isDraggable(e) {
    const r = this.props.disableDrag || (() => !1);
    return !C.access(e, r);
  }
  isDragging(e) {
    const r = F(e);
    return r ? this.state.nodes.drag.id === r : !1;
  }
  isFocused(e) {
    return this.hasFocus && this.state.nodes.focus.id === e;
  }
  isMatch(e) {
    return this.matchFn(e);
  }
  willReceiveDrop(e) {
    const r = F(e);
    return r ? r === this.state.nodes.drag.idWillReceiveDrop : !1;
  }
  /* Tree Event Handlers */
  onFocus() {
    const e = this.focusedNode || this.firstNode;
    e && this.dispatch(ee(e.id));
  }
  onBlur() {
    this.dispatch(zs());
  }
  onItemsRendered(e) {
    this.visibleStartIndex = e.visibleStartIndex, this.visibleStopIndex = e.visibleStopIndex;
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
function yu(t = {
  id: null,
  idWillReceiveDrop: null
}, e) {
  switch (e.type) {
    case "DND_DRAG_START":
      return {
        ...t,
        id: e.id
      };
    case "DND_DRAG_END":
      return {
        ...t,
        id: null
      };
    case "DND_CURSOR":
      const r = e.cursor;
      return r.type === "highlight" && r.id !== t.idWillReceiveDrop ? {
        ...t,
        idWillReceiveDrop: r.id
      } : r.type !== "highlight" && t.idWillReceiveDrop !== null ? {
        ...t,
        idWillReceiveDrop: null
      } : t;
    default:
      return t;
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
function Su({ treeProps: t, imperativeHandle: e, children: r }) {
  const n = te(null), i = te(null), o = te(ct(mu, ce(t))), a = jn.useSyncExternalStore(o.current.subscribe, o.current.getState, () => bu), s = x(() => new re(o.current, t, n, i), []), u = te(0);
  return x(() => {
    u.current += 1, s.update(t);
  }, [
    ...Object.values(t),
    a.nodes.open
  ]), Rn(e, () => s), H(() => {
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
            ...t.dndManager && {
              manager: t.dndManager
            },
            children: r
          })
        })
      })
    })
  });
}
function Ou() {
  const t = A(), [, e] = Kr(() => ({
    accept: "NODE",
    canDrop: (r, n) => n.isOver({
      shallow: !0
    }) ? t.canDrop() : !1,
    hover: (r, n) => {
      if (!n.isOver({
        shallow: !0
      }))
        return;
      const i = n.getClientOffset();
      if (!t.listEl.current || !i)
        return;
      const { cursor: o, drop: a } = fn({
        element: t.listEl.current,
        offset: i,
        indent: t.indent,
        node: null,
        prevNode: t.visibleNodes[t.visibleNodes.length - 1],
        nextNode: null
      });
      a && t.dispatch(ne.hovering(a.parentId, a.index)), n.canDrop() ? o && t.showCursor(o) : t.hideCursor();
    }
  }), [
    t
  ]);
  e(t.listEl);
}
function Du(t) {
  return Ou(), t.children;
}
function Iu() {
  const e = A().props.renderContainer || hn;
  return /* @__PURE__ */ I(nt, {
    children: /* @__PURE__ */ I(e, {})
  });
}
function Tu() {
  const t = A(), { offset: e, mouse: r, item: n, isDragging: i } = ls((a) => ({
    offset: a.getSourceClientOffset(),
    mouse: a.getClientOffset(),
    item: a.getItem(),
    isDragging: a.isDragging()
  })), o = t.props.renderDragPreview || dn;
  return /* @__PURE__ */ I(o, {
    offset: e,
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
  constructor(e) {
    this.root = Cu(e);
  }
  get data() {
    var e;
    return ((e = this.root.children) == null ? void 0 : e.map((r) => r.data)) ?? [];
  }
  create(e) {
    const r = e.parentId ? this.find(e.parentId) : this.root;
    if (!r)
      return null;
    r.addChild(e.data, e.index);
  }
  move(e) {
    const r = this.find(e.id), n = e.parentId ? this.find(e.parentId) : this.root;
    !r || !n || (n.addChild(r.data, e.index), r.drop());
  }
  update(e) {
    const r = this.find(e.id);
    r && r.update(e.changes);
  }
  drop(e) {
    const r = this.find(e.id);
    r && r.drop();
  }
  find(e, r = this.root) {
    if (!r)
      return null;
    if (r.id === e)
      return r;
    if (r.children) {
      for (let n of r.children) {
        const i = this.find(e, n);
        if (i)
          return i;
      }
      return null;
    }
    return null;
  }
}
function Cu(t) {
  const e = new vn({
    id: "ROOT"
  }, null);
  return e.children = t.map((r) => gt(r, e)), e;
}
function gt(t, e) {
  const r = new vn(t, e);
  return t.children && (r.children = t.children.map((n) => gt(n, r))), r;
}
class vn {
  constructor(e, r) {
    this.data = e, this.parent = r, this.id = e.id;
  }
  hasParent() {
    return !!this.parent;
  }
  get childIndex() {
    return this.hasParent() ? this.parent.children.indexOf(this) : -1;
  }
  addChild(e, r) {
    const n = gt(e, this);
    this.children = this.children ?? [], this.children.splice(r, 0, n), this.data.children = this.data.children ?? [], this.data.children.splice(r, 0, e);
  }
  removeChild(e) {
    var r, n;
    (r = this.children) == null || r.splice(e, 1), (n = this.data.children) == null || n.splice(e, 1);
  }
  update(e) {
    if (this.hasParent()) {
      const r = this.childIndex;
      this.parent.addChild({
        ...this.data,
        ...e
      }, r), this.drop();
    }
  }
  drop() {
    this.hasParent() && this.parent.removeChild(this.childIndex);
  }
}
let $u = 0;
function yn(t) {
  const [e, r] = ot(t), n = x(() => new pn(e), [
    e
  ]);
  return [
    e,
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
function _u(t) {
  if (t.initialData && t.data)
    throw new Error("React Arborist Tree => Provide either a data or initialData prop, but not both.");
  if (t.initialData && (t.onCreate || t.onDelete || t.onMove || t.onRename))
    throw new Error(`React Arborist Tree => You passed the initialData prop along with a data handler.
Use the data prop if you want to provide your own handlers.`);
  if (t.initialData) {
    const [e, r] = yn(t.initialData);
    return {
      ...t,
      ...r,
      data: e
    };
  } else
    return t;
}
function Nu(t, e) {
  const r = _u(t);
  return /* @__PURE__ */ G(Su, {
    treeProps: r,
    imperativeHandle: e,
    children: [
      /* @__PURE__ */ I(Du, {
        children: /* @__PURE__ */ I(Iu, {})
      }),
      /* @__PURE__ */ I(Tu, {})
    ]
  });
}
const xu = /* @__PURE__ */ at(Nu), Ru = (t) => {
  if (!t.isLeaf)
    return t.isOpen ? kn : An;
};
function Uu(t) {
  const e = $n(), [r, n] = ot(t.data), i = t.iconProvider || Mn;
  H(() => {
    n(t.data);
  }, [t.data]);
  const o = (s) => {
    if (s.data.icon)
      return i.getIcon(s.data.icon);
  };
  return /* @__PURE__ */ I(
    xu,
    {
      initialData: r,
      padding: 0,
      width: "100%",
      rowHeight: 40,
      height: 500,
      idAccessor: "name",
      childrenAccessor: (s) => s.children,
      onSelect: (s) => {
        var l, d;
        var u = (d = (l = s[0]) == null ? void 0 : l.data) == null ? void 0 : d.path;
        e(u);
      },
      children: ({ node: s, style: u, dragHandle: l }) => {
        var d = Ru(s), h = o(s);
        return /* @__PURE__ */ G(
          "div",
          {
            className: "tree-menu",
            onClick: () => s.isInternal && s.toggle(),
            children: [
              /* @__PURE__ */ G(
                "div",
                {
                  className: "tree-menu-list",
                  style: { ...u },
                  ref: l,
                  children: [
                    h ? /* @__PURE__ */ I(h, { className: "label-icon" }) : /* @__PURE__ */ I(nt, {}),
                    /* @__PURE__ */ I("div", { children: s.data.name })
                  ]
                }
              ),
              d ? /* @__PURE__ */ I("div", { className: "arrow-icon", children: /* @__PURE__ */ I(d, {}) }) : /* @__PURE__ */ I("div", {})
            ]
          }
        );
      }
    }
  );
}
export {
  Uu as default
};
