import { jsxs as In, jsx as bt } from "react/jsx-runtime";
import { c as Ot, n as Pn, g as zn, f as Dn, i as at } from "../../../chunks/color.js";
import { useRef as tt, useEffect as qt } from "react";
const st = function t(n) {
  var e = zn(n);
  function r(i, o) {
    var u = e((i = Ot(i)).r, (o = Ot(o)).r), a = e(i.g, o.g), c = e(i.b, o.b), s = Pn(i.opacity, o.opacity);
    return function(l) {
      return i.r = u(l), i.g = a(l), i.b = c(l), i.opacity = s(l), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Xn(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i)
      r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function Ln(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Vn(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), u;
  for (u = 0; u < r; ++u)
    i[u] = Rt(t[u], n[u]);
  for (; u < e; ++u)
    o[u] = n[u];
  return function(a) {
    for (u = 0; u < r; ++u)
      o[u] = i[u](a);
    return o;
  };
}
function bn(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function S(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function On(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = Rt(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e)
      r[i] = e[i](o);
    return r;
  };
}
var At = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, vt = new RegExp(At.source, "g");
function qn(t) {
  return function() {
    return t;
  };
}
function Yn(t) {
  return function(n) {
    return t(n) + "";
  };
}
function on(t, n) {
  var e = At.lastIndex = vt.lastIndex = 0, r, i, o, u = -1, a = [], c = [];
  for (t = t + "", n = n + ""; (r = At.exec(t)) && (i = vt.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), a[u] ? a[u] += o : a[++u] = o), (r = r[0]) === (i = i[0]) ? a[u] ? a[u] += i : a[++u] = i : (a[++u] = null, c.push({ i: u, x: S(r, i) })), e = vt.lastIndex;
  return e < n.length && (o = n.slice(e), a[u] ? a[u] += o : a[++u] = o), a.length < 2 ? c[0] ? Yn(c[0].x) : qn(n) : (n = c.length, function(s) {
    for (var l = 0, f; l < n; ++l)
      a[(f = c[l]).i] = f.x(s);
    return a.join("");
  });
}
function Rt(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? Dn(n) : (e === "number" ? S : e === "string" ? (r = at(n)) ? (n = r, st) : on : n instanceof at ? st : n instanceof Date ? bn : Ln(n) ? Xn : Array.isArray(n) ? Vn : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? On : S)(t, n);
}
function Bn(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Yt = 180 / Math.PI, kt = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function un(t, n, e, r, i, o) {
  var u, a, c;
  return (u = Math.sqrt(t * t + n * n)) && (t /= u, n /= u), (c = t * e + n * r) && (e -= t * c, r -= n * c), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, c /= a), t * r < n * e && (t = -t, n = -n, c = -c, u = -u), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * Yt,
    skewX: Math.atan(c) * Yt,
    scaleX: u,
    scaleY: a
  };
}
var nt;
function Hn(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? kt : un(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Un(t) {
  return t == null || (nt || (nt = document.createElementNS("http://www.w3.org/2000/svg", "g")), nt.setAttribute("transform", t), !(t = nt.transform.baseVal.consolidate())) ? kt : (t = t.matrix, un(t.a, t.b, t.c, t.d, t.e, t.f));
}
function an(t, n, e, r) {
  function i(s) {
    return s.length ? s.pop() + " " : "";
  }
  function o(s, l, f, h, p, m) {
    if (s !== f || l !== h) {
      var _ = p.push("translate(", null, n, null, e);
      m.push({ i: _ - 4, x: S(s, f) }, { i: _ - 2, x: S(l, h) });
    } else
      (f || h) && p.push("translate(" + f + n + h + e);
  }
  function u(s, l, f, h) {
    s !== l ? (s - l > 180 ? l += 360 : l - s > 180 && (s += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: S(s, l) })) : l && f.push(i(f) + "rotate(" + l + r);
  }
  function a(s, l, f, h) {
    s !== l ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: S(s, l) }) : l && f.push(i(f) + "skewX(" + l + r);
  }
  function c(s, l, f, h, p, m) {
    if (s !== f || l !== h) {
      var _ = p.push(i(p) + "scale(", null, ",", null, ")");
      m.push({ i: _ - 4, x: S(s, f) }, { i: _ - 2, x: S(l, h) });
    } else
      (f !== 1 || h !== 1) && p.push(i(p) + "scale(" + f + "," + h + ")");
  }
  return function(s, l) {
    var f = [], h = [];
    return s = t(s), l = t(l), o(s.translateX, s.translateY, l.translateX, l.translateY, f, h), u(s.rotate, l.rotate, f, h), a(s.skewX, l.skewX, f, h), c(s.scaleX, s.scaleY, l.scaleX, l.scaleY, f, h), s = l = null, function(p) {
      for (var m = -1, _ = h.length, y; ++m < _; )
        f[(y = h[m]).i] = y.x(p);
      return f.join("");
    };
  };
}
var Gn = an(Hn, "px, ", "px)", "deg)"), Kn = an(Un, ", ", ")", ")");
function rt(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Wn(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function sn(t) {
  let n, e, r;
  t.length !== 2 ? (n = rt, e = (a, c) => rt(t(a), c), r = (a, c) => t(a) - c) : (n = t === rt || t === Wn ? t : Zn, e = t, r = t);
  function i(a, c, s = 0, l = a.length) {
    if (s < l) {
      if (n(c, c) !== 0)
        return l;
      do {
        const f = s + l >>> 1;
        e(a[f], c) < 0 ? s = f + 1 : l = f;
      } while (s < l);
    }
    return s;
  }
  function o(a, c, s = 0, l = a.length) {
    if (s < l) {
      if (n(c, c) !== 0)
        return l;
      do {
        const f = s + l >>> 1;
        e(a[f], c) <= 0 ? s = f + 1 : l = f;
      } while (s < l);
    }
    return s;
  }
  function u(a, c, s = 0, l = a.length) {
    const f = i(a, c, s, l - 1);
    return f > s && r(a[f - 1], c) > -r(a[f], c) ? f - 1 : f;
  }
  return { left: i, center: u, right: o };
}
function Zn() {
  return 0;
}
function Jn(t) {
  return t === null ? NaN : +t;
}
const Qn = sn(rt), jn = Qn.right;
sn(Jn).center;
const te = jn, ne = Math.sqrt(50), ee = Math.sqrt(10), re = Math.sqrt(2);
function ct(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), u = o >= ne ? 10 : o >= ee ? 5 : o >= re ? 2 : 1;
  let a, c, s;
  return i < 0 ? (s = Math.pow(10, -i) / u, a = Math.round(t * s), c = Math.round(n * s), a / s < t && ++a, c / s > n && --c, s = -s) : (s = Math.pow(10, i) * u, a = Math.round(t / s), c = Math.round(n / s), a * s < t && ++a, c * s > n && --c), c < a && 0.5 <= e && e < 2 ? ct(t, n, e * 2) : [a, c, s];
}
function ie(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0))
    return [];
  if (t === n)
    return [t];
  const r = n < t, [i, o, u] = r ? ct(n, t, e) : ct(t, n, e);
  if (!(o >= i))
    return [];
  const a = o - i + 1, c = new Array(a);
  if (r)
    if (u < 0)
      for (let s = 0; s < a; ++s)
        c[s] = (o - s) / -u;
    else
      for (let s = 0; s < a; ++s)
        c[s] = (o - s) * u;
  else if (u < 0)
    for (let s = 0; s < a; ++s)
      c[s] = (i + s) / -u;
  else
    for (let s = 0; s < a; ++s)
      c[s] = (i + s) * u;
  return c;
}
function Mt(t, n, e) {
  return n = +n, t = +t, e = +e, ct(t, n, e)[2];
}
function oe(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Mt(n, t, e) : Mt(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function ue(t) {
  return t;
}
var wt = 1, xt = 2, Nt = 3, H = 4, Bt = 1e-6;
function ae(t) {
  return "translate(" + t + ",0)";
}
function se(t) {
  return "translate(0," + t + ")";
}
function ce(t) {
  return (n) => +t(n);
}
function le(t, n) {
  return n = Math.max(0, t.bandwidth() - n * 2) / 2, t.round() && (n = Math.round(n)), (e) => +t(e) + n;
}
function fe() {
  return !this.__axis;
}
function cn(t, n) {
  var e = [], r = null, i = null, o = 6, u = 6, a = 3, c = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, s = t === wt || t === H ? -1 : 1, l = t === H || t === xt ? "x" : "y", f = t === wt || t === Nt ? ae : se;
  function h(p) {
    var m = r ?? (n.ticks ? n.ticks.apply(n, e) : n.domain()), _ = i ?? (n.tickFormat ? n.tickFormat.apply(n, e) : ue), y = Math.max(o, 0) + a, A = n.range(), k = +A[0] + c, v = +A[A.length - 1] + c, C = (n.bandwidth ? le : ce)(n.copy(), c), g = p.selection ? p.selection() : p, P = g.selectAll(".domain").data([null]), N = g.selectAll(".tick").data(m, n).order(), X = N.exit(), L = N.enter().append("g").attr("class", "tick"), z = N.select("line"), d = N.select("text");
    P = P.merge(P.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), N = N.merge(L), z = z.merge(L.append("line").attr("stroke", "currentColor").attr(l + "2", s * o)), d = d.merge(L.append("text").attr("fill", "currentColor").attr(l, s * y).attr("dy", t === wt ? "0em" : t === Nt ? "0.71em" : "0.32em")), p !== g && (P = P.transition(p), N = N.transition(p), z = z.transition(p), d = d.transition(p), X = X.transition(p).attr("opacity", Bt).attr("transform", function(x) {
      return isFinite(x = C(x)) ? f(x + c) : this.getAttribute("transform");
    }), L.attr("opacity", Bt).attr("transform", function(x) {
      var w = this.parentNode.__axis;
      return f((w && isFinite(w = w(x)) ? w : C(x)) + c);
    })), X.remove(), P.attr("d", t === H || t === xt ? u ? "M" + s * u + "," + k + "H" + c + "V" + v + "H" + s * u : "M" + c + "," + k + "V" + v : u ? "M" + k + "," + s * u + "V" + c + "H" + v + "V" + s * u : "M" + k + "," + c + "H" + v), N.attr("opacity", 1).attr("transform", function(x) {
      return f(C(x) + c);
    }), z.attr(l + "2", s * o), d.attr(l, s * y).text(_), g.filter(fe).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === xt ? "start" : t === H ? "end" : "middle"), g.each(function() {
      this.__axis = C;
    });
  }
  return h.scale = function(p) {
    return arguments.length ? (n = p, h) : n;
  }, h.ticks = function() {
    return e = Array.from(arguments), h;
  }, h.tickArguments = function(p) {
    return arguments.length ? (e = p == null ? [] : Array.from(p), h) : e.slice();
  }, h.tickValues = function(p) {
    return arguments.length ? (r = p == null ? null : Array.from(p), h) : r && r.slice();
  }, h.tickFormat = function(p) {
    return arguments.length ? (i = p, h) : i;
  }, h.tickSize = function(p) {
    return arguments.length ? (o = u = +p, h) : o;
  }, h.tickSizeInner = function(p) {
    return arguments.length ? (o = +p, h) : o;
  }, h.tickSizeOuter = function(p) {
    return arguments.length ? (u = +p, h) : u;
  }, h.tickPadding = function(p) {
    return arguments.length ? (a = +p, h) : a;
  }, h.offset = function(p) {
    return arguments.length ? (c = +p, h) : c;
  }, h;
}
function he(t) {
  return cn(Nt, t);
}
function pe(t) {
  return cn(H, t);
}
var de = { value: () => {
} };
function ln() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new it(e);
}
function it(t) {
  this._ = t;
}
function me(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
it.prototype = ln.prototype = {
  constructor: it,
  on: function(t, n) {
    var e = this._, r = me(t + "", e), i, o = -1, u = r.length;
    if (arguments.length < 2) {
      for (; ++o < u; )
        if ((i = (t = r[o]).type) && (i = _e(e[i], t.name)))
          return i;
      return;
    }
    if (n != null && typeof n != "function")
      throw new Error("invalid callback: " + n);
    for (; ++o < u; )
      if (i = (t = r[o]).type)
        e[i] = Ht(e[i], t.name, n);
      else if (n == null)
        for (i in e)
          e[i] = Ht(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n)
      t[e] = n[e].slice();
    return new it(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0)
      for (var e = new Array(i), r = 0, i, o; r < i; ++r)
        e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r)
      o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
      r[i].value.apply(n, e);
  }
};
function _e(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function Ht(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = de, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var St = "http://www.w3.org/1999/xhtml";
const Ut = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: St,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function _t(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Ut.hasOwnProperty(n) ? { space: Ut[n], local: t } : t;
}
function ye(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === St && n.documentElement.namespaceURI === St ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function ge(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function fn(t) {
  var n = _t(t);
  return (n.local ? ge : ye)(n);
}
function ve() {
}
function It(t) {
  return t == null ? ve : function() {
    return this.querySelector(t);
  };
}
function we(t) {
  typeof t != "function" && (t = It(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], u = o.length, a = r[i] = new Array(u), c, s, l = 0; l < u; ++l)
      (c = o[l]) && (s = t.call(c, c.__data__, l, o)) && ("__data__" in c && (s.__data__ = c.__data__), a[l] = s);
  return new M(r, this._parents);
}
function xe(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Ae() {
  return [];
}
function hn(t) {
  return t == null ? Ae : function() {
    return this.querySelectorAll(t);
  };
}
function ke(t) {
  return function() {
    return xe(t.apply(this, arguments));
  };
}
function Me(t) {
  typeof t == "function" ? t = ke(t) : t = hn(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var u = n[o], a = u.length, c, s = 0; s < a; ++s)
      (c = u[s]) && (r.push(t.call(c, c.__data__, s, u)), i.push(c));
  return new M(r, i);
}
function pn(t) {
  return function() {
    return this.matches(t);
  };
}
function dn(t) {
  return function(n) {
    return n.matches(t);
  };
}
var Ne = Array.prototype.find;
function Se(t) {
  return function() {
    return Ne.call(this.children, t);
  };
}
function Ee() {
  return this.firstElementChild;
}
function Ce(t) {
  return this.select(t == null ? Ee : Se(typeof t == "function" ? t : dn(t)));
}
var Te = Array.prototype.filter;
function Fe() {
  return Array.from(this.children);
}
function $e(t) {
  return function() {
    return Te.call(this.children, t);
  };
}
function Re(t) {
  return this.selectAll(t == null ? Fe : $e(typeof t == "function" ? t : dn(t)));
}
function Ie(t) {
  typeof t != "function" && (t = pn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], u = o.length, a = r[i] = [], c, s = 0; s < u; ++s)
      (c = o[s]) && t.call(c, c.__data__, s, o) && a.push(c);
  return new M(r, this._parents);
}
function mn(t) {
  return new Array(t.length);
}
function Pe() {
  return new M(this._enter || this._groups.map(mn), this._parents);
}
function lt(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
lt.prototype = {
  constructor: lt,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function ze(t) {
  return function() {
    return t;
  };
}
function De(t, n, e, r, i, o) {
  for (var u = 0, a, c = n.length, s = o.length; u < s; ++u)
    (a = n[u]) ? (a.__data__ = o[u], r[u] = a) : e[u] = new lt(t, o[u]);
  for (; u < c; ++u)
    (a = n[u]) && (i[u] = a);
}
function Xe(t, n, e, r, i, o, u) {
  var a, c, s = /* @__PURE__ */ new Map(), l = n.length, f = o.length, h = new Array(l), p;
  for (a = 0; a < l; ++a)
    (c = n[a]) && (h[a] = p = u.call(c, c.__data__, a, n) + "", s.has(p) ? i[a] = c : s.set(p, c));
  for (a = 0; a < f; ++a)
    p = u.call(t, o[a], a, o) + "", (c = s.get(p)) ? (r[a] = c, c.__data__ = o[a], s.delete(p)) : e[a] = new lt(t, o[a]);
  for (a = 0; a < l; ++a)
    (c = n[a]) && s.get(h[a]) === c && (i[a] = c);
}
function Le(t) {
  return t.__data__;
}
function Ve(t, n) {
  if (!arguments.length)
    return Array.from(this, Le);
  var e = n ? Xe : De, r = this._parents, i = this._groups;
  typeof t != "function" && (t = ze(t));
  for (var o = i.length, u = new Array(o), a = new Array(o), c = new Array(o), s = 0; s < o; ++s) {
    var l = r[s], f = i[s], h = f.length, p = be(t.call(l, l && l.__data__, s, r)), m = p.length, _ = a[s] = new Array(m), y = u[s] = new Array(m), A = c[s] = new Array(h);
    e(l, f, _, y, A, p, n);
    for (var k = 0, v = 0, C, g; k < m; ++k)
      if (C = _[k]) {
        for (k >= v && (v = k + 1); !(g = y[v]) && ++v < m; )
          ;
        C._next = g || null;
      }
  }
  return u = new M(u, r), u._enter = a, u._exit = c, u;
}
function be(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Oe() {
  return new M(this._exit || this._groups.map(mn), this._parents);
}
function qe(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function Ye(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, u = Math.min(i, o), a = new Array(i), c = 0; c < u; ++c)
    for (var s = e[c], l = r[c], f = s.length, h = a[c] = new Array(f), p, m = 0; m < f; ++m)
      (p = s[m] || l[m]) && (h[m] = p);
  for (; c < i; ++c)
    a[c] = e[c];
  return new M(a, this._parents);
}
function Be() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], u; --i >= 0; )
      (u = r[i]) && (o && u.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(u, o), o = u);
  return this;
}
function He(t) {
  t || (t = Ue);
  function n(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var u = e[o], a = u.length, c = i[o] = new Array(a), s, l = 0; l < a; ++l)
      (s = u[l]) && (c[l] = s);
    c.sort(n);
  }
  return new M(i, this._parents).order();
}
function Ue(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Ge() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Ke() {
  return Array.from(this);
}
function We() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var u = r[i];
      if (u)
        return u;
    }
  return null;
}
function Ze() {
  let t = 0;
  for (const n of this)
    ++t;
  return t;
}
function Je() {
  return !this.node();
}
function Qe(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, u = i.length, a; o < u; ++o)
      (a = i[o]) && t.call(a, a.__data__, o, i);
  return this;
}
function je(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function tr(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function nr(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function er(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function rr(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function ir(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function or(t, n) {
  var e = _t(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? tr : je : typeof n == "function" ? e.local ? ir : rr : e.local ? er : nr)(e, n));
}
function _n(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function ur(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ar(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function sr(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function cr(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? ur : typeof n == "function" ? sr : ar)(t, n, e ?? "")) : O(this.node(), t);
}
function O(t, n) {
  return t.style.getPropertyValue(n) || _n(t).getComputedStyle(t, null).getPropertyValue(n);
}
function lr(t) {
  return function() {
    delete this[t];
  };
}
function fr(t, n) {
  return function() {
    this[t] = n;
  };
}
function hr(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function pr(t, n) {
  return arguments.length > 1 ? this.each((n == null ? lr : typeof n == "function" ? hr : fr)(t, n)) : this.node()[t];
}
function yn(t) {
  return t.trim().split(/^|\s+/);
}
function Pt(t) {
  return t.classList || new gn(t);
}
function gn(t) {
  this._node = t, this._names = yn(t.getAttribute("class") || "");
}
gn.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function vn(t, n) {
  for (var e = Pt(t), r = -1, i = n.length; ++r < i; )
    e.add(n[r]);
}
function wn(t, n) {
  for (var e = Pt(t), r = -1, i = n.length; ++r < i; )
    e.remove(n[r]);
}
function dr(t) {
  return function() {
    vn(this, t);
  };
}
function mr(t) {
  return function() {
    wn(this, t);
  };
}
function _r(t, n) {
  return function() {
    (n.apply(this, arguments) ? vn : wn)(this, t);
  };
}
function yr(t, n) {
  var e = yn(t + "");
  if (arguments.length < 2) {
    for (var r = Pt(this.node()), i = -1, o = e.length; ++i < o; )
      if (!r.contains(e[i]))
        return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? _r : n ? dr : mr)(e, n));
}
function gr() {
  this.textContent = "";
}
function vr(t) {
  return function() {
    this.textContent = t;
  };
}
function wr(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function xr(t) {
  return arguments.length ? this.each(t == null ? gr : (typeof t == "function" ? wr : vr)(t)) : this.node().textContent;
}
function Ar() {
  this.innerHTML = "";
}
function kr(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Mr(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function Nr(t) {
  return arguments.length ? this.each(t == null ? Ar : (typeof t == "function" ? Mr : kr)(t)) : this.node().innerHTML;
}
function Sr() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Er() {
  return this.each(Sr);
}
function Cr() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Tr() {
  return this.each(Cr);
}
function Fr(t) {
  var n = typeof t == "function" ? t : fn(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function $r() {
  return null;
}
function Rr(t, n) {
  var e = typeof t == "function" ? t : fn(t), r = n == null ? $r : typeof n == "function" ? n : It(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Ir() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Pr() {
  return this.each(Ir);
}
function zr() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Dr() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Xr(t) {
  return this.select(t ? Dr : zr);
}
function Lr(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Vr(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function br(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Or(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function qr(t, n, e) {
  return function() {
    var r = this.__on, i, o = Vr(n);
    if (r) {
      for (var u = 0, a = r.length; u < a; ++u)
        if ((i = r[u]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function Yr(t, n, e) {
  var r = br(t + ""), i, o = r.length, u;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var c = 0, s = a.length, l; c < s; ++c)
        for (i = 0, l = a[c]; i < o; ++i)
          if ((u = r[i]).type === l.type && u.name === l.name)
            return l.value;
    }
    return;
  }
  for (a = n ? qr : Or, i = 0; i < o; ++i)
    this.each(a(r[i], n, e));
  return this;
}
function xn(t, n, e) {
  var r = _n(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Br(t, n) {
  return function() {
    return xn(this, t, n);
  };
}
function Hr(t, n) {
  return function() {
    return xn(this, t, n.apply(this, arguments));
  };
}
function Ur(t, n) {
  return this.each((typeof n == "function" ? Hr : Br)(t, n));
}
function* Gr() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, u; i < o; ++i)
      (u = r[i]) && (yield u);
}
var An = [null];
function M(t, n) {
  this._groups = t, this._parents = n;
}
function Z() {
  return new M([[document.documentElement]], An);
}
function Kr() {
  return this;
}
M.prototype = Z.prototype = {
  constructor: M,
  select: we,
  selectAll: Me,
  selectChild: Ce,
  selectChildren: Re,
  filter: Ie,
  data: Ve,
  enter: Pe,
  exit: Oe,
  join: qe,
  merge: Ye,
  selection: Kr,
  order: Be,
  sort: He,
  call: Ge,
  nodes: Ke,
  node: We,
  size: Ze,
  empty: Je,
  each: Qe,
  attr: or,
  style: cr,
  property: pr,
  classed: yr,
  text: xr,
  html: Nr,
  raise: Er,
  lower: Tr,
  append: Fr,
  insert: Rr,
  remove: Pr,
  clone: Xr,
  datum: Lr,
  on: Yr,
  dispatch: Ur,
  [Symbol.iterator]: Gr
};
function Gt(t) {
  return typeof t == "string" ? new M([[document.querySelector(t)]], [document.documentElement]) : new M([[t]], An);
}
var q = 0, U = 0, B = 0, kn = 1e3, ft, G, ht = 0, D = 0, yt = 0, W = typeof performance == "object" && performance.now ? performance : Date, Mn = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function zt() {
  return D || (Mn(Wr), D = W.now() + yt);
}
function Wr() {
  D = 0;
}
function pt() {
  this._call = this._time = this._next = null;
}
pt.prototype = Nn.prototype = {
  constructor: pt,
  restart: function(t, n, e) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    e = (e == null ? zt() : +e) + (n == null ? 0 : +n), !this._next && G !== this && (G ? G._next = this : ft = this, G = this), this._call = t, this._time = e, Et();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Et());
  }
};
function Nn(t, n, e) {
  var r = new pt();
  return r.restart(t, n, e), r;
}
function Zr() {
  zt(), ++q;
  for (var t = ft, n; t; )
    (n = D - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --q;
}
function Kt() {
  D = (ht = W.now()) + yt, q = U = 0;
  try {
    Zr();
  } finally {
    q = 0, Qr(), D = 0;
  }
}
function Jr() {
  var t = W.now(), n = t - ht;
  n > kn && (yt -= n, ht = t);
}
function Qr() {
  for (var t, n = ft, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : ft = e);
  G = t, Et(r);
}
function Et(t) {
  if (!q) {
    U && (U = clearTimeout(U));
    var n = t - D;
    n > 24 ? (t < 1 / 0 && (U = setTimeout(Kt, t - W.now() - yt)), B && (B = clearInterval(B))) : (B || (ht = W.now(), B = setInterval(Jr, kn)), q = 1, Mn(Kt));
  }
}
function Wt(t, n, e) {
  var r = new pt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
var jr = ln("start", "end", "cancel", "interrupt"), ti = [], Sn = 0, Zt = 1, Ct = 2, ot = 3, Jt = 4, Tt = 5, ut = 6;
function gt(t, n, e, r, i, o) {
  var u = t.__transition;
  if (!u)
    t.__transition = {};
  else if (e in u)
    return;
  ni(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: jr,
    tween: ti,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Sn
  });
}
function Dt(t, n) {
  var e = E(t, n);
  if (e.state > Sn)
    throw new Error("too late; already scheduled");
  return e;
}
function T(t, n) {
  var e = E(t, n);
  if (e.state > ot)
    throw new Error("too late; already running");
  return e;
}
function E(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n]))
    throw new Error("transition not found");
  return e;
}
function ni(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Nn(o, 0, e.time);
  function o(s) {
    e.state = Zt, e.timer.restart(u, e.delay, e.time), e.delay <= s && u(s - e.delay);
  }
  function u(s) {
    var l, f, h, p;
    if (e.state !== Zt)
      return c();
    for (l in r)
      if (p = r[l], p.name === e.name) {
        if (p.state === ot)
          return Wt(u);
        p.state === Jt ? (p.state = ut, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[l]) : +l < n && (p.state = ut, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[l]);
      }
    if (Wt(function() {
      e.state === ot && (e.state = Jt, e.timer.restart(a, e.delay, e.time), a(s));
    }), e.state = Ct, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Ct) {
      for (e.state = ot, i = new Array(h = e.tween.length), l = 0, f = -1; l < h; ++l)
        (p = e.tween[l].value.call(t, t.__data__, e.index, e.group)) && (i[++f] = p);
      i.length = f + 1;
    }
  }
  function a(s) {
    for (var l = s < e.duration ? e.ease.call(null, s / e.duration) : (e.timer.restart(c), e.state = Tt, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, l);
    e.state === Tt && (e.on.call("end", t, t.__data__, e.index, e.group), c());
  }
  function c() {
    e.state = ut, e.timer.stop(), delete r[n];
    for (var s in r)
      return;
    delete t.__transition;
  }
}
function ei(t, n) {
  var e = t.__transition, r, i, o = !0, u;
  if (e) {
    n = n == null ? null : n + "";
    for (u in e) {
      if ((r = e[u]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Ct && r.state < Tt, r.state = ut, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[u];
    }
    o && delete t.__transition;
  }
}
function ri(t) {
  return this.each(function() {
    ei(this, t);
  });
}
function ii(t, n) {
  var e, r;
  return function() {
    var i = T(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var u = 0, a = r.length; u < a; ++u)
        if (r[u].name === n) {
          r = r.slice(), r.splice(u, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function oi(t, n, e) {
  var r, i;
  if (typeof e != "function")
    throw new Error();
  return function() {
    var o = T(this, t), u = o.tween;
    if (u !== r) {
      i = (r = u).slice();
      for (var a = { name: n, value: e }, c = 0, s = i.length; c < s; ++c)
        if (i[c].name === n) {
          i[c] = a;
          break;
        }
      c === s && i.push(a);
    }
    o.tween = i;
  };
}
function ui(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = E(this.node(), e).tween, i = 0, o = r.length, u; i < o; ++i)
      if ((u = r[i]).name === t)
        return u.value;
    return null;
  }
  return this.each((n == null ? ii : oi)(e, t, n));
}
function Xt(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = T(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return E(i, r).value[n];
  };
}
function En(t, n) {
  var e;
  return (typeof n == "number" ? S : n instanceof at ? st : (e = at(n)) ? (n = e, st) : on)(t, n);
}
function ai(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function si(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ci(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var u = this.getAttribute(t);
    return u === i ? null : u === r ? o : o = n(r = u, e);
  };
}
function li(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var u = this.getAttributeNS(t.space, t.local);
    return u === i ? null : u === r ? o : o = n(r = u, e);
  };
}
function fi(t, n, e) {
  var r, i, o;
  return function() {
    var u, a = e(this), c;
    return a == null ? void this.removeAttribute(t) : (u = this.getAttribute(t), c = a + "", u === c ? null : u === r && c === i ? o : (i = c, o = n(r = u, a)));
  };
}
function hi(t, n, e) {
  var r, i, o;
  return function() {
    var u, a = e(this), c;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (u = this.getAttributeNS(t.space, t.local), c = a + "", u === c ? null : u === r && c === i ? o : (i = c, o = n(r = u, a)));
  };
}
function pi(t, n) {
  var e = _t(t), r = e === "transform" ? Kn : En;
  return this.attrTween(t, typeof n == "function" ? (e.local ? hi : fi)(e, r, Xt(this, "attr." + t, n)) : n == null ? (e.local ? si : ai)(e) : (e.local ? li : ci)(e, r, n));
}
function di(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function mi(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function _i(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && mi(t, o)), e;
  }
  return i._value = n, i;
}
function yi(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && di(t, o)), e;
  }
  return i._value = n, i;
}
function gi(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2)
    return (e = this.tween(e)) && e._value;
  if (n == null)
    return this.tween(e, null);
  if (typeof n != "function")
    throw new Error();
  var r = _t(t);
  return this.tween(e, (r.local ? _i : yi)(r, n));
}
function vi(t, n) {
  return function() {
    Dt(this, t).delay = +n.apply(this, arguments);
  };
}
function wi(t, n) {
  return n = +n, function() {
    Dt(this, t).delay = n;
  };
}
function xi(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? vi : wi)(n, t)) : E(this.node(), n).delay;
}
function Ai(t, n) {
  return function() {
    T(this, t).duration = +n.apply(this, arguments);
  };
}
function ki(t, n) {
  return n = +n, function() {
    T(this, t).duration = n;
  };
}
function Mi(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ai : ki)(n, t)) : E(this.node(), n).duration;
}
function Ni(t, n) {
  if (typeof n != "function")
    throw new Error();
  return function() {
    T(this, t).ease = n;
  };
}
function Si(t) {
  var n = this._id;
  return arguments.length ? this.each(Ni(n, t)) : E(this.node(), n).ease;
}
function Ei(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function")
      throw new Error();
    T(this, t).ease = e;
  };
}
function Ci(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(Ei(this._id, t));
}
function Ti(t) {
  typeof t != "function" && (t = pn(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], u = o.length, a = r[i] = [], c, s = 0; s < u; ++s)
      (c = o[s]) && t.call(c, c.__data__, s, o) && a.push(c);
  return new I(r, this._parents, this._name, this._id);
}
function Fi(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a)
    for (var c = n[a], s = e[a], l = c.length, f = u[a] = new Array(l), h, p = 0; p < l; ++p)
      (h = c[p] || s[p]) && (f[p] = h);
  for (; a < r; ++a)
    u[a] = n[a];
  return new I(u, this._parents, this._name, this._id);
}
function $i(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Ri(t, n, e) {
  var r, i, o = $i(n) ? Dt : T;
  return function() {
    var u = o(this, t), a = u.on;
    a !== r && (i = (r = a).copy()).on(n, e), u.on = i;
  };
}
function Ii(t, n) {
  var e = this._id;
  return arguments.length < 2 ? E(this.node(), e).on.on(t) : this.each(Ri(e, t, n));
}
function Pi(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition)
      if (+e !== t)
        return;
    n && n.removeChild(this);
  };
}
function zi() {
  return this.on("end.remove", Pi(this._id));
}
function Di(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = It(t));
  for (var r = this._groups, i = r.length, o = new Array(i), u = 0; u < i; ++u)
    for (var a = r[u], c = a.length, s = o[u] = new Array(c), l, f, h = 0; h < c; ++h)
      (l = a[h]) && (f = t.call(l, l.__data__, h, a)) && ("__data__" in l && (f.__data__ = l.__data__), s[h] = f, gt(s[h], n, e, h, s, E(l, e)));
  return new I(o, this._parents, n, e);
}
function Xi(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = hn(t));
  for (var r = this._groups, i = r.length, o = [], u = [], a = 0; a < i; ++a)
    for (var c = r[a], s = c.length, l, f = 0; f < s; ++f)
      if (l = c[f]) {
        for (var h = t.call(l, l.__data__, f, c), p, m = E(l, e), _ = 0, y = h.length; _ < y; ++_)
          (p = h[_]) && gt(p, n, e, _, h, m);
        o.push(h), u.push(l);
      }
  return new I(o, u, n, e);
}
var Li = Z.prototype.constructor;
function Vi() {
  return new Li(this._groups, this._parents);
}
function bi(t, n) {
  var e, r, i;
  return function() {
    var o = O(this, t), u = (this.style.removeProperty(t), O(this, t));
    return o === u ? null : o === e && u === r ? i : i = n(e = o, r = u);
  };
}
function Cn(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Oi(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var u = O(this, t);
    return u === i ? null : u === r ? o : o = n(r = u, e);
  };
}
function qi(t, n, e) {
  var r, i, o;
  return function() {
    var u = O(this, t), a = e(this), c = a + "";
    return a == null && (c = a = (this.style.removeProperty(t), O(this, t))), u === c ? null : u === r && c === i ? o : (i = c, o = n(r = u, a));
  };
}
function Yi(t, n) {
  var e, r, i, o = "style." + n, u = "end." + o, a;
  return function() {
    var c = T(this, t), s = c.on, l = c.value[o] == null ? a || (a = Cn(n)) : void 0;
    (s !== e || i !== l) && (r = (e = s).copy()).on(u, i = l), c.on = r;
  };
}
function Bi(t, n, e) {
  var r = (t += "") == "transform" ? Gn : En;
  return n == null ? this.styleTween(t, bi(t, r)).on("end.style." + t, Cn(t)) : typeof n == "function" ? this.styleTween(t, qi(t, r, Xt(this, "style." + t, n))).each(Yi(this._id, t)) : this.styleTween(t, Oi(t, r, n), e).on("end.style." + t, null);
}
function Hi(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Ui(t, n, e) {
  var r, i;
  function o() {
    var u = n.apply(this, arguments);
    return u !== i && (r = (i = u) && Hi(t, u, e)), r;
  }
  return o._value = n, o;
}
function Gi(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (n == null)
    return this.tween(r, null);
  if (typeof n != "function")
    throw new Error();
  return this.tween(r, Ui(t, n, e ?? ""));
}
function Ki(t) {
  return function() {
    this.textContent = t;
  };
}
function Wi(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Zi(t) {
  return this.tween("text", typeof t == "function" ? Wi(Xt(this, "text", t)) : Ki(t == null ? "" : t + ""));
}
function Ji(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function Qi(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Ji(i)), n;
  }
  return r._value = t, r;
}
function ji(t) {
  var n = "text";
  if (arguments.length < 1)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(n, Qi(t));
}
function to() {
  for (var t = this._name, n = this._id, e = Tn(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var u = r[o], a = u.length, c, s = 0; s < a; ++s)
      if (c = u[s]) {
        var l = E(c, n);
        gt(c, t, e, s, u, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new I(r, this._parents, t, e);
}
function no() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, u) {
    var a = { value: u }, c = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var s = T(this, r), l = s.on;
      l !== t && (n = (t = l).copy(), n._.cancel.push(a), n._.interrupt.push(a), n._.end.push(c)), s.on = n;
    }), i === 0 && o();
  });
}
var eo = 0;
function I(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Tn() {
  return ++eo;
}
var $ = Z.prototype;
I.prototype = {
  constructor: I,
  select: Di,
  selectAll: Xi,
  selectChild: $.selectChild,
  selectChildren: $.selectChildren,
  filter: Ti,
  merge: Fi,
  selection: Vi,
  transition: to,
  call: $.call,
  nodes: $.nodes,
  node: $.node,
  size: $.size,
  empty: $.empty,
  each: $.each,
  on: Ii,
  attr: pi,
  attrTween: gi,
  style: Bi,
  styleTween: Gi,
  text: Zi,
  textTween: ji,
  remove: zi,
  tween: ui,
  delay: xi,
  duration: Mi,
  ease: Si,
  easeVarying: Ci,
  end: no,
  [Symbol.iterator]: $[Symbol.iterator]
};
function ro(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var io = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: ro
};
function oo(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function uo(t) {
  var n, e;
  t instanceof I ? (n = t._id, t = t._name) : (n = Tn(), (e = io).time = zt(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var u = r[o], a = u.length, c, s = 0; s < a; ++s)
      (c = u[s]) && gt(c, t, n, s, u, e || oo(c, n));
  return new I(r, this._parents, t, n);
}
Z.prototype.interrupt = ri;
Z.prototype.transition = uo;
function ao(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function dt(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Y(t) {
  return t = dt(Math.abs(t)), t ? t[1] : NaN;
}
function so(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], u = 0, a = t[0], c = 0; i > 0 && a > 0 && (c + a + 1 > r && (a = Math.max(1, r - c)), o.push(e.substring(i -= a, i + a)), !((c += a + 1) > r)); )
      a = t[u = (u + 1) % t.length];
    return o.reverse().join(n);
  };
}
function co(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var lo = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function mt(t) {
  if (!(n = lo.exec(t)))
    throw new Error("invalid format: " + t);
  var n;
  return new Lt({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
mt.prototype = Lt.prototype;
function Lt(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Lt.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function fo(t) {
  t:
    for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
      switch (t[e]) {
        case ".":
          r = i = e;
          break;
        case "0":
          r === 0 && (r = e), i = e;
          break;
        default:
          if (!+t[e])
            break t;
          r > 0 && (r = 0);
          break;
      }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Fn;
function ho(t, n) {
  var e = dt(t, n);
  if (!e)
    return t + "";
  var r = e[0], i = e[1], o = i - (Fn = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, u = r.length;
  return o === u ? r : o > u ? r + new Array(o - u + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + dt(t, Math.max(0, n + o - 1))[0];
}
function Qt(t, n) {
  var e = dt(t, n);
  if (!e)
    return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const jt = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: ao,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => Qt(t * 100, n),
  r: Qt,
  s: ho,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function tn(t) {
  return t;
}
var nn = Array.prototype.map, en = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function po(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? tn : so(nn.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? tn : co(nn.call(t.numerals, String)), u = t.percent === void 0 ? "%" : t.percent + "", a = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function s(f) {
    f = mt(f);
    var h = f.fill, p = f.align, m = f.sign, _ = f.symbol, y = f.zero, A = f.width, k = f.comma, v = f.precision, C = f.trim, g = f.type;
    g === "n" ? (k = !0, g = "g") : jt[g] || (v === void 0 && (v = 12), C = !0, g = "g"), (y || h === "0" && p === "=") && (y = !0, h = "0", p = "=");
    var P = _ === "$" ? e : _ === "#" && /[boxX]/.test(g) ? "0" + g.toLowerCase() : "", N = _ === "$" ? r : /[%p]/.test(g) ? u : "", X = jt[g], L = /[defgprs%]/.test(g);
    v = v === void 0 ? 6 : /[gprs]/.test(g) ? Math.max(1, Math.min(21, v)) : Math.max(0, Math.min(20, v));
    function z(d) {
      var x = P, w = N, V, Vt, J;
      if (g === "c")
        w = X(d) + w, d = "";
      else {
        d = +d;
        var Q = d < 0 || 1 / d < 0;
        if (d = isNaN(d) ? c : X(Math.abs(d), v), C && (d = fo(d)), Q && +d == 0 && m !== "+" && (Q = !1), x = (Q ? m === "(" ? m : a : m === "-" || m === "(" ? "" : m) + x, w = (g === "s" ? en[8 + Fn / 3] : "") + w + (Q && m === "(" ? ")" : ""), L) {
          for (V = -1, Vt = d.length; ++V < Vt; )
            if (J = d.charCodeAt(V), 48 > J || J > 57) {
              w = (J === 46 ? i + d.slice(V + 1) : d.slice(V)) + w, d = d.slice(0, V);
              break;
            }
        }
      }
      k && !y && (d = n(d, 1 / 0));
      var j = x.length + d.length + w.length, F = j < A ? new Array(A - j + 1).join(h) : "";
      switch (k && y && (d = n(F + d, F.length ? A - w.length : 1 / 0), F = ""), p) {
        case "<":
          d = x + d + w + F;
          break;
        case "=":
          d = x + F + d + w;
          break;
        case "^":
          d = F.slice(0, j = F.length >> 1) + x + d + w + F.slice(j);
          break;
        default:
          d = F + x + d + w;
          break;
      }
      return o(d);
    }
    return z.toString = function() {
      return f + "";
    }, z;
  }
  function l(f, h) {
    var p = s((f = mt(f), f.type = "f", f)), m = Math.max(-8, Math.min(8, Math.floor(Y(h) / 3))) * 3, _ = Math.pow(10, -m), y = en[8 + m / 3];
    return function(A) {
      return p(_ * A) + y;
    };
  }
  return {
    format: s,
    formatPrefix: l
  };
}
var et, $n, Rn;
mo({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function mo(t) {
  return et = po(t), $n = et.format, Rn = et.formatPrefix, et;
}
function _o(t) {
  return Math.max(0, -Y(Math.abs(t)));
}
function yo(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Y(n) / 3))) * 3 - Y(Math.abs(t)));
}
function go(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Y(n) - Y(t)) + 1;
}
function vo(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function wo(t) {
  return function() {
    return t;
  };
}
function xo(t) {
  return +t;
}
var rn = [0, 1];
function b(t) {
  return t;
}
function Ft(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : wo(isNaN(n) ? NaN : 0.5);
}
function Ao(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function ko(t, n, e) {
  var r = t[0], i = t[1], o = n[0], u = n[1];
  return i < r ? (r = Ft(i, r), o = e(u, o)) : (r = Ft(r, i), o = e(o, u)), function(a) {
    return o(r(a));
  };
}
function Mo(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), u = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++u < r; )
    i[u] = Ft(t[u], t[u + 1]), o[u] = e(n[u], n[u + 1]);
  return function(a) {
    var c = te(t, a, 1, r) - 1;
    return o[c](i[c](a));
  };
}
function No(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function So() {
  var t = rn, n = rn, e = Rt, r, i, o, u = b, a, c, s;
  function l() {
    var h = Math.min(t.length, n.length);
    return u !== b && (u = Ao(t[0], t[h - 1])), a = h > 2 ? Mo : ko, c = s = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? o : (c || (c = a(t.map(r), n, e)))(r(u(h)));
  }
  return f.invert = function(h) {
    return u(i((s || (s = a(n, t.map(r), S)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, xo), l()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (n = Array.from(h), l()) : n.slice();
  }, f.rangeRound = function(h) {
    return n = Array.from(h), e = Bn, l();
  }, f.clamp = function(h) {
    return arguments.length ? (u = h ? !0 : b, l()) : u !== b;
  }, f.interpolate = function(h) {
    return arguments.length ? (e = h, l()) : e;
  }, f.unknown = function(h) {
    return arguments.length ? (o = h, f) : o;
  }, function(h, p) {
    return r = h, i = p, l();
  };
}
function Eo() {
  return So()(b, b);
}
function Co(t, n, e, r) {
  var i = oe(t, n, e), o;
  switch (r = mt(r ?? ",f"), r.type) {
    case "s": {
      var u = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = yo(i, u)) && (r.precision = o), Rn(r, u);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = go(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = _o(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return $n(r);
}
function To(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return ie(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Co(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, u = r[i], a = r[o], c, s, l = 10;
    for (a < u && (s = u, u = a, a = s, s = i, i = o, o = s); l-- > 0; ) {
      if (s = Mt(u, a, e), s === c)
        return r[i] = u, r[o] = a, n(r);
      if (s > 0)
        u = Math.floor(u / s) * s, a = Math.ceil(a / s) * s;
      else if (s < 0)
        u = Math.ceil(u * s) / s, a = Math.floor(a * s) / s;
      else
        break;
      c = s;
    }
    return t;
  }, t;
}
function $t() {
  var t = Eo();
  return t.copy = function() {
    return No(t, $t());
  }, vo.apply(t, arguments), To(t);
}
function K(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
K.prototype = {
  constructor: K,
  scale: function(t) {
    return t === 1 ? this : new K(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new K(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
K.prototype;
const R = { top: 30, right: 30, bottom: 30, left: 30 }, Io = ({ width: t, height: n, data: e }) => {
  const r = t - R.right - R.left, i = n - R.top - R.bottom, o = tt(), u = tt(), a = tt({ xScale: null, yScale: null }), c = tt({ xAxis: null, yAxis: null });
  function s(l) {
    if (!e || !e.datasets)
      return;
    const { xScale: f, yScale: h } = a.current;
    e.datasets.map((p) => {
      const m = p.backgroundColor || "red";
      p.data.map((_) => {
        l.beginPath(), l.fillStyle = m;
        const y = f(_.x), A = h(_.y);
        l.arc(y, A, 6, 0, 2 * Math.PI, !0), l.fill();
      });
    });
  }
  return qt(() => {
    var l = Gt(u.current).attr("width", t).attr("height", n);
    const f = $t().domain([0, 10]).range([0, r]).nice(), h = $t().domain([0, 10]).range([i, 0]).nice();
    a.current = { xScale: f, yScale: h };
    const p = he(f), m = pe(h), _ = l.append("g").attr("transform", `translate(${R.left}, ${R.top})`), y = _.append("g").attr("transform", `translate(0, ${i})`).call(p), A = _.append("g").call(m);
    c.current = { xAxis: y, yAxis: A }, _.append("text").attr("x", `-${i / 2}`).attr("transform", "rotate(-90)").attr("y", "-20").text("Axis Y"), _.append("text").attr("x", `${r / 2}`).attr("y", `${i + R.bottom}`).text("Axis X");
  }, []), qt(() => {
    var l = Gt(o.current).attr("id", "canvas").attr("width", r).attr("height", i).attr("transform", `translate(${[R.left, R.top].join(",")})`), f = l.node().getContext("2d");
    s(f);
  }, [e]), /* @__PURE__ */ In("div", { style: { height: n, width: t }, children: [
    /* @__PURE__ */ bt("svg", { ref: u, style: { position: "absolute", zIndex: 10 } }),
    /* @__PURE__ */ bt("canvas", { ref: o, style: { position: "absolute", zIndex: 7 } }),
    "chart"
  ] });
};
export {
  Io as D3ScatterPlot
};
