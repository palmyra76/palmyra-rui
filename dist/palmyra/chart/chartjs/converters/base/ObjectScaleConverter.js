import { getKeys as v, getLabels as c, getLabel as m } from "../../util.js";
const f = (r) => {
  const { yKeys: l } = v(r), { yLabels: b } = c(r);
  return (s) => {
    var a = {
      labels: [],
      datasets: []
    };
    if (s == null)
      return a;
    l.map((t, e) => {
      const o = m(b, t, e);
      var p = { key: t, label: o, data: [] };
      a.datasets[e] = p;
    });
    for (var n in s) {
      a.labels.push(n);
      var u = s[n];
      l.map((t, e) => {
        a.datasets[e].data.push(u[t]);
      });
    }
    return a;
  };
};
export {
  f as ObjectScaleConverter
};
