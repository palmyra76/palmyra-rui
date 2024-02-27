import { g as Ee } from "./_commonjsHelpers.js";
var ae = { exports: {} }, V = { exports: {} }, m = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fe;
function ge() {
  if (fe)
    return m;
  fe = 1;
  var o = typeof Symbol == "function" && Symbol.for, I = o ? Symbol.for("react.element") : 60103, P = o ? Symbol.for("react.portal") : 60106, y = o ? Symbol.for("react.fragment") : 60107, S = o ? Symbol.for("react.strict_mode") : 60108, a = o ? Symbol.for("react.profiler") : 60114, O = o ? Symbol.for("react.provider") : 60109, l = o ? Symbol.for("react.context") : 60110, _ = o ? Symbol.for("react.async_mode") : 60111, g = o ? Symbol.for("react.concurrent_mode") : 60111, b = o ? Symbol.for("react.forward_ref") : 60112, E = o ? Symbol.for("react.suspense") : 60113, C = o ? Symbol.for("react.suspense_list") : 60120, x = o ? Symbol.for("react.memo") : 60115, M = o ? Symbol.for("react.lazy") : 60116, R = o ? Symbol.for("react.block") : 60121, j = o ? Symbol.for("react.fundamental") : 60117, Y = o ? Symbol.for("react.responder") : 60118, F = o ? Symbol.for("react.scope") : 60119;
  function A(t) {
    if (typeof t == "object" && t !== null) {
      var k = t.$$typeof;
      switch (k) {
        case I:
          switch (t = t.type, t) {
            case _:
            case g:
            case y:
            case a:
            case S:
            case E:
              return t;
            default:
              switch (t = t && t.$$typeof, t) {
                case l:
                case b:
                case M:
                case x:
                case O:
                  return t;
                default:
                  return k;
              }
          }
        case P:
          return k;
      }
    }
  }
  function w(t) {
    return A(t) === g;
  }
  return m.AsyncMode = _, m.ConcurrentMode = g, m.ContextConsumer = l, m.ContextProvider = O, m.Element = I, m.ForwardRef = b, m.Fragment = y, m.Lazy = M, m.Memo = x, m.Portal = P, m.Profiler = a, m.StrictMode = S, m.Suspense = E, m.isAsyncMode = function(t) {
    return w(t) || A(t) === _;
  }, m.isConcurrentMode = w, m.isContextConsumer = function(t) {
    return A(t) === l;
  }, m.isContextProvider = function(t) {
    return A(t) === O;
  }, m.isElement = function(t) {
    return typeof t == "object" && t !== null && t.$$typeof === I;
  }, m.isForwardRef = function(t) {
    return A(t) === b;
  }, m.isFragment = function(t) {
    return A(t) === y;
  }, m.isLazy = function(t) {
    return A(t) === M;
  }, m.isMemo = function(t) {
    return A(t) === x;
  }, m.isPortal = function(t) {
    return A(t) === P;
  }, m.isProfiler = function(t) {
    return A(t) === a;
  }, m.isStrictMode = function(t) {
    return A(t) === S;
  }, m.isSuspense = function(t) {
    return A(t) === E;
  }, m.isValidElementType = function(t) {
    return typeof t == "string" || typeof t == "function" || t === y || t === g || t === a || t === S || t === E || t === C || typeof t == "object" && t !== null && (t.$$typeof === M || t.$$typeof === x || t.$$typeof === O || t.$$typeof === l || t.$$typeof === b || t.$$typeof === j || t.$$typeof === Y || t.$$typeof === F || t.$$typeof === R);
  }, m.typeOf = A, m;
}
var h = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ue;
function Se() {
  return ue || (ue = 1, process.env.NODE_ENV !== "production" && function() {
    var o = typeof Symbol == "function" && Symbol.for, I = o ? Symbol.for("react.element") : 60103, P = o ? Symbol.for("react.portal") : 60106, y = o ? Symbol.for("react.fragment") : 60107, S = o ? Symbol.for("react.strict_mode") : 60108, a = o ? Symbol.for("react.profiler") : 60114, O = o ? Symbol.for("react.provider") : 60109, l = o ? Symbol.for("react.context") : 60110, _ = o ? Symbol.for("react.async_mode") : 60111, g = o ? Symbol.for("react.concurrent_mode") : 60111, b = o ? Symbol.for("react.forward_ref") : 60112, E = o ? Symbol.for("react.suspense") : 60113, C = o ? Symbol.for("react.suspense_list") : 60120, x = o ? Symbol.for("react.memo") : 60115, M = o ? Symbol.for("react.lazy") : 60116, R = o ? Symbol.for("react.block") : 60121, j = o ? Symbol.for("react.fundamental") : 60117, Y = o ? Symbol.for("react.responder") : 60118, F = o ? Symbol.for("react.scope") : 60119;
    function A(r) {
      return typeof r == "string" || typeof r == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      r === y || r === g || r === a || r === S || r === E || r === C || typeof r == "object" && r !== null && (r.$$typeof === M || r.$$typeof === x || r.$$typeof === O || r.$$typeof === l || r.$$typeof === b || r.$$typeof === j || r.$$typeof === Y || r.$$typeof === F || r.$$typeof === R);
    }
    function w(r) {
      if (typeof r == "object" && r !== null) {
        var D = r.$$typeof;
        switch (D) {
          case I:
            var B = r.type;
            switch (B) {
              case _:
              case g:
              case y:
              case a:
              case S:
              case E:
                return B;
              default:
                var se = B && B.$$typeof;
                switch (se) {
                  case l:
                  case b:
                  case M:
                  case x:
                  case O:
                    return se;
                  default:
                    return D;
                }
            }
          case P:
            return D;
        }
      }
    }
    var t = _, k = g, N = l, H = O, J = I, X = b, U = y, G = M, K = x, L = P, Z = a, q = S, W = E, z = !1;
    function Q(r) {
      return z || (z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(r) || w(r) === _;
    }
    function e(r) {
      return w(r) === g;
    }
    function n(r) {
      return w(r) === l;
    }
    function u(r) {
      return w(r) === O;
    }
    function s(r) {
      return typeof r == "object" && r !== null && r.$$typeof === I;
    }
    function i(r) {
      return w(r) === b;
    }
    function p(r) {
      return w(r) === y;
    }
    function c(r) {
      return w(r) === M;
    }
    function f(r) {
      return w(r) === x;
    }
    function d(r) {
      return w(r) === P;
    }
    function T(r) {
      return w(r) === a;
    }
    function v(r) {
      return w(r) === S;
    }
    function $(r) {
      return w(r) === E;
    }
    h.AsyncMode = t, h.ConcurrentMode = k, h.ContextConsumer = N, h.ContextProvider = H, h.Element = J, h.ForwardRef = X, h.Fragment = U, h.Lazy = G, h.Memo = K, h.Portal = L, h.Profiler = Z, h.StrictMode = q, h.Suspense = W, h.isAsyncMode = Q, h.isConcurrentMode = e, h.isContextConsumer = n, h.isContextProvider = u, h.isElement = s, h.isForwardRef = i, h.isFragment = p, h.isLazy = c, h.isMemo = f, h.isPortal = d, h.isProfiler = T, h.isStrictMode = v, h.isSuspense = $, h.isValidElementType = A, h.typeOf = w;
  }()), h;
}
var le;
function he() {
  return le || (le = 1, process.env.NODE_ENV === "production" ? V.exports = ge() : V.exports = Se()), V.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ee, ye;
function Oe() {
  if (ye)
    return ee;
  ye = 1;
  var o = Object.getOwnPropertySymbols, I = Object.prototype.hasOwnProperty, P = Object.prototype.propertyIsEnumerable;
  function y(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function S() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var O = {}, l = 0; l < 10; l++)
        O["_" + String.fromCharCode(l)] = l;
      var _ = Object.getOwnPropertyNames(O).map(function(b) {
        return O[b];
      });
      if (_.join("") !== "0123456789")
        return !1;
      var g = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(b) {
        g[b] = b;
      }), Object.keys(Object.assign({}, g)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ee = S() ? Object.assign : function(a, O) {
    for (var l, _ = y(a), g, b = 1; b < arguments.length; b++) {
      l = Object(arguments[b]);
      for (var E in l)
        I.call(l, E) && (_[E] = l[E]);
      if (o) {
        g = o(l);
        for (var C = 0; C < g.length; C++)
          P.call(l, g[C]) && (_[g[C]] = l[g[C]]);
      }
    }
    return _;
  }, ee;
}
var re, pe;
function ce() {
  if (pe)
    return re;
  pe = 1;
  var o = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return re = o, re;
}
var te, de;
function Te() {
  return de || (de = 1, te = Function.call.bind(Object.prototype.hasOwnProperty)), te;
}
var ne, ve;
function Pe() {
  if (ve)
    return ne;
  ve = 1;
  var o = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var I = ce(), P = {}, y = Te();
    o = function(a) {
      var O = "Warning: " + a;
      typeof console < "u" && console.error(O);
      try {
        throw new Error(O);
      } catch {
      }
    };
  }
  function S(a, O, l, _, g) {
    if (process.env.NODE_ENV !== "production") {
      for (var b in a)
        if (y(a, b)) {
          var E;
          try {
            if (typeof a[b] != "function") {
              var C = Error(
                (_ || "React class") + ": " + l + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw C.name = "Invariant Violation", C;
            }
            E = a[b](O, b, _, l, null, I);
          } catch (M) {
            E = M;
          }
          if (E && !(E instanceof Error) && o(
            (_ || "React class") + ": type specification of " + l + " `" + b + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof E + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), E instanceof Error && !(E.message in P)) {
            P[E.message] = !0;
            var x = g ? g() : "";
            o(
              "Failed " + l + " type: " + E.message + (x ?? "")
            );
          }
        }
    }
  }
  return S.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (P = {});
  }, ne = S, ne;
}
var oe, be;
function _e() {
  if (be)
    return oe;
  be = 1;
  var o = he(), I = Oe(), P = ce(), y = Te(), S = Pe(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(l) {
    var _ = "Warning: " + l;
    typeof console < "u" && console.error(_);
    try {
      throw new Error(_);
    } catch {
    }
  });
  function O() {
    return null;
  }
  return oe = function(l, _) {
    var g = typeof Symbol == "function" && Symbol.iterator, b = "@@iterator";
    function E(e) {
      var n = e && (g && e[g] || e[b]);
      if (typeof n == "function")
        return n;
    }
    var C = "<<anonymous>>", x = {
      array: Y("array"),
      bigint: Y("bigint"),
      bool: Y("boolean"),
      func: Y("function"),
      number: Y("number"),
      object: Y("object"),
      string: Y("string"),
      symbol: Y("symbol"),
      any: F(),
      arrayOf: A,
      element: w(),
      elementType: t(),
      instanceOf: k,
      node: X(),
      objectOf: H,
      oneOf: N,
      oneOfType: J,
      shape: G,
      exact: K
    };
    function M(e, n) {
      return e === n ? e !== 0 || 1 / e === 1 / n : e !== e && n !== n;
    }
    function R(e, n) {
      this.message = e, this.data = n && typeof n == "object" ? n : {}, this.stack = "";
    }
    R.prototype = Error.prototype;
    function j(e) {
      if (process.env.NODE_ENV !== "production")
        var n = {}, u = 0;
      function s(p, c, f, d, T, v, $) {
        if (d = d || C, v = v || f, $ !== P) {
          if (_) {
            var r = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw r.name = "Invariant Violation", r;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var D = d + ":" + f;
            !n[D] && // Avoid spamming the console because they are often not actionable except for lib authors
            u < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + v + "` prop on `" + d + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), n[D] = !0, u++);
          }
        }
        return c[f] == null ? p ? c[f] === null ? new R("The " + T + " `" + v + "` is marked as required " + ("in `" + d + "`, but its value is `null`.")) : new R("The " + T + " `" + v + "` is marked as required in " + ("`" + d + "`, but its value is `undefined`.")) : null : e(c, f, d, T, v);
      }
      var i = s.bind(null, !1);
      return i.isRequired = s.bind(null, !0), i;
    }
    function Y(e) {
      function n(u, s, i, p, c, f) {
        var d = u[s], T = q(d);
        if (T !== e) {
          var v = W(d);
          return new R(
            "Invalid " + p + " `" + c + "` of type " + ("`" + v + "` supplied to `" + i + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return j(n);
    }
    function F() {
      return j(O);
    }
    function A(e) {
      function n(u, s, i, p, c) {
        if (typeof e != "function")
          return new R("Property `" + c + "` of component `" + i + "` has invalid PropType notation inside arrayOf.");
        var f = u[s];
        if (!Array.isArray(f)) {
          var d = q(f);
          return new R("Invalid " + p + " `" + c + "` of type " + ("`" + d + "` supplied to `" + i + "`, expected an array."));
        }
        for (var T = 0; T < f.length; T++) {
          var v = e(f, T, i, p, c + "[" + T + "]", P);
          if (v instanceof Error)
            return v;
        }
        return null;
      }
      return j(n);
    }
    function w() {
      function e(n, u, s, i, p) {
        var c = n[u];
        if (!l(c)) {
          var f = q(c);
          return new R("Invalid " + i + " `" + p + "` of type " + ("`" + f + "` supplied to `" + s + "`, expected a single ReactElement."));
        }
        return null;
      }
      return j(e);
    }
    function t() {
      function e(n, u, s, i, p) {
        var c = n[u];
        if (!o.isValidElementType(c)) {
          var f = q(c);
          return new R("Invalid " + i + " `" + p + "` of type " + ("`" + f + "` supplied to `" + s + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return j(e);
    }
    function k(e) {
      function n(u, s, i, p, c) {
        if (!(u[s] instanceof e)) {
          var f = e.name || C, d = Q(u[s]);
          return new R("Invalid " + p + " `" + c + "` of type " + ("`" + d + "` supplied to `" + i + "`, expected ") + ("instance of `" + f + "`."));
        }
        return null;
      }
      return j(n);
    }
    function N(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), O;
      function n(u, s, i, p, c) {
        for (var f = u[s], d = 0; d < e.length; d++)
          if (M(f, e[d]))
            return null;
        var T = JSON.stringify(e, function($, r) {
          var D = W(r);
          return D === "symbol" ? String(r) : r;
        });
        return new R("Invalid " + p + " `" + c + "` of value `" + String(f) + "` " + ("supplied to `" + i + "`, expected one of " + T + "."));
      }
      return j(n);
    }
    function H(e) {
      function n(u, s, i, p, c) {
        if (typeof e != "function")
          return new R("Property `" + c + "` of component `" + i + "` has invalid PropType notation inside objectOf.");
        var f = u[s], d = q(f);
        if (d !== "object")
          return new R("Invalid " + p + " `" + c + "` of type " + ("`" + d + "` supplied to `" + i + "`, expected an object."));
        for (var T in f)
          if (y(f, T)) {
            var v = e(f, T, i, p, c + "." + T, P);
            if (v instanceof Error)
              return v;
          }
        return null;
      }
      return j(n);
    }
    function J(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), O;
      for (var n = 0; n < e.length; n++) {
        var u = e[n];
        if (typeof u != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + z(u) + " at index " + n + "."
          ), O;
      }
      function s(i, p, c, f, d) {
        for (var T = [], v = 0; v < e.length; v++) {
          var $ = e[v], r = $(i, p, c, f, d, P);
          if (r == null)
            return null;
          r.data && y(r.data, "expectedType") && T.push(r.data.expectedType);
        }
        var D = T.length > 0 ? ", expected one of type [" + T.join(", ") + "]" : "";
        return new R("Invalid " + f + " `" + d + "` supplied to " + ("`" + c + "`" + D + "."));
      }
      return j(s);
    }
    function X() {
      function e(n, u, s, i, p) {
        return L(n[u]) ? null : new R("Invalid " + i + " `" + p + "` supplied to " + ("`" + s + "`, expected a ReactNode."));
      }
      return j(e);
    }
    function U(e, n, u, s, i) {
      return new R(
        (e || "React class") + ": " + n + " type `" + u + "." + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + i + "`."
      );
    }
    function G(e) {
      function n(u, s, i, p, c) {
        var f = u[s], d = q(f);
        if (d !== "object")
          return new R("Invalid " + p + " `" + c + "` of type `" + d + "` " + ("supplied to `" + i + "`, expected `object`."));
        for (var T in e) {
          var v = e[T];
          if (typeof v != "function")
            return U(i, p, c, T, W(v));
          var $ = v(f, T, i, p, c + "." + T, P);
          if ($)
            return $;
        }
        return null;
      }
      return j(n);
    }
    function K(e) {
      function n(u, s, i, p, c) {
        var f = u[s], d = q(f);
        if (d !== "object")
          return new R("Invalid " + p + " `" + c + "` of type `" + d + "` " + ("supplied to `" + i + "`, expected `object`."));
        var T = I({}, u[s], e);
        for (var v in T) {
          var $ = e[v];
          if (y(e, v) && typeof $ != "function")
            return U(i, p, c, v, W($));
          if (!$)
            return new R(
              "Invalid " + p + " `" + c + "` key `" + v + "` supplied to `" + i + "`.\nBad object: " + JSON.stringify(u[s], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var r = $(f, v, i, p, c + "." + v, P);
          if (r)
            return r;
        }
        return null;
      }
      return j(n);
    }
    function L(e) {
      switch (typeof e) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !e;
        case "object":
          if (Array.isArray(e))
            return e.every(L);
          if (e === null || l(e))
            return !0;
          var n = E(e);
          if (n) {
            var u = n.call(e), s;
            if (n !== e.entries) {
              for (; !(s = u.next()).done; )
                if (!L(s.value))
                  return !1;
            } else
              for (; !(s = u.next()).done; ) {
                var i = s.value;
                if (i && !L(i[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Z(e, n) {
      return e === "symbol" ? !0 : n ? n["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && n instanceof Symbol : !1;
    }
    function q(e) {
      var n = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : Z(n, e) ? "symbol" : n;
    }
    function W(e) {
      if (typeof e > "u" || e === null)
        return "" + e;
      var n = q(e);
      if (n === "object") {
        if (e instanceof Date)
          return "date";
        if (e instanceof RegExp)
          return "regexp";
      }
      return n;
    }
    function z(e) {
      var n = W(e);
      switch (n) {
        case "array":
        case "object":
          return "an " + n;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + n;
        default:
          return n;
      }
    }
    function Q(e) {
      return !e.constructor || !e.constructor.name ? C : e.constructor.name;
    }
    return x.checkPropTypes = S, x.resetWarningCache = S.resetWarningCache, x.PropTypes = x, x;
  }, oe;
}
var ie, me;
function Re() {
  if (me)
    return ie;
  me = 1;
  var o = ce();
  function I() {
  }
  function P() {
  }
  return P.resetWarningCache = I, ie = function() {
    function y(O, l, _, g, b, E) {
      if (E !== o) {
        var C = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw C.name = "Invariant Violation", C;
      }
    }
    y.isRequired = y;
    function S() {
      return y;
    }
    var a = {
      array: y,
      bigint: y,
      bool: y,
      func: y,
      number: y,
      object: y,
      string: y,
      symbol: y,
      any: y,
      arrayOf: S,
      element: y,
      elementType: y,
      instanceOf: S,
      node: y,
      objectOf: S,
      oneOf: S,
      oneOfType: S,
      shape: S,
      exact: S,
      checkPropTypes: P,
      resetWarningCache: I
    };
    return a.PropTypes = a, a;
  }, ie;
}
if (process.env.NODE_ENV !== "production") {
  var Ce = he(), xe = !0;
  ae.exports = _e()(Ce.isElement, xe);
} else
  ae.exports = Re()();
var we = ae.exports;
const Ie = /* @__PURE__ */ Ee(we);
export {
  we as p,
  Ie as t
};
