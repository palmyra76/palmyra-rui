import { NoopConverter as m } from "./ScaleConverter.js";
function v(a) {
  const t = (a == null ? void 0 : a.xLabel) || "name", n = (a == null ? void 0 : a.xKey) || "x", e = (a == null ? void 0 : a.yKey) || "y";
  return e instanceof Array && console.error("ScatterChart: yKey should be string only, not an array " + a.yKey), {
    x: n,
    y: e,
    label: t
  };
}
const b = (a) => {
  const { x: t, y: n, label: e } = v(a);
  return (x) => {
    var c = {
      datasets: []
    }, u = {};
    const s = a.metadata, f = s ? (r, l) => {
      s.map((y) => {
        r[y] = l[y];
      });
    } : (r, l) => {
    };
    return x.map((r, l) => {
      var y = K(u, r[e]);
      const d = {
        x: r[t],
        y: r[n]
      };
      f(d, r), y.data.push(d);
    }), Object.values(u).map((r) => {
      c.datasets.push(r);
    }), c;
  };
}, h = {
  Array: b,
  noop: m
  // "group": GroupedDataConverter
};
function K(a, t, n) {
  var e = a[t];
  return e || (e = {
    key: t,
    label: t,
    data: []
  }, a[t] = e, e);
}
export {
  h as default
};
