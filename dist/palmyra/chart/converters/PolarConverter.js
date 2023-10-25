const y = (a) => (l) => {
};
function b(a) {
  var r, n;
  const l = ((r = a.transformOptions) == null ? void 0 : r.xKey) || "name", e = ((n = a.transformOptions) == null ? void 0 : n.yKey) || "value", t = e instanceof Array ? e : [e];
  return {
    xKey: l,
    yKeys: t
  };
}
const p = (a) => {
  const { xKey: l, yKeys: e } = b(a);
  return (t) => {
    var r = {
      labels: [],
      datasets: []
    }, n = {};
    return e.map((s, u) => {
      var o = { label: s, data: [] };
      n[s] = o, r.datasets[u] = o, d(a.transformOptions, s, o);
    }), t.map((s, u) => {
      var o = s[l];
      r.labels.push(o), e.map((v) => {
        var c = n[v];
        c.data[u] = s[v];
      });
    }), r;
  };
}, K = (a) => {
  const { yKeys: l } = b(a);
  return (e) => {
    var t = {
      labels: [],
      datasets: []
    };
    l.map((s, u) => {
      var o = { label: s, data: [] };
      t.datasets[u] = o, d(a.transformOptions, s, o);
    });
    for (var r in e) {
      t.labels.push(r);
      var n = e[r];
      l.map((s, u) => {
        t.datasets[u].data.push(n[s]);
      });
    }
    return t;
  };
}, C = (a) => (l) => {
  var e = {
    labels: [],
    datasets: []
  }, t = { label: "value", data: [] };
  e.datasets[0] = t, d(a.transformOptions, "value", t);
  for (var r in l)
    e.labels.push(r), t.data.push(l[r]);
  return e;
}, h = {
  default: p,
  object: K,
  keyValue: C,
  noop: y
};
function d(a, l, e) {
  var t, r, n, s;
  e.backgroundColor = ((r = (t = a == null ? void 0 : a.chart) == null ? void 0 : t[l]) == null ? void 0 : r.backgroundColor) || "blue", e.borderColor = ((s = (n = a == null ? void 0 : a.chart) == null ? void 0 : n[l]) == null ? void 0 : s.borderColor) || "grey";
}
export {
  h as default
};
