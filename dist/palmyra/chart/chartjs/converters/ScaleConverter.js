const x = (a) => (t) => {
};
function y(a) {
  const t = (a == null ? void 0 : a.xKey) || "name", e = (a == null ? void 0 : a.yKey) || "value", r = e instanceof Array ? e : [e];
  return {
    xKey: t,
    yKeys: r
  };
}
const g = (a) => {
  const { xKey: t, yKeys: e } = y(a);
  return (r) => {
    var u = {
      labels: [],
      datasets: []
    }, s = {};
    return e.map((l, v) => {
      var d = { label: l, data: [] };
      s[l] = d, u.datasets[v] = d, K(a, l, d);
    }), r.map((l, v) => {
      var d = l[t];
      u.labels.push(d), e.map((c) => {
        var b = s[c];
        b.data[v] = l[c];
      });
    }), u;
  };
}, S = (a) => {
  const { yKeys: t } = y(a);
  return (e) => {
    var r = {
      labels: [],
      datasets: []
    };
    t.map((l, v) => {
      var d = { label: l, data: [] };
      r.datasets[v] = d, K(a, l, d);
    });
    for (var u in e) {
      r.labels.push(u);
      var s = e[u];
      t.map((l, v) => {
        r.datasets[v].data.push(s[l]);
      });
    }
    return r;
  };
}, A = (a) => (t) => {
  var e = {
    labels: [],
    datasets: []
  }, r = { label: "value", data: [] };
  e.datasets[0] = r, K(a, "value", r);
  for (var u in t)
    e.labels.push(u), r.data.push(t[u]);
  return e;
};
function K(a, t, e) {
  var r, u, s, l;
  e.backgroundColor = ((u = (r = a == null ? void 0 : a.chart) == null ? void 0 : r[t]) == null ? void 0 : u.backgroundColor) || "blue", e.borderColor = ((l = (s = a == null ? void 0 : a.chart) == null ? void 0 : s[t]) == null ? void 0 : l.borderColor) || "grey";
}
const j = (a, t, e, r) => {
  var { xKey: u } = y(t);
  const s = a.labels[e[0].index];
  if (t.sourceType == "keyValue") {
    var { index: l, datasetIndex: v } = e[0], d = a.datasets[v], c = d.data[l];
    return { [s]: c };
  }
  var b = { [u]: s };
  return e.map((n) => {
    var C = a.datasets[n.datasetIndex], h = C.label;
    b[h] = C.data[n.index];
  }), b;
};
export {
  g as ArrayScaleConverter,
  A as KeyValueScaleConverter,
  x as NoopConverter,
  S as ObjectScaleConverter,
  j as getScalePointData
};
