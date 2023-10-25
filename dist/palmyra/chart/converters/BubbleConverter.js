const t = (e) => (l) => {
};
function A(e, l, u) {
  var a, y, b, d;
  u.backgroundColor = ((y = (a = e == null ? void 0 : e.chart) == null ? void 0 : a[l]) == null ? void 0 : y.backgroundColor) || "blue", u.borderColor = ((d = (b = e == null ? void 0 : e.chart) == null ? void 0 : b[l]) == null ? void 0 : d.borderColor) || "grey";
}
function D(e, l, u) {
  var a = e[l];
  return a || (a = {
    label: l,
    data: []
  }, A(u, l, a), e[l] = a, a);
}
function h(e) {
  const l = (e == null ? void 0 : e.xLabel) || "name", u = (e == null ? void 0 : e.xKey) || "x", a = (e == null ? void 0 : e.yKey) || "y", y = (e == null ? void 0 : e.rKey) || "r";
  return a instanceof Array && console.error("BubbleChart: yKey should be string only, not an array " + e.yKey), {
    x: u,
    y: a,
    r: y,
    label: l
  };
}
const L = (e) => {
  const { x: l, y: u, r: a, label: y } = h(e.transformOptions);
  return (b) => {
    var d = {
      datasets: []
    }, x = {};
    return b.map((c, g) => {
      var v = D(x, c[y], e.transformOptions);
      v.data.push({
        x: c[l],
        y: c[u],
        r: c[a]
      });
    }), Object.values(x).map((c) => {
      d.datasets.push(c);
    }), d;
  };
}, S = (e, l, u, a) => {
  const { x: y, y: b, r: d } = h(l);
  var x = {};
  return u.map((c) => {
    var { index: g, datasetIndex: v } = c, C = e.datasets[v], r = C.label, K = C.data[g];
    x[r] = {
      [y]: K.x,
      [b]: K.y,
      [d]: K.r
    };
  }), x;
}, j = {
  default: L,
  noop: t
};
export {
  j as default,
  S as getPointData
};
