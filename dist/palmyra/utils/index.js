import { StringFormat as u, concatValues as p, hasChar as y, hasDot as h, hasUnfilledParameter as m } from "./StringUtil.js";
function t(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function i(e, ...n) {
  if (!n.length)
    return e;
  const r = n.shift();
  if (t(e) && t(r))
    for (const o in r)
      t(r[o]) ? (e[o] || Object.assign(e, { [o]: {} }), i(e[o], r[o])) : Object.assign(e, { [o]: r[o] });
  return i(e, ...n);
}
const s = (e) => {
  var n = {};
  return i(n, e), n;
}, c = (e) => {
  var n;
  return function(r) {
    clearTimeout(n), n = setTimeout(function() {
      r.apply(null);
    }, e || 0);
  };
}, a = c(300);
export {
  u as StringFormat,
  s as cloneDeep,
  p as concatValues,
  a as delay,
  c as delayGenerator,
  y as hasChar,
  h as hasDot,
  m as hasUnfilledParameter,
  t as isObject,
  i as mergeDeep
};
