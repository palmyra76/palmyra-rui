import { jsx as J, jsxs as Se } from "react/jsx-runtime";
import { Dialog as ct, DialogTitle as lt, Button as Ie, Paper as ft } from "@mui/material";
import { Close as dt } from "@mui/icons-material";
import { convertToField as pt } from "../../base/GridFieldConverter.js";
import ht from "../../../layout/flexiLayout/SectionRendererEditForm.js";
import { createFormData as gt } from "../../../form/PalmyraFormManager.js";
import { a as yt, g as mt } from "../../../../_commonjsHelpers-c5d32002.js";
import ze from "react";
import Ge from "react-dom";
var ye = { exports: {} }, Ke = {}, Re = { exports: {} }, he = { exports: {} }, C = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function vt() {
  if (We)
    return C;
  We = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, y = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, P = e ? Symbol.for("react.suspense") : 60113, Y = e ? Symbol.for("react.suspense_list") : 60120, N = e ? Symbol.for("react.memo") : 60115, I = e ? Symbol.for("react.lazy") : 60116, A = e ? Symbol.for("react.block") : 60121, W = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, g = e ? Symbol.for("react.scope") : 60119;
  function f(o) {
    if (typeof o == "object" && o !== null) {
      var M = o.$$typeof;
      switch (M) {
        case t:
          switch (o = o.type, o) {
            case h:
            case y:
            case n:
            case i:
            case s:
            case P:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case c:
                case m:
                case I:
                case N:
                case d:
                  return o;
                default:
                  return M;
              }
          }
        case r:
          return M;
      }
    }
  }
  function p(o) {
    return f(o) === y;
  }
  return C.AsyncMode = h, C.ConcurrentMode = y, C.ContextConsumer = c, C.ContextProvider = d, C.Element = t, C.ForwardRef = m, C.Fragment = n, C.Lazy = I, C.Memo = N, C.Portal = r, C.Profiler = i, C.StrictMode = s, C.Suspense = P, C.isAsyncMode = function(o) {
    return p(o) || f(o) === h;
  }, C.isConcurrentMode = p, C.isContextConsumer = function(o) {
    return f(o) === c;
  }, C.isContextProvider = function(o) {
    return f(o) === d;
  }, C.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === t;
  }, C.isForwardRef = function(o) {
    return f(o) === m;
  }, C.isFragment = function(o) {
    return f(o) === n;
  }, C.isLazy = function(o) {
    return f(o) === I;
  }, C.isMemo = function(o) {
    return f(o) === N;
  }, C.isPortal = function(o) {
    return f(o) === r;
  }, C.isProfiler = function(o) {
    return f(o) === i;
  }, C.isStrictMode = function(o) {
    return f(o) === s;
  }, C.isSuspense = function(o) {
    return f(o) === P;
  }, C.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === n || o === y || o === i || o === s || o === P || o === Y || typeof o == "object" && o !== null && (o.$$typeof === I || o.$$typeof === N || o.$$typeof === d || o.$$typeof === c || o.$$typeof === m || o.$$typeof === W || o.$$typeof === j || o.$$typeof === g || o.$$typeof === A);
  }, C.typeOf = f, C;
}
var x = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function bt() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, y = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, P = e ? Symbol.for("react.suspense") : 60113, Y = e ? Symbol.for("react.suspense_list") : 60120, N = e ? Symbol.for("react.memo") : 60115, I = e ? Symbol.for("react.lazy") : 60116, A = e ? Symbol.for("react.block") : 60121, W = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, g = e ? Symbol.for("react.scope") : 60119;
    function f(u) {
      return typeof u == "string" || typeof u == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      u === n || u === y || u === i || u === s || u === P || u === Y || typeof u == "object" && u !== null && (u.$$typeof === I || u.$$typeof === N || u.$$typeof === d || u.$$typeof === c || u.$$typeof === m || u.$$typeof === W || u.$$typeof === j || u.$$typeof === g || u.$$typeof === A);
    }
    function p(u) {
      if (typeof u == "object" && u !== null) {
        var K = u.$$typeof;
        switch (K) {
          case t:
            var pe = u.type;
            switch (pe) {
              case h:
              case y:
              case n:
              case i:
              case s:
              case P:
                return pe;
              default:
                var Ye = pe && pe.$$typeof;
                switch (Ye) {
                  case c:
                  case m:
                  case I:
                  case N:
                  case d:
                    return Ye;
                  default:
                    return K;
                }
            }
          case r:
            return K;
        }
      }
    }
    var o = h, M = y, w = c, B = d, ee = t, z = m, te = n, se = I, fe = N, re = r, ue = i, V = s, G = P, ae = !1;
    function ce(u) {
      return ae || (ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), a(u) || p(u) === h;
    }
    function a(u) {
      return p(u) === y;
    }
    function l(u) {
      return p(u) === c;
    }
    function E(u) {
      return p(u) === d;
    }
    function S(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }
    function v(u) {
      return p(u) === m;
    }
    function D(u) {
      return p(u) === n;
    }
    function b(u) {
      return p(u) === I;
    }
    function T(u) {
      return p(u) === N;
    }
    function _(u) {
      return p(u) === r;
    }
    function R(u) {
      return p(u) === i;
    }
    function O(u) {
      return p(u) === s;
    }
    function q(u) {
      return p(u) === P;
    }
    x.AsyncMode = o, x.ConcurrentMode = M, x.ContextConsumer = w, x.ContextProvider = B, x.Element = ee, x.ForwardRef = z, x.Fragment = te, x.Lazy = se, x.Memo = fe, x.Portal = re, x.Profiler = ue, x.StrictMode = V, x.Suspense = G, x.isAsyncMode = ce, x.isConcurrentMode = a, x.isContextConsumer = l, x.isContextProvider = E, x.isElement = S, x.isForwardRef = v, x.isFragment = D, x.isLazy = b, x.isMemo = T, x.isPortal = _, x.isProfiler = R, x.isStrictMode = O, x.isSuspense = q, x.isValidElementType = f, x.typeOf = p;
  }()), x;
}
var Fe;
function Je() {
  return Fe || (Fe = 1, process.env.NODE_ENV === "production" ? he.exports = vt() : he.exports = bt()), he.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Te, Xe;
function St() {
  if (Xe)
    return Te;
  Xe = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var d = {}, c = 0; c < 10; c++)
        d["_" + String.fromCharCode(c)] = c;
      var h = Object.getOwnPropertyNames(d).map(function(m) {
        return d[m];
      });
      if (h.join("") !== "0123456789")
        return !1;
      var y = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        y[m] = m;
      }), Object.keys(Object.assign({}, y)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Te = s() ? Object.assign : function(i, d) {
    for (var c, h = n(i), y, m = 1; m < arguments.length; m++) {
      c = Object(arguments[m]);
      for (var P in c)
        t.call(c, P) && (h[P] = c[P]);
      if (e) {
        y = e(c);
        for (var Y = 0; Y < y.length; Y++)
          r.call(c, y[Y]) && (h[y[Y]] = c[y[Y]]);
      }
    }
    return h;
  }, Te;
}
var Ee, qe;
function Me() {
  if (qe)
    return Ee;
  qe = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ee = e, Ee;
}
var Pe, Le;
function Ze() {
  return Le || (Le = 1, Pe = Function.call.bind(Object.prototype.hasOwnProperty)), Pe;
}
var we, Ue;
function Tt() {
  if (Ue)
    return we;
  Ue = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Me(), r = {}, n = Ze();
    e = function(i) {
      var d = "Warning: " + i;
      typeof console < "u" && console.error(d);
      try {
        throw new Error(d);
      } catch {
      }
    };
  }
  function s(i, d, c, h, y) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in i)
        if (n(i, m)) {
          var P;
          try {
            if (typeof i[m] != "function") {
              var Y = Error(
                (h || "React class") + ": " + c + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw Y.name = "Invariant Violation", Y;
            }
            P = i[m](d, m, h, c, null, t);
          } catch (I) {
            P = I;
          }
          if (P && !(P instanceof Error) && e(
            (h || "React class") + ": type specification of " + c + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof P + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), P instanceof Error && !(P.message in r)) {
            r[P.message] = !0;
            var N = y ? y() : "";
            e(
              "Failed " + c + " type: " + P.message + (N ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, we = s, we;
}
var De, ke;
function Et() {
  if (ke)
    return De;
  ke = 1;
  var e = Je(), t = St(), r = Me(), n = Ze(), s = Tt(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var h = "Warning: " + c;
    typeof console < "u" && console.error(h);
    try {
      throw new Error(h);
    } catch {
    }
  });
  function d() {
    return null;
  }
  return De = function(c, h) {
    var y = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function P(a) {
      var l = a && (y && a[y] || a[m]);
      if (typeof l == "function")
        return l;
    }
    var Y = "<<anonymous>>", N = {
      array: j("array"),
      bigint: j("bigint"),
      bool: j("boolean"),
      func: j("function"),
      number: j("number"),
      object: j("object"),
      string: j("string"),
      symbol: j("symbol"),
      any: g(),
      arrayOf: f,
      element: p(),
      elementType: o(),
      instanceOf: M,
      node: z(),
      objectOf: B,
      oneOf: w,
      oneOfType: ee,
      shape: se,
      exact: fe
    };
    function I(a, l) {
      return a === l ? a !== 0 || 1 / a === 1 / l : a !== a && l !== l;
    }
    function A(a, l) {
      this.message = a, this.data = l && typeof l == "object" ? l : {}, this.stack = "";
    }
    A.prototype = Error.prototype;
    function W(a) {
      if (process.env.NODE_ENV !== "production")
        var l = {}, E = 0;
      function S(D, b, T, _, R, O, q) {
        if (_ = _ || Y, O = O || T, q !== r) {
          if (h) {
            var u = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw u.name = "Invariant Violation", u;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var K = _ + ":" + T;
            !l[K] && // Avoid spamming the console because they are often not actionable except for lib authors
            E < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + O + "` prop on `" + _ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), l[K] = !0, E++);
          }
        }
        return b[T] == null ? D ? b[T] === null ? new A("The " + R + " `" + O + "` is marked as required " + ("in `" + _ + "`, but its value is `null`.")) : new A("The " + R + " `" + O + "` is marked as required in " + ("`" + _ + "`, but its value is `undefined`.")) : null : a(b, T, _, R, O);
      }
      var v = S.bind(null, !1);
      return v.isRequired = S.bind(null, !0), v;
    }
    function j(a) {
      function l(E, S, v, D, b, T) {
        var _ = E[S], R = V(_);
        if (R !== a) {
          var O = G(_);
          return new A(
            "Invalid " + D + " `" + b + "` of type " + ("`" + O + "` supplied to `" + v + "`, expected ") + ("`" + a + "`."),
            { expectedType: a }
          );
        }
        return null;
      }
      return W(l);
    }
    function g() {
      return W(d);
    }
    function f(a) {
      function l(E, S, v, D, b) {
        if (typeof a != "function")
          return new A("Property `" + b + "` of component `" + v + "` has invalid PropType notation inside arrayOf.");
        var T = E[S];
        if (!Array.isArray(T)) {
          var _ = V(T);
          return new A("Invalid " + D + " `" + b + "` of type " + ("`" + _ + "` supplied to `" + v + "`, expected an array."));
        }
        for (var R = 0; R < T.length; R++) {
          var O = a(T, R, v, D, b + "[" + R + "]", r);
          if (O instanceof Error)
            return O;
        }
        return null;
      }
      return W(l);
    }
    function p() {
      function a(l, E, S, v, D) {
        var b = l[E];
        if (!c(b)) {
          var T = V(b);
          return new A("Invalid " + v + " `" + D + "` of type " + ("`" + T + "` supplied to `" + S + "`, expected a single ReactElement."));
        }
        return null;
      }
      return W(a);
    }
    function o() {
      function a(l, E, S, v, D) {
        var b = l[E];
        if (!e.isValidElementType(b)) {
          var T = V(b);
          return new A("Invalid " + v + " `" + D + "` of type " + ("`" + T + "` supplied to `" + S + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return W(a);
    }
    function M(a) {
      function l(E, S, v, D, b) {
        if (!(E[S] instanceof a)) {
          var T = a.name || Y, _ = ce(E[S]);
          return new A("Invalid " + D + " `" + b + "` of type " + ("`" + _ + "` supplied to `" + v + "`, expected ") + ("instance of `" + T + "`."));
        }
        return null;
      }
      return W(l);
    }
    function w(a) {
      if (!Array.isArray(a))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), d;
      function l(E, S, v, D, b) {
        for (var T = E[S], _ = 0; _ < a.length; _++)
          if (I(T, a[_]))
            return null;
        var R = JSON.stringify(a, function(q, u) {
          var K = G(u);
          return K === "symbol" ? String(u) : u;
        });
        return new A("Invalid " + D + " `" + b + "` of value `" + String(T) + "` " + ("supplied to `" + v + "`, expected one of " + R + "."));
      }
      return W(l);
    }
    function B(a) {
      function l(E, S, v, D, b) {
        if (typeof a != "function")
          return new A("Property `" + b + "` of component `" + v + "` has invalid PropType notation inside objectOf.");
        var T = E[S], _ = V(T);
        if (_ !== "object")
          return new A("Invalid " + D + " `" + b + "` of type " + ("`" + _ + "` supplied to `" + v + "`, expected an object."));
        for (var R in T)
          if (n(T, R)) {
            var O = a(T, R, v, D, b + "." + R, r);
            if (O instanceof Error)
              return O;
          }
        return null;
      }
      return W(l);
    }
    function ee(a) {
      if (!Array.isArray(a))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), d;
      for (var l = 0; l < a.length; l++) {
        var E = a[l];
        if (typeof E != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ae(E) + " at index " + l + "."
          ), d;
      }
      function S(v, D, b, T, _) {
        for (var R = [], O = 0; O < a.length; O++) {
          var q = a[O], u = q(v, D, b, T, _, r);
          if (u == null)
            return null;
          u.data && n(u.data, "expectedType") && R.push(u.data.expectedType);
        }
        var K = R.length > 0 ? ", expected one of type [" + R.join(", ") + "]" : "";
        return new A("Invalid " + T + " `" + _ + "` supplied to " + ("`" + b + "`" + K + "."));
      }
      return W(S);
    }
    function z() {
      function a(l, E, S, v, D) {
        return re(l[E]) ? null : new A("Invalid " + v + " `" + D + "` supplied to " + ("`" + S + "`, expected a ReactNode."));
      }
      return W(a);
    }
    function te(a, l, E, S, v) {
      return new A(
        (a || "React class") + ": " + l + " type `" + E + "." + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + v + "`."
      );
    }
    function se(a) {
      function l(E, S, v, D, b) {
        var T = E[S], _ = V(T);
        if (_ !== "object")
          return new A("Invalid " + D + " `" + b + "` of type `" + _ + "` " + ("supplied to `" + v + "`, expected `object`."));
        for (var R in a) {
          var O = a[R];
          if (typeof O != "function")
            return te(v, D, b, R, G(O));
          var q = O(T, R, v, D, b + "." + R, r);
          if (q)
            return q;
        }
        return null;
      }
      return W(l);
    }
    function fe(a) {
      function l(E, S, v, D, b) {
        var T = E[S], _ = V(T);
        if (_ !== "object")
          return new A("Invalid " + D + " `" + b + "` of type `" + _ + "` " + ("supplied to `" + v + "`, expected `object`."));
        var R = t({}, E[S], a);
        for (var O in R) {
          var q = a[O];
          if (n(a, O) && typeof q != "function")
            return te(v, D, b, O, G(q));
          if (!q)
            return new A(
              "Invalid " + D + " `" + b + "` key `" + O + "` supplied to `" + v + "`.\nBad object: " + JSON.stringify(E[S], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(a), null, "  ")
            );
          var u = q(T, O, v, D, b + "." + O, r);
          if (u)
            return u;
        }
        return null;
      }
      return W(l);
    }
    function re(a) {
      switch (typeof a) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !a;
        case "object":
          if (Array.isArray(a))
            return a.every(re);
          if (a === null || c(a))
            return !0;
          var l = P(a);
          if (l) {
            var E = l.call(a), S;
            if (l !== a.entries) {
              for (; !(S = E.next()).done; )
                if (!re(S.value))
                  return !1;
            } else
              for (; !(S = E.next()).done; ) {
                var v = S.value;
                if (v && !re(v[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ue(a, l) {
      return a === "symbol" ? !0 : l ? l["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && l instanceof Symbol : !1;
    }
    function V(a) {
      var l = typeof a;
      return Array.isArray(a) ? "array" : a instanceof RegExp ? "object" : ue(l, a) ? "symbol" : l;
    }
    function G(a) {
      if (typeof a > "u" || a === null)
        return "" + a;
      var l = V(a);
      if (l === "object") {
        if (a instanceof Date)
          return "date";
        if (a instanceof RegExp)
          return "regexp";
      }
      return l;
    }
    function ae(a) {
      var l = G(a);
      switch (l) {
        case "array":
        case "object":
          return "an " + l;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + l;
        default:
          return l;
      }
    }
    function ce(a) {
      return !a.constructor || !a.constructor.name ? Y : a.constructor.name;
    }
    return N.checkPropTypes = s, N.resetWarningCache = s.resetWarningCache, N.PropTypes = N, N;
  }, De;
}
var _e, Be;
function Pt() {
  if (Be)
    return _e;
  Be = 1;
  var e = Me();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, _e = function() {
    function n(d, c, h, y, m, P) {
      if (P !== e) {
        var Y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw Y.name = "Invariant Violation", Y;
      }
    }
    n.isRequired = n;
    function s() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: s,
      element: n,
      elementType: n,
      instanceOf: s,
      node: n,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, _e;
}
if (process.env.NODE_ENV !== "production") {
  var wt = Je(), Dt = !0;
  Re.exports = Et()(wt.isElement, Dt);
} else
  Re.exports = Pt()();
var Qe = Re.exports;
function et(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = et(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Ve() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = et(e)) && (n && (n += " "), n += t);
  return n;
}
const _t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: Ve,
  default: Ve
}, Symbol.toStringTag, { value: "Module" })), Ot = /* @__PURE__ */ yt(_t);
var $ = {}, Z = {};
Object.defineProperty(Z, "__esModule", {
  value: !0
});
Z.dontSetMe = At;
Z.findInArray = Ct;
Z.int = Mt;
Z.isFunction = xt;
Z.isNum = Rt;
function Ct(e, t) {
  for (let r = 0, n = e.length; r < n; r++)
    if (t.apply(t, [e[r], r, e]))
      return e[r];
}
function xt(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function Rt(e) {
  return typeof e == "number" && !isNaN(e);
}
function Mt(e) {
  return parseInt(e, 10);
}
function At(e, t, r) {
  if (e[t])
    return new Error("Invalid prop ".concat(t, " passed to ").concat(r, " - do not set this, set it on the child."));
}
var ie = {};
Object.defineProperty(ie, "__esModule", {
  value: !0
});
ie.browserPrefixToKey = rt;
ie.browserPrefixToStyle = Nt;
ie.default = void 0;
ie.getPrefix = tt;
const Oe = ["Moz", "Webkit", "O", "ms"];
function tt() {
  var e;
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const r = (e = window.document) === null || e === void 0 || (e = e.documentElement) === null || e === void 0 ? void 0 : e.style;
  if (!r || t in r)
    return "";
  for (let n = 0; n < Oe.length; n++)
    if (rt(t, Oe[n]) in r)
      return Oe[n];
  return "";
}
function rt(e, t) {
  return t ? "".concat(t).concat($t(e)) : e;
}
function Nt(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function $t(e) {
  let t = "", r = !0;
  for (let n = 0; n < e.length; n++)
    r ? (t += e[n].toUpperCase(), r = !1) : e[n] === "-" ? r = !0 : t += e[n];
  return t;
}
ie.default = tt();
Object.defineProperty($, "__esModule", {
  value: !0
});
$.addClassName = at;
$.addEvent = Wt;
$.addUserSelectStyles = zt;
$.createCSSTransform = kt;
$.createSVGTransform = Bt;
$.getTouch = Vt;
$.getTouchIdentifier = Ht;
$.getTranslation = Ae;
$.innerHeight = qt;
$.innerWidth = Lt;
$.matchesSelector = ot;
$.matchesSelectorAndParentsTo = It;
$.offsetXYFromParent = Ut;
$.outerHeight = Ft;
$.outerWidth = Xt;
$.removeClassName = it;
$.removeEvent = jt;
$.removeUserSelectStyles = Gt;
var k = Z, He = Yt(ie);
function nt(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (nt = function(n) {
    return n ? r : t;
  })(e);
}
function Yt(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = nt(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, s = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var d = s ? Object.getOwnPropertyDescriptor(e, i) : null;
      d && (d.get || d.set) ? Object.defineProperty(n, i, d) : n[i] = e[i];
    }
  return n.default = e, r && r.set(e, n), n;
}
let ge = "";
function ot(e, t) {
  return ge || (ge = (0, k.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, k.isFunction)(e[r]);
  })), (0, k.isFunction)(e[ge]) ? e[ge](t) : !1;
}
function It(e, t, r) {
  let n = e;
  do {
    if (ot(n, t))
      return !0;
    if (n === r)
      return !1;
    n = n.parentNode;
  } while (n);
  return !1;
}
function Wt(e, t, r, n) {
  if (!e)
    return;
  const s = {
    capture: !0,
    ...n
  };
  e.addEventListener ? e.addEventListener(t, r, s) : e.attachEvent ? e.attachEvent("on" + t, r) : e["on" + t] = r;
}
function jt(e, t, r, n) {
  if (!e)
    return;
  const s = {
    capture: !0,
    ...n
  };
  e.removeEventListener ? e.removeEventListener(t, r, s) : e.detachEvent ? e.detachEvent("on" + t, r) : e["on" + t] = null;
}
function Ft(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, k.int)(r.borderTopWidth), t += (0, k.int)(r.borderBottomWidth), t;
}
function Xt(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, k.int)(r.borderLeftWidth), t += (0, k.int)(r.borderRightWidth), t;
}
function qt(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, k.int)(r.paddingTop), t -= (0, k.int)(r.paddingBottom), t;
}
function Lt(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, k.int)(r.paddingLeft), t -= (0, k.int)(r.paddingRight), t;
}
function Ut(e, t, r) {
  const s = t === t.ownerDocument.body ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), i = (e.clientX + t.scrollLeft - s.left) / r, d = (e.clientY + t.scrollTop - s.top) / r;
  return {
    x: i,
    y: d
  };
}
function kt(e, t) {
  const r = Ae(e, t, "px");
  return {
    [(0, He.browserPrefixToKey)("transform", He.default)]: r
  };
}
function Bt(e, t) {
  return Ae(e, t, "");
}
function Ae(e, t, r) {
  let {
    x: n,
    y: s
  } = e, i = "translate(".concat(n).concat(r, ",").concat(s).concat(r, ")");
  if (t) {
    const d = "".concat(typeof t.x == "string" ? t.x : t.x + r), c = "".concat(typeof t.y == "string" ? t.y : t.y + r);
    i = "translate(".concat(d, ", ").concat(c, ")") + i;
  }
  return i;
}
function Vt(e, t) {
  return e.targetTouches && (0, k.findInArray)(e.targetTouches, (r) => t === r.identifier) || e.changedTouches && (0, k.findInArray)(e.changedTouches, (r) => t === r.identifier);
}
function Ht(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function zt(e) {
  if (!e)
    return;
  let t = e.getElementById("react-draggable-style-el");
  t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && at(e.body, "react-draggable-transparent-selection");
}
function Gt(e) {
  if (e)
    try {
      if (e.body && it(e.body, "react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        const t = (e.defaultView || window).getSelection();
        t && t.type !== "Caret" && t.removeAllRanges();
      }
    } catch {
    }
}
function at(e, t) {
  e.classList ? e.classList.add(t) : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) || (e.className += " ".concat(t));
}
function it(e, t) {
  e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"), "");
}
var Q = {};
Object.defineProperty(Q, "__esModule", {
  value: !0
});
Q.canDragX = Zt;
Q.canDragY = Qt;
Q.createCoreData = tr;
Q.createDraggableData = rr;
Q.getBoundPosition = Kt;
Q.getControlPosition = er;
Q.snapToGrid = Jt;
var U = Z, le = $;
function Kt(e, t, r) {
  if (!e.props.bounds)
    return [t, r];
  let {
    bounds: n
  } = e.props;
  n = typeof n == "string" ? n : nr(n);
  const s = Ne(e);
  if (typeof n == "string") {
    const {
      ownerDocument: i
    } = s, d = i.defaultView;
    let c;
    if (n === "parent" ? c = s.parentNode : c = i.querySelector(n), !(c instanceof d.HTMLElement))
      throw new Error('Bounds selector "' + n + '" could not find an element.');
    const h = c, y = d.getComputedStyle(s), m = d.getComputedStyle(h);
    n = {
      left: -s.offsetLeft + (0, U.int)(m.paddingLeft) + (0, U.int)(y.marginLeft),
      top: -s.offsetTop + (0, U.int)(m.paddingTop) + (0, U.int)(y.marginTop),
      right: (0, le.innerWidth)(h) - (0, le.outerWidth)(s) - s.offsetLeft + (0, U.int)(m.paddingRight) - (0, U.int)(y.marginRight),
      bottom: (0, le.innerHeight)(h) - (0, le.outerHeight)(s) - s.offsetTop + (0, U.int)(m.paddingBottom) - (0, U.int)(y.marginBottom)
    };
  }
  return (0, U.isNum)(n.right) && (t = Math.min(t, n.right)), (0, U.isNum)(n.bottom) && (r = Math.min(r, n.bottom)), (0, U.isNum)(n.left) && (t = Math.max(t, n.left)), (0, U.isNum)(n.top) && (r = Math.max(r, n.top)), [t, r];
}
function Jt(e, t, r) {
  const n = Math.round(t / e[0]) * e[0], s = Math.round(r / e[1]) * e[1];
  return [n, s];
}
function Zt(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function Qt(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function er(e, t, r) {
  const n = typeof t == "number" ? (0, le.getTouch)(e, t) : null;
  if (typeof t == "number" && !n)
    return null;
  const s = Ne(r), i = r.props.offsetParent || s.offsetParent || s.ownerDocument.body;
  return (0, le.offsetXYFromParent)(n || e, i, r.props.scale);
}
function tr(e, t, r) {
  const n = !(0, U.isNum)(e.lastX), s = Ne(e);
  return n ? {
    node: s,
    deltaX: 0,
    deltaY: 0,
    lastX: t,
    lastY: r,
    x: t,
    y: r
  } : {
    node: s,
    deltaX: t - e.lastX,
    deltaY: r - e.lastY,
    lastX: e.lastX,
    lastY: e.lastY,
    x: t,
    y: r
  };
}
function rr(e, t) {
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
function nr(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function Ne(e) {
  const t = e.findDOMNode();
  if (!t)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return t;
}
var me = {}, ve = {};
Object.defineProperty(ve, "__esModule", {
  value: !0
});
ve.default = or;
function or() {
}
Object.defineProperty(me, "__esModule", {
  value: !0
});
me.default = void 0;
var Ce = ir(ze), L = $e(Qe), ar = $e(Ge), F = $, ne = Q, xe = Z, de = $e(ve);
function $e(e) {
  return e && e.__esModule ? e : { default: e };
}
function st(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (st = function(n) {
    return n ? r : t;
  })(e);
}
function ir(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = st(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, s = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var d = s ? Object.getOwnPropertyDescriptor(e, i) : null;
      d && (d.get || d.set) ? Object.defineProperty(n, i, d) : n[i] = e[i];
    }
  return n.default = e, r && r.set(e, n), n;
}
function X(e, t, r) {
  return t = sr(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sr(e) {
  var t = ur(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function ur(e, t) {
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
const H = {
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
let oe = H.mouse, be = class extends Ce.Component {
  constructor() {
    super(...arguments), X(this, "dragging", !1), X(this, "lastX", NaN), X(this, "lastY", NaN), X(this, "touchIdentifier", null), X(this, "mounted", !1), X(this, "handleDragStart", (t) => {
      if (this.props.onMouseDown(t), !this.props.allowAnyClick && typeof t.button == "number" && t.button !== 0)
        return !1;
      const r = this.findDOMNode();
      if (!r || !r.ownerDocument || !r.ownerDocument.body)
        throw new Error("<DraggableCore> not mounted on DragStart!");
      const {
        ownerDocument: n
      } = r;
      if (this.props.disabled || !(t.target instanceof n.defaultView.Node) || this.props.handle && !(0, F.matchesSelectorAndParentsTo)(t.target, this.props.handle, r) || this.props.cancel && (0, F.matchesSelectorAndParentsTo)(t.target, this.props.cancel, r))
        return;
      t.type === "touchstart" && t.preventDefault();
      const s = (0, F.getTouchIdentifier)(t);
      this.touchIdentifier = s;
      const i = (0, ne.getControlPosition)(t, s, this);
      if (i == null)
        return;
      const {
        x: d,
        y: c
      } = i, h = (0, ne.createCoreData)(this, d, c);
      (0, de.default)("DraggableCore: handleDragStart: %j", h), (0, de.default)("calling", this.props.onStart), !(this.props.onStart(t, h) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, F.addUserSelectStyles)(n), this.dragging = !0, this.lastX = d, this.lastY = c, (0, F.addEvent)(n, oe.move, this.handleDrag), (0, F.addEvent)(n, oe.stop, this.handleDragStop));
    }), X(this, "handleDrag", (t) => {
      const r = (0, ne.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: s
      } = r;
      if (Array.isArray(this.props.grid)) {
        let c = n - this.lastX, h = s - this.lastY;
        if ([c, h] = (0, ne.snapToGrid)(this.props.grid, c, h), !c && !h)
          return;
        n = this.lastX + c, s = this.lastY + h;
      }
      const i = (0, ne.createCoreData)(this, n, s);
      if ((0, de.default)("DraggableCore: handleDrag: %j", i), this.props.onDrag(t, i) === !1 || this.mounted === !1) {
        try {
          this.handleDragStop(new MouseEvent("mouseup"));
        } catch {
          const h = document.createEvent("MouseEvents");
          h.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(h);
        }
        return;
      }
      this.lastX = n, this.lastY = s;
    }), X(this, "handleDragStop", (t) => {
      if (!this.dragging)
        return;
      const r = (0, ne.getControlPosition)(t, this.touchIdentifier, this);
      if (r == null)
        return;
      let {
        x: n,
        y: s
      } = r;
      if (Array.isArray(this.props.grid)) {
        let h = n - this.lastX || 0, y = s - this.lastY || 0;
        [h, y] = (0, ne.snapToGrid)(this.props.grid, h, y), n = this.lastX + h, s = this.lastY + y;
      }
      const i = (0, ne.createCoreData)(this, n, s);
      if (this.props.onStop(t, i) === !1 || this.mounted === !1)
        return !1;
      const c = this.findDOMNode();
      c && this.props.enableUserSelectHack && (0, F.removeUserSelectStyles)(c.ownerDocument), (0, de.default)("DraggableCore: handleDragStop: %j", i), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, c && ((0, de.default)("DraggableCore: Removing handlers"), (0, F.removeEvent)(c.ownerDocument, oe.move, this.handleDrag), (0, F.removeEvent)(c.ownerDocument, oe.stop, this.handleDragStop));
    }), X(this, "onMouseDown", (t) => (oe = H.mouse, this.handleDragStart(t))), X(this, "onMouseUp", (t) => (oe = H.mouse, this.handleDragStop(t))), X(this, "onTouchStart", (t) => (oe = H.touch, this.handleDragStart(t))), X(this, "onTouchEnd", (t) => (oe = H.touch, this.handleDragStop(t)));
  }
  componentDidMount() {
    this.mounted = !0;
    const t = this.findDOMNode();
    t && (0, F.addEvent)(t, H.touch.start, this.onTouchStart, {
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
      (0, F.removeEvent)(r, H.mouse.move, this.handleDrag), (0, F.removeEvent)(r, H.touch.move, this.handleDrag), (0, F.removeEvent)(r, H.mouse.stop, this.handleDragStop), (0, F.removeEvent)(r, H.touch.stop, this.handleDragStop), (0, F.removeEvent)(t, H.touch.start, this.onTouchStart, {
        passive: !1
      }), this.props.enableUserSelectHack && (0, F.removeUserSelectStyles)(r);
    }
  }
  // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
  // the underlying DOM node ourselves. See the README for more information.
  findDOMNode() {
    var t, r;
    return (t = this.props) !== null && t !== void 0 && t.nodeRef ? (r = this.props) === null || r === void 0 || (r = r.nodeRef) === null || r === void 0 ? void 0 : r.current : ar.default.findDOMNode(this);
  }
  render() {
    return /* @__PURE__ */ Ce.cloneElement(Ce.Children.only(this.props.children), {
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
me.default = be;
X(be, "displayName", "DraggableCore");
X(be, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: L.default.bool,
  children: L.default.node.isRequired,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: L.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: L.default.bool,
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
  grid: L.default.arrayOf(L.default.number),
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
  handle: L.default.string,
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
  cancel: L.default.string,
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
  nodeRef: L.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: L.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: L.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: L.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: L.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: L.default.number,
  /**
   * These properties should be defined on the child, not here.
   */
  className: xe.dontSetMe,
  style: xe.dontSetMe,
  transform: xe.dontSetMe
});
X(be, "defaultProps", {
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
      return h.default;
    }
  }), e.default = void 0;
  var t = Y(ze), r = m(Qe), n = m(Ge), s = m(Ot), i = $, d = Q, c = Z, h = m(me), y = m(ve);
  function m(g) {
    return g && g.__esModule ? g : { default: g };
  }
  function P(g) {
    if (typeof WeakMap != "function")
      return null;
    var f = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakMap();
    return (P = function(o) {
      return o ? p : f;
    })(g);
  }
  function Y(g, f) {
    if (!f && g && g.__esModule)
      return g;
    if (g === null || typeof g != "object" && typeof g != "function")
      return { default: g };
    var p = P(f);
    if (p && p.has(g))
      return p.get(g);
    var o = {}, M = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var w in g)
      if (w !== "default" && Object.prototype.hasOwnProperty.call(g, w)) {
        var B = M ? Object.getOwnPropertyDescriptor(g, w) : null;
        B && (B.get || B.set) ? Object.defineProperty(o, w, B) : o[w] = g[w];
      }
    return o.default = g, p && p.set(g, o), o;
  }
  function N() {
    return N = Object.assign ? Object.assign.bind() : function(g) {
      for (var f = 1; f < arguments.length; f++) {
        var p = arguments[f];
        for (var o in p)
          Object.prototype.hasOwnProperty.call(p, o) && (g[o] = p[o]);
      }
      return g;
    }, N.apply(this, arguments);
  }
  function I(g, f, p) {
    return f = A(f), f in g ? Object.defineProperty(g, f, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : g[f] = p, g;
  }
  function A(g) {
    var f = W(g, "string");
    return typeof f == "symbol" ? f : String(f);
  }
  function W(g, f) {
    if (typeof g != "object" || g === null)
      return g;
    var p = g[Symbol.toPrimitive];
    if (p !== void 0) {
      var o = p.call(g, f || "default");
      if (typeof o != "object")
        return o;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (f === "string" ? String : Number)(g);
  }
  class j extends t.Component {
    // React 16.3+
    // Arity (props, state)
    static getDerivedStateFromProps(f, p) {
      let {
        position: o
      } = f, {
        prevPropsPosition: M
      } = p;
      return o && (!M || o.x !== M.x || o.y !== M.y) ? ((0, y.default)("Draggable: getDerivedStateFromProps %j", {
        position: o,
        prevPropsPosition: M
      }), {
        x: o.x,
        y: o.y,
        prevPropsPosition: {
          ...o
        }
      }) : null;
    }
    constructor(f) {
      super(f), I(this, "onDragStart", (p, o) => {
        if ((0, y.default)("Draggable: onDragStart: %j", o), this.props.onStart(p, (0, d.createDraggableData)(this, o)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), I(this, "onDrag", (p, o) => {
        if (!this.state.dragging)
          return !1;
        (0, y.default)("Draggable: onDrag: %j", o);
        const M = (0, d.createDraggableData)(this, o), w = {
          x: M.x,
          y: M.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: ee,
            y: z
          } = w;
          w.x += this.state.slackX, w.y += this.state.slackY;
          const [te, se] = (0, d.getBoundPosition)(this, w.x, w.y);
          w.x = te, w.y = se, w.slackX = this.state.slackX + (ee - w.x), w.slackY = this.state.slackY + (z - w.y), M.x = w.x, M.y = w.y, M.deltaX = w.x - this.state.x, M.deltaY = w.y - this.state.y;
        }
        if (this.props.onDrag(p, M) === !1)
          return !1;
        this.setState(w);
      }), I(this, "onDragStop", (p, o) => {
        if (!this.state.dragging || this.props.onStop(p, (0, d.createDraggableData)(this, o)) === !1)
          return !1;
        (0, y.default)("Draggable: onDragStop: %j", o);
        const w = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: ee,
            y: z
          } = this.props.position;
          w.x = ee, w.y = z;
        }
        this.setState(w);
      }), this.state = {
        // Whether or not we are currently dragging.
        dragging: !1,
        // Whether or not we have been dragged before.
        dragged: !1,
        // Current transform x and y.
        x: f.position ? f.position.x : f.defaultPosition.x,
        y: f.position ? f.position.y : f.defaultPosition.y,
        prevPropsPosition: {
          ...f.position
        },
        // Used for compensating for out-of-bounds drags
        slackX: 0,
        slackY: 0,
        // Can only determine if SVG after mounting
        isElementSVG: !1
      }, f.position && !(f.onDrag || f.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
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
      var f, p;
      return (f = (p = this.props) === null || p === void 0 || (p = p.nodeRef) === null || p === void 0 ? void 0 : p.current) !== null && f !== void 0 ? f : n.default.findDOMNode(this);
    }
    render() {
      const {
        axis: f,
        bounds: p,
        children: o,
        defaultPosition: M,
        defaultClassName: w,
        defaultClassNameDragging: B,
        defaultClassNameDragged: ee,
        position: z,
        positionOffset: te,
        scale: se,
        ...fe
      } = this.props;
      let re = {}, ue = null;
      const G = !!!z || this.state.dragging, ae = z || M, ce = {
        // Set left if horizontal drag is enabled
        x: (0, d.canDragX)(this) && G ? this.state.x : ae.x,
        // Set top if vertical drag is enabled
        y: (0, d.canDragY)(this) && G ? this.state.y : ae.y
      };
      this.state.isElementSVG ? ue = (0, i.createSVGTransform)(ce, te) : re = (0, i.createCSSTransform)(ce, te);
      const a = (0, s.default)(o.props.className || "", w, {
        [B]: this.state.dragging,
        [ee]: this.state.dragged
      });
      return /* @__PURE__ */ t.createElement(h.default, N({}, fe, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /* @__PURE__ */ t.cloneElement(t.Children.only(o), {
        className: a,
        style: {
          ...o.props.style,
          ...re
        },
        transform: ue
      }));
    }
  }
  e.default = j, I(j, "displayName", "Draggable"), I(j, "propTypes", {
    // Accepts all props <DraggableCore> accepts.
    ...h.default.propTypes,
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
    className: c.dontSetMe,
    style: c.dontSetMe,
    transform: c.dontSetMe
  }), I(j, "defaultProps", {
    ...h.default.defaultProps,
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
})(Ke);
const {
  default: ut,
  DraggableCore: cr
} = Ke;
ye.exports = ut;
ye.exports.default = ut;
ye.exports.DraggableCore = cr;
var lr = ye.exports;
const fr = /* @__PURE__ */ mt(lr);
function dr(e) {
  return /* @__PURE__ */ J(
    fr,
    {
      handle: "#draggable-dialog-title",
      cancel: '[class*="MuiDialogContent-root"]',
      children: /* @__PURE__ */ J(ft, { ...e })
    }
  );
}
const Pr = ({ columns: e, isOpen: t, onClose: r, setFilter: n, defaultFilter: s = {} }) => {
  const i = (P) => {
    P.stopPropagation();
  };
  var { getFieldManager: d, getFormData: c } = gt(s, () => {
  }, "edit");
  const h = () => {
    n({});
  }, y = () => {
    var P = c();
    n && n(P);
  }, m = pt(e);
  return /* @__PURE__ */ J("div", { className: "grid-header-button", children: /* @__PURE__ */ Se(
    ct,
    {
      open: t,
      onClick: i,
      PaperComponent: dr,
      children: [
        /* @__PURE__ */ Se("div", { className: "filter-dialog-container", children: [
          /* @__PURE__ */ J(lt, { id: "draggable-dialog-title", children: " Filter" }),
          /* @__PURE__ */ J("div", { className: "filter-dialog-close-btn", onClick: r, children: /* @__PURE__ */ J(dt, { className: "close-icon" }) })
        ] }),
        /* @__PURE__ */ J("div", { className: "filter-dialog-content", children: /* @__PURE__ */ J(
          ht,
          {
            context: { getFieldManager: d, formData: {} },
            layout: {
              type: "form",
              formLayout: {
                fields: m
              }
            }
          }
        ) }),
        /* @__PURE__ */ Se("div", { className: "filter-dialog-button-container", children: [
          /* @__PURE__ */ J(Ie, { className: "filter-dialog-button", disableRipple: !0, onClick: h, children: "Reset" }),
          /* @__PURE__ */ J(Ie, { className: "filter-dialog-button", disableRipple: !0, onClick: y, children: "Filter" })
        ] })
      ]
    }
  ) });
};
export {
  Pr as default
};
