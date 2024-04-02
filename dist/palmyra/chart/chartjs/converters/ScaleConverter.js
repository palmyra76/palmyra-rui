import { getKeys as c, getLabels as p, getLabel as K } from "../util.js";
const h = (s) => (r) => r, i = (s) => {
  const { xKey: r, yKeys: l } = c(s), { yLabels: u } = p(s);
  return (t) => {
    var n = {
      labels: [],
      datasets: []
    };
    if (t == null)
      return n;
    var b = {};
    return l.map((a, e) => {
      const d = K(u, a, e);
      var v = { key: a, label: d, data: [] };
      b[a] = v, n.datasets[e] = v;
    }), t.map((a, e) => {
      var d = a[r];
      n.labels.push(d), l.map((v) => {
        var o = b[v];
        o.data[e] = a[v];
      });
    }), n;
  };
}, x = (s) => {
  const { yKeys: r } = c(s), { yLabels: l } = p(s);
  return (u) => {
    var t = {
      labels: [],
      datasets: []
    };
    if (u == null)
      return t;
    r.map((a, e) => {
      const d = K(l, a, e);
      var v = { key: a, label: d, data: [] };
      t.datasets[e] = v;
    });
    for (var n in u) {
      t.labels.push(n);
      var b = u[n];
      r.map((a, e) => {
        t.datasets[e].data.push(b[a]);
      });
    }
    return t;
  };
}, L = (s) => {
  const { xKey: r } = c(s), { xLabel: l } = p(s);
  return (u) => {
    var t = {
      labels: [],
      datasets: []
    };
    if (u == null)
      return t;
    var a = { key: r || l || "value", label: l || "value", data: [] };
    t.datasets[0] = a;
    for (var e in u)
      t.labels.push(e), a.data.push(u[e]);
    return t;
  };
}, S = (s, r, l, u) => {
  var { xKey: t } = c(r);
  const n = s.labels[l[0].index];
  if (r.sourceType == "keyValue") {
    var { index: b, datasetIndex: a } = l[0], e = s.datasets[a], d = e.data[b];
    return { [n]: d };
  }
  var v = { [t]: n };
  return l.map((o) => {
    var y = s.datasets[o.datasetIndex], f = y.label;
    v[f] = y.data[o.index];
  }), v;
};
export {
  i as ArrayScaleConverter,
  L as KeyValueScaleConverter,
  h as NoopConverter,
  x as ObjectScaleConverter,
  S as getScalePointData
};
