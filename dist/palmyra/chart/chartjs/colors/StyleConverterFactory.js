import { getKeys as g } from "../util.js";
import c from "./GenerateColors.js";
const p = (n, o) => (r, t) => {
  var e;
  return r == null || r == null || (e = r.datasets) == null || e.map((u) => {
    const l = u.key, s = n[l];
    s ? (u.backgroundColor = s.backgroundColor || c(1), u.borderColor = s.borderColor || c(1)) : (u.backgroundColor = c(1), u.borderColor = c(1));
  }), r;
}, k = (n, o) => (r, t) => (r == null || r == null || r.datasets.map((e) => {
  const u = n[e.label];
  e.backgroundColor = u == null ? void 0 : u.backgroundColor, e.borderColor = u == null ? void 0 : u.borderColor;
}), r), m = (n, o) => (r, t) => (r == null || r == null || r.datasets.map((e, u) => {
  const l = n[u];
  e.backgroundColor = l == null ? void 0 : l.backgroundColor, e.borderColor = l == null ? void 0 : l.borderColor;
}), r), v = (n, o) => {
  n.backgroundColor = (o == null ? void 0 : o.backgroundColor) || c(1)[0], n.borderColor = (o == null ? void 0 : o.borderColor) || c(1)[0], o && (b(o, n, "radius"), b(o, n, "borderWidth"), b(o, n, "hoverRadius"));
}, b = (n, o, r) => {
  n[r] && (o[r] = n[r]);
}, h = (n, o) => (r, t) => (r == null || r == null || r.datasets.map((e, u) => {
  const l = n[e.key];
  v(e, l);
}), r), S = (n, o) => (r, t) => {
  if (r == null || r == null)
    return r;
  const e = c(r.labels.length), u = c(r.labels.length);
  return r.labels.map((l, s) => {
    const C = n[l];
    C && (C.backgroundColor && (e[s] = C.backgroundColor), C.borderColor && (u[s] = C.borderColor));
  }), r.datasets[0] && (r.datasets[0].backgroundColor = e, r.datasets[0].borderColor = e), r;
}, d = (n, o) => (r, t) => {
  if (n == null || r == null || r == null)
    return r;
  const e = [], u = [], l = n.length;
  return r.labels.map((s, C) => {
    const f = C % l, i = n[f];
    e.push(i == null ? void 0 : i.backgroundColor), u.push(i == null ? void 0 : i.borderColor);
  }), r.datasets[0] && (r.datasets[0].backgroundColor = e, r.datasets[0].borderColor = e), r;
}, K = (n, o) => n, F = (n) => (o, r) => {
  var t;
  return o == null || o == null || (t = o.datasets) == null || t.map((e) => {
    e.backgroundColor = c(1), e.borderColor = c(1);
  }), o;
}, T = (n, o, r) => {
  if (o == null)
    return F();
  if (r.group)
    return h(o);
  const { xKey: t, yKeys: e } = g(r);
  return o instanceof Array ? t instanceof Array ? m(o) : d(o) : e.length > 1 ? p(o) : t instanceof Array ? k(o) : S(o);
};
export {
  S as DatasetStyleConverterFactory,
  p as LabelStyleConverterFactory,
  K as NoopStyleConverter,
  F as RandomStyleConverterFactory,
  T as getStyleConverter
};
