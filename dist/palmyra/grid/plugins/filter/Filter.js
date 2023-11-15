import { jsx as L, jsxs as Se } from "react/jsx-runtime";
import { Dialog as ct, Tooltip as lt, Button as Ie, Paper as ft } from "@mui/material";
import { Close as dt } from "@mui/icons-material";
import { convertToField as pt } from "../../base/GridFieldConverter.js";
import ht from "../../../layout/flexiLayout/SectionRendererEditForm.js";
import { createFormData as gt } from "../../../form/PalmyraFormManager.js";
import { a as yt, g as mt } from "../../../../_commonjsHelpers-c5d32002.js";
import ze from "react";
import Ge from "react-dom";
import vt from "../../../layout/flexiLayout/FormFieldOnlyRenderer.js";
import { FieldManagerContext as bt } from "../../../layout/flexiLayout/FlexiLayoutContext.js";
var ye = { exports: {} }, Ke = {}, Re = { exports: {} }, he = { exports: {} }, O = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function St() {
  if (We)
    return O;
  We = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, w = e ? Symbol.for("react.suspense") : 60113, $ = e ? Symbol.for("react.suspense_list") : 60120, M = e ? Symbol.for("react.memo") : 60115, I = e ? Symbol.for("react.lazy") : 60116, A = e ? Symbol.for("react.block") : 60121, W = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, g = e ? Symbol.for("react.scope") : 60119;
  function f(o) {
    if (typeof o == "object" && o !== null) {
      var N = o.$$typeof;
      switch (N) {
        case t:
          switch (o = o.type, o) {
            case h:
            case m:
            case n:
            case i:
            case s:
            case w:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case c:
                case y:
                case I:
                case M:
                case d:
                  return o;
                default:
                  return N;
              }
          }
        case r:
          return N;
      }
    }
  }
  function p(o) {
    return f(o) === m;
  }
  return O.AsyncMode = h, O.ConcurrentMode = m, O.ContextConsumer = c, O.ContextProvider = d, O.Element = t, O.ForwardRef = y, O.Fragment = n, O.Lazy = I, O.Memo = M, O.Portal = r, O.Profiler = i, O.StrictMode = s, O.Suspense = w, O.isAsyncMode = function(o) {
    return p(o) || f(o) === h;
  }, O.isConcurrentMode = p, O.isContextConsumer = function(o) {
    return f(o) === c;
  }, O.isContextProvider = function(o) {
    return f(o) === d;
  }, O.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === t;
  }, O.isForwardRef = function(o) {
    return f(o) === y;
  }, O.isFragment = function(o) {
    return f(o) === n;
  }, O.isLazy = function(o) {
    return f(o) === I;
  }, O.isMemo = function(o) {
    return f(o) === M;
  }, O.isPortal = function(o) {
    return f(o) === r;
  }, O.isProfiler = function(o) {
    return f(o) === i;
  }, O.isStrictMode = function(o) {
    return f(o) === s;
  }, O.isSuspense = function(o) {
    return f(o) === w;
  }, O.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === n || o === m || o === i || o === s || o === w || o === $ || typeof o == "object" && o !== null && (o.$$typeof === I || o.$$typeof === M || o.$$typeof === d || o.$$typeof === c || o.$$typeof === y || o.$$typeof === W || o.$$typeof === j || o.$$typeof === g || o.$$typeof === A);
  }, O.typeOf = f, O;
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
function Tt() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, d = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, w = e ? Symbol.for("react.suspense") : 60113, $ = e ? Symbol.for("react.suspense_list") : 60120, M = e ? Symbol.for("react.memo") : 60115, I = e ? Symbol.for("react.lazy") : 60116, A = e ? Symbol.for("react.block") : 60121, W = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, g = e ? Symbol.for("react.scope") : 60119;
    function f(u) {
      return typeof u == "string" || typeof u == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      u === n || u === m || u === i || u === s || u === w || u === $ || typeof u == "object" && u !== null && (u.$$typeof === I || u.$$typeof === M || u.$$typeof === d || u.$$typeof === c || u.$$typeof === y || u.$$typeof === W || u.$$typeof === j || u.$$typeof === g || u.$$typeof === A);
    }
    function p(u) {
      if (typeof u == "object" && u !== null) {
        var J = u.$$typeof;
        switch (J) {
          case t:
            var pe = u.type;
            switch (pe) {
              case h:
              case m:
              case n:
              case i:
              case s:
              case w:
                return pe;
              default:
                var Ye = pe && pe.$$typeof;
                switch (Ye) {
                  case c:
                  case y:
                  case I:
                  case M:
                  case d:
                    return Ye;
                  default:
                    return J;
                }
            }
          case r:
            return J;
        }
      }
    }
    var o = h, N = m, P = c, V = d, ee = t, G = y, te = n, se = I, fe = M, re = r, ue = i, H = s, K = w, ae = !1;
    function ce(u) {
      return ae || (ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), a(u) || p(u) === h;
    }
    function a(u) {
      return p(u) === m;
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
      return p(u) === y;
    }
    function D(u) {
      return p(u) === n;
    }
    function b(u) {
      return p(u) === I;
    }
    function T(u) {
      return p(u) === M;
    }
    function _(u) {
      return p(u) === r;
    }
    function R(u) {
      return p(u) === i;
    }
    function C(u) {
      return p(u) === s;
    }
    function q(u) {
      return p(u) === w;
    }
    x.AsyncMode = o, x.ConcurrentMode = N, x.ContextConsumer = P, x.ContextProvider = V, x.Element = ee, x.ForwardRef = G, x.Fragment = te, x.Lazy = se, x.Memo = fe, x.Portal = re, x.Profiler = ue, x.StrictMode = H, x.Suspense = K, x.isAsyncMode = ce, x.isConcurrentMode = a, x.isContextConsumer = l, x.isContextProvider = E, x.isElement = S, x.isForwardRef = v, x.isFragment = D, x.isLazy = b, x.isMemo = T, x.isPortal = _, x.isProfiler = R, x.isStrictMode = C, x.isSuspense = q, x.isValidElementType = f, x.typeOf = p;
  }()), x;
}
var Fe;
function Je() {
  return Fe || (Fe = 1, process.env.NODE_ENV === "production" ? he.exports = St() : he.exports = Tt()), he.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Te, Xe;
function Et() {
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
      var h = Object.getOwnPropertyNames(d).map(function(y) {
        return d[y];
      });
      if (h.join("") !== "0123456789")
        return !1;
      var m = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(y) {
        m[y] = y;
      }), Object.keys(Object.assign({}, m)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Te = s() ? Object.assign : function(i, d) {
    for (var c, h = n(i), m, y = 1; y < arguments.length; y++) {
      c = Object(arguments[y]);
      for (var w in c)
        t.call(c, w) && (h[w] = c[w]);
      if (e) {
        m = e(c);
        for (var $ = 0; $ < m.length; $++)
          r.call(c, m[$]) && (h[m[$]] = c[m[$]]);
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
var Pe, ke;
function Ze() {
  return ke || (ke = 1, Pe = Function.call.bind(Object.prototype.hasOwnProperty)), Pe;
}
var we, Le;
function Pt() {
  if (Le)
    return we;
  Le = 1;
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
  function s(i, d, c, h, m) {
    if (process.env.NODE_ENV !== "production") {
      for (var y in i)
        if (n(i, y)) {
          var w;
          try {
            if (typeof i[y] != "function") {
              var $ = Error(
                (h || "React class") + ": " + c + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw $.name = "Invariant Violation", $;
            }
            w = i[y](d, y, h, c, null, t);
          } catch (I) {
            w = I;
          }
          if (w && !(w instanceof Error) && e(
            (h || "React class") + ": type specification of " + c + " `" + y + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof w + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), w instanceof Error && !(w.message in r)) {
            r[w.message] = !0;
            var M = m ? m() : "";
            e(
              "Failed " + c + " type: " + w.message + (M ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, we = s, we;
}
var De, Ue;
function wt() {
  if (Ue)
    return De;
  Ue = 1;
  var e = Je(), t = Et(), r = Me(), n = Ze(), s = Pt(), i = function() {
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
    var m = typeof Symbol == "function" && Symbol.iterator, y = "@@iterator";
    function w(a) {
      var l = a && (m && a[m] || a[y]);
      if (typeof l == "function")
        return l;
    }
    var $ = "<<anonymous>>", M = {
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
      instanceOf: N,
      node: G(),
      objectOf: V,
      oneOf: P,
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
      function S(D, b, T, _, R, C, q) {
        if (_ = _ || $, C = C || T, q !== r) {
          if (h) {
            var u = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw u.name = "Invariant Violation", u;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var J = _ + ":" + T;
            !l[J] && // Avoid spamming the console because they are often not actionable except for lib authors
            E < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + C + "` prop on `" + _ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), l[J] = !0, E++);
          }
        }
        return b[T] == null ? D ? b[T] === null ? new A("The " + R + " `" + C + "` is marked as required " + ("in `" + _ + "`, but its value is `null`.")) : new A("The " + R + " `" + C + "` is marked as required in " + ("`" + _ + "`, but its value is `undefined`.")) : null : a(b, T, _, R, C);
      }
      var v = S.bind(null, !1);
      return v.isRequired = S.bind(null, !0), v;
    }
    function j(a) {
      function l(E, S, v, D, b, T) {
        var _ = E[S], R = H(_);
        if (R !== a) {
          var C = K(_);
          return new A(
            "Invalid " + D + " `" + b + "` of type " + ("`" + C + "` supplied to `" + v + "`, expected ") + ("`" + a + "`."),
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
          var _ = H(T);
          return new A("Invalid " + D + " `" + b + "` of type " + ("`" + _ + "` supplied to `" + v + "`, expected an array."));
        }
        for (var R = 0; R < T.length; R++) {
          var C = a(T, R, v, D, b + "[" + R + "]", r);
          if (C instanceof Error)
            return C;
        }
        return null;
      }
      return W(l);
    }
    function p() {
      function a(l, E, S, v, D) {
        var b = l[E];
        if (!c(b)) {
          var T = H(b);
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
          var T = H(b);
          return new A("Invalid " + v + " `" + D + "` of type " + ("`" + T + "` supplied to `" + S + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return W(a);
    }
    function N(a) {
      function l(E, S, v, D, b) {
        if (!(E[S] instanceof a)) {
          var T = a.name || $, _ = ce(E[S]);
          return new A("Invalid " + D + " `" + b + "` of type " + ("`" + _ + "` supplied to `" + v + "`, expected ") + ("instance of `" + T + "`."));
        }
        return null;
      }
      return W(l);
    }
    function P(a) {
      if (!Array.isArray(a))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), d;
      function l(E, S, v, D, b) {
        for (var T = E[S], _ = 0; _ < a.length; _++)
          if (I(T, a[_]))
            return null;
        var R = JSON.stringify(a, function(q, u) {
          var J = K(u);
          return J === "symbol" ? String(u) : u;
        });
        return new A("Invalid " + D + " `" + b + "` of value `" + String(T) + "` " + ("supplied to `" + v + "`, expected one of " + R + "."));
      }
      return W(l);
    }
    function V(a) {
      function l(E, S, v, D, b) {
        if (typeof a != "function")
          return new A("Property `" + b + "` of component `" + v + "` has invalid PropType notation inside objectOf.");
        var T = E[S], _ = H(T);
        if (_ !== "object")
          return new A("Invalid " + D + " `" + b + "` of type " + ("`" + _ + "` supplied to `" + v + "`, expected an object."));
        for (var R in T)
          if (n(T, R)) {
            var C = a(T, R, v, D, b + "." + R, r);
            if (C instanceof Error)
              return C;
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
        for (var R = [], C = 0; C < a.length; C++) {
          var q = a[C], u = q(v, D, b, T, _, r);
          if (u == null)
            return null;
          u.data && n(u.data, "expectedType") && R.push(u.data.expectedType);
        }
        var J = R.length > 0 ? ", expected one of type [" + R.join(", ") + "]" : "";
        return new A("Invalid " + T + " `" + _ + "` supplied to " + ("`" + b + "`" + J + "."));
      }
      return W(S);
    }
    function G() {
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
        var T = E[S], _ = H(T);
        if (_ !== "object")
          return new A("Invalid " + D + " `" + b + "` of type `" + _ + "` " + ("supplied to `" + v + "`, expected `object`."));
        for (var R in a) {
          var C = a[R];
          if (typeof C != "function")
            return te(v, D, b, R, K(C));
          var q = C(T, R, v, D, b + "." + R, r);
          if (q)
            return q;
        }
        return null;
      }
      return W(l);
    }
    function fe(a) {
      function l(E, S, v, D, b) {
        var T = E[S], _ = H(T);
        if (_ !== "object")
          return new A("Invalid " + D + " `" + b + "` of type `" + _ + "` " + ("supplied to `" + v + "`, expected `object`."));
        var R = t({}, E[S], a);
        for (var C in R) {
          var q = a[C];
          if (n(a, C) && typeof q != "function")
            return te(v, D, b, C, K(q));
          if (!q)
            return new A(
              "Invalid " + D + " `" + b + "` key `" + C + "` supplied to `" + v + "`.\nBad object: " + JSON.stringify(E[S], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(a), null, "  ")
            );
          var u = q(T, C, v, D, b + "." + C, r);
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
          var l = w(a);
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
    function H(a) {
      var l = typeof a;
      return Array.isArray(a) ? "array" : a instanceof RegExp ? "object" : ue(l, a) ? "symbol" : l;
    }
    function K(a) {
      if (typeof a > "u" || a === null)
        return "" + a;
      var l = H(a);
      if (l === "object") {
        if (a instanceof Date)
          return "date";
        if (a instanceof RegExp)
          return "regexp";
      }
      return l;
    }
    function ae(a) {
      var l = K(a);
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
      return !a.constructor || !a.constructor.name ? $ : a.constructor.name;
    }
    return M.checkPropTypes = s, M.resetWarningCache = s.resetWarningCache, M.PropTypes = M, M;
  }, De;
}
var _e, Be;
function Dt() {
  if (Be)
    return _e;
  Be = 1;
  var e = Me();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, _e = function() {
    function n(d, c, h, m, y, w) {
      if (w !== e) {
        var $ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw $.name = "Invariant Violation", $;
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
  var _t = Je(), Ct = !0;
  Re.exports = wt()(_t.isElement, Ct);
} else
  Re.exports = Dt()();
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
const Ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: Ve,
  default: Ve
}, Symbol.toStringTag, { value: "Module" })), xt = /* @__PURE__ */ yt(Ot);
var Y = {}, Z = {};
Object.defineProperty(Z, "__esModule", {
  value: !0
});
Z.dontSetMe = $t;
Z.findInArray = Rt;
Z.int = At;
Z.isFunction = Mt;
Z.isNum = Nt;
function Rt(e, t) {
  for (let r = 0, n = e.length; r < n; r++)
    if (t.apply(t, [e[r], r, e]))
      return e[r];
}
function Mt(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Function]";
}
function Nt(e) {
  return typeof e == "number" && !isNaN(e);
}
function At(e) {
  return parseInt(e, 10);
}
function $t(e, t, r) {
  if (e[t])
    return new Error("Invalid prop ".concat(t, " passed to ").concat(r, " - do not set this, set it on the child."));
}
var ie = {};
Object.defineProperty(ie, "__esModule", {
  value: !0
});
ie.browserPrefixToKey = rt;
ie.browserPrefixToStyle = Yt;
ie.default = void 0;
ie.getPrefix = tt;
const Ce = ["Moz", "Webkit", "O", "ms"];
function tt() {
  var e;
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
  if (typeof window > "u")
    return "";
  const r = (e = window.document) === null || e === void 0 || (e = e.documentElement) === null || e === void 0 ? void 0 : e.style;
  if (!r || t in r)
    return "";
  for (let n = 0; n < Ce.length; n++)
    if (rt(t, Ce[n]) in r)
      return Ce[n];
  return "";
}
function rt(e, t) {
  return t ? "".concat(t).concat(It(e)) : e;
}
function Yt(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function It(e) {
  let t = "", r = !0;
  for (let n = 0; n < e.length; n++)
    r ? (t += e[n].toUpperCase(), r = !1) : e[n] === "-" ? r = !0 : t += e[n];
  return t;
}
ie.default = tt();
Object.defineProperty(Y, "__esModule", {
  value: !0
});
Y.addClassName = at;
Y.addEvent = Ft;
Y.addUserSelectStyles = Kt;
Y.createCSSTransform = Vt;
Y.createSVGTransform = Ht;
Y.getTouch = zt;
Y.getTouchIdentifier = Gt;
Y.getTranslation = Ne;
Y.innerHeight = Lt;
Y.innerWidth = Ut;
Y.matchesSelector = ot;
Y.matchesSelectorAndParentsTo = jt;
Y.offsetXYFromParent = Bt;
Y.outerHeight = qt;
Y.outerWidth = kt;
Y.removeClassName = it;
Y.removeEvent = Xt;
Y.removeUserSelectStyles = Jt;
var B = Z, He = Wt(ie);
function nt(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (nt = function(n) {
    return n ? r : t;
  })(e);
}
function Wt(e, t) {
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
  return ge || (ge = (0, B.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(r) {
    return (0, B.isFunction)(e[r]);
  })), (0, B.isFunction)(e[ge]) ? e[ge](t) : !1;
}
function jt(e, t, r) {
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
function Ft(e, t, r, n) {
  if (!e)
    return;
  const s = {
    capture: !0,
    ...n
  };
  e.addEventListener ? e.addEventListener(t, r, s) : e.attachEvent ? e.attachEvent("on" + t, r) : e["on" + t] = r;
}
function Xt(e, t, r, n) {
  if (!e)
    return;
  const s = {
    capture: !0,
    ...n
  };
  e.removeEventListener ? e.removeEventListener(t, r, s) : e.detachEvent ? e.detachEvent("on" + t, r) : e["on" + t] = null;
}
function qt(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, B.int)(r.borderTopWidth), t += (0, B.int)(r.borderBottomWidth), t;
}
function kt(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t += (0, B.int)(r.borderLeftWidth), t += (0, B.int)(r.borderRightWidth), t;
}
function Lt(e) {
  let t = e.clientHeight;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, B.int)(r.paddingTop), t -= (0, B.int)(r.paddingBottom), t;
}
function Ut(e) {
  let t = e.clientWidth;
  const r = e.ownerDocument.defaultView.getComputedStyle(e);
  return t -= (0, B.int)(r.paddingLeft), t -= (0, B.int)(r.paddingRight), t;
}
function Bt(e, t, r) {
  const s = t === t.ownerDocument.body ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), i = (e.clientX + t.scrollLeft - s.left) / r, d = (e.clientY + t.scrollTop - s.top) / r;
  return {
    x: i,
    y: d
  };
}
function Vt(e, t) {
  const r = Ne(e, t, "px");
  return {
    [(0, He.browserPrefixToKey)("transform", He.default)]: r
  };
}
function Ht(e, t) {
  return Ne(e, t, "");
}
function Ne(e, t, r) {
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
function zt(e, t) {
  return e.targetTouches && (0, B.findInArray)(e.targetTouches, (r) => t === r.identifier) || e.changedTouches && (0, B.findInArray)(e.changedTouches, (r) => t === r.identifier);
}
function Gt(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function Kt(e) {
  if (!e)
    return;
  let t = e.getElementById("react-draggable-style-el");
  t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && at(e.body, "react-draggable-transparent-selection");
}
function Jt(e) {
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
Q.canDragX = er;
Q.canDragY = tr;
Q.createCoreData = nr;
Q.createDraggableData = or;
Q.getBoundPosition = Zt;
Q.getControlPosition = rr;
Q.snapToGrid = Qt;
var U = Z, le = Y;
function Zt(e, t, r) {
  if (!e.props.bounds)
    return [t, r];
  let {
    bounds: n
  } = e.props;
  n = typeof n == "string" ? n : ar(n);
  const s = Ae(e);
  if (typeof n == "string") {
    const {
      ownerDocument: i
    } = s, d = i.defaultView;
    let c;
    if (n === "parent" ? c = s.parentNode : c = i.querySelector(n), !(c instanceof d.HTMLElement))
      throw new Error('Bounds selector "' + n + '" could not find an element.');
    const h = c, m = d.getComputedStyle(s), y = d.getComputedStyle(h);
    n = {
      left: -s.offsetLeft + (0, U.int)(y.paddingLeft) + (0, U.int)(m.marginLeft),
      top: -s.offsetTop + (0, U.int)(y.paddingTop) + (0, U.int)(m.marginTop),
      right: (0, le.innerWidth)(h) - (0, le.outerWidth)(s) - s.offsetLeft + (0, U.int)(y.paddingRight) - (0, U.int)(m.marginRight),
      bottom: (0, le.innerHeight)(h) - (0, le.outerHeight)(s) - s.offsetTop + (0, U.int)(y.paddingBottom) - (0, U.int)(m.marginBottom)
    };
  }
  return (0, U.isNum)(n.right) && (t = Math.min(t, n.right)), (0, U.isNum)(n.bottom) && (r = Math.min(r, n.bottom)), (0, U.isNum)(n.left) && (t = Math.max(t, n.left)), (0, U.isNum)(n.top) && (r = Math.max(r, n.top)), [t, r];
}
function Qt(e, t, r) {
  const n = Math.round(t / e[0]) * e[0], s = Math.round(r / e[1]) * e[1];
  return [n, s];
}
function er(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function tr(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function rr(e, t, r) {
  const n = typeof t == "number" ? (0, le.getTouch)(e, t) : null;
  if (typeof t == "number" && !n)
    return null;
  const s = Ae(r), i = r.props.offsetParent || s.offsetParent || s.ownerDocument.body;
  return (0, le.offsetXYFromParent)(n || e, i, r.props.scale);
}
function nr(e, t, r) {
  const n = !(0, U.isNum)(e.lastX), s = Ae(e);
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
function or(e, t) {
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
function ar(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function Ae(e) {
  const t = e.findDOMNode();
  if (!t)
    throw new Error("<DraggableCore>: Unmounted during event!");
  return t;
}
var me = {}, ve = {};
Object.defineProperty(ve, "__esModule", {
  value: !0
});
ve.default = ir;
function ir() {
}
Object.defineProperty(me, "__esModule", {
  value: !0
});
me.default = void 0;
var Oe = ur(ze), k = $e(Qe), sr = $e(Ge), F = Y, ne = Q, xe = Z, de = $e(ve);
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
function ur(e, t) {
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
  return t = cr(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cr(e) {
  var t = lr(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function lr(e, t) {
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
const z = {
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
let oe = z.mouse, be = class extends Oe.Component {
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
        let h = n - this.lastX || 0, m = s - this.lastY || 0;
        [h, m] = (0, ne.snapToGrid)(this.props.grid, h, m), n = this.lastX + h, s = this.lastY + m;
      }
      const i = (0, ne.createCoreData)(this, n, s);
      if (this.props.onStop(t, i) === !1 || this.mounted === !1)
        return !1;
      const c = this.findDOMNode();
      c && this.props.enableUserSelectHack && (0, F.removeUserSelectStyles)(c.ownerDocument), (0, de.default)("DraggableCore: handleDragStop: %j", i), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, c && ((0, de.default)("DraggableCore: Removing handlers"), (0, F.removeEvent)(c.ownerDocument, oe.move, this.handleDrag), (0, F.removeEvent)(c.ownerDocument, oe.stop, this.handleDragStop));
    }), X(this, "onMouseDown", (t) => (oe = z.mouse, this.handleDragStart(t))), X(this, "onMouseUp", (t) => (oe = z.mouse, this.handleDragStop(t))), X(this, "onTouchStart", (t) => (oe = z.touch, this.handleDragStart(t))), X(this, "onTouchEnd", (t) => (oe = z.touch, this.handleDragStop(t)));
  }
  componentDidMount() {
    this.mounted = !0;
    const t = this.findDOMNode();
    t && (0, F.addEvent)(t, z.touch.start, this.onTouchStart, {
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
      (0, F.removeEvent)(r, z.mouse.move, this.handleDrag), (0, F.removeEvent)(r, z.touch.move, this.handleDrag), (0, F.removeEvent)(r, z.mouse.stop, this.handleDragStop), (0, F.removeEvent)(r, z.touch.stop, this.handleDragStop), (0, F.removeEvent)(t, z.touch.start, this.onTouchStart, {
        passive: !1
      }), this.props.enableUserSelectHack && (0, F.removeUserSelectStyles)(r);
    }
  }
  // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
  // the underlying DOM node ourselves. See the README for more information.
  findDOMNode() {
    var t, r;
    return (t = this.props) !== null && t !== void 0 && t.nodeRef ? (r = this.props) === null || r === void 0 || (r = r.nodeRef) === null || r === void 0 ? void 0 : r.current : sr.default.findDOMNode(this);
  }
  render() {
    return /* @__PURE__ */ Oe.cloneElement(Oe.Children.only(this.props.children), {
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
  allowAnyClick: k.default.bool,
  children: k.default.node.isRequired,
  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: k.default.bool,
  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: k.default.bool,
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
  grid: k.default.arrayOf(k.default.number),
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
  handle: k.default.string,
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
  cancel: k.default.string,
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
  nodeRef: k.default.object,
  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: k.default.func,
  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: k.default.func,
  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: k.default.func,
  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: k.default.func,
  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: k.default.number,
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
  var t = $(ze), r = y(Qe), n = y(Ge), s = y(xt), i = Y, d = Q, c = Z, h = y(me), m = y(ve);
  function y(g) {
    return g && g.__esModule ? g : { default: g };
  }
  function w(g) {
    if (typeof WeakMap != "function")
      return null;
    var f = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakMap();
    return (w = function(o) {
      return o ? p : f;
    })(g);
  }
  function $(g, f) {
    if (!f && g && g.__esModule)
      return g;
    if (g === null || typeof g != "object" && typeof g != "function")
      return { default: g };
    var p = w(f);
    if (p && p.has(g))
      return p.get(g);
    var o = {}, N = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var P in g)
      if (P !== "default" && Object.prototype.hasOwnProperty.call(g, P)) {
        var V = N ? Object.getOwnPropertyDescriptor(g, P) : null;
        V && (V.get || V.set) ? Object.defineProperty(o, P, V) : o[P] = g[P];
      }
    return o.default = g, p && p.set(g, o), o;
  }
  function M() {
    return M = Object.assign ? Object.assign.bind() : function(g) {
      for (var f = 1; f < arguments.length; f++) {
        var p = arguments[f];
        for (var o in p)
          Object.prototype.hasOwnProperty.call(p, o) && (g[o] = p[o]);
      }
      return g;
    }, M.apply(this, arguments);
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
        prevPropsPosition: N
      } = p;
      return o && (!N || o.x !== N.x || o.y !== N.y) ? ((0, m.default)("Draggable: getDerivedStateFromProps %j", {
        position: o,
        prevPropsPosition: N
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
        if ((0, m.default)("Draggable: onDragStart: %j", o), this.props.onStart(p, (0, d.createDraggableData)(this, o)) === !1)
          return !1;
        this.setState({
          dragging: !0,
          dragged: !0
        });
      }), I(this, "onDrag", (p, o) => {
        if (!this.state.dragging)
          return !1;
        (0, m.default)("Draggable: onDrag: %j", o);
        const N = (0, d.createDraggableData)(this, o), P = {
          x: N.x,
          y: N.y,
          slackX: 0,
          slackY: 0
        };
        if (this.props.bounds) {
          const {
            x: ee,
            y: G
          } = P;
          P.x += this.state.slackX, P.y += this.state.slackY;
          const [te, se] = (0, d.getBoundPosition)(this, P.x, P.y);
          P.x = te, P.y = se, P.slackX = this.state.slackX + (ee - P.x), P.slackY = this.state.slackY + (G - P.y), N.x = P.x, N.y = P.y, N.deltaX = P.x - this.state.x, N.deltaY = P.y - this.state.y;
        }
        if (this.props.onDrag(p, N) === !1)
          return !1;
        this.setState(P);
      }), I(this, "onDragStop", (p, o) => {
        if (!this.state.dragging || this.props.onStop(p, (0, d.createDraggableData)(this, o)) === !1)
          return !1;
        (0, m.default)("Draggable: onDragStop: %j", o);
        const P = {
          dragging: !1,
          slackX: 0,
          slackY: 0
        };
        if (!!this.props.position) {
          const {
            x: ee,
            y: G
          } = this.props.position;
          P.x = ee, P.y = G;
        }
        this.setState(P);
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
        defaultPosition: N,
        defaultClassName: P,
        defaultClassNameDragging: V,
        defaultClassNameDragged: ee,
        position: G,
        positionOffset: te,
        scale: se,
        ...fe
      } = this.props;
      let re = {}, ue = null;
      const K = !!!G || this.state.dragging, ae = G || N, ce = {
        // Set left if horizontal drag is enabled
        x: (0, d.canDragX)(this) && K ? this.state.x : ae.x,
        // Set top if vertical drag is enabled
        y: (0, d.canDragY)(this) && K ? this.state.y : ae.y
      };
      this.state.isElementSVG ? ue = (0, i.createSVGTransform)(ce, te) : re = (0, i.createCSSTransform)(ce, te);
      const a = (0, s.default)(o.props.className || "", P, {
        [V]: this.state.dragging,
        [ee]: this.state.dragged
      });
      return /* @__PURE__ */ t.createElement(h.default, M({}, fe, {
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
  DraggableCore: fr
} = Ke;
ye.exports = ut;
ye.exports.default = ut;
ye.exports.DraggableCore = fr;
var dr = ye.exports;
const pr = /* @__PURE__ */ mt(dr);
function hr(e) {
  return /* @__PURE__ */ L(
    pr,
    {
      handle: "#draggable-dialog-title",
      cancel: '[class*="MuiDialogContent-root"]',
      children: /* @__PURE__ */ L(ft, { ...e })
    }
  );
}
const Cr = ({ columns: e, isOpen: t, onClose: r, setFilter: n, defaultFilter: s = {} }) => {
  const i = (M) => {
    M.stopPropagation();
  };
  var { getFieldManager: d, getFormData: c } = gt(s, () => {
  }, "edit");
  const h = () => {
    n({});
  }, m = () => {
    var M = c();
    n && n(M);
  }, y = () => {
    r();
  }, w = (M) => {
    M.keyCode === 27 && y();
  }, $ = pt(e);
  return /* @__PURE__ */ L("div", { className: "grid-filter-container", children: /* @__PURE__ */ Se(
    ct,
    {
      open: t,
      onClick: i,
      PaperComponent: hr,
      onKeyDown: w,
      children: [
        /* @__PURE__ */ Se("div", { className: "grid-filter-header-container", children: [
          /* @__PURE__ */ L("div", { className: "grid-header-text-container", children: /* @__PURE__ */ L("div", { id: "draggable-dialog-title", children: " Filter" }) }),
          /* @__PURE__ */ L("div", { className: "grid-header-icon-container", onClick: y, children: /* @__PURE__ */ L(lt, { title: "close", arrow: !0, children: /* @__PURE__ */ L(dt, { className: "filter-cancel-icon" }) }) })
        ] }),
        /* @__PURE__ */ L("span", { className: "filter-header-border" }),
        /* @__PURE__ */ L("div", { className: "grid-filter-content", children: /* @__PURE__ */ L(bt.Provider, { value: d, children: /* @__PURE__ */ L(
          ht,
          {
            context: { formData: {} },
            layout: {
              type: "form",
              formLayout: {
                fields: $,
                options: {
                  columns: 2
                }
              },
              Renderer: vt
            }
          }
        ) }) }),
        /* @__PURE__ */ Se("div", { className: "grid-filter-btn-container", children: [
          /* @__PURE__ */ L(Ie, { className: "filter-reset-btn", disableRipple: !0, onClick: h, children: "Reset" }),
          /* @__PURE__ */ L(Ie, { className: "filter-button", disableRipple: !0, onClick: m, children: "Filter" })
        ] })
      ]
    }
  ) });
};
export {
  Cr as default
};
