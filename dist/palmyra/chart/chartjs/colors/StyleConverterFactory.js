import { getKeys as b } from "../util.js";
import t from "./GenerateColors.js";
const g = (e, o) => (r, s) => {
  var n;
  return (n = r.datasets) == null || n.map((l) => {
    const u = l.key, c = e[u];
    c ? (l.backgroundColor = c.backgroundColor || t(1), l.borderColor = c.borderColor || t(1)) : (l.backgroundColor = t(1), l.borderColor = t(1));
  }), r;
}, y = (e, o) => (r, s) => {
  const n = t(r.labels.length), l = t(r.labels.length);
  return r.labels.map((u, c) => {
    const C = e[u];
    C && (C.backgroundColor && (n[c] = C.backgroundColor), C.borderColor && (l[c] = C.borderColor));
  }), r.datasets[0] && (r.datasets[0].backgroundColor = n, r.datasets[0].borderColor = n), r;
}, f = (e) => (o, r) => (console.log(e), console.log(o.labels), o), k = (e, o) => e, i = (e) => (o, r) => {
  var s;
  return (s = o.datasets) == null || s.map((n) => {
    n.backgroundColor = t(1), n.borderColor = t(1);
  }), o;
}, m = (e, o, r) => {
  if (o == null)
    return i();
  const { yKeys: s } = b(r);
  return o instanceof Array ? f(o) : s.length > 1 ? g(o) : y(o);
};
export {
  y as DatasetStyleConverterFactory,
  g as LabelStyleConverterFactory,
  k as NoopStyleConverter,
  i as RandomStyleConverterFactory,
  m as getStyleConverter
};
