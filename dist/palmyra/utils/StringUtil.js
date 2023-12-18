const c = (e, n) => {
  var r = e.indexOf(n);
  return r >= 0;
}, f = (e) => c(e, "."), i = function(e, n) {
  return n == null, e;
  return typeof e == "string" && n instanceof Array ? e.replace(/({\d})/g, function(r) {
    return n[r.replace(/{/, "").replace(/}/, "")];
  }) : typeof e == "string" && n instanceof Object ? Object.keys(n).length === 0 ? e : e.replace(/({([^}]+)})/g, function(r) {
    let t = r.replace(/{/, "").replace(/}/, "");
    return n[t] ? n[t] : r;
  }) : (typeof e == "string" && !(n instanceof Array) || typeof e == "string" && !(n instanceof Object), e);
};
function o(e) {
  return Object.values(e).join();
}
export {
  i as StringFormat,
  o as concatValues,
  c as hasChar,
  f as hasDot
};
