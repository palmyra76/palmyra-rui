import j, { getRandomNumber as A } from "./colors/GenerateColors.js";
const D = (e) => (t) => {
};
function L(e, t, u) {
  var b, d, r, l;
  var a = Math.round(A(2, 10)), c = j(a);
  u.backgroundColor = ((d = (b = e == null ? void 0 : e.chart) == null ? void 0 : b[t]) == null ? void 0 : d.backgroundColor) || c[0], u.borderColor = ((l = (r = e == null ? void 0 : e.chart) == null ? void 0 : r[t]) == null ? void 0 : l.borderColor) || c[a - 1];
}
function C(e, t, u) {
  var a = e[t];
  return a || (a = {
    label: t,
    data: []
  }, L(u, t, a), e[t] = a, a);
}
function g(e) {
  const t = (e == null ? void 0 : e.xLabel) || "name", u = (e == null ? void 0 : e.xKey) || "x", a = (e == null ? void 0 : e.yKey) || "y", c = (e == null ? void 0 : e.rKey) || "r";
  return a instanceof Array && console.error("BubbleChart: yKey should be string only, not an array " + e.yKey), {
    x: u,
    y: a,
    r: c,
    label: t
  };
}
const M = (e) => {
  const { x: t, y: u, r: a, label: c } = g(e);
  return (b) => {
    var d = {
      labels: [],
      datasets: []
    }, r = {};
    return b.map((l, y) => {
      var v = C(r, l[c], e);
      v.data.push({
        x: l[t],
        y: l[u],
        r: l[a]
      });
    }), Object.values(r).map((l) => {
      d.datasets.push(l);
    }), d;
  };
}, N = (e) => {
  const { x: t, y: u, r: a } = g(e);
  return (c) => {
    var b = {
      labels: [],
      datasets: []
    }, d = {};
    for (var r in c) {
      var l = C(d, r, e), y = c[r];
      l.data.push({
        x: y[t],
        y: y[u],
        r: y[a]
      });
    }
    return Object.values(d).map((v) => {
      b.datasets.push(v);
    }), b;
  };
}, B = (e, t, u, a) => {
  const { x: c, y: b, r: d } = g(t);
  var r = {};
  return u.map((l) => {
    var { index: y, datasetIndex: v } = l, h = e.datasets[v], K = h.label, x = h.data[y];
    r[K] = {
      [c]: x.x,
      [b]: x.y,
      [d]: x.r
    };
  }), r;
}, P = {
  default: M,
  object: N,
  noop: D
};
export {
  P as default,
  B as getPointData
};
