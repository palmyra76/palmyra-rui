import { R, r as B, d as D, e as I, C as q, b as w, a as x, n as g, h as G } from "../../../../chunks/color.js";
const _ = Math.PI / 180, $ = 180 / Math.PI;
var S = -0.14861, M = 1.78277, d = -0.29227, p = -0.90649, b = 1.97294, y = b * p, C = b * M, E = M * d - p * S;
function j(r) {
  if (r instanceof l)
    return new l(r.h, r.s, r.l, r.opacity);
  r instanceof R || (r = B(r));
  var a = r.r / 255, e = r.g / 255, t = r.b / 255, n = (E * t + y * a - C * e) / (E + y - C), i = t - n, h = (b * (e - n) - d * i) / p, u = Math.sqrt(h * h + i * i) / (b * n * (1 - n)), s = u ? Math.atan2(h, i) * $ - 120 : NaN;
  return new l(s < 0 ? s + 360 : s, u, n, r.opacity);
}
function o(r, a, e, t) {
  return arguments.length === 1 ? j(r) : new l(r, a, e, t ?? 1);
}
function l(r, a, e, t) {
  this.h = +r, this.s = +a, this.l = +e, this.opacity = +t;
}
D(l, o, I(q, {
  brighter(r) {
    return r = r == null ? w : Math.pow(w, r), new l(this.h, this.s, this.l * r, this.opacity);
  },
  darker(r) {
    return r = r == null ? x : Math.pow(x, r), new l(this.h, this.s, this.l * r, this.opacity);
  },
  rgb() {
    var r = isNaN(this.h) ? 0 : (this.h + 120) * _, a = +this.l, e = isNaN(this.s) ? 0 : this.s * a * (1 - a), t = Math.cos(r), n = Math.sin(r);
    return new R(
      255 * (a + e * (S * t + M * n)),
      255 * (a + e * (d * t + p * n)),
      255 * (a + e * (b * t)),
      this.opacity
    );
  }
}));
function A(r) {
  return function a(e) {
    e = +e;
    function t(n, i) {
      var h = r((n = o(n)).h, (i = o(i)).h), u = g(n.s, i.s), s = g(n.l, i.l), f = g(n.opacity, i.opacity);
      return function(c) {
        return n.h = h(c), n.s = u(c), n.l = s(Math.pow(c, e)), n.opacity = f(c), n + "";
      };
    }
    return t.gamma = a, t;
  }(1);
}
A(G);
var P = A(g);
P(o(-100, 0.75, 0.35), o(80, 1.5, 0.8));
P(o(260, 0.75, 0.35), o(80, 1.5, 0.8));
var v = o();
function z(r) {
  (r < 0 || r > 1) && (r -= Math.floor(r));
  var a = Math.abs(r - 0.5);
  return v.h = 360 * r - 100, v.s = 1.5 - 1.5 * a, v.l = 0.8 - 0.9 * a, v + "";
}
function F(r, a, e) {
  var { colorStart: t, colorEnd: n, useEndAsStart: i } = e;
  return i ? n - r * a : t + r * a;
}
function N(r, a) {
  return Math.random() * (a - r) + r;
}
function J(r) {
  var a = N(0, 0.9), e = N(a, 1), t = {
    colorStart: a,
    colorEnd: e,
    useEndAsStart: !1
  }, n = z, { colorStart: i, colorEnd: h } = t, u = h - i, s = u / r, f, c, m = [];
  for (f = 0; f < r; f++)
    c = F(f, s, t), m.push(n(c));
  return m;
}
export {
  J as default,
  N as getRandomNumber
};
