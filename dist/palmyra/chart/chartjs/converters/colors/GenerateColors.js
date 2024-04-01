function q(e, r, t) {
  e.prototype = r.prototype = t, t.constructor = e;
}
function S(e, r) {
  var t = Object.create(e.prototype);
  for (var n in r)
    t[n] = r[n];
  return t;
}
function $() {
}
var p = 0.7, y = 1 / p, w = "\\s*([+-]?\\d+)\\s*", v = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", o = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", te = /^#([0-9a-f]{3,8})$/, ne = new RegExp(`^rgb\\(${w},${w},${w}\\)$`), ae = new RegExp(`^rgb\\(${o},${o},${o}\\)$`), ie = new RegExp(`^rgba\\(${w},${w},${w},${v}\\)$`), fe = new RegExp(`^rgba\\(${o},${o},${o},${v}\\)$`), se = new RegExp(`^hsl\\(${v},${o},${o}\\)$`), le = new RegExp(`^hsla\\(${v},${o},${o},${v}\\)$`), B = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
q($, _, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: D,
  // Deprecated! Use color.formatHex.
  formatHex: D,
  formatHex8: xe,
  formatHsl: he,
  formatRgb: O,
  toString: O
});
function D() {
  return this.rgb().formatHex();
}
function xe() {
  return this.rgb().formatHex8();
}
function he() {
  return W(this).formatHsl();
}
function O() {
  return this.rgb().formatRgb();
}
function _(e) {
  var r, t;
  return e = (e + "").trim().toLowerCase(), (r = te.exec(e)) ? (t = r[1].length, r = parseInt(r[1], 16), t === 6 ? z(r) : t === 3 ? new f(r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, (r & 15) << 4 | r & 15, 1) : t === 8 ? M(r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, (r & 255) / 255) : t === 4 ? M(r >> 12 & 15 | r >> 8 & 240, r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, ((r & 15) << 4 | r & 15) / 255) : null) : (r = ne.exec(e)) ? new f(r[1], r[2], r[3], 1) : (r = ae.exec(e)) ? new f(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, 1) : (r = ie.exec(e)) ? M(r[1], r[2], r[3], r[4]) : (r = fe.exec(e)) ? M(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, r[4]) : (r = se.exec(e)) ? F(r[1], r[2] / 100, r[3] / 100, 1) : (r = le.exec(e)) ? F(r[1], r[2] / 100, r[3] / 100, r[4]) : B.hasOwnProperty(e) ? z(B[e]) : e === "transparent" ? new f(NaN, NaN, NaN, 0) : null;
}
function z(e) {
  return new f(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function M(e, r, t, n) {
  return n <= 0 && (e = r = t = NaN), new f(e, r, t, n);
}
function V(e) {
  return e instanceof $ || (e = _(e)), e ? (e = e.rgb(), new f(e.r, e.g, e.b, e.opacity)) : new f();
}
function oe(e, r, t, n) {
  return arguments.length === 1 ? V(e) : new f(e, r, t, n ?? 1);
}
function f(e, r, t, n) {
  this.r = +e, this.g = +r, this.b = +t, this.opacity = +n;
}
q(f, oe, S($, {
  brighter(e) {
    return e = e == null ? y : Math.pow(y, e), new f(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? p : Math.pow(p, e), new f(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new f(b(this.r), b(this.g), b(this.b), E(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: G,
  // Deprecated! Use color.formatHex.
  formatHex: G,
  formatHex8: ce,
  formatRgb: L,
  toString: L
}));
function G() {
  return `#${d(this.r)}${d(this.g)}${d(this.b)}`;
}
function ce() {
  return `#${d(this.r)}${d(this.g)}${d(this.b)}${d((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function L() {
  const e = E(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${b(this.r)}, ${b(this.g)}, ${b(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function E(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function b(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function d(e) {
  return e = b(e), (e < 16 ? "0" : "") + e.toString(16);
}
function F(e, r, t, n) {
  return n <= 0 ? e = r = t = NaN : t <= 0 || t >= 1 ? e = r = NaN : r <= 0 && (e = NaN), new h(e, r, t, n);
}
function W(e) {
  if (e instanceof h)
    return new h(e.h, e.s, e.l, e.opacity);
  if (e instanceof $ || (e = _(e)), !e)
    return new h();
  if (e instanceof h)
    return e;
  e = e.rgb();
  var r = e.r / 255, t = e.g / 255, n = e.b / 255, a = Math.min(r, t, n), i = Math.max(r, t, n), s = NaN, l = i - a, x = (i + a) / 2;
  return l ? (r === i ? s = (t - n) / l + (t < n) * 6 : t === i ? s = (n - r) / l + 2 : s = (r - t) / l + 4, l /= x < 0.5 ? i + a : 2 - i - a, s *= 60) : l = x > 0 && x < 1 ? 0 : s, new h(s, l, x, e.opacity);
}
function ue(e, r, t, n) {
  return arguments.length === 1 ? W(e) : new h(e, r, t, n ?? 1);
}
function h(e, r, t, n) {
  this.h = +e, this.s = +r, this.l = +t, this.opacity = +n;
}
q(h, ue, S($, {
  brighter(e) {
    return e = e == null ? y : Math.pow(y, e), new h(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? p : Math.pow(p, e), new h(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, r = isNaN(e) || isNaN(this.s) ? 0 : this.s, t = this.l, n = t + (t < 0.5 ? t : 1 - t) * r, a = 2 * t - n;
    return new f(
      C(e >= 240 ? e - 240 : e + 120, a, n),
      C(e, a, n),
      C(e < 120 ? e + 240 : e - 120, a, n),
      this.opacity
    );
  },
  clamp() {
    return new h(J(this.h), R(this.s), R(this.l), E(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = E(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${J(this.h)}, ${R(this.s) * 100}%, ${R(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function J(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function R(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function C(e, r, t) {
  return (e < 60 ? r + (t - r) * e / 60 : e < 180 ? t : e < 240 ? r + (t - r) * (240 - e) / 60 : r) * 255;
}
const de = Math.PI / 180, be = 180 / Math.PI;
var X = -0.14861, I = 1.78277, A = -0.29227, P = -0.90649, N = 1.97294, K = N * P, Q = N * I, T = I * A - P * X;
function ge(e) {
  if (e instanceof g)
    return new g(e.h, e.s, e.l, e.opacity);
  e instanceof f || (e = V(e));
  var r = e.r / 255, t = e.g / 255, n = e.b / 255, a = (T * n + K * r - Q * t) / (T + K - Q), i = n - a, s = (N * (t - a) - A * i) / P, l = Math.sqrt(s * s + i * i) / (N * a * (1 - a)), x = l ? Math.atan2(s, i) * be - 120 : NaN;
  return new g(x < 0 ? x + 360 : x, l, a, e.opacity);
}
function c(e, r, t, n) {
  return arguments.length === 1 ? ge(e) : new g(e, r, t, n ?? 1);
}
function g(e, r, t, n) {
  this.h = +e, this.s = +r, this.l = +t, this.opacity = +n;
}
q(g, c, S($, {
  brighter(e) {
    return e = e == null ? y : Math.pow(y, e), new g(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? p : Math.pow(p, e), new g(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = isNaN(this.h) ? 0 : (this.h + 120) * de, r = +this.l, t = isNaN(this.s) ? 0 : this.s * r * (1 - r), n = Math.cos(e), a = Math.sin(e);
    return new f(
      255 * (r + t * (X * n + I * a)),
      255 * (r + t * (A * n + P * a)),
      255 * (r + t * (N * n)),
      this.opacity
    );
  }
}));
const Y = (e) => () => e;
function Z(e, r) {
  return function(t) {
    return e + t * r;
  };
}
function pe(e, r) {
  var t = r - e;
  return t ? Z(e, t > 180 || t < -180 ? t - 360 * Math.round(t / 360) : t) : Y(isNaN(e) ? r : e);
}
function k(e, r) {
  var t = r - e;
  return t ? Z(e, t) : Y(isNaN(e) ? r : e);
}
function ee(e) {
  return function r(t) {
    t = +t;
    function n(a, i) {
      var s = e((a = c(a)).h, (i = c(i)).h), l = k(a.s, i.s), x = k(a.l, i.l), m = k(a.opacity, i.opacity);
      return function(u) {
        return a.h = s(u), a.s = l(u), a.l = x(Math.pow(u, t)), a.opacity = m(u), a + "";
      };
    }
    return n.gamma = r, n;
  }(1);
}
ee(pe);
var re = ee(k);
re(c(-100, 0.75, 0.35), c(80, 1.5, 0.8));
re(c(260, 0.75, 0.35), c(80, 1.5, 0.8));
var H = c();
function me(e) {
  (e < 0 || e > 1) && (e -= Math.floor(e));
  var r = Math.abs(e - 0.5);
  return H.h = 360 * e - 100, H.s = 1.5 - 1.5 * r, H.l = 0.8 - 0.9 * r, H + "";
}
function we(e, r, t) {
  var { colorStart: n, colorEnd: a, useEndAsStart: i } = t;
  return i ? a - e * r : n + e * r;
}
function U(e, r) {
  return Math.random() * (r - e) + e;
}
function ye(e) {
  var r = U(0, 0.9), t = U(r, 1), n = {
    colorStart: r,
    colorEnd: t,
    useEndAsStart: !1
  }, a = me, { colorStart: i, colorEnd: s } = n, l = s - i, x = l / e, m, u, j = [];
  for (m = 0; m < e; m++)
    u = we(m, x, n), j.push(a(u));
  return j;
}
export {
  ye as default,
  U as getRandomNumber
};
