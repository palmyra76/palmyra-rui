import s from "../GenerateColors.js";
const f = (n, C) => (o, c) => {
  if (o == null || o == null)
    return o;
  if (o.labels) {
    const e = s(o.labels.length), t = s(o.labels.length);
    o.labels.map((b, l) => {
      const r = n[b];
      r && (r.backgroundColor && (e[l] = r.backgroundColor), r.borderColor && (t[l] = r.borderColor));
    }), o.datasets[0] && (o.datasets[0].backgroundColor = e, o.datasets[0].borderColor = e);
  }
  return o;
};
export {
  f as DatasetStyleConverterFactory
};
