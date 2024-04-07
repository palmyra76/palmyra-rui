function K(a) {
  const r = (a == null ? void 0 : a.xLabel) || "name", t = (a == null ? void 0 : a.xKey) || "x", e = (a == null ? void 0 : a.yKey) || "y", l = a == null ? void 0 : a.group;
  return {
    x: t,
    y: e,
    group: l,
    label: r
  };
}
function d(a, r, t) {
  var e = a[r];
  return e || (e = {
    key: r,
    label: r,
    data: []
  }, a[r] = e, e);
}
const m = (a) => {
  const { x: r, y: t, group: e, label: l } = K(a);
  return (y) => {
    var c = {
      datasets: []
    }, x = {};
    const b = e ? (u) => u[e] : () => l;
    return y.map((u, f) => {
      const g = b(u);
      var v = d(x, g);
      v.data.push({
        x: u[r],
        y: u[t]
      });
    }), Object.values(x).map((u) => {
      c.datasets.push(u);
    }), c;
  };
};
export {
  m as GroupArrayScaleConverter
};
