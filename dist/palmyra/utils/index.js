import { StringFormat as a, concatValues as l, hasChar as y, hasDot as p } from "./StringUtil.js";
function i(n) {
  return n && typeof n == "object" && !Array.isArray(n);
}
function t(n, ...r) {
  if (!r.length)
    return n;
  const e = r.shift();
  if (i(n) && i(e))
    for (const o in e)
      i(e[o]) ? (n[o] || Object.assign(n, { [o]: {} }), t(n[o], e[o])) : Object.assign(n, { [o]: e[o] });
  return t(n, ...r);
}
const c = (n) => {
  var r;
  return function(e) {
    clearTimeout(r), r = setTimeout(function() {
      e.apply(null);
    }, n || 0);
  };
}, s = c(300);
export {
  a as StringFormat,
  l as concatValues,
  s as delay,
  y as hasChar,
  p as hasDot,
  i as isObject,
  t as mergeDeep
};
