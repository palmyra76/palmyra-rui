import "../assets/AsyncTreeMenu.css";
import { G as bt } from "./iconBase.js";
import { g as St } from "./_commonjsHelpers.js";
import oe, { useRef as Ee, useReducer as kt, useEffect as se } from "react";
function fn(t) {
  return bt({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" }, child: [] }] })(t);
}
function pn(t) {
  return bt({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" }, child: [] }] })(t);
}
var gt = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var e = {}.hasOwnProperty;
    function n() {
      for (var a = "", l = 0; l < arguments.length; l++) {
        var c = arguments[l];
        c && (a = s(a, r(c)));
      }
      return a;
    }
    function r(a) {
      if (typeof a == "string" || typeof a == "number")
        return a;
      if (typeof a != "object")
        return "";
      if (Array.isArray(a))
        return n.apply(null, a);
      if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
        return a.toString();
      var l = "";
      for (var c in a)
        e.call(a, c) && a[c] && (l = s(l, c));
      return l;
    }
    function s(a, l) {
      return l ? a ? a + " " + l : a + l : a;
    }
    t.exports ? (n.default = n, t.exports = n) : window.classNames = n;
  })();
})(gt);
var Lt = gt.exports;
const Ce = /* @__PURE__ */ St(Lt);
var He = { exports: {} }, xe = { exports: {} }, $ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var it;
function Ut() {
  if (it)
    return $;
  it = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, s = t ? Symbol.for("react.strict_mode") : 60108, a = t ? Symbol.for("react.profiler") : 60114, l = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, d = t ? Symbol.for("react.async_mode") : 60111, g = t ? Symbol.for("react.concurrent_mode") : 60111, w = t ? Symbol.for("react.forward_ref") : 60112, I = t ? Symbol.for("react.suspense") : 60113, C = t ? Symbol.for("react.suspense_list") : 60120, E = t ? Symbol.for("react.memo") : 60115, _ = t ? Symbol.for("react.lazy") : 60116, h = t ? Symbol.for("react.block") : 60121, D = t ? Symbol.for("react.fundamental") : 60117, k = t ? Symbol.for("react.responder") : 60118, L = t ? Symbol.for("react.scope") : 60119;
  function P(i) {
    if (typeof i == "object" && i !== null) {
      var W = i.$$typeof;
      switch (W) {
        case e:
          switch (i = i.type, i) {
            case d:
            case g:
            case r:
            case a:
            case s:
            case I:
              return i;
            default:
              switch (i = i && i.$$typeof, i) {
                case c:
                case w:
                case _:
                case E:
                case l:
                  return i;
                default:
                  return W;
              }
          }
        case n:
          return W;
      }
    }
  }
  function j(i) {
    return P(i) === g;
  }
  return $.AsyncMode = d, $.ConcurrentMode = g, $.ContextConsumer = c, $.ContextProvider = l, $.Element = e, $.ForwardRef = w, $.Fragment = r, $.Lazy = _, $.Memo = E, $.Portal = n, $.Profiler = a, $.StrictMode = s, $.Suspense = I, $.isAsyncMode = function(i) {
    return j(i) || P(i) === d;
  }, $.isConcurrentMode = j, $.isContextConsumer = function(i) {
    return P(i) === c;
  }, $.isContextProvider = function(i) {
    return P(i) === l;
  }, $.isElement = function(i) {
    return typeof i == "object" && i !== null && i.$$typeof === e;
  }, $.isForwardRef = function(i) {
    return P(i) === w;
  }, $.isFragment = function(i) {
    return P(i) === r;
  }, $.isLazy = function(i) {
    return P(i) === _;
  }, $.isMemo = function(i) {
    return P(i) === E;
  }, $.isPortal = function(i) {
    return P(i) === n;
  }, $.isProfiler = function(i) {
    return P(i) === a;
  }, $.isStrictMode = function(i) {
    return P(i) === s;
  }, $.isSuspense = function(i) {
    return P(i) === I;
  }, $.isValidElementType = function(i) {
    return typeof i == "string" || typeof i == "function" || i === r || i === g || i === a || i === s || i === I || i === C || typeof i == "object" && i !== null && (i.$$typeof === _ || i.$$typeof === E || i.$$typeof === l || i.$$typeof === c || i.$$typeof === w || i.$$typeof === D || i.$$typeof === k || i.$$typeof === L || i.$$typeof === h);
  }, $.typeOf = P, $;
}
var F = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var st;
function Nt() {
  return st || (st = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, s = t ? Symbol.for("react.strict_mode") : 60108, a = t ? Symbol.for("react.profiler") : 60114, l = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, d = t ? Symbol.for("react.async_mode") : 60111, g = t ? Symbol.for("react.concurrent_mode") : 60111, w = t ? Symbol.for("react.forward_ref") : 60112, I = t ? Symbol.for("react.suspense") : 60113, C = t ? Symbol.for("react.suspense_list") : 60120, E = t ? Symbol.for("react.memo") : 60115, _ = t ? Symbol.for("react.lazy") : 60116, h = t ? Symbol.for("react.block") : 60121, D = t ? Symbol.for("react.fundamental") : 60117, k = t ? Symbol.for("react.responder") : 60118, L = t ? Symbol.for("react.scope") : 60119;
    function P(f) {
      return typeof f == "string" || typeof f == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      f === r || f === g || f === a || f === s || f === I || f === C || typeof f == "object" && f !== null && (f.$$typeof === _ || f.$$typeof === E || f.$$typeof === l || f.$$typeof === c || f.$$typeof === w || f.$$typeof === D || f.$$typeof === k || f.$$typeof === L || f.$$typeof === h);
    }
    function j(f) {
      if (typeof f == "object" && f !== null) {
        var Q = f.$$typeof;
        switch (Q) {
          case e:
            var be = f.type;
            switch (be) {
              case d:
              case g:
              case r:
              case a:
              case s:
              case I:
                return be;
              default:
                var Se = be && be.$$typeof;
                switch (Se) {
                  case c:
                  case w:
                  case _:
                  case E:
                  case l:
                    return Se;
                  default:
                    return Q;
                }
            }
          case n:
            return Q;
        }
      }
    }
    var i = d, W = g, U = c, Y = l, H = e, G = w, q = r, N = _, M = E, x = n, z = a, B = s, X = I, ae = !1;
    function Z(f) {
      return ae || (ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), o(f) || j(f) === d;
    }
    function o(f) {
      return j(f) === g;
    }
    function y(f) {
      return j(f) === c;
    }
    function v(f) {
      return j(f) === l;
    }
    function u(f) {
      return typeof f == "object" && f !== null && f.$$typeof === e;
    }
    function p(f) {
      return j(f) === w;
    }
    function S(f) {
      return j(f) === r;
    }
    function b(f) {
      return j(f) === _;
    }
    function m(f) {
      return j(f) === E;
    }
    function O(f) {
      return j(f) === n;
    }
    function A(f) {
      return j(f) === a;
    }
    function T(f) {
      return j(f) === s;
    }
    function R(f) {
      return j(f) === I;
    }
    F.AsyncMode = i, F.ConcurrentMode = W, F.ContextConsumer = U, F.ContextProvider = Y, F.Element = H, F.ForwardRef = G, F.Fragment = q, F.Lazy = N, F.Memo = M, F.Portal = x, F.Profiler = z, F.StrictMode = B, F.Suspense = X, F.isAsyncMode = Z, F.isConcurrentMode = o, F.isContextConsumer = y, F.isContextProvider = v, F.isElement = u, F.isForwardRef = p, F.isFragment = S, F.isLazy = b, F.isMemo = m, F.isPortal = O, F.isProfiler = A, F.isStrictMode = T, F.isSuspense = R, F.isValidElementType = P, F.typeOf = j;
  }()), F;
}
var lt;
function mt() {
  return lt || (lt = 1, process.env.NODE_ENV === "production" ? xe.exports = Ut() : xe.exports = Nt()), xe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ue, ot;
function $t() {
  if (ot)
    return Ue;
  ot = 1;
  var t = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var l = {}, c = 0; c < 10; c++)
        l["_" + String.fromCharCode(c)] = c;
      var d = Object.getOwnPropertyNames(l).map(function(w) {
        return l[w];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var g = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(w) {
        g[w] = w;
      }), Object.keys(Object.assign({}, g)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ue = s() ? Object.assign : function(a, l) {
    for (var c, d = r(a), g, w = 1; w < arguments.length; w++) {
      c = Object(arguments[w]);
      for (var I in c)
        e.call(c, I) && (d[I] = c[I]);
      if (t) {
        g = t(c);
        for (var C = 0; C < g.length; C++)
          n.call(c, g[C]) && (d[g[C]] = c[g[C]]);
      }
    }
    return d;
  }, Ue;
}
var Ne, ct;
function Xe() {
  if (ct)
    return Ne;
  ct = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ne = t, Ne;
}
var $e, dt;
function It() {
  return dt || (dt = 1, $e = Function.call.bind(Object.prototype.hasOwnProperty)), $e;
}
var Fe, ut;
function Ft() {
  if (ut)
    return Fe;
  ut = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = Xe(), n = {}, r = It();
    t = function(a) {
      var l = "Warning: " + a;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function s(a, l, c, d, g) {
    if (process.env.NODE_ENV !== "production") {
      for (var w in a)
        if (r(a, w)) {
          var I;
          try {
            if (typeof a[w] != "function") {
              var C = Error(
                (d || "React class") + ": " + c + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw C.name = "Invariant Violation", C;
            }
            I = a[w](l, w, d, c, null, e);
          } catch (_) {
            I = _;
          }
          if (I && !(I instanceof Error) && t(
            (d || "React class") + ": type specification of " + c + " `" + w + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof I + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), I instanceof Error && !(I.message in n)) {
            n[I.message] = !0;
            var E = g ? g() : "";
            t(
              "Failed " + c + " type: " + I.message + (E ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Fe = s, Fe;
}
var Ye, ft;
function Yt() {
  if (ft)
    return Ye;
  ft = 1;
  var t = mt(), e = $t(), n = Xe(), r = It(), s = Ft(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(c) {
    var d = "Warning: " + c;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return Ye = function(c, d) {
    var g = typeof Symbol == "function" && Symbol.iterator, w = "@@iterator";
    function I(o) {
      var y = o && (g && o[g] || o[w]);
      if (typeof y == "function")
        return y;
    }
    var C = "<<anonymous>>", E = {
      array: k("array"),
      bigint: k("bigint"),
      bool: k("boolean"),
      func: k("function"),
      number: k("number"),
      object: k("object"),
      string: k("string"),
      symbol: k("symbol"),
      any: L(),
      arrayOf: P,
      element: j(),
      elementType: i(),
      instanceOf: W,
      node: G(),
      objectOf: Y,
      oneOf: U,
      oneOfType: H,
      shape: N,
      exact: M
    };
    function _(o, y) {
      return o === y ? o !== 0 || 1 / o === 1 / y : o !== o && y !== y;
    }
    function h(o, y) {
      this.message = o, this.data = y && typeof y == "object" ? y : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function D(o) {
      if (process.env.NODE_ENV !== "production")
        var y = {}, v = 0;
      function u(S, b, m, O, A, T, R) {
        if (O = O || C, T = T || m, R !== n) {
          if (d) {
            var f = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw f.name = "Invariant Violation", f;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Q = O + ":" + m;
            !y[Q] && // Avoid spamming the console because they are often not actionable except for lib authors
            v < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + T + "` prop on `" + O + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), y[Q] = !0, v++);
          }
        }
        return b[m] == null ? S ? b[m] === null ? new h("The " + A + " `" + T + "` is marked as required " + ("in `" + O + "`, but its value is `null`.")) : new h("The " + A + " `" + T + "` is marked as required in " + ("`" + O + "`, but its value is `undefined`.")) : null : o(b, m, O, A, T);
      }
      var p = u.bind(null, !1);
      return p.isRequired = u.bind(null, !0), p;
    }
    function k(o) {
      function y(v, u, p, S, b, m) {
        var O = v[u], A = B(O);
        if (A !== o) {
          var T = X(O);
          return new h(
            "Invalid " + S + " `" + b + "` of type " + ("`" + T + "` supplied to `" + p + "`, expected ") + ("`" + o + "`."),
            { expectedType: o }
          );
        }
        return null;
      }
      return D(y);
    }
    function L() {
      return D(l);
    }
    function P(o) {
      function y(v, u, p, S, b) {
        if (typeof o != "function")
          return new h("Property `" + b + "` of component `" + p + "` has invalid PropType notation inside arrayOf.");
        var m = v[u];
        if (!Array.isArray(m)) {
          var O = B(m);
          return new h("Invalid " + S + " `" + b + "` of type " + ("`" + O + "` supplied to `" + p + "`, expected an array."));
        }
        for (var A = 0; A < m.length; A++) {
          var T = o(m, A, p, S, b + "[" + A + "]", n);
          if (T instanceof Error)
            return T;
        }
        return null;
      }
      return D(y);
    }
    function j() {
      function o(y, v, u, p, S) {
        var b = y[v];
        if (!c(b)) {
          var m = B(b);
          return new h("Invalid " + p + " `" + S + "` of type " + ("`" + m + "` supplied to `" + u + "`, expected a single ReactElement."));
        }
        return null;
      }
      return D(o);
    }
    function i() {
      function o(y, v, u, p, S) {
        var b = y[v];
        if (!t.isValidElementType(b)) {
          var m = B(b);
          return new h("Invalid " + p + " `" + S + "` of type " + ("`" + m + "` supplied to `" + u + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return D(o);
    }
    function W(o) {
      function y(v, u, p, S, b) {
        if (!(v[u] instanceof o)) {
          var m = o.name || C, O = Z(v[u]);
          return new h("Invalid " + S + " `" + b + "` of type " + ("`" + O + "` supplied to `" + p + "`, expected ") + ("instance of `" + m + "`."));
        }
        return null;
      }
      return D(y);
    }
    function U(o) {
      if (!Array.isArray(o))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), l;
      function y(v, u, p, S, b) {
        for (var m = v[u], O = 0; O < o.length; O++)
          if (_(m, o[O]))
            return null;
        var A = JSON.stringify(o, function(R, f) {
          var Q = X(f);
          return Q === "symbol" ? String(f) : f;
        });
        return new h("Invalid " + S + " `" + b + "` of value `" + String(m) + "` " + ("supplied to `" + p + "`, expected one of " + A + "."));
      }
      return D(y);
    }
    function Y(o) {
      function y(v, u, p, S, b) {
        if (typeof o != "function")
          return new h("Property `" + b + "` of component `" + p + "` has invalid PropType notation inside objectOf.");
        var m = v[u], O = B(m);
        if (O !== "object")
          return new h("Invalid " + S + " `" + b + "` of type " + ("`" + O + "` supplied to `" + p + "`, expected an object."));
        for (var A in m)
          if (r(m, A)) {
            var T = o(m, A, p, S, b + "." + A, n);
            if (T instanceof Error)
              return T;
          }
        return null;
      }
      return D(y);
    }
    function H(o) {
      if (!Array.isArray(o))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var y = 0; y < o.length; y++) {
        var v = o[y];
        if (typeof v != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ae(v) + " at index " + y + "."
          ), l;
      }
      function u(p, S, b, m, O) {
        for (var A = [], T = 0; T < o.length; T++) {
          var R = o[T], f = R(p, S, b, m, O, n);
          if (f == null)
            return null;
          f.data && r(f.data, "expectedType") && A.push(f.data.expectedType);
        }
        var Q = A.length > 0 ? ", expected one of type [" + A.join(", ") + "]" : "";
        return new h("Invalid " + m + " `" + O + "` supplied to " + ("`" + b + "`" + Q + "."));
      }
      return D(u);
    }
    function G() {
      function o(y, v, u, p, S) {
        return x(y[v]) ? null : new h("Invalid " + p + " `" + S + "` supplied to " + ("`" + u + "`, expected a ReactNode."));
      }
      return D(o);
    }
    function q(o, y, v, u, p) {
      return new h(
        (o || "React class") + ": " + y + " type `" + v + "." + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + p + "`."
      );
    }
    function N(o) {
      function y(v, u, p, S, b) {
        var m = v[u], O = B(m);
        if (O !== "object")
          return new h("Invalid " + S + " `" + b + "` of type `" + O + "` " + ("supplied to `" + p + "`, expected `object`."));
        for (var A in o) {
          var T = o[A];
          if (typeof T != "function")
            return q(p, S, b, A, X(T));
          var R = T(m, A, p, S, b + "." + A, n);
          if (R)
            return R;
        }
        return null;
      }
      return D(y);
    }
    function M(o) {
      function y(v, u, p, S, b) {
        var m = v[u], O = B(m);
        if (O !== "object")
          return new h("Invalid " + S + " `" + b + "` of type `" + O + "` " + ("supplied to `" + p + "`, expected `object`."));
        var A = e({}, v[u], o);
        for (var T in A) {
          var R = o[T];
          if (r(o, T) && typeof R != "function")
            return q(p, S, b, T, X(R));
          if (!R)
            return new h(
              "Invalid " + S + " `" + b + "` key `" + T + "` supplied to `" + p + "`.\nBad object: " + JSON.stringify(v[u], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(o), null, "  ")
            );
          var f = R(m, T, p, S, b + "." + T, n);
          if (f)
            return f;
        }
        return null;
      }
      return D(y);
    }
    function x(o) {
      switch (typeof o) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !o;
        case "object":
          if (Array.isArray(o))
            return o.every(x);
          if (o === null || c(o))
            return !0;
          var y = I(o);
          if (y) {
            var v = y.call(o), u;
            if (y !== o.entries) {
              for (; !(u = v.next()).done; )
                if (!x(u.value))
                  return !1;
            } else
              for (; !(u = v.next()).done; ) {
                var p = u.value;
                if (p && !x(p[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function z(o, y) {
      return o === "symbol" ? !0 : y ? y["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && y instanceof Symbol : !1;
    }
    function B(o) {
      var y = typeof o;
      return Array.isArray(o) ? "array" : o instanceof RegExp ? "object" : z(y, o) ? "symbol" : y;
    }
    function X(o) {
      if (typeof o > "u" || o === null)
        return "" + o;
      var y = B(o);
      if (y === "object") {
        if (o instanceof Date)
          return "date";
        if (o instanceof RegExp)
          return "regexp";
      }
      return y;
    }
    function ae(o) {
      var y = X(o);
      switch (y) {
        case "array":
        case "object":
          return "an " + y;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + y;
        default:
          return y;
      }
    }
    function Z(o) {
      return !o.constructor || !o.constructor.name ? C : o.constructor.name;
    }
    return E.checkPropTypes = s, E.resetWarningCache = s.resetWarningCache, E.PropTypes = E, E;
  }, Ye;
}
var qe, pt;
function qt() {
  if (pt)
    return qe;
  pt = 1;
  var t = Xe();
  function e() {
  }
  function n() {
  }
  return n.resetWarningCache = e, qe = function() {
    function r(l, c, d, g, w, I) {
      if (I !== t) {
        var C = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw C.name = "Invariant Violation", C;
      }
    }
    r.isRequired = r;
    function s() {
      return r;
    }
    var a = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: s,
      element: r,
      elementType: r,
      instanceOf: s,
      node: r,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: n,
      resetWarningCache: e
    };
    return a.PropTypes = a, a;
  }, qe;
}
if (process.env.NODE_ENV !== "production") {
  var zt = mt(), Bt = !0;
  He.exports = Yt()(zt.isElement, Bt);
} else
  He.exports = qt()();
var Ht = He.exports;
const K = /* @__PURE__ */ St(Ht);
function Je(t) {
  return (Je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(t);
}
function ze(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Et(t, e) {
  return function(n) {
    if (Array.isArray(n))
      return n;
  }(t) || function(n, r) {
    var s = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (s != null) {
      var a, l, c = [], d = !0, g = !1;
      try {
        for (s = s.call(n); !(d = (a = s.next()).done) && (c.push(a.value), !r || c.length !== r); d = !0)
          ;
      } catch (w) {
        g = !0, l = w;
      } finally {
        try {
          d || s.return == null || s.return();
        } finally {
          if (g)
            throw l;
        }
      }
      return c;
    }
  }(t, e) || Ze(t, e) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function le(t) {
  return function(e) {
    if (Array.isArray(e))
      return Ve(e);
  }(t) || function(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
      return Array.from(e);
  }(t) || Ze(t) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Ze(t, e) {
  if (t) {
    if (typeof t == "string")
      return Ve(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ve(t, e) : void 0;
  }
}
function Ve(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function re(t, e) {
  var n = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!n) {
    if (Array.isArray(t) || (n = Ze(t)) || e && t && typeof t.length == "number") {
      n && (t = n);
      var r = 0, s = function() {
      };
      return { s, n: function() {
        return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
      }, e: function(d) {
        throw d;
      }, f: s };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a, l = !0, c = !1;
  return { s: function() {
    n = n.call(t);
  }, n: function() {
    var d = n.next();
    return l = d.done, d;
  }, e: function(d) {
    c = !0, a = d;
  }, f: function() {
    try {
      l || n.return == null || n.return();
    } finally {
      if (c)
        throw a;
    }
  } };
}
function Qe(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") {
    var s = 0;
    for (r = Object.getOwnPropertySymbols(t); s < r.length; s++)
      e.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[s]) && (n[r[s]] = t[r[s]]);
  }
  return n;
}
var ht = { root: "tree", node: "tree-node", branch: "tree-node__branch", branchWrapper: "tree-branch-wrapper", leafListItem: "tree-leaf-list-item", leaf: "tree-node__leaf", nodeGroup: "tree-node-group" }, ce = { select: "SELECT", focus: "FOCUS", exclusiveSelect: "EXCLUSIVE_SELECT" }, Vt = Object.freeze(Object.values(ce)), Kt = Object.freeze(Object.values({ check: "check", select: "select" })), et = "COLLAPSE", Pe = "COLLAPSE_MANY", _e = "EXPAND", je = "EXPAND_MANY", tt = "HALF_SELECT", we = "SELECT", wt = "DESELECT", We = "TOGGLE", Re = "TOGGLE_SELECT", ue = "SELECT_MANY", Tt = "EXCLUSIVE_CHANGE_SELECT_MANY", ne = "FOCUS", Ot = "CLEAR_FOCUS", xt = "BLUR", Gt = "DISABLE", Xt = "ENABLE", At = "CLEAR_MANUALLY_TOGGLED", Ct = "CONTROLLED_SELECT_MANY", _t = "UPDATE_TREE_STATE_WHEN_DATA_CHANGED", ge = function() {
}, Be = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return function(r) {
    for (var s = 0, a = e; s < a.length; s++) {
      var l = a[s];
      if (l && l(r), r.defaultPrevented)
        break;
    }
  };
}, he = function(t, e) {
  var n, r = /* @__PURE__ */ new Set(), s = re(t);
  try {
    for (s.s(); !(n = s.n()).done; ) {
      var a = n.value;
      e.has(a) || r.add(a);
    }
  } catch (l) {
    s.e(l);
  } finally {
    s.f();
  }
  return r;
}, Ae = function(t, e) {
  return new Set([].concat(le(he(t, e)), le(he(e, t))));
}, yt = function(t) {
  var e = Ee();
  return se(function() {
    e.current = t;
  }, [t]), e.current;
}, ee = function(t, e) {
  var n;
  return !!(!((n = V(t, e).children) === null || n === void 0) && n.length);
}, fe = function(t, e) {
  return V(t, e).parent;
}, Jt = function(t, e, n) {
  for (var r = e, s = []; ; ) {
    var a = fe(t, r);
    if (a === 0 || a == null || a != null && n.has(a))
      break;
    s.push(a), r = a;
  }
  return s;
}, ve = function(t, e, n) {
  var r = [];
  return function s(a, l) {
    var c = V(a, l);
    if (c.children != null) {
      var d, g = re(c.children.filter(function(I) {
        return !n.has(I);
      }));
      try {
        for (g.s(); !(d = g.n()).done; ) {
          var w = d.value;
          r.push(w), s(a, w);
        }
      } catch (I) {
        g.e(I);
      } finally {
        g.f();
      }
    }
  }(t, e), r;
}, jt = function(t, e) {
  var n = V(t, e);
  return n.children == null ? [] : n.children;
}, Rt = function(t, e, n) {
  var r = fe(t, e);
  if (r != null) {
    var s = V(t, r), a = s.children.indexOf(e) + n;
    if (s.children[a])
      return s.children[a];
  }
  return null;
}, Ke = function(t, e, n) {
  var r = V(t, e);
  for (ie(t).id === e && (r = V(t, V(t, e).children[V(t, e).children.length - 1])); n.has(r.id) && ee(t, r.id); )
    r = V(t, r.children[r.children.length - 1]);
  return r.id;
}, Ge = function(t, e, n) {
  if (e === ie(t).children[0])
    return null;
  var r = Rt(t, e, -1);
  return r == null ? fe(t, e) : Ke(t, r, n);
}, Ie = function(t, e, n) {
  var r = V(t, e).id;
  if (ee(t, r) && n.has(r))
    return V(t, r).children[0];
  for (; ; ) {
    var s = Rt(t, r, 1);
    if (s != null)
      return s;
    if ((r = fe(t, r)) == null)
      return null;
  }
}, Pt = function(t) {
  var e = t.data, n = t.expandedIds, r = t.from, s = t.to, a = [], l = e.length, c = 0, d = r;
  if (a.push(r), r < s)
    for (; c < l && ((d = Ie(e, d, n)) != null && a.push(d), d != null && d !== s); )
      c += 1;
  else if (r > s)
    for (; c < l && ((d = Ge(e, d, n)) != null && a.push(d), d != null && d !== s); )
      c += 1;
  return a;
}, Zt = function(t) {
  var e = t.isSelected, n = t.isDisabled, r = t.multiSelect;
  return n || r ? e : !!e || void 0;
}, Qt = function(t) {
  var e = t.isSelected, n = t.isDisabled, r = t.isHalfSelected, s = t.multiSelect;
  return n ? e : r ? "mixed" : s ? e : !!e || void 0;
}, ye = function(t, e, n) {
  return e.concat.apply(e, le(e.filter(function(r) {
    return ee(t, r);
  }).map(function(r) {
    return ve(t, r, n);
  })));
}, en = function(t, e, n) {
  e != null ? window.navigator.userAgent.match(/Trident/) ? setTimeout(function() {
    return !e.contains(document.activeElement) && n();
  }, 0) : !e.contains(t.nativeEvent.relatedTarget) && n() : console.warn("ref not set on <ul>");
}, tn = function(t, e, n) {
  var r = jt(t, e);
  return ee(t, e) && !n.has(e) && r.length === 1 && r.every(function(s) {
    return n.has(s);
  });
}, Wt = function(t, e, n, r) {
  var s = function(l, c, d) {
    return ee(l, c) && d.has(c) && ve(l, c, /* @__PURE__ */ new Set()).some(function(g) {
      return d.has(g);
    });
  }(t, e, n), a = function(l, c, d) {
    var g = jt(l, c);
    return ee(l, c) && d.has(c) && g.length === 1 && g.every(function(w) {
      return d.has(w);
    });
  }(t, e, n);
  return function(l, c, d, g) {
    var w = ve(l, c, /* @__PURE__ */ new Set());
    return ee(l, c) && d.has(c) && w.every(function(I) {
      return d.has(I);
    }) && w.every(function(I) {
      return !g.has(I);
    });
  }(t, e, n, r) ? Re : s && !a ? tt : Re;
}, ie = function(t) {
  var e = t.find(function(n) {
    return n.parent === null;
  });
  if (!e)
    throw Error("TreeView data must contain parent node.");
  return e;
}, V = function(t, e) {
  var n = t.find(function(r) {
    return r.id === e;
  });
  if (n == null)
    throw Error("Node with id=".concat(e, " doesn't exist in the tree."));
  return n;
}, vt = function(t) {
  var e = Array.from(new Set(t));
  return t.length !== e.length;
}, nn = function(t, e) {
  switch (e.type) {
    case et:
      var n = new Set(t.expandedIds);
      return n.delete(e.id), Object.assign(Object.assign({}, t), { expandedIds: n, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Pe:
      var r, s = new Set(t.expandedIds), a = re(e.ids);
      try {
        for (a.s(); !(r = a.n()).done; ) {
          var l = r.value;
          s.delete(l);
        }
      } catch (Z) {
        a.e(Z);
      } finally {
        a.f();
      }
      return Object.assign(Object.assign({}, t), { expandedIds: s, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case _e:
      var c = new Set(t.expandedIds);
      return c.add(e.id), Object.assign(Object.assign({}, t), { expandedIds: c, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case je:
      var d = new Set([].concat(le(t.expandedIds), le(e.ids)));
      return Object.assign(Object.assign({}, t), { expandedIds: d, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case We:
      var g = new Set(t.expandedIds);
      return t.expandedIds.has(e.id) ? g.delete(e.id) : g.add(e.id), Object.assign(Object.assign({}, t), { expandedIds: g, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case tt:
      if (t.disabledIds.has(e.id))
        return t;
      var w = new Set(t.halfSelectedIds), I = new Set(t.selectedIds);
      return w.add(e.id), I.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: I, halfSelectedIds: w, tabbableId: e.keepFocus ? t.tabbableId : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id });
    case we:
      if (!e.NotUserAction && t.disabledIds.has(e.id))
        return t;
      var C;
      e.multiSelect ? (C = new Set(t.selectedIds)).add(e.id) : (C = /* @__PURE__ */ new Set()).add(e.id);
      var E = new Set(t.halfSelectedIds);
      E.delete(e.id);
      var _ = e.keepFocus ? t.tabbableId : e.id, h = _ === e.lastInteractedWith || e.NotUserAction !== !0;
      return Object.assign(Object.assign({}, t), { selectedIds: C, halfSelectedIds: E, tabbableId: _, isFocused: h, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case wt:
      if (!e.NotUserAction && t.disabledIds.has(e.id))
        return t;
      var D, k = new Set(t.selectedIds);
      return k.delete(e.id), e.multiSelect ? (D = new Set(t.halfSelectedIds)).delete(e.id) : D = /* @__PURE__ */ new Set(), Object.assign(Object.assign({}, t), { selectedIds: k, halfSelectedIds: D, tabbableId: e.keepFocus ? t.tabbableId : e.id, isFocused: !0, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case Re:
      if (t.disabledIds.has(e.id))
        return t;
      var L, P = t.selectedIds.has(e.id);
      e.multiSelect ? (L = new Set(t.selectedIds), P ? L.delete(e.id) : L.add(e.id)) : (L = /* @__PURE__ */ new Set(), P || L.add(e.id));
      var j = new Set(t.halfSelectedIds);
      return j.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: L, halfSelectedIds: j, tabbableId: e.id, isFocused: !0, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case ue:
      var i, W = e.ids.filter(function(Z) {
        return !t.disabledIds.has(Z);
      });
      if (e.multiSelect) {
        i = e.select ? new Set([].concat(le(t.selectedIds), le(W))) : he(t.selectedIds, new Set(W));
        var U = he(t.halfSelectedIds, i);
        return Object.assign(Object.assign({}, t), { selectedIds: i, halfSelectedIds: U, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
      }
      return t;
    case Tt:
      var Y, H = e.ids.filter(function(Z) {
        return !t.disabledIds.has(Z);
      });
      if (e.multiSelect) {
        Y = e.select ? new Set(H) : he(t.selectedIds, new Set(H));
        var G = he(t.halfSelectedIds, Y);
        return Object.assign(Object.assign({}, t), { selectedIds: Y, halfSelectedIds: G, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
      }
      return t;
    case Ct:
      var q, N = t.lastInteractedWith, M = t.tabbableId;
      if (e.multiSelect)
        q = new Set(e.ids), e.ids.length && (N = e.ids[e.ids.length - 1], M = e.ids[e.ids.length - 1]);
      else {
        q = /* @__PURE__ */ new Set(), e.ids.length > 1 && console.warn("Tree in singleSelect mode, only the first item from selectedIds will be selected.");
        var x = e.ids[0];
        x && q.add(x), N = x ?? N, M = x ?? N;
      }
      var z = new Set(t.halfSelectedIds);
      e.ids.every(function(Z) {
        return z.delete(Z);
      });
      var B = new Set(e.ids);
      return Object.assign(Object.assign({}, t), { selectedIds: q, halfSelectedIds: z, controlledIds: B, isFocused: !0, lastAction: e.type, tabbableId: M, lastInteractedWith: N });
    case ne:
      return Object.assign(Object.assign({}, t), { tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case xt:
      return Object.assign(Object.assign({}, t), { isFocused: !1 });
    case Ot:
      return Object.assign(Object.assign({}, t), { isFocused: !1, lastInteractedWith: null, tabbableId: e.id });
    case Gt:
      var X = new Set(t.disabledIds);
      return X.add(e.id), Object.assign(Object.assign({}, t), { disabledIds: X });
    case Xt:
      var ae = new Set(t.disabledIds);
      return ae.delete(e.id), Object.assign(Object.assign({}, t), { disabledIds: ae });
    case At:
      return Object.assign(Object.assign({}, t), { lastManuallyToggled: null });
    case _t:
      return Object.assign(Object.assign({}, t), { tabbableId: e.tabbableId, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled, lastUserSelect: e.lastUserSelect });
    default:
      throw new Error("Invalid action passed to the reducer");
  }
}, Mt = function(t) {
  var e = t.element, n = t.dispatch, r = t.data, s = t.selectedIds, a = t.tabbableId, l = t.isFocused, c = t.expandedIds, d = t.disabledIds, g = t.halfSelectedIds, w = t.lastUserSelect, I = t.nodeRefs, C = t.leafRefs, E = t.baseClassNames, _ = t.nodeRenderer, h = t.nodeAction, D = t.setsize, k = t.posinset, L = t.level, P = t.propagateCollapse, j = t.propagateSelect, i = t.multiSelect, W = t.togglableSelect, U = t.clickAction, Y = t.state, H = function(x) {
    if (!(x.ctrlKey || x.altKey || x.shiftKey))
      if (c.has(e.id) && P) {
        var z = [e.id].concat(le(ve(r, e.id, /* @__PURE__ */ new Set())));
        n({ type: Pe, ids: z, lastInteractedWith: e.id });
      } else
        n({ type: We, id: e.id, lastInteractedWith: e.id });
  }, G = function() {
    return n({ type: ne, id: e.id, lastInteractedWith: e.id });
  }, q = function(x) {
    if (x.shiftKey) {
      var z = Pt({ data: r, expandedIds: c, from: w, to: e.id }).filter(function(B) {
        return !d.has(B);
      });
      z = j ? ye(r, z, d) : z, n({ type: Tt, select: !0, multiSelect: i, ids: z, lastInteractedWith: e.id, lastManuallyToggled: e.id });
    } else
      x.ctrlKey || U === ce.select ? (n({ type: W ? Wt(r, e.id, s, d) : we, id: e.id, multiSelect: i, lastInteractedWith: e.id, lastManuallyToggled: e.id }), j && !d.has(e.id) && n({ type: ue, ids: ye(r, [e.id], d), select: !W || !s.has(e.id), multiSelect: i, lastInteractedWith: e.id, lastManuallyToggled: e.id })) : U === ce.exclusiveSelect ? n({ type: W ? Re : we, id: e.id, multiSelect: !1, lastInteractedWith: e.id, lastManuallyToggled: e.id }) : U === ce.focus && n({ type: ne, id: e.id, lastInteractedWith: e.id });
  }, N = function(x) {
    var z;
    return Ce(x, (ze(z = {}, "".concat(x, "--expanded"), c.has(e.id)), ze(z, "".concat(x, "--selected"), s.has(e.id)), ze(z, "".concat(x, "--focused"), a === e.id && l), z));
  }, M = h === "select" ? { "aria-selected": Zt({ isSelected: s.has(e.id), isDisabled: d.has(e.id), multiSelect: i }) } : { "aria-checked": Qt({ isSelected: s.has(e.id), isDisabled: d.has(e.id), isHalfSelected: g.has(e.id), multiSelect: i }) };
  return ee(r, e.id) || e.isBranch ? oe.createElement("li", Object.assign({ role: "treeitem", "aria-expanded": c.has(e.id), "aria-setsize": D, "aria-posinset": k, "aria-level": L, "aria-disabled": d.has(e.id), tabIndex: a === e.id ? 0 : -1, ref: function(x) {
    (I == null ? void 0 : I.current) != null && x != null && (I.current[e.id] = x);
  }, className: E.branchWrapper }, M), oe.createElement(oe.Fragment, null, _({ element: e, isBranch: !0, isSelected: s.has(e.id), isHalfSelected: g.has(e.id), isExpanded: c.has(e.id), isDisabled: d.has(e.id), dispatch: n, getNodeProps: function() {
    var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, z = x.onClick;
    return { onClick: z == null ? Be(q, H, G) : Be(z, G), className: Ce(N(E.node), E.branch), ref: function(B) {
      (C == null ? void 0 : C.current) != null && (C.current[e.id] = B);
    } };
  }, setsize: D, posinset: k, level: L, handleSelect: q, handleExpand: H, treeState: Y }), oe.createElement(rn, Object.assign({ getClasses: N }, function(x) {
    return x.setsize, x.posinset, Qe(x, ["setsize", "posinset"]);
  }(t))))) : oe.createElement("li", { role: "none", className: N(E.leafListItem) }, _({ element: e, isBranch: !1, isSelected: s.has(e.id), isHalfSelected: !1, isExpanded: !1, isDisabled: d.has(e.id), dispatch: n, getNodeProps: function() {
    var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, z = x.onClick;
    return Object.assign({ role: "treeitem", tabIndex: a === e.id ? 0 : -1, onClick: Be(z ?? q, G), ref: function(B) {
      (I == null ? void 0 : I.current) != null && (C == null ? void 0 : C.current) != null && (I.current[e.id] = B, C.current[e.id] = B);
    }, className: Ce(N(E.node), E.leaf), "aria-setsize": D, "aria-posinset": k, "aria-level": L, disabled: d.has(e.id), "aria-disabled": d.has(e.id) }, M);
  }, setsize: D, posinset: k, level: L, handleSelect: q, handleExpand: ge, treeState: Y }));
}, rn = function(t) {
  var e = t.data, n = t.element, r = t.expandedIds, s = t.getClasses, a = t.baseClassNames, l = t.level, c = Qe(t, ["data", "element", "expandedIds", "getClasses", "baseClassNames", "level"]);
  return oe.createElement("ul", { role: "group", className: s(a.nodeGroup) }, r.has(n.id) && n.children.length > 0 && n.children.map(function(d, g) {
    return oe.createElement(Mt, Object.assign({ data: e, expandedIds: r, baseClassNames: a, key: "".concat(d, "-").concat(Je(d)), element: V(e, d), setsize: n.children.length, posinset: g + 1, level: l + 1 }, c));
  }));
}, an = function(t) {
  var e = t.data, n = t.controlledSelectedIds, r = t.controlledExpandedIds, s = t.defaultExpandedIds, a = t.defaultSelectedIds, l = t.defaultDisabledIds, c = t.nodeRefs, d = t.leafRefs, g = t.onSelect, w = t.onNodeSelect, I = t.onExpand, C = t.onLoadData, E = t.togglableSelect, _ = t.multiSelect, h = t.propagateSelect, D = t.propagateSelectUpwards, k = t.treeRef, L = t.focusedId, P = ie(e), j = Et(kt(nn, { selectedIds: new Set(n || a), controlledIds: new Set(n), tabbableId: P.children[0], isFocused: !1, expandedIds: new Set(r || s), halfSelectedIds: /* @__PURE__ */ new Set(), lastUserSelect: P.children[0], lastInteractedWith: null, lastManuallyToggled: null, disabledIds: new Set(l) }), 2), i = j[0], W = j[1], U = i.selectedIds, Y = i.expandedIds, H = i.disabledIds, G = i.tabbableId, q = i.halfSelectedIds, N = i.lastAction, M = i.lastInteractedWith, x = i.lastManuallyToggled, z = yt(U) || /* @__PURE__ */ new Set(), B = Ae(U, z);
  se(function() {
    var v;
    if (g != null && g !== ge) {
      var u, p = re(B);
      try {
        for (p.s(); !(u = p.n()).done; ) {
          var S = u.value, b = ee(e, S) || !!(!((v = V(e, G)) === null || v === void 0) && v.isBranch);
          g({ element: V(e, S), isBranch: b, isExpanded: !!b && Y.has(S), isSelected: U.has(S), isDisabled: H.has(S), isHalfSelected: !!b && q.has(S), treeState: i });
        }
      } catch (m) {
        p.e(m);
      } finally {
        p.f();
      }
    }
  }, [e, U, Y, H, q, B, g, i]), se(function() {
    w != null && w !== ge && x != null && B.size && (w({ element: V(e, x), isSelected: U.has(x), isBranch: ee(e, x), treeState: i }), W({ type: At }));
  }, [x, U, B]);
  var X = yt(Y) || /* @__PURE__ */ new Set();
  se(function() {
    var v = Ae(Y, X);
    if (I != null && I !== ge) {
      var u, p = re(v);
      try {
        for (p.s(); !(u = p.n()).done; ) {
          var S = u.value;
          I({ element: V(e, S), isExpanded: Y.has(S), isSelected: U.has(S), isDisabled: H.has(S), isHalfSelected: q.has(S), treeState: i });
        }
      } catch (b) {
        p.e(b);
      } finally {
        p.f();
      }
    }
  }, [e, U, Y, H, q, X, I, i]);
  var ae, Z, o = (ae = e, Z = Ee(), se(function() {
    Z.current = ae;
  }), Z.current || /* @__PURE__ */ new Map());
  se(function() {
    var v = Ae(Y, X);
    if (C) {
      var u, p = re(v);
      try {
        for (p.s(); !(u = p.n()).done; ) {
          var S = u.value;
          C({ element: V(e, S), isExpanded: Y.has(S), isSelected: U.has(S), isDisabled: H.has(S), isHalfSelected: q.has(S), treeState: i });
        }
      } catch (A) {
        p.e(A);
      } finally {
        p.f();
      }
      if (o !== e && E && h) {
        var b, m = re(Y);
        try {
          for (m.s(); !(b = m.n()).done; ) {
            var O = b.value;
            U.has(O) && W({ type: ue, ids: ye(e, [O], H), select: !0, multiSelect: _, lastInteractedWith: O });
          }
        } catch (A) {
          m.e(A);
        } finally {
          m.f();
        }
      }
    }
  }, [e, U, Y, H, q, X, C, i]), se(function() {
    if (o !== e) {
      var v = ie(e);
      v.children.length && W({ type: _t, tabbableId: e.find(function(u) {
        return u.id === i.tabbableId;
      }) ? i.tabbableId : v.children[0], lastInteractedWith: e.find(function(u) {
        return u.id === i.lastInteractedWith;
      }) ? i.lastInteractedWith : null, lastManuallyToggled: e.find(function(u) {
        return u.id === i.lastManuallyToggled;
      }) ? i.lastManuallyToggled : null, lastUserSelect: e.find(function(u) {
        return u.id === i.lastUserSelect;
      }) ? i.lastUserSelect : v.children[0] });
    }
  }, [e]);
  var y = Ae(new Set(n), U);
  return se(function() {
    var v = n || a;
    if (n && y.size && W({ type: Ct, ids: n, multiSelect: _ }), v) {
      var u, p = re(v);
      try {
        for (p.s(); !(u = p.n()).done; ) {
          var S = u.value;
          h && !H.has(S) && W({ type: ue, ids: ye(e, [S], H), select: !0, multiSelect: _, lastInteractedWith: S });
        }
      } catch (b) {
        p.e(b);
      } finally {
        p.f();
      }
    }
  }, [n]), se(function() {
    var v = new Set(r), u = he(v, X), p = he(X, v);
    if (p.size) {
      var S, b = re(p);
      try {
        for (b.s(); !(S = b.n()).done; ) {
          var m = S.value;
          if (ee(e, m) || V(e, m).isBranch) {
            var O = [m].concat(le(ve(e, m, /* @__PURE__ */ new Set())));
            W({ type: Pe, ids: O, lastInteractedWith: m });
          }
        }
      } catch (Q) {
        b.e(Q);
      } finally {
        b.f();
      }
    }
    if (u.size) {
      var A, T = re(u);
      try {
        for (T.s(); !(A = T.n()).done; ) {
          var R = A.value;
          if (ee(e, R) || V(e, R).isBranch) {
            var f = fe(e, R);
            W(f ? { type: je, ids: [R, f], lastInteractedWith: R } : { type: _e, id: R, lastInteractedWith: R });
          }
        }
      } catch (Q) {
        T.e(Q);
      } finally {
        T.f();
      }
    }
  }, [r]), se(function() {
    if (D) {
      var v = new Set(le(B));
      M && N !== ne && N !== et && N !== _e && N !== We && v.add(M);
      var u = [];
      v.forEach(function(J) {
        e.find(function(me) {
          return me.id === J;
        }) || u.push(J);
      }), u.forEach(function(J) {
        return v.delete(J);
      });
      var p = function(J, me, De, Te, nt, Dt) {
        var rt, pe = { every: /* @__PURE__ */ new Set(), some: /* @__PURE__ */ new Set(), none: /* @__PURE__ */ new Set() }, Oe = re(me);
        try {
          for (Oe.s(); !(rt = Oe.n()).done; )
            for (var ke = rt.value; ; ) {
              var de = fe(J, ke);
              if (de === 0 || de == null || de != null && Te.has(de))
                break;
              var Le = V(J, de).children.filter(function(te) {
                return !Te.has(te);
              });
              if (Le.length === 0)
                break;
              if (Le.some(function(te) {
                return De.has(te) || pe.some.has(te) && !pe.none.has(te) || nt.has(te) && !pe.none.has(te);
              }))
                Le.every(function(te) {
                  return De.has(te);
                }) ? pe.every.add(de) : pe.some.add(de);
              else {
                var at = Jt(J, ke, Te).find(function(te) {
                  return De.has(te);
                });
                if (!Dt && at) {
                  ve(J, at, Te).forEach(function(te) {
                    nt.has(te) && pe.none.add(te);
                  });
                  break;
                }
                pe.none.add(de);
              }
              ke = de;
            }
        } catch (te) {
          Oe.e(te);
        } finally {
          Oe.f();
        }
        return pe;
      }(e, v, U, H, q, _), S = p.every, b = p.some, m = p.none;
      n && v.forEach(function(J) {
        ee(e, J) && ve(e, J, /* @__PURE__ */ new Set()).every(function(me) {
          return U.has(me);
        }) && S.add(J);
      });
      var O, A = re(S);
      try {
        for (A.s(); !(O = A.n()).done; ) {
          var T = O.value;
          U.has(T) || W({ type: we, id: T, multiSelect: _ || tn(e, T, U), keepFocus: !0, NotUserAction: !0, lastInteractedWith: M });
        }
      } catch (J) {
        A.e(J);
      } finally {
        A.f();
      }
      var R, f = re(b);
      try {
        for (f.s(); !(R = f.n()).done; ) {
          var Q = R.value;
          q.has(Q) || W({ type: tt, id: Q, lastInteractedWith: M, keepFocus: !0, NotUserAction: !0 });
        }
      } catch (J) {
        f.e(J);
      } finally {
        f.f();
      }
      var be, Se = re(m);
      try {
        for (Se.s(); !(be = Se.n()).done; ) {
          var Me = be.value;
          (U.has(Me) || q.has(Me)) && W({ type: wt, id: Me, multiSelect: _, keepFocus: !0, NotUserAction: !0, lastInteractedWith: M, lastManuallyToggled: x });
        }
      } catch (J) {
        Se.e(J);
      } finally {
        Se.f();
      }
    }
  }, [e, _, D, U, Y, H, q, N, z, B, M, y]), se(function() {
    if (M != null && G != null && (c == null ? void 0 : c.current) != null && (d == null ? void 0 : d.current) != null && ((k == null ? void 0 : k.current) == null || document.activeElement && k.current.contains(document.activeElement) || L)) {
      var v = c.current[G];
      (function(u) {
        u != null && u.scrollIntoView && u.scrollIntoView({ block: "nearest" });
      })(d.current[M]), function(u) {
        u != null && u.focus && u.focus({ preventScroll: !0 });
      }(v);
    }
  }, [G, c, d, M]), se(function() {
    if (L || W({ type: Ot, id: P.children[0] }), L && e.find(function(u) {
      return u.id === L;
    })) {
      var v = function u(p, S) {
        var b = fe(p, S), m = b && (ee(p, b) || V(p, b).isBranch);
        return b && m ? [b].concat(le(u(p, b))) : [];
      }(e, L);
      v.length && W({ type: je, ids: v, lastInteractedWith: L }), W({ type: ne, id: L, lastInteractedWith: L });
    }
  }, [L]), [i, W];
}, sn = oe.forwardRef(function(t, e) {
  var n = t.data, r = t.selectedIds, s = t.nodeRenderer, a = t.onSelect, l = a === void 0 ? ge : a, c = t.onNodeSelect, d = c === void 0 ? ge : c, g = t.onExpand, w = g === void 0 ? ge : g, I = t.onLoadData, C = t.className, E = C === void 0 ? "" : C, _ = t.multiSelect, h = _ !== void 0 && _, D = t.propagateSelect, k = D !== void 0 && D, L = t.propagateSelectUpwards, P = L !== void 0 && L, j = t.propagateCollapse, i = j !== void 0 && j, W = t.expandOnKeyboardSelect, U = W !== void 0 && W, Y = t.togglableSelect, H = Y !== void 0 && Y, G = t.defaultExpandedIds, q = G === void 0 ? [] : G, N = t.defaultSelectedIds, M = N === void 0 ? [] : N, x = t.defaultDisabledIds, z = x === void 0 ? [] : x, B = t.clickAction, X = B === void 0 ? ce.select : B, ae = t.nodeAction, Z = ae === void 0 ? "select" : ae, o = t.expandedIds, y = t.focusedId, v = t.onBlur, u = Qe(t, ["data", "selectedIds", "nodeRenderer", "onSelect", "onNodeSelect", "onExpand", "onLoadData", "className", "multiSelect", "propagateSelect", "propagateSelectUpwards", "propagateCollapse", "expandOnKeyboardSelect", "togglableSelect", "defaultExpandedIds", "defaultSelectedIds", "defaultDisabledIds", "clickAction", "nodeAction", "expandedIds", "focusedId", "onBlur"]);
  (function(T) {
    if (vt(T.map(function(R) {
      return R.id;
    })))
      throw Error("Multiple TreeView nodes have the same ID. IDs must be unique.");
    if (T.forEach(function(R) {
      if (R.id === R.parent)
        throw Error("Node with id=".concat(R.id, " has parent reference to itself."));
      if (vt(R.children))
        throw Error("Node with id=".concat(R.id, " contains duplicate ids in its children."));
    }), T.filter(function(R) {
      return R.parent === null;
    }).length === 0)
      throw Error("TreeView must have one root node.");
    if (T.filter(function(R) {
      return R.parent === null;
    }).length > 1)
      throw Error("TreeView can have only one root node.");
    ie(T).children.length || console.warn("TreeView have no nodes to display.");
  })(n);
  var p = Ee({}), S = Ee({}), b = Ee(null);
  e != null && (b = e);
  var m = Et(an({ data: n, controlledSelectedIds: r, controlledExpandedIds: o, defaultExpandedIds: q, defaultSelectedIds: M, defaultDisabledIds: z, nodeRefs: p, leafRefs: S, onSelect: l, onNodeSelect: d, onExpand: w, onLoadData: I, togglableSelect: H, multiSelect: h, propagateSelect: k, propagateSelectUpwards: P, treeRef: b, focusedId: y }), 2), O = m[0], A = m[1];
  return k = k && h, oe.createElement("ul", Object.assign({ className: Ce(ht.root, E), role: "tree", "aria-multiselectable": Z === "select" ? h : void 0, ref: b, onBlur: function(T) {
    en(T, b.current, function() {
      v && v({ treeState: O, dispatch: A }), A({ type: xt });
    });
  }, onKeyDown: ln({ data: n, tabbableId: O.tabbableId, expandedIds: O.expandedIds, selectedIds: O.selectedIds, disabledIds: O.disabledIds, halfSelectedIds: O.halfSelectedIds, clickAction: X, dispatch: A, propagateCollapse: i, propagateSelect: k, multiSelect: h, expandOnKeyboardSelect: U, togglableSelect: H }) }, u), ie(n).children.map(function(T, R) {
    return oe.createElement(Mt, Object.assign({ key: "".concat(T, "-").concat(Je(T)), data: n, element: V(n, T), setsize: ie(n).children.length, posinset: R + 1, level: 1 }, O, { state: O, dispatch: A, nodeRefs: p, leafRefs: S, baseClassNames: ht, nodeRenderer: s, propagateCollapse: i, propagateSelect: k, propagateSelectUpwards: P, multiSelect: h, togglableSelect: H, clickAction: X, nodeAction: Z }));
  }));
}), ln = function(t) {
  var e = t.data, n = t.expandedIds, r = t.selectedIds, s = t.disabledIds, a = t.tabbableId, l = t.dispatch, c = t.propagateCollapse, d = t.propagateSelect, g = t.multiSelect, w = t.expandOnKeyboardSelect, I = t.togglableSelect, C = t.clickAction;
  return function(E) {
    var _ = V(e, a), h = _.id;
    if (E.ctrlKey) {
      if (E.key === "a" && C !== ce.focus) {
        E.preventDefault();
        var D = e.filter(function(M) {
          return M.parent !== null;
        }).map(function(M) {
          return M.id;
        }).filter(function(M) {
          return !s.has(M);
        });
        l({ type: ue, multiSelect: g, select: Array.from(r).filter(function(M) {
          return !s.has(M);
        }).length !== D.length, ids: D, lastInteractedWith: _.id });
      } else if (E.shiftKey && (E.key === "Home" || E.key === "End") && C !== ce.focus) {
        var k = E.key === "Home" ? ie(e).children[0] : Ke(e, h, n), L = Pt({ data: e, expandedIds: n, from: h, to: k }).filter(function(M) {
          return !s.has(M);
        });
        l({ type: ue, multiSelect: g, select: !0, ids: d ? ye(e, L, s) : L }), l({ type: ne, id: k, lastInteractedWith: k });
      }
    } else {
      if (E.shiftKey)
        switch (E.key) {
          case "ArrowUp":
            E.preventDefault();
            var P = Ge(e, h, n);
            return void (P == null || s.has(P) || (C !== ce.focus && l({ type: ue, ids: d ? ye(e, [P], s) : [P], select: !0, multiSelect: g, lastInteractedWith: P, lastManuallyToggled: P }), l({ type: ne, id: P, lastInteractedWith: P })));
          case "ArrowDown":
            E.preventDefault();
            var j = Ie(e, h, n);
            return void (j == null || s.has(j) || (C !== ce.focus && l({ type: ue, ids: d ? ye(e, [j], s) : [j], multiSelect: g, select: !0, lastInteractedWith: j, lastManuallyToggled: j }), l({ type: ne, id: j, lastInteractedWith: j })));
        }
      switch (E.key) {
        case "ArrowDown":
          E.preventDefault();
          var i = Ie(e, h, n);
          return void (i != null && l({ type: ne, id: i, lastInteractedWith: i }));
        case "ArrowUp":
          E.preventDefault();
          var W = Ge(e, h, n);
          return void (W != null && l({ type: ne, id: W, lastInteractedWith: W }));
        case "ArrowLeft":
          if (E.preventDefault(), (ee(e, h) || _.isBranch) && n.has(a))
            if (c) {
              var U = [h].concat(le(ve(e, h, /* @__PURE__ */ new Set())));
              l({ type: Pe, ids: U, lastInteractedWith: _.id });
            } else
              l({ type: et, id: h, lastInteractedWith: h });
          else if (!ie(e).children.includes(h)) {
            var Y = fe(e, h);
            if (Y == null)
              throw new Error("parentId of root element is null");
            l({ type: ne, id: Y, lastInteractedWith: Y });
          }
          return;
        case "ArrowRight":
          return E.preventDefault(), void ((ee(e, h) || _.isBranch) && (n.has(a) ? l({ type: ne, id: _.children[0], lastInteractedWith: _.children[0] }) : l({ type: _e, id: h, lastInteractedWith: h })));
        case "Home":
          E.preventDefault(), l({ type: ne, id: ie(e).children[0], lastInteractedWith: ie(e).children[0] });
          break;
        case "End":
          E.preventDefault();
          var H = Ke(e, ie(e).id, n);
          return void l({ type: ne, id: H, lastInteractedWith: H });
        case "*":
          E.preventDefault();
          var G = fe(e, h);
          if (G == null)
            throw new Error("parentId of element is null");
          var q = V(e, G).children.filter(function(M) {
            return ee(e, M) || V(e, M).isBranch;
          });
          return void l({ type: je, ids: q, lastInteractedWith: h });
        case "Enter":
        case " ":
        case "Spacebar":
          return E.preventDefault(), C === ce.focus ? void 0 : (l({ type: I ? Wt(e, h, r, s) : we, id: h, multiSelect: g, lastInteractedWith: h, lastManuallyToggled: h }), d && !s.has(_.id) && l({ type: ue, ids: ye(e, [h], s), select: !I || !r.has(h), multiSelect: g, lastInteractedWith: h, lastManuallyToggled: h }), void (w && l({ type: We, id: h, lastInteractedWith: h })));
        default:
          if (E.key.length === 1)
            for (var N = Ie(e, h, n); N !== h; )
              if (N != null) {
                if (V(e, N).name[0].toLowerCase() === E.key.toLowerCase())
                  return void l({ type: ne, id: N, lastInteractedWith: h });
                N = Ie(e, N, n);
              } else
                N = ie(e).children[0];
          return;
      }
    }
  };
};
sn.propTypes = { data: K.array.isRequired, onSelect: K.func, onNodeSelect: K.func, onExpand: K.func, className: K.string, nodeRenderer: K.func.isRequired, defaultExpandedIds: K.array, defaultSelectedIds: K.array, expandedIds: K.array, selectedIds: K.array, defaultDisabledIds: K.array, propagateCollapse: K.bool, propagateSelect: K.bool, propagateSelectUpwards: K.bool, multiSelect: K.bool, expandOnKeyboardSelect: K.bool, togglableSelect: K.bool, nodeAction: K.oneOf(Kt), clickAction: K.oneOf(Vt), onBlur: K.func, onLoadData: K.func, focusedId: K.oneOfType([K.string, K.number]) };
export {
  pn as A,
  fn as a,
  Ce as c,
  sn as f
};
