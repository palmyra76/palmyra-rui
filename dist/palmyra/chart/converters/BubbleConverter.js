import j, { getRandomNumber as A } from "./colors/GenerateColors.js";
const D = (e) => (l) => {
};
function L(e, l, c) {
  var y, b, d, u;
  var a = Math.round(A(2, 10)), r = j(a);
  c.backgroundColor = ((b = (y = e == null ? void 0 : e.chart) == null ? void 0 : y[l]) == null ? void 0 : b.backgroundColor) || r[0], c.borderColor = ((u = (d = e == null ? void 0 : e.chart) == null ? void 0 : d[l]) == null ? void 0 : u.borderColor) || r[a - 1];
}
function C(e, l, c) {
  var a = e[l];
  return a || (a = {
    label: l,
    data: []
  }, L(c, l, a), e[l] = a, a);
}
function g(e) {
  const l = (e == null ? void 0 : e.xLabel) || "name", c = (e == null ? void 0 : e.xKey) || "x", a = (e == null ? void 0 : e.yKey) || "y", r = (e == null ? void 0 : e.rKey) || "r";
  return a instanceof Array && console.error("BubbleChart: yKey should be string only, not an array " + e.yKey), {
    x: c,
    y: a,
    r,
    label: l
  };
}
const M = (e) => {
  const { x: l, y: c, r: a, label: r } = g(e);
  return (y) => {
    var b = {
      labels: [],
      datasets: []
    }, d = {};
    return y.map((u, v) => {
      var t = C(d, u[r], e);
      t.data.push({
        x: u[l],
        y: u[c],
        r: u[a]
      });
    }), Object.values(d).map((u) => {
      b.datasets.push(u);
    }), b;
  };
}, N = (e) => {
  const { x: l, y: c, r: a } = g(e);
  return (r) => {
    var y = {
      labels: [],
      datasets: []
    }, b = {};
    for (var d in r) {
      var u = C(b, d, e), v = r[d];
      u.data.push({
        x: v[l],
        y: v[c],
        r: v[a]
      });
    }
    return Object.values(b).map((t) => {
      y.datasets.push(t);
    }), y;
  };
}, B = (e, l, c, a) => {
  const { x: r, y, r: b } = g(l);
  var d = {};
  return c.map((u) => {
    var { index: v, datasetIndex: t } = u, h = e.datasets[t], K = h.label, x = h.data[v];
    d[K] = {
      [r]: x.x,
      [y]: x.y,
      [b]: x.r
    };
  }), d;
}, I = {
  default: M,
  object: N,
  noop: D
};
export {
  I as default,
  B as getPointData
};
