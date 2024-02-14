import { G as me } from "./iconBase.js";
import { g as ge } from "./_commonjsHelpers.js";
function Me(o) {
  return me({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] })(o);
}
function $e(o) {
  return me({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] })(o);
}
var ie = { exports: {} }, V = { exports: {} }, h = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ue;
function Se() {
  if (ue)
    return h;
  ue = 1;
  var o = typeof Symbol == "function" && Symbol.for, I = o ? Symbol.for("react.element") : 60103, P = o ? Symbol.for("react.portal") : 60106, d = o ? Symbol.for("react.fragment") : 60107, S = o ? Symbol.for("react.strict_mode") : 60108, i = o ? Symbol.for("react.profiler") : 60114, O = o ? Symbol.for("react.provider") : 60109, l = o ? Symbol.for("react.context") : 60110, _ = o ? Symbol.for("react.async_mode") : 60111, g = o ? Symbol.for("react.concurrent_mode") : 60111, b = o ? Symbol.for("react.forward_ref") : 60112, E = o ? Symbol.for("react.suspense") : 60113, C = o ? Symbol.for("react.suspense_list") : 60120, x = o ? Symbol.for("react.memo") : 60115, $ = o ? Symbol.for("react.lazy") : 60116, R = o ? Symbol.for("react.block") : 60121, j = o ? Symbol.for("react.fundamental") : 60117, Y = o ? Symbol.for("react.responder") : 60118, z = o ? Symbol.for("react.scope") : 60119;
  function A(t) {
    if (typeof t == "object" && t !== null) {
      var k = t.$$typeof;
      switch (k) {
        case I:
          switch (t = t.type, t) {
            case _:
            case g:
            case d:
            case i:
            case S:
            case E:
              return t;
            default:
              switch (t = t && t.$$typeof, t) {
                case l:
                case b:
                case $:
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
  return h.AsyncMode = _, h.ConcurrentMode = g, h.ContextConsumer = l, h.ContextProvider = O, h.Element = I, h.ForwardRef = b, h.Fragment = d, h.Lazy = $, h.Memo = x, h.Portal = P, h.Profiler = i, h.StrictMode = S, h.Suspense = E, h.isAsyncMode = function(t) {
    return w(t) || A(t) === _;
  }, h.isConcurrentMode = w, h.isContextConsumer = function(t) {
    return A(t) === l;
  }, h.isContextProvider = function(t) {
    return A(t) === O;
  }, h.isElement = function(t) {
    return typeof t == "object" && t !== null && t.$$typeof === I;
  }, h.isForwardRef = function(t) {
    return A(t) === b;
  }, h.isFragment = function(t) {
    return A(t) === d;
  }, h.isLazy = function(t) {
    return A(t) === $;
  }, h.isMemo = function(t) {
    return A(t) === x;
  }, h.isPortal = function(t) {
    return A(t) === P;
  }, h.isProfiler = function(t) {
    return A(t) === i;
  }, h.isStrictMode = function(t) {
    return A(t) === S;
  }, h.isSuspense = function(t) {
    return A(t) === E;
  }, h.isValidElementType = function(t) {
    return typeof t == "string" || typeof t == "function" || t === d || t === g || t === i || t === S || t === E || t === C || typeof t == "object" && t !== null && (t.$$typeof === $ || t.$$typeof === x || t.$$typeof === O || t.$$typeof === l || t.$$typeof === b || t.$$typeof === j || t.$$typeof === Y || t.$$typeof === z || t.$$typeof === R);
  }, h.typeOf = A, h;
}
var m = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fe;
function Oe() {
  return fe || (fe = 1, process.env.NODE_ENV !== "production" && function() {
    var o = typeof Symbol == "function" && Symbol.for, I = o ? Symbol.for("react.element") : 60103, P = o ? Symbol.for("react.portal") : 60106, d = o ? Symbol.for("react.fragment") : 60107, S = o ? Symbol.for("react.strict_mode") : 60108, i = o ? Symbol.for("react.profiler") : 60114, O = o ? Symbol.for("react.provider") : 60109, l = o ? Symbol.for("react.context") : 60110, _ = o ? Symbol.for("react.async_mode") : 60111, g = o ? Symbol.for("react.concurrent_mode") : 60111, b = o ? Symbol.for("react.forward_ref") : 60112, E = o ? Symbol.for("react.suspense") : 60113, C = o ? Symbol.for("react.suspense_list") : 60120, x = o ? Symbol.for("react.memo") : 60115, $ = o ? Symbol.for("react.lazy") : 60116, R = o ? Symbol.for("react.block") : 60121, j = o ? Symbol.for("react.fundamental") : 60117, Y = o ? Symbol.for("react.responder") : 60118, z = o ? Symbol.for("react.scope") : 60119;
    function A(r) {
      return typeof r == "string" || typeof r == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      r === d || r === g || r === i || r === S || r === E || r === C || typeof r == "object" && r !== null && (r.$$typeof === $ || r.$$typeof === x || r.$$typeof === O || r.$$typeof === l || r.$$typeof === b || r.$$typeof === j || r.$$typeof === Y || r.$$typeof === z || r.$$typeof === R);
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
              case d:
              case i:
              case S:
              case E:
                return B;
              default:
                var se = B && B.$$typeof;
                switch (se) {
                  case l:
                  case b:
                  case $:
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
    var t = _, k = g, N = l, G = O, H = I, J = b, F = d, X = $, K = x, W = P, Z = i, q = S, L = E, U = !1;
    function Q(r) {
      return U || (U = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(r) || w(r) === _;
    }
    function e(r) {
      return w(r) === g;
    }
    function n(r) {
      return w(r) === l;
    }
    function f(r) {
      return w(r) === O;
    }
    function s(r) {
      return typeof r == "object" && r !== null && r.$$typeof === I;
    }
    function a(r) {
      return w(r) === b;
    }
    function p(r) {
      return w(r) === d;
    }
    function c(r) {
      return w(r) === $;
    }
    function u(r) {
      return w(r) === x;
    }
    function y(r) {
      return w(r) === P;
    }
    function T(r) {
      return w(r) === i;
    }
    function v(r) {
      return w(r) === S;
    }
    function M(r) {
      return w(r) === E;
    }
    m.AsyncMode = t, m.ConcurrentMode = k, m.ContextConsumer = N, m.ContextProvider = G, m.Element = H, m.ForwardRef = J, m.Fragment = F, m.Lazy = X, m.Memo = K, m.Portal = W, m.Profiler = Z, m.StrictMode = q, m.Suspense = L, m.isAsyncMode = Q, m.isConcurrentMode = e, m.isContextConsumer = n, m.isContextProvider = f, m.isElement = s, m.isForwardRef = a, m.isFragment = p, m.isLazy = c, m.isMemo = u, m.isPortal = y, m.isProfiler = T, m.isStrictMode = v, m.isSuspense = M, m.isValidElementType = A, m.typeOf = w;
  }()), m;
}
var le;
function Te() {
  return le || (le = 1, process.env.NODE_ENV === "production" ? V.exports = Se() : V.exports = Oe()), V.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ee, de;
function Pe() {
  if (de)
    return ee;
  de = 1;
  var o = Object.getOwnPropertySymbols, I = Object.prototype.hasOwnProperty, P = Object.prototype.propertyIsEnumerable;
  function d(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function S() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
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
  return ee = S() ? Object.assign : function(i, O) {
    for (var l, _ = d(i), g, b = 1; b < arguments.length; b++) {
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
var te, ye;
function Ee() {
  return ye || (ye = 1, te = Function.call.bind(Object.prototype.hasOwnProperty)), te;
}
var ne, ve;
function _e() {
  if (ve)
    return ne;
  ve = 1;
  var o = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var I = ce(), P = {}, d = Ee();
    o = function(i) {
      var O = "Warning: " + i;
      typeof console < "u" && console.error(O);
      try {
        throw new Error(O);
      } catch {
      }
    };
  }
  function S(i, O, l, _, g) {
    if (process.env.NODE_ENV !== "production") {
      for (var b in i)
        if (d(i, b)) {
          var E;
          try {
            if (typeof i[b] != "function") {
              var C = Error(
                (_ || "React class") + ": " + l + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw C.name = "Invariant Violation", C;
            }
            E = i[b](O, b, _, l, null, I);
          } catch ($) {
            E = $;
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
function Re() {
  if (be)
    return oe;
  be = 1;
  var o = Te(), I = Pe(), P = ce(), d = Ee(), S = _e(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(l) {
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
      any: z(),
      arrayOf: A,
      element: w(),
      elementType: t(),
      instanceOf: k,
      node: J(),
      objectOf: G,
      oneOf: N,
      oneOfType: H,
      shape: X,
      exact: K
    };
    function $(e, n) {
      return e === n ? e !== 0 || 1 / e === 1 / n : e !== e && n !== n;
    }
    function R(e, n) {
      this.message = e, this.data = n && typeof n == "object" ? n : {}, this.stack = "";
    }
    R.prototype = Error.prototype;
    function j(e) {
      if (process.env.NODE_ENV !== "production")
        var n = {}, f = 0;
      function s(p, c, u, y, T, v, M) {
        if (y = y || C, v = v || u, M !== P) {
          if (_) {
            var r = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw r.name = "Invariant Violation", r;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var D = y + ":" + u;
            !n[D] && // Avoid spamming the console because they are often not actionable except for lib authors
            f < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + v + "` prop on `" + y + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), n[D] = !0, f++);
          }
        }
        return c[u] == null ? p ? c[u] === null ? new R("The " + T + " `" + v + "` is marked as required " + ("in `" + y + "`, but its value is `null`.")) : new R("The " + T + " `" + v + "` is marked as required in " + ("`" + y + "`, but its value is `undefined`.")) : null : e(c, u, y, T, v);
      }
      var a = s.bind(null, !1);
      return a.isRequired = s.bind(null, !0), a;
    }
    function Y(e) {
      function n(f, s, a, p, c, u) {
        var y = f[s], T = q(y);
        if (T !== e) {
          var v = L(y);
          return new R(
            "Invalid " + p + " `" + c + "` of type " + ("`" + v + "` supplied to `" + a + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return j(n);
    }
    function z() {
      return j(O);
    }
    function A(e) {
      function n(f, s, a, p, c) {
        if (typeof e != "function")
          return new R("Property `" + c + "` of component `" + a + "` has invalid PropType notation inside arrayOf.");
        var u = f[s];
        if (!Array.isArray(u)) {
          var y = q(u);
          return new R("Invalid " + p + " `" + c + "` of type " + ("`" + y + "` supplied to `" + a + "`, expected an array."));
        }
        for (var T = 0; T < u.length; T++) {
          var v = e(u, T, a, p, c + "[" + T + "]", P);
          if (v instanceof Error)
            return v;
        }
        return null;
      }
      return j(n);
    }
    function w() {
      function e(n, f, s, a, p) {
        var c = n[f];
        if (!l(c)) {
          var u = q(c);
          return new R("Invalid " + a + " `" + p + "` of type " + ("`" + u + "` supplied to `" + s + "`, expected a single ReactElement."));
        }
        return null;
      }
      return j(e);
    }
    function t() {
      function e(n, f, s, a, p) {
        var c = n[f];
        if (!o.isValidElementType(c)) {
          var u = q(c);
          return new R("Invalid " + a + " `" + p + "` of type " + ("`" + u + "` supplied to `" + s + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return j(e);
    }
    function k(e) {
      function n(f, s, a, p, c) {
        if (!(f[s] instanceof e)) {
          var u = e.name || C, y = Q(f[s]);
          return new R("Invalid " + p + " `" + c + "` of type " + ("`" + y + "` supplied to `" + a + "`, expected ") + ("instance of `" + u + "`."));
        }
        return null;
      }
      return j(n);
    }
    function N(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), O;
      function n(f, s, a, p, c) {
        for (var u = f[s], y = 0; y < e.length; y++)
          if ($(u, e[y]))
            return null;
        var T = JSON.stringify(e, function(M, r) {
          var D = L(r);
          return D === "symbol" ? String(r) : r;
        });
        return new R("Invalid " + p + " `" + c + "` of value `" + String(u) + "` " + ("supplied to `" + a + "`, expected one of " + T + "."));
      }
      return j(n);
    }
    function G(e) {
      function n(f, s, a, p, c) {
        if (typeof e != "function")
          return new R("Property `" + c + "` of component `" + a + "` has invalid PropType notation inside objectOf.");
        var u = f[s], y = q(u);
        if (y !== "object")
          return new R("Invalid " + p + " `" + c + "` of type " + ("`" + y + "` supplied to `" + a + "`, expected an object."));
        for (var T in u)
          if (d(u, T)) {
            var v = e(u, T, a, p, c + "." + T, P);
            if (v instanceof Error)
              return v;
          }
        return null;
      }
      return j(n);
    }
    function H(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), O;
      for (var n = 0; n < e.length; n++) {
        var f = e[n];
        if (typeof f != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + U(f) + " at index " + n + "."
          ), O;
      }
      function s(a, p, c, u, y) {
        for (var T = [], v = 0; v < e.length; v++) {
          var M = e[v], r = M(a, p, c, u, y, P);
          if (r == null)
            return null;
          r.data && d(r.data, "expectedType") && T.push(r.data.expectedType);
        }
        var D = T.length > 0 ? ", expected one of type [" + T.join(", ") + "]" : "";
        return new R("Invalid " + u + " `" + y + "` supplied to " + ("`" + c + "`" + D + "."));
      }
      return j(s);
    }
    function J() {
      function e(n, f, s, a, p) {
        return W(n[f]) ? null : new R("Invalid " + a + " `" + p + "` supplied to " + ("`" + s + "`, expected a ReactNode."));
      }
      return j(e);
    }
    function F(e, n, f, s, a) {
      return new R(
        (e || "React class") + ": " + n + " type `" + f + "." + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + a + "`."
      );
    }
    function X(e) {
      function n(f, s, a, p, c) {
        var u = f[s], y = q(u);
        if (y !== "object")
          return new R("Invalid " + p + " `" + c + "` of type `" + y + "` " + ("supplied to `" + a + "`, expected `object`."));
        for (var T in e) {
          var v = e[T];
          if (typeof v != "function")
            return F(a, p, c, T, L(v));
          var M = v(u, T, a, p, c + "." + T, P);
          if (M)
            return M;
        }
        return null;
      }
      return j(n);
    }
    function K(e) {
      function n(f, s, a, p, c) {
        var u = f[s], y = q(u);
        if (y !== "object")
          return new R("Invalid " + p + " `" + c + "` of type `" + y + "` " + ("supplied to `" + a + "`, expected `object`."));
        var T = I({}, f[s], e);
        for (var v in T) {
          var M = e[v];
          if (d(e, v) && typeof M != "function")
            return F(a, p, c, v, L(M));
          if (!M)
            return new R(
              "Invalid " + p + " `" + c + "` key `" + v + "` supplied to `" + a + "`.\nBad object: " + JSON.stringify(f[s], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var r = M(u, v, a, p, c + "." + v, P);
          if (r)
            return r;
        }
        return null;
      }
      return j(n);
    }
    function W(e) {
      switch (typeof e) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !e;
        case "object":
          if (Array.isArray(e))
            return e.every(W);
          if (e === null || l(e))
            return !0;
          var n = E(e);
          if (n) {
            var f = n.call(e), s;
            if (n !== e.entries) {
              for (; !(s = f.next()).done; )
                if (!W(s.value))
                  return !1;
            } else
              for (; !(s = f.next()).done; ) {
                var a = s.value;
                if (a && !W(a[1]))
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
    function L(e) {
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
    function U(e) {
      var n = L(e);
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
var ae, he;
function Ce() {
  if (he)
    return ae;
  he = 1;
  var o = ce();
  function I() {
  }
  function P() {
  }
  return P.resetWarningCache = I, ae = function() {
    function d(O, l, _, g, b, E) {
      if (E !== o) {
        var C = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw C.name = "Invariant Violation", C;
      }
    }
    d.isRequired = d;
    function S() {
      return d;
    }
    var i = {
      array: d,
      bigint: d,
      bool: d,
      func: d,
      number: d,
      object: d,
      string: d,
      symbol: d,
      any: d,
      arrayOf: S,
      element: d,
      elementType: d,
      instanceOf: S,
      node: d,
      objectOf: S,
      oneOf: S,
      oneOfType: S,
      shape: S,
      exact: S,
      checkPropTypes: P,
      resetWarningCache: I
    };
    return i.PropTypes = i, i;
  }, ae;
}
if (process.env.NODE_ENV !== "production") {
  var xe = Te(), we = !0;
  ie.exports = Re()(xe.isElement, we);
} else
  ie.exports = Ce()();
var Ae = ie.exports;
const Ye = /* @__PURE__ */ ge(Ae);
export {
  Me as A,
  $e as a,
  Ae as p,
  Ye as t
};
