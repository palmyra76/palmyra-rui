import { c as D, g as F } from "../../../chunks/_commonjsHelpers.js";
var O = { exports: {} };
O.exports;
(function(a, c) {
  (function(e, i) {
    var p = {};
    e.PubSub ? (p = e.PubSub, console.warn("PubSub already loaded, using existing version")) : (e.PubSub = p, i(p)), a !== void 0 && a.exports && (c = a.exports = p), c.PubSub = p, a.exports = c = p;
  })(typeof window == "object" && window || D, function(e) {
    var i = {}, p = -1, h = "*";
    function v(r) {
      var t;
      for (t in r)
        if (Object.prototype.hasOwnProperty.call(r, t))
          return !0;
      return !1;
    }
    function j(r) {
      return function() {
        throw r;
      };
    }
    function E(r, t, n) {
      try {
        r(t, n);
      } catch (o) {
        setTimeout(j(o), 0);
      }
    }
    function T(r, t, n) {
      r(t, n);
    }
    function w(r, t, n, o) {
      var s = i[t], u = o ? T : E, f;
      if (Object.prototype.hasOwnProperty.call(i, t))
        for (f in s)
          Object.prototype.hasOwnProperty.call(s, f) && u(s[f], r, n);
    }
    function k(r, t, n) {
      return function() {
        var s = String(r), u = s.lastIndexOf(".");
        for (w(r, r, t, n); u !== -1; )
          s = s.substr(0, u), u = s.lastIndexOf("."), w(r, s, t, n);
        w(r, h, t, n);
      };
    }
    function d(r) {
      var t = String(r), n = !!(Object.prototype.hasOwnProperty.call(i, t) && v(i[t]));
      return n;
    }
    function I(r) {
      for (var t = String(r), n = d(t) || d(h), o = t.lastIndexOf("."); !n && o !== -1; )
        t = t.substr(0, o), o = t.lastIndexOf("."), n = d(t);
      return n;
    }
    function S(r, t, n, o) {
      r = typeof r == "symbol" ? r.toString() : r;
      var s = k(r, t, o), u = I(r);
      return u ? (n === !0 ? s() : setTimeout(s, 0), !0) : !1;
    }
    e.publish = function(r, t) {
      return S(r, t, !1, e.immediateExceptions);
    }, e.publishSync = function(r, t) {
      return S(r, t, !0, e.immediateExceptions);
    }, e.subscribe = function(r, t) {
      if (typeof t != "function")
        return !1;
      r = typeof r == "symbol" ? r.toString() : r, Object.prototype.hasOwnProperty.call(i, r) || (i[r] = {});
      var n = "uid_" + String(++p);
      return i[r][n] = t, n;
    }, e.subscribeAll = function(r) {
      return e.subscribe(h, r);
    }, e.subscribeOnce = function(r, t) {
      var n = e.subscribe(r, function() {
        e.unsubscribe(n), t.apply(this, arguments);
      });
      return e;
    }, e.clearAllSubscriptions = function() {
      i = {};
    }, e.clearSubscriptions = function(t) {
      var n;
      for (n in i)
        Object.prototype.hasOwnProperty.call(i, n) && n.indexOf(t) === 0 && delete i[n];
    }, e.countSubscriptions = function(t) {
      var n, o, s = 0;
      for (n in i)
        if (Object.prototype.hasOwnProperty.call(i, n) && n.indexOf(t) === 0) {
          for (o in i[n])
            s++;
          break;
        }
      return s;
    }, e.getSubscriptions = function(t) {
      var n, o = [];
      for (n in i)
        Object.prototype.hasOwnProperty.call(i, n) && n.indexOf(t) === 0 && o.push(n);
      return o;
    }, e.unsubscribe = function(r) {
      var t = function(A) {
        var x;
        for (x in i)
          if (Object.prototype.hasOwnProperty.call(i, x) && x.indexOf(A) === 0)
            return !0;
        return !1;
      }, n = typeof r == "string" && (Object.prototype.hasOwnProperty.call(i, r) || t(r)), o = !n && typeof r == "string", s = typeof r == "function", u = !1, f, l, y;
      if (n) {
        e.clearSubscriptions(r);
        return;
      }
      for (f in i)
        if (Object.prototype.hasOwnProperty.call(i, f)) {
          if (l = i[f], o && l[r]) {
            delete l[r], u = r;
            break;
          }
          if (s)
            for (y in l)
              Object.prototype.hasOwnProperty.call(l, y) && l[y] === r && (delete l[y], u = !0);
        }
      return u;
    };
  });
})(O, O.exports);
var g = O.exports;
const b = /* @__PURE__ */ F(g);
class B {
  subscribe(c, e) {
    const i = b.subscribe(c, e);
    if (i)
      return i;
    throw new Error("Not able to subscribe to topic " + c);
  }
  publish(c, e) {
    return b.publish(c, e);
  }
  unsubscribe(c) {
    b.unsubscribe(c);
  }
  unsubsribeTopic(c) {
    b.unsubscribe(c);
  }
  reset() {
    b.clearAllSubscriptions();
  }
}
const N = new B();
export {
  N as topic
};
