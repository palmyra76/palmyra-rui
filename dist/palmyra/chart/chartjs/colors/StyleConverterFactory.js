import { getKeys as f } from "../util.js";
import c from "./GenerateColors.js";
const g = (t, n) => (r, u) => {
  var o;
  return r == null || r == null || (o = r.datasets) == null || o.map((e) => {
    const l = e.key, s = t[l];
    s ? (e.backgroundColor = s.backgroundColor || c(1), e.borderColor = s.borderColor || c(1)) : (e.backgroundColor = c(1), e.borderColor = c(1));
  }), r;
}, k = (t, n) => (r, u) => (r == null || r == null || r.datasets.map((o) => {
  const e = t[o.label];
  o.backgroundColor = e == null ? void 0 : e.backgroundColor, o.borderColor = e == null ? void 0 : e.borderColor;
}), r), p = (t, n) => (r, u) => (r == null || r == null || r.datasets.map((o, e) => {
  const l = t[e];
  o.backgroundColor = l == null ? void 0 : l.backgroundColor, o.borderColor = l == null ? void 0 : l.borderColor;
}), r), m = (t, n) => (r, u) => (r == null || r == null || r.datasets.map((o, e) => {
  const l = t[o.key];
  o.backgroundColor = l == null ? void 0 : l.backgroundColor, o.borderColor = l == null ? void 0 : l.borderColor;
}), r), v = (t, n) => (r, u) => {
  if (r == null || r == null)
    return r;
  const o = c(r.labels.length), e = c(r.labels.length);
  return r.labels.map((l, s) => {
    const C = t[l];
    C && (C.backgroundColor && (o[s] = C.backgroundColor), C.borderColor && (e[s] = C.borderColor));
  }), r.datasets[0] && (r.datasets[0].backgroundColor = o, r.datasets[0].borderColor = o), r;
}, y = (t, n) => (r, u) => {
  if (t == null || r == null || r == null)
    return r;
  const o = [], e = [], l = t.length;
  return r.labels.map((s, C) => {
    const i = C % l, b = t[i];
    o.push(b == null ? void 0 : b.backgroundColor), e.push(b == null ? void 0 : b.borderColor);
  }), r.datasets[0] && (r.datasets[0].backgroundColor = o, r.datasets[0].borderColor = o), r;
}, F = (t, n) => t, S = (t) => (n, r) => {
  var u;
  return n == null || n == null || (u = n.datasets) == null || u.map((o) => {
    o.backgroundColor = c(1), o.borderColor = c(1);
  }), n;
}, A = (t, n, r) => {
  if (n == null)
    return S();
  if (r.group)
    return m(n);
  const { xKey: u, yKeys: o } = f(r);
  return n instanceof Array ? u instanceof Array ? p(n) : y(n) : o.length > 1 ? g(n) : u instanceof Array ? k(n) : v(n);
};
export {
  v as DatasetStyleConverterFactory,
  g as LabelStyleConverterFactory,
  F as NoopStyleConverter,
  S as RandomStyleConverterFactory,
  A as getStyleConverter
};
