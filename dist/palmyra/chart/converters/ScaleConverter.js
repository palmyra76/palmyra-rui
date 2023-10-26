const x = (a) => (r) => {
};
function y(a) {
  const r = (a == null ? void 0 : a.xKey) || "name", e = (a == null ? void 0 : a.yKey) || "value", t = e instanceof Array ? e : [e];
  return {
    xKey: r,
    yKeys: t
  };
}
const g = (a) => {
  const { xKey: r, yKeys: e } = y(a);
  return (t) => {
    var u = {
      labels: [],
      datasets: []
    }, s = {};
    return e.map((l, v) => {
      var d = { label: l, data: [] };
      s[l] = d, u.datasets[v] = d, K(a, l, d);
    }), t.map((l, v) => {
      var d = l[r];
      u.labels.push(d), e.map((c) => {
        var b = s[c];
        b.data[v] = l[c];
      });
    }), u;
  };
}, S = (a) => {
  const { yKeys: r } = y(a);
  return (e) => {
    var t = {
      labels: [],
      datasets: []
    };
    r.map((l, v) => {
      var d = { label: l, data: [] };
      t.datasets[v] = d, K(a, l, d);
    });
    for (var u in e) {
      t.labels.push(u);
      var s = e[u];
      r.map((l, v) => {
        t.datasets[v].data.push(s[l]);
      });
    }
    return t;
  };
}, A = (a) => (r) => {
  var e = {
    labels: [],
    datasets: []
  }, t = { label: "value", data: [] };
  e.datasets[0] = t, K(a, "value", t);
  for (var u in r)
    e.labels.push(u), t.data.push(r[u]);
  return e;
};
function K(a, r, e) {
  var t, u, s, l;
  e.backgroundColor = ((u = (t = a == null ? void 0 : a.chart) == null ? void 0 : t[r]) == null ? void 0 : u.backgroundColor) || "blue", e.borderColor = ((l = (s = a == null ? void 0 : a.chart) == null ? void 0 : s[r]) == null ? void 0 : l.borderColor) || "grey";
}
const j = (a, r, e, t) => {
  var { xKey: u } = y(r);
  const s = a.labels[e[0].index];
  if (r.sourceType == "keyValue") {
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
