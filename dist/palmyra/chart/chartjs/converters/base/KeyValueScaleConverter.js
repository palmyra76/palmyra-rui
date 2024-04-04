import { getKeys as u, getLabels as b } from "../../util.js";
const c = (t) => {
  const { xKey: n } = u(t), { xLabel: l } = b(t);
  return (a) => {
    var e = {
      labels: [],
      datasets: []
    };
    if (a == null)
      return e;
    var s = { key: n || l || "value", label: l || "value", data: [] };
    e.datasets[0] = s;
    for (var r in a)
      e.labels.push(r), s.data.push(a[r]);
    return e;
  };
};
export {
  c as KeyValueScaleConverter
};
