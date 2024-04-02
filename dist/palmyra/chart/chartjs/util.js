function y(e) {
  console.log(e);
  const r = (e == null ? void 0 : e.xKey) || "name", a = (e == null ? void 0 : e.yKey) || "value", c = a instanceof Array ? a : [a];
  return {
    xKey: r,
    yKeys: c
  };
}
function l(e) {
  const r = (e == null ? void 0 : e.xLabel) || (e == null ? void 0 : e.xKey) || "name", a = (e == null ? void 0 : e.yLabel) || (e == null ? void 0 : e.yKey) || "value", c = a instanceof Array || typeof a == "object" ? a : [a];
  return {
    xLabel: r,
    yLabels: c
  };
}
const u = (e, r, a) => e instanceof Array ? e[a] || r : e[r] || r;
export {
  y as getKeys,
  u as getLabel,
  l as getLabels
};
