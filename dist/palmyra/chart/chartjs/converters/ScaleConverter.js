import { getKeys as c, getLabels as p, getLabel as K } from "../util.js";
const x = (e) => (r) => r, L = (e) => {
  const { xKey: r, yKeys: l } = c(e), { yLabels: u } = p(e);
  return (s) => {
    var n = {
      labels: [],
      datasets: []
    }, b = {};
    return l.map((a, t) => {
      const d = K(u, a, t);
      var v = { key: a, label: d, data: [] };
      b[a] = v, n.datasets[t] = v;
    }), s.map((a, t) => {
      var d = a[r];
      n.labels.push(d), l.map((v) => {
        var o = b[v];
        o.data[t] = a[v];
      });
    }), n;
  };
}, S = (e) => {
  const { yKeys: r } = c(e), { yLabels: l } = p(e);
  return (u) => {
    var s = {
      labels: [],
      datasets: []
    };
    r.map((a, t) => {
      const d = K(l, a, t);
      var v = { key: a, label: d, data: [] };
      s.datasets[t] = v;
    });
    for (var n in u) {
      s.labels.push(n);
      var b = u[n];
      r.map((a, t) => {
        s.datasets[t].data.push(b[a]);
      });
    }
    return s;
  };
}, g = (e) => {
  const { xKey: r } = c(e), { xLabel: l } = p(e);
  return (u) => {
    var s = {
      labels: [],
      datasets: []
    }, a = { key: r || l || "value", label: l || "value", data: [] };
    s.datasets[0] = a;
    for (var t in u)
      s.labels.push(t), a.data.push(u[t]);
    return s;
  };
}, C = (e, r, l, u) => {
  var { xKey: s } = c(r);
  const n = e.labels[l[0].index];
  if (r.sourceType == "keyValue") {
    var { index: b, datasetIndex: a } = l[0], t = e.datasets[a], d = t.data[b];
    return { [n]: d };
  }
  var v = { [s]: n };
  return l.map((o) => {
    var y = e.datasets[o.datasetIndex], m = y.label;
    v[m] = y.data[o.index];
  }), v;
};
export {
  L as ArrayScaleConverter,
  g as KeyValueScaleConverter,
  x as NoopConverter,
  S as ObjectScaleConverter,
  C as getScalePointData
};
