import C, { getRandomNumber as s } from "../colors/GenerateColors.js";
const o = (e) => (t) => t;
function j(e, t, r) {
  var a = Math.round(s(2, 10)), l = C(a);
  r.backgroundColor = l[0], r.borderColor = l[a - 1];
}
function K(e, t, r) {
  var a = e[t];
  return a || (a = {
    key: t,
    label: t,
    data: []
  }, j(r, t, a), e[t] = a, a);
}
function n(e) {
  const t = (e == null ? void 0 : e.xLabel) || "name", r = (e == null ? void 0 : e.xKey) || "x", a = (e == null ? void 0 : e.yKey) || "y", l = (e == null ? void 0 : e.rKey) || "r";
  return a instanceof Array && console.error("BubbleChart: yKey should be string only, not an array " + e.yKey), {
    x: r,
    y: a,
    r: l,
    label: t
  };
}
const A = (e) => {
  const { x: t, y: r, r: a, label: l } = n(e);
  return (v) => {
    var c = {
      labels: [],
      datasets: []
    }, y = {};
    return v.map((u, b) => {
      var d = K(y, u[l], e);
      d.data.push({
        x: u[t],
        y: u[r],
        r: u[a]
      });
    }), Object.values(y).map((u) => {
      c.datasets.push(u);
    }), c;
  };
}, D = (e) => {
  const { x: t, y: r, r: a } = n(e);
  return (l) => {
    var v = {
      labels: [],
      datasets: []
    }, c = {};
    for (var y in l) {
      var u = K(c, y, e), b = l[y];
      u.data.push({
        x: b[t],
        y: b[r],
        r: b[a]
      });
    }
    return Object.values(c).map((d) => {
      v.datasets.push(d);
    }), v;
  };
}, M = (e, t, r, a) => {
  const { x: l, y: v, r: c } = n(t);
  var y = {};
  return r.map((u) => {
    var { index: b, datasetIndex: d } = u, g = e.datasets[d], h = g.label, x = g.data[b];
    y[h] = {
      [l]: x.x,
      [v]: x.y,
      [c]: x.r
    };
  }), y;
}, N = {
  default: A,
  object: D,
  noop: o
};
export {
  N as default,
  M as getPointData
};
