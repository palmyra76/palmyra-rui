import { jsx as I, Fragment as Xt } from "react/jsx-runtime";
import * as P from "react";
import { forwardRef as Zt, useImperativeHandle as Qt } from "react";
import { b as er, u as tr } from "../../chunks/PalmyraFieldManager.js";
import { StoreFactoryContext as rr, FormHelperContext as nr, FieldManagerContext as ir } from "../layout/flexiLayout/FlexiLayoutContext.js";
import { _ as x } from "../../chunks/extends.js";
import { _ as nt, a as Ae } from "../../chunks/inheritsLoose.js";
import { t as N } from "../../chunks/index.js";
function Y(n) {
  "@babel/helpers - typeof";
  return Y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Y(n);
}
function sr(n, t) {
  if (Y(n) != "object" || !n)
    return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var e = r.call(n, t || "default");
    if (Y(e) != "object")
      return e;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(n);
}
function or(n) {
  var t = sr(n, "string");
  return Y(t) == "symbol" ? t : String(t);
}
function Q(n, t) {
  if (n == null)
    return {};
  var r = {}, e = Object.keys(n), i, s;
  for (s = 0; s < e.length; s++)
    i = e[s], !(t.indexOf(i) >= 0) && (r[i] = n[i]);
  return r;
}
function V(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const t = Object.getPrototypeOf(n);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}
function it(n) {
  if (!V(n))
    return n;
  const t = {};
  return Object.keys(n).forEach((r) => {
    t[r] = it(n[r]);
  }), t;
}
function ve(n, t, r = {
  clone: !0
}) {
  const e = r.clone ? x({}, n) : n;
  return V(n) && V(t) && Object.keys(t).forEach((i) => {
    i !== "__proto__" && (V(t[i]) && i in n && V(n[i]) ? e[i] = ve(n[i], t[i], r) : r.clone ? e[i] = V(t[i]) ? it(t[i]) : t[i] : e[i] = t[i]);
  }), e;
}
const ar = "exact-prop: ​";
function ur(n) {
  return process.env.NODE_ENV === "production" ? n : x({}, n, {
    [ar]: (t) => {
      const r = Object.keys(t).filter((e) => !n.hasOwnProperty(e));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((e) => `\`${e}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function fr(n) {
  let t = "https://mui.com/production-error/?code=" + n;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + n + "; visit " + t + " for the full message.";
}
var me = { exports: {} }, y = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function lr() {
  if (De)
    return y;
  De = 1;
  var n = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), a = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), R;
  R = Symbol.for("react.module.reference");
  function m(c) {
    if (typeof c == "object" && c !== null) {
      var w = c.$$typeof;
      switch (w) {
        case n:
          switch (c = c.type, c) {
            case r:
            case i:
            case e:
            case l:
            case d:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case a:
                case o:
                case f:
                case S:
                case h:
                case s:
                  return c;
                default:
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  return y.ContextConsumer = o, y.ContextProvider = s, y.Element = n, y.ForwardRef = f, y.Fragment = r, y.Lazy = S, y.Memo = h, y.Portal = t, y.Profiler = i, y.StrictMode = e, y.Suspense = l, y.SuspenseList = d, y.isAsyncMode = function() {
    return !1;
  }, y.isConcurrentMode = function() {
    return !1;
  }, y.isContextConsumer = function(c) {
    return m(c) === o;
  }, y.isContextProvider = function(c) {
    return m(c) === s;
  }, y.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === n;
  }, y.isForwardRef = function(c) {
    return m(c) === f;
  }, y.isFragment = function(c) {
    return m(c) === r;
  }, y.isLazy = function(c) {
    return m(c) === S;
  }, y.isMemo = function(c) {
    return m(c) === h;
  }, y.isPortal = function(c) {
    return m(c) === t;
  }, y.isProfiler = function(c) {
    return m(c) === i;
  }, y.isStrictMode = function(c) {
    return m(c) === e;
  }, y.isSuspense = function(c) {
    return m(c) === l;
  }, y.isSuspenseList = function(c) {
    return m(c) === d;
  }, y.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === r || c === i || c === e || c === l || c === d || c === g || typeof c == "object" && c !== null && (c.$$typeof === S || c.$$typeof === h || c.$$typeof === s || c.$$typeof === o || c.$$typeof === f || c.$$typeof === R || c.getModuleId !== void 0);
  }, y.typeOf = m, y;
}
var b = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function cr() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), a = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), R = !1, m = !1, c = !1, w = !1, q = !1, Te;
    Te = Symbol.for("react.module.reference");
    function Et(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === r || p === i || q || p === e || p === l || p === d || w || p === g || R || m || c || typeof p == "object" && p !== null && (p.$$typeof === S || p.$$typeof === h || p.$$typeof === s || p.$$typeof === o || p.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === Te || p.getModuleId !== void 0));
    }
    function E(p) {
      if (typeof p == "object" && p !== null) {
        var te = p.$$typeof;
        switch (te) {
          case n:
            var K = p.type;
            switch (K) {
              case r:
              case i:
              case e:
              case l:
              case d:
                return K;
              default:
                var Ve = K && K.$$typeof;
                switch (Ve) {
                  case a:
                  case o:
                  case f:
                  case S:
                  case h:
                  case s:
                    return Ve;
                  default:
                    return te;
                }
            }
          case t:
            return te;
        }
      }
    }
    var Ct = o, wt = s, Nt = n, _t = f, Ot = r, Mt = S, jt = h, kt = t, Tt = i, $t = e, It = l, Vt = d, $e = !1, Ie = !1;
    function At(p) {
      return $e || ($e = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Dt(p) {
      return Ie || (Ie = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Ft(p) {
      return E(p) === o;
    }
    function Ut(p) {
      return E(p) === s;
    }
    function Lt(p) {
      return typeof p == "object" && p !== null && p.$$typeof === n;
    }
    function zt(p) {
      return E(p) === f;
    }
    function Gt(p) {
      return E(p) === r;
    }
    function Yt(p) {
      return E(p) === S;
    }
    function Wt(p) {
      return E(p) === h;
    }
    function Jt(p) {
      return E(p) === t;
    }
    function qt(p) {
      return E(p) === i;
    }
    function Kt(p) {
      return E(p) === e;
    }
    function Bt(p) {
      return E(p) === l;
    }
    function Ht(p) {
      return E(p) === d;
    }
    b.ContextConsumer = Ct, b.ContextProvider = wt, b.Element = Nt, b.ForwardRef = _t, b.Fragment = Ot, b.Lazy = Mt, b.Memo = jt, b.Portal = kt, b.Profiler = Tt, b.StrictMode = $t, b.Suspense = It, b.SuspenseList = Vt, b.isAsyncMode = At, b.isConcurrentMode = Dt, b.isContextConsumer = Ft, b.isContextProvider = Ut, b.isElement = Lt, b.isForwardRef = zt, b.isFragment = Gt, b.isLazy = Yt, b.isMemo = Wt, b.isPortal = Jt, b.isProfiler = qt, b.isStrictMode = Kt, b.isSuspense = Bt, b.isSuspenseList = Ht, b.isValidElementType = Et, b.typeOf = E;
  }()), b;
}
process.env.NODE_ENV === "production" ? me.exports = lr() : me.exports = cr();
var Ue = me.exports;
const dr = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function hr(n) {
  const t = `${n}`.match(dr);
  return t && t[1] || "";
}
function st(n, t = "") {
  return n.displayName || n.name || hr(n) || t;
}
function Le(n, t, r) {
  const e = st(t);
  return n.displayName || (e !== "" ? `${r}(${e})` : r);
}
function re(n) {
  if (n != null) {
    if (typeof n == "string")
      return n;
    if (typeof n == "function")
      return st(n, "Component");
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Ue.ForwardRef:
          return Le(n, n.render, "ForwardRef");
        case Ue.Memo:
          return Le(n, n.type, "memo");
        default:
          return;
      }
  }
}
function ne(n) {
  if (typeof n != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : fr(7));
  return n.charAt(0).toUpperCase() + n.slice(1);
}
const ot = /* @__PURE__ */ P.createContext(null);
process.env.NODE_ENV !== "production" && (ot.displayName = "ThemeContext");
const pr = ot;
function vr() {
  const n = P.useContext(pr);
  return process.env.NODE_ENV !== "production" && P.useDebugValue(n), n;
}
const mr = typeof Symbol == "function" && Symbol.for, gr = mr ? Symbol.for("mui.nested") : "__THEME_NESTED__", yr = ["checked", "disabled", "error", "focused", "focusVisible", "required", "expanded", "selected"];
function br(n = {}) {
  const {
    disableGlobal: t = !1,
    productionPrefix: r = "jss",
    seed: e = ""
  } = n, i = e === "" ? "" : `${e}-`;
  let s = 0;
  const o = () => (s += 1, process.env.NODE_ENV !== "production" && s >= 1e10 && console.warn(["MUI: You might have a memory leak.", "The ruleCounter is not supposed to grow that much."].join("")), s);
  return (a, f) => {
    const l = f.options.name;
    if (l && l.indexOf("Mui") === 0 && !f.options.link && !t) {
      if (yr.indexOf(a.key) !== -1)
        return `Mui-${a.key}`;
      const h = `${i}${l}-${a.key}`;
      return !f.options.theme[gr] || e !== "" ? h : `${h}-${o()}`;
    }
    if (process.env.NODE_ENV === "production")
      return `${i}${r}${o()}`;
    const d = `${a.key}-${o()}`;
    return f.options.classNamePrefix ? `${i}${f.options.classNamePrefix}-${d}` : `${i}${d}`;
  };
}
var Sr = process.env.NODE_ENV === "production";
function C(n, t) {
  if (!Sr) {
    if (n)
      return;
    var r = "Warning: " + t;
    typeof console < "u" && console.warn(r);
    try {
      throw Error(r);
    } catch {
    }
  }
}
var ze = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
  return typeof n;
} : function(n) {
  return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
}, J = (typeof window > "u" ? "undefined" : ze(window)) === "object" && (typeof document > "u" ? "undefined" : ze(document)) === "object" && document.nodeType === 9;
function Ge(n, t) {
  for (var r = 0; r < t.length; r++) {
    var e = t[r];
    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(n, or(e.key), e);
  }
}
function at(n, t, r) {
  return t && Ge(n.prototype, t), r && Ge(n, r), Object.defineProperty(n, "prototype", {
    writable: !1
  }), n;
}
var Rr = {}.constructor;
function ge(n) {
  if (n == null || typeof n != "object")
    return n;
  if (Array.isArray(n))
    return n.map(ge);
  if (n.constructor !== Rr)
    return n;
  var t = {};
  for (var r in n)
    t[r] = ge(n[r]);
  return t;
}
function _e(n, t, r) {
  n === void 0 && (n = "unnamed");
  var e = r.jss, i = ge(t), s = e.plugins.onCreateRule(n, i, r);
  return s || (n[0] === "@" && process.env.NODE_ENV !== "production" && C(!1, "[JSS] Unknown rule " + n), null);
}
var Ye = function(t, r) {
  for (var e = "", i = 0; i < t.length && t[i] !== "!important"; i++)
    e && (e += r), e += t[i];
  return e;
}, k = function(t) {
  if (!Array.isArray(t))
    return t;
  var r = "";
  if (Array.isArray(t[0]))
    for (var e = 0; e < t.length && t[e] !== "!important"; e++)
      r && (r += ", "), r += Ye(t[e], " ");
  else
    r = Ye(t, ", ");
  return t[t.length - 1] === "!important" && (r += " !important"), r;
};
function D(n) {
  return n && n.format === !1 ? {
    linebreak: "",
    space: ""
  } : {
    linebreak: `
`,
    space: " "
  };
}
function F(n, t) {
  for (var r = "", e = 0; e < t; e++)
    r += "  ";
  return r + n;
}
function W(n, t, r) {
  r === void 0 && (r = {});
  var e = "";
  if (!t)
    return e;
  var i = r, s = i.indent, o = s === void 0 ? 0 : s, a = t.fallbacks;
  r.format === !1 && (o = -1 / 0);
  var f = D(r), l = f.linebreak, d = f.space;
  if (n && o++, a)
    if (Array.isArray(a))
      for (var h = 0; h < a.length; h++) {
        var S = a[h];
        for (var g in S) {
          var R = S[g];
          R != null && (e && (e += l), e += F(g + ":" + d + k(R) + ";", o));
        }
      }
    else
      for (var m in a) {
        var c = a[m];
        c != null && (e && (e += l), e += F(m + ":" + d + k(c) + ";", o));
      }
  for (var w in t) {
    var q = t[w];
    q != null && w !== "fallbacks" && (e && (e += l), e += F(w + ":" + d + k(q) + ";", o));
  }
  return !e && !r.allowEmpty || !n ? e : (o--, e && (e = "" + l + e + l), F("" + n + d + "{" + e, o) + F("}", o));
}
var xr = /([[\].#*$><+~=|^:(),"'`\s])/g, We = typeof CSS < "u" && CSS.escape, Oe = function(n) {
  return We ? We(n) : n.replace(xr, "\\$1");
}, ut = /* @__PURE__ */ function() {
  function n(r, e, i) {
    this.type = "style", this.isProcessed = !1;
    var s = i.sheet, o = i.Renderer;
    this.key = r, this.options = i, this.style = e, s ? this.renderer = s.renderer : o && (this.renderer = new o());
  }
  var t = n.prototype;
  return t.prop = function(e, i, s) {
    if (i === void 0)
      return this.style[e];
    var o = s ? s.force : !1;
    if (!o && this.style[e] === i)
      return this;
    var a = i;
    (!s || s.process !== !1) && (a = this.options.jss.plugins.onChangeValue(i, e, this));
    var f = a == null || a === !1, l = e in this.style;
    if (f && !l && !o)
      return this;
    var d = f && l;
    if (d ? delete this.style[e] : this.style[e] = a, this.renderable && this.renderer)
      return d ? this.renderer.removeProperty(this.renderable, e) : this.renderer.setProperty(this.renderable, e, a), this;
    var h = this.options.sheet;
    return h && h.attached && process.env.NODE_ENV !== "production" && C(!1, '[JSS] Rule is not linked. Missing sheet option "link: true".'), this;
  }, n;
}(), ye = /* @__PURE__ */ function(n) {
  nt(t, n);
  function t(e, i, s) {
    var o;
    o = n.call(this, e, i, s) || this;
    var a = s.selector, f = s.scoped, l = s.sheet, d = s.generateId;
    return a ? o.selectorText = a : f !== !1 && (o.id = d(Ae(Ae(o)), l), o.selectorText = "." + Oe(o.id)), o;
  }
  var r = t.prototype;
  return r.applyTo = function(i) {
    var s = this.renderer;
    if (s) {
      var o = this.toJSON();
      for (var a in o)
        s.setProperty(i, a, o[a]);
    }
    return this;
  }, r.toJSON = function() {
    var i = {};
    for (var s in this.style) {
      var o = this.style[s];
      typeof o != "object" ? i[s] = o : Array.isArray(o) && (i[s] = k(o));
    }
    return i;
  }, r.toString = function(i) {
    var s = this.options.sheet, o = s ? s.options.link : !1, a = o ? x({}, i, {
      allowEmpty: !0
    }) : i;
    return W(this.selectorText, this.style, a);
  }, at(t, [{
    key: "selector",
    set: function(i) {
      if (i !== this.selectorText) {
        this.selectorText = i;
        var s = this.renderer, o = this.renderable;
        if (!(!o || !s)) {
          var a = s.setSelector(o, i);
          a || s.replaceRule(o, this);
        }
      }
    },
    get: function() {
      return this.selectorText;
    }
  }]), t;
}(ut), Pr = {
  onCreateRule: function(t, r, e) {
    return t[0] === "@" || e.parent && e.parent.type === "keyframes" ? null : new ye(t, r, e);
  }
}, ie = {
  indent: 1,
  children: !0
}, Er = /@([\w-]+)/, Cr = /* @__PURE__ */ function() {
  function n(r, e, i) {
    this.type = "conditional", this.isProcessed = !1, this.key = r;
    var s = r.match(Er);
    this.at = s ? s[1] : "unknown", this.query = i.name || "@" + this.at, this.options = i, this.rules = new ee(x({}, i, {
      parent: this
    }));
    for (var o in e)
      this.rules.add(o, e[o]);
    this.rules.process();
  }
  var t = n.prototype;
  return t.getRule = function(e) {
    return this.rules.get(e);
  }, t.indexOf = function(e) {
    return this.rules.indexOf(e);
  }, t.addRule = function(e, i, s) {
    var o = this.rules.add(e, i, s);
    return o ? (this.options.jss.plugins.onProcessRule(o), o) : null;
  }, t.replaceRule = function(e, i, s) {
    var o = this.rules.replace(e, i, s);
    return o && this.options.jss.plugins.onProcessRule(o), o;
  }, t.toString = function(e) {
    e === void 0 && (e = ie);
    var i = D(e), s = i.linebreak;
    if (e.indent == null && (e.indent = ie.indent), e.children == null && (e.children = ie.children), e.children === !1)
      return this.query + " {}";
    var o = this.rules.toString(e);
    return o ? this.query + " {" + s + o + s + "}" : "";
  }, n;
}(), wr = /@container|@media|@supports\s+/, Nr = {
  onCreateRule: function(t, r, e) {
    return wr.test(t) ? new Cr(t, r, e) : null;
  }
}, se = {
  indent: 1,
  children: !0
}, _r = /@keyframes\s+([\w-]+)/, be = /* @__PURE__ */ function() {
  function n(r, e, i) {
    this.type = "keyframes", this.at = "@keyframes", this.isProcessed = !1;
    var s = r.match(_r);
    s && s[1] ? this.name = s[1] : (this.name = "noname", process.env.NODE_ENV !== "production" && C(!1, "[JSS] Bad keyframes name " + r)), this.key = this.type + "-" + this.name, this.options = i;
    var o = i.scoped, a = i.sheet, f = i.generateId;
    this.id = o === !1 ? this.name : Oe(f(this, a)), this.rules = new ee(x({}, i, {
      parent: this
    }));
    for (var l in e)
      this.rules.add(l, e[l], x({}, i, {
        parent: this
      }));
    this.rules.process();
  }
  var t = n.prototype;
  return t.toString = function(e) {
    e === void 0 && (e = se);
    var i = D(e), s = i.linebreak;
    if (e.indent == null && (e.indent = se.indent), e.children == null && (e.children = se.children), e.children === !1)
      return this.at + " " + this.id + " {}";
    var o = this.rules.toString(e);
    return o && (o = "" + s + o + s), this.at + " " + this.id + " {" + o + "}";
  }, n;
}(), Or = /@keyframes\s+/, Mr = /\$([\w-]+)/g, Se = function(t, r) {
  return typeof t == "string" ? t.replace(Mr, function(e, i) {
    return i in r ? r[i] : (process.env.NODE_ENV !== "production" && C(!1, '[JSS] Referenced keyframes rule "' + i + '" is not defined.'), e);
  }) : t;
}, Je = function(t, r, e) {
  var i = t[r], s = Se(i, e);
  s !== i && (t[r] = s);
}, jr = {
  onCreateRule: function(t, r, e) {
    return typeof t == "string" && Or.test(t) ? new be(t, r, e) : null;
  },
  // Animation name ref replacer.
  onProcessStyle: function(t, r, e) {
    return r.type !== "style" || !e || ("animation-name" in t && Je(t, "animation-name", e.keyframes), "animation" in t && Je(t, "animation", e.keyframes)), t;
  },
  onChangeValue: function(t, r, e) {
    var i = e.options.sheet;
    if (!i)
      return t;
    switch (r) {
      case "animation":
        return Se(t, i.keyframes);
      case "animation-name":
        return Se(t, i.keyframes);
      default:
        return t;
    }
  }
}, kr = /* @__PURE__ */ function(n) {
  nt(t, n);
  function t() {
    return n.apply(this, arguments) || this;
  }
  var r = t.prototype;
  return r.toString = function(i) {
    var s = this.options.sheet, o = s ? s.options.link : !1, a = o ? x({}, i, {
      allowEmpty: !0
    }) : i;
    return W(this.key, this.style, a);
  }, t;
}(ut), Tr = {
  onCreateRule: function(t, r, e) {
    return e.parent && e.parent.type === "keyframes" ? new kr(t, r, e) : null;
  }
}, $r = /* @__PURE__ */ function() {
  function n(r, e, i) {
    this.type = "font-face", this.at = "@font-face", this.isProcessed = !1, this.key = r, this.style = e, this.options = i;
  }
  var t = n.prototype;
  return t.toString = function(e) {
    var i = D(e), s = i.linebreak;
    if (Array.isArray(this.style)) {
      for (var o = "", a = 0; a < this.style.length; a++)
        o += W(this.at, this.style[a]), this.style[a + 1] && (o += s);
      return o;
    }
    return W(this.at, this.style, e);
  }, n;
}(), Ir = /@font-face/, Vr = {
  onCreateRule: function(t, r, e) {
    return Ir.test(t) ? new $r(t, r, e) : null;
  }
}, Ar = /* @__PURE__ */ function() {
  function n(r, e, i) {
    this.type = "viewport", this.at = "@viewport", this.isProcessed = !1, this.key = r, this.style = e, this.options = i;
  }
  var t = n.prototype;
  return t.toString = function(e) {
    return W(this.key, this.style, e);
  }, n;
}(), Dr = {
  onCreateRule: function(t, r, e) {
    return t === "@viewport" || t === "@-ms-viewport" ? new Ar(t, r, e) : null;
  }
}, Fr = /* @__PURE__ */ function() {
  function n(r, e, i) {
    this.type = "simple", this.isProcessed = !1, this.key = r, this.value = e, this.options = i;
  }
  var t = n.prototype;
  return t.toString = function(e) {
    if (Array.isArray(this.value)) {
      for (var i = "", s = 0; s < this.value.length; s++)
        i += this.key + " " + this.value[s] + ";", this.value[s + 1] && (i += `
`);
      return i;
    }
    return this.key + " " + this.value + ";";
  }, n;
}(), Ur = {
  "@charset": !0,
  "@import": !0,
  "@namespace": !0
}, Lr = {
  onCreateRule: function(t, r, e) {
    return t in Ur ? new Fr(t, r, e) : null;
  }
}, qe = [Pr, Nr, jr, Tr, Vr, Dr, Lr], zr = {
  process: !0
}, Ke = {
  force: !0,
  process: !0
  /**
   * Contains rules objects and allows adding/removing etc.
   * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
   */
}, ee = /* @__PURE__ */ function() {
  function n(r) {
    this.map = {}, this.raw = {}, this.index = [], this.counter = 0, this.options = r, this.classes = r.classes, this.keyframes = r.keyframes;
  }
  var t = n.prototype;
  return t.add = function(e, i, s) {
    var o = this.options, a = o.parent, f = o.sheet, l = o.jss, d = o.Renderer, h = o.generateId, S = o.scoped, g = x({
      classes: this.classes,
      parent: a,
      sheet: f,
      jss: l,
      Renderer: d,
      generateId: h,
      scoped: S,
      name: e,
      keyframes: this.keyframes,
      selector: void 0
    }, s), R = e;
    e in this.raw && (R = e + "-d" + this.counter++), this.raw[R] = i, R in this.classes && (g.selector = "." + Oe(this.classes[R]));
    var m = _e(R, i, g);
    if (!m)
      return null;
    this.register(m);
    var c = g.index === void 0 ? this.index.length : g.index;
    return this.index.splice(c, 0, m), m;
  }, t.replace = function(e, i, s) {
    var o = this.get(e), a = this.index.indexOf(o);
    o && this.remove(o);
    var f = s;
    return a !== -1 && (f = x({}, s, {
      index: a
    })), this.add(e, i, f);
  }, t.get = function(e) {
    return this.map[e];
  }, t.remove = function(e) {
    this.unregister(e), delete this.raw[e.key], this.index.splice(this.index.indexOf(e), 1);
  }, t.indexOf = function(e) {
    return this.index.indexOf(e);
  }, t.process = function() {
    var e = this.options.jss.plugins;
    this.index.slice(0).forEach(e.onProcessRule, e);
  }, t.register = function(e) {
    this.map[e.key] = e, e instanceof ye ? (this.map[e.selector] = e, e.id && (this.classes[e.key] = e.id)) : e instanceof be && this.keyframes && (this.keyframes[e.name] = e.id);
  }, t.unregister = function(e) {
    delete this.map[e.key], e instanceof ye ? (delete this.map[e.selector], delete this.classes[e.key]) : e instanceof be && delete this.keyframes[e.name];
  }, t.update = function() {
    var e, i, s;
    if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) == "string" ? (e = arguments.length <= 0 ? void 0 : arguments[0], i = arguments.length <= 1 ? void 0 : arguments[1], s = arguments.length <= 2 ? void 0 : arguments[2]) : (i = arguments.length <= 0 ? void 0 : arguments[0], s = arguments.length <= 1 ? void 0 : arguments[1], e = null), e)
      this.updateOne(this.get(e), i, s);
    else
      for (var o = 0; o < this.index.length; o++)
        this.updateOne(this.index[o], i, s);
  }, t.updateOne = function(e, i, s) {
    s === void 0 && (s = zr);
    var o = this.options, a = o.jss.plugins, f = o.sheet;
    if (e.rules instanceof n) {
      e.rules.update(i, s);
      return;
    }
    var l = e.style;
    if (a.onUpdate(i, e, f, s), s.process && l && l !== e.style) {
      a.onProcessStyle(e.style, e, f);
      for (var d in e.style) {
        var h = e.style[d], S = l[d];
        h !== S && e.prop(d, h, Ke);
      }
      for (var g in l) {
        var R = e.style[g], m = l[g];
        R == null && R !== m && e.prop(g, null, Ke);
      }
    }
  }, t.toString = function(e) {
    for (var i = "", s = this.options.sheet, o = s ? s.options.link : !1, a = D(e), f = a.linebreak, l = 0; l < this.index.length; l++) {
      var d = this.index[l], h = d.toString(e);
      !h && !o || (i && (i += f), i += h);
    }
    return i;
  }, n;
}(), ft = /* @__PURE__ */ function() {
  function n(r, e) {
    this.attached = !1, this.deployed = !1, this.classes = {}, this.keyframes = {}, this.options = x({}, e, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    }), e.Renderer && (this.renderer = new e.Renderer(this)), this.rules = new ee(this.options);
    for (var i in r)
      this.rules.add(i, r[i]);
    this.rules.process();
  }
  var t = n.prototype;
  return t.attach = function() {
    return this.attached ? this : (this.renderer && this.renderer.attach(), this.attached = !0, this.deployed || this.deploy(), this);
  }, t.detach = function() {
    return this.attached ? (this.renderer && this.renderer.detach(), this.attached = !1, this) : this;
  }, t.addRule = function(e, i, s) {
    var o = this.queue;
    this.attached && !o && (this.queue = []);
    var a = this.rules.add(e, i, s);
    return a ? (this.options.jss.plugins.onProcessRule(a), this.attached ? (this.deployed && (o ? o.push(a) : (this.insertRule(a), this.queue && (this.queue.forEach(this.insertRule, this), this.queue = void 0))), a) : (this.deployed = !1, a)) : null;
  }, t.replaceRule = function(e, i, s) {
    var o = this.rules.get(e);
    if (!o)
      return this.addRule(e, i, s);
    var a = this.rules.replace(e, i, s);
    return a && this.options.jss.plugins.onProcessRule(a), this.attached ? (this.deployed && this.renderer && (a ? o.renderable && this.renderer.replaceRule(o.renderable, a) : this.renderer.deleteRule(o)), a) : (this.deployed = !1, a);
  }, t.insertRule = function(e) {
    this.renderer && this.renderer.insertRule(e);
  }, t.addRules = function(e, i) {
    var s = [];
    for (var o in e) {
      var a = this.addRule(o, e[o], i);
      a && s.push(a);
    }
    return s;
  }, t.getRule = function(e) {
    return this.rules.get(e);
  }, t.deleteRule = function(e) {
    var i = typeof e == "object" ? e : this.rules.get(e);
    return !i || // Style sheet was created without link: true and attached, in this case we
    // won't be able to remove the CSS rule from the DOM.
    this.attached && !i.renderable ? !1 : (this.rules.remove(i), this.attached && i.renderable && this.renderer ? this.renderer.deleteRule(i.renderable) : !0);
  }, t.indexOf = function(e) {
    return this.rules.indexOf(e);
  }, t.deploy = function() {
    return this.renderer && this.renderer.deploy(), this.deployed = !0, this;
  }, t.update = function() {
    var e;
    return (e = this.rules).update.apply(e, arguments), this;
  }, t.updateOne = function(e, i, s) {
    return this.rules.updateOne(e, i, s), this;
  }, t.toString = function(e) {
    return this.rules.toString(e);
  }, n;
}(), Gr = /* @__PURE__ */ function() {
  function n() {
    this.plugins = {
      internal: [],
      external: []
    }, this.registry = {};
  }
  var t = n.prototype;
  return t.onCreateRule = function(e, i, s) {
    for (var o = 0; o < this.registry.onCreateRule.length; o++) {
      var a = this.registry.onCreateRule[o](e, i, s);
      if (a)
        return a;
    }
    return null;
  }, t.onProcessRule = function(e) {
    if (!e.isProcessed) {
      for (var i = e.options.sheet, s = 0; s < this.registry.onProcessRule.length; s++)
        this.registry.onProcessRule[s](e, i);
      e.style && this.onProcessStyle(e.style, e, i), e.isProcessed = !0;
    }
  }, t.onProcessStyle = function(e, i, s) {
    for (var o = 0; o < this.registry.onProcessStyle.length; o++)
      i.style = this.registry.onProcessStyle[o](i.style, i, s);
  }, t.onProcessSheet = function(e) {
    for (var i = 0; i < this.registry.onProcessSheet.length; i++)
      this.registry.onProcessSheet[i](e);
  }, t.onUpdate = function(e, i, s, o) {
    for (var a = 0; a < this.registry.onUpdate.length; a++)
      this.registry.onUpdate[a](e, i, s, o);
  }, t.onChangeValue = function(e, i, s) {
    for (var o = e, a = 0; a < this.registry.onChangeValue.length; a++)
      o = this.registry.onChangeValue[a](o, i, s);
    return o;
  }, t.use = function(e, i) {
    i === void 0 && (i = {
      queue: "external"
    });
    var s = this.plugins[i.queue];
    s.indexOf(e) === -1 && (s.push(e), this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function(o, a) {
      for (var f in a)
        f in o ? o[f].push(a[f]) : process.env.NODE_ENV !== "production" && C(!1, '[JSS] Unknown hook "' + f + '".');
      return o;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    }));
  }, n;
}(), Yr = /* @__PURE__ */ function() {
  function n() {
    this.registry = [];
  }
  var t = n.prototype;
  return t.add = function(e) {
    var i = this.registry, s = e.options.index;
    if (i.indexOf(e) === -1) {
      if (i.length === 0 || s >= this.index) {
        i.push(e);
        return;
      }
      for (var o = 0; o < i.length; o++)
        if (i[o].options.index > s) {
          i.splice(o, 0, e);
          return;
        }
    }
  }, t.reset = function() {
    this.registry = [];
  }, t.remove = function(e) {
    var i = this.registry.indexOf(e);
    this.registry.splice(i, 1);
  }, t.toString = function(e) {
    for (var i = e === void 0 ? {} : e, s = i.attached, o = Q(i, ["attached"]), a = D(o), f = a.linebreak, l = "", d = 0; d < this.registry.length; d++) {
      var h = this.registry[d];
      s != null && h.attached !== s || (l && (l += f), l += h.toString(o));
    }
    return l;
  }, at(n, [{
    key: "index",
    /**
     * Current highest index number.
     */
    get: function() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]), n;
}(), z = new Yr(), Re = typeof globalThis < "u" ? globalThis : typeof window < "u" && window.Math === Math ? window : typeof self < "u" && self.Math === Math ? self : Function("return this")(), xe = "2f1acc6c3a606b082e5eef5e54414ffb";
Re[xe] == null && (Re[xe] = 0);
var Be = Re[xe]++, Wr = 1e10, He = function(t) {
  t === void 0 && (t = {});
  var r = 0, e = function(s, o) {
    r += 1, r > Wr && process.env.NODE_ENV !== "production" && C(!1, "[JSS] You might have a memory leak. Rule counter is at " + r + ".");
    var a = "", f = "";
    return o && (o.options.classNamePrefix && (f = o.options.classNamePrefix), o.options.jss.id != null && (a = String(o.options.jss.id))), t.minify ? "" + (f || "c") + Be + a + r : f + s.key + "-" + Be + (a ? "-" + a : "") + "-" + r;
  };
  return e;
}, lt = function(t) {
  var r;
  return function() {
    return r || (r = t()), r;
  };
}, Jr = function(t, r) {
  try {
    return t.attributeStyleMap ? t.attributeStyleMap.get(r) : t.style.getPropertyValue(r);
  } catch {
    return "";
  }
}, qr = function(t, r, e) {
  try {
    var i = e;
    if (Array.isArray(e) && (i = k(e)), t.attributeStyleMap)
      t.attributeStyleMap.set(r, i);
    else {
      var s = i ? i.indexOf("!important") : -1, o = s > -1 ? i.substr(0, s - 1) : i;
      t.style.setProperty(r, o, s > -1 ? "important" : "");
    }
  } catch {
    return !1;
  }
  return !0;
}, Kr = function(t, r) {
  try {
    t.attributeStyleMap ? t.attributeStyleMap.delete(r) : t.style.removeProperty(r);
  } catch (e) {
    process.env.NODE_ENV !== "production" && C(!1, '[JSS] DOMException "' + e.message + '" was thrown. Tried to remove property "' + r + '".');
  }
}, Br = function(t, r) {
  return t.selectorText = r, t.selectorText === r;
}, ct = lt(function() {
  return document.querySelector("head");
});
function Hr(n, t) {
  for (var r = 0; r < n.length; r++) {
    var e = n[r];
    if (e.attached && e.options.index > t.index && e.options.insertionPoint === t.insertionPoint)
      return e;
  }
  return null;
}
function Xr(n, t) {
  for (var r = n.length - 1; r >= 0; r--) {
    var e = n[r];
    if (e.attached && e.options.insertionPoint === t.insertionPoint)
      return e;
  }
  return null;
}
function Zr(n) {
  for (var t = ct(), r = 0; r < t.childNodes.length; r++) {
    var e = t.childNodes[r];
    if (e.nodeType === 8 && e.nodeValue.trim() === n)
      return e;
  }
  return null;
}
function Qr(n) {
  var t = z.registry;
  if (t.length > 0) {
    var r = Hr(t, n);
    if (r && r.renderer)
      return {
        parent: r.renderer.element.parentNode,
        node: r.renderer.element
      };
    if (r = Xr(t, n), r && r.renderer)
      return {
        parent: r.renderer.element.parentNode,
        node: r.renderer.element.nextSibling
      };
  }
  var e = n.insertionPoint;
  if (e && typeof e == "string") {
    var i = Zr(e);
    if (i)
      return {
        parent: i.parentNode,
        node: i.nextSibling
      };
    process.env.NODE_ENV !== "production" && C(!1, '[JSS] Insertion point "' + e + '" not found.');
  }
  return !1;
}
function en(n, t) {
  var r = t.insertionPoint, e = Qr(t);
  if (e !== !1 && e.parent) {
    e.parent.insertBefore(n, e.node);
    return;
  }
  if (r && typeof r.nodeType == "number") {
    var i = r, s = i.parentNode;
    s ? s.insertBefore(n, i.nextSibling) : process.env.NODE_ENV !== "production" && C(!1, "[JSS] Insertion point is not in the DOM.");
    return;
  }
  ct().appendChild(n);
}
var tn = lt(function() {
  var n = document.querySelector('meta[property="csp-nonce"]');
  return n ? n.getAttribute("content") : null;
}), Xe = function(t, r, e) {
  try {
    "insertRule" in t ? t.insertRule(r, e) : "appendRule" in t && t.appendRule(r);
  } catch (i) {
    return process.env.NODE_ENV !== "production" && C(!1, "[JSS] " + i.message), !1;
  }
  return t.cssRules[e];
}, Ze = function(t, r) {
  var e = t.cssRules.length;
  return r === void 0 || r > e ? e : r;
}, rn = function() {
  var t = document.createElement("style");
  return t.textContent = `
`, t;
}, nn = /* @__PURE__ */ function() {
  function n(r) {
    this.getPropertyValue = Jr, this.setProperty = qr, this.removeProperty = Kr, this.setSelector = Br, this.hasInsertedRules = !1, this.cssRules = [], r && z.add(r), this.sheet = r;
    var e = this.sheet ? this.sheet.options : {}, i = e.media, s = e.meta, o = e.element;
    this.element = o || rn(), this.element.setAttribute("data-jss", ""), i && this.element.setAttribute("media", i), s && this.element.setAttribute("data-meta", s);
    var a = tn();
    a && this.element.setAttribute("nonce", a);
  }
  var t = n.prototype;
  return t.attach = function() {
    if (!(this.element.parentNode || !this.sheet)) {
      en(this.element, this.sheet.options);
      var e = !!(this.sheet && this.sheet.deployed);
      this.hasInsertedRules && e && (this.hasInsertedRules = !1, this.deploy());
    }
  }, t.detach = function() {
    if (this.sheet) {
      var e = this.element.parentNode;
      e && e.removeChild(this.element), this.sheet.options.link && (this.cssRules = [], this.element.textContent = `
`);
    }
  }, t.deploy = function() {
    var e = this.sheet;
    if (e) {
      if (e.options.link) {
        this.insertRules(e.rules);
        return;
      }
      this.element.textContent = `
` + e.toString() + `
`;
    }
  }, t.insertRules = function(e, i) {
    for (var s = 0; s < e.index.length; s++)
      this.insertRule(e.index[s], s, i);
  }, t.insertRule = function(e, i, s) {
    if (s === void 0 && (s = this.element.sheet), e.rules) {
      var o = e, a = s;
      if (e.type === "conditional" || e.type === "keyframes") {
        var f = Ze(s, i);
        if (a = Xe(s, o.toString({
          children: !1
        }), f), a === !1)
          return !1;
        this.refCssRule(e, f, a);
      }
      return this.insertRules(o.rules, a), a;
    }
    var l = e.toString();
    if (!l)
      return !1;
    var d = Ze(s, i), h = Xe(s, l, d);
    return h === !1 ? !1 : (this.hasInsertedRules = !0, this.refCssRule(e, d, h), h);
  }, t.refCssRule = function(e, i, s) {
    e.renderable = s, e.options.parent instanceof ft && this.cssRules.splice(i, 0, s);
  }, t.deleteRule = function(e) {
    var i = this.element.sheet, s = this.indexOf(e);
    return s === -1 ? !1 : (i.deleteRule(s), this.cssRules.splice(s, 1), !0);
  }, t.indexOf = function(e) {
    return this.cssRules.indexOf(e);
  }, t.replaceRule = function(e, i) {
    var s = this.indexOf(e);
    return s === -1 ? !1 : (this.element.sheet.deleteRule(s), this.cssRules.splice(s, 1), this.insertRule(i, s));
  }, t.getRules = function() {
    return this.element.sheet.cssRules;
  }, n;
}(), sn = 0, on = /* @__PURE__ */ function() {
  function n(r) {
    this.id = sn++, this.version = "10.10.0", this.plugins = new Gr(), this.options = {
      id: {
        minify: !1
      },
      createGenerateId: He,
      Renderer: J ? nn : null,
      plugins: []
    }, this.generateId = He({
      minify: !1
    });
    for (var e = 0; e < qe.length; e++)
      this.plugins.use(qe[e], {
        queue: "internal"
      });
    this.setup(r);
  }
  var t = n.prototype;
  return t.setup = function(e) {
    return e === void 0 && (e = {}), e.createGenerateId && (this.options.createGenerateId = e.createGenerateId), e.id && (this.options.id = x({}, this.options.id, e.id)), (e.createGenerateId || e.id) && (this.generateId = this.options.createGenerateId(this.options.id)), e.insertionPoint != null && (this.options.insertionPoint = e.insertionPoint), "Renderer" in e && (this.options.Renderer = e.Renderer), e.plugins && this.use.apply(this, e.plugins), this;
  }, t.createStyleSheet = function(e, i) {
    i === void 0 && (i = {});
    var s = i, o = s.index;
    typeof o != "number" && (o = z.index === 0 ? 0 : z.index + 1);
    var a = new ft(e, x({}, i, {
      jss: this,
      generateId: i.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: o
    }));
    return this.plugins.onProcessSheet(a), a;
  }, t.removeStyleSheet = function(e) {
    return e.detach(), z.remove(e), this;
  }, t.createRule = function(e, i, s) {
    if (i === void 0 && (i = {}), s === void 0 && (s = {}), typeof e == "object")
      return this.createRule(void 0, e, i);
    var o = x({}, s, {
      name: e,
      jss: this,
      Renderer: this.options.Renderer
    });
    o.generateId || (o.generateId = this.generateId), o.classes || (o.classes = {}), o.keyframes || (o.keyframes = {});
    var a = _e(e, i, o);
    return a && this.plugins.onProcessRule(a), a;
  }, t.use = function() {
    for (var e = this, i = arguments.length, s = new Array(i), o = 0; o < i; o++)
      s[o] = arguments[o];
    return s.forEach(function(a) {
      e.plugins.use(a);
    }), this;
  }, n;
}(), Me = function(t) {
  return new on(t);
}, je = typeof CSS == "object" && CSS != null && "number" in CSS;
function dt(n) {
  var t = null;
  for (var r in n) {
    var e = n[r], i = typeof e;
    if (i === "function")
      t || (t = {}), t[r] = e;
    else if (i === "object" && e !== null && !Array.isArray(e)) {
      var s = dt(e);
      s && (t || (t = {}), t[r] = s);
    }
  }
  return t;
}
/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */
Me();
var ht = Date.now(), oe = "fnValues" + ht, ae = "fnStyle" + ++ht, an = function() {
  return {
    onCreateRule: function(r, e, i) {
      if (typeof e != "function")
        return null;
      var s = _e(r, {}, i);
      return s[ae] = e, s;
    },
    onProcessStyle: function(r, e) {
      if (oe in e || ae in e)
        return r;
      var i = {};
      for (var s in r) {
        var o = r[s];
        typeof o == "function" && (delete r[s], i[s] = o);
      }
      return e[oe] = i, r;
    },
    onUpdate: function(r, e, i, s) {
      var o = e, a = o[ae];
      if (a && (o.style = a(r) || {}, process.env.NODE_ENV === "development")) {
        for (var f in o.style)
          if (typeof o.style[f] == "function") {
            process.env.NODE_ENV !== "production" && C(!1, "[JSS] Function values inside function rules are not supported.");
            break;
          }
      }
      var l = o[oe];
      if (l)
        for (var d in l)
          o.prop(d, l[d](r), s);
    }
  };
};
const un = an;
var O = "@global", Pe = "@global ", fn = /* @__PURE__ */ function() {
  function n(r, e, i) {
    this.type = "global", this.at = O, this.isProcessed = !1, this.key = r, this.options = i, this.rules = new ee(x({}, i, {
      parent: this
    }));
    for (var s in e)
      this.rules.add(s, e[s]);
    this.rules.process();
  }
  var t = n.prototype;
  return t.getRule = function(e) {
    return this.rules.get(e);
  }, t.addRule = function(e, i, s) {
    var o = this.rules.add(e, i, s);
    return o && this.options.jss.plugins.onProcessRule(o), o;
  }, t.replaceRule = function(e, i, s) {
    var o = this.rules.replace(e, i, s);
    return o && this.options.jss.plugins.onProcessRule(o), o;
  }, t.indexOf = function(e) {
    return this.rules.indexOf(e);
  }, t.toString = function(e) {
    return this.rules.toString(e);
  }, n;
}(), ln = /* @__PURE__ */ function() {
  function n(r, e, i) {
    this.type = "global", this.at = O, this.isProcessed = !1, this.key = r, this.options = i;
    var s = r.substr(Pe.length);
    this.rule = i.jss.createRule(s, e, x({}, i, {
      parent: this
    }));
  }
  var t = n.prototype;
  return t.toString = function(e) {
    return this.rule ? this.rule.toString(e) : "";
  }, n;
}(), cn = /\s*,\s*/g;
function pt(n, t) {
  for (var r = n.split(cn), e = "", i = 0; i < r.length; i++)
    e += t + " " + r[i].trim(), r[i + 1] && (e += ", ");
  return e;
}
function dn(n, t) {
  var r = n.options, e = n.style, i = e ? e[O] : null;
  if (i) {
    for (var s in i)
      t.addRule(s, i[s], x({}, r, {
        selector: pt(s, n.selector)
      }));
    delete e[O];
  }
}
function hn(n, t) {
  var r = n.options, e = n.style;
  for (var i in e)
    if (!(i[0] !== "@" || i.substr(0, O.length) !== O)) {
      var s = pt(i.substr(O.length), n.selector);
      t.addRule(s, e[i], x({}, r, {
        selector: s
      })), delete e[i];
    }
}
function pn() {
  function n(r, e, i) {
    if (!r)
      return null;
    if (r === O)
      return new fn(r, e, i);
    if (r[0] === "@" && r.substr(0, Pe.length) === Pe)
      return new ln(r, e, i);
    var s = i.parent;
    return s && (s.type === "global" || s.options.parent && s.options.parent.type === "global") && (i.scoped = !1), !i.selector && i.scoped === !1 && (i.selector = r), null;
  }
  function t(r, e) {
    r.type !== "style" || !e || (dn(r, e), hn(r, e));
  }
  return {
    onCreateRule: n,
    onProcessRule: t
  };
}
var Qe = /\s*,\s*/g, vn = /&/g, mn = /\$([\w-]+)/g;
function gn() {
  function n(i, s) {
    return function(o, a) {
      var f = i.getRule(a) || s && s.getRule(a);
      return f ? f.selector : (process.env.NODE_ENV !== "production" && C(!1, '[JSS] Could not find the referenced rule "' + a + '" in "' + (i.options.meta || i.toString()) + '".'), a);
    };
  }
  function t(i, s) {
    for (var o = s.split(Qe), a = i.split(Qe), f = "", l = 0; l < o.length; l++)
      for (var d = o[l], h = 0; h < a.length; h++) {
        var S = a[h];
        f && (f += ", "), f += S.indexOf("&") !== -1 ? S.replace(vn, d) : d + " " + S;
      }
    return f;
  }
  function r(i, s, o) {
    if (o)
      return x({}, o, {
        index: o.index + 1
      });
    var a = i.options.nestingLevel;
    a = a === void 0 ? 1 : a + 1;
    var f = x({}, i.options, {
      nestingLevel: a,
      index: s.indexOf(i) + 1
      // We don't need the parent name to be set options for chlid.
    });
    return delete f.name, f;
  }
  function e(i, s, o) {
    if (s.type !== "style")
      return i;
    var a = s, f = a.options.parent, l, d;
    for (var h in i) {
      var S = h.indexOf("&") !== -1, g = h[0] === "@";
      if (!(!S && !g)) {
        if (l = r(a, f, l), S) {
          var R = t(h, a.selector);
          d || (d = n(f, o)), R = R.replace(mn, d);
          var m = a.key + "-" + h;
          "replaceRule" in f ? f.replaceRule(m, i[h], x({}, l, {
            selector: R
          })) : f.addRule(m, i[h], x({}, l, {
            selector: R
          }));
        } else
          g && f.addRule(h, {}, l).addRule(a.key, i[h], {
            selector: a.selector
          });
        delete i[h];
      }
    }
    return i;
  }
  return {
    onProcessStyle: e
  };
}
var yn = /[A-Z]/g, bn = /^ms-/, ue = {};
function Sn(n) {
  return "-" + n.toLowerCase();
}
function vt(n) {
  if (ue.hasOwnProperty(n))
    return ue[n];
  var t = n.replace(yn, Sn);
  return ue[n] = bn.test(t) ? "-" + t : t;
}
function X(n) {
  var t = {};
  for (var r in n) {
    var e = r.indexOf("--") === 0 ? r : vt(r);
    t[e] = n[r];
  }
  return n.fallbacks && (Array.isArray(n.fallbacks) ? t.fallbacks = n.fallbacks.map(X) : t.fallbacks = X(n.fallbacks)), t;
}
function Rn() {
  function n(r) {
    if (Array.isArray(r)) {
      for (var e = 0; e < r.length; e++)
        r[e] = X(r[e]);
      return r;
    }
    return X(r);
  }
  function t(r, e, i) {
    if (e.indexOf("--") === 0)
      return r;
    var s = vt(e);
    return e === s ? r : (i.prop(s, r), null);
  }
  return {
    onProcessStyle: n,
    onChangeValue: t
  };
}
var u = je && CSS ? CSS.px : "px", B = je && CSS ? CSS.ms : "ms", T = je && CSS ? CSS.percent : "%", xn = {
  // Animation properties
  "animation-delay": B,
  "animation-duration": B,
  // Background properties
  "background-position": u,
  "background-position-x": u,
  "background-position-y": u,
  "background-size": u,
  // Border Properties
  border: u,
  "border-bottom": u,
  "border-bottom-left-radius": u,
  "border-bottom-right-radius": u,
  "border-bottom-width": u,
  "border-left": u,
  "border-left-width": u,
  "border-radius": u,
  "border-right": u,
  "border-right-width": u,
  "border-top": u,
  "border-top-left-radius": u,
  "border-top-right-radius": u,
  "border-top-width": u,
  "border-width": u,
  "border-block": u,
  "border-block-end": u,
  "border-block-end-width": u,
  "border-block-start": u,
  "border-block-start-width": u,
  "border-block-width": u,
  "border-inline": u,
  "border-inline-end": u,
  "border-inline-end-width": u,
  "border-inline-start": u,
  "border-inline-start-width": u,
  "border-inline-width": u,
  "border-start-start-radius": u,
  "border-start-end-radius": u,
  "border-end-start-radius": u,
  "border-end-end-radius": u,
  // Margin properties
  margin: u,
  "margin-bottom": u,
  "margin-left": u,
  "margin-right": u,
  "margin-top": u,
  "margin-block": u,
  "margin-block-end": u,
  "margin-block-start": u,
  "margin-inline": u,
  "margin-inline-end": u,
  "margin-inline-start": u,
  // Padding properties
  padding: u,
  "padding-bottom": u,
  "padding-left": u,
  "padding-right": u,
  "padding-top": u,
  "padding-block": u,
  "padding-block-end": u,
  "padding-block-start": u,
  "padding-inline": u,
  "padding-inline-end": u,
  "padding-inline-start": u,
  // Mask properties
  "mask-position-x": u,
  "mask-position-y": u,
  "mask-size": u,
  // Width and height properties
  height: u,
  width: u,
  "min-height": u,
  "max-height": u,
  "min-width": u,
  "max-width": u,
  // Position properties
  bottom: u,
  left: u,
  top: u,
  right: u,
  inset: u,
  "inset-block": u,
  "inset-block-end": u,
  "inset-block-start": u,
  "inset-inline": u,
  "inset-inline-end": u,
  "inset-inline-start": u,
  // Shadow properties
  "box-shadow": u,
  "text-shadow": u,
  // Column properties
  "column-gap": u,
  "column-rule": u,
  "column-rule-width": u,
  "column-width": u,
  // Font and text properties
  "font-size": u,
  "font-size-delta": u,
  "letter-spacing": u,
  "text-decoration-thickness": u,
  "text-indent": u,
  "text-stroke": u,
  "text-stroke-width": u,
  "word-spacing": u,
  // Motion properties
  motion: u,
  "motion-offset": u,
  // Outline properties
  outline: u,
  "outline-offset": u,
  "outline-width": u,
  // Perspective properties
  perspective: u,
  "perspective-origin-x": T,
  "perspective-origin-y": T,
  // Transform properties
  "transform-origin": T,
  "transform-origin-x": T,
  "transform-origin-y": T,
  "transform-origin-z": T,
  // Transition properties
  "transition-delay": B,
  "transition-duration": B,
  // Alignment properties
  "vertical-align": u,
  "flex-basis": u,
  // Some random properties
  "shape-margin": u,
  size: u,
  gap: u,
  // Grid properties
  grid: u,
  "grid-gap": u,
  "row-gap": u,
  "grid-row-gap": u,
  "grid-column-gap": u,
  "grid-template-rows": u,
  "grid-template-columns": u,
  "grid-auto-rows": u,
  "grid-auto-columns": u,
  // Not existing properties.
  // Used to avoid issues with jss-plugin-expand integration.
  "box-shadow-x": u,
  "box-shadow-y": u,
  "box-shadow-blur": u,
  "box-shadow-spread": u,
  "font-line-height": u,
  "text-shadow-x": u,
  "text-shadow-y": u,
  "text-shadow-blur": u
};
function mt(n) {
  var t = /(-[a-z])/g, r = function(o) {
    return o[1].toUpperCase();
  }, e = {};
  for (var i in n)
    e[i] = n[i], e[i.replace(t, r)] = n[i];
  return e;
}
var Pn = mt(xn);
function G(n, t, r) {
  if (t == null)
    return t;
  if (Array.isArray(t))
    for (var e = 0; e < t.length; e++)
      t[e] = G(n, t[e], r);
  else if (typeof t == "object")
    if (n === "fallbacks")
      for (var i in t)
        t[i] = G(i, t[i], r);
    else
      for (var s in t)
        t[s] = G(n + "-" + s, t[s], r);
  else if (typeof t == "number" && isNaN(t) === !1) {
    var o = r[n] || Pn[n];
    return o && !(t === 0 && o === u) ? typeof o == "function" ? o(t).toString() : "" + t + o : t.toString();
  }
  return t;
}
function En(n) {
  n === void 0 && (n = {});
  var t = mt(n);
  function r(i, s) {
    if (s.type !== "style")
      return i;
    for (var o in i)
      i[o] = G(o, i[o], t);
    return i;
  }
  function e(i, s) {
    return G(s, i, t);
  }
  return {
    onProcessStyle: r,
    onChangeValue: e
  };
}
function Ee(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var r = 0, e = new Array(t); r < t; r++)
    e[r] = n[r];
  return e;
}
function Cn(n) {
  if (Array.isArray(n))
    return Ee(n);
}
function wn(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null)
    return Array.from(n);
}
function Nn(n, t) {
  if (n) {
    if (typeof n == "string")
      return Ee(n, t);
    var r = Object.prototype.toString.call(n).slice(8, -1);
    if (r === "Object" && n.constructor && (r = n.constructor.name), r === "Map" || r === "Set")
      return Array.from(n);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ee(n, t);
  }
}
function _n() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function On(n) {
  return Cn(n) || wn(n) || Nn(n) || _n();
}
var U = "", Ce = "", gt = "", yt = "", Mn = J && "ontouchstart" in document.documentElement;
if (J) {
  var fe = {
    Moz: "-moz-",
    ms: "-ms-",
    O: "-o-",
    Webkit: "-webkit-"
  }, jn = document.createElement("p"), le = jn.style, kn = "Transform";
  for (var ce in fe)
    if (ce + kn in le) {
      U = ce, Ce = fe[ce];
      break;
    }
  U === "Webkit" && "msHyphens" in le && (U = "ms", Ce = fe.ms, yt = "edge"), U === "Webkit" && "-apple-trailing-word" in le && (gt = "apple");
}
var v = {
  js: U,
  css: Ce,
  vendor: gt,
  browser: yt,
  isTouch: Mn
};
function Tn(n) {
  return n[1] === "-" || v.js === "ms" ? n : "@" + v.css + "keyframes" + n.substr(10);
}
var $n = {
  noPrefill: ["appearance"],
  supportedProperty: function(t) {
    return t !== "appearance" ? !1 : v.js === "ms" ? "-webkit-" + t : v.css + t;
  }
}, In = {
  noPrefill: ["color-adjust"],
  supportedProperty: function(t) {
    return t !== "color-adjust" ? !1 : v.js === "Webkit" ? v.css + "print-" + t : t;
  }
}, Vn = /[-\s]+(.)?/g;
function An(n, t) {
  return t ? t.toUpperCase() : "";
}
function ke(n) {
  return n.replace(Vn, An);
}
function M(n) {
  return ke("-" + n);
}
var Dn = {
  noPrefill: ["mask"],
  supportedProperty: function(t, r) {
    if (!/^mask/.test(t))
      return !1;
    if (v.js === "Webkit") {
      var e = "mask-image";
      if (ke(e) in r)
        return t;
      if (v.js + M(e) in r)
        return v.css + t;
    }
    return t;
  }
}, Fn = {
  noPrefill: ["text-orientation"],
  supportedProperty: function(t) {
    return t !== "text-orientation" ? !1 : v.vendor === "apple" && !v.isTouch ? v.css + t : t;
  }
}, Un = {
  noPrefill: ["transform"],
  supportedProperty: function(t, r, e) {
    return t !== "transform" ? !1 : e.transform ? t : v.css + t;
  }
}, Ln = {
  noPrefill: ["transition"],
  supportedProperty: function(t, r, e) {
    return t !== "transition" ? !1 : e.transition ? t : v.css + t;
  }
}, zn = {
  noPrefill: ["writing-mode"],
  supportedProperty: function(t) {
    return t !== "writing-mode" ? !1 : v.js === "Webkit" || v.js === "ms" && v.browser !== "edge" ? v.css + t : t;
  }
}, Gn = {
  noPrefill: ["user-select"],
  supportedProperty: function(t) {
    return t !== "user-select" ? !1 : v.js === "Moz" || v.js === "ms" || v.vendor === "apple" ? v.css + t : t;
  }
}, Yn = {
  supportedProperty: function(t, r) {
    if (!/^break-/.test(t))
      return !1;
    if (v.js === "Webkit") {
      var e = "WebkitColumn" + M(t);
      return e in r ? v.css + "column-" + t : !1;
    }
    if (v.js === "Moz") {
      var i = "page" + M(t);
      return i in r ? "page-" + t : !1;
    }
    return !1;
  }
}, Wn = {
  supportedProperty: function(t, r) {
    if (!/^(border|margin|padding)-inline/.test(t))
      return !1;
    if (v.js === "Moz")
      return t;
    var e = t.replace("-inline", "");
    return v.js + M(e) in r ? v.css + e : !1;
  }
}, Jn = {
  supportedProperty: function(t, r) {
    return ke(t) in r ? t : !1;
  }
}, qn = {
  supportedProperty: function(t, r) {
    var e = M(t);
    return t[0] === "-" || t[0] === "-" && t[1] === "-" ? t : v.js + e in r ? v.css + t : v.js !== "Webkit" && "Webkit" + e in r ? "-webkit-" + t : !1;
  }
}, Kn = {
  supportedProperty: function(t) {
    return t.substring(0, 11) !== "scroll-snap" ? !1 : v.js === "ms" ? "" + v.css + t : t;
  }
}, Bn = {
  supportedProperty: function(t) {
    return t !== "overscroll-behavior" ? !1 : v.js === "ms" ? v.css + "scroll-chaining" : t;
  }
}, Hn = {
  "flex-grow": "flex-positive",
  "flex-shrink": "flex-negative",
  "flex-basis": "flex-preferred-size",
  "justify-content": "flex-pack",
  order: "flex-order",
  "align-items": "flex-align",
  "align-content": "flex-line-pack"
  // 'align-self' is handled by 'align-self' plugin.
}, Xn = {
  supportedProperty: function(t, r) {
    var e = Hn[t];
    return e && v.js + M(e) in r ? v.css + e : !1;
  }
}, bt = {
  flex: "box-flex",
  "flex-grow": "box-flex",
  "flex-direction": ["box-orient", "box-direction"],
  order: "box-ordinal-group",
  "align-items": "box-align",
  "flex-flow": ["box-orient", "box-direction"],
  "justify-content": "box-pack"
}, Zn = Object.keys(bt), Qn = function(t) {
  return v.css + t;
}, ei = {
  supportedProperty: function(t, r, e) {
    var i = e.multiple;
    if (Zn.indexOf(t) > -1) {
      var s = bt[t];
      if (!Array.isArray(s))
        return v.js + M(s) in r ? v.css + s : !1;
      if (!i)
        return !1;
      for (var o = 0; o < s.length; o++)
        if (!(v.js + M(s[0]) in r))
          return !1;
      return s.map(Qn);
    }
    return !1;
  }
}, St = [$n, In, Dn, Fn, Un, Ln, zn, Gn, Yn, Wn, Jn, qn, Kn, Bn, Xn, ei], et = St.filter(function(n) {
  return n.supportedProperty;
}).map(function(n) {
  return n.supportedProperty;
}), ti = St.filter(function(n) {
  return n.noPrefill;
}).reduce(function(n, t) {
  return n.push.apply(n, On(t.noPrefill)), n;
}, []), L, j = {};
if (J) {
  L = document.createElement("p");
  var de = window.getComputedStyle(document.documentElement, "");
  for (var he in de)
    isNaN(he) || (j[de[he]] = de[he]);
  ti.forEach(function(n) {
    return delete j[n];
  });
}
function we(n, t) {
  if (t === void 0 && (t = {}), !L)
    return n;
  if (process.env.NODE_ENV !== "benchmark" && j[n] != null)
    return j[n];
  (n === "transition" || n === "transform") && (t[n] = n in L.style);
  for (var r = 0; r < et.length && (j[n] = et[r](n, L.style, t), !j[n]); r++)
    ;
  try {
    L.style[n] = "";
  } catch {
    return !1;
  }
  return j[n];
}
var $ = {}, ri = {
  transition: 1,
  "transition-property": 1,
  "-webkit-transition": 1,
  "-webkit-transition-property": 1
}, ni = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g, _;
function ii(n, t, r) {
  if (t === "var")
    return "var";
  if (t === "all")
    return "all";
  if (r === "all")
    return ", all";
  var e = t ? we(t) : ", " + we(r);
  return e || t || r;
}
J && (_ = document.createElement("p"));
function tt(n, t) {
  var r = t;
  if (!_ || n === "content")
    return t;
  if (typeof r != "string" || !isNaN(parseInt(r, 10)))
    return r;
  var e = n + r;
  if (process.env.NODE_ENV !== "benchmark" && $[e] != null)
    return $[e];
  try {
    _.style[n] = r;
  } catch {
    return $[e] = !1, !1;
  }
  if (ri[n])
    r = r.replace(ni, ii);
  else if (_.style[n] === "" && (r = v.css + r, r === "-ms-flex" && (_.style[n] = "-ms-flexbox"), _.style[n] = r, _.style[n] === ""))
    return $[e] = !1, !1;
  return _.style[n] = "", $[e] = r, $[e];
}
function si() {
  function n(i) {
    if (i.type === "keyframes") {
      var s = i;
      s.at = Tn(s.at);
    }
  }
  function t(i) {
    for (var s in i) {
      var o = i[s];
      if (s === "fallbacks" && Array.isArray(o)) {
        i[s] = o.map(t);
        continue;
      }
      var a = !1, f = we(s);
      f && f !== s && (a = !0);
      var l = !1, d = tt(f, k(o));
      d && d !== o && (l = !0), (a || l) && (a && delete i[s], i[f || s] = d || o);
    }
    return i;
  }
  function r(i, s) {
    return s.type !== "style" ? i : t(i);
  }
  function e(i, s) {
    return tt(s, k(i)) || i;
  }
  return {
    onProcessRule: n,
    onProcessStyle: r,
    onChangeValue: e
  };
}
function oi() {
  var n = function(r, e) {
    return r.length === e.length ? r > e ? 1 : -1 : r.length - e.length;
  };
  return {
    onProcessStyle: function(r, e) {
      if (e.type !== "style")
        return r;
      for (var i = {}, s = Object.keys(r).sort(n), o = 0; o < s.length; o++)
        i[s[o]] = r[s[o]];
      return i;
    }
  };
}
function Rt() {
  return {
    plugins: [
      un(),
      pn(),
      gn(),
      Rn(),
      En(),
      // Disable the vendor prefixer server-side, it does nothing.
      // This way, we can get a performance boost.
      // In the documentation, we are using `autoprefixer` to solve this problem.
      typeof window > "u" ? null : si(),
      oi()
    ]
  };
}
function xt(n = {}) {
  const {
    baseClasses: t,
    newClasses: r,
    Component: e
  } = n;
  if (!r)
    return t;
  const i = x({}, t);
  return process.env.NODE_ENV !== "production" && typeof r == "string" ? (console.error([`MUI: The value \`${r}\` provided to the classes prop of ${re(e)} is incorrect.`, "You might want to use the className prop instead."].join(`
`)), t) : (Object.keys(r).forEach((s) => {
    process.env.NODE_ENV !== "production" && (!t[s] && r[s] && console.error([`MUI: The key \`${s}\` provided to the classes prop is not implemented in ${re(e)}.`, `You can only override one of the following: ${Object.keys(t).join(",")}.`].join(`
`)), r[s] && typeof r[s] != "string" && console.error([`MUI: The key \`${s}\` provided to the classes prop is not valid for ${re(e)}.`, `You need to provide a non empty string instead of: ${r[s]}.`].join(`
`))), r[s] && (i[s] = `${t[s]} ${r[s]}`);
  }), i);
}
const ai = {
  set: (n, t, r, e) => {
    let i = n.get(t);
    i || (i = /* @__PURE__ */ new Map(), n.set(t, i)), i.set(r, e);
  },
  get: (n, t, r) => {
    const e = n.get(t);
    return e ? e.get(r) : void 0;
  },
  delete: (n, t, r) => {
    n.get(t).delete(r);
  }
}, A = ai;
function ui() {
  var n;
  const t = vr();
  return (n = t == null ? void 0 : t.$$material) != null ? n : t;
}
const fi = ["children", "injectFirst", "disableGeneration"], li = Me(Rt()), ci = br(), di = /* @__PURE__ */ new Map(), hi = {
  disableGeneration: !1,
  generateClassName: ci,
  jss: li,
  sheetsCache: null,
  sheetsManager: di,
  sheetsRegistry: null
}, Z = /* @__PURE__ */ P.createContext(hi);
process.env.NODE_ENV !== "production" && (Z.displayName = "StylesContext");
let H;
function Ne(n) {
  const {
    children: t,
    injectFirst: r = !1,
    disableGeneration: e = !1
  } = n, i = Q(n, fi), s = P.useContext(Z), {
    generateClassName: o,
    jss: a,
    serverGenerateClassName: f,
    sheetsCache: l,
    sheetsManager: d,
    sheetsRegistry: h
  } = x({}, s, i);
  process.env.NODE_ENV !== "production" && r && i.jss && console.error("MUI: You cannot use the jss and injectFirst props at the same time.");
  const S = P.useMemo(() => {
    const g = {
      disableGeneration: e,
      generateClassName: o,
      jss: a,
      serverGenerateClassName: f,
      sheetsCache: l,
      sheetsManager: d,
      sheetsRegistry: h
    };
    if (process.env.NODE_ENV !== "production" && typeof window > "u" && !g.sheetsManager && console.error("MUI: You need to use the ServerStyleSheets API when rendering on the server."), process.env.NODE_ENV !== "production" && g.jss.options.insertionPoint && r && console.error("MUI: You cannot use a custom insertionPoint and <StylesContext injectFirst> at the same time."), !g.jss.options.insertionPoint && r && typeof window < "u") {
      if (!H) {
        const R = document.head;
        H = document.createComment("mui-inject-first"), R.insertBefore(H, R.firstChild);
      }
      g.jss = Me({
        plugins: Rt().plugins,
        insertionPoint: H
      });
    }
    return g;
  }, [r, e, o, a, f, l, d, h]);
  return /* @__PURE__ */ I(Z.Provider, {
    value: S,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Ne.propTypes = {
  /**
   * Your component tree.
   */
  children: N.node,
  /**
   * You can disable the generation of the styles with this option.
   * It can be useful when traversing the React tree outside of the HTML
   * rendering step on the server.
   * Let's say you are using react-apollo to extract all
   * the queries made by the interface server-side - you can significantly speed up the traversal with this prop.
   */
  disableGeneration: N.bool,
  /**
   * JSS's class name generator.
   */
  generateClassName: N.func,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: N.bool,
  /**
   * JSS's instance.
   */
  jss: N.object,
  /**
   * @ignore
   */
  serverGenerateClassName: N.func,
  /**
   * @ignore
   *
   * Beta feature.
   *
   * Cache for the sheets.
   */
  sheetsCache: N.object,
  /**
   * @ignore
   *
   * The sheetsManager is used to deduplicate style sheet injection in the page.
   * It's deduplicating using the (theme, styles) couple.
   * On the server, you should provide a new instance for each request.
   */
  sheetsManager: N.object,
  /**
   * @ignore
   *
   * Collect the sheets.
   */
  sheetsRegistry: N.object
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Ne.propTypes = ur(Ne.propTypes));
let pe = -1e9;
function pi() {
  return pe += 1, process.env.NODE_ENV !== "production" && pe >= 0 && console.warn(["MUI: You might have a memory leak.", "The indexCounter is not supposed to grow that much."].join(`
`)), pe;
}
const vi = ["variant"];
function rt(n) {
  return n.length === 0;
}
function mi(n) {
  const {
    variant: t
  } = n, r = Q(n, vi);
  let e = t || "";
  return Object.keys(r).sort().forEach((i) => {
    i === "color" ? e += rt(e) ? n[i] : ne(n[i]) : e += `${rt(e) ? i : ne(i)}${ne(n[i].toString())}`;
  }), e;
}
const gi = {}, Pt = gi;
function yi(n) {
  const t = typeof n == "function";
  return process.env.NODE_ENV !== "production" && typeof n != "object" && !t && console.error(["MUI: The `styles` argument provided is invalid.", "You need to provide a function generating the styles or a styles object."].join(`
`)), {
    create: (r, e) => {
      let i;
      try {
        i = t ? n(r) : n;
      } catch (f) {
        throw process.env.NODE_ENV !== "production" && t === !0 && r === Pt && console.error(["MUI: The `styles` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join(`
`)), f;
      }
      if (!e || !r.components || !r.components[e] || !r.components[e].styleOverrides && !r.components[e].variants)
        return i;
      const s = r.components[e].styleOverrides || {}, o = r.components[e].variants || [], a = x({}, i);
      return Object.keys(s).forEach((f) => {
        process.env.NODE_ENV !== "production" && (a[f] || console.warn(["MUI: You are trying to override a style that does not exist.", `Fix the \`${f}\` key of \`theme.components.${e}.styleOverrides\`.`, "", `If you intentionally wanted to add a new key, please use the theme.components[${e}].variants option.`].join(`
`))), a[f] = ve(a[f] || {}, s[f]);
      }), o.forEach((f) => {
        const l = mi(f.props);
        a[l] = ve(a[l] || {}, f.style);
      }), a;
    },
    options: {}
  };
}
const bi = ["name", "classNamePrefix", "Component", "defaultTheme"];
function Si({
  state: n,
  stylesOptions: t
}, r, e) {
  if (t.disableGeneration)
    return r || {};
  n.cacheClasses || (n.cacheClasses = {
    // Cache for the finalized classes value.
    value: null,
    // Cache for the last used classes prop pointer.
    lastProp: null,
    // Cache for the last used rendered classes pointer.
    lastJSS: {}
  });
  let i = !1;
  return n.classes !== n.cacheClasses.lastJSS && (n.cacheClasses.lastJSS = n.classes, i = !0), r !== n.cacheClasses.lastProp && (n.cacheClasses.lastProp = r, i = !0), i && (n.cacheClasses.value = xt({
    baseClasses: n.cacheClasses.lastJSS,
    newClasses: r,
    Component: e
  })), n.cacheClasses.value;
}
function Ri({
  state: n,
  theme: t,
  stylesOptions: r,
  stylesCreator: e,
  name: i
}, s) {
  if (r.disableGeneration)
    return;
  let o = A.get(r.sheetsManager, e, t);
  o || (o = {
    refs: 0,
    staticSheet: null,
    dynamicStyles: null
  }, A.set(r.sheetsManager, e, t, o));
  const a = x({}, e.options, r, {
    theme: t,
    flip: typeof r.flip == "boolean" ? r.flip : t.direction === "rtl"
  });
  a.generateId = a.serverGenerateClassName || a.generateClassName;
  const f = r.sheetsRegistry;
  if (o.refs === 0) {
    let l;
    r.sheetsCache && (l = A.get(r.sheetsCache, e, t));
    const d = e.create(t, i);
    l || (l = r.jss.createStyleSheet(d, x({
      link: !1
    }, a)), l.attach(), r.sheetsCache && A.set(r.sheetsCache, e, t, l)), f && f.add(l), o.staticSheet = l, o.dynamicStyles = dt(d);
  }
  if (o.dynamicStyles) {
    const l = r.jss.createStyleSheet(o.dynamicStyles, x({
      link: !0
    }, a));
    l.update(s), l.attach(), n.dynamicSheet = l, n.classes = xt({
      baseClasses: o.staticSheet.classes,
      newClasses: l.classes
    }), f && f.add(l);
  } else
    n.classes = o.staticSheet.classes;
  o.refs += 1;
}
function xi({
  state: n
}, t) {
  n.dynamicSheet && n.dynamicSheet.update(t);
}
function Pi({
  state: n,
  theme: t,
  stylesOptions: r,
  stylesCreator: e
}) {
  if (r.disableGeneration)
    return;
  const i = A.get(r.sheetsManager, e, t);
  i.refs -= 1;
  const s = r.sheetsRegistry;
  i.refs === 0 && (A.delete(r.sheetsManager, e, t), r.jss.removeStyleSheet(i.staticSheet), s && s.remove(i.staticSheet)), n.dynamicSheet && (r.jss.removeStyleSheet(n.dynamicSheet), s && s.remove(n.dynamicSheet));
}
function Ei(n, t) {
  const r = P.useRef([]);
  let e;
  const i = P.useMemo(() => ({}), t);
  r.current !== i && (r.current = i, e = n()), P.useEffect(
    () => () => {
      e && e();
    },
    [i]
    // eslint-disable-line react-hooks/exhaustive-deps
  );
}
function Ci(n, t = {}) {
  const {
    // alias for classNamePrefix, if provided will listen to theme (required for theme.components[name].styleOverrides)
    name: r,
    // Help with debuggability.
    classNamePrefix: e,
    Component: i,
    defaultTheme: s = Pt
  } = t, o = Q(t, bi), a = yi(n), f = r || e || "makeStyles";
  return a.options = {
    index: pi(),
    name: r,
    meta: f,
    classNamePrefix: f
  }, (d = {}) => {
    const h = ui() || s, S = x({}, P.useContext(Z), o), g = P.useRef(), R = P.useRef();
    Ei(() => {
      const c = {
        name: r,
        state: {},
        stylesCreator: a,
        stylesOptions: S,
        theme: h
      };
      return Ri(c, d), R.current = !1, g.current = c, () => {
        Pi(c);
      };
    }, [h, a]), P.useEffect(() => {
      R.current && xi(g.current, d), R.current = !0;
    });
    const m = Si(g.current, d.classes, i);
    return process.env.NODE_ENV !== "production" && P.useDebugValue(m), process.env.NODE_ENV !== "production" && r && ["MuiAvatar", "MuiBadge", "MuiButton", "MuiButtonGroup", "MuiChip", "MuiDivider", "MuiFab", "MuiPaper", "MuiToolbar", "MuiTypography", "MuiAlert", "MuiPagination", "MuiPaginationItem", "MuiSkeleton", "MuiTimelineDot"].indexOf(r) >= 0 && d.variant && !m[d.variant] && console.error([`MUI: You are using a variant value \`${d.variant}\` for which you didn't define styles.`, "Please create a new variant matcher in your theme for this variant. To learn more about matchers visit https://mui.com/r/custom-component-variants."].join(`
`)), m;
  };
}
const wi = Ci({
  hideElementsInViewMode: {
    "& .MuiAutocomplete-endAdornment, .MuiIconButton-root,.MuiSelect-icon": {
      display: "none"
    }
  },
  removeBorderInViewMode: {
    "& .MuiInput-root::after,.MuiInput-root::before, .MuiInput-root:hover, .MuiInput-root:focus,.MuiOutlinedInput-notchedOutline,MuiOutlinedInput-root:hover.MuiOutlinedInput-notchedOutline,MuiOutlinedInput-root.Mui-error.MuiOutlinedInput-notchedOutline": {
      borderBottom: "none !important",
      border: "none !important"
    }
  }
}), $i = Zt(function(t, r) {
  const e = t.customizer || er, i = t.formData, s = t.onValidChange, o = t.mode, a = wi();
  var f = e.getFormHelper();
  const l = e.getEventListeners(f), d = e.getValueListeners(f);
  var { getFieldManager: h, getFormData: S, isFormValid: g } = tr(
    i,
    s,
    o,
    f,
    { eventListeners: l, valueListeners: d }
  );
  return Qt(r, () => ({
    getData() {
      return S();
    },
    isValid() {
      return g();
    }
  }), [i, s, o]), /* @__PURE__ */ I(Xt, { children: /* @__PURE__ */ I(rr.Provider, { value: t.storeFactory, children: /* @__PURE__ */ I(nr.Provider, { value: f, children: /* @__PURE__ */ I(ir.Provider, { value: h, children: /* @__PURE__ */ I("div", { className: `${o === "view" ? a.hideElementsInViewMode : ""} ${o === "view" ? a.removeBorderInViewMode : ""}`, children: t.children }) }) }) }) });
});
export {
  $i as PalmyraForm
};
