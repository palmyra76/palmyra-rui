import j, { getRandomNumber as A } from "./colors/GenerateColors.js";
const D = (e) => (a) => a;
function L(e, a, u) {
  var d, b, c, l;
  var t = Math.round(A(2, 10)), r = j(t);
  u.backgroundColor = ((b = (d = e == null ? void 0 : e.chart) == null ? void 0 : d[a]) == null ? void 0 : b.backgroundColor) || r[0], u.borderColor = ((l = (c = e == null ? void 0 : e.chart) == null ? void 0 : c[a]) == null ? void 0 : l.borderColor) || r[t - 1];
}
function C(e, a, u) {
  var t = e[a];
  return t || (t = {
    label: a,
    data: []
  }, L(u, a, t), e[a] = t, t);
}
function g(e) {
  const a = (e == null ? void 0 : e.xLabel) || "name", u = (e == null ? void 0 : e.xKey) || "x", t = (e == null ? void 0 : e.yKey) || "y", r = (e == null ? void 0 : e.rKey) || "r";
  return t instanceof Array && console.error("BubbleChart: yKey should be string only, not an array " + e.yKey), {
    x: u,
    y: t,
    r,
    label: a
  };
}
const M = (e) => {
  const { x: a, y: u, r: t, label: r } = g(e);
  return (d) => {
    var b = {
      labels: [],
      datasets: []
    }, c = {};
    return d.map((l, y) => {
      var v = C(c, l[r], e);
      v.data.push({
        x: l[a],
        y: l[u],
        r: l[t]
      });
    }), Object.values(c).map((l) => {
      b.datasets.push(l);
    }), b;
  };
}, N = (e) => {
  const { x: a, y: u, r: t } = g(e);
  return (r) => {
    var d = {
      labels: [],
      datasets: []
    }, b = {};
    for (var c in r) {
      var l = C(b, c, e), y = r[c];
      l.data.push({
        x: y[a],
        y: y[u],
        r: y[t]
      });
    }
    return Object.values(b).map((v) => {
      d.datasets.push(v);
    }), d;
  };
}, B = (e, a, u, t) => {
  const { x: r, y: d, r: b } = g(a);
  var c = {};
  return u.map((l) => {
    var { index: y, datasetIndex: v } = l, h = e.datasets[v], K = h.label, x = h.data[y];
    c[K] = {
      [r]: x.x,
      [d]: x.y,
      [b]: x.r
    };
  }), c;
}, P = {
  default: M,
  object: N,
  noop: D
};
export {
  P as default,
  B as getPointData
};
