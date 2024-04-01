function c(e) {
  const r = (e == null ? void 0 : e.xKey) || "name", a = (e == null ? void 0 : e.yKey) || "value", y = a instanceof Array ? a : [a];
  return {
    xKey: r,
    yKeys: y
  };
}
function u(e) {
  const r = (e == null ? void 0 : e.xLabel) || (e == null ? void 0 : e.xKey) || "name", a = (e == null ? void 0 : e.yLabel) || (e == null ? void 0 : e.yKey) || "value", y = a instanceof Array || typeof a == "object" ? a : [a];
  return {
    xLabel: r,
    yLabels: y
  };
}
const K = (e, r, a) => e instanceof Array ? e[a] || r : e[r] || r;
export {
  c as getKeys,
  K as getLabel,
  u as getLabels
};
