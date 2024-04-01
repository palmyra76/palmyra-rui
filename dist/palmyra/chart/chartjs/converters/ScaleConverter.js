const x = (e) => (t) => t;
function c(e) {
  const t = (e == null ? void 0 : e.xKey) || "name", a = (e == null ? void 0 : e.yKey) || "value", r = a instanceof Array ? a : [a];
  return {
    xKey: t,
    yKeys: r
  };
}
const h = (e) => {
  const { xKey: t, yKeys: a } = c(e);
  return (r) => {
    var s = {
      labels: [],
      datasets: []
    }, v = {};
    return a.map((l, n) => {
      var u = { label: l, data: [] };
      v[l] = u, s.datasets[n] = u;
    }), r.map((l, n) => {
      var u = l[t];
      s.labels.push(u), a.map((d) => {
        var y = v[d];
        y.data[n] = l[d];
      });
    }), s;
  };
}, m = (e) => {
  const { yKeys: t } = c(e);
  return (a) => {
    var r = {
      labels: [],
      datasets: []
    };
    t.map((l, n) => {
      var u = { label: l, data: [] };
      r.datasets[n] = u;
    });
    for (var s in a) {
      r.labels.push(s);
      var v = a[s];
      t.map((l, n) => {
        r.datasets[n].data.push(v[l]);
      });
    }
    return r;
  };
}, o = (e) => (t) => {
  var a = {
    labels: [],
    datasets: []
  }, r = { label: "value", data: [] };
  a.datasets[0] = r;
  for (var s in t)
    a.labels.push(s), r.data.push(t[s]);
  return a;
}, S = (e, t, a, r) => {
  var { xKey: s } = c(t);
  const v = e.labels[a[0].index];
  if (t.sourceType == "keyValue") {
    var { index: l, datasetIndex: n } = a[0], u = e.datasets[n], d = u.data[l];
    return { [v]: d };
  }
  var y = { [s]: v };
  return a.map((b) => {
    var K = e.datasets[b.datasetIndex], p = K.label;
    y[p] = K.data[b.index];
  }), y;
};
export {
  h as ArrayScaleConverter,
  o as KeyValueScaleConverter,
  x as NoopConverter,
  m as ObjectScaleConverter,
  S as getScalePointData
};
