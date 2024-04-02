import { getKeys as d, getLabels as p, getLabel as K } from "../util.js";
const h = (e) => (l) => l, x = (e) => {
  const { xKey: l, yKeys: s } = d(e), { yLabels: o } = p(e);
  return (r) => {
    var n = {
      labels: [],
      datasets: []
    }, u = {};
    return s.map((a, t) => {
      const b = K(o, a, t);
      var v = { key: a, label: b, data: [] };
      u[a] = v, n.datasets[t] = v;
    }), console.log(s), r.map((a, t) => {
      var b = a[l];
      n.labels.push(b), s.map((v) => {
        var c = u[v];
        c.data[t] = a[v];
      });
    }), n;
  };
}, L = (e) => {
  const { yKeys: l } = d(e), { yLabels: s } = p(e);
  return (o) => {
    var r = {
      labels: [],
      datasets: []
    };
    l.map((a, t) => {
      const b = K(s, a, t);
      var v = { key: a, label: b, data: [] };
      r.datasets[t] = v;
    });
    for (var n in o) {
      r.labels.push(n);
      var u = o[n];
      l.map((a, t) => {
        r.datasets[t].data.push(u[a]);
      });
    }
    return r;
  };
}, S = (e) => {
  const { xKey: l } = d(e), { xLabel: s } = p(e);
  return (o) => {
    var r = {
      labels: [],
      datasets: []
    }, a = { key: l || s || "value", label: s || "value", data: [] };
    r.datasets[0] = a;
    for (var t in o)
      r.labels.push(t), a.data.push(o[t]);
    return r;
  };
}, C = (e, l, s, o) => {
  var { xKey: r } = d(l);
  const n = e.labels[s[0].index];
  if (l.sourceType == "keyValue") {
    var { index: u, datasetIndex: a } = s[0], t = e.datasets[a], b = t.data[u];
    return { [n]: b };
  }
  var v = { [r]: n };
  return s.map((c) => {
    var y = e.datasets[c.datasetIndex], m = y.label;
    v[m] = y.data[c.index];
  }), v;
};
export {
  x as ArrayScaleConverter,
  S as KeyValueScaleConverter,
  h as NoopConverter,
  L as ObjectScaleConverter,
  C as getScalePointData
};
