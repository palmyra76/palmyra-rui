import { getKeys as d, getLabels as o, getLabel as c } from "../../util.js";
const y = (s) => {
  const { xKey: u, yKeys: b } = d(s), { yLabels: v } = o(s);
  return (n) => {
    var e = {
      labels: [],
      datasets: []
    };
    if (n == null)
      return e;
    var p = {};
    return b.map((a, l) => {
      const r = c(v, a, l);
      var t = { key: a, label: r, data: [] };
      p[a] = t, e.datasets[l] = t;
    }), n.map((a, l) => {
      var r = a[u];
      e.labels.push(r), b.map((t) => {
        var m = p[t];
        m.data[l] = a[t];
      });
    }), e;
  };
};
export {
  y as ArrayScaleConverter
};
