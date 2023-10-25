const u = (t) => (a) => {
};
function y(t) {
  var n, o, s;
  const a = ((n = t.transformOptions) == null ? void 0 : n.xLabel) || "name", e = ((o = t.transformOptions) == null ? void 0 : o.xKey) || "x", r = ((s = t.transformOptions) == null ? void 0 : s.yKey) || "y";
  return r instanceof Array && console.error("ScatterChart: yKey should be string only, not an array " + t.transformOptions.yKey), {
    x: e,
    y: r,
    label: a
  };
}
const b = (t) => {
  const { x: a, y: e, label: r } = y(t);
  return (n) => {
    var o = {
      datasets: []
    }, s = {};
    return n.map((l, x) => {
      var c = i(s, l[r], t.transformOptions);
      c.data.push({
        x: l[a],
        y: l[e]
      });
    }), Object.values(s).map((l) => {
      o.datasets.push(l);
    }), console.log(o), o;
  };
}, f = {
  default: b,
  noop: u
};
function d(t, a, e) {
  var r, n;
  e.backgroundColor = ((n = (r = t == null ? void 0 : t.chart) == null ? void 0 : r[a]) == null ? void 0 : n.backgroundColor) || "blue";
}
function i(t, a, e) {
  var r = t[a];
  return r || (r = {
    label: a,
    data: []
  }, d(e, a, r), t[a] = r, r);
}
export {
  f as default
};
