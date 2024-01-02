import L from "react";
import { g as Ce } from "./_commonjsHelpers.js";
var Te = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, le = L.createContext && L.createContext(Te), D = globalThis && globalThis.__assign || function() {
  return D = Object.assign || function(r) {
    for (var v, i = 1, a = arguments.length; i < a; i++) {
      v = arguments[i];
      for (var u in v)
        Object.prototype.hasOwnProperty.call(v, u) && (r[u] = v[u]);
    }
    return r;
  }, D.apply(this, arguments);
}, Re = globalThis && globalThis.__rest || function(r, v) {
  var i = {};
  for (var a in r)
    Object.prototype.hasOwnProperty.call(r, a) && v.indexOf(a) < 0 && (i[a] = r[a]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var u = 0, a = Object.getOwnPropertySymbols(r); u < a.length; u++)
      v.indexOf(a[u]) < 0 && Object.prototype.propertyIsEnumerable.call(r, a[u]) && (i[a[u]] = r[a[u]]);
  return i;
};
function Oe(r) {
  return r && r.map(function(v, i) {
    return L.createElement(v.tag, D({
      key: i
    }, v.attr), Oe(v.child));
  });
}
function Se(r) {
  return function(v) {
    return L.createElement(xe, D({
      attr: D({}, r.attr)
    }, v), Oe(r.child));
  };
}
function xe(r) {
  var v = function(i) {
    var a = r.attr, u = r.size, c = r.title, _ = Re(r, ["attr", "size", "title"]), f = u || i.size || "1em", O;
    return i.className && (O = i.className), r.className && (O = (O ? O + " " : "") + r.className), L.createElement("svg", D({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, i.attr, a, _, {
      className: O,
      style: D(D({
        color: r.color || i.color
      }, i.style), r.style),
      height: f,
      width: f,
      xmlns: "http://www.w3.org/2000/svg"
    }), c && L.createElement("title", null, c), r.children);
  };
  return le !== void 0 ? L.createElement(le.Consumer, null, function(i) {
    return v(i);
  }) : v(Te);
}
function We(r) {
  return Se({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] })(r);
}
function Le(r) {
  return Se({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] })(r);
}
var se = { exports: {} }, G = { exports: {} }, E = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var de;
function we() {
  if (de)
    return E;
  de = 1;
  var r = typeof Symbol == "function" && Symbol.for, v = r ? Symbol.for("react.element") : 60103, i = r ? Symbol.for("react.portal") : 60106, a = r ? Symbol.for("react.fragment") : 60107, u = r ? Symbol.for("react.strict_mode") : 60108, c = r ? Symbol.for("react.profiler") : 60114, _ = r ? Symbol.for("react.provider") : 60109, f = r ? Symbol.for("react.context") : 60110, O = r ? Symbol.for("react.async_mode") : 60111, C = r ? Symbol.for("react.concurrent_mode") : 60111, g = r ? Symbol.for("react.forward_ref") : 60112, P = r ? Symbol.for("react.suspense") : 60113, x = r ? Symbol.for("react.suspense_list") : 60120, w = r ? Symbol.for("react.memo") : 60115, $ = r ? Symbol.for("react.lazy") : 60116, R = r ? Symbol.for("react.block") : 60121, I = r ? Symbol.for("react.fundamental") : 60117, Y = r ? Symbol.for("react.responder") : 60118, U = r ? Symbol.for("react.scope") : 60119;
  function j(n) {
    if (typeof n == "object" && n !== null) {
      var z = n.$$typeof;
      switch (z) {
        case v:
          switch (n = n.type, n) {
            case O:
            case C:
            case a:
            case c:
            case u:
            case P:
              return n;
            default:
              switch (n = n && n.$$typeof, n) {
                case f:
                case g:
                case $:
                case w:
                case _:
                  return n;
                default:
                  return z;
              }
          }
        case i:
          return z;
      }
    }
  }
  function A(n) {
    return j(n) === C;
  }
  return E.AsyncMode = O, E.ConcurrentMode = C, E.ContextConsumer = f, E.ContextProvider = _, E.Element = v, E.ForwardRef = g, E.Fragment = a, E.Lazy = $, E.Memo = w, E.Portal = i, E.Profiler = c, E.StrictMode = u, E.Suspense = P, E.isAsyncMode = function(n) {
    return A(n) || j(n) === O;
  }, E.isConcurrentMode = A, E.isContextConsumer = function(n) {
    return j(n) === f;
  }, E.isContextProvider = function(n) {
    return j(n) === _;
  }, E.isElement = function(n) {
    return typeof n == "object" && n !== null && n.$$typeof === v;
  }, E.isForwardRef = function(n) {
    return j(n) === g;
  }, E.isFragment = function(n) {
    return j(n) === a;
  }, E.isLazy = function(n) {
    return j(n) === $;
  }, E.isMemo = function(n) {
    return j(n) === w;
  }, E.isPortal = function(n) {
    return j(n) === i;
  }, E.isProfiler = function(n) {
    return j(n) === c;
  }, E.isStrictMode = function(n) {
    return j(n) === u;
  }, E.isSuspense = function(n) {
    return j(n) === P;
  }, E.isValidElementType = function(n) {
    return typeof n == "string" || typeof n == "function" || n === a || n === C || n === c || n === u || n === P || n === x || typeof n == "object" && n !== null && (n.$$typeof === $ || n.$$typeof === w || n.$$typeof === _ || n.$$typeof === f || n.$$typeof === g || n.$$typeof === I || n.$$typeof === Y || n.$$typeof === U || n.$$typeof === R);
  }, E.typeOf = j, E;
}
var T = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ye;
function Ae() {
  return ye || (ye = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, v = r ? Symbol.for("react.element") : 60103, i = r ? Symbol.for("react.portal") : 60106, a = r ? Symbol.for("react.fragment") : 60107, u = r ? Symbol.for("react.strict_mode") : 60108, c = r ? Symbol.for("react.profiler") : 60114, _ = r ? Symbol.for("react.provider") : 60109, f = r ? Symbol.for("react.context") : 60110, O = r ? Symbol.for("react.async_mode") : 60111, C = r ? Symbol.for("react.concurrent_mode") : 60111, g = r ? Symbol.for("react.forward_ref") : 60112, P = r ? Symbol.for("react.suspense") : 60113, x = r ? Symbol.for("react.suspense_list") : 60120, w = r ? Symbol.for("react.memo") : 60115, $ = r ? Symbol.for("react.lazy") : 60116, R = r ? Symbol.for("react.block") : 60121, I = r ? Symbol.for("react.fundamental") : 60117, Y = r ? Symbol.for("react.responder") : 60118, U = r ? Symbol.for("react.scope") : 60119;
    function j(t) {
      return typeof t == "string" || typeof t == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      t === a || t === C || t === c || t === u || t === P || t === x || typeof t == "object" && t !== null && (t.$$typeof === $ || t.$$typeof === w || t.$$typeof === _ || t.$$typeof === f || t.$$typeof === g || t.$$typeof === I || t.$$typeof === Y || t.$$typeof === U || t.$$typeof === R);
    }
    function A(t) {
      if (typeof t == "object" && t !== null) {
        var k = t.$$typeof;
        switch (k) {
          case v:
            var V = t.type;
            switch (V) {
              case O:
              case C:
              case a:
              case c:
              case u:
              case P:
                return V;
              default:
                var fe = V && V.$$typeof;
                switch (fe) {
                  case f:
                  case g:
                  case $:
                  case w:
                  case _:
                    return fe;
                  default:
                    return k;
                }
            }
          case i:
            return k;
        }
      }
    }
    var n = O, z = C, H = f, J = _, X = v, K = g, N = a, Z = $, Q = w, F = i, ee = c, q = u, W = P, B = !1;
    function re(t) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(t) || A(t) === O;
    }
    function e(t) {
      return A(t) === C;
    }
    function o(t) {
      return A(t) === f;
    }
    function p(t) {
      return A(t) === _;
    }
    function d(t) {
      return typeof t == "object" && t !== null && t.$$typeof === v;
    }
    function s(t) {
      return A(t) === g;
    }
    function m(t) {
      return A(t) === a;
    }
    function l(t) {
      return A(t) === $;
    }
    function y(t) {
      return A(t) === w;
    }
    function b(t) {
      return A(t) === i;
    }
    function S(t) {
      return A(t) === c;
    }
    function h(t) {
      return A(t) === u;
    }
    function M(t) {
      return A(t) === P;
    }
    T.AsyncMode = n, T.ConcurrentMode = z, T.ContextConsumer = H, T.ContextProvider = J, T.Element = X, T.ForwardRef = K, T.Fragment = N, T.Lazy = Z, T.Memo = Q, T.Portal = F, T.Profiler = ee, T.StrictMode = q, T.Suspense = W, T.isAsyncMode = re, T.isConcurrentMode = e, T.isContextConsumer = o, T.isContextProvider = p, T.isElement = d, T.isForwardRef = s, T.isFragment = m, T.isLazy = l, T.isMemo = y, T.isPortal = b, T.isProfiler = S, T.isStrictMode = h, T.isSuspense = M, T.isValidElementType = j, T.typeOf = A;
  }()), T;
}
var pe;
function _e() {
  return pe || (pe = 1, process.env.NODE_ENV === "production" ? G.exports = we() : G.exports = Ae()), G.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var te, ve;
function je() {
  if (ve)
    return te;
  ve = 1;
  var r = Object.getOwnPropertySymbols, v = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
  function a(c) {
    if (c == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(c);
  }
  function u() {
    try {
      if (!Object.assign)
        return !1;
      var c = new String("abc");
      if (c[5] = "de", Object.getOwnPropertyNames(c)[0] === "5")
        return !1;
      for (var _ = {}, f = 0; f < 10; f++)
        _["_" + String.fromCharCode(f)] = f;
      var O = Object.getOwnPropertyNames(_).map(function(g) {
        return _[g];
      });
      if (O.join("") !== "0123456789")
        return !1;
      var C = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(g) {
        C[g] = g;
      }), Object.keys(Object.assign({}, C)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return te = u() ? Object.assign : function(c, _) {
    for (var f, O = a(c), C, g = 1; g < arguments.length; g++) {
      f = Object(arguments[g]);
      for (var P in f)
        v.call(f, P) && (O[P] = f[P]);
      if (r) {
        C = r(f);
        for (var x = 0; x < C.length; x++)
          i.call(f, C[x]) && (O[C[x]] = f[C[x]]);
      }
    }
    return O;
  }, te;
}
var ne, me;
function ue() {
  if (me)
    return ne;
  me = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ne = r, ne;
}
var oe, be;
function Pe() {
  return be || (be = 1, oe = Function.call.bind(Object.prototype.hasOwnProperty)), oe;
}
var ae, he;
function Ie() {
  if (he)
    return ae;
  he = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var v = ue(), i = {}, a = Pe();
    r = function(c) {
      var _ = "Warning: " + c;
      typeof console < "u" && console.error(_);
      try {
        throw new Error(_);
      } catch {
      }
    };
  }
  function u(c, _, f, O, C) {
    if (process.env.NODE_ENV !== "production") {
      for (var g in c)
        if (a(c, g)) {
          var P;
          try {
            if (typeof c[g] != "function") {
              var x = Error(
                (O || "React class") + ": " + f + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw x.name = "Invariant Violation", x;
            }
            P = c[g](_, g, O, f, null, v);
          } catch ($) {
            P = $;
          }
          if (P && !(P instanceof Error) && r(
            (O || "React class") + ": type specification of " + f + " `" + g + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof P + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), P instanceof Error && !(P.message in i)) {
            i[P.message] = !0;
            var w = C ? C() : "";
            r(
              "Failed " + f + " type: " + P.message + (w ?? "")
            );
          }
        }
    }
  }
  return u.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (i = {});
  }, ae = u, ae;
}
var ie, ge;
function Me() {
  if (ge)
    return ie;
  ge = 1;
  var r = _e(), v = je(), i = ue(), a = Pe(), u = Ie(), c = function() {
  };
  process.env.NODE_ENV !== "production" && (c = function(f) {
    var O = "Warning: " + f;
    typeof console < "u" && console.error(O);
    try {
      throw new Error(O);
    } catch {
    }
  });
  function _() {
    return null;
  }
  return ie = function(f, O) {
    var C = typeof Symbol == "function" && Symbol.iterator, g = "@@iterator";
    function P(e) {
      var o = e && (C && e[C] || e[g]);
      if (typeof o == "function")
        return o;
    }
    var x = "<<anonymous>>", w = {
      array: Y("array"),
      bigint: Y("bigint"),
      bool: Y("boolean"),
      func: Y("function"),
      number: Y("number"),
      object: Y("object"),
      string: Y("string"),
      symbol: Y("symbol"),
      any: U(),
      arrayOf: j,
      element: A(),
      elementType: n(),
      instanceOf: z,
      node: K(),
      objectOf: J,
      oneOf: H,
      oneOfType: X,
      shape: Z,
      exact: Q
    };
    function $(e, o) {
      return e === o ? e !== 0 || 1 / e === 1 / o : e !== e && o !== o;
    }
    function R(e, o) {
      this.message = e, this.data = o && typeof o == "object" ? o : {}, this.stack = "";
    }
    R.prototype = Error.prototype;
    function I(e) {
      if (process.env.NODE_ENV !== "production")
        var o = {}, p = 0;
      function d(m, l, y, b, S, h, M) {
        if (b = b || x, h = h || y, M !== i) {
          if (O) {
            var t = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw t.name = "Invariant Violation", t;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var k = b + ":" + y;
            !o[k] && // Avoid spamming the console because they are often not actionable except for lib authors
            p < 3 && (c(
              "You are manually calling a React.PropTypes validation function for the `" + h + "` prop on `" + b + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), o[k] = !0, p++);
          }
        }
        return l[y] == null ? m ? l[y] === null ? new R("The " + S + " `" + h + "` is marked as required " + ("in `" + b + "`, but its value is `null`.")) : new R("The " + S + " `" + h + "` is marked as required in " + ("`" + b + "`, but its value is `undefined`.")) : null : e(l, y, b, S, h);
      }
      var s = d.bind(null, !1);
      return s.isRequired = d.bind(null, !0), s;
    }
    function Y(e) {
      function o(p, d, s, m, l, y) {
        var b = p[d], S = q(b);
        if (S !== e) {
          var h = W(b);
          return new R(
            "Invalid " + m + " `" + l + "` of type " + ("`" + h + "` supplied to `" + s + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return I(o);
    }
    function U() {
      return I(_);
    }
    function j(e) {
      function o(p, d, s, m, l) {
        if (typeof e != "function")
          return new R("Property `" + l + "` of component `" + s + "` has invalid PropType notation inside arrayOf.");
        var y = p[d];
        if (!Array.isArray(y)) {
          var b = q(y);
          return new R("Invalid " + m + " `" + l + "` of type " + ("`" + b + "` supplied to `" + s + "`, expected an array."));
        }
        for (var S = 0; S < y.length; S++) {
          var h = e(y, S, s, m, l + "[" + S + "]", i);
          if (h instanceof Error)
            return h;
        }
        return null;
      }
      return I(o);
    }
    function A() {
      function e(o, p, d, s, m) {
        var l = o[p];
        if (!f(l)) {
          var y = q(l);
          return new R("Invalid " + s + " `" + m + "` of type " + ("`" + y + "` supplied to `" + d + "`, expected a single ReactElement."));
        }
        return null;
      }
      return I(e);
    }
    function n() {
      function e(o, p, d, s, m) {
        var l = o[p];
        if (!r.isValidElementType(l)) {
          var y = q(l);
          return new R("Invalid " + s + " `" + m + "` of type " + ("`" + y + "` supplied to `" + d + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return I(e);
    }
    function z(e) {
      function o(p, d, s, m, l) {
        if (!(p[d] instanceof e)) {
          var y = e.name || x, b = re(p[d]);
          return new R("Invalid " + m + " `" + l + "` of type " + ("`" + b + "` supplied to `" + s + "`, expected ") + ("instance of `" + y + "`."));
        }
        return null;
      }
      return I(o);
    }
    function H(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? c(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : c("Invalid argument supplied to oneOf, expected an array.")), _;
      function o(p, d, s, m, l) {
        for (var y = p[d], b = 0; b < e.length; b++)
          if ($(y, e[b]))
            return null;
        var S = JSON.stringify(e, function(M, t) {
          var k = W(t);
          return k === "symbol" ? String(t) : t;
        });
        return new R("Invalid " + m + " `" + l + "` of value `" + String(y) + "` " + ("supplied to `" + s + "`, expected one of " + S + "."));
      }
      return I(o);
    }
    function J(e) {
      function o(p, d, s, m, l) {
        if (typeof e != "function")
          return new R("Property `" + l + "` of component `" + s + "` has invalid PropType notation inside objectOf.");
        var y = p[d], b = q(y);
        if (b !== "object")
          return new R("Invalid " + m + " `" + l + "` of type " + ("`" + b + "` supplied to `" + s + "`, expected an object."));
        for (var S in y)
          if (a(y, S)) {
            var h = e(y, S, s, m, l + "." + S, i);
            if (h instanceof Error)
              return h;
          }
        return null;
      }
      return I(o);
    }
    function X(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && c("Invalid argument supplied to oneOfType, expected an instance of array."), _;
      for (var o = 0; o < e.length; o++) {
        var p = e[o];
        if (typeof p != "function")
          return c(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + B(p) + " at index " + o + "."
          ), _;
      }
      function d(s, m, l, y, b) {
        for (var S = [], h = 0; h < e.length; h++) {
          var M = e[h], t = M(s, m, l, y, b, i);
          if (t == null)
            return null;
          t.data && a(t.data, "expectedType") && S.push(t.data.expectedType);
        }
        var k = S.length > 0 ? ", expected one of type [" + S.join(", ") + "]" : "";
        return new R("Invalid " + y + " `" + b + "` supplied to " + ("`" + l + "`" + k + "."));
      }
      return I(d);
    }
    function K() {
      function e(o, p, d, s, m) {
        return F(o[p]) ? null : new R("Invalid " + s + " `" + m + "` supplied to " + ("`" + d + "`, expected a ReactNode."));
      }
      return I(e);
    }
    function N(e, o, p, d, s) {
      return new R(
        (e || "React class") + ": " + o + " type `" + p + "." + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + s + "`."
      );
    }
    function Z(e) {
      function o(p, d, s, m, l) {
        var y = p[d], b = q(y);
        if (b !== "object")
          return new R("Invalid " + m + " `" + l + "` of type `" + b + "` " + ("supplied to `" + s + "`, expected `object`."));
        for (var S in e) {
          var h = e[S];
          if (typeof h != "function")
            return N(s, m, l, S, W(h));
          var M = h(y, S, s, m, l + "." + S, i);
          if (M)
            return M;
        }
        return null;
      }
      return I(o);
    }
    function Q(e) {
      function o(p, d, s, m, l) {
        var y = p[d], b = q(y);
        if (b !== "object")
          return new R("Invalid " + m + " `" + l + "` of type `" + b + "` " + ("supplied to `" + s + "`, expected `object`."));
        var S = v({}, p[d], e);
        for (var h in S) {
          var M = e[h];
          if (a(e, h) && typeof M != "function")
            return N(s, m, l, h, W(M));
          if (!M)
            return new R(
              "Invalid " + m + " `" + l + "` key `" + h + "` supplied to `" + s + "`.\nBad object: " + JSON.stringify(p[d], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var t = M(y, h, s, m, l + "." + h, i);
          if (t)
            return t;
        }
        return null;
      }
      return I(o);
    }
    function F(e) {
      switch (typeof e) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !e;
        case "object":
          if (Array.isArray(e))
            return e.every(F);
          if (e === null || f(e))
            return !0;
          var o = P(e);
          if (o) {
            var p = o.call(e), d;
            if (o !== e.entries) {
              for (; !(d = p.next()).done; )
                if (!F(d.value))
                  return !1;
            } else
              for (; !(d = p.next()).done; ) {
                var s = d.value;
                if (s && !F(s[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ee(e, o) {
      return e === "symbol" ? !0 : o ? o["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && o instanceof Symbol : !1;
    }
    function q(e) {
      var o = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : ee(o, e) ? "symbol" : o;
    }
    function W(e) {
      if (typeof e > "u" || e === null)
        return "" + e;
      var o = q(e);
      if (o === "object") {
        if (e instanceof Date)
          return "date";
        if (e instanceof RegExp)
          return "regexp";
      }
      return o;
    }
    function B(e) {
      var o = W(e);
      switch (o) {
        case "array":
        case "object":
          return "an " + o;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + o;
        default:
          return o;
      }
    }
    function re(e) {
      return !e.constructor || !e.constructor.name ? x : e.constructor.name;
    }
    return w.checkPropTypes = u, w.resetWarningCache = u.resetWarningCache, w.PropTypes = w, w;
  }, ie;
}
var ce, Ee;
function $e() {
  if (Ee)
    return ce;
  Ee = 1;
  var r = ue();
  function v() {
  }
  function i() {
  }
  return i.resetWarningCache = v, ce = function() {
    function a(_, f, O, C, g, P) {
      if (P !== r) {
        var x = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw x.name = "Invariant Violation", x;
      }
    }
    a.isRequired = a;
    function u() {
      return a;
    }
    var c = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: u,
      element: a,
      elementType: a,
      instanceOf: u,
      node: a,
      objectOf: u,
      oneOf: u,
      oneOfType: u,
      shape: u,
      exact: u,
      checkPropTypes: i,
      resetWarningCache: v
    };
    return c.PropTypes = c, c;
  }, ce;
}
if (process.env.NODE_ENV !== "production") {
  var Ye = _e(), qe = !0;
  se.exports = Me()(Ye.isElement, qe);
} else
  se.exports = $e()();
var ke = se.exports;
const Fe = /* @__PURE__ */ Ce(ke);
export {
  We as A,
  Se as G,
  Le as a,
  ke as p,
  Fe as t
};
