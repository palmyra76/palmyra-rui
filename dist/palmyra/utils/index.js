import { StringFormat as l, concatValues as p, hasChar as y, hasDot as h } from "./StringUtil.js";
function t(n) {
  return n && typeof n == "object" && !Array.isArray(n);
}
function c(n, ...e) {
  if (!e.length)
    return n;
  const r = e.shift();
  if (t(n) && t(r))
    for (const o in r)
      t(r[o]) ? (n[o] || Object.assign(n, { [o]: {} }), c(n[o], r[o])) : Object.assign(n, { [o]: r[o] });
  return c(n, ...e);
}
const s = (n) => {
  var e = {};
  return c(e, n), e;
}, i = (n) => {
  var e;
  return function(r) {
    clearTimeout(e), e = setTimeout(function() {
      r.apply(null);
    }, n || 0);
  };
}, f = i(300);
export {
  l as StringFormat,
  s as cloneDeep,
  p as concatValues,
  f as delay,
  i as delayGenerator,
  y as hasChar,
  h as hasDot,
  t as isObject,
  c as mergeDeep
};
