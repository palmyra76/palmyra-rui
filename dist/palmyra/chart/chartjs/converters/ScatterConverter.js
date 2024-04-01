import { NoopConverter as x } from "./ScaleConverter.js";
function f(a) {
  const r = (a == null ? void 0 : a.xLabel) || "name", y = (a == null ? void 0 : a.xKey) || "x", e = (a == null ? void 0 : a.yKey) || "y";
  return e instanceof Array && console.error("ScatterChart: yKey should be string only, not an array " + a.yKey), {
    x: y,
    y: e,
    label: r
  };
}
const s = (a) => {
  const { x: r, y, label: e } = f(a);
  return (u) => {
    var l = {
      datasets: []
    }, n = {};
    return u.map((t, b) => {
      var c = v(n, t[e]);
      c.data.push({
        x: t[r],
        y: t[y]
      });
    }), Object.values(n).map((t) => {
      l.datasets.push(t);
    }), l;
  };
}, K = {
  default: s,
  noop: x
};
function v(a, r, y) {
  var e = a[r];
  return e || (e = {
    label: r,
    data: []
  }, a[r] = e, e);
}
export {
  K as default
};
