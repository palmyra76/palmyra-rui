import { getKeys as f } from "../util.js";
import t from "./GenerateColors.js";
const g = (n, o) => (r, s) => {
  var e;
  return r == null || r == null || (e = r.datasets) == null || e.map((l) => {
    const b = l.key, u = n[b];
    u ? (l.backgroundColor = u.backgroundColor || t(1), l.borderColor = u.borderColor || t(1)) : (l.backgroundColor = t(1), l.borderColor = t(1));
  }), r;
}, k = (n, o) => (r, s) => {
  if (r == null || r == null)
    return r;
  const e = t(r.labels.length), l = t(r.labels.length);
  return r.labels.map((b, u) => {
    const c = n[b];
    c && (c.backgroundColor && (e[u] = c.backgroundColor), c.borderColor && (l[u] = c.borderColor));
  }), r.datasets[0] && (r.datasets[0].backgroundColor = e, r.datasets[0].borderColor = e), r;
}, p = (n, o) => (r, s) => {
  if (n == null || r == null || r == null)
    return r;
  const e = [], l = [], b = n.length;
  return r.labels.map((u, c) => {
    const i = c % b, C = n[i];
    e.push(C == null ? void 0 : C.backgroundColor), l.push(C == null ? void 0 : C.borderColor);
  }), r.datasets[0] && (r.datasets[0].backgroundColor = e, r.datasets[0].borderColor = e), r;
}, h = (n, o) => n, m = (n) => (o, r) => {
  var s;
  return o == null || o == null || (s = o.datasets) == null || s.map((e) => {
    e.backgroundColor = t(1), e.borderColor = t(1);
  }), o;
}, S = (n, o, r) => {
  if (o == null)
    return m();
  const { yKeys: s } = f(r);
  return o instanceof Array ? p(o) : s.length > 1 ? g(o) : k(o);
};
export {
  k as DatasetStyleConverterFactory,
  g as LabelStyleConverterFactory,
  h as NoopStyleConverter,
  m as RandomStyleConverterFactory,
  S as getStyleConverter
};
