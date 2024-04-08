import "../assets/AsyncTreeMenu.css";
import { G as ht } from "./iconBase.js";
import { g as bt } from "./_commonjsHelpers.js";
import le, { useRef as Ie, useReducer as Mt, useEffect as ie } from "react";
function dn(t) {
  return ht({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] })(t);
}
function un(t) {
  return ht({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] })(t);
}
var St = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var e = {}.hasOwnProperty;
    function n() {
      for (var a = "", s = 0; s < arguments.length; s++) {
        var d = arguments[s];
        d && (a = i(a, r(d)));
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
      var s = "";
      for (var d in a)
        e.call(a, d) && a[d] && (s = i(s, d));
      return s;
    }
    function i(a, s) {
      return s ? a ? a + " " + s : a + s : a;
    }
    t.exports ? (n.default = n, t.exports = n) : window.classNames = n;
  })();
})(St);
var Dt = St.exports;
const Ae = /* @__PURE__ */ bt(Dt);
var ze = { exports: {} }, Oe = { exports: {} }, $ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var at;
function kt() {
  if (at)
    return $;
  at = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, a = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, d = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, h = t ? Symbol.for("react.concurrent_mode") : 60111, w = t ? Symbol.for("react.forward_ref") : 60112, m = t ? Symbol.for("react.suspense") : 60113, C = t ? Symbol.for("react.suspense_list") : 60120, I = t ? Symbol.for("react.memo") : 60115, _ = t ? Symbol.for("react.lazy") : 60116, v = t ? Symbol.for("react.block") : 60121, P = t ? Symbol.for("react.fundamental") : 60117, D = t ? Symbol.for("react.responder") : 60118, G = t ? Symbol.for("react.scope") : 60119;
  function j(l) {
    if (typeof l == "object" && l !== null) {
      var R = l.$$typeof;
      switch (R) {
        case e:
          switch (l = l.type, l) {
            case u:
            case h:
            case r:
            case a:
            case i:
            case m:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case d:
                case w:
                case _:
                case I:
                case s:
                  return l;
                default:
                  return R;
              }
          }
        case n:
          return R;
      }
    }
  }
  function S(l) {
    return j(l) === h;
  }
  return $.AsyncMode = u, $.ConcurrentMode = h, $.ContextConsumer = d, $.ContextProvider = s, $.Element = e, $.ForwardRef = w, $.Fragment = r, $.Lazy = _, $.Memo = I, $.Portal = n, $.Profiler = a, $.StrictMode = i, $.Suspense = m, $.isAsyncMode = function(l) {
    return S(l) || j(l) === u;
  }, $.isConcurrentMode = S, $.isContextConsumer = function(l) {
    return j(l) === d;
  }, $.isContextProvider = function(l) {
    return j(l) === s;
  }, $.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === e;
  }, $.isForwardRef = function(l) {
    return j(l) === w;
  }, $.isFragment = function(l) {
    return j(l) === r;
  }, $.isLazy = function(l) {
    return j(l) === _;
  }, $.isMemo = function(l) {
    return j(l) === I;
  }, $.isPortal = function(l) {
    return j(l) === n;
  }, $.isProfiler = function(l) {
    return j(l) === a;
  }, $.isStrictMode = function(l) {
    return j(l) === i;
  }, $.isSuspense = function(l) {
    return j(l) === m;
  }, $.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === r || l === h || l === a || l === i || l === m || l === C || typeof l == "object" && l !== null && (l.$$typeof === _ || l.$$typeof === I || l.$$typeof === s || l.$$typeof === d || l.$$typeof === w || l.$$typeof === P || l.$$typeof === D || l.$$typeof === G || l.$$typeof === v);
  }, $.typeOf = j, $;
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
var it;
function Nt() {
  return it || (it = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, a = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, d = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, h = t ? Symbol.for("react.concurrent_mode") : 60111, w = t ? Symbol.for("react.forward_ref") : 60112, m = t ? Symbol.for("react.suspense") : 60113, C = t ? Symbol.for("react.suspense_list") : 60120, I = t ? Symbol.for("react.memo") : 60115, _ = t ? Symbol.for("react.lazy") : 60116, v = t ? Symbol.for("react.block") : 60121, P = t ? Symbol.for("react.fundamental") : 60117, D = t ? Symbol.for("react.responder") : 60118, G = t ? Symbol.for("react.scope") : 60119;
    function j(f) {
      return typeof f == "string" || typeof f == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      f === r || f === h || f === a || f === i || f === m || f === C || typeof f == "object" && f !== null && (f.$$typeof === _ || f.$$typeof === I || f.$$typeof === s || f.$$typeof === d || f.$$typeof === w || f.$$typeof === P || f.$$typeof === D || f.$$typeof === G || f.$$typeof === v);
    }
    function S(f) {
      if (typeof f == "object" && f !== null) {
        var ne = f.$$typeof;
        switch (ne) {
          case e:
            var de = f.type;
            switch (de) {
              case u:
              case h:
              case r:
              case a:
              case i:
              case m:
                return de;
              default:
                var ge = de && de.$$typeof;
                switch (ge) {
                  case d:
                  case w:
                  case _:
                  case I:
                  case s:
                    return ge;
                  default:
                    return ne;
                }
            }
          case n:
            return ne;
        }
      }
    }
    var l = u, R = h, q = d, Y = s, B = e, U = w, H = r, M = _, N = I, W = n, k = a, L = i, V = m, ae = !1;
    function ce(f) {
      return ae || (ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), o(f) || S(f) === u;
    }
    function o(f) {
      return S(f) === h;
    }
    function c(f) {
      return S(f) === d;
    }
    function p(f) {
      return S(f) === s;
    }
    function b(f) {
      return typeof f == "object" && f !== null && f.$$typeof === e;
    }
    function y(f) {
      return S(f) === w;
    }
    function T(f) {
      return S(f) === r;
    }
    function E(f) {
      return S(f) === _;
    }
    function O(f) {
      return S(f) === I;
    }
    function A(f) {
      return S(f) === n;
    }
    function x(f) {
      return S(f) === a;
    }
    function g(f) {
      return S(f) === i;
    }
    function K(f) {
      return S(f) === m;
    }
    F.AsyncMode = l, F.ConcurrentMode = R, F.ContextConsumer = q, F.ContextProvider = Y, F.Element = B, F.ForwardRef = U, F.Fragment = H, F.Lazy = M, F.Memo = N, F.Portal = W, F.Profiler = k, F.StrictMode = L, F.Suspense = V, F.isAsyncMode = ce, F.isConcurrentMode = o, F.isContextConsumer = c, F.isContextProvider = p, F.isElement = b, F.isForwardRef = y, F.isFragment = T, F.isLazy = E, F.isMemo = O, F.isPortal = A, F.isProfiler = x, F.isStrictMode = g, F.isSuspense = K, F.isValidElementType = j, F.typeOf = S;
  }()), F;
}
var st;
function gt() {
  return st || (st = 1, process.env.NODE_ENV === "production" ? Oe.exports = kt() : Oe.exports = Nt()), Oe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ke, lt;
function Ut() {
  if (lt)
    return ke;
  lt = 1;
  var t = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(a) {
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
      for (var s = {}, d = 0; d < 10; d++)
        s["_" + String.fromCharCode(d)] = d;
      var u = Object.getOwnPropertyNames(s).map(function(w) {
        return s[w];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var h = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(w) {
        h[w] = w;
      }), Object.keys(Object.assign({}, h)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ke = i() ? Object.assign : function(a, s) {
    for (var d, u = r(a), h, w = 1; w < arguments.length; w++) {
      d = Object(arguments[w]);
      for (var m in d)
        e.call(d, m) && (u[m] = d[m]);
      if (t) {
        h = t(d);
        for (var C = 0; C < h.length; C++)
          n.call(d, h[C]) && (u[h[C]] = d[h[C]]);
      }
    }
    return u;
  }, ke;
}
var Ne, ot;
function Ke() {
  if (ot)
    return Ne;
  ot = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ne = t, Ne;
}
var Ue, ct;
function mt() {
  return ct || (ct = 1, Ue = Function.call.bind(Object.prototype.hasOwnProperty)), Ue;
}
var Le, dt;
function Lt() {
  if (dt)
    return Le;
  dt = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = Ke(), n = {}, r = mt();
    t = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function i(a, s, d, u, h) {
    if (process.env.NODE_ENV !== "production") {
      for (var w in a)
        if (r(a, w)) {
          var m;
          try {
            if (typeof a[w] != "function") {
              var C = Error(
                (u || "React class") + ": " + d + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw C.name = "Invariant Violation", C;
            }
            m = a[w](s, w, u, d, null, e);
          } catch (_) {
            m = _;
          }
          if (m && !(m instanceof Error) && t(
            (u || "React class") + ": type specification of " + d + " `" + w + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in n)) {
            n[m.message] = !0;
            var I = h ? h() : "";
            t(
              "Failed " + d + " type: " + m.message + (I ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Le = i, Le;
}
var $e, ut;
function $t() {
  if (ut)
    return $e;
  ut = 1;
  var t = gt(), e = Ut(), n = Ke(), r = mt(), i = Lt(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(d) {
    var u = "Warning: " + d;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return $e = function(d, u) {
    var h = typeof Symbol == "function" && Symbol.iterator, w = "@@iterator";
    function m(o) {
      var c = o && (h && o[h] || o[w]);
      if (typeof c == "function")
        return c;
    }
    var C = "<<anonymous>>", I = {
      array: D("array"),
      bigint: D("bigint"),
      bool: D("boolean"),
      func: D("function"),
      number: D("number"),
      object: D("object"),
      string: D("string"),
      symbol: D("symbol"),
      any: G(),
      arrayOf: j,
      element: S(),
      elementType: l(),
      instanceOf: R,
      node: U(),
      objectOf: Y,
      oneOf: q,
      oneOfType: B,
      shape: M,
      exact: N
    };
    function _(o, c) {
      return o === c ? o !== 0 || 1 / o === 1 / c : o !== o && c !== c;
    }
    function v(o, c) {
      this.message = o, this.data = c && typeof c == "object" ? c : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function P(o) {
      if (process.env.NODE_ENV !== "production")
        var c = {}, p = 0;
      function b(T, E, O, A, x, g, K) {
        if (A = A || C, g = g || O, K !== n) {
          if (u) {
            var f = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw f.name = "Invariant Violation", f;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ne = A + ":" + O;
            !c[ne] && // Avoid spamming the console because they are often not actionable except for lib authors
            p < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + g + "` prop on `" + A + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), c[ne] = !0, p++);
          }
        }
        return E[O] == null ? T ? E[O] === null ? new v("The " + x + " `" + g + "` is marked as required " + ("in `" + A + "`, but its value is `null`.")) : new v("The " + x + " `" + g + "` is marked as required in " + ("`" + A + "`, but its value is `undefined`.")) : null : o(E, O, A, x, g);
      }
      var y = b.bind(null, !1);
      return y.isRequired = b.bind(null, !0), y;
    }
    function D(o) {
      function c(p, b, y, T, E, O) {
        var A = p[b], x = L(A);
        if (x !== o) {
          var g = V(A);
          return new v(
            "Invalid " + T + " `" + E + "` of type " + ("`" + g + "` supplied to `" + y + "`, expected ") + ("`" + o + "`."),
            { expectedType: o }
          );
        }
        return null;
      }
      return P(c);
    }
    function G() {
      return P(s);
    }
    function j(o) {
      function c(p, b, y, T, E) {
        if (typeof o != "function")
          return new v("Property `" + E + "` of component `" + y + "` has invalid PropType notation inside arrayOf.");
        var O = p[b];
        if (!Array.isArray(O)) {
          var A = L(O);
          return new v("Invalid " + T + " `" + E + "` of type " + ("`" + A + "` supplied to `" + y + "`, expected an array."));
        }
        for (var x = 0; x < O.length; x++) {
          var g = o(O, x, y, T, E + "[" + x + "]", n);
          if (g instanceof Error)
            return g;
        }
        return null;
      }
      return P(c);
    }
    function S() {
      function o(c, p, b, y, T) {
        var E = c[p];
        if (!d(E)) {
          var O = L(E);
          return new v("Invalid " + y + " `" + T + "` of type " + ("`" + O + "` supplied to `" + b + "`, expected a single ReactElement."));
        }
        return null;
      }
      return P(o);
    }
    function l() {
      function o(c, p, b, y, T) {
        var E = c[p];
        if (!t.isValidElementType(E)) {
          var O = L(E);
          return new v("Invalid " + y + " `" + T + "` of type " + ("`" + O + "` supplied to `" + b + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return P(o);
    }
    function R(o) {
      function c(p, b, y, T, E) {
        if (!(p[b] instanceof o)) {
          var O = o.name || C, A = ce(p[b]);
          return new v("Invalid " + T + " `" + E + "` of type " + ("`" + A + "` supplied to `" + y + "`, expected ") + ("instance of `" + O + "`."));
        }
        return null;
      }
      return P(c);
    }
    function q(o) {
      if (!Array.isArray(o))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function c(p, b, y, T, E) {
        for (var O = p[b], A = 0; A < o.length; A++)
          if (_(O, o[A]))
            return null;
        var x = JSON.stringify(o, function(K, f) {
          var ne = V(f);
          return ne === "symbol" ? String(f) : f;
        });
        return new v("Invalid " + T + " `" + E + "` of value `" + String(O) + "` " + ("supplied to `" + y + "`, expected one of " + x + "."));
      }
      return P(c);
    }
    function Y(o) {
      function c(p, b, y, T, E) {
        if (typeof o != "function")
          return new v("Property `" + E + "` of component `" + y + "` has invalid PropType notation inside objectOf.");
        var O = p[b], A = L(O);
        if (A !== "object")
          return new v("Invalid " + T + " `" + E + "` of type " + ("`" + A + "` supplied to `" + y + "`, expected an object."));
        for (var x in O)
          if (r(O, x)) {
            var g = o(O, x, y, T, E + "." + x, n);
            if (g instanceof Error)
              return g;
          }
        return null;
      }
      return P(c);
    }
    function B(o) {
      if (!Array.isArray(o))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var c = 0; c < o.length; c++) {
        var p = o[c];
        if (typeof p != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ae(p) + " at index " + c + "."
          ), s;
      }
      function b(y, T, E, O, A) {
        for (var x = [], g = 0; g < o.length; g++) {
          var K = o[g], f = K(y, T, E, O, A, n);
          if (f == null)
            return null;
          f.data && r(f.data, "expectedType") && x.push(f.data.expectedType);
        }
        var ne = x.length > 0 ? ", expected one of type [" + x.join(", ") + "]" : "";
        return new v("Invalid " + O + " `" + A + "` supplied to " + ("`" + E + "`" + ne + "."));
      }
      return P(b);
    }
    function U() {
      function o(c, p, b, y, T) {
        return W(c[p]) ? null : new v("Invalid " + y + " `" + T + "` supplied to " + ("`" + b + "`, expected a ReactNode."));
      }
      return P(o);
    }
    function H(o, c, p, b, y) {
      return new v(
        (o || "React class") + ": " + c + " type `" + p + "." + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + y + "`."
      );
    }
    function M(o) {
      function c(p, b, y, T, E) {
        var O = p[b], A = L(O);
        if (A !== "object")
          return new v("Invalid " + T + " `" + E + "` of type `" + A + "` " + ("supplied to `" + y + "`, expected `object`."));
        for (var x in o) {
          var g = o[x];
          if (typeof g != "function")
            return H(y, T, E, x, V(g));
          var K = g(O, x, y, T, E + "." + x, n);
          if (K)
            return K;
        }
        return null;
      }
      return P(c);
    }
    function N(o) {
      function c(p, b, y, T, E) {
        var O = p[b], A = L(O);
        if (A !== "object")
          return new v("Invalid " + T + " `" + E + "` of type `" + A + "` " + ("supplied to `" + y + "`, expected `object`."));
        var x = e({}, p[b], o);
        for (var g in x) {
          var K = o[g];
          if (r(o, g) && typeof K != "function")
            return H(y, T, E, g, V(K));
          if (!K)
            return new v(
              "Invalid " + T + " `" + E + "` key `" + g + "` supplied to `" + y + "`.\nBad object: " + JSON.stringify(p[b], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(o), null, "  ")
            );
          var f = K(O, g, y, T, E + "." + g, n);
          if (f)
            return f;
        }
        return null;
      }
      return P(c);
    }
    function W(o) {
      switch (typeof o) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !o;
        case "object":
          if (Array.isArray(o))
            return o.every(W);
          if (o === null || d(o))
            return !0;
          var c = m(o);
          if (c) {
            var p = c.call(o), b;
            if (c !== o.entries) {
              for (; !(b = p.next()).done; )
                if (!W(b.value))
                  return !1;
            } else
              for (; !(b = p.next()).done; ) {
                var y = b.value;
                if (y && !W(y[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function k(o, c) {
      return o === "symbol" ? !0 : c ? c["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && c instanceof Symbol : !1;
    }
    function L(o) {
      var c = typeof o;
      return Array.isArray(o) ? "array" : o instanceof RegExp ? "object" : k(c, o) ? "symbol" : c;
    }
    function V(o) {
      if (typeof o > "u" || o === null)
        return "" + o;
      var c = L(o);
      if (c === "object") {
        if (o instanceof Date)
          return "date";
        if (o instanceof RegExp)
          return "regexp";
      }
      return c;
    }
    function ae(o) {
      var c = V(o);
      switch (c) {
        case "array":
        case "object":
          return "an " + c;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + c;
        default:
          return c;
      }
    }
    function ce(o) {
      return !o.constructor || !o.constructor.name ? C : o.constructor.name;
    }
    return I.checkPropTypes = i, I.resetWarningCache = i.resetWarningCache, I.PropTypes = I, I;
  }, $e;
}
var Fe, ft;
function Ft() {
  if (ft)
    return Fe;
  ft = 1;
  var t = Ke();
  function e() {
  }
  function n() {
  }
  return n.resetWarningCache = e, Fe = function() {
    function r(s, d, u, h, w, m) {
      if (m !== t) {
        var C = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw C.name = "Invariant Violation", C;
      }
    }
    r.isRequired = r;
    function i() {
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
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: e
    };
    return a.PropTypes = a, a;
  }, Fe;
}
if (process.env.NODE_ENV !== "production") {
  var Yt = gt(), qt = !0;
  ze.exports = $t()(Yt.isElement, qt);
} else
  ze.exports = Ft()();
var zt = ze.exports;
const J = /* @__PURE__ */ bt(zt);
function Ve(t) {
  return (Ve = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  })(t);
}
function Ye(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function It(t, e) {
  return function(n) {
    if (Array.isArray(n))
      return n;
  }(t) || function(n, r) {
    var i = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (i != null) {
      var a, s, d = [], u = !0, h = !1;
      try {
        for (i = i.call(n); !(u = (a = i.next()).done) && (d.push(a.value), !r || d.length !== r); u = !0)
          ;
      } catch (w) {
        h = !0, s = w;
      } finally {
        try {
          u || i.return == null || i.return();
        } finally {
          if (h)
            throw s;
        }
      }
      return d;
    }
  }(t, e) || Je(t, e) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function se(t) {
  return function(e) {
    if (Array.isArray(e))
      return Be(e);
  }(t) || function(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
      return Array.from(e);
  }(t) || Je(t) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Je(t, e) {
  if (t) {
    if (typeof t == "string")
      return Be(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Be(t, e) : void 0;
  }
}
function Be(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function ee(t, e) {
  var n = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!n) {
    if (Array.isArray(t) || (n = Je(t)) || e && t && typeof t.length == "number") {
      n && (t = n);
      var r = 0, i = function() {
      };
      return { s: i, n: function() {
        return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
      }, e: function(u) {
        throw u;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a, s = !0, d = !1;
  return { s: function() {
    n = n.call(t);
  }, n: function() {
    var u = n.next();
    return s = u.done, u;
  }, e: function(u) {
    d = !0, a = u;
  }, f: function() {
    try {
      s || n.return == null || n.return();
    } finally {
      if (d)
        throw a;
    }
  } };
}
function Xe(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  }
  return n;
}
var pt = { root: "tree", node: "tree-node", branch: "tree-node__branch", branchWrapper: "tree-branch-wrapper", leafListItem: "tree-leaf-list-item", leaf: "tree-node__leaf", nodeGroup: "tree-node-group" }, oe = { select: "SELECT", focus: "FOCUS", exclusiveSelect: "EXCLUSIVE_SELECT" }, Bt = Object.freeze(Object.values(oe)), Ht = Object.freeze(Object.values({ check: "check", select: "select" })), Ze = "COLLAPSE", Re = "COLLAPSE_MANY", Ce = "EXPAND", Qe = "EXPAND_MANY", et = "HALF_SELECT", Ee = "SELECT", Et = "DESELECT", je = "TOGGLE", _e = "TOGGLE_SELECT", fe = "SELECT_MANY", wt = "EXCLUSIVE_CHANGE_SELECT_MANY", te = "FOCUS", Tt = "BLUR", Gt = "DISABLE", Kt = "ENABLE", Ot = "CLEAR_MANUALLY_TOGGLED", xt = "CONTROLLED_SELECT_MANY", At = "UPDATE_TREE_STATE_WHEN_DATA_CHANGED", be = function() {
}, qe = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return function(r) {
    for (var i = 0, a = e; i < a.length; i++) {
      var s = a[i];
      if (s && s(r), r.defaultPrevented)
        break;
    }
  };
}, ye = function(t, e) {
  var n, r = /* @__PURE__ */ new Set(), i = ee(t);
  try {
    for (i.s(); !(n = i.n()).done; ) {
      var a = n.value;
      e.has(a) || r.add(a);
    }
  } catch (s) {
    i.e(s);
  } finally {
    i.f();
  }
  return r;
}, xe = function(t, e) {
  return new Set([].concat(se(ye(t, e)), se(ye(e, t))));
}, yt = function(t) {
  var e = Ie();
  return ie(function() {
    e.current = t;
  }, [t]), e.current;
}, Q = function(t, e) {
  var n;
  return !!(!((n = z(t, e).children) === null || n === void 0) && n.length);
}, he = function(t, e) {
  return z(t, e).parent;
}, Vt = function(t, e, n) {
  for (var r = e, i = []; ; ) {
    var a = he(t, r);
    if (a === 0 || a == null || a != null && n.has(a))
      break;
    i.push(a), r = a;
  }
  return i;
}, Se = function(t, e, n) {
  var r = [];
  return function i(a, s) {
    var d = z(a, s);
    if (d.children != null) {
      var u, h = ee(d.children.filter(function(m) {
        return !n.has(m);
      }));
      try {
        for (h.s(); !(u = h.n()).done; ) {
          var w = u.value;
          r.push(w), i(a, w);
        }
      } catch (m) {
        h.e(m);
      } finally {
        h.f();
      }
    }
  }(t, e), r;
}, Ct = function(t, e) {
  var n = z(t, e);
  return n.children == null ? [] : n.children;
}, _t = function(t, e, n) {
  var r = he(t, e);
  if (r != null) {
    var i = z(t, r), a = i.children.indexOf(e) + n;
    if (i.children[a])
      return i.children[a];
  }
  return null;
}, He = function(t, e, n) {
  var r = z(t, e);
  for (re(t).id === e && (r = z(t, z(t, e).children[z(t, e).children.length - 1])); n.has(r.id) && Q(t, r.id); )
    r = z(t, r.children[r.children.length - 1]);
  return r.id;
}, Ge = function(t, e, n) {
  if (e === re(t).children[0])
    return null;
  var r = _t(t, e, -1);
  return r == null ? he(t, e) : He(t, r, n);
}, me = function(t, e, n) {
  var r = z(t, e).id;
  if (Q(t, r) && n.has(r))
    return z(t, r).children[0];
  for (; ; ) {
    var i = _t(t, r, 1);
    if (i != null)
      return i;
    if ((r = he(t, r)) == null)
      return null;
  }
}, Rt = function(t) {
  var e = t.data, n = t.expandedIds, r = t.from, i = t.to, a = [], s = e.length, d = 0, u = r;
  if (a.push(r), r < i)
    for (; d < s && ((u = me(e, u, n)) != null && a.push(u), u != null && u !== i); )
      d += 1;
  else if (r > i)
    for (; d < s && ((u = Ge(e, u, n)) != null && a.push(u), u != null && u !== i); )
      d += 1;
  return a;
}, Jt = function(t) {
  var e = t.isSelected, n = t.isDisabled, r = t.multiSelect;
  return n || r ? e : !!e || void 0;
}, Xt = function(t) {
  var e = t.isSelected, n = t.isDisabled, r = t.isHalfSelected, i = t.multiSelect;
  return n ? e : r ? "mixed" : i ? e : !!e || void 0;
}, ve = function(t, e, n) {
  return e.concat.apply(e, se(e.filter(function(r) {
    return Q(t, r);
  }).map(function(r) {
    return Se(t, r, n);
  })));
}, Zt = function(t, e, n) {
  e != null ? window.navigator.userAgent.match(/Trident/) ? setTimeout(function() {
    return !e.contains(document.activeElement) && n();
  }, 0) : !e.contains(t.nativeEvent.relatedTarget) && n() : console.warn("ref not set on <ul>");
}, Qt = function(t, e, n) {
  var r = Ct(t, e);
  return Q(t, e) && !n.has(e) && r.length === 1 && r.every(function(i) {
    return n.has(i);
  });
}, jt = function(t, e, n, r) {
  var i = function(s, d, u) {
    return Q(s, d) && u.has(d) && Se(s, d, /* @__PURE__ */ new Set()).some(function(h) {
      return u.has(h);
    });
  }(t, e, n), a = function(s, d, u) {
    var h = Ct(s, d);
    return Q(s, d) && u.has(d) && h.length === 1 && h.every(function(w) {
      return u.has(w);
    });
  }(t, e, n);
  return function(s, d, u, h) {
    var w = Se(s, d, /* @__PURE__ */ new Set());
    return Q(s, d) && u.has(d) && w.every(function(m) {
      return u.has(m);
    }) && w.every(function(m) {
      return !h.has(m);
    });
  }(t, e, n, r) ? _e : i && !a ? et : _e;
}, re = function(t) {
  var e = t.find(function(n) {
    return n.parent === null;
  });
  if (!e)
    throw Error("TreeView data must contain parent node.");
  return e;
}, z = function(t, e) {
  var n = t.find(function(r) {
    return r.id === e;
  });
  if (n == null)
    throw Error("Node with id=".concat(e, " doesn't exist in the tree."));
  return n;
}, vt = function(t) {
  var e = Array.from(new Set(t));
  return t.length !== e.length;
}, en = function(t, e) {
  switch (e.type) {
    case Ze:
      var n = new Set(t.expandedIds);
      return n.delete(e.id), Object.assign(Object.assign({}, t), { expandedIds: n, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Re:
      var r, i = new Set(t.expandedIds), a = ee(e.ids);
      try {
        for (a.s(); !(r = a.n()).done; ) {
          var s = r.value;
          i.delete(s);
        }
      } catch (V) {
        a.e(V);
      } finally {
        a.f();
      }
      return Object.assign(Object.assign({}, t), { expandedIds: i, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Ce:
      var d = new Set(t.expandedIds);
      return d.add(e.id), Object.assign(Object.assign({}, t), { expandedIds: d, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Qe:
      var u = new Set([].concat(se(t.expandedIds), se(e.ids)));
      return Object.assign(Object.assign({}, t), { expandedIds: u, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case je:
      var h = new Set(t.expandedIds);
      return t.expandedIds.has(e.id) ? h.delete(e.id) : h.add(e.id), Object.assign(Object.assign({}, t), { expandedIds: h, tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case et:
      if (t.disabledIds.has(e.id))
        return t;
      var w = new Set(t.halfSelectedIds), m = new Set(t.selectedIds);
      return w.add(e.id), m.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: m, halfSelectedIds: w, tabbableId: e.keepFocus ? t.tabbableId : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id });
    case Ee:
      if (!e.NotUserAction && t.disabledIds.has(e.id))
        return t;
      var C;
      e.multiSelect ? (C = new Set(t.selectedIds)).add(e.id) : (C = /* @__PURE__ */ new Set()).add(e.id);
      var I = new Set(t.halfSelectedIds);
      return I.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: C, halfSelectedIds: I, tabbableId: e.keepFocus ? t.tabbableId : e.id, isFocused: e.NotUserAction !== !0, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case Et:
      if (!e.NotUserAction && t.disabledIds.has(e.id))
        return t;
      var _, v = new Set(t.selectedIds);
      return v.delete(e.id), e.multiSelect ? (_ = new Set(t.halfSelectedIds)).delete(e.id) : _ = /* @__PURE__ */ new Set(), Object.assign(Object.assign({}, t), { selectedIds: v, halfSelectedIds: _, tabbableId: e.keepFocus ? t.tabbableId : e.id, isFocused: !0, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case _e:
      if (t.disabledIds.has(e.id))
        return t;
      var P, D = t.selectedIds.has(e.id);
      e.multiSelect ? (P = new Set(t.selectedIds), D ? P.delete(e.id) : P.add(e.id)) : (P = /* @__PURE__ */ new Set(), D || P.add(e.id));
      var G = new Set(t.halfSelectedIds);
      return G.delete(e.id), Object.assign(Object.assign({}, t), { selectedIds: P, halfSelectedIds: G, tabbableId: e.id, isFocused: !0, lastUserSelect: e.NotUserAction ? t.lastUserSelect : e.id, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
    case fe:
      var j, S = e.ids.filter(function(V) {
        return !t.disabledIds.has(V);
      });
      if (e.multiSelect) {
        j = e.select ? new Set([].concat(se(t.selectedIds), se(S))) : ye(t.selectedIds, new Set(S));
        var l = ye(t.halfSelectedIds, j);
        return Object.assign(Object.assign({}, t), { selectedIds: j, halfSelectedIds: l, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
      }
      return t;
    case wt:
      var R, q = e.ids.filter(function(V) {
        return !t.disabledIds.has(V);
      });
      if (e.multiSelect) {
        R = e.select ? new Set(q) : ye(t.selectedIds, new Set(q));
        var Y = ye(t.halfSelectedIds, R);
        return Object.assign(Object.assign({}, t), { selectedIds: R, halfSelectedIds: Y, lastAction: e.type, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled });
      }
      return t;
    case xt:
      var B, U = t.lastInteractedWith, H = t.tabbableId;
      if (e.multiSelect)
        B = new Set(e.ids), e.ids.length && (U = e.ids[e.ids.length - 1], H = e.ids[e.ids.length - 1]);
      else {
        B = /* @__PURE__ */ new Set(), e.ids.length > 1 && console.warn("Tree in singleSelect mode, only the first item from selectedIds will be selected.");
        var M = e.ids[0];
        M && B.add(M), U = M ?? U, H = M ?? U;
      }
      var N = new Set(t.halfSelectedIds);
      e.ids.every(function(V) {
        return N.delete(V);
      });
      var W = new Set(e.ids);
      return Object.assign(Object.assign({}, t), { selectedIds: B, halfSelectedIds: N, controlledIds: W, isFocused: !0, lastAction: e.type, tabbableId: H, lastInteractedWith: U });
    case te:
      return Object.assign(Object.assign({}, t), { tabbableId: e.id, isFocused: !0, lastAction: e.type, lastInteractedWith: e.lastInteractedWith });
    case Tt:
      return Object.assign(Object.assign({}, t), { isFocused: !1 });
    case Gt:
      var k = new Set(t.disabledIds);
      return k.add(e.id), Object.assign(Object.assign({}, t), { disabledIds: k });
    case Kt:
      var L = new Set(t.disabledIds);
      return L.delete(e.id), Object.assign(Object.assign({}, t), { disabledIds: L });
    case Ot:
      return Object.assign(Object.assign({}, t), { lastManuallyToggled: null });
    case At:
      return Object.assign(Object.assign({}, t), { tabbableId: e.tabbableId, lastInteractedWith: e.lastInteractedWith, lastManuallyToggled: e.lastManuallyToggled, lastUserSelect: e.lastUserSelect });
    default:
      throw new Error("Invalid action passed to the reducer");
  }
}, Pt = function(t) {
  var e = t.element, n = t.dispatch, r = t.data, i = t.selectedIds, a = t.tabbableId, s = t.isFocused, d = t.expandedIds, u = t.disabledIds, h = t.halfSelectedIds, w = t.lastUserSelect, m = t.nodeRefs, C = t.leafRefs, I = t.baseClassNames, _ = t.nodeRenderer, v = t.nodeAction, P = t.setsize, D = t.posinset, G = t.level, j = t.propagateCollapse, S = t.propagateSelect, l = t.multiSelect, R = t.togglableSelect, q = t.clickAction, Y = t.state, B = function(W) {
    if (!(W.ctrlKey || W.altKey || W.shiftKey))
      if (d.has(e.id) && j) {
        var k = [e.id].concat(se(Se(r, e.id, /* @__PURE__ */ new Set())));
        n({ type: Re, ids: k, lastInteractedWith: e.id });
      } else
        n({ type: je, id: e.id, lastInteractedWith: e.id });
  }, U = function() {
    return n({ type: te, id: e.id, lastInteractedWith: e.id });
  }, H = function(W) {
    if (W.shiftKey) {
      var k = Rt({ data: r, expandedIds: d, from: w, to: e.id }).filter(function(L) {
        return !u.has(L);
      });
      k = S ? ve(r, k, u) : k, n({ type: wt, select: !0, multiSelect: l, ids: k, lastInteractedWith: e.id, lastManuallyToggled: e.id });
    } else
      W.ctrlKey || q === oe.select ? (n({ type: R ? jt(r, e.id, i, u) : Ee, id: e.id, multiSelect: l, lastInteractedWith: e.id, lastManuallyToggled: e.id }), S && !u.has(e.id) && n({ type: fe, ids: ve(r, [e.id], u), select: !R || !i.has(e.id), multiSelect: l, lastInteractedWith: e.id, lastManuallyToggled: e.id })) : q === oe.exclusiveSelect ? n({ type: R ? _e : Ee, id: e.id, multiSelect: !1, lastInteractedWith: e.id, lastManuallyToggled: e.id }) : q === oe.focus && n({ type: te, id: e.id, lastInteractedWith: e.id });
  }, M = function(W) {
    var k;
    return Ae(W, (Ye(k = {}, "".concat(W, "--expanded"), d.has(e.id)), Ye(k, "".concat(W, "--selected"), i.has(e.id)), Ye(k, "".concat(W, "--focused"), a === e.id && s), k));
  }, N = v === "select" ? { "aria-selected": Jt({ isSelected: i.has(e.id), isDisabled: u.has(e.id), multiSelect: l }) } : { "aria-checked": Xt({ isSelected: i.has(e.id), isDisabled: u.has(e.id), isHalfSelected: h.has(e.id), multiSelect: l }) };
  return Q(r, e.id) || e.isBranch ? le.createElement("li", Object.assign({ role: "treeitem", "aria-expanded": d.has(e.id), "aria-setsize": P, "aria-posinset": D, "aria-level": G, "aria-disabled": u.has(e.id), tabIndex: a === e.id ? 0 : -1, ref: function(W) {
    (m == null ? void 0 : m.current) != null && W != null && (m.current[e.id] = W);
  }, className: I.branchWrapper }, N), le.createElement(le.Fragment, null, _({ element: e, isBranch: !0, isSelected: i.has(e.id), isHalfSelected: h.has(e.id), isExpanded: d.has(e.id), isDisabled: u.has(e.id), dispatch: n, getNodeProps: function() {
    var W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, k = W.onClick;
    return { onClick: k == null ? qe(H, B, U) : qe(k, U), className: Ae(M(I.node), I.branch), ref: function(L) {
      (C == null ? void 0 : C.current) != null && (C.current[e.id] = L);
    } };
  }, setsize: P, posinset: D, level: G, handleSelect: H, handleExpand: B, treeState: Y }), le.createElement(tn, Object.assign({ getClasses: M }, function(W) {
    return W.setsize, W.posinset, Xe(W, ["setsize", "posinset"]);
  }(t))))) : le.createElement("li", { role: "none", className: M(I.leafListItem) }, _({ element: e, isBranch: !1, isSelected: i.has(e.id), isHalfSelected: !1, isExpanded: !1, isDisabled: u.has(e.id), dispatch: n, getNodeProps: function() {
    var W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, k = W.onClick;
    return Object.assign({ role: "treeitem", tabIndex: a === e.id ? 0 : -1, onClick: qe(k ?? H, U), ref: function(L) {
      (m == null ? void 0 : m.current) != null && (C == null ? void 0 : C.current) != null && (m.current[e.id] = L, C.current[e.id] = L);
    }, className: Ae(M(I.node), I.leaf), "aria-setsize": P, "aria-posinset": D, "aria-level": G, disabled: u.has(e.id), "aria-disabled": u.has(e.id) }, N);
  }, setsize: P, posinset: D, level: G, handleSelect: H, handleExpand: be, treeState: Y }));
}, tn = function(t) {
  var e = t.data, n = t.element, r = t.expandedIds, i = t.getClasses, a = t.baseClassNames, s = t.level, d = Xe(t, ["data", "element", "expandedIds", "getClasses", "baseClassNames", "level"]);
  return le.createElement("ul", { role: "group", className: i(a.nodeGroup) }, r.has(n.id) && n.children.length > 0 && n.children.map(function(u, h) {
    return le.createElement(Pt, Object.assign({ data: e, expandedIds: r, baseClassNames: a, key: "".concat(u, "-").concat(Ve(u)), element: z(e, u), setsize: n.children.length, posinset: h + 1, level: s + 1 }, d));
  }));
}, nn = function(t) {
  var e = t.data, n = t.controlledSelectedIds, r = t.controlledExpandedIds, i = t.defaultExpandedIds, a = t.defaultSelectedIds, s = t.defaultDisabledIds, d = t.nodeRefs, u = t.leafRefs, h = t.onSelect, w = t.onNodeSelect, m = t.onExpand, C = t.onLoadData, I = t.togglableSelect, _ = t.multiSelect, v = t.propagateSelect, P = t.propagateSelectUpwards, D = t.treeRef, G = re(e), j = It(Mt(en, { selectedIds: new Set(n || a), controlledIds: new Set(n), tabbableId: G.children[0], isFocused: !1, expandedIds: new Set(r || i), halfSelectedIds: /* @__PURE__ */ new Set(), lastUserSelect: G.children[0], lastInteractedWith: null, lastManuallyToggled: null, disabledIds: new Set(s) }), 2), S = j[0], l = j[1], R = S.selectedIds, q = S.expandedIds, Y = S.disabledIds, B = S.tabbableId, U = S.halfSelectedIds, H = S.lastAction, M = S.lastInteractedWith, N = S.lastManuallyToggled, W = yt(R) || /* @__PURE__ */ new Set(), k = xe(R, W);
  ie(function() {
    var c;
    if (h != null && h !== be) {
      var p, b = ee(k);
      try {
        for (b.s(); !(p = b.n()).done; ) {
          var y = p.value, T = Q(e, y) || !!(!((c = z(e, B)) === null || c === void 0) && c.isBranch);
          h({ element: z(e, y), isBranch: T, isExpanded: !!T && q.has(y), isSelected: R.has(y), isDisabled: Y.has(y), isHalfSelected: !!T && U.has(y), treeState: S });
        }
      } catch (E) {
        b.e(E);
      } finally {
        b.f();
      }
    }
  }, [e, R, q, Y, U, k, h, S]), ie(function() {
    w != null && w !== be && N != null && k.size && (w({ element: z(e, N), isSelected: R.has(N), isBranch: Q(e, N), treeState: S }), l({ type: Ot }));
  }, [N, R, k]);
  var L = yt(q) || /* @__PURE__ */ new Set();
  ie(function() {
    var c = xe(q, L);
    if (m != null && m !== be) {
      var p, b = ee(c);
      try {
        for (b.s(); !(p = b.n()).done; ) {
          var y = p.value;
          m({ element: z(e, y), isExpanded: q.has(y), isSelected: R.has(y), isDisabled: Y.has(y), isHalfSelected: U.has(y), treeState: S });
        }
      } catch (T) {
        b.e(T);
      } finally {
        b.f();
      }
    }
  }, [e, R, q, Y, U, L, m, S]);
  var V, ae, ce = (V = e, ae = Ie(), ie(function() {
    ae.current = V;
  }), ae.current || /* @__PURE__ */ new Map());
  ie(function() {
    var c = xe(q, L);
    if (C) {
      var p, b = ee(c);
      try {
        for (b.s(); !(p = b.n()).done; ) {
          var y = p.value;
          C({ element: z(e, y), isExpanded: q.has(y), isSelected: R.has(y), isDisabled: Y.has(y), isHalfSelected: U.has(y), treeState: S });
        }
      } catch (A) {
        b.e(A);
      } finally {
        b.f();
      }
      if (ce !== e && I && v) {
        var T, E = ee(q);
        try {
          for (E.s(); !(T = E.n()).done; ) {
            var O = T.value;
            R.has(O) && l({ type: fe, ids: ve(e, [O], Y), select: !0, multiSelect: _, lastInteractedWith: O });
          }
        } catch (A) {
          E.e(A);
        } finally {
          E.f();
        }
      }
    }
  }, [e, R, q, Y, U, L, C, S]), ie(function() {
    if (ce !== e) {
      var c = re(e);
      c.children.length && l({ type: At, tabbableId: e.find(function(p) {
        return p.id === S.tabbableId;
      }) ? S.tabbableId : c.children[0], lastInteractedWith: e.find(function(p) {
        return p.id === S.lastInteractedWith;
      }) ? S.lastInteractedWith : null, lastManuallyToggled: e.find(function(p) {
        return p.id === S.lastManuallyToggled;
      }) ? S.lastManuallyToggled : null, lastUserSelect: e.find(function(p) {
        return p.id === S.lastUserSelect;
      }) ? S.lastUserSelect : c.children[0] });
    }
  }, [e]);
  var o = xe(new Set(n), R);
  return ie(function() {
    if (n) {
      o.size && l({ type: xt, ids: n, multiSelect: _ });
      var c, p = ee(n);
      try {
        for (p.s(); !(c = p.n()).done; ) {
          var b = c.value;
          v && !Y.has(b) && l({ type: fe, ids: ve(e, [b], Y), select: !0, multiSelect: _, lastInteractedWith: b });
        }
      } catch (y) {
        p.e(y);
      } finally {
        p.f();
      }
    }
  }, [n]), ie(function() {
    var c = new Set(r), p = ye(c, L), b = ye(L, c);
    if (b.size) {
      var y, T = ee(b);
      try {
        for (T.s(); !(y = T.n()).done; ) {
          var E = y.value;
          if (Q(e, E) || z(e, E).isBranch) {
            var O = [E].concat(se(Se(e, E, /* @__PURE__ */ new Set())));
            l({ type: Re, ids: O, lastInteractedWith: E });
          }
        }
      } catch (f) {
        T.e(f);
      } finally {
        T.f();
      }
    }
    if (p.size) {
      var A, x = ee(p);
      try {
        for (x.s(); !(A = x.n()).done; ) {
          var g = A.value;
          if (Q(e, g) || z(e, g).isBranch) {
            var K = he(e, g);
            l(K ? { type: Qe, ids: [g, K], lastInteractedWith: g } : { type: Ce, id: g, lastInteractedWith: g });
          }
        }
      } catch (f) {
        x.e(f);
      } finally {
        x.f();
      }
    }
  }, [r]), ie(function() {
    if (P) {
      var c = new Set(se(k));
      M && H !== te && H !== Ze && H !== Ce && H !== je && c.add(M);
      var p = [];
      c.forEach(function(Z) {
        e.find(function(Pe) {
          return Pe.id === Z;
        }) || p.push(Z);
      }), p.forEach(function(Z) {
        return c.delete(Z);
      });
      var b, y = function(Z, Pe, We, we, tt, Wt) {
        var nt, pe = { every: /* @__PURE__ */ new Set(), some: /* @__PURE__ */ new Set(), none: /* @__PURE__ */ new Set() }, Te = ee(Pe);
        try {
          for (Te.s(); !(nt = Te.n()).done; )
            for (var Me = nt.value; ; ) {
              var ue = he(Z, Me);
              if (ue === 0 || ue == null || ue != null && we.has(ue))
                break;
              var De = z(Z, ue).children.filter(function(X) {
                return !we.has(X);
              });
              if (De.length === 0)
                break;
              if (De.some(function(X) {
                return We.has(X) || pe.some.has(X) && !pe.none.has(X) || tt.has(X) && !pe.none.has(X);
              }))
                De.every(function(X) {
                  return We.has(X);
                }) ? pe.every.add(ue) : pe.some.add(ue);
              else {
                var rt = Vt(Z, Me, we).find(function(X) {
                  return We.has(X);
                });
                if (!Wt && rt) {
                  Se(Z, rt, we).forEach(function(X) {
                    tt.has(X) && pe.none.add(X);
                  });
                  break;
                }
                pe.none.add(ue);
              }
              Me = ue;
            }
        } catch (X) {
          Te.e(X);
        } finally {
          Te.f();
        }
        return pe;
      }(e, c, R, Y, U, _), T = y.every, E = y.some, O = y.none, A = ee(T);
      try {
        for (A.s(); !(b = A.n()).done; ) {
          var x = b.value;
          R.has(x) || l({ type: Ee, id: x, multiSelect: _ || Qt(e, x, R), keepFocus: !0, NotUserAction: !0, lastInteractedWith: M });
        }
      } catch (Z) {
        A.e(Z);
      } finally {
        A.f();
      }
      var g, K = ee(E);
      try {
        for (K.s(); !(g = K.n()).done; ) {
          var f = g.value;
          U.has(f) || l({ type: et, id: f, lastInteractedWith: M, keepFocus: !0, NotUserAction: !0 });
        }
      } catch (Z) {
        K.e(Z);
      } finally {
        K.f();
      }
      var ne, de = ee(O);
      try {
        for (de.s(); !(ne = de.n()).done; ) {
          var ge = ne.value;
          (R.has(ge) || U.has(ge)) && l({ type: Et, id: ge, multiSelect: _, keepFocus: !0, NotUserAction: !0, lastInteractedWith: M, lastManuallyToggled: N });
        }
      } catch (Z) {
        de.e(Z);
      } finally {
        de.f();
      }
    }
  }, [e, _, P, R, q, Y, U, H, W, k, M, o]), ie(function() {
    if (M != null && B != null && (d == null ? void 0 : d.current) != null && (u == null ? void 0 : u.current) != null && ((D == null ? void 0 : D.current) == null || document.activeElement && D.current.contains(document.activeElement))) {
      var c = d.current[B];
      (function(p) {
        p != null && p.scrollIntoView && p.scrollIntoView({ block: "nearest" });
      })(u.current[M]), function(p) {
        p != null && p.focus && p.focus({ preventScroll: !0 });
      }(c);
    }
  }, [B, d, u, M]), [S, l];
}, rn = le.forwardRef(function(t, e) {
  var n = t.data, r = t.selectedIds, i = t.nodeRenderer, a = t.onSelect, s = a === void 0 ? be : a, d = t.onNodeSelect, u = d === void 0 ? be : d, h = t.onExpand, w = h === void 0 ? be : h, m = t.onLoadData, C = t.className, I = C === void 0 ? "" : C, _ = t.multiSelect, v = _ !== void 0 && _, P = t.propagateSelect, D = P !== void 0 && P, G = t.propagateSelectUpwards, j = G !== void 0 && G, S = t.propagateCollapse, l = S !== void 0 && S, R = t.expandOnKeyboardSelect, q = R !== void 0 && R, Y = t.togglableSelect, B = Y !== void 0 && Y, U = t.defaultExpandedIds, H = U === void 0 ? [] : U, M = t.defaultSelectedIds, N = M === void 0 ? [] : M, W = t.defaultDisabledIds, k = W === void 0 ? [] : W, L = t.clickAction, V = L === void 0 ? oe.select : L, ae = t.nodeAction, ce = ae === void 0 ? "select" : ae, o = t.expandedIds, c = t.onBlur, p = Xe(t, ["data", "selectedIds", "nodeRenderer", "onSelect", "onNodeSelect", "onExpand", "onLoadData", "className", "multiSelect", "propagateSelect", "propagateSelectUpwards", "propagateCollapse", "expandOnKeyboardSelect", "togglableSelect", "defaultExpandedIds", "defaultSelectedIds", "defaultDisabledIds", "clickAction", "nodeAction", "expandedIds", "onBlur"]);
  (function(x) {
    if (vt(x.map(function(g) {
      return g.id;
    })))
      throw Error("Multiple TreeView nodes have the same ID. IDs must be unique.");
    if (x.forEach(function(g) {
      if (g.id === g.parent)
        throw Error("Node with id=".concat(g.id, " has parent reference to itself."));
      if (vt(g.children))
        throw Error("Node with id=".concat(g.id, " contains duplicate ids in its children."));
    }), x.filter(function(g) {
      return g.parent === null;
    }).length === 0)
      throw Error("TreeView must have one root node.");
    if (x.filter(function(g) {
      return g.parent === null;
    }).length > 1)
      throw Error("TreeView can have only one root node.");
    re(x).children.length || console.warn("TreeView have no nodes to display.");
  })(n);
  var b = Ie({}), y = Ie({}), T = Ie(null);
  e != null && (T = e);
  var E = It(nn({ data: n, controlledSelectedIds: r, controlledExpandedIds: o, defaultExpandedIds: H, defaultSelectedIds: N, defaultDisabledIds: k, nodeRefs: b, leafRefs: y, onSelect: s, onNodeSelect: u, onExpand: w, onLoadData: m, togglableSelect: B, multiSelect: v, propagateSelect: D, propagateSelectUpwards: j, treeRef: T }), 2), O = E[0], A = E[1];
  return D = D && v, le.createElement("ul", Object.assign({ className: Ae(pt.root, I), role: "tree", "aria-multiselectable": ce === "select" ? v : void 0, ref: T, onBlur: function(x) {
    Zt(x, T.current, function() {
      c && c({ treeState: O, dispatch: A }), A({ type: Tt });
    });
  }, onKeyDown: an({ data: n, tabbableId: O.tabbableId, expandedIds: O.expandedIds, selectedIds: O.selectedIds, disabledIds: O.disabledIds, halfSelectedIds: O.halfSelectedIds, clickAction: V, dispatch: A, propagateCollapse: l, propagateSelect: D, multiSelect: v, expandOnKeyboardSelect: q, togglableSelect: B }) }, p), re(n).children.map(function(x, g) {
    return le.createElement(Pt, Object.assign({ key: "".concat(x, "-").concat(Ve(x)), data: n, element: z(n, x), setsize: re(n).children.length, posinset: g + 1, level: 1 }, O, { state: O, dispatch: A, nodeRefs: b, leafRefs: y, baseClassNames: pt, nodeRenderer: i, propagateCollapse: l, propagateSelect: D, propagateSelectUpwards: j, multiSelect: v, togglableSelect: B, clickAction: V, nodeAction: ce }));
  }));
}), an = function(t) {
  var e = t.data, n = t.expandedIds, r = t.selectedIds, i = t.disabledIds, a = t.tabbableId, s = t.dispatch, d = t.propagateCollapse, u = t.propagateSelect, h = t.multiSelect, w = t.expandOnKeyboardSelect, m = t.togglableSelect, C = t.clickAction;
  return function(I) {
    var _ = z(e, a), v = _.id;
    if (I.ctrlKey) {
      if (I.key === "a" && C !== oe.focus) {
        I.preventDefault();
        var P = e.filter(function(N) {
          return N.parent !== null;
        }).map(function(N) {
          return N.id;
        }).filter(function(N) {
          return !i.has(N);
        });
        s({ type: fe, multiSelect: h, select: Array.from(r).filter(function(N) {
          return !i.has(N);
        }).length !== P.length, ids: P, lastInteractedWith: _.id });
      } else if (I.shiftKey && (I.key === "Home" || I.key === "End") && C !== oe.focus) {
        var D = I.key === "Home" ? re(e).children[0] : He(e, v, n), G = Rt({ data: e, expandedIds: n, from: v, to: D }).filter(function(N) {
          return !i.has(N);
        });
        s({ type: fe, multiSelect: h, select: !0, ids: u ? ve(e, G, i) : G }), s({ type: te, id: D, lastInteractedWith: D });
      }
    } else {
      if (I.shiftKey)
        switch (I.key) {
          case "ArrowUp":
            I.preventDefault();
            var j = Ge(e, v, n);
            return void (j == null || i.has(j) || (C !== oe.focus && s({ type: fe, ids: u ? ve(e, [j], i) : [j], select: !0, multiSelect: h, lastInteractedWith: j, lastManuallyToggled: j }), s({ type: te, id: j, lastInteractedWith: j })));
          case "ArrowDown":
            I.preventDefault();
            var S = me(e, v, n);
            return void (S == null || i.has(S) || (C !== oe.focus && s({ type: fe, ids: u ? ve(e, [S], i) : [S], multiSelect: h, select: !0, lastInteractedWith: S, lastManuallyToggled: S }), s({ type: te, id: S, lastInteractedWith: S })));
        }
      switch (I.key) {
        case "ArrowDown":
          I.preventDefault();
          var l = me(e, v, n);
          return void (l != null && s({ type: te, id: l, lastInteractedWith: l }));
        case "ArrowUp":
          I.preventDefault();
          var R = Ge(e, v, n);
          return void (R != null && s({ type: te, id: R, lastInteractedWith: R }));
        case "ArrowLeft":
          if (I.preventDefault(), (Q(e, v) || _.isBranch) && n.has(a))
            if (d) {
              var q = [v].concat(se(Se(e, v, /* @__PURE__ */ new Set())));
              s({ type: Re, ids: q, lastInteractedWith: _.id });
            } else
              s({ type: Ze, id: v, lastInteractedWith: v });
          else if (!re(e).children.includes(v)) {
            var Y = he(e, v);
            if (Y == null)
              throw new Error("parentId of root element is null");
            s({ type: te, id: Y, lastInteractedWith: Y });
          }
          return;
        case "ArrowRight":
          return I.preventDefault(), void ((Q(e, v) || _.isBranch) && (n.has(a) ? s({ type: te, id: _.children[0], lastInteractedWith: _.children[0] }) : s({ type: Ce, id: v, lastInteractedWith: v })));
        case "Home":
          I.preventDefault(), s({ type: te, id: re(e).children[0], lastInteractedWith: re(e).children[0] });
          break;
        case "End":
          I.preventDefault();
          var B = He(e, re(e).id, n);
          return void s({ type: te, id: B, lastInteractedWith: B });
        case "*":
          I.preventDefault();
          var U = he(e, v);
          if (U == null)
            throw new Error("parentId of element is null");
          var H = z(e, U).children.filter(function(N) {
            return Q(e, N) || z(e, N).isBranch;
          });
          return void s({ type: Qe, ids: H, lastInteractedWith: v });
        case "Enter":
        case " ":
        case "Spacebar":
          return I.preventDefault(), C === oe.focus ? void 0 : (s({ type: m ? jt(e, v, r, i) : Ee, id: v, multiSelect: h, lastInteractedWith: v, lastManuallyToggled: v }), u && !i.has(_.id) && s({ type: fe, ids: ve(e, [v], i), select: !m || !r.has(v), multiSelect: h, lastInteractedWith: v, lastManuallyToggled: v }), void (w && s({ type: je, id: v, lastInteractedWith: v })));
        default:
          if (I.key.length === 1)
            for (var M = me(e, v, n); M !== v; )
              if (M != null) {
                if (z(e, M).name[0].toLowerCase() === I.key.toLowerCase())
                  return void s({ type: te, id: M, lastInteractedWith: v });
                M = me(e, M, n);
              } else
                M = re(e).children[0];
          return;
      }
    }
  };
};
rn.propTypes = { data: J.array.isRequired, onSelect: J.func, onNodeSelect: J.func, onExpand: J.func, className: J.string, nodeRenderer: J.func.isRequired, defaultExpandedIds: J.array, defaultSelectedIds: J.array, expandedIds: J.array, selectedIds: J.array, defaultDisabledIds: J.array, propagateCollapse: J.bool, propagateSelect: J.bool, propagateSelectUpwards: J.bool, multiSelect: J.bool, expandOnKeyboardSelect: J.bool, togglableSelect: J.bool, nodeAction: J.oneOf(Ht), clickAction: J.oneOf(Bt), onBlur: J.func, onLoadData: J.func };
export {
  dn as A,
  un as a,
  Ae as c,
  rn as u
};
