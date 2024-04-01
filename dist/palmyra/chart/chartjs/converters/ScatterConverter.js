import { NoopConverter as x } from "./ScaleConverter.js";
function d(e) {
  const r = (e == null ? void 0 : e.xLabel) || "name", t = (e == null ? void 0 : e.xKey) || "x", a = (e == null ? void 0 : e.yKey) || "y";
  return a instanceof Array && console.error("ScatterChart: yKey should be string only, not an array " + e.yKey), {
    x: t,
    y: a,
    label: r
  };
}
const n = (e) => {
  const { x: r, y: t, label: a } = d(e);
  return (u) => {
    var y = {
      datasets: []
    }, c = {};
    return u.map((l, g) => {
      var b = K(c, l[a], e);
      b.data.push({
        x: l[r],
        y: l[t]
      });
    }), Object.values(c).map((l) => {
      y.datasets.push(l);
    }), y;
  };
}, f = {
  default: n,
  noop: x
};
function v(e, r, t) {
  var a, u;
  t.backgroundColor = ((u = (a = e == null ? void 0 : e.chart) == null ? void 0 : a[r]) == null ? void 0 : u.backgroundColor) || "blue";
}
function K(e, r, t) {
  var a = e[r];
  return a || (a = {
    label: r,
    data: []
  }, v(t, r, a), e[r] = a, a);
}
export {
  f as default
};
