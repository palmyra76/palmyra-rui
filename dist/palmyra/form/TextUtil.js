function i(r) {
  var e = /\s+(\w)?/gi;
  return typeof r != "string" ? r : r.trim().toLowerCase().replace(e, function(o, t) {
    return t.toUpperCase();
  });
}
function a(r) {
  var e = /\s+(\w)?/gi;
  return typeof r != "string" ? r : r.trim().replace(e, function(o, t) {
    return t.toUpperCase();
  });
}
export {
  a as camelCase,
  i as camelLowerCase
};
