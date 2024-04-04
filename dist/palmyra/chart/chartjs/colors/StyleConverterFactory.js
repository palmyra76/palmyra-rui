import { getKeys as f } from "../util.js";
import s from "./GenerateColors.js";
const g = (l, n) => (r, u) => {
  var o;
  return r == null || r == null || (o = r.datasets) == null || o.map((e) => {
    const t = e.key, c = l[t];
    c ? (e.backgroundColor = c.backgroundColor || s(1), e.borderColor = c.borderColor || s(1)) : (e.backgroundColor = s(1), e.borderColor = s(1));
  }), r;
}, k = (l, n) => (r, u) => (r == null || r == null || r.datasets.map((o) => {
  const e = l[o.label];
  o.backgroundColor = e == null ? void 0 : e.backgroundColor, o.borderColor = e == null ? void 0 : e.borderColor;
}), r), p = (l, n) => (r, u) => (r == null || r == null || r.datasets.map((o, e) => {
  const t = l[e];
  o.backgroundColor = t == null ? void 0 : t.backgroundColor, o.borderColor = t == null ? void 0 : t.borderColor;
}), r), m = (l, n) => (r, u) => {
  if (r == null || r == null)
    return r;
  const o = s(r.labels.length), e = s(r.labels.length);
  return r.labels.map((t, c) => {
    const C = l[t];
    C && (C.backgroundColor && (o[c] = C.backgroundColor), C.borderColor && (e[c] = C.borderColor));
  }), r.datasets[0] && (r.datasets[0].backgroundColor = o, r.datasets[0].borderColor = o), r;
}, v = (l, n) => (r, u) => {
  if (l == null || r == null || r == null)
    return r;
  const o = [], e = [], t = l.length;
  return r.labels.map((c, C) => {
    const i = C % t, b = l[i];
    o.push(b == null ? void 0 : b.backgroundColor), e.push(b == null ? void 0 : b.borderColor);
  }), r.datasets[0] && (r.datasets[0].backgroundColor = o, r.datasets[0].borderColor = o), r;
}, d = (l, n) => l, y = (l) => (n, r) => {
  var u;
  return n == null || n == null || (u = n.datasets) == null || u.map((o) => {
    o.backgroundColor = s(1), o.borderColor = s(1);
  }), n;
}, F = (l, n, r) => {
  if (n == null)
    return y();
  const { xKey: u, yKeys: o } = f(r);
  return n instanceof Array ? u instanceof Array ? p(n) : v(n) : o.length > 1 ? g(n) : u instanceof Array ? k(n) : m(n);
};
export {
  m as DatasetStyleConverterFactory,
  g as LabelStyleConverterFactory,
  d as NoopStyleConverter,
  y as RandomStyleConverterFactory,
  F as getStyleConverter
};
