import { NoopConverter as n } from "./ScaleConverter.js";
function x(e) {
  const r = (e == null ? void 0 : e.xLabel) || "name", l = (e == null ? void 0 : e.xKey) || "x", a = (e == null ? void 0 : e.yKey) || "y";
  return a instanceof Array && console.error("ScatterChart: yKey should be string only, not an array " + e.yKey), {
    x: l,
    y: a,
    label: r
  };
}
const d = (e) => {
  const { x: r, y: l, label: a } = x(e);
  return (t) => {
    var c = {
      datasets: []
    }, y = {};
    return t.map((u, K) => {
      var b = g(y, u[a], e);
      b.data.push({
        x: u[r],
        y: u[l]
      });
    }), Object.values(y).map((u) => {
      c.datasets.push(u);
    }), console.log(c), c;
  };
}, f = {
  default: d,
  noop: n
};
function v(e, r, l) {
  var a, t;
  l.backgroundColor = ((t = (a = e == null ? void 0 : e.chart) == null ? void 0 : a[r]) == null ? void 0 : t.backgroundColor) || "blue";
}
function g(e, r, l) {
  var a = e[r];
  return a || (a = {
    label: r,
    data: []
  }, v(l, r, a), e[r] = a, a);
}
export {
  f as default
};
