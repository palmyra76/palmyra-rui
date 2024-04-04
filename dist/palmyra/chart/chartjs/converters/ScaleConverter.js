import { getKeys as i } from "../util.js";
const b = (e) => (a) => a, g = (e, a, t, p) => {
  var { xKey: l } = i(a);
  const r = e.labels[t[0].index];
  if (a.sourceType == "keyValue") {
    var { index: u, datasetIndex: v } = t[0], d = e.datasets[v], x = d.data[u];
    return { [r]: x };
  }
  var s = { [l]: r };
  return t.map((o) => {
    var n = e.datasets[o.datasetIndex], c = n.label;
    s[c] = n.data[o.index];
  }), s;
};
export {
  b as NoopConverter,
  g as getScalePointData
};
