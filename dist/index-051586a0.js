import { createFormData as Ie } from "./palmyra/form/PalmyraFormManager.js";
import { jsx as l, Fragment as $e, jsxs as ne } from "react/jsx-runtime";
import lt, { forwardRef as me, useImperativeHandle as be, useState as re, useEffect as Ye, useContext as ze, useRef as _t } from "react";
import { Dialog as Rt, Tooltip as ve, Button as he, Paper as Nt, TextField as Mt, InputAdornment as At, ClickAwayListener as Ft, TablePagination as kt, Box as It } from "@mui/material";
import $t from "./palmyra/layout/flexiLayout/SectionRendererChart.js";
import ut from "./palmyra/layout/flexiLayout/SectionRendererEditForm.js";
import { generateColumns as Yt } from "./palmyra/grid/base/ColumnConverter.js";
import { A as Lt } from "./index.esm-3271ad1f.js";
import Wt from "./palmyra/grid/base/EmptyChildTable.js";
import jt from "./palmyra/grid/base/TableX.js";
import { Close as qt, Menu as Be, DensitySmall as Ge, DensityLarge as He, FilterAlt as Xt, FileDownloadOutlined as Ut, Add as Vt } from "@mui/icons-material";
import { convertToField as zt } from "./palmyra/grid/base/GridFieldConverter.js";
import { FieldManagerContext as Le, StoreFactoryContext as We, LayoutParamsContext as dt } from "./palmyra/layout/flexiLayout/FlexiLayoutContext.js";
import { a as Bt, g as Gt } from "./_commonjsHelpers-c5d32002.js";
import ft from "react-dom";
import Ht from "./palmyra/layout/flexiLayout/FormFieldOnlyRenderer.js";
import { getActionPublishers as Kt } from "./palmyra/core/Publishers.js";
import { mergeDeep as Jt } from "./palmyra/utils/index.js";
import Qt from "./palmyra/layout/container/SectionContainer.js";
import { ErrorBoundary as pt } from "./palmyra/layout/ErrorBoundary.js";
import Zt from "./palmyra/layout/flexiLayout/SectionRendererInvalid.js";
import er from "./palmyra/layout/flexiLayout/SectionRendererViewForm.js";
const xn = me(function(t, r) {
  const n = t.formData, i = t.onValidChange, a = t.mode;
  var { getFieldManager: d, getFormData: u, isFormValid: f } = Ie(n, i, a);
  return be(r, () => ({
    getData() {
      return u();
    },
    isValid() {
      return f();
    }
  }), [n, i, a]), /* @__PURE__ */ l($e, { children: /* @__PURE__ */ l(Le.Provider, { value: d, children: t.children }) });
}), On = me(function(t, r) {
  const { layout: n, storeFactory: i, layoutParams: a } = t;
  return be(r, () => ({}), [n]), /* @__PURE__ */ l($e, { children: /* @__PURE__ */ l(We.Provider, { value: i, children: /* @__PURE__ */ l(xt, { layout: n, context: a }) }) });
});
var Pe = { exports: {} }, ht = {}, ke = { exports: {} }, Se = { exports: {} }, N = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function tr() {
  if (Ke)
    return N;
  Ke = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, S = e ? Symbol.for("react.suspense") : 60113, A = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, $ = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, Y = e ? Symbol.for("react.fundamental") : 60117, W = e ? Symbol.for("react.responder") : 60118, v = e ? Symbol.for("react.scope") : 60119;
  function h(o) {
    if (typeof o == "object" && o !== null) {
      var F = o.$$typeof;
      switch (F) {
        case t:
          switch (o = o.type, o) {
            case f:
            case m:
            case n:
            case a:
            case i:
            case S:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case u:
                case y:
                case $:
                case _:
                case d:
                  return o;
                default:
                  return F;
              }
          }
        case r:
          return F;
      }
    }
  }
  function g(o) {
    return h(o) === m;
  }
  return N.AsyncMode = f, N.ConcurrentMode = m, N.ContextConsumer = u, N.ContextProvider = d, N.Element = t, N.ForwardRef = y, N.Fragment = n, N.Lazy = $, N.Memo = _, N.Portal = r, N.Profiler = a, N.StrictMode = i, N.Suspense = S, N.isAsyncMode = function(o) {
    return g(o) || h(o) === f;
  }, N.isConcurrentMode = g, N.isContextConsumer = function(o) {
    return h(o) === u;
  }, N.isContextProvider = function(o) {
    return h(o) === d;
  }, N.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === t;
  }, N.isForwardRef = function(o) {
    return h(o) === y;
  }, N.isFragment = function(o) {
    return h(o) === n;
  }, N.isLazy = function(o) {
    return h(o) === $;
  }, N.isMemo = function(o) {
    return h(o) === _;
  }, N.isPortal = function(o) {
    return h(o) === r;
  }, N.isProfiler = function(o) {
    return h(o) === a;
  }, N.isStrictMode = function(o) {
    return h(o) === i;
  }, N.isSuspense = function(o) {
    return h(o) === S;
  }, N.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === n || o === m || o === a || o === i || o === S || o === A || typeof o == "object" && o !== null && (o.$$typeof === $ || o.$$typeof === _ || o.$$typeof === d || o.$$typeof === u || o.$$typeof === y || o.$$typeof === Y || o.$$typeof === W || o.$$typeof === v || o.$$typeof === k);
  }, N.typeOf = h, N;
}
var M = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function rr() {
  return Je || (Je = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, S = e ? Symbol.for("react.suspense") : 60113, A = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, $ = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, Y = e ? Symbol.for("react.fundamental") : 60117, W = e ? Symbol.for("react.responder") : 60118, v = e ? Symbol.for("react.scope") : 60119;
    function h(c) {
      return typeof c == "string" || typeof c == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      c === n || c === m || c === a || c === i || c === S || c === A || typeof c == "object" && c !== null && (c.$$typeof === $ || c.$$typeof === _ || c.$$typeof === d || c.$$typeof === u || c.$$typeof === y || c.$$typeof === Y || c.$$typeof === W || c.$$typeof === v || c.$$typeof === k);
    }
    function g(c) {
      if (typeof c == "object" && c !== null) {
        var I = c.$$typeof;
        switch (I) {
          case t:
            var fe = c.type;
            switch (fe) {
              case f:
              case m:
              case n:
              case a:
              case i:
              case S:
                return fe;
              default:
                var Ve = fe && fe.$$typeof;
                switch (Ve) {
                  case u:
                  case y:
                  case $:
                  case _:
                  case d:
                    return Ve;
                  default:
                    return I;
                }
            }
          case r:
            return I;
        }
      }
    }
    var o = f, F = m, w = u, q = d, J = t, H = y, Q = n, se = $, ie = _, Z = r, ce = a, V = i, K = S, ee = !1;
    function le(c) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), s(c) || g(c) === f;
    }
    function s(c) {
      return g(c) === m;
    }
    function p(c) {
      return g(c) === u;
    }
    function E(c) {
      return g(c) === d;
    }
    function T(c) {
      return typeof c == "object" && c !== null && c.$$typeof === t;
    }
    function b(c) {
      return g(c) === y;
    }
    function D(c) {
      return g(c) === n;
    }
    function P(c) {
      return g(c) === $;
    }
    function C(c) {
      return g(c) === _;
    }
    function x(c) {
      return g(c) === r;
    }
    function R(c) {
      return g(c) === a;
    }
    function O(c) {
      return g(c) === i;
    }
    function X(c) {
      return g(c) === S;
    }
    M.AsyncMode = o, M.ConcurrentMode = F, M.ContextConsumer = w, M.ContextProvider = q, M.Element = J, M.ForwardRef = H, M.Fragment = Q, M.Lazy = se, M.Memo = ie, M.Portal = Z, M.Profiler = ce, M.StrictMode = V, M.Suspense = K, M.isAsyncMode = le, M.isConcurrentMode = s, M.isContextConsumer = p, M.isContextProvider = E, M.isElement = T, M.isForwardRef = b, M.isFragment = D, M.isLazy = P, M.isMemo = C, M.isPortal = x, M.isProfiler = R, M.isStrictMode = O, M.isSuspense = X, M.isValidElementType = h, M.typeOf = g;
  }()), M;
}
var Qe;
function gt() {
  return Qe || (Qe = 1, process.env.NODE_ENV === "production" ? Se.exports = tr() : Se.exports = rr()), Se.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var De, Ze;
function nr() {
  if (Ze)
    return De;
  Ze = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var d = {}, u = 0; u < 10; u++)
        d["_" + String.fromCharCode(u)] = u;
      var f = Object.getOwnPropertyNames(d).map(function(y) {
        return d[y];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var m = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(y) {
        m[y] = y;
      }), Object.keys(Object.assign({}, m)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return De = i() ? Object.assign : function(a, d) {
    for (var u, f = n(a), m, y = 1; y < arguments.length; y++) {
      u = Object(arguments[y]);
      for (var S in u)
        t.call(u, S) && (f[S] = u[S]);
      if (e) {
        m = e(u);
        for (var A = 0; A < m.length; A++)
          r.call(u, m[A]) && (f[m[A]] = u[m[A]]);
      }
    }
    return f;
  }, De;
}
var xe, et;
function je() {
  if (et)
    return xe;
  et = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return xe = e, xe;
}
var Oe, tt;
function mt() {
  return tt || (tt = 1, Oe = Function.call.bind(Object.prototype.hasOwnProperty)), Oe;
}
var _e, rt;
function or() {
  if (rt)
    return _e;
  rt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = je(), r = {}, n = mt();
    e = function(a) {
      var d = "Warning: " + a;
      typeof console < "u" && console.error(d);
      try {
        throw new Error(d);
      } catch {
      }
    };
  }
  function i(a, d, u, f, m) {
    if (process.env.NODE_ENV !== "production") {
      for (var y in a)
        if (n(a, y)) {
          var S;
          try {
            if (typeof a[y] != "function") {
              var A = Error(
                (f || "React class") + ": " + u + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw A.name = "Invariant Violation", A;
            }
            S = a[y](d, y, f, u, null, t);
          } catch ($) {
            S = $;
          }
          if (S && !(S instanceof Error) && e(
            (f || "React class") + ": type specification of " + u + " `" + y + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof S + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), S instanceof Error && !(S.message in r)) {
            r[S.message] = !0;
            var _ = m ? m() : "";
            e(
              "Failed " + u + " type: " + S.message + (_ ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, _e = i, _e;
}
var Re, nt;
function ar() {
  if (nt)
    return Re;
  nt = 1;
  var e = gt(), t = nr(), r = je(), n = mt(), i = or(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(u) {
    var f = "Warning: " + u;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function d() {
    return null;
  }
  return Re = function(u, f) {
    var m = typeof Symbol == "function" && Symbol.iterator, y = "@@iterator";
    function S(s) {
      var p = s && (m && s[m] || s[y]);
      if (typeof p == "function")
        return p;
    }
    var A = "<<anonymous>>", _ = {
      array: W("array"),
      bigint: W("bigint"),
      bool: W("boolean"),
      func: W("function"),
      number: W("number"),
      object: W("object"),
      string: W("string"),
      symbol: W("symbol"),
      any: v(),
      arrayOf: h,
      element: g(),
      elementType: o(),
      instanceOf: F,
      node: H(),
      objectOf: q,
      oneOf: w,
      oneOfType: J,
      shape: se,
      exact: ie
    };
    function $(s, p) {
      return s === p ? s !== 0 || 1 / s === 1 / p : s !== s && p !== p;
    }
    function k(s, p) {
      this.message = s, this.data = p && typeof p == "object" ? p : {}, this.stack = "";
    }
    k.prototype = Error.prototype;
    function Y(s) {
      if (process.env.NODE_ENV !== "production")
        var p = {}, E = 0;
      function T(D, P, C, x, R, O, X) {
        if (x = x || A, O = O || C, X !== r) {
          if (f) {
            var c = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw c.name = "Invariant Violation", c;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var I = x + ":" + C;
            !p[I] && // Avoid spamming the console because they are often not actionable except for lib authors
            E < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + O + "` prop on `" + x + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), p[I] = !0, E++);
          }
        }
        return P[C] == null ? D ? P[C] === null ? new k("The " + R + " `" + O + "` is marked as required " + ("in `" + x + "`, but its value is `null`.")) : new k("The " + R + " `" + O + "` is marked as required in " + ("`" + x + "`, but its value is `undefined`.")) : null : s(P, C, x, R, O);
      }
      var b = T.bind(null, !1);
      return b.isRequired = T.bind(null, !0), b;
    }
    function W(s) {
      function p(E, T, b, D, P, C) {
        var x = E[T], R = V(x);
        if (R !== s) {
          var O = K(x);
          return new k(
            "Invalid " + D + " `" + P + "` of type " + ("`" + O + "` supplied to `" + b + "`, expected ") + ("`" + s + "`."),
            { expectedType: s }
          );
        }
        return null;
      }
      return Y(p);
    }
    function v() {
      return Y(d);
    }
    function h(s) {
      function p(E, T, b, D, P) {
        if (typeof s != "function")
          return new k("Property `" + P + "` of component `" + b + "` has invalid PropType notation inside arrayOf.");
        var C = E[T];
        if (!Array.isArray(C)) {
          var x = V(C);
          return new k("Invalid " + D + " `" + P + "` of type " + ("`" + x + "` supplied to `" + b + "`, expected an array."));
        }
        for (var R = 0; R < C.length; R++) {
          var O = s(C, R, b, D, P + "[" + R + "]", r);
          if (O instanceof Error)
            return O;
        }
        return null;
      }
      return Y(p);
    }
    function g() {
      function s(p, E, T, b, D) {
        var P = p[E];
        if (!u(P)) {
          var C = V(P);
          return new k("Invalid " + b + " `" + D + "` of type " + ("`" + C + "` supplied to `" + T + "`, expected a single ReactElement."));
        }
        return null;
      }
      return Y(s);
    }
    function o() {
      function s(p, E, T, b, D) {
        var P = p[E];
        if (!e.isValidElementType(P)) {
          var C = V(P);
          return new k("Invalid " + b + " `" + D + "` of type " + ("`" + C + "` supplied to `" + T + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return Y(s);
    }
    function F(s) {
      function p(E, T, b, D, P) {
        if (!(E[T] instanceof s)) {
          var C = s.name || A, x = le(E[T]);
          return new k("Invalid " + D + " `" + P + "` of type " + ("`" + x + "` supplied to `" + b + "`, expected ") + ("instance of `" + C + "`."));
        }
        return null;
      }
      return Y(p);
    }
    function w(s) {
      if (!Array.isArray(s))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), d;
      function p(E, T, b, D, P) {
        for (var C = E[T], x = 0; x < s.length; x++)
          if ($(C, s[x]))
            return null;
        var R = JSON.stringify(s, function(X, c) {
          var I = K(c);
          return I === "symbol" ? String(c) : c;
        });
        return new k("Invalid " + D + " `" + P + "` of value `" + String(C) + "` " + ("supplied to `" + b + "`, expected one of " + R + "."));
      }
      return Y(p);
    }
    function q(s) {
      function p(E, T, b, D, P) {
        if (typeof s != "function")
          return new k("Property `" + P + "` of component `" + b + "` has invalid PropType notation inside objectOf.");
        var C = E[T], x = V(C);
        if (x !== "object")
          return new k("Invalid " + D + " `" + P + "` of type " + ("`" + x + "` supplied to `" + b + "`, expected an object."));
        for (var R in C)
          if (n(C, R)) {
            var O = s(C, R, b, D, P + "." + R, r);
            if (O instanceof Error)
              return O;
          }
        return null;
      }
      return Y(p);
    }
    function J(s) {
      if (!Array.isArray(s))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), d;
      for (var p = 0; p < s.length; p++) {
        var E = s[p];
        if (typeof E != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ee(E) + " at index " + p + "."
          ), d;
      }
      function T(b, D, P, C, x) {
        for (var R = [], O = 0; O < s.length; O++) {
          var X = s[O], c = X(b, D, P, C, x, r);
          if (c == null)
            return null;
          c.data && n(c.data, "expectedType") && R.push(c.data.expectedType);
        }
        var I = R.length > 0 ? ", expected one of type [" + R.join(", ") + "]" : "";
        return new k("Invalid " + C + " `" + x + "` supplied to " + ("`" + P + "`" + I + "."));
      }
      return Y(T);
    }
    function H() {
      function s(p, E, T, b, D) {
        return Z(p[E]) ? null : new k("Invalid " + b + " `" + D + "` supplied to " + ("`" + T + "`, expected a ReactNode."));
      }
      return Y(s);
    }
    function Q(s, p, E, T, b) {
      return new k(
        (s || "React class") + ": " + p + " type `" + E + "." + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + b + "`."
      );
    }
    function se(s) {
      function p(E, T, b, D, P) {
        var C = E[T], x = V(C);
        if (x !== "object")
          return new k("Invalid " + D + " `" + P + "` of type `" + x + "` " + ("supplied to `" + b + "`, expected `object`."));
        for (var R in s) {
          var O = s[R];
          if (typeof O != "function")
            return Q(b, D, P, R, K(O));
          var X = O(C, R, b, D, P + "." + R, r);
          if (X)
            return X;
        }
        return null;
      }
      return Y(p);
    }
    function ie(s) {
      function p(E, T, b, D, P) {
        var C = E[T], x = V(C);
        if (x !== "object")
          return new k("Invalid " + D + " `" + P + "` of type `" + x + "` " + ("supplied to `" + b + "`, expected `object`."));
        var R = t({}, E[T], s);
        for (var O in R) {
          var X = s[O];
          if (n(s, O) && typeof X != "function")
            return Q(b, D, P, O, K(X));
          if (!X)
            return new k(
              "Invalid " + D + " `" + P + "` key `" + O + "` supplied to `" + b + "`.\nBad object: " + JSON.stringify(E[T], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(s), null, "  ")
            );
          var c = X(C, O, b, D, P + "." + O, r);
          if (c)
            return c;
        }
        return null;
      }
      return Y(p);
    }
    function Z(s) {
      switch (typeof s) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !s;
        case "object":
          if (Array.isArray(s))
            return s.every(Z);
          if (s === null || u(s))
            return !0;
          var p = S(s);
          if (p) {
            var E = p.call(s), T;
            if (p !== s.entries) {
              for (; !(T = E.next()).done; )
                if (!Z(T.value))
                  return !1;
            } else
              for (; !(T = E.next()).done; ) {
                var b = T.value;
                if (b && !Z(b[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ce(s, p) {
      return s === "symbol" ? !0 : p ? p["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && p instanceof Symbol : !1;
    }
    function V(s) {
      var p = typeof s;
      return Array.isArray(s) ? "array" : s instanceof RegExp ? "object" : ce(p, s) ? "symbol" : p;
    }
    function K(s) {
      if (typeof s > "u" || s === null)
        return "" + s;
      var p = V(s);
      if (p === "object") {
        if (s instanceof Date)
          return "date";
        if (s instanceof RegExp)
          return "regexp";
      }
      return p;
    }
    function ee(s) {
      var p = K(s);
      switch (p) {
        case "array":
        case "object":
          return "an " + p;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + p;
        default:
          return p;
      }
    }
    function le(s) {
      return !s.constructor || !s.constructor.name ? A : s.constructor.name;
    }
    return _.checkPropTypes = i, _.resetWarningCache = i.resetWarningCache, _.PropTypes = _, _;
  }, Re;
}
var Ne, ot;
function ir() {
  if (ot)
    return Ne;
  ot = 1;
  var e = je();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ne = function() {
    function n(d, u, f, m, y, S) {
      if (S !== e) {
        var A = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw A.name = "Invariant Violation", A;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Ne;
}
if (process.env.NODE_ENV !== "production") {
  var sr = gt(), cr = !0;
  ke.exports = ar()(sr.isElement, cr);
} else
  ke.exports = ir()();
var yt = ke.exports;
function vt(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = vt(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function at() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = vt(e)) && (n && (n += " "), n += t);
  return n;
}
const lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: at,
  default: at
}, Symbol.toStringTag, { value: "Module" })), ur = /* @__PURE__ */ Bt(lr);
var L = {}, oe = {};
Object.defineProperty(oe, "__esModule", {
  value: !0
});
oe.dontSetMe = gr;
oe.findInArray = dr;
oe.int = hr;
oe.isFunction = fr;
oe.isNum = pr;
function dr(e, t) {
  for (let r = 0, n = e.length; r < n; r++)
    if (t.apply(t, [e[r], r, e]))
      return e[r];
}
function fr(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function pr(e) {
  return typeof e == "number" && !isNaN(e);
}
function hr(e) {
  return parseInt(e, 10);
}
function gr(e, t, r) {
  if (e[t])
    return new Error("Invalid prop ".concat(t, " passed to ").concat(r, " - do not set this, set it on the child."));
}
var pe = {};
Object.defineProperty(pe, "__esModule", {
  value: !0
});
pe.browserPrefixToKey = St;
pe.browserPrefixToStyle = mr;
pe.default = void 0;
pe.getPrefix = bt;
const Me = ["Moz", "Webkit", "O", "ms"];
function bt() {
  var e;
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const r = (e = window.document) === null || e === void 0 || (e = e.documentElement) === null || e === void 0 ? void 0 : e.style;
  if (!r || t in r)
    return "";
  for (let n = 0; n < Me.length; n++)
    if (St(t, Me[n]) in r)
      return Me[n];
  return "";
}
function St(e, t) {
  return t ? "".concat(t).concat(yr(e)) : e;
}
function mr(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function yr(e) {
  let t = "", r = !0;
  for (let n = 0; n < e.length; n++)
    r ? (t += e[n].toUpperCase(), r = !1) : e[n] === "-" ? r = !0 : t += e[n];
  return t;
}
pe.default = bt();
Object.defineProperty(L, "__esModule", {
  value: !0
});
L.addClassName = Tt;
L.addEvent = Sr;
L.addUserSelectStyles = Nr;
L.createCSSTransform = xr;
L.createSVGTransform = Or;
L.getTouch = _r;
L.getTouchIdentifier = Rr;
L.getTranslation = qe;
L.innerHeight = Cr;
L.innerWidth = Er;
L.matchesSelector = Pt;
L.matchesSelectorAndParentsTo = br;
L.offsetXYFromParent = Dr;
L.outerHeight = Pr;
L.outerWidth = Tr;
L.removeClassName = Ct;
L.removeEvent = wr;
L.removeUserSelectStyles = Mr;
var G = oe, it = vr(pe);
function wt(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (wt = function(n) {
    return n ? r : t;
  })(e);
}
function vr(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = wt(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e)
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var d = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      d && (d.get || d.set) ? Object.defineProperty(n, a, d) : n[a] = e[a];
    }
  return n.default = e, r && r.set(e, n), n;
}
let we = "";
function Pt(e, t) {
  return we || (we = (0, G.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, G.isFunction)(e[r]);
  })), (0, G.isFunction)(e[we]) ? e[we](t) : !1;
}
function br(e, t, r) {
  let n = e;
  do {
    if (Pt(n, t))
      return !0;
    if (n === r)
      return !1;
    n = n.parentNode;
  } while (n);
  return !1;
}
function Sr(e, t, r, n) {
  if (!e)
    return;
  const i = {
    capture: !0,
    ...n
  };
  e.addEventListener ? e.addEventListener(t, r, i) : e.attachEvent ? e.attachEvent("on" + t, r) : e["on" + t] = r;
}
function wr(e, t, r, n) {
  if (!e)
    return;
  const i = {
    capture: !0,
    ...n
  };
  e.removeEventListener ? e.removeEventListener(t, r, i) : e.detachEvent ? e.detachEvent("on" + t, r) : e["on" + t] = null;
}
function Pr(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, G.int)(r.borderTopWidth), t += (0, G.int)(r.borderBottomWidth), t;
}
function Tr(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, G.int)(r.borderLeftWidth), t += (0, G.int)(r.borderRightWidth), t;
}
function Cr(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, G.int)(r.paddingTop), t -= (0, G.int)(r.paddingBottom), t;
}
function Er(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, G.int)(r.paddingLeft), t -= (0, G.int)(r.paddingRight), t;
}
function Dr(e, t, r) {
  const i = t === t.ownerDocument.body ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), a = (e.clientX + t.scrollLeft - i.left) / r, d = (e.clientY + t.scrollTop - i.top) / r;
  return {
    x: a,
    y: d
  };
}
function xr(e, t) {
  const r = qe(e, t, "px");
  return {
    [(0, it.browserPrefixToKey)("transform", it.default)]: r
  };
}
function Or(e, t) {
  return qe(e, t, "");
}
function qe(e, t, r) {
  let {
    x: n,
    y: i
  } = e, a = "translate(".concat(n).concat(r, ",").concat(i).concat(r, ")");
  if (t) {
    const d = "".concat(typeof t.x == "string" ? t.x : t.x + r), u = "".concat(typeof t.y == "string" ? t.y : t.y + r);
    a = "translate(".concat(d, ", ").concat(u, ")") + a;
  }
  return a;
}
function _r(e, t) {
  return e.targetTouches && (0, G.findInArray)(e.targetTouches, (r) => t === r.identifier) || e.changedTouches && (0, G.findInArray)(e.changedTouches, (r) => t === r.identifier);
}
function Rr(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function Nr(e) {
  if (!e)
    return;
  let t = e.getElementById("react-draggable-style-el");
  t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && Tt(e.body, "react-draggable-transparent-selection");
}
function Mr(e) {
  if (e)
    try {
      if (e.body && Ct(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        const t = (e.defaultView || window).getSelection();
        t && t.type !== "Caret" && t.removeAllRanges();
      }
    } catch {
    }
}
function Tt(e, t) {
  e.classList ? e.classList.add(t) : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) || (e.className += " ".concat(t));
}
function Ct(e, t) {
  e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"), "");
}
var ae = {};
Object.defineProperty(ae, "__esModule", {
  value: !0
});
ae.canDragX = kr;
ae.canDragY = Ir;
ae.createCoreData = Yr;
ae.createDraggableData = Lr;
ae.getBoundPosition = Ar;
ae.getControlPosition = $r;
ae.snapToGrid = Fr;
var B = oe, ge = L;
function Ar(e, t, r) {
  if (!e.props.bounds)
    return [t, r];
  let {
    bounds: n
  } = e.props;
  n = typeof n == "string" ? n : Wr(n);
  const i = Xe(e);
  if (typeof n == "string") {
    const {
      ownerDocument: a
    } = i, d = a.defaultView;
    let u;
    if (n === "parent" ? u = i.parentNode : u = a.querySelector(n), !(u instanceof d.HTMLElement))
      throw new Error('Bounds selector "' + n + '" could not find an element.');
    const f = u, m = d.getComputedStyle(i), y = d.getComputedStyle(f);
    n = {
      left: -i.offsetLeft + (0, B.int)(y.paddingLeft) + (0, B.int)(m.marginLeft),
      top: -i.offsetTop + (0, B.int)(y.paddingTop) + (0, B.int)(m.marginTop),
      right: (0, ge.innerWidth)(f) - (0, ge.outerWidth)(i) - i.offsetLeft + (0, B.int)(y.paddingRight) - (0, B.int)(m.marginRight),
      bottom: (0, ge.innerHeight)(f) - (0, ge.outerHeight)(i) - i.offsetTop + (0, B.int)(y.paddingBottom) - (0, B.int)(m.marginBottom)
    };
  }
  return (0, B.isNum)(n.right) && (t = Math.min(t, n.right)), (0, B.isNum)(n.bottom) && (r = Math.min(r, n.bottom)), (0, B.isNum)(n.left) && (t = Math.max(t, n.left)), (0, B.isNum)(n.top) && (r = Math.max(r, n.top)), [t, r];
}
function Fr(e, t, r) {
  const n = Math.round(t / e[0]) * e[0], i = Math.round(r / e[1]) * e[1];
  return [n, i];
}
function kr(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function Ir(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function $r(e, t, r) {
  const n = typeof t == "number" ? (0, ge.getTouch)(e, t) : null;
  if (typeof t == "number" && !n)
    return null;
  const i = Xe(r), a = r.props.offsetParent || i.offsetParent || i.ownerDocument.body;
  return (0, ge.offsetXYFromParent)(n || e, a, r.props.scale);
}
function Yr(e, t, r) {
  const n = !(0, B.isNum)(e.lastX), i = Xe(e);
  return n ? {
    node: i,
    deltaX: 0,
    deltaY: 0,
    lastX: t,
    lastY: r,
    x: t,
    y: r
  } : {
    node: i,
    deltaX: t - e.lastX,
    deltaY: r - e.lastY,
    lastX: e.lastX,
    lastY: e.lastY,
    x: t,
    y: r
  };
}
function Lr(e, t) {
  const r = e.props.scale;
  return {
    node: t.node,
    x: e.state.x + t.deltaX / r,
    y: e.state.y + t.deltaY / r,
    deltaX: t.deltaX / r,
    deltaY: t.deltaY / r,
    lastX: e.state.x,
    lastY: e.state.y
  };
}
function Wr(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function Xe(e) {
  const t = e.findDOMNode();
  if (!t)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return t;
}
var Te = {}, Ce = {};
Object.defineProperty(Ce, "__esModule", {
  value: !0
});
Ce.default = jr;
function jr() {
}
Object.defineProperty(Te, "__esModule", {
  value: !0
});
Te.default = void 0;
var Ae = Xr(lt), z = Ue(yt), qr = Ue(ft), j = L, ue = ae, Fe = oe, ye = Ue(Ce);
function Ue(e) {
  return e && e.__esModule ? e : { default: e };
}
function Et(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Et = function(n) {
    return n ? r : t;
  })(e);
}
function Xr(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Et(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e)
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var d = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      d && (d.get || d.set) ? Object.defineProperty(n, a, d) : n[a] = e[a];
    }
  return n.default = e, r && r.set(e, n), n;
}
function U(e, t, r) {
  return t = Ur(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ur(e) {
  var t = Vr(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function Vr(e, t) {
  if (typeof e != "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
const te = {
  touch: {
    start: "touchstart",
    move: "touchmove",
    stop: "touchend"
  },
  mouse: {
    start: "mousedown",
    move: "mousemove",
    stop: "mouseup"
  }
};
let de = te.mouse, Ee = class extends Ae.Component {
  constructor() {
    super(...arguments), U(this, "dragging", !1), U(this, "lastX", NaN), U(this, "lastY", NaN), U(this, "touchIdentifier", null), U(this, "mounted", !1), U(this, "handleDragStart", (t) => {
      if (this.props.onMouseDown(t), !this.props.allowAnyClick && typeof t.button == "number" && t.button !== 0)
        return !1;
      const r = this.findDOMNode();
      if (!r || !r.ownerDocument || !r.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      const {
        ownerDocument: n
      } = r;
      if (this.props.disabled || !(t.target instanceof n.defaultView.Node) || this.props.handle && !(0, j.matchesSelectorAndParentsTo)(t.target, this.props.handle, r) || this.props.cancel && (0, j.matchesSelectorAndParentsTo)(t.target, this.props.cancel, r))
        return;
      t.type === "touchstart" && t.preventDefault();
      const i = (0, j.getTouchIdentifier)(t);
      this.touchIdentifier = i;
      const a = (0, ue.getControlPosition)(t, i, this);
      if (a == null)
        return;
      const {
        x: d,
        y: u
      } = a, f = (0, ue.createCoreData)(this, d, u);
      (0, ye.default)("DraggableCore: handleDragStart: %j", f), (0, ye.default)("calling", this.props.onStart), !(this.props.onStart(t, f) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, j.addUserSelectStyles)(n), this.dragging = !0, this.lastX = d, this.lastY = u, (0, j.addEvent)(n, de.move, this.handleDrag), (0, j.addEvent)(n, de.stop, this.handleDragStop));
    }), U(this, "handleDrag", (t) => {
      const r = (0, ue.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: i
      } = r;
      if (Array.isArray(this.props.grid)) {
        let u = n - this.lastX, f = i - this.lastY;
        if ([u, f] = (0, ue.snapToGrid)(this.props.grid, u, f), !u && !f)
          return;
        n = this.lastX + u, i = this.lastY + f;
      }
      const a = (0, ue.createCoreData)(this, n, i);
      if ((0, ye.default)("DraggableCore: handleDrag: %j", a), this.props.onDrag(t, a) === !1 || this.mounted === !1) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const f = document.createEvent("MouseEvents");
          f.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(f);
        }
        return;
      }
      this.lastX = n, this.lastY = i;
    }), U(this, "handleDragStop", (t) => {
      if (!this.dragging)
        return;
      const r = (0, ue.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: i
      } = r;
      if (Array.isArray(this.props.grid)) {
        let f = n - this.lastX || 0, m = i - this.lastY || 0;
        [f, m] = (0, ue.snapToGrid)(this.props.grid, f, m), n = this.lastX + f, i = this.lastY + m;
      }
      const a = (0, ue.createCoreData)(this, n, i);
      if (this.props.onStop(t, a) === !1 || this.mounted === !1)
        return !1;
      const u = this.findDOMNode();
      u && this.props.enableUserSelectHack && (0, j.removeUserSelectStyles)(u.ownerDocument), (0, ye.default)("DraggableCore: handleDragStop: %j", a), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, u && ((0, ye.default)("DraggableCore: Removing handlers"), (0, j.removeEvent)(u.ownerDocument, de.move, this.handleDrag), (0, j.removeEvent)(u.ownerDocument, de.stop, this.handleDragStop));
    }), U(this, "onMouseDown", (t) => (de = te.mouse, this.handleDragStart(t))), U(this, "onMouseUp", (t) => (de = te.mouse, this.handleDragStop(t))), U(this, "onTouchStart", (t) => (de = te.touch, this.handleDragStart(t))), U(this, "onTouchEnd", (t) => (de = te.touch, this.handleDragStop(t)));
  }
  componentDidMount() {
    this.mounted = !0;
    const t = this.findDOMNode();
    t && (0, j.addEvent)(t, te.touch.start, this.onTouchStart, {
      passive: !1
    });
  }
  componentWillUnmount() {
    this.mounted = !1;
    const t = this.findDOMNode();
    if (t) {
      const {
        ownerDocument: r
      } = t;
      (0, j.removeEvent)(r, te.mouse.move, this.handleDrag), (0, j.removeEvent)(r, te.touch.move, this.handleDrag), (0, j.removeEvent)(r, te.mouse.stop, this.handleDragStop), (0, j.removeEvent)(r, te.touch.stop, this.handleDragStop), (0, j.removeEvent)(t, te.touch.start, this.onTouchStart, {
        passive: !1
      }), this.props.enableUserSelectHack && (0, j.removeUserSelectStyles)(r);
    }
  }
  // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
  // the underlying DOM node ourselves. See the README for more information.
  findDOMNode() {
    var t, r;
    return (t = this.props) !== null && t !== void 0 && t.nodeRef ? (r = this.props) === null || r === void 0 || (r = r.nodeRef) === null || r === void 0 ? void 0 : r.current : qr.default.findDOMNode(this);
  }
  render() {
    return /* @__PURE__ */ Ae.cloneElement(Ae.Children.only(this.props.children), {
      // Note: mouseMove handler is attached to document so it will still function
      // when the user drags quickly and leaves the bounds of the element.
      onMouseDown: this.onMouseDown,
      onMouseUp: this.onMouseUp,
      // onTouchStart is added on `componentDidMount` so they can be added with
      // {passive: false}, which allows it to cancel. See
      // https://developers.google.com/web/updates/2017/01/scrolling-intervention
      onTouchEnd: this.onTouchEnd
    });
  }
};
Te.default = Ee;
U(Ee, "displayName", "DraggableCore");
U(Ee, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: z.default.bool,
  children: z.default.node.isRequired,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: z.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: z.default.bool,
  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function(e, t) {
    if (e[t] && e[t].nodeType !== 1)
      throw new Error("Draggable's offsetParent must be a DOM Node.");
  },
  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: z.default.arrayOf(z.default.number),
  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: z.default.string,
  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: z.default.string,
  /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
   * Unfortunately, in order for <Draggable> to work properly, we need raw access
   * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
   * as in this example:
   *
   * function MyComponent() {
   *   const nodeRef = React.useRef(null);
   *   return (
   *     <Draggable nodeRef={nodeRef}>
   *       <div ref={nodeRef}>Example Target</div>
   *     </Draggable>
   *   );
   * }
   *
   * This can be used for arbitrarily nested components, so long as the ref ends up
   * pointing to the actual child DOM node and not a custom component.
   */
  nodeRef: z.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: z.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: z.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: z.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: z.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: z.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: Fe.dontSetMe,
  style: Fe.dontSetMe,
  transform: Fe.dontSetMe
});
U(Ee, "defaultProps", {
  allowAnyClick: !1,
  // by default only accept left click
  disabled: !1,
  enableUserSelectHack: !0,
  onStart: function() {
  },
  onDrag: function() {
  },
  onStop: function() {
  },
  onMouseDown: function() {
  },
  scale: 1
});
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "DraggableCore", {
    enumerable: !0,
    get: function() {
      return f.default;
    }
  }), e.default = void 0;
  var t = A(lt), r = y(yt), n = y(ft), i = y(ur), a = L, d = ae, u = oe, f = y(Te), m = y(Ce);
  function y(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function S(v) {
    if (typeof WeakMap != "function")
      return null;
    var h = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap();
    return (S = function(o) {
      return o ? g : h;
    })(v);
  }
  function A(v, h) {
    if (!h && v && v.__esModule)
      return v;
    if (v === null || typeof v != "object" && typeof v != "function")
      return { default: v };
    var g = S(h);
    if (g && g.has(v))
      return g.get(v);
    var o = {}, F = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var w in v)
      if (w !== "default" && Object.prototype.hasOwnProperty.call(v, w)) {
        var q = F ? Object.getOwnPropertyDescriptor(v, w) : null;
        q && (q.get || q.set) ? Object.defineProperty(o, w, q) : o[w] = v[w];
      }
    return o.default = v, g && g.set(v, o), o;
  }
  function _() {
    return _ = Object.assign ? Object.assign.bind() : function(v) {
      for (var h = 1; h < arguments.length; h++) {
        var g = arguments[h];
        for (var o in g)
          Object.prototype.hasOwnProperty.call(g, o) && (v[o] = g[o]);
      }
      return v;
    }, _.apply(this, arguments);
  }
  function $(v, h, g) {
    return h = k(h), h in v ? Object.defineProperty(v, h, { value: g, enumerable: !0, configurable: !0, writable: !0 }) : v[h] = g, v;
  }
  function k(v) {
    var h = Y(v, "string");
    return typeof h == "symbol" ? h : String(h);
  }
  function Y(v, h) {
    if (typeof v != "object" || v === null)
      return v;
    var g = v[Symbol.toPrimitive];
    if (g !== void 0) {
      var o = g.call(v, h || "default");
      if (typeof o != "object")
        return o;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (h === "string" ? String : Number)(v);
  }
  class W extends t.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(h, g) {
      let {
        position: o
      } = h, {
        prevPropsPosition: F
      } = g;
      return o && (!F || o.x !== F.x || o.y !== F.y) ? ((0, m.default)("Draggable: getDerivedStateFromProps %j", {
        position: o,
        prevPropsPosition: F
      }), {
        x: o.x,
        y: o.y,
        prevPropsPosition: {
          ...o
        }
      }) : null;
    }
    constructor(h) {
      super(h), $(this, "onDragStart", (g, o) => {
        if ((0, m.default)("Draggable: onDragStart: %j", o), this.props.onStart(g, (0, d.createDraggableData)(this, o)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), $(this, "onDrag", (g, o) => {
        if (!this.state.dragging)
          return !1;
        (0, m.default)("Draggable: onDrag: %j", o);
        const F = (0, d.createDraggableData)(this, o), w = {
          x: F.x,
          y: F.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: J,
            y: H
          } = w;
          w.x += this.state.slackX, w.y += this.state.slackY;
          const [Q, se] = (0, d.getBoundPosition)(this, w.x, w.y);
          w.x = Q, w.y = se, w.slackX = this.state.slackX + (J - w.x), w.slackY = this.state.slackY + (H - w.y), F.x = w.x, F.y = w.y, F.deltaX = w.x - this.state.x, F.deltaY = w.y - this.state.y;
        }
        if (this.props.onDrag(g, F) === !1)
          return !1;
        this.setState(w);
      }), $(this, "onDragStop", (g, o) => {
        if (!this.state.dragging || this.props.onStop(g, (0, d.createDraggableData)(this, o)) === !1)
          return !1;
        (0, m.default)("Draggable: onDragStop: %j", o);
        const w = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: J,
            y: H
          } = this.props.position;
          w.x = J, w.y = H;
        }
        this.setState(w);
      }), this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: h.position ? h.position.x : h.defaultPosition.x,
        y: h.position ? h.position.y : h.defaultPosition.y,
        prevPropsPosition: {
          ...h.position
        },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, h.position && !(h.onDrag || h.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
    }
    componentDidMount() {
      typeof window.SVGElement < "u" && this.findDOMNode() instanceof window.SVGElement && this.setState({
        isElementSVG: !0
      });
    }
    componentWillUnmount() {
      this.setState({
        dragging: !1
      });
    }
    // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.
    findDOMNode() {
      var h, g;
      return (h = (g = this.props) === null || g === void 0 || (g = g.nodeRef) === null || g === void 0 ? void 0 : g.current) !== null && h !== void 0 ? h : n.default.findDOMNode(this);
    }
    render() {
      const {
        axis: h,
        bounds: g,
        children: o,
        defaultPosition: F,
        defaultClassName: w,
        defaultClassNameDragging: q,
        defaultClassNameDragged: J,
        position: H,
        positionOffset: Q,
        scale: se,
        ...ie
      } = this.props;
      let Z = {}, ce = null;
      const K = !!!H || this.state.dragging, ee = H || F, le = {
        // Set left if horizontal drag is enabled
        x: (0, d.canDragX)(this) && K ? this.state.x : ee.x,
        // Set top if vertical drag is enabled
        y: (0, d.canDragY)(this) && K ? this.state.y : ee.y
      };
      this.state.isElementSVG ? ce = (0, a.createSVGTransform)(le, Q) : Z = (0, a.createCSSTransform)(le, Q);
      const s = (0, i.default)(o.props.className || "", w, {
        [q]: this.state.dragging,
        [J]: this.state.dragged
      });
      return /* @__PURE__ */ t.createElement(f.default, _({}, ie, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ t.cloneElement(t.Children.only(o), {
        className: s,
        style: {
          ...o.props.style,
          ...Z
        },
        transform: ce
      }));
    }
  }
  e.default = W, $(W, "displayName", "Draggable"), $(W, "propTypes", {
    // Accepts all props <DraggableCore> accepts.
    ...f.default.propTypes,
    /**
     * `axis` determines which axis the draggable can move.
     *
     *  Note that all callbacks will still return data as normal. This only
     *  controls flushing to the DOM.
     *
     * 'both' allows movement horizontally and vertically.
     * 'x' limits movement to horizontal axis.
     * 'y' limits movement to vertical axis.
     * 'none' limits all movement.
     *
     * Defaults to 'both'.
     */
    axis: r.default.oneOf(["both", "x", "y", "none"]),
    /**
     * `bounds` determines the range of movement available to the element.
     * Available values are:
     *
     * 'parent' restricts movement within the Draggable's parent node.
     *
     * Alternatively, pass an object with the following properties, all of which are optional:
     *
     * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
     *
     * All values are in px.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *         return (
     *            <Draggable bounds={{right: 300, bottom: 300}}>
     *              <div>Content</div>
     *           </Draggable>
     *         );
     *       }
     *   });
     * ```
     */
    bounds: r.default.oneOfType([r.default.shape({
      left: r.default.number,
      right: r.default.number,
      top: r.default.number,
      bottom: r.default.number
    }), r.default.string, r.default.oneOf([!1])]),
    defaultClassName: r.default.string,
    defaultClassNameDragging: r.default.string,
    defaultClassNameDragged: r.default.string,
    /**
     * `defaultPosition` specifies the x and y that the dragged item should start at
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable defaultPosition={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    defaultPosition: r.default.shape({
      x: r.default.number,
      y: r.default.number
    }),
    positionOffset: r.default.shape({
      x: r.default.oneOfType([r.default.number, r.default.string]),
      y: r.default.oneOfType([r.default.number, r.default.string])
    }),
    /**
     * `position`, if present, defines the current position of the element.
     *
     *  This is similar to how form elements in React work - if no `position` is supplied, the component
     *  is uncontrolled.
     *
     * Example:
     *
     * ```jsx
     *      let App = React.createClass({
     *          render: function () {
     *              return (
     *                  <Draggable position={{x: 25, y: 25}}>
     *                      <div>I start with transformX: 25px and transformY: 25px;</div>
     *                  </Draggable>
     *              );
     *          }
     *      });
     * ```
     */
    position: r.default.shape({
      x: r.default.number,
      y: r.default.number
    }),
    /**
     * These properties should be defined on the child, not here.
     */
    className: u.dontSetMe,
    style: u.dontSetMe,
    transform: u.dontSetMe
  }), $(W, "defaultProps", {
    ...f.default.defaultProps,
    axis: "both",
    bounds: !1,
    defaultClassName: "react-draggable",
    defaultClassNameDragging: "react-draggable-dragging",
    defaultClassNameDragged: "react-draggable-dragged",
    defaultPosition: {
      x: 0,
      y: 0
    },
    scale: 1
  });
})(ht);
const {
  default: Dt,
  DraggableCore: zr
} = ht;
Pe.exports = Dt;
Pe.exports.default = Dt;
Pe.exports.DraggableCore = zr;
var Br = Pe.exports;
const Gr = /* @__PURE__ */ Gt(Br);
function Hr(e) {
  return /* @__PURE__ */ l(
    Gr,
    {
      handle: "#draggable-dialog-title",
      cancel: '[class*="MuiDialogContent-root"]',
      children: /* @__PURE__ */ l(Nt, { ...e })
    }
  );
}
const Kr = ({ columns: e, isOpen: t, onClose: r, setFilter: n, defaultFilter: i = {} }) => {
  const a = (_) => {
    _.stopPropagation();
  };
  var { getFieldManager: d, getFormData: u } = Ie(i, () => {
  }, "edit");
  const f = () => {
    n({});
  }, m = () => {
    var _ = u();
    n && n(_);
  }, y = () => {
    r();
  }, S = (_) => {
    _.keyCode === 27 && y();
  }, A = zt(e);
  return /* @__PURE__ */ l("div", { className: "grid-filter-container", children: /* @__PURE__ */ ne(
    Rt,
    {
      open: t,
      onClick: a,
      PaperComponent: Hr,
      onKeyDown: S,
      children: [
        /* @__PURE__ */ ne("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ l("div", { className: "grid-header-text-container", children: /* @__PURE__ */ l("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ l("div", { className: "grid-header-icon-container", onClick: y, children: /* @__PURE__ */ l(ve, { title: "close", arrow: !0, children: /* @__PURE__ */ l(qt, { className: "filter-cancel-icon" }) }) })
        ] }),
        /* @__PURE__ */ l("span", { className: "filter-header-border" }),
        /* @__PURE__ */ l("div", { className: "grid-filter-content", children: /* @__PURE__ */ l(Le.Provider, { value: d, children: /* @__PURE__ */ l(
          ut,
          {
            context: { formData: {} },
            layout: {
              type: "form",
              formLayout: {
                fields: A,
                options: {
                  columns: 2
                }
              },
              Renderer: Ht
            }
          }
        ) }) }),
        /* @__PURE__ */ ne("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ l(he, { className: "filter-reset-btn", disableRipple: !0, onClick: f, children: "Reset" }),
          /* @__PURE__ */ l(he, { className: "filter-button", disableRipple: !0, onClick: m, children: "Filter" })
        ] })
      ]
    }
  ) });
};
function Jr(e) {
  const { columns: t, children: r, EmptyChild: n, store: i, onRowClick: a, quickSearch: d } = e, [u, f] = re(null), [m, y] = re({}), [S, A] = re({}), _ = n || Wt, [$, k] = re(!1), [Y, W] = re("standard"), [v, h] = re(!1), g = e.pageSize ? e.pageSize : 15;
  var o = g instanceof Array ? g : [g], F = g instanceof Array ? g[0] : g;
  const [w, q] = re({
    pageNo: 0,
    pageSize: F
  }), J = (c, I) => {
    q({ ...w, pageNo: I }), Q({ ...w, pageSize: I });
  }, [H, Q] = re({}), [se, ie] = re(null);
  Ye(() => {
    ce();
  }, [H, m, S]);
  const Z = Yt(t), ce = () => {
    const c = { page: w, filter: m, sortOrder: S, total: !0 };
    if (i)
      try {
        i.query(c).then((I) => {
          ie(I.result), f(I.total);
        }).catch((I) => {
          console.log("error while fetching");
          var fe = I.response ? I.response : I;
          console.log(fe), K();
        });
      } catch (I) {
        console.log(I), V();
      }
    else
      console.error("Store is not provided for the Grid"), V();
  }, V = () => {
    ie([]), f(0);
  }, K = () => {
    ie(void 0), f(0);
  }, ee = (c) => {
    W(c);
  }, le = () => {
    k(!$);
  }, s = () => Y === "compact" ? { padding: "3px" } : Y === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, p = () => Y === "compact" ? { padding: "3px" } : Y === "comfortable" ? { padding: "15px", fontSize: "18px" } : { padding: "7px" }, E = () => {
    var c;
    switch (Y) {
      case "compact":
        c = /* @__PURE__ */ l(Ge, { className: "density-icon" });
        break;
      case "comfortable":
        c = /* @__PURE__ */ l(He, { className: "density-icon" });
        break;
      default:
        c = /* @__PURE__ */ l(Be, { className: "grid-button-icon" });
        break;
    }
    return c;
  }, T = (c) => {
    const I = c.target.value;
    y(I ? { [d]: I } : {});
  }, b = (c) => {
    c && Object.keys(c).length > 0 ? y(c) : y({});
  }, D = (c) => {
    a && a(c);
  }, P = (c) => {
    const I = parseInt(c.target.value, 10);
    q({ ...w, pageSize: I });
  }, C = (c) => {
    A(c);
  }, x = () => {
    console.log("Export Clicked");
  }, R = 200, O = !!g;
  return /* @__PURE__ */ l("div", { children: /* @__PURE__ */ ne("div", { children: [
    r,
    /* @__PURE__ */ ne("div", { className: "grid-header", children: [
      /* @__PURE__ */ l("div", { className: "grid-header-filter", children: !!d && /* @__PURE__ */ l(
        Mt,
        {
          sx: { width: R },
          type: "text",
          value: m.quickSearch,
          onChange: T,
          style: { border: "0px" },
          size: "small",
          placeholder: "Name",
          InputProps: {
            endAdornment: /* @__PURE__ */ l(At, { position: "end", children: /* @__PURE__ */ l(Lt, { className: "card-filter-icon" }) })
          }
        }
      ) }),
      /* @__PURE__ */ l(Ft, { onClickAway: () => {
        k(!1);
      }, children: /* @__PURE__ */ ne("div", { className: "grid-header-button", onClick: le, children: [
        /* @__PURE__ */ l(ve, { title: "Density", placement: "top", children: /* @__PURE__ */ l(he, { className: "grid-btn", disableRipple: !0, children: E() }) }),
        $ && /* @__PURE__ */ l("div", { className: "density-dropdown-content", children: /* @__PURE__ */ ne("ul", { children: [
          /* @__PURE__ */ ne("li", { onClick: () => ee("standard"), children: [
            /* @__PURE__ */ l(Be, { className: "density-icon" }),
            /* @__PURE__ */ l("span", { className: "drodown-content-text", children: "Standard" })
          ] }),
          /* @__PURE__ */ ne("li", { onClick: () => ee("compact"), children: [
            /* @__PURE__ */ l(Ge, { className: "density-icon" }),
            /* @__PURE__ */ l("span", { className: "drodown-content-text", children: "Compact" })
          ] }),
          /* @__PURE__ */ ne("li", { onClick: () => ee("comfortable"), children: [
            /* @__PURE__ */ l(He, { className: "density-icon" }),
            /* @__PURE__ */ l("span", { className: "drodown-content-text", children: "Comfortable" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ ne("div", { className: "grid-header-button", children: [
        /* @__PURE__ */ l(ve, { title: "Filter", placement: "top", children: /* @__PURE__ */ l(he, { className: "grid-btn", disableRipple: !0, onClick: () => h(!0), children: /* @__PURE__ */ l(Xt, { className: "grid-button-icon" }) }) }),
        /* @__PURE__ */ l(
          Kr,
          {
            columns: t,
            setFilter: b,
            defaultFilter: m,
            isOpen: v,
            onClose: () => h(!1)
          }
        )
      ] }),
      /* @__PURE__ */ l("div", { className: "grid-header-button", onClick: x, children: /* @__PURE__ */ l(ve, { title: "Export", placement: "top", children: /* @__PURE__ */ l(he, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ l(Ut, { className: "grid-button-icon" }) }) }) }),
      e.onNewClick ? /* @__PURE__ */ l("div", { className: "grid-header-button", onClick: () => {
        e.onNewClick();
      }, children: /* @__PURE__ */ l(ve, { title: "New", placement: "top", children: /* @__PURE__ */ l(he, { className: "grid-btn", disableRipple: !0, children: /* @__PURE__ */ l(Vt, { className: "grid-button-icon" }) }) }) }) : /* @__PURE__ */ l($e, {})
    ] }),
    /* @__PURE__ */ l(
      jt,
      {
        columnDefs: Z,
        EmptyChild: _,
        rowData: se,
        onRowClick: D,
        onRowStyle: s,
        onHeaderStyle: p,
        onSortColumn: C
      }
    ),
    /* @__PURE__ */ l("div", { className: "grid-header", children: /* @__PURE__ */ l("div", { className: "grid-filter", children: O && /* @__PURE__ */ l(
      kt,
      {
        component: "div",
        count: u || 0,
        page: w.pageNo,
        onPageChange: J,
        rowsPerPage: w.pageSize,
        rowsPerPageOptions: o || [],
        onRowsPerPageChange: P
      }
    ) }) })
  ] }) });
}
const Qr = me(function(t, r) {
  const n = t.layout, [i, a] = re(n.fields), d = n.pagination ? n.pagination : [15], u = ze(We), f = ze(dt);
  var m = n.storeOptions || {}, y = {};
  Jt(y, m, f);
  const S = u.getGridStore(y);
  Ye(() => {
    m.hasLayout && S.queryLayout({}).then(($) => {
      a($.columns);
    });
  }, []), be(r, () => ({
    applyFilter() {
    }
  }), []);
  const { onClick: A, onNewClick: _ } = Kt(n.actionOptions, f);
  return /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l(
    Jr,
    {
      columns: i,
      store: S,
      pageSize: d,
      onRowClick: A,
      onNewClick: _,
      quickSearch: n.quickSearch
    }
  ) });
}), xt = Qr, Zr = (e) => {
  const { layout: t, context: r } = e;
  var n = t.Container || Qt;
  return /* @__PURE__ */ l(pt, { fallback: /* @__PURE__ */ l("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ l(n, { ...t, children: ((a) => /* @__PURE__ */ l(
    xt,
    {
      context: r,
      layout: a
    }
  ))(t.tableLayout) }) });
}, en = (e) => {
  const { layout: t } = e;
  switch (t.type) {
    case "form":
      return /* @__PURE__ */ l(ut, { ...e });
    case "view":
      return /* @__PURE__ */ l(er, { ...e });
    case "grid":
      return /* @__PURE__ */ l(Zr, { ...e });
    case "chart":
      return /* @__PURE__ */ l($t, { ...e });
    default:
      return /* @__PURE__ */ l(Zt, { ...e });
  }
};
function tn(e, t) {
  var r = e || 1, n = t;
  return {
    w: r,
    h: n
  };
}
const Ot = (e) => {
  const { layout: t, context: r } = e, n = t.sections;
  function i(a, d, u) {
    const { w: f, h: m } = tn(a.width, a.height);
    return /* @__PURE__ */ l(It, { sx: { width: f, height: m }, children: /* @__PURE__ */ l("div", { className: "section-container", children: /* @__PURE__ */ l(
      en,
      {
        layout: a,
        context: d
      }
    ) }) }, (a.name || "tab") + u);
  }
  return /* @__PURE__ */ l("div", { style: { display: "flex", flexWrap: "wrap" }, children: n.map((a, d) => i(a, r, d)) });
}, st = me(function(t, r) {
  const { layout: n } = t;
  be(r, () => ({
    resetFilter() {
    }
  }), []);
  const i = {}, a = n.tabs;
  return /* @__PURE__ */ l("div", { children: a.map((d, u) => /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l(
    Ot,
    {
      layout: d,
      context: i
    }
  ) }, d.name + u)) });
}), rn = (e) => {
  switch (e) {
    case "formEdit":
      return "edit";
    case "formNew":
      return "new";
    case "formView":
      return "view";
    default:
      return "edit";
  }
}, ct = me(function(t, r) {
  var y;
  const n = t.data || {}, { layout: i } = t;
  var { getFieldManager: a, getFormData: d, isFormValid: u } = Ie(n, (y = t.callbacks) == null ? void 0 : y.onFormValidChange, rn(t.mode));
  be(r, () => ({
    getData() {
      return d();
    },
    isValid() {
      return u();
    }
  }), []);
  const f = { formData: n }, m = i.tabs;
  return /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l(Le.Provider, { value: a, children: m.map((S, A) => /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l(
    Ot,
    {
      layout: S,
      context: f
    }
  ) }, S.name + A)) }) });
}), nn = (e) => {
  switch (e) {
    case "grid":
      return st;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), ct;
    case "formEdit":
    case "formNew":
    case "formView":
      return ct;
    default:
      return st;
  }
}, Rn = me(function(t, r) {
  const [n, i] = re(t.layout), a = t.mode ? t.mode : n.type ? n.type : "grid", d = t.layoutParams || {}, u = nn(a), f = _t(0);
  return Ye(() => {
    i(t.layout), f.current < 999999 ? f.current++ : f.current = 0;
  }, [t.layout]), /* @__PURE__ */ l(pt, { fallback: /* @__PURE__ */ l("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ l(We.Provider, { value: t.storeFactory, children: /* @__PURE__ */ l(dt.Provider, { value: d, children: /* @__PURE__ */ l(u, { ...t, ref: (m) => {
    r && (r.current = m);
  } }, f.current) }) }) });
});
export {
  Rn as F,
  xt as G,
  xn as P,
  Zr as S,
  Ot as T,
  Jr as a,
  On as b,
  Kr as c,
  en as d,
  st as e,
  ct as f
};
