import { NoopConverter as x } from "./ScaleConverter.js";
function d(e) {
  const r = (e == null ? void 0 : e.xLabel) || "name", l = (e == null ? void 0 : e.xKey) || "x", a = (e == null ? void 0 : e.yKey) || "y";
  return a instanceof Array && console.error("ScatterChart: yKey should be string only, not an array " + e.yKey), {
    x: l,
    y: a,
    label: r
  };
}
const n = (e) => {
  const { x: r, y: l, label: a } = d(e);
  return (t) => {
    var y = {
      datasets: []
    }, c = {};
    return t.map((u, g) => {
      var b = K(c, u[a], e);
      b.data.push({
        x: u[r],
        y: u[l]
      });
    }), Object.values(c).map((u) => {
      y.datasets.push(u);
    }), y;
  };
}, f = {
  default: n,
  noop: x
};
function v(e, r, l) {
  var a, t;
  l.backgroundColor = ((t = (a = e == null ? void 0 : e.chart) == null ? void 0 : a[r]) == null ? void 0 : t.backgroundColor) || "blue";
}
function K(e, r, l) {
  var a = e[r];
  return a || (a = {
    label: r,
    data: []
  }, v(l, r, a), e[r] = a, a);
}
export {
  f as default
};
