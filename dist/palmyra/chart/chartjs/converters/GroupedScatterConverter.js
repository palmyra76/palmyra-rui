import { NoopConverter as s } from "./ScaleConverter.js";
function f(r) {
  const e = (r == null ? void 0 : r.xLabel) || "name", y = (r == null ? void 0 : r.xKey) || "x", a = (r == null ? void 0 : r.yKey) || "y";
  return a instanceof Array && console.error("ScatterChart: yKey should be string only, not an array " + r.yKey), {
    x: y,
    y: a,
    label: e
  };
}
const v = (r) => {
  const { x: e, y } = f(r);
  return (a) => {
    var n = {
      datasets: []
    }, u = {};
    const c = r.group;
    return a.map((t, d) => {
      const l = t[c];
      var x = K(u, l);
      x.data.push({
        x: t[e],
        y: t[y]
      });
    }), Object.values(u).map((t) => {
      n.datasets.push(t);
    }), n;
  };
}, m = {
  Array: v,
  noop: s
};
function K(r, e, y) {
  var a = r[e];
  return a || (a = {
    key: e,
    label: e,
    data: []
  }, r[e] = a, a);
}
export {
  m as default
};
