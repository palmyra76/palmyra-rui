import { getKeys as f } from "../../util.js";
const S = (p) => {
  const { xKey: u, yKeys: d } = f(p);
  return (l) => {
    var s = {
      labels: [],
      datasets: []
    };
    const o = [];
    if (l == null)
      return s;
    const y = u, m = y[0], v = y[1], b = d[0] || "count", r = {}, c = {};
    var i = {};
    const K = (e, n, t) => {
      var a = { key: n, label: t, data: [] };
      i[n] = a, s.datasets[e] = a;
    };
    var x = 0;
    return l.map((e, n) => {
      var t = e[m];
      r[t] == null && (r[t] = x++, s.labels.push(t));
      var a = e[v];
      c[a] || (c[a] = a, K(o.length, a, a), o.push(a));
      var L = i[a];
      L.data[r[t]] = e[b];
    }), s;
  };
};
export {
  S as TwoXDimArrayScaleConverter
};
