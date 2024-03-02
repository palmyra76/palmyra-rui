import "../assets/AsyncTreeMenu.css";
import { g as vt } from "./_commonjsHelpers.js";
import le, { useRef as me, useReducer as Pt, useEffect as ae } from "react";
var ht = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var e = {}.hasOwnProperty;
    function r() {
      for (var i = "", c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        d && (i = s(i, n(d)));
      }
      return i;
    }
    function n(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return r.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var c = "";
      for (var d in i)
        e.call(i, d) && i[d] && (c = s(c, d));
      return c;
    }
    function s(i, c) {
      return c ? i ? i + " " + c : i + c : i;
    }
    t.exports ? (r.default = r, t.exports = r) : window.classNames = r;
  })();
})(ht);
var Wt = ht.exports;
const xe = /* @__PURE__ */ vt(Wt);
var qe = { exports: {} }, Te = { exports: {} }, N = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nt;
function Mt() {
  if (nt)
    return N;
  nt = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, s = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, c = t ? Symbol.for("react.provider") : 60109, d = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, v = t ? Symbol.for("react.concurrent_mode") : 60111, w = t ? Symbol.for("react.forward_ref") : 60112, g = t ? Symbol.for("react.suspense") : 60113, R = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, _ = t ? Symbol.for("react.lazy") : 60116, p = t ? Symbol.for("react.block") : 60121, P = t ? Symbol.for("react.fundamental") : 60117, M = t ? Symbol.for("react.responder") : 60118, H = t ? Symbol.for("react.scope") : 60119;
  function b(o) {
    if (typeof o == "object" && o !== null) {
      var W = o.$$typeof;
      switch (W) {
        case e:
          switch (o = o.type, o) {
            case u:
            case v:
            case n:
            case i:
            case s:
            case g:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case d:
                case w:
                case _:
                case m:
                case c:
                  return o;
                default:
                  return W;
              }
          }
        case r:
          return W;
      }
    }
  }
  function A(o) {
    return b(o) === v;
  }
  return N.AsyncMode = u, N.ConcurrentMode = v, N.ContextConsumer = d, N.ContextProvider = c, N.Element = e, N.ForwardRef = w, N.Fragment = n, N.Lazy = _, N.Memo = m, N.Portal = r, N.Profiler = i, N.StrictMode = s, N.Suspense = g, N.isAsyncMode = function(o) {
    return A(o) || b(o) === u;
  }, N.isConcurrentMode = A, N.isContextConsumer = function(o) {
    return b(o) === d;
  }, N.isContextProvider = function(o) {
    return b(o) === c;
  }, N.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === e;
  }, N.isForwardRef = function(o) {
    return b(o) === w;
  }, N.isFragment = function(o) {
    return b(o) === n;
  }, N.isLazy = function(o) {
    return b(o) === _;
  }, N.isMemo = function(o) {
    return b(o) === m;
  }, N.isPortal = function(o) {
    return b(o) === r;
  }, N.isProfiler = function(o) {
    return b(o) === i;
  }, N.isStrictMode = function(o) {
    return b(o) === s;
  }, N.isSuspense = function(o) {
    return b(o) === g;
  }, N.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === n || o === v || o === i || o === s || o === g || o === R || typeof o == "object" && o !== null && (o.$$typeof === _ || o.$$typeof === m || o.$$typeof === c || o.$$typeof === d || o.$$typeof === w || o.$$typeof === P || o.$$typeof === M || o.$$typeof === H || o.$$typeof === p);
  }, N.typeOf = b, N;
}
var U = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var at;
function Dt() {
  return at || (at = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, s = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, c = t ? Symbol.for("react.provider") : 60109, d = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, v = t ? Symbol.for("react.concurrent_mode") : 60111, w = t ? Symbol.for("react.forward_ref") : 60112, g = t ? Symbol.for("react.suspense") : 60113, R = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, _ = t ? Symbol.for("react.lazy") : 60116, p = t ? Symbol.for("react.block") : 60121, P = t ? Symbol.for("react.fundamental") : 60117, M = t ? Symbol.for("react.responder") : 60118, H = t ? Symbol.for("react.scope") : 60119;
    function b(f) {
      return typeof f == "string" || typeof f == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      f === n || f === v || f === i || f === s || f === g || f === R || typeof f == "object" && f !== null && (f.$$typeof === _ || f.$$typeof === m || f.$$typeof === c || f.$$typeof === d || f.$$typeof === w || f.$$typeof === P || f.$$typeof === M || f.$$typeof === H || f.$$typeof === p);
    }
    function A(f) {
      if (typeof f == "object" && f !== null) {
        var Q = f.$$typeof;
        switch (Q) {
          case e:
            var fe = f.type;
            switch (fe) {
              case u:
              case v:
              case n:
              case i:
              case s:
              case g:
                return fe;
              default:
                var X = fe && fe.$$typeof;
                switch (X) {
                  case d:
                  case w:
                  case _:
                  case m:
                  case c:
                    return X;
                  default:
                    return Q;
                }
            }
          case r:
            return Q;
        }
      }
    }
    var o = u, W = v, Y = d, J = c, L = e, B = w, $ = n, D = _, F = m, j = r, k = i, q = s, K = g, se = !1;
    function ce(f) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), a(f) || A(f) === u;
    }
    function a(f) {
      return A(f) === v;
    }
    function l(f) {
      return A(f) === d;
    }
    function h(f) {
      return A(f) === c;
    }
    function y(f) {
      return typeof f == "object" && f !== null && f.$$typeof === e;
    }
    function S(f) {
      return A(f) === w;
    }
    function x(f) {
      return A(f) === n;
    }
    function I(f) {
      return A(f) === _;
    }
    function T(f) {
      return A(f) === m;
    }
    function C(f) {
      return A(f) === r;
    }
    function O(f) {
      return A(f) === i;
    }
    function E(f) {
      return A(f) === s;
    }
    function V(f) {
      return A(f) === g;
    }
    U.AsyncMode = o, U.ConcurrentMode = W, U.ContextConsumer = Y, U.ContextProvider = J, U.Element = L, U.ForwardRef = B, U.Fragment = $, U.Lazy = D, U.Memo = F, U.Portal = j, U.Profiler = k, U.StrictMode = q, U.Suspense = K, U.isAsyncMode = ce, U.isConcurrentMode = a, U.isContextConsumer = l, U.isContextProvider = h, U.isElement = y, U.isForwardRef = S, U.isFragment = x, U.isLazy = I, U.isMemo = T, U.isPortal = C, U.isProfiler = O, U.isStrictMode = E, U.isSuspense = V, U.isValidElementType = b, U.typeOf = A;
  }()), U;
}
var it;
function bt() {
  return it || (it = 1, process.env.NODE_ENV === "production" ? Te.exports = Mt() : Te.exports = Dt()), Te.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var De, st;
function kt() {
  if (st)
    return De;
  st = 1;
  var t = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
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
      for (var c = {}, d = 0; d < 10; d++)
        c["_" + String.fromCharCode(d)] = d;
      var u = Object.getOwnPropertyNames(c).map(function(w) {
        return c[w];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var v = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(w) {
        v[w] = w;
      }), Object.keys(Object.assign({}, v)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return De = s() ? Object.assign : function(i, c) {
    for (var d, u = n(i), v, w = 1; w < arguments.length; w++) {
      d = Object(arguments[w]);
      for (var g in d)
        e.call(d, g) && (u[g] = d[g]);
      if (t) {
        v = t(d);
        for (var R = 0; R < v.length; R++)
          r.call(d, v[R]) && (u[v[R]] = d[v[R]]);
      }
    }
    return u;
  }, De;
}
var ke, lt;
function Ke() {
  if (lt)
    return ke;
  lt = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ke = t, ke;
}
var Ne, ot;
function St() {
  return ot || (ot = 1, Ne = Function.call.bind(Object.prototype.hasOwnProperty)), Ne;
}
var Ue, ct;
function Nt() {
  if (ct)
    return Ue;
  ct = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = Ke(), r = {}, n = St();
    t = function(i) {
      var c = "Warning: " + i;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    };
  }
  function s(i, c, d, u, v) {
    if (process.env.NODE_ENV !== "production") {
      for (var w in i)
        if (n(i, w)) {
          var g;
          try {
            if (typeof i[w] != "function") {
              var R = Error(
                (u || "React class") + ": " + d + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw R.name = "Invariant Violation", R;
            }
            g = i[w](c, w, u, d, null, e);
          } catch (_) {
            g = _;
          }
          if (g && !(g instanceof Error) && t(
            (u || "React class") + ": type specification of " + d + " `" + w + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in r)) {
            r[g.message] = !0;
            var m = v ? v() : "";
            t(
              "Failed " + d + " type: " + g.message + (m ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Ue = s, Ue;
}
var Le, dt;
function Ut() {
  if (dt)
    return Le;
  dt = 1;
  var t = bt(), e = kt(), r = Ke(), n = St(), s = Nt(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(d) {
    var u = "Warning: " + d;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function c() {
    return null;
  }
  return Le = function(d, u) {
    var v = typeof Symbol == "function" && Symbol.iterator, w = "@@iterator";
    function g(a) {
      var l = a && (v && a[v] || a[w]);
      if (typeof l == "function")
        return l;
    }
    var R = "<<anonymous>>", m = {
      array: M("array"),
      bigint: M("bigint"),
      bool: M("boolean"),
      func: M("function"),
      number: M("number"),
      object: M("object"),
      string: M("string"),
      symbol: M("symbol"),
      any: H(),
      arrayOf: b,
      element: A(),
      elementType: o(),
      instanceOf: W,
      node: B(),
      objectOf: J,
      oneOf: Y,
      oneOfType: L,
      shape: D,
      exact: F
    };
    function _(a, l) {
      return a === l ? a !== 0 || 1 / a === 1 / l : a !== a && l !== l;
    }
    function p(a, l) {
      this.message = a, this.data = l && typeof l == "object" ? l : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function P(a) {
      if (process.env.NODE_ENV !== "production")
        var l = {}, h = 0;
      function y(x, I, T, C, O, E, V) {
        if (C = C || R, E = E || T, V !== r) {
          if (u) {
            var f = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw f.name = "Invariant Violation", f;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Q = C + ":" + T;
            !l[Q] && // Avoid spamming the console because they are often not actionable except for lib authors
            h < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + E + "` prop on `" + C + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), l[Q] = !0, h++);
          }
        }
        return I[T] == null ? x ? I[T] === null ? new p("The " + O + " `" + E + "` is marked as required " + ("in `" + C + "`, but its value is `null`.")) : new p("The " + O + " `" + E + "` is marked as required in " + ("`" + C + "`, but its value is `undefined`.")) : null : a(I, T, C, O, E);
      }
      var S = y.bind(null, !1);
      return S.isRequired = y.bind(null, !0), S;
    }
    function M(a) {
      function l(h, y, S, x, I, T) {
        var C = h[y], O = q(C);
        if (O !== a) {
          var E = K(C);
          return new p(
            "Invalid " + x + " `" + I + "` of type " + ("`" + E + "` supplied to `" + S + "`, expected ") + ("`" + a + "`."),
            { expectedType: a }
          );
        }
        return null;
      }
      return P(l);
    }
    function H() {
      return P(c);
    }
    function b(a) {
      function l(h, y, S, x, I) {
        if (typeof a != "function")
          return new p("Property `" + I + "` of component `" + S + "` has invalid PropType notation inside arrayOf.");
        var T = h[y];
        if (!Array.isArray(T)) {
          var C = q(T);
          return new p("Invalid " + x + " `" + I + "` of type " + ("`" + C + "` supplied to `" + S + "`, expected an array."));
        }
        for (var O = 0; O < T.length; O++) {
          var E = a(T, O, S, x, I + "[" + O + "]", r);
          if (E instanceof Error)
            return E;
        }
        return null;
      }
      return P(l);
    }
    function A() {
      function a(l, h, y, S, x) {
        var I = l[h];
        if (!d(I)) {
          var T = q(I);
          return new p("Invalid " + S + " `" + x + "` of type " + ("`" + T + "` supplied to `" + y + "`, expected a single ReactElement."));
        }
        return null;
      }
      return P(a);
    }
    function o() {
      function a(l, h, y, S, x) {
        var I = l[h];
        if (!t.isValidElementType(I)) {
          var T = q(I);
          return new p("Invalid " + S + " `" + x + "` of type " + ("`" + T + "` supplied to `" + y + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return P(a);
    }
    function W(a) {
      function l(h, y, S, x, I) {
        if (!(h[y] instanceof a)) {
          var T = a.name || R, C = ce(h[y]);
          return new p("Invalid " + x + " `" + I + "` of type " + ("`" + C + "` supplied to `" + S + "`, expected ") + ("instance of `" + T + "`."));
        }
        return null;
      }
      return P(l);
    }
    function Y(a) {
      if (!Array.isArray(a))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), c;
      function l(h, y, S, x, I) {
        for (var T = h[y], C = 0; C < a.length; C++)
          if (_(T, a[C]))
            return null;
        var O = JSON.stringify(a, function(V, f) {
          var Q = K(f);
          return Q === "symbol" ? String(f) : f;
        });
        return new p("Invalid " + x + " `" + I + "` of value `" + String(T) + "` " + ("supplied to `" + S + "`, expected one of " + O + "."));
      }
      return P(l);
    }
    function J(a) {
      function l(h, y, S, x, I) {
        if (typeof a != "function")
          return new p("Property `" + I + "` of component `" + S + "` has invalid PropType notation inside objectOf.");
        var T = h[y], C = q(T);
        if (C !== "object")
          return new p("Invalid " + x + " `" + I + "` of type " + ("`" + C + "` supplied to `" + S + "`, expected an object."));
        for (var O in T)
          if (n(T, O)) {
            var E = a(T, O, S, x, I + "." + O, r);
            if (E instanceof Error)
              return E;
          }
        return null;
      }
      return P(l);
    }
    function L(a) {
      if (!Array.isArray(a))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), c;
      for (var l = 0; l < a.length; l++) {
        var h = a[l];
        if (typeof h != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(h) + " at index " + l + "."
          ), c;
      }
      function y(S, x, I, T, C) {
        for (var O = [], E = 0; E < a.length; E++) {
          var V = a[E], f = V(S, x, I, T, C, r);
          if (f == null)
            return null;
          f.data && n(f.data, "expectedType") && O.push(f.data.expectedType);
        }
        var Q = O.length > 0 ? ", expected one of type [" + O.join(", ") + "]" : "";
        return new p("Invalid " + T + " `" + C + "` supplied to " + ("`" + I + "`" + Q + "."));
      }
      return P(y);
    }
    function B() {
      function a(l, h, y, S, x) {
        return j(l[h]) ? null : new p("Invalid " + S + " `" + x + "` supplied to " + ("`" + y + "`, expected a ReactNode."));
      }
      return P(a);
    }
    function $(a, l, h, y, S) {
      return new p(
        (a || "React class") + ": " + l + " type `" + h + "." + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + S + "`."
      );
    }
    function D(a) {
      function l(h, y, S, x, I) {
        var T = h[y], C = q(T);
        if (C !== "object")
          return new p("Invalid " + x + " `" + I + "` of type `" + C + "` " + ("supplied to `" + S + "`, expected `object`."));
        for (var O in a) {
          var E = a[O];
          if (typeof E != "function")
            return $(S, x, I, O, K(E));
          var V = E(T, O, S, x, I + "." + O, r);
          if (V)
            return V;
        }
        return null;
      }
      return P(l);
    }
    function F(a) {
      function l(h, y, S, x, I) {
        var T = h[y], C = q(T);
        if (C !== "object")
          return new p("Invalid " + x + " `" + I + "` of type `" + C + "` " + ("supplied to `" + S + "`, expected `object`."));
        var O = e({}, h[y], a);
        for (var E in O) {
          var V = a[E];
          if (n(a, E) && typeof V != "function")
            return $(S, x, I, E, K(V));
          if (!V)
            return new p(
              "Invalid " + x + " `" + I + "` key `" + E + "` supplied to `" + S + "`.\nBad object: " + JSON.stringify(h[y], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(a), null, "  ")
            );
          var f = V(T, E, S, x, I + "." + E, r);
          if (f)
            return f;
        }
        return null;
      }
      return P(l);
    }
    function j(a) {
      switch (typeof a) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !a;
        case "object":
          if (Array.isArray(a))
            return a.every(j);
          if (a === null || d(a))
            return !0;
          var l = g(a);
          if (l) {
            var h = l.call(a), y;
            if (l !== a.entries) {
              for (; !(y = h.next()).done; )
                if (!j(y.value))
                  return !1;
            } else
              for (; !(y = h.next()).done; ) {
                var S = y.value;
                if (S && !j(S[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function k(a, l) {
      return a === "symbol" ? !0 : l ? l["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && l instanceof Symbol : !1;
    }
    function q(a) {
      var l = typeof a;
      return Array.isArray(a) ? "array" : a instanceof RegExp ? "object" : k(l, a) ? "symbol" : l;
    }
    function K(a) {
      if (typeof a > "u" || a === null)
        return "" + a;
      var l = q(a);
      if (l === "object") {
        if (a instanceof Date)
          return "date";
        if (a instanceof RegExp)
          return "regexp";
      }
      return l;
    }
    function se(a) {
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
      return !a.constructor || !a.constructor.name ? R : a.constructor.name;
    }
    return m.checkPropTypes = s, m.resetWarningCache = s.resetWarningCache, m.PropTypes = m, m;
  }, Le;
}
var $e, ut;
function Lt() {
  if (ut)
    return $e;
  ut = 1;
  var t = Ke();
  function e() {
  }
  function r() {
  }
  return r.resetWarningCache = e, $e = function() {
    function n(c, d, u, v, w, g) {
      if (g !== t) {
        var R = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw R.name = "Invariant Violation", R;
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
      resetWarningCache: e
    };
    return i.PropTypes = i, i;
  }, $e;
}
if (process.env.NODE_ENV !== "production") {
  var $t = bt(), Ft = !0;
  qe.exports = Ut()($t.isElement, Ft);
} else
  qe.exports = Lt()();
var Yt = qe.exports;
const G = /* @__PURE__ */ vt(Yt);
function Ve(t) {
  return (Ve = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(t);
}
function Fe(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function gt(t, e) {
  return function(r) {
    if (Array.isArray(r))
      return r;
  }(t) || function(r, n) {
    var s = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
    if (s != null) {
      var i, c, d = [], u = !0, v = !1;
      try {
        for (s = s.call(r); !(u = (i = s.next()).done) && (d.push(i.value), !n || d.length !== n); u = !0)
          ;
      } catch (w) {
        v = !0, c = w;
      } finally {
        try {
          u || s.return == null || s.return();
        } finally {
          if (v)
            throw c;
        }
      }
      return d;
    }
  }(t, e) || Ge(t, e) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function ie(t) {
  return function(e) {
    if (Array.isArray(e))
      return ze(e);
  }(t) || function(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
      return Array.from(e);
  }(t) || Ge(t) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Ge(t, e) {
  if (t) {
    if (typeof t == "string")
      return ze(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ze(t, e) : void 0;
  }
}
function ze(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function te(t, e) {
  var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!r) {
    if (Array.isArray(t) || (r = Ge(t)) || e && t && typeof t.length == "number") {
      r && (t = r);
      var n = 0, s = function() {
      };
      return { s, n: function() {
        return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
      }, e: function(u) {
        throw u;
      }, f: s };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i, c = !0, d = !1;
  return { s: function() {
    r = r.call(t);
  }, n: function() {
    var u = r.next();
    return c = u.done, u;
  }, e: function(u) {
    d = !0, i = u;
  }, f: function() {
    try {
      c || r.return == null || r.return();
    } finally {
      if (d)
        throw i;
    }
  } };
}
function Je(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") {
    var s = 0;
    for (n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
  }
  return r;
}
var ft = { root: "tree", node: "tree-node", branch: "tree-node__branch", branchWrapper: "tree-branch-wrapper", leafListItem: "tree-leaf-list-item", leaf: "tree-node__leaf", nodeGroup: "tree-node-group" }, oe = { select: "SELECT", focus: "FOCUS", exclusiveSelect: "EXCLUSIVE_SELECT" }, qt = Object.freeze(Object.values(oe)), zt = Object.freeze(Object.values({ check: "check", select: "select" })), Xe = "COLLAPSE", Re = "COLLAPSE_MANY", Ae = "EXPAND", Ze = "EXPAND_MANY", Qe = "HALF_SELECT", Ie = "SELECT", mt = "DESELECT", je = "TOGGLE", Ce = "TOGGLE_SELECT", ue = "SELECT_MANY", It = "EXCLUSIVE_CHANGE_SELECT_MANY", re = "FOCUS", Et = "BLUR", Bt = "DISABLE", Ht = "ENABLE", wt = "CLEAR_MANUALLY_TOGGLED", Tt = "CONTROLLED_SELECT_MANY", Ot = "UPDATE_TREE_STATE_WHEN_DATA_CHANGED", be = function() {
}, Ye = function() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return function(n) {
    for (var s = 0, i = e; s < i.length; s++) {
      var c = i[s];
      if (c && c(n), n.defaultPrevented)
        break;
    }
  };
}, ye = function(t, e) {
  var r, n = /* @__PURE__ */ new Set(), s = te(t);
  try {
    for (s.s(); !(r = s.n()).done; ) {
      var i = r.value;
      e.has(i) || n.add(i);
    }
  } catch (c) {
    s.e(c);
  } finally {
    s.f();
  }
  return n;
}, Oe = function(t, e) {
  return new Set([].concat(ie(ye(t, e)), ie(ye(e, t))));
}, pt = function(t) {
  var e = me();
  return ae(function() {
    e.current = t;
  }, [t]), e.current;
}, ee = function(t, e) {
  var r;
  return !!(!((r = z(t, e).children) === null || r === void 0) && r.length);
}, he = function(t, e) {
  return z(t, e).parent;
}, Kt = function(t, e, r) {
  for (var n = e, s = []; ; ) {
    var i = he(t, n);
    if (i === 0 || i == null || i != null && r.has(i))
      break;
    s.push(i), n = i;
  }
  return s;
}, Se = function(t, e, r) {
  var n = [];
  return function s(i, c) {
    var d = z(i, c);
    if (d.children != null) {
      var u, v = te(d.children.filter(function(g) {
        return !r.has(g);
      }));
      try {
        for (v.s(); !(u = v.n()).done; ) {
          var w = u.value;
          n.push(w), s(i, w);
        }
      } catch (g) {
        v.e(g);
      } finally {
        v.f();
      }
    }
  }(t, e), n;
}, xt = function(t, e) {
  var r = z(t, e);
  return r.children == null ? [] : r.children;
}, At = function(t, e, r) {
  var n = he(t, e);
  if (n != null) {
    var s = z(t, n), i = s.children.indexOf(e) + r;
    if (s.children[i])
      return s.children[i];
  }
  return null;
}, Be = function(t, e, r) {
  var n = z(t, e);
  for (ne(t).id === e && (n = z(t, z(t, e).children[z(t, e).children.length - 1])); r.has(n.id) && ee(t, n.id); )
    n = z(t, n.children[n.children.length - 1]);
  return n.id;
}, He = function(t, e, r) {
  if (e === ne(t).children[0])
    return null;
  var n = At(t, e, -1);
  return n == null ? he(t, e) : Be(t, n, r);
}, ge = function(t, e, r) {
  var n = z(t, e).id;
  if (ee(t, n) && r.has(n))
    return z(t, n).children[0];
  for (; ; ) {
    var s = At(t, n, 1);
    if (s != null)
      return s;
    if ((n = he(t, n)) == null)
      return null;
  }
}, Ct = function(t) {
  var e = t.data, r = t.expandedIds, n = t.from, s = t.to, i = [], c = e.length, d = 0, u = n;
  if (i.push(n), n < s)
    for (; d < c && ((u = ge(e, u, r)) != null && i.push(u), u != null && u !== s); )
      d += 1;
  else if (n > s)
    for (; d < c && ((u = He(e, u, r)) != null && i.push(u), u != null && u !== s); )
      d += 1;
  return i;
}, Vt = function(t) {
  var e = t.isSelected, r = t.isDisabled, n = t.multiSelect;
  return r || n ? e : !!e || void 0;
}, Gt = function(t) {
  var e = t.isSelected, r = t.isDisabled, n = t.isHalfSelected, s = t.multiSelect;
  return r ? e : n ? "mixed" : s ? e : !!e || void 0;
}, ve = function(t, e, r) {
  return e.concat.apply(e, ie(e.filter(function(n) {
    return ee(t, n);
  }).map(function(n) {
    return Se(t, n, r);
  })));
}, Jt = function(t, e, r) {
  e != null ? window.navigator.userAgent.match(/Trident/) ? setTimeout(function() {
    return !e.contains(document.activeElement) && r();
  }, 0) : !e.contains(t.nativeEvent.relatedTarget) && r() : console.warn("ref not set on <ul>");
}, Xt = function(t, e, r) {
  var n = xt(t, e);
  return ee(t, e) && !r.has(e) && n.length === 1 && n.every(function(s) {
    return r.has(s);
  });
}, Rt = function(t, e, r, n) {
  var s = function(c, d, u) {
    return ee(c, d) && u.has(d) && Se(c, d, /* @__PURE__ */ new Set()).some(function(v) {
      return u.has(v);
    });
  }(t, e, r), i = function(c, d, u) {
    var v = xt(c, d);
    return ee(c, d) && u.has(d) && v.length === 1 && v.every(function(w) {
      return u.has(w);
    });
  }(t, e, r);
  return function(c, d, u, v) {
    var w = Se(c, d, /* @__PURE__ */ new Set());
    return ee(c, d) && u.has(d) && w.every(function(g) {
      return u.has(g);
    }) && w.every(function(g) {
      return !v.has(g);
    });
  }(t, e, r, n) ? Ce : s && !i ? Qe : Ce;
}, ne = function(t) {
  var e = t.find(function(r) {
    return r.parent === null;
  });
  if (!e)
    throw Error("TreeView data must contain parent node.");
  return e;
}, z = function(t, e) {
  var r = t.find(function(n) {
    return n.id === e;
  });
  if (r == null)
    throw Error("Node with id=".concat(e, " doesn't exist in the tree."));
  return r;
}, yt = function(t) {
  var e = Array.from(new Set(t));
  return t.length !== e.length;
}, Zt = function(t, e) {
  switch (e.type) {
    case Xe:
      var r = new Set(t.expandedIds);
      return r.delete(e.id), Object.assign(Object.assign({}, t), { expandedIds: r, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Re:
      var n, s = new Set(t.expandedIds), i = te(e.ids);
      try {
        for (i.s(); !(n = i.n()).done; ) {
          var c = n.value;
          s.delete(c);
        }
      } catch (K) {
        i.e(K);
      } finally {
        i.f();
      }
      return Object.assign(Object.assign({}, t), { expandedIds: s, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Ae:
      var d = new Set(t.expandedIds);
      return d.add(e.id), Object.assign(Object.assign({}, t), { expandedIds: d, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Ze:
      var u = new Set([].concat(ie(t.expandedIds), ie(e.ids)));
      return Object.assign(Object.assign({}, t), { expandedIds: u, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case je:
      var v = new Set(t.expandedIds);
      return t.expandedIds.has(e.id) ? v.delete(e.id) : v.add(e.id), Object.assign(Object.assign({}, t), { expandedIds: v, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Qe:
      if (t.disabledIds.has(e.id))
        return t;
      var w = new Set(t.halfSelectedIds), g = new Set(t.selectedIds);
      return w.add(e.id), g.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: g, halfSelectedIds: w, tabbableId: e.keepFocus ? t.tabbableId : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id });
    case Ie:
      if (!e.NotUserAction && t.disabledIds.has(e.id))
        return t;
      var R;
      e.multiSelect ? (R = new Set(t.selectedIds)).add(e.id) : (R = /* @__PURE__ */ new Set()).add(e.id);
      var m = new Set(t.halfSelectedIds);
      return m.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: R, halfSelectedIds: m, tabbableId: e.keepFocus ? t.tabbableId : e.id, isFocused: e.NotUserAction !== !0, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case mt:
      if (!e.NotUserAction && t.disabledIds.has(e.id))
        return t;
      var _, p = new Set(t.selectedIds);
      return p.delete(e.id), e.multiSelect ? (_ = new Set(t.halfSelectedIds)).delete(e.id) : _ = /* @__PURE__ */ new Set(), Object.assign(Object.assign({}, t), { selectedIds: p, halfSelectedIds: _, tabbableId: e.keepFocus ? t.tabbableId : e.id, isFocused: !0, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case Ce:
      if (t.disabledIds.has(e.id))
        return t;
      var P, M = t.selectedIds.has(e.id);
      e.multiSelect ? (P = new Set(t.selectedIds), M ? P.delete(e.id) : P.add(e.id)) : (P = /* @__PURE__ */ new Set(), M || P.add(e.id));
      var H = new Set(t.halfSelectedIds);
      return H.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: P, halfSelectedIds: H, tabbableId: e.id, isFocused: !0, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case ue:
      var b, A = e.ids.filter(function(K) {
        return !t.disabledIds.has(K);
      });
      if (e.multiSelect) {
        b = e.select ? new Set([].concat(ie(t.selectedIds), ie(A))) : ye(t.selectedIds, new Set(A));
        var o = ye(t.halfSelectedIds, b);
        return Object.assign(Object.assign({}, t), { selectedIds: b, halfSelectedIds: o, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
      }
      return t;
    case It:
      var W, Y = e.ids.filter(function(K) {
        return !t.disabledIds.has(K);
      });
      if (e.multiSelect) {
        W = e.select ? new Set(Y) : ye(t.selectedIds, new Set(Y));
        var J = ye(t.halfSelectedIds, W);
        return Object.assign(Object.assign({}, t), { selectedIds: W, halfSelectedIds: J, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
      }
      return t;
    case Tt:
      var L, B = t.lastInteractedWith, $ = t.tabbableId;
      if (e.multiSelect)
        L = new Set(e.ids), e.ids.length && (B = e.ids[e.ids.length - 1], $ = e.ids[e.ids.length - 1]);
      else {
        L = /* @__PURE__ */ new Set(), e.ids.length > 1 && console.warn("Tree in singleSelect mode, only the first item from selectedIds will be selected.");
        var D = e.ids[0];
        D && L.add(D), B = D ?? B, $ = D ?? B;
      }
      var F = new Set(t.halfSelectedIds);
      e.ids.every(function(K) {
        return F.delete(K);
      });
      var j = new Set(e.ids);
      return Object.assign(Object.assign({}, t), { selectedIds: L, halfSelectedIds: F, controlledIds: j, isFocused: !0, lastAction: e.type, tabbableId: $, lastInteractedWith: B });
    case re:
      return Object.assign(Object.assign({}, t), { tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Et:
      return Object.assign(Object.assign({}, t), { isFocused: !1 });
    case Bt:
      var k = new Set(t.disabledIds);
      return k.add(e.id), Object.assign(Object.assign({}, t), { disabledIds: k });
    case Ht:
      var q = new Set(t.disabledIds);
      return q.delete(e.id), Object.assign(Object.assign({}, t), { disabledIds: q });
    case wt:
      return Object.assign(Object.assign({}, t), { lastManuallyToggled: null });
    case Ot:
      return Object.assign(Object.assign({}, t), { tabbableId: e.tabbableId, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled, lastUserSelect: e.lastUserSelect });
    default:
      throw new Error("Invalid action passed to the reducer");
  }
}, jt = function(t) {
  var e = t.element, r = t.dispatch, n = t.data, s = t.selectedIds, i = t.tabbableId, c = t.isFocused, d = t.expandedIds, u = t.disabledIds, v = t.halfSelectedIds, w = t.lastUserSelect, g = t.nodeRefs, R = t.leafRefs, m = t.baseClassNames, _ = t.nodeRenderer, p = t.nodeAction, P = t.setsize, M = t.posinset, H = t.level, b = t.propagateCollapse, A = t.propagateSelect, o = t.multiSelect, W = t.togglableSelect, Y = t.clickAction, J = t.state, L = function(j) {
    if (!(j.ctrlKey || j.altKey || j.shiftKey))
      if (d.has(e.id) && b) {
        var k = [e.id].concat(ie(Se(n, e.id, /* @__PURE__ */ new Set())));
        r({ type: Re, ids: k, lastInteractedWith: e.id });
      } else
        r({ type: je, id: e.id, lastInteractedWith: e.id });
  }, B = function() {
    return r({ type: re, id: e.id, lastInteractedWith: e.id });
  }, $ = function(j) {
    if (j.shiftKey) {
      var k = Ct({ data: n, expandedIds: d, from: w, to: e.id }).filter(function(q) {
        return !u.has(q);
      });
      k = A ? ve(n, k, u) : k, r({ type: It, select: !0, multiSelect: o, ids: k, lastInteractedWith: e.id, lastManuallyToggled: e.id });
    } else
      j.ctrlKey || Y === oe.select ? (r({ type: W ? Rt(n, e.id, s, u) : Ie, id: e.id, multiSelect: o, lastInteractedWith: e.id, lastManuallyToggled: e.id }), A && !u.has(e.id) && r({ type: ue, ids: ve(n, [e.id], u), select: !W || !s.has(e.id), multiSelect: o, lastInteractedWith: e.id, lastManuallyToggled: e.id })) : Y === oe.exclusiveSelect ? r({ type: W ? Ce : Ie, id: e.id, multiSelect: !1, lastInteractedWith: e.id, lastManuallyToggled: e.id }) : Y === oe.focus && r({ type: re, id: e.id, lastInteractedWith: e.id });
  }, D = function(j) {
    var k;
    return xe(j, (Fe(k = {}, "".concat(j, "--expanded"), d.has(e.id)), Fe(k, "".concat(j, "--selected"), s.has(e.id)), Fe(k, "".concat(j, "--focused"), i === e.id && c), k));
  }, F = p === "select" ? { "aria-selected": Vt({ isSelected: s.has(e.id), isDisabled: u.has(e.id), multiSelect: o }) } : { "aria-checked": Gt({ isSelected: s.has(e.id), isDisabled: u.has(e.id), isHalfSelected: v.has(e.id), multiSelect: o }) };
  return ee(n, e.id) || e.isBranch ? le.createElement("li", Object.assign({ role: "treeitem", "aria-expanded": d.has(e.id), "aria-setsize": P, "aria-posinset": M, "aria-level": H, "aria-disabled": u.has(e.id), tabIndex: i === e.id ? 0 : -1, ref: function(j) {
    (g == null ? void 0 : g.current) != null && j != null && (g.current[e.id] = j);
  }, className: m.branchWrapper }, F), le.createElement(le.Fragment, null, _({ element: e, isBranch: !0, isSelected: s.has(e.id), isHalfSelected: v.has(e.id), isExpanded: d.has(e.id), isDisabled: u.has(e.id), dispatch: r, getNodeProps: function() {
    var j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, k = j.onClick;
    return { onClick: k == null ? Ye($, L, B) : Ye(k, B), className: xe(D(m.node), m.branch), ref: function(q) {
      (R == null ? void 0 : R.current) != null && (R.current[e.id] = q);
    } };
  }, setsize: P, posinset: M, level: H, handleSelect: $, handleExpand: L, treeState: J }), le.createElement(Qt, Object.assign({ getClasses: D }, function(j) {
    return j.setsize, j.posinset, Je(j, ["setsize", "posinset"]);
  }(t))))) : le.createElement("li", { role: "none", className: D(m.leafListItem) }, _({ element: e, isBranch: !1, isSelected: s.has(e.id), isHalfSelected: !1, isExpanded: !1, isDisabled: u.has(e.id), dispatch: r, getNodeProps: function() {
    var j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, k = j.onClick;
    return Object.assign({ role: "treeitem", tabIndex: i === e.id ? 0 : -1, onClick: Ye(k ?? $, B), ref: function(q) {
      (g == null ? void 0 : g.current) != null && (R == null ? void 0 : R.current) != null && (g.current[e.id] = q, R.current[e.id] = q);
    }, className: xe(D(m.node), m.leaf), "aria-setsize": P, "aria-posinset": M, "aria-level": H, disabled: u.has(e.id), "aria-disabled": u.has(e.id) }, F);
  }, setsize: P, posinset: M, level: H, handleSelect: $, handleExpand: be, treeState: J }));
}, Qt = function(t) {
  var e = t.data, r = t.element, n = t.expandedIds, s = t.getClasses, i = t.baseClassNames, c = t.level, d = Je(t, ["data", "element", "expandedIds", "getClasses", "baseClassNames", "level"]);
  return le.createElement("ul", { role: "group", className: s(i.nodeGroup) }, n.has(r.id) && r.children.length > 0 && r.children.map(function(u, v) {
    return le.createElement(jt, Object.assign({ data: e, expandedIds: n, baseClassNames: i, key: "".concat(u, "-").concat(Ve(u)), element: z(e, u), setsize: r.children.length, posinset: v + 1, level: c + 1 }, d));
  }));
}, er = function(t) {
  var e = t.data, r = t.controlledSelectedIds, n = t.controlledExpandedIds, s = t.defaultExpandedIds, i = t.defaultSelectedIds, c = t.defaultDisabledIds, d = t.nodeRefs, u = t.leafRefs, v = t.onSelect, w = t.onNodeSelect, g = t.onExpand, R = t.onLoadData, m = t.togglableSelect, _ = t.multiSelect, p = t.propagateSelect, P = t.propagateSelectUpwards, M = ne(e), H = gt(Pt(Zt, { selectedIds: new Set(r || i), controlledIds: new Set(r), tabbableId: M.children[0], isFocused: !1, expandedIds: new Set(n || s), halfSelectedIds: /* @__PURE__ */ new Set(), lastUserSelect: M.children[0], lastInteractedWith: null, lastManuallyToggled: null, disabledIds: new Set(c) }), 2), b = H[0], A = H[1], o = b.selectedIds, W = b.expandedIds, Y = b.disabledIds, J = b.tabbableId, L = b.halfSelectedIds, B = b.lastAction, $ = b.lastInteractedWith, D = b.lastManuallyToggled, F = pt(o) || /* @__PURE__ */ new Set(), j = Oe(o, F);
  ae(function() {
    var a;
    if (v != null && v !== be) {
      var l, h = te(j);
      try {
        for (h.s(); !(l = h.n()).done; ) {
          var y = l.value, S = ee(e, y) || !!(!((a = z(e, J)) === null || a === void 0) && a.isBranch);
          v({ element: z(e, y), isBranch: S, isExpanded: !!S && W.has(y), isSelected: o.has(y), isDisabled: Y.has(y), isHalfSelected: !!S && L.has(y), treeState: b });
        }
      } catch (x) {
        h.e(x);
      } finally {
        h.f();
      }
    }
  }, [e, o, W, Y, L, j, v, b]), ae(function() {
    w != null && w !== be && D != null && j.size && (w({ element: z(e, D), isSelected: o.has(D), isBranch: ee(e, D), treeState: b }), A({ type: wt }));
  }, [D, o, j]);
  var k = pt(W) || /* @__PURE__ */ new Set();
  ae(function() {
    var a = Oe(W, k);
    if (g != null && g !== be) {
      var l, h = te(a);
      try {
        for (h.s(); !(l = h.n()).done; ) {
          var y = l.value;
          g({ element: z(e, y), isExpanded: W.has(y), isSelected: o.has(y), isDisabled: Y.has(y), isHalfSelected: L.has(y), treeState: b });
        }
      } catch (S) {
        h.e(S);
      } finally {
        h.f();
      }
    }
  }, [e, o, W, Y, L, k, g, b]);
  var q, K, se = (q = e, K = me(), ae(function() {
    K.current = q;
  }), K.current || /* @__PURE__ */ new Map());
  ae(function() {
    var a = Oe(W, k);
    if (R) {
      var l, h = te(a);
      try {
        for (h.s(); !(l = h.n()).done; ) {
          var y = l.value;
          R({ element: z(e, y), isExpanded: W.has(y), isSelected: o.has(y), isDisabled: Y.has(y), isHalfSelected: L.has(y), treeState: b });
        }
      } catch (T) {
        h.e(T);
      } finally {
        h.f();
      }
      if (se !== e && m && p) {
        var S, x = te(W);
        try {
          for (x.s(); !(S = x.n()).done; ) {
            var I = S.value;
            o.has(I) && A({ type: ue, ids: ve(e, [I], Y), select: !0, multiSelect: _, lastInteractedWith: I });
          }
        } catch (T) {
          x.e(T);
        } finally {
          x.f();
        }
      }
    }
  }, [e, o, W, Y, L, k, R, b]), ae(function() {
    if (se !== e) {
      var a = ne(e);
      a.children.length && A({ type: Ot, tabbableId: e.find(function(l) {
        return l.id === b.tabbableId;
      }) ? b.tabbableId : a.children[0], lastInteractedWith: e.find(function(l) {
        return l.id === b.lastInteractedWith;
      }) ? b.lastInteractedWith : null, lastManuallyToggled: e.find(function(l) {
        return l.id === b.lastManuallyToggled;
      }) ? b.lastManuallyToggled : null, lastUserSelect: e.find(function(l) {
        return l.id === b.lastUserSelect;
      }) ? b.lastUserSelect : a.children[0] });
    }
  }, [e]);
  var ce = Oe(new Set(r), o);
  return ae(function() {
    if (r) {
      ce.size && A({ type: Tt, ids: r, multiSelect: _ });
      var a, l = te(r);
      try {
        for (l.s(); !(a = l.n()).done; ) {
          var h = a.value;
          p && !Y.has(h) && A({ type: ue, ids: ve(e, [h], Y), select: !0, multiSelect: _, lastInteractedWith: h });
        }
      } catch (y) {
        l.e(y);
      } finally {
        l.f();
      }
    }
  }, [r]), ae(function() {
    var a = new Set(n), l = ye(a, k), h = ye(k, a);
    if (h.size) {
      var y, S = te(h);
      try {
        for (S.s(); !(y = S.n()).done; ) {
          var x = y.value;
          if (ee(e, x) || z(e, x).isBranch) {
            var I = [x].concat(ie(Se(e, x, /* @__PURE__ */ new Set())));
            A({ type: Re, ids: I, lastInteractedWith: x });
          }
        }
      } catch (V) {
        S.e(V);
      } finally {
        S.f();
      }
    }
    if (l.size) {
      var T, C = te(l);
      try {
        for (C.s(); !(T = C.n()).done; ) {
          var O = T.value;
          if (ee(e, O) || z(e, O).isBranch) {
            var E = he(e, O);
            A(E ? { type: Ze, ids: [O, E], lastInteractedWith: O } : { type: Ae, id: O, lastInteractedWith: O });
          }
        }
      } catch (V) {
        C.e(V);
      } finally {
        C.f();
      }
    }
  }, [n]), ae(function() {
    if (P) {
      var a = new Set(ie(j));
      $ && B !== re && B !== Xe && B !== Ae && B !== je && a.add($);
      var l = [];
      a.forEach(function(X) {
        e.find(function(_e) {
          return _e.id === X;
        }) || l.push(X);
      }), l.forEach(function(X) {
        return a.delete(X);
      });
      var h, y = function(X, _e, Pe, Ee, et, _t) {
        var tt, pe = { every: /* @__PURE__ */ new Set(), some: /* @__PURE__ */ new Set(), none: /* @__PURE__ */ new Set() }, we = te(_e);
        try {
          for (we.s(); !(tt = we.n()).done; )
            for (var We = tt.value; ; ) {
              var de = he(X, We);
              if (de === 0 || de == null || de != null && Ee.has(de))
                break;
              var Me = z(X, de).children.filter(function(Z) {
                return !Ee.has(Z);
              });
              if (Me.length === 0)
                break;
              if (Me.some(function(Z) {
                return Pe.has(Z) || pe.some.has(Z) && !pe.none.has(Z) || et.has(Z) && !pe.none.has(Z);
              }))
                Me.every(function(Z) {
                  return Pe.has(Z);
                }) ? pe.every.add(de) : pe.some.add(de);
              else {
                var rt = Kt(X, We, Ee).find(function(Z) {
                  return Pe.has(Z);
                });
                if (!_t && rt) {
                  Se(X, rt, Ee).forEach(function(Z) {
                    et.has(Z) && pe.none.add(Z);
                  });
                  break;
                }
                pe.none.add(de);
              }
              We = de;
            }
        } catch (Z) {
          we.e(Z);
        } finally {
          we.f();
        }
        return pe;
      }(e, a, o, Y, L, _), S = y.every, x = y.some, I = y.none, T = te(S);
      try {
        for (T.s(); !(h = T.n()).done; ) {
          var C = h.value;
          o.has(C) || A({ type: Ie, id: C, multiSelect: _ || Xt(e, C, o), keepFocus: !0, NotUserAction: !0, lastInteractedWith: $ });
        }
      } catch (X) {
        T.e(X);
      } finally {
        T.f();
      }
      var O, E = te(x);
      try {
        for (E.s(); !(O = E.n()).done; ) {
          var V = O.value;
          L.has(V) || A({ type: Qe, id: V, lastInteractedWith: $, keepFocus: !0, NotUserAction: !0 });
        }
      } catch (X) {
        E.e(X);
      } finally {
        E.f();
      }
      var f, Q = te(I);
      try {
        for (Q.s(); !(f = Q.n()).done; ) {
          var fe = f.value;
          (o.has(fe) || L.has(fe)) && A({ type: mt, id: fe, multiSelect: _, keepFocus: !0, NotUserAction: !0, lastInteractedWith: $, lastManuallyToggled: D });
        }
      } catch (X) {
        Q.e(X);
      } finally {
        Q.f();
      }
    }
  }, [e, _, P, o, W, Y, L, B, F, j, $, ce]), ae(function() {
    if ($ != null && J != null && (d == null ? void 0 : d.current) != null && (u == null ? void 0 : u.current) != null) {
      var a = d.current[J];
      (function(l) {
        l != null && l.scrollIntoView && l.scrollIntoView({ block: "nearest" });
      })(u.current[$]), function(l) {
        l != null && l.focus && l.focus({ preventScroll: !0 });
      }(a);
    }
  }, [J, d, u, $]), [b, A];
}, tr = le.forwardRef(function(t, e) {
  var r = t.data, n = t.selectedIds, s = t.nodeRenderer, i = t.onSelect, c = i === void 0 ? be : i, d = t.onNodeSelect, u = d === void 0 ? be : d, v = t.onExpand, w = v === void 0 ? be : v, g = t.onLoadData, R = t.className, m = R === void 0 ? "" : R, _ = t.multiSelect, p = _ !== void 0 && _, P = t.propagateSelect, M = P !== void 0 && P, H = t.propagateSelectUpwards, b = H !== void 0 && H, A = t.propagateCollapse, o = A !== void 0 && A, W = t.expandOnKeyboardSelect, Y = W !== void 0 && W, J = t.togglableSelect, L = J !== void 0 && J, B = t.defaultExpandedIds, $ = B === void 0 ? [] : B, D = t.defaultSelectedIds, F = D === void 0 ? [] : D, j = t.defaultDisabledIds, k = j === void 0 ? [] : j, q = t.clickAction, K = q === void 0 ? oe.select : q, se = t.nodeAction, ce = se === void 0 ? "select" : se, a = t.expandedIds, l = t.onBlur, h = Je(t, ["data", "selectedIds", "nodeRenderer", "onSelect", "onNodeSelect", "onExpand", "onLoadData", "className", "multiSelect", "propagateSelect", "propagateSelectUpwards", "propagateCollapse", "expandOnKeyboardSelect", "togglableSelect", "defaultExpandedIds", "defaultSelectedIds", "defaultDisabledIds", "clickAction", "nodeAction", "expandedIds", "onBlur"]);
  (function(O) {
    if (yt(O.map(function(E) {
      return E.id;
    })))
      throw Error("Multiple TreeView nodes have the same ID. IDs must be unique.");
    if (O.forEach(function(E) {
      if (E.id === E.parent)
        throw Error("Node with id=".concat(E.id, " has parent reference to itself."));
      if (yt(E.children))
        throw Error("Node with id=".concat(E.id, " contains duplicate ids in its children."));
    }), O.filter(function(E) {
      return E.parent === null;
    }).length === 0)
      throw Error("TreeView must have one root node.");
    if (O.filter(function(E) {
      return E.parent === null;
    }).length > 1)
      throw Error("TreeView can have only one root node.");
    ne(O).children.length || console.warn("TreeView have no nodes to display.");
  })(r);
  var y = me({}), S = me({}), x = gt(er({ data: r, controlledSelectedIds: n, controlledExpandedIds: a, defaultExpandedIds: $, defaultSelectedIds: F, defaultDisabledIds: k, nodeRefs: y, leafRefs: S, onSelect: c, onNodeSelect: u, onExpand: w, onLoadData: g, togglableSelect: L, multiSelect: p, propagateSelect: M, propagateSelectUpwards: b }), 2), I = x[0], T = x[1];
  M = M && p;
  var C = me(null);
  return e != null && (C = e), le.createElement("ul", Object.assign({ className: xe(ft.root, m), role: "tree", "aria-multiselectable": ce === "select" ? p : void 0, ref: C, onBlur: function(O) {
    Jt(O, C.current, function() {
      l && l({ treeState: I, dispatch: T }), T({ type: Et });
    });
  }, onKeyDown: rr({ data: r, tabbableId: I.tabbableId, expandedIds: I.expandedIds, selectedIds: I.selectedIds, disabledIds: I.disabledIds, halfSelectedIds: I.halfSelectedIds, clickAction: K, dispatch: T, propagateCollapse: o, propagateSelect: M, multiSelect: p, expandOnKeyboardSelect: Y, togglableSelect: L }) }, h), ne(r).children.map(function(O, E) {
    return le.createElement(jt, Object.assign({ key: "".concat(O, "-").concat(Ve(O)), data: r, element: z(r, O), setsize: ne(r).children.length, posinset: E + 1, level: 1 }, I, { state: I, dispatch: T, nodeRefs: y, leafRefs: S, baseClassNames: ft, nodeRenderer: s, propagateCollapse: o, propagateSelect: M, propagateSelectUpwards: b, multiSelect: p, togglableSelect: L, clickAction: K, nodeAction: ce }));
  }));
}), rr = function(t) {
  var e = t.data, r = t.expandedIds, n = t.selectedIds, s = t.disabledIds, i = t.tabbableId, c = t.dispatch, d = t.propagateCollapse, u = t.propagateSelect, v = t.multiSelect, w = t.expandOnKeyboardSelect, g = t.togglableSelect, R = t.clickAction;
  return function(m) {
    var _ = z(e, i), p = _.id;
    if (m.ctrlKey) {
      if (m.key === "a" && R !== oe.focus) {
        m.preventDefault();
        var P = e.filter(function(F) {
          return F.parent !== null;
        }).map(function(F) {
          return F.id;
        }).filter(function(F) {
          return !s.has(F);
        });
        c({ type: ue, multiSelect: v, select: Array.from(n).filter(function(F) {
          return !s.has(F);
        }).length !== P.length, ids: P, lastInteractedWith: _.id });
      } else if (m.shiftKey && (m.key === "Home" || m.key === "End") && R !== oe.focus) {
        var M = m.key === "Home" ? ne(e).children[0] : Be(e, p, r), H = Ct({ data: e, expandedIds: r, from: p, to: M }).filter(function(F) {
          return !s.has(F);
        });
        c({ type: ue, multiSelect: v, select: !0, ids: u ? ve(e, H, s) : H }), c({ type: re, id: M, lastInteractedWith: M });
      }
    } else {
      if (m.shiftKey)
        switch (m.key) {
          case "ArrowUp":
            m.preventDefault();
            var b = He(e, p, r);
            return void (b == null || s.has(b) || (R !== oe.focus && c({ type: ue, ids: u ? ve(e, [b], s) : [b], select: !0, multiSelect: v, lastInteractedWith: b, lastManuallyToggled: b }), c({ type: re, id: b, lastInteractedWith: b })));
          case "ArrowDown":
            m.preventDefault();
            var A = ge(e, p, r);
            return void (A == null || s.has(A) || (R !== oe.focus && c({ type: ue, ids: u ? ve(e, [A], s) : [A], multiSelect: v, select: !0, lastInteractedWith: A, lastManuallyToggled: A }), c({ type: re, id: A, lastInteractedWith: A })));
        }
      switch (m.key) {
        case "ArrowDown":
          m.preventDefault();
          var o = ge(e, p, r);
          return void (o != null && c({ type: re, id: o, lastInteractedWith: o }));
        case "ArrowUp":
          m.preventDefault();
          var W = He(e, p, r);
          return void (W != null && c({ type: re, id: W, lastInteractedWith: W }));
        case "ArrowLeft":
          if (m.preventDefault(), (ee(e, p) || _.isBranch) && r.has(i))
            if (d) {
              var Y = [p].concat(ie(Se(e, p, /* @__PURE__ */ new Set())));
              c({ type: Re, ids: Y, lastInteractedWith: _.id });
            } else
              c({ type: Xe, id: p, lastInteractedWith: p });
          else if (!ne(e).children.includes(p)) {
            var J = he(e, p);
            if (J == null)
              throw new Error("parentId of root element is null");
            c({ type: re, id: J, lastInteractedWith: J });
          }
          return;
        case "ArrowRight":
          return m.preventDefault(), void ((ee(e, p) || _.isBranch) && (r.has(i) ? c({ type: re, id: _.children[0], lastInteractedWith: _.children[0] }) : c({ type: Ae, id: p, lastInteractedWith: p })));
        case "Home":
          m.preventDefault(), c({ type: re, id: ne(e).children[0], lastInteractedWith: ne(e).children[0] });
          break;
        case "End":
          m.preventDefault();
          var L = Be(e, ne(e).id, r);
          return void c({ type: re, id: L, lastInteractedWith: L });
        case "*":
          m.preventDefault();
          var B = he(e, p);
          if (B == null)
            throw new Error("parentId of element is null");
          var $ = z(e, B).children.filter(function(F) {
            return ee(e, F) || z(e, F).isBranch;
          });
          return void c({ type: Ze, ids: $, lastInteractedWith: p });
        case "Enter":
        case " ":
        case "Spacebar":
          return m.preventDefault(), R === oe.focus ? void 0 : (c({ type: g ? Rt(e, p, n, s) : Ie, id: p, multiSelect: v, lastInteractedWith: p, lastManuallyToggled: p }), u && !s.has(_.id) && c({ type: ue, ids: ve(e, [p], s), select: !g || !n.has(p), multiSelect: v, lastInteractedWith: p, lastManuallyToggled: p }), void (w && c({ type: je, id: p, lastInteractedWith: p })));
        default:
          if (m.key.length === 1)
            for (var D = ge(e, p, r); D !== p; )
              if (D != null) {
                if (z(e, D).name[0].toLowerCase() === m.key.toLowerCase())
                  return void c({ type: re, id: D, lastInteractedWith: p });
                D = ge(e, D, r);
              } else
                D = ne(e).children[0];
          return;
      }
    }
  };
};
tr.propTypes = { data: G.array.isRequired, onSelect: G.func, onNodeSelect: G.func, onExpand: G.func, className: G.string, nodeRenderer: G.func.isRequired, defaultExpandedIds: G.array, defaultSelectedIds: G.array, expandedIds: G.array, selectedIds: G.array, defaultDisabledIds: G.array, propagateCollapse: G.bool, propagateSelect: G.bool, propagateSelectUpwards: G.bool, multiSelect: G.bool, expandOnKeyboardSelect: G.bool, togglableSelect: G.bool, nodeAction: G.oneOf(zt), clickAction: G.oneOf(qt), onBlur: G.func, onLoadData: G.func };
export {
  xe as c,
  tr as u
};
