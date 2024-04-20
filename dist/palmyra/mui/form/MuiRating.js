import Ct, { jsxs as br, jsx as X, Fragment as vr } from "react/jsx-runtime";
import * as w from "react";
import { forwardRef as _r, useContext as $r, useRef as st, useImperativeHandle as xr } from "react";
import { Rating as Sr } from "@mui/material";
import { copyMuiOptions as Er, getFieldLabel as Or } from "./MuiUtil.js";
import { FieldManagerContext as Tr } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import wr from "./FieldDecorator.js";
import { a as K } from "../../../chunks/_commonjsHelpers.js";
import { _ as S } from "../../../chunks/extends.js";
import { t as $ } from "../../../chunks/index2.js";
import Cr, { ThemeContext as Rr } from "@mui/styled-engine";
var We = {}, Rt = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Rt);
var Se = Rt.exports, je = {};
function U(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Pt(e) {
  if (!U(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Pt(e[r]);
  }), t;
}
function L(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? S({}, e) : e;
  return U(e) && U(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (U(t[o]) && o in e && U(e[o]) ? n[o] = L(e[o], t[o], r) : r.clone ? n[o] = U(t[o]) ? Pt(t[o]) : t[o] : n[o] = t[o]);
  }), n;
}
const Pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: L,
  isPlainObject: U
}, Symbol.toStringTag, { value: "Module" }));
function le(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: le
}, Symbol.toStringTag, { value: "Module" }));
var Le = { exports: {} }, b = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var it;
function Mr() {
  if (it)
    return b;
  it = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), f = Symbol.for("react.server_context"), a = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function d(c) {
    if (typeof c == "object" && c !== null) {
      var x = c.$$typeof;
      switch (x) {
        case e:
          switch (c = c.type, c) {
            case r:
            case o:
            case n:
            case l:
            case p:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case f:
                case i:
                case a:
                case u:
                case m:
                case s:
                  return c;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return b.ContextConsumer = i, b.ContextProvider = s, b.Element = e, b.ForwardRef = a, b.Fragment = r, b.Lazy = u, b.Memo = m, b.Portal = t, b.Profiler = o, b.StrictMode = n, b.Suspense = l, b.SuspenseList = p, b.isAsyncMode = function() {
    return !1;
  }, b.isConcurrentMode = function() {
    return !1;
  }, b.isContextConsumer = function(c) {
    return d(c) === i;
  }, b.isContextProvider = function(c) {
    return d(c) === s;
  }, b.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === e;
  }, b.isForwardRef = function(c) {
    return d(c) === a;
  }, b.isFragment = function(c) {
    return d(c) === r;
  }, b.isLazy = function(c) {
    return d(c) === u;
  }, b.isMemo = function(c) {
    return d(c) === m;
  }, b.isPortal = function(c) {
    return d(c) === t;
  }, b.isProfiler = function(c) {
    return d(c) === o;
  }, b.isStrictMode = function(c) {
    return d(c) === n;
  }, b.isSuspense = function(c) {
    return d(c) === l;
  }, b.isSuspenseList = function(c) {
    return d(c) === p;
  }, b.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === r || c === o || c === n || c === l || c === p || c === y || typeof c == "object" && c !== null && (c.$$typeof === u || c.$$typeof === m || c.$$typeof === s || c.$$typeof === i || c.$$typeof === a || c.$$typeof === g || c.getModuleId !== void 0);
  }, b.typeOf = d, b;
}
var v = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var at;
function Ir() {
  return at || (at = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), f = Symbol.for("react.server_context"), a = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), g = !1, d = !1, c = !1, x = !1, N = !1, C;
    C = Symbol.for("react.module.reference");
    function A(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === r || h === o || N || h === n || h === l || h === p || x || h === y || g || d || c || typeof h == "object" && h !== null && (h.$$typeof === u || h.$$typeof === m || h.$$typeof === s || h.$$typeof === i || h.$$typeof === a || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === C || h.getModuleId !== void 0));
    }
    function _(h) {
      if (typeof h == "object" && h !== null) {
        var ke = h.$$typeof;
        switch (ke) {
          case e:
            var ye = h.type;
            switch (ye) {
              case r:
              case o:
              case n:
              case l:
              case p:
                return ye;
              default:
                var ot = ye && ye.$$typeof;
                switch (ot) {
                  case f:
                  case i:
                  case a:
                  case u:
                  case m:
                  case s:
                    return ot;
                  default:
                    return ke;
                }
            }
          case t:
            return ke;
        }
      }
    }
    var V = i, ie = s, Y = e, ge = a, ae = r, M = u, k = m, H = t, J = o, Ie = n, Ne = l, nr = p, rt = !1, nt = !1;
    function or(h) {
      return rt || (rt = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function sr(h) {
      return nt || (nt = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ir(h) {
      return _(h) === i;
    }
    function ar(h) {
      return _(h) === s;
    }
    function ur(h) {
      return typeof h == "object" && h !== null && h.$$typeof === e;
    }
    function cr(h) {
      return _(h) === a;
    }
    function lr(h) {
      return _(h) === r;
    }
    function fr(h) {
      return _(h) === u;
    }
    function dr(h) {
      return _(h) === m;
    }
    function pr(h) {
      return _(h) === t;
    }
    function mr(h) {
      return _(h) === o;
    }
    function hr(h) {
      return _(h) === n;
    }
    function gr(h) {
      return _(h) === l;
    }
    function yr(h) {
      return _(h) === p;
    }
    v.ContextConsumer = V, v.ContextProvider = ie, v.Element = Y, v.ForwardRef = ge, v.Fragment = ae, v.Lazy = M, v.Memo = k, v.Portal = H, v.Profiler = J, v.StrictMode = Ie, v.Suspense = Ne, v.SuspenseList = nr, v.isAsyncMode = or, v.isConcurrentMode = sr, v.isContextConsumer = ir, v.isContextProvider = ar, v.isElement = ur, v.isForwardRef = cr, v.isFragment = lr, v.isLazy = fr, v.isMemo = dr, v.isPortal = pr, v.isProfiler = mr, v.isStrictMode = hr, v.isSuspense = gr, v.isSuspenseList = yr, v.isValidElementType = A, v.typeOf = _;
  }()), v;
}
process.env.NODE_ENV === "production" ? Le.exports = Mr() : Le.exports = Ir();
var ut = Le.exports;
const Nr = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function At(e) {
  const t = `${e}`.match(Nr);
  return t && t[1] || "";
}
function Mt(e, t = "") {
  return e.displayName || e.name || At(e) || t;
}
function ct(e, t, r) {
  const n = Mt(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function kr(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Mt(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ut.ForwardRef:
          return ct(e, e.render, "ForwardRef");
        case ut.Memo:
          return ct(e, e.type, "memo");
        default:
          return;
      }
  }
}
const jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kr,
  getFunctionName: At
}, Symbol.toStringTag, { value: "Module" }));
function W(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : le(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: W
}, Symbol.toStringTag, { value: "Module" }));
function Fr(...e) {
  return e.reduce((t, r) => r == null ? t : function(...o) {
    t.apply(this, o), r.apply(this, o);
  }, () => {
  });
}
function zr(e, t = 166) {
  let r;
  function n(...o) {
    const s = () => {
      e.apply(this, o);
    };
    clearTimeout(r), r = setTimeout(s, t);
  }
  return n.clear = () => {
    clearTimeout(r);
  }, n;
}
function Vr(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (r, n, o, s, i) => {
    const f = o || "<<anonymous>>", a = i || n;
    return typeof r[n] < "u" ? new Error(`The ${s} \`${a}\` of \`${f}\` is deprecated. ${t}`) : null;
  };
}
function Lr(e, t) {
  var r, n;
  return /* @__PURE__ */ w.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (r = e.type.muiName) != null ? r : (n = e.type) == null || (n = n._payload) == null || (n = n.value) == null ? void 0 : n.muiName
  ) !== -1;
}
function It(e) {
  return e && e.ownerDocument || document;
}
function Br(e) {
  return It(e).defaultView || window;
}
function Ur(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const r = t ? S({}, t.propTypes) : null;
  return (o) => (s, i, f, a, l, ...p) => {
    const m = l || i, u = r == null ? void 0 : r[m];
    if (u) {
      const y = u(s, i, f, a, l, ...p);
      if (y)
        return y;
    }
    return typeof s[i] < "u" && !s[o] ? new Error(`The prop \`${m}\` of \`${e}\` can only be used together with the \`${o}\` prop.`) : null;
  };
}
function Nt(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Wr = typeof window < "u" ? w.useLayoutEffect : w.useEffect, kt = Wr;
let lt = 0;
function Kr(e) {
  const [t, r] = w.useState(e), n = e || t;
  return w.useEffect(() => {
    t == null && (lt += 1, r(`mui-${lt}`));
  }, [t]), n;
}
const ft = w["useId".toString()];
function qr(e) {
  if (ft !== void 0) {
    const t = ft();
    return e ?? t;
  }
  return Kr(e);
}
function Gr(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${s}\` is not supported. Please remove it.`) : null;
}
function Yr({
  controlled: e,
  default: t,
  name: r,
  state: n = "value"
}) {
  const {
    current: o
  } = w.useRef(e !== void 0), [s, i] = w.useState(t), f = o ? e : s;
  if (process.env.NODE_ENV !== "production") {
    w.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${n} state of ${r} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, r, e]);
    const {
      current: l
    } = w.useRef(t);
    w.useEffect(() => {
      !o && l !== t && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const a = w.useCallback((l) => {
    o || i(l);
  }, []);
  return [f, a];
}
function Hr(e) {
  const t = w.useRef(e);
  return kt(() => {
    t.current = e;
  }), w.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Xr(...e) {
  return w.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Nt(r, t);
    });
  }, e);
}
class Ke {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new Ke();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
let Ee = !0, Be = !1;
const Jr = new Ke(), Zr = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function Qr(e) {
  const {
    type: t,
    tagName: r
  } = e;
  return !!(r === "INPUT" && Zr[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function en(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Ee = !0);
}
function De() {
  Ee = !1;
}
function tn() {
  this.visibilityState === "hidden" && Be && (Ee = !0);
}
function rn(e) {
  e.addEventListener("keydown", en, !0), e.addEventListener("mousedown", De, !0), e.addEventListener("pointerdown", De, !0), e.addEventListener("touchstart", De, !0), e.addEventListener("visibilitychange", tn, !0);
}
function nn(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Ee || Qr(t);
}
function on() {
  const e = w.useCallback((o) => {
    o != null && rn(o.ownerDocument);
  }, []), t = w.useRef(!1);
  function r() {
    return t.current ? (Be = !0, Jr.start(100, () => {
      Be = !1;
    }), t.current = !1, !0) : !1;
  }
  function n(o) {
    return nn(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: n,
    onBlur: r,
    ref: e
  };
}
function jt(e, t) {
  const r = S({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      r[n] = S({}, e[n], r[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, s = t[n];
      r[n] = {}, !s || !Object.keys(s) ? r[n] = o : !o || !Object.keys(o) ? r[n] = s : (r[n] = S({}, s), Object.keys(o).forEach((i) => {
        r[n][i] = jt(o[i], s[i]);
      }));
    } else
      r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
function sn(e, t, r = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((s, i) => {
        if (i) {
          const f = t(i);
          f !== "" && s.push(f), r && r[i] && s.push(r[i]);
        }
        return s;
      }, []).join(" ");
    }
  ), n;
}
const dt = (e) => e, an = () => {
  let e = dt;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = dt;
    }
  };
}, un = an(), Dt = un, cn = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function qe(e, t, r = "Mui") {
  const n = cn[t];
  return n ? `${r}-${n}` : `${Dt.generate(e)}-${t}`;
}
function ln(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = qe(e, o, r);
  }), n;
}
function fn(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
const dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fn
}, Symbol.toStringTag, { value: "Module" }));
function q(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, s;
  for (s = 0; s < n.length; s++)
    o = n[s], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Ft(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (r = Ft(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function pn() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = Ft(e)) && (n && (n += " "), n += t);
  return n;
}
function mn(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : jt(t.components[r].defaultProps, n);
}
const hn = ["values", "unit", "step"], gn = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => S({}, r, {
    [n.key]: n.val
  }), {});
};
function zt(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5
  } = e, o = q(e, hn), s = gn(t), i = Object.keys(s);
  function f(u) {
    return `@media (min-width:${typeof t[u] == "number" ? t[u] : u}${r})`;
  }
  function a(u) {
    return `@media (max-width:${(typeof t[u] == "number" ? t[u] : u) - n / 100}${r})`;
  }
  function l(u, y) {
    const g = i.indexOf(y);
    return `@media (min-width:${typeof t[u] == "number" ? t[u] : u}${r}) and (max-width:${(g !== -1 && typeof t[i[g]] == "number" ? t[i[g]] : y) - n / 100}${r})`;
  }
  function p(u) {
    return i.indexOf(u) + 1 < i.length ? l(u, i[i.indexOf(u) + 1]) : f(u);
  }
  function m(u) {
    const y = i.indexOf(u);
    return y === 0 ? f(i[1]) : y === i.length - 1 ? a(i[y]) : l(u, i[i.indexOf(u) + 1]).replace("@media", "@media not all and");
  }
  return S({
    keys: i,
    values: s,
    up: f,
    down: a,
    between: l,
    only: p,
    not: m,
    unit: r
  }, o);
}
const yn = {
  borderRadius: 4
}, bn = yn, vn = process.env.NODE_ENV !== "production" ? $.oneOfType([$.number, $.string, $.object, $.array]) : {}, G = vn;
function ce(e, t) {
  return t ? L(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Ge = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, pt = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Ge[e]}px)`
};
function B(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const s = n.breakpoints || pt;
    return t.reduce((i, f, a) => (i[s.up(s.keys[a])] = r(t[a]), i), {});
  }
  if (typeof t == "object") {
    const s = n.breakpoints || pt;
    return Object.keys(t).reduce((i, f) => {
      if (Object.keys(s.values || Ge).indexOf(f) !== -1) {
        const a = s.up(f);
        i[a] = r(t[f], f);
      } else {
        const a = f;
        i[a] = t[a];
      }
      return i;
    }, {});
  }
  return r(t);
}
function _n(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const s = e.up(o);
    return n[s] = {}, n;
  }, {})) || {};
}
function $n(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Oe(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, s) => o && o[s] ? o[s] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function $e(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Oe(e, r) || n, t && (o = t(o, n, e)), o;
}
function R(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, s = (i) => {
    if (i[t] == null)
      return null;
    const f = i[t], a = i.theme, l = Oe(a, n) || {};
    return B(i, f, (m) => {
      let u = $e(l, o, m);
      return m === u && typeof m == "string" && (u = $e(l, o, `${t}${m === "default" ? "" : W(m)}`, m)), r === !1 ? u : {
        [r]: u
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: G
  } : {}, s.filterProps = [t], s;
}
function xn(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Sn = {
  m: "margin",
  p: "padding"
}, En = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, mt = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, On = xn((e) => {
  if (e.length > 2)
    if (mt[e])
      e = mt[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Sn[t], o = En[r] || "";
  return Array.isArray(o) ? o.map((s) => n + s) : [n + o];
}), Te = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], we = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Tn = [...Te, ...we];
function de(e, t, r, n) {
  var o;
  const s = (o = Oe(e, t, !1)) != null ? o : r;
  return typeof s == "number" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), s * i) : Array.isArray(s) ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && (Number.isInteger(i) ? i > s.length - 1 && console.error([`MUI: The value provided (${i}) overflows.`, `The supported values are: ${JSON.stringify(s)}.`, `${i} > ${s.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), s[i]) : typeof s == "function" ? s : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${s}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Vt(e) {
  return de(e, "spacing", 8, "spacing");
}
function pe(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function wn(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = pe(t, r), n), {});
}
function Cn(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const o = On(r), s = wn(o, n), i = e[r];
  return B(e, i, s);
}
function Lt(e, t) {
  const r = Vt(e.theme);
  return Object.keys(e).map((n) => Cn(e, t, n, r)).reduce(ce, {});
}
function O(e) {
  return Lt(e, Te);
}
O.propTypes = process.env.NODE_ENV !== "production" ? Te.reduce((e, t) => (e[t] = G, e), {}) : {};
O.filterProps = Te;
function T(e) {
  return Lt(e, we);
}
T.propTypes = process.env.NODE_ENV !== "production" ? we.reduce((e, t) => (e[t] = G, e), {}) : {};
T.filterProps = we;
process.env.NODE_ENV !== "production" && Tn.reduce((e, t) => (e[t] = G, e), {});
function Rn(e = 8) {
  if (e.mui)
    return e;
  const t = Vt({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((s) => {
    const i = t(s);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" "));
  return r.mui = !0, r;
}
function Ce(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((s) => {
    n[s] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, s) => t[s] ? ce(o, t[s](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function D(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function z(e, t) {
  return R({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Pn = z("border", D), An = z("borderTop", D), Mn = z("borderRight", D), In = z("borderBottom", D), Nn = z("borderLeft", D), kn = z("borderColor"), jn = z("borderTopColor"), Dn = z("borderRightColor"), Fn = z("borderBottomColor"), zn = z("borderLeftColor"), Vn = z("outline", D), Ln = z("outlineColor"), Re = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = de(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: pe(t, n)
    });
    return B(e, e.borderRadius, r);
  }
  return null;
};
Re.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: G
} : {};
Re.filterProps = ["borderRadius"];
Ce(Pn, An, Mn, In, Nn, kn, jn, Dn, Fn, zn, Re, Vn, Ln);
const Pe = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = de(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: pe(t, n)
    });
    return B(e, e.gap, r);
  }
  return null;
};
Pe.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: G
} : {};
Pe.filterProps = ["gap"];
const Ae = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = de(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: pe(t, n)
    });
    return B(e, e.columnGap, r);
  }
  return null;
};
Ae.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: G
} : {};
Ae.filterProps = ["columnGap"];
const Me = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = de(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: pe(t, n)
    });
    return B(e, e.rowGap, r);
  }
  return null;
};
Me.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: G
} : {};
Me.filterProps = ["rowGap"];
const Bn = R({
  prop: "gridColumn"
}), Un = R({
  prop: "gridRow"
}), Wn = R({
  prop: "gridAutoFlow"
}), Kn = R({
  prop: "gridAutoColumns"
}), qn = R({
  prop: "gridAutoRows"
}), Gn = R({
  prop: "gridTemplateColumns"
}), Yn = R({
  prop: "gridTemplateRows"
}), Hn = R({
  prop: "gridTemplateAreas"
}), Xn = R({
  prop: "gridArea"
});
Ce(Pe, Ae, Me, Bn, Un, Wn, Kn, qn, Gn, Yn, Hn, Xn);
function ne(e, t) {
  return t === "grey" ? t : e;
}
const Jn = R({
  prop: "color",
  themeKey: "palette",
  transform: ne
}), Zn = R({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ne
}), Qn = R({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ne
});
Ce(Jn, Zn, Qn);
function I(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const eo = R({
  prop: "width",
  transform: I
}), Ye = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, o;
      const s = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[r]) || Ge[r];
      return s ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${s}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: s
      } : {
        maxWidth: I(r)
      };
    };
    return B(e, e.maxWidth, t);
  }
  return null;
};
Ye.filterProps = ["maxWidth"];
const to = R({
  prop: "minWidth",
  transform: I
}), ro = R({
  prop: "height",
  transform: I
}), no = R({
  prop: "maxHeight",
  transform: I
}), oo = R({
  prop: "minHeight",
  transform: I
});
R({
  prop: "size",
  cssProperty: "width",
  transform: I
});
R({
  prop: "size",
  cssProperty: "height",
  transform: I
});
const so = R({
  prop: "boxSizing"
});
Ce(eo, Ye, to, ro, no, oo, so);
const io = {
  // borders
  border: {
    themeKey: "borders",
    transform: D
  },
  borderTop: {
    themeKey: "borders",
    transform: D
  },
  borderRight: {
    themeKey: "borders",
    transform: D
  },
  borderBottom: {
    themeKey: "borders",
    transform: D
  },
  borderLeft: {
    themeKey: "borders",
    transform: D
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: D
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Re
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ne
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ne
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ne
  },
  // spacing
  p: {
    style: T
  },
  pt: {
    style: T
  },
  pr: {
    style: T
  },
  pb: {
    style: T
  },
  pl: {
    style: T
  },
  px: {
    style: T
  },
  py: {
    style: T
  },
  padding: {
    style: T
  },
  paddingTop: {
    style: T
  },
  paddingRight: {
    style: T
  },
  paddingBottom: {
    style: T
  },
  paddingLeft: {
    style: T
  },
  paddingX: {
    style: T
  },
  paddingY: {
    style: T
  },
  paddingInline: {
    style: T
  },
  paddingInlineStart: {
    style: T
  },
  paddingInlineEnd: {
    style: T
  },
  paddingBlock: {
    style: T
  },
  paddingBlockStart: {
    style: T
  },
  paddingBlockEnd: {
    style: T
  },
  m: {
    style: O
  },
  mt: {
    style: O
  },
  mr: {
    style: O
  },
  mb: {
    style: O
  },
  ml: {
    style: O
  },
  mx: {
    style: O
  },
  my: {
    style: O
  },
  margin: {
    style: O
  },
  marginTop: {
    style: O
  },
  marginRight: {
    style: O
  },
  marginBottom: {
    style: O
  },
  marginLeft: {
    style: O
  },
  marginX: {
    style: O
  },
  marginY: {
    style: O
  },
  marginInline: {
    style: O
  },
  marginInlineStart: {
    style: O
  },
  marginInlineEnd: {
    style: O
  },
  marginBlock: {
    style: O
  },
  marginBlockStart: {
    style: O
  },
  marginBlockEnd: {
    style: O
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Pe
  },
  rowGap: {
    style: Me
  },
  columnGap: {
    style: Ae
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: I
  },
  maxWidth: {
    style: Ye
  },
  minWidth: {
    transform: I
  },
  height: {
    transform: I
  },
  maxHeight: {
    transform: I
  },
  minHeight: {
    transform: I
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, me = io;
function ao(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function uo(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Bt() {
  function e(r, n, o, s) {
    const i = {
      [r]: n,
      theme: o
    }, f = s[r];
    if (!f)
      return {
        [r]: n
      };
    const {
      cssProperty: a = r,
      themeKey: l,
      transform: p,
      style: m
    } = f;
    if (n == null)
      return null;
    if (l === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const u = Oe(o, l) || {};
    return m ? m(i) : B(i, n, (g) => {
      let d = $e(u, p, g);
      return g === d && typeof g == "string" && (d = $e(u, p, `${r}${g === "default" ? "" : W(g)}`, g)), a === !1 ? d : {
        [a]: d
      };
    });
  }
  function t(r) {
    var n;
    const {
      sx: o,
      theme: s = {}
    } = r || {};
    if (!o)
      return null;
    const i = (n = s.unstable_sxConfig) != null ? n : me;
    function f(a) {
      let l = a;
      if (typeof a == "function")
        l = a(s);
      else if (typeof a != "object")
        return a;
      if (!l)
        return null;
      const p = _n(s.breakpoints), m = Object.keys(p);
      let u = p;
      return Object.keys(l).forEach((y) => {
        const g = uo(l[y], s);
        if (g != null)
          if (typeof g == "object")
            if (i[y])
              u = ce(u, e(y, g, s, i));
            else {
              const d = B({
                theme: s
              }, g, (c) => ({
                [y]: c
              }));
              ao(d, g) ? u[y] = t({
                sx: g,
                theme: s
              }) : u = ce(u, d);
            }
          else
            u = ce(u, e(y, g, s, i));
      }), $n(m, u);
    }
    return Array.isArray(o) ? o.map(f) : f(o);
  }
  return t;
}
const Ut = Bt();
Ut.filterProps = ["sx"];
const He = Ut;
function Wt(e, t) {
  const r = this;
  return r.vars && typeof r.getColorSchemeSelector == "function" ? {
    [r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : r.palette.mode === e ? t : {};
}
const co = ["breakpoints", "palette", "spacing", "shape"];
function Xe(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: s = {}
  } = e, i = q(e, co), f = zt(r), a = Rn(o);
  let l = L({
    breakpoints: f,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: S({
      mode: "light"
    }, n),
    spacing: a,
    shape: S({}, bn, s)
  }, i);
  return l.applyStyles = Wt, l = t.reduce((p, m) => L(p, m), l), l.unstable_sxConfig = S({}, me, i == null ? void 0 : i.unstable_sxConfig), l.unstable_sx = function(m) {
    return He({
      sx: m,
      theme: this
    });
  }, l;
}
const lo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xe,
  private_createBreakpoints: zt,
  unstable_applyStyles: Wt
}, Symbol.toStringTag, { value: "Module" }));
function fo(e) {
  return Object.keys(e).length === 0;
}
function po(e = null) {
  const t = w.useContext(Rr);
  return !t || fo(t) ? e : t;
}
const mo = Xe();
function ho(e = mo) {
  return po(e);
}
function go({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: n
}) {
  let o = ho(r);
  return n && (o = o[n] || o), mn({
    theme: o,
    name: t,
    props: e
  });
}
const yo = ["sx"], bo = (e) => {
  var t, r;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (r = e.theme) == null ? void 0 : r.unstable_sxConfig) != null ? t : me;
  return Object.keys(e).forEach((s) => {
    o[s] ? n.systemProps[s] = e[s] : n.otherProps[s] = e[s];
  }), n;
};
function vo(e) {
  const {
    sx: t
  } = e, r = q(e, yo), {
    systemProps: n,
    otherProps: o
  } = bo(r);
  let s;
  return Array.isArray(t) ? s = [n, ...t] : typeof t == "function" ? s = (...i) => {
    const f = t(...i);
    return U(f) ? S({}, n, f) : n;
  } : s = S({}, n, t), S({}, o, {
    sx: s
  });
}
const _o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: He,
  extendSxProp: vo,
  unstable_createStyleFunctionSx: Bt,
  unstable_defaultSxConfig: me
}, Symbol.toStringTag, { value: "Module" }));
function $o(e, t) {
  return S({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
var P = {};
const xo = /* @__PURE__ */ K(Ar), So = /* @__PURE__ */ K(dn);
var Kt = Se;
Object.defineProperty(P, "__esModule", {
  value: !0
});
P.alpha = Ht;
P.blend = ko;
P.colorChannel = void 0;
var Eo = P.darken = Ze;
P.decomposeColor = F;
P.emphasize = Xt;
var ht = P.getContrastRatio = Po;
P.getLuminance = xe;
P.hexToRgb = qt;
P.hslToRgb = Yt;
var Oo = P.lighten = Qe;
P.private_safeAlpha = Ao;
P.private_safeColorChannel = void 0;
P.private_safeDarken = Mo;
P.private_safeEmphasize = No;
P.private_safeLighten = Io;
P.recomposeColor = oe;
P.rgbToHex = Ro;
var gt = Kt(xo), To = Kt(So);
function Je(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), (0, To.default)(e, t, r);
}
function qt(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function wo(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function F(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return F(qt(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, gt.default)(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, gt.default)(10, o));
  } else
    n = n.split(",");
  return n = n.map((s) => parseFloat(s)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Gt = (e) => {
  const t = F(e);
  return t.values.slice(0, 3).map((r, n) => t.type.indexOf("hsl") !== -1 && n !== 0 ? `${r}%` : r).join(" ");
};
P.colorChannel = Gt;
const Co = (e, t) => {
  try {
    return Gt(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
P.private_safeColorChannel = Co;
function oe(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((o, s) => s < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Ro(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = F(e);
  return `#${t.map((r, n) => wo(n === 3 ? Math.round(255 * r) : r)).join("")}`;
}
function Yt(e) {
  e = F(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, s = n * Math.min(o, 1 - o), i = (l, p = (l + r / 30) % 12) => o - s * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let f = "rgb";
  const a = [Math.round(i(0) * 255), Math.round(i(8) * 255), Math.round(i(4) * 255)];
  return e.type === "hsla" && (f += "a", a.push(t[3])), oe({
    type: f,
    values: a
  });
}
function xe(e) {
  e = F(e);
  let t = e.type === "hsl" || e.type === "hsla" ? F(Yt(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Po(e, t) {
  const r = xe(e), n = xe(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Ht(e, t) {
  return e = F(e), t = Je(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, oe(e);
}
function Ao(e, t, r) {
  try {
    return Ht(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Ze(e, t) {
  if (e = F(e), t = Je(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return oe(e);
}
function Mo(e, t, r) {
  try {
    return Ze(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Qe(e, t) {
  if (e = F(e), t = Je(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return oe(e);
}
function Io(e, t, r) {
  try {
    return Qe(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Xt(e, t = 0.15) {
  return xe(e) > 0.5 ? Ze(e, t) : Qe(e, t);
}
function No(e, t, r) {
  try {
    return Xt(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function ko(e, t, r, n = 1) {
  const o = (a, l) => Math.round((a ** (1 / n) * (1 - r) + l ** (1 / n) * r) ** n), s = F(e), i = F(t), f = [o(s.values[0], i.values[0]), o(s.values[1], i.values[1]), o(s.values[2], i.values[2])];
  return oe({
    type: "rgb",
    values: f
  });
}
const jo = {
  black: "#000",
  white: "#fff"
}, fe = jo, Do = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Fo = Do, zo = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Z = zo, Vo = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Q = Vo, Lo = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, ue = Lo, Bo = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, ee = Bo, Uo = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, te = Uo, Wo = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, re = Wo, Ko = ["mode", "contrastThreshold", "tonalOffset"], yt = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: fe.white,
    default: fe.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Fe = {
  text: {
    primary: fe.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: fe.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function bt(e, t, r, n) {
  const o = n.light || n, s = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Oo(e.main, o) : t === "dark" && (e.dark = Eo(e.main, s)));
}
function qo(e = "light") {
  return e === "dark" ? {
    main: ee[200],
    light: ee[50],
    dark: ee[400]
  } : {
    main: ee[700],
    light: ee[400],
    dark: ee[800]
  };
}
function Go(e = "light") {
  return e === "dark" ? {
    main: Z[200],
    light: Z[50],
    dark: Z[400]
  } : {
    main: Z[500],
    light: Z[300],
    dark: Z[700]
  };
}
function Yo(e = "light") {
  return e === "dark" ? {
    main: Q[500],
    light: Q[300],
    dark: Q[700]
  } : {
    main: Q[700],
    light: Q[400],
    dark: Q[800]
  };
}
function Ho(e = "light") {
  return e === "dark" ? {
    main: te[400],
    light: te[300],
    dark: te[700]
  } : {
    main: te[700],
    light: te[500],
    dark: te[900]
  };
}
function Xo(e = "light") {
  return e === "dark" ? {
    main: re[400],
    light: re[300],
    dark: re[700]
  } : {
    main: re[800],
    light: re[500],
    dark: re[900]
  };
}
function Jo(e = "light") {
  return e === "dark" ? {
    main: ue[400],
    light: ue[300],
    dark: ue[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: ue[500],
    dark: ue[900]
  };
}
function Zo(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, o = q(e, Ko), s = e.primary || qo(t), i = e.secondary || Go(t), f = e.error || Yo(t), a = e.info || Ho(t), l = e.success || Xo(t), p = e.warning || Jo(t);
  function m(d) {
    const c = ht(d, Fe.text.primary) >= r ? Fe.text.primary : yt.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const x = ht(d, c);
      x < 3 && console.error([`MUI: The contrast ratio of ${x}:1 for ${c} on ${d}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return c;
  }
  const u = ({
    color: d,
    name: c,
    mainShade: x = 500,
    lightShade: N = 300,
    darkShade: C = 700
  }) => {
    if (d = S({}, d), !d.main && d[x] && (d.main = d[x]), !d.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${c ? ` (${c})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${x}\` property.` : le(11, c ? ` (${c})` : "", x));
    if (typeof d.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${c ? ` (${c})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(d.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : le(12, c ? ` (${c})` : "", JSON.stringify(d.main)));
    return bt(d, "light", N, n), bt(d, "dark", C, n), d.contrastText || (d.contrastText = m(d.main)), d;
  }, y = {
    dark: Fe,
    light: yt
  };
  return process.env.NODE_ENV !== "production" && (y[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), L(S({
    // A collection of common colors.
    common: S({}, fe),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: u({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: u({
      color: i,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: u({
      color: f,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: u({
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: u({
      color: a,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: u({
      color: l,
      name: "success"
    }),
    // The grey colors.
    grey: Fo,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: u,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, y[t]), o);
}
const Qo = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function es(e) {
  return Math.round(e * 1e5) / 1e5;
}
const vt = {
  textTransform: "uppercase"
}, _t = '"Roboto", "Helvetica", "Arial", sans-serif';
function ts(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = _t,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: f = 500,
    fontWeightBold: a = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: p,
    pxToRem: m
  } = r, u = q(r, Qo);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const y = o / 14, g = m || ((x) => `${x / l * y}rem`), d = (x, N, C, A, _) => S({
    fontFamily: n,
    fontWeight: x,
    fontSize: g(N),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: C
  }, n === _t ? {
    letterSpacing: `${es(A / N)}em`
  } : {}, _, p), c = {
    h1: d(s, 96, 1.167, -1.5),
    h2: d(s, 60, 1.2, -0.5),
    h3: d(i, 48, 1.167, 0),
    h4: d(i, 34, 1.235, 0.25),
    h5: d(i, 24, 1.334, 0),
    h6: d(f, 20, 1.6, 0.15),
    subtitle1: d(i, 16, 1.75, 0.15),
    subtitle2: d(f, 14, 1.57, 0.1),
    body1: d(i, 16, 1.5, 0.15),
    body2: d(i, 14, 1.43, 0.15),
    button: d(f, 14, 1.75, 0.4, vt),
    caption: d(i, 12, 1.66, 0.4),
    overline: d(i, 12, 2.66, 1, vt),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return L(S({
    htmlFontSize: l,
    pxToRem: g,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: s,
    fontWeightRegular: i,
    fontWeightMedium: f,
    fontWeightBold: a
  }, c), u, {
    clone: !1
    // No need to clone deep
  });
}
const rs = 0.2, ns = 0.14, os = 0.12;
function E(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${rs})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${ns})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${os})`].join(",");
}
const ss = ["none", E(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), E(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), E(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), E(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), E(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), E(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), E(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), E(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), E(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), E(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), E(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), E(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), E(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), E(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), E(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), E(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), E(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), E(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), E(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), E(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), E(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), E(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), E(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), E(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], is = ss, as = ["duration", "easing", "delay"], us = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, cs = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function $t(e) {
  return `${Math.round(e)}ms`;
}
function ls(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function fs(e) {
  const t = S({}, us, e.easing), r = S({}, cs, e.duration);
  return S({
    getAutoHeightDuration: ls,
    create: (o = ["all"], s = {}) => {
      const {
        duration: i = r.standard,
        easing: f = t.easeInOut,
        delay: a = 0
      } = s, l = q(s, as);
      if (process.env.NODE_ENV !== "production") {
        const p = (u) => typeof u == "string", m = (u) => !isNaN(parseFloat(u));
        !p(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(i) && !p(i) && console.error(`MUI: Argument "duration" must be a number or a string but found ${i}.`), p(f) || console.error('MUI: Argument "easing" must be a string.'), !m(a) && !p(a) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(l).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(l).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((p) => `${p} ${typeof i == "string" ? i : $t(i)} ${f} ${typeof a == "string" ? a : $t(a)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const ds = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, ps = ds, ms = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function hs(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: o = {},
    typography: s = {}
  } = e, i = q(e, ms);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : le(18));
  const f = Zo(n), a = Xe(e);
  let l = L(a, {
    mixins: $o(a.breakpoints, r),
    palette: f,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: is.slice(),
    typography: ts(f, s),
    transitions: fs(o),
    zIndex: S({}, ps)
  });
  if (l = L(l, i), l = t.reduce((p, m) => L(p, m), l), process.env.NODE_ENV !== "production") {
    const p = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], m = (u, y) => {
      let g;
      for (g in u) {
        const d = u[g];
        if (p.indexOf(g) !== -1 && Object.keys(d).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const c = qe("", g);
            console.error([`MUI: The \`${y}\` component increases the CSS specificity of the \`${g}\` internal state.`, "You can not override it like this: ", JSON.stringify(u, null, 2), "", `Instead, you need to use the '&.${c}' syntax:`, JSON.stringify({
              root: {
                [`&.${c}`]: d
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          u[g] = {};
        }
      }
    };
    Object.keys(l.components).forEach((u) => {
      const y = l.components[u].styleOverrides;
      y && u.indexOf("Mui") === 0 && m(y, u);
    });
  }
  return l.unstable_sxConfig = S({}, me, i == null ? void 0 : i.unstable_sxConfig), l.unstable_sx = function(m) {
    return He({
      sx: m,
      theme: this
    });
  }, l;
}
const gs = hs(), Jt = gs, Zt = "$$material";
function ys({
  props: e,
  name: t
}) {
  return go({
    props: e,
    name: t,
    defaultTheme: Jt,
    themeId: Zt
  });
}
var he = {}, ze = { exports: {} }, xt;
function bs() {
  return xt || (xt = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(r) {
        for (var n = 1; n < arguments.length; n++) {
          var o = arguments[n];
          for (var s in o)
            Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s]);
        }
        return r;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(this, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(ze)), ze.exports;
}
var Ve = { exports: {} }, St;
function vs() {
  return St || (St = 1, function(e) {
    function t(r, n) {
      if (r == null)
        return {};
      var o = {}, s = Object.keys(r), i, f;
      for (f = 0; f < s.length; f++)
        i = s[f], !(n.indexOf(i) >= 0) && (o[i] = r[i]);
      return o;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Ve)), Ve.exports;
}
const _s = /* @__PURE__ */ K(Pr), $s = /* @__PURE__ */ K(Dr), xs = /* @__PURE__ */ K(jr), Ss = /* @__PURE__ */ K(lo), Es = /* @__PURE__ */ K(_o);
var se = Se;
Object.defineProperty(he, "__esModule", {
  value: !0
});
var Os = he.default = zs;
he.shouldForwardProp = ve;
he.systemDefaultTheme = void 0;
var j = se(bs()), Ue = se(vs()), Et = Ns(Cr), Ts = _s, ws = se($s), Cs = se(xs), Rs = se(Ss), Ps = se(Es);
const As = ["ownerState"], Ms = ["variants"], Is = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Qt(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Qt = function(n) {
    return n ? r : t;
  })(e);
}
function Ns(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Qt(t);
  if (r && r.has(e))
    return r.get(e);
  var n = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var s in e)
    if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) {
      var i = o ? Object.getOwnPropertyDescriptor(e, s) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, s, i) : n[s] = e[s];
    }
  return n.default = e, r && r.set(e, n), n;
}
function ks(e) {
  return Object.keys(e).length === 0;
}
function js(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ve(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ds = he.systemDefaultTheme = (0, Rs.default)(), Ot = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function be({
  defaultTheme: e,
  theme: t,
  themeId: r
}) {
  return ks(t) ? e : t[r] || t;
}
function Fs(e) {
  return e ? (t, r) => r[e] : null;
}
function _e(e, t) {
  let {
    ownerState: r
  } = t, n = (0, Ue.default)(t, As);
  const o = typeof e == "function" ? e((0, j.default)({
    ownerState: r
  }, n)) : e;
  if (Array.isArray(o))
    return o.flatMap((s) => _e(s, (0, j.default)({
      ownerState: r
    }, n)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const {
      variants: s = []
    } = o;
    let f = (0, Ue.default)(o, Ms);
    return s.forEach((a) => {
      let l = !0;
      typeof a.props == "function" ? l = a.props((0, j.default)({
        ownerState: r
      }, n, r)) : Object.keys(a.props).forEach((p) => {
        (r == null ? void 0 : r[p]) !== a.props[p] && n[p] !== a.props[p] && (l = !1);
      }), l && (Array.isArray(f) || (f = [f]), f.push(typeof a.style == "function" ? a.style((0, j.default)({
        ownerState: r
      }, n, r)) : a.style));
    }), f;
  }
  return o;
}
function zs(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Ds,
    rootShouldForwardProp: n = ve,
    slotShouldForwardProp: o = ve
  } = e, s = (i) => (0, Ps.default)((0, j.default)({}, i, {
    theme: be((0, j.default)({}, i, {
      defaultTheme: r,
      themeId: t
    }))
  }));
  return s.__mui_systemSx = !0, (i, f = {}) => {
    (0, Et.internal_processStyles)(i, (_) => _.filter((V) => !(V != null && V.__mui_systemSx)));
    const {
      name: a,
      slot: l,
      skipVariantsResolver: p,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: u = Fs(Ot(l))
    } = f, y = (0, Ue.default)(f, Is), g = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      l && l !== "Root" && l !== "root" || !1
    ), d = m || !1;
    let c;
    process.env.NODE_ENV !== "production" && a && (c = `${a}-${Ot(l || "Root")}`);
    let x = ve;
    l === "Root" || l === "root" ? x = n : l ? x = o : js(i) && (x = void 0);
    const N = (0, Et.default)(i, (0, j.default)({
      shouldForwardProp: x,
      label: c
    }, y)), C = (_) => typeof _ == "function" && _.__emotion_real !== _ || (0, Ts.isPlainObject)(_) ? (V) => _e(_, (0, j.default)({}, V, {
      theme: be({
        theme: V.theme,
        defaultTheme: r,
        themeId: t
      })
    })) : _, A = (_, ...V) => {
      let ie = C(_);
      const Y = V ? V.map(C) : [];
      a && u && Y.push((M) => {
        const k = be((0, j.default)({}, M, {
          defaultTheme: r,
          themeId: t
        }));
        if (!k.components || !k.components[a] || !k.components[a].styleOverrides)
          return null;
        const H = k.components[a].styleOverrides, J = {};
        return Object.entries(H).forEach(([Ie, Ne]) => {
          J[Ie] = _e(Ne, (0, j.default)({}, M, {
            theme: k
          }));
        }), u(M, J);
      }), a && !g && Y.push((M) => {
        var k;
        const H = be((0, j.default)({}, M, {
          defaultTheme: r,
          themeId: t
        })), J = H == null || (k = H.components) == null || (k = k[a]) == null ? void 0 : k.variants;
        return _e({
          variants: J
        }, (0, j.default)({}, M, {
          theme: H
        }));
      }), d || Y.push(s);
      const ge = Y.length - V.length;
      if (Array.isArray(_) && ge > 0) {
        const M = new Array(ge).fill("");
        ie = [..._, ...M], ie.raw = [..._.raw, ...M];
      }
      const ae = N(ie, ...Y);
      if (process.env.NODE_ENV !== "production") {
        let M;
        a && (M = `${a}${(0, ws.default)(l || "")}`), M === void 0 && (M = `Styled(${(0, Cs.default)(i)})`), ae.displayName = M;
      }
      return i.muiName && (ae.muiName = i.muiName), ae;
    };
    return N.withConfig && (A.withConfig = N.withConfig), A;
  };
}
function Vs(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ls = (e) => Vs(e) && e !== "classes", Bs = Ls, Us = Os({
  themeId: Zt,
  defaultTheme: Jt,
  rootShouldForwardProp: Bs
}), Ws = Us;
function Ks(e) {
  return qe("MuiSvgIcon", e);
}
ln("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const qs = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], Gs = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${W(t)}`, `fontSize${W(r)}`]
  };
  return sn(o, Ks, n);
}, Ys = Ws("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${W(r.color)}`], t[`fontSize${W(r.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n, o, s, i, f, a, l, p, m, u, y, g;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (r = e.transitions) == null || (n = r.create) == null ? void 0 : n.call(r, "fill", {
      duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((s = e.typography) == null || (i = s.pxToRem) == null ? void 0 : i.call(s, 20)) || "1.25rem",
      medium: ((f = e.typography) == null || (a = f.pxToRem) == null ? void 0 : a.call(f, 24)) || "1.5rem",
      large: ((l = e.typography) == null || (p = l.pxToRem) == null ? void 0 : p.call(l, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (m = (u = (e.vars || e).palette) == null || (u = u[t.color]) == null ? void 0 : u.main) != null ? m : {
      action: (y = (e.vars || e).palette) == null || (y = y.action) == null ? void 0 : y.active,
      disabled: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.disabled,
      inherit: void 0
    }[t.color]
  };
}), et = /* @__PURE__ */ w.forwardRef(function(t, r) {
  const n = ys({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: s,
    color: i = "inherit",
    component: f = "svg",
    fontSize: a = "medium",
    htmlColor: l,
    inheritViewBox: p = !1,
    titleAccess: m,
    viewBox: u = "0 0 24 24"
  } = n, y = q(n, qs), g = /* @__PURE__ */ w.isValidElement(o) && o.type === "svg", d = S({}, n, {
    color: i,
    component: f,
    fontSize: a,
    instanceFontSize: t.fontSize,
    inheritViewBox: p,
    viewBox: u,
    hasSvgAsChild: g
  }), c = {};
  p || (c.viewBox = u);
  const x = Gs(d);
  return /* @__PURE__ */ br(Ys, S({
    as: f,
    className: pn(x.root, s),
    focusable: "false",
    color: l,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: r
  }, c, y, g && o.props, {
    ownerState: d,
    children: [g ? o.props.children : o, m ? /* @__PURE__ */ X("title", {
      children: m
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (et.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: $.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: $.object,
  /**
   * @ignore
   */
  className: $.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: $.oneOfType([$.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), $.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: $.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: $.oneOfType([$.oneOf(["inherit", "large", "medium", "small"]), $.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: $.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: $.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: $.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: $.oneOfType([$.arrayOf($.oneOfType([$.func, $.object, $.bool])), $.func, $.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: $.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: $.string
});
et.muiName = "SvgIcon";
const Tt = et;
function Hs(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ X(Tt, S({
      "data-testid": `${t}Icon`,
      ref: o
    }, n, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Tt.muiName, /* @__PURE__ */ w.memo(/* @__PURE__ */ w.forwardRef(r));
}
const Xs = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), Dt.configure(e);
  }
}, Js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: W,
  createChainedFunction: Fr,
  createSvgIcon: Hs,
  debounce: zr,
  deprecatedPropType: Vr,
  isMuiElement: Lr,
  ownerDocument: It,
  ownerWindow: Br,
  requirePropFactory: Ur,
  setRef: Nt,
  unstable_ClassNameGenerator: Xs,
  unstable_useEnhancedEffect: kt,
  unstable_useId: qr,
  unsupportedProp: Gr,
  useControlled: Yr,
  useEventCallback: Hr,
  useForkRef: Xr,
  useIsFocusVisible: on
}, Symbol.toStringTag, { value: "Module" })), Zs = /* @__PURE__ */ K(Js);
var wt;
function er() {
  return wt || (wt = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = Zs;
  }(je)), je;
}
var Qs = Se;
Object.defineProperty(We, "__esModule", {
  value: !0
});
var tr = We.default = void 0, ei = Qs(er()), ti = Ct;
tr = We.default = (0, ei.default)(/* @__PURE__ */ (0, ti.jsx)("path", {
  d: "m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"
}), "StarOutline");
var tt = {}, ri = Se;
Object.defineProperty(tt, "__esModule", {
  value: !0
});
var rr = tt.default = void 0, ni = ri(er()), oi = Ct;
rr = tt.default = (0, ni.default)(/* @__PURE__ */ (0, oi.jsx)("path", {
  d: "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
}), "Star");
const hi = _r(function(t, r) {
  const n = $r(Tr), o = r || st(null), s = n(t, "string", o), { mutateOptions: i, setMutateOptions: f } = s, a = s.error, l = s.eventListeners, p = st(null), m = t.variant || "standard", u = t.autoFocus || !1, y = t.precision || 1, g = t.max || 5, d = t.icon || rr, c = t.emptyIcon || tr;
  xr(o, () => ({
    focus() {
      p.current.focus();
    },
    isValid() {
      return !a.status;
    },
    getValue() {
      return s.getData();
    },
    clear() {
      s.setData("", !0);
    },
    setValue(C, A = !1) {
      s.setData(C, A);
    },
    setVisible(C) {
      f((A) => ({ ...A, visible: C }));
    },
    setRequired(C) {
      f((A) => ({ ...A, required: C }));
    },
    setReadOnly(C) {
      f((A) => ({ ...A, readonly: C }));
    },
    setAttribute(C) {
      f((A) => ({ ...A, ...C }));
    }
  }), [s]);
  var x = Er(t, s.data, t.label);
  t.readonly && (x.inputProps = { readOnly: !0 });
  var N = {
    onBlur: l.onBlur,
    onFocus: l.onFocus,
    onChange: (C) => l.onValueChange(C.target.value)
  };
  return /* @__PURE__ */ X(vr, { children: i.visible && /* @__PURE__ */ X(
    wr,
    {
      label: Or(t),
      customContainerClass: t.customContainerClass,
      colspan: t.colspan,
      customFieldClass: t.customFieldClass,
      customLabelClass: t.customLabelClass,
      children: /* @__PURE__ */ X(
        Sr,
        {
          ...x,
          variant: m,
          precision: y,
          readOnly: t.readonly,
          disabled: t.disabled,
          inputRef: p,
          size: t.size,
          icon: /* @__PURE__ */ X(d, {}),
          emptyIcon: /* @__PURE__ */ X(c, {}),
          max: g,
          ...N,
          error: a.status,
          helperText: a.message,
          autoFocus: u
        }
      )
    }
  ) });
});
export {
  hi as default
};
