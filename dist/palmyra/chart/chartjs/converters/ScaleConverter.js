import { getKeys as i } from "../util.js";
const b = (e) => (a) => a, K = (e, a, t, p) => {
  var { xKey: l } = i(a);
  const r = e.labels[t[0].index];
  if (a.sourceType == "KeyValue") {
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
  K as getScalePointData
};
