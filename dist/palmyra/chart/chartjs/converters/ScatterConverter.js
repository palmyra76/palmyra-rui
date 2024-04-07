import { NoopConverter as x } from "./ScaleConverter.js";
function f(a) {
  const e = (a == null ? void 0 : a.xLabel) || "name", y = (a == null ? void 0 : a.xKey) || "x", r = (a == null ? void 0 : a.yKey) || "y";
  return r instanceof Array && console.error("ScatterChart: yKey should be string only, not an array " + a.yKey), {
    x: y,
    y: r,
    label: e
  };
}
const s = (a) => {
  const { x: e, y, label: r } = f(a);
  return (u) => {
    var n = {
      datasets: []
    }, l = {};
    return u.map((t, b) => {
      var c = v(l, t[r]);
      c.data.push({
        x: t[e],
        y: t[y]
      });
    }), Object.values(l).map((t) => {
      n.datasets.push(t);
    }), n;
  };
}, d = {
  Array: s,
  noop: x
  // "group": GroupedDataConverter
};
function v(a, e, y) {
  var r = a[e];
  return r || (r = {
    key: e,
    label: e,
    data: []
  }, a[e] = r, r);
}
export {
  d as default
};
