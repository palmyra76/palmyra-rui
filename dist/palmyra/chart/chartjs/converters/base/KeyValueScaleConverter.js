import { getKeys as r, getLabels as u } from "../../util.js";
const g = (l) => {
  const { xKey: o } = r(l), { xLabel: t } = u(l);
  return console.log(l), (a) => {
    console.log(a);
    var e = {
      labels: [],
      datasets: []
    };
    if (a == null)
      return e;
    var s = { key: o || t || "value", label: t || "value", data: [] };
    e.datasets[0] = s;
    for (var n in a)
      e.labels.push(n), s.data.push(a[n]);
    return console.log(e), e;
  };
};
export {
  g as KeyValueScaleConverter
};
