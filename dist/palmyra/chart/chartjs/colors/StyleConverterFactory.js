import { getKeys as a } from "../util.js";
import l from "./GenerateColors.js";
const f = (n, e) => (r, s) => {
  var o;
  return (o = r.datasets) == null || o.map((t) => {
    const b = t.key, c = n[b];
    c ? (t.backgroundColor = c.backgroundColor || l(1), t.borderColor = c.borderColor || l(1)) : (t.backgroundColor = l(1), t.borderColor = l(1));
  }), r;
}, i = (n, e) => (r, s) => {
  const o = l(r.labels.length), t = l(r.labels.length);
  return r.labels.map((b, c) => {
    const u = n[b];
    u && (u.backgroundColor && (o[c] = u.backgroundColor), u.borderColor && (t[c] = u.borderColor));
  }), r.datasets[0] && (r.datasets[0].backgroundColor = o, r.datasets[0].borderColor = o), r;
}, k = (n, e) => (r, s) => {
  if (n == null)
    return r;
  const o = [], t = [], b = n.length;
  return r.labels.map((c, u) => {
    const g = u % b, C = n[g];
    o.push(C == null ? void 0 : C.backgroundColor), t.push(C == null ? void 0 : C.borderColor);
  }), r.datasets[0] && (r.datasets[0].backgroundColor = o, r.datasets[0].borderColor = o), r;
}, y = (n, e) => n, p = (n) => (e, r) => {
  var s;
  return (s = e.datasets) == null || s.map((o) => {
    o.backgroundColor = l(1), o.borderColor = l(1);
  }), e;
}, h = (n, e, r) => {
  if (e == null)
    return p();
  const { yKeys: s } = a(r);
  return e instanceof Array ? k(e) : s.length > 1 ? f(e) : i(e);
};
export {
  i as DatasetStyleConverterFactory,
  f as LabelStyleConverterFactory,
  y as NoopStyleConverter,
  p as RandomStyleConverterFactory,
  h as getStyleConverter
};
