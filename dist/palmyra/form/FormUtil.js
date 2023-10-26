const o = (e, t) => {
  if (!(t === void 0 || t == null)) {
    var r = e.indexOf(".");
    if (r < 0)
      return t[e];
    var s = e.substring(0, r), n = e.substring(r + 1);
    return o(n, t[s]);
  }
}, i = (e, t, r) => {
  var s = e.indexOf(".");
  if (s < 0) {
    t[e] = r;
    return;
  }
  var n = e.substring(0, s), u = e.substring(s + 1);
  return (t[n] === void 0 || t[n] == null) && (t[n] = {}), i(u, t[n], r);
}, b = (e, t) => {
  const r = o(e.attribute, t);
  return c(e, r);
}, c = (e, t) => {
  switch (e.type || "string") {
    case "date":
      return g(t);
    case "radio":
    case "select":
    case "checkbox":
      return p(t, e);
    case "datetime":
      return y(t);
    case "serverlookup":
      return a(t);
    case "textarea":
    default:
      return l(t);
  }
}, g = (e, t) => e, y = (e, t) => e, l = (e, t) => e, p = (e, t) => {
  var r = t.options;
  return r[e];
}, a = (e, t) => e;
export {
  c as formatValue,
  b as getDisplayValue,
  o as getValueByKey,
  i as setValueByKey
};