const g = (a) => (l) => {
};
function n(a) {
  const l = (a == null ? void 0 : a.xKey) || "name", e = (a == null ? void 0 : a.yKey) || "value", t = e instanceof Array ? e : [e];
  return {
    xKey: l,
    yKeys: t
  };
}
const h = (a) => {
  const { xKey: l, yKeys: e } = n(a.transformOptions);
  return (t) => {
    var s = {
      labels: [],
      datasets: []
    }, u = {};
    return e.map((r, v) => {
      var d = { label: r, data: [] };
      u[r] = d, s.datasets[v] = d, o(a.transformOptions, r, d);
    }), t.map((r, v) => {
      var d = r[l];
      s.labels.push(d), e.map((c) => {
        var b = u[c];
        b.data[v] = r[c];
      });
    }), s;
  };
}, x = (a) => {
  const { yKeys: l } = n(a.transformOptions);
  return (e) => {
    var t = {
      labels: [],
      datasets: []
    };
    l.map((r, v) => {
      var d = { label: r, data: [] };
      t.datasets[v] = d, o(a.transformOptions, r, d);
    });
    for (var s in e) {
      t.labels.push(s);
      var u = e[s];
      l.map((r, v) => {
        t.datasets[v].data.push(u[r]);
      });
    }
    return console.log(t), t;
  };
}, j = (a) => (l) => {
  var e = {
    labels: [],
    datasets: []
  }, t = { label: "value", data: [] };
  e.datasets[0] = t, o(a.transformOptions, "value", t);
  for (var s in l)
    e.labels.push(s), t.data.push(l[s]);
  return e;
}, p = {
  default: h,
  object: x,
  keyValue: j,
  noop: g
}, A = (a, l, e, t) => {
  var { xKey: s } = n(l);
  const u = a.labels[e[0].index];
  if (l.sourceType == "keyValue") {
    var { index: r, datasetIndex: v } = e[0], d = a.datasets[v], c = d.data[r];
    return { [u]: c };
  }
  var b = { [s]: u };
  return e.map((y) => {
    var K = a.datasets[y.datasetIndex], C = K.label;
    b[C] = K.data[y.index];
  }), b;
};
function o(a, l, e) {
  var t, s, u, r;
  e.backgroundColor = ((s = (t = a == null ? void 0 : a.chart) == null ? void 0 : t[l]) == null ? void 0 : s.backgroundColor) || "blue", e.borderColor = ((r = (u = a == null ? void 0 : a.chart) == null ? void 0 : u[l]) == null ? void 0 : r.borderColor) || "grey";
}
export {
  p as default,
  A as getPointData
};
