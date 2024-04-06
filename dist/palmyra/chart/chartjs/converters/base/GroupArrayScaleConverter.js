function K(a) {
  const e = (a == null ? void 0 : a.xLabel) || "name", u = (a == null ? void 0 : a.xKey) || "x", r = (a == null ? void 0 : a.yKey) || "y", l = a == null ? void 0 : a.group;
  return r instanceof Array && console.error("ScatterChart: yKey should be string only, not an array " + a.yKey), {
    x: u,
    y: r,
    group: l,
    label: e
  };
}
function f(a, e, u) {
  var r = a[e];
  return r || (r = {
    key: e,
    label: e,
    data: []
  }, a[e] = r, r);
}
const d = (a) => {
  const { x: e, y: u, group: r, label: l } = K(a);
  return (n) => {
    var y = {
      datasets: []
    }, c = {};
    const x = r ? (t) => t[r] : () => l;
    return n.map((t, v) => {
      const b = x(t);
      var g = f(c, b);
      g.data.push({
        x: t[e],
        y: t[u]
      });
    }), Object.values(c).map((t) => {
      y.datasets.push(t);
    }), y;
  };
};
export {
  d as GroupArrayScaleConverter
};
