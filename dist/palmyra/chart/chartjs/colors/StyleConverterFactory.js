import { getKeys as f } from "../util.js";
import l from "./GenerateColors.js";
const i = (n, o) => (r, s) => {
  var e;
  return (e = r.datasets) == null || e.map((t) => {
    const b = t.key, c = n[b];
    c ? (t.backgroundColor = c.backgroundColor || l(1), t.borderColor = c.borderColor || l(1)) : (t.backgroundColor = l(1), t.borderColor = l(1));
  }), r;
}, k = (n, o) => (r, s) => {
  const e = l(r.labels.length), t = l(r.labels.length);
  return r.labels.map((b, c) => {
    const u = n[b];
    u && (u.backgroundColor && (e[c] = u.backgroundColor), u.borderColor && (t[c] = u.borderColor));
  }), r.datasets[0] && (r.datasets[0].backgroundColor = e, r.datasets[0].borderColor = e), r;
}, g = (n, o) => (r, s) => {
  if (n == null)
    return r;
  const e = [], t = [], b = n.length;
  return r.labels.map((c, u) => {
    const a = u % b, C = n[a];
    e.push(C == null ? void 0 : C.backgroundColor), t.push(C == null ? void 0 : C.borderColor);
  }), r.datasets[0] && (r.datasets[0].backgroundColor = e, r.datasets[0].borderColor = e), r;
}, y = (n, o) => n, d = (n) => (o, r) => {
  var s;
  return (s = o.datasets) == null || s.map((e) => {
    e.backgroundColor = l(1), e.borderColor = l(1);
  }), o;
}, h = (n, o, r) => {
  if (o == null)
    return d();
  const { yKeys: s } = f(r);
  return o instanceof Array ? g(o) : s.length > 1 ? i(o) : o instanceof Array ? g(o) : k(o);
};
export {
  k as DatasetStyleConverterFactory,
  i as LabelStyleConverterFactory,
  y as NoopStyleConverter,
  d as RandomStyleConverterFactory,
  h as getStyleConverter
};
