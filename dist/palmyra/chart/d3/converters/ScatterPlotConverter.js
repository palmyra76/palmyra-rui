const c = (s, n) => (e, u) => {
  const r = n;
  if (e == null)
    return e;
  const o = [];
  return e.map((t) => {
    o.push({
      x: t[r.xKey],
      y: t[r.yKey]
    });
  }), console.log(o), o;
};
export {
  c as ScatterPlotConverter
};
