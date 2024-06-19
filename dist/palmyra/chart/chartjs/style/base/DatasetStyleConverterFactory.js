import n from "../GenerateColors.js";
const f = (t, C) => (o, c) => {
  if (o == null || o == null)
    return o;
  if (o.labels) {
    const e = n(o.labels.length), l = n(o.labels.length);
    o.labels.map((b, s) => {
      const r = t[b];
      r && (r.backgroundColor && (e[s] = r.backgroundColor), r.borderColor && (l[s] = r.borderColor));
    }), o.datasets[0] && (o.datasets[0].backgroundColor = e, o.datasets[0].borderColor = l);
  }
  return o;
};
export {
  f as DatasetStyleConverterFactory
};
