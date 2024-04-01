const x = (a) => (t) => t;
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
    return e.map((l, d) => {
      var v = { label: l, data: [] };
      s[l] = v, u.datasets[d] = v, n(a, l, v);
    }), r.map((l, d) => {
      var v = l[t];
      u.labels.push(v), e.map((c) => {
        var b = s[c];
        b.data[d] = l[c];
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
    t.map((l, d) => {
      var v = { label: l, data: [] };
      r.datasets[d] = v, n(a, l, v);
    });
    for (var u in e) {
      r.labels.push(u);
      var s = e[u];
      t.map((l, d) => {
        r.datasets[d].data.push(s[l]);
      });
    }
    return r;
  };
}, A = (a) => (t) => {
  var e = {
    labels: [],
    datasets: []
  }, r = { label: "value", data: [] };
  e.datasets[0] = r, n(a, "value", r);
  for (var u in t)
    e.labels.push(u), r.data.push(t[u]);
  return e;
};
function n(a, t, e) {
  var r, u, s, l;
  e.backgroundColor = ((u = (r = a == null ? void 0 : a.chart) == null ? void 0 : r[t]) == null ? void 0 : u.backgroundColor) || "blue", e.borderColor = ((l = (s = a == null ? void 0 : a.chart) == null ? void 0 : s[t]) == null ? void 0 : l.borderColor) || "grey";
}
const j = (a, t, e, r) => {
  var { xKey: u } = y(t);
  const s = a.labels[e[0].index];
  if (t.sourceType == "keyValue") {
    var { index: l, datasetIndex: d } = e[0], v = a.datasets[d], c = v.data[l];
    return { [s]: c };
  }
  var b = { [u]: s };
  return e.map((K) => {
    var C = a.datasets[K.datasetIndex], h = C.label;
    b[h] = C.data[K.index];
  }), b;
};
export {
  g as ArrayScaleConverter,
  A as KeyValueScaleConverter,
  x as NoopConverter,
  S as ObjectScaleConverter,
  j as getScalePointData
};
