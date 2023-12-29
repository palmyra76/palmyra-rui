const o = (e, t) => {
  if (!(t === void 0 || t == null)) {
    var r = e.indexOf(".");
    if (r < 0)
      return t[e];
    var s = e.substring(0, r), n = e.substring(r + 1);
    return o(n, t[s]);
  }
}, c = (e, t, r) => {
  var s = e.indexOf(".");
  if (s < 0) {
    t[e] = r;
    return;
  }
  var n = e.substring(0, s), u = e.substring(s + 1);
  return (t[n] === void 0 || t[n] == null) && (t[n] = {}), c(u, t[n], r);
}, K = (e, t) => {
  const r = o(e.attribute, t);
  return i(e, r);
}, i = (e, t) => {
  switch (e.type || "string") {
    case "date":
      return g(t);
    case "radio":
    case "select":
    case "checkbox":
    case "switch":
      return d(t, e);
    case "datetime":
      return a(t);
    case "serverlookup":
      return x(t);
    case "textarea":
      return l(t);
    case "password":
      return V(t);
    case "numbersOnly":
      return y(t);
    case "integer":
      return p(t);
    case "autoComplete":
      return b(t);
    default:
      return f(t);
  }
}, g = (e, t) => e, a = (e, t) => e, f = (e, t) => e instanceof Object ? JSON.stringify(e) : e, l = (e, t) => e, y = (e, t) => e, p = (e, t) => e, b = (e, t) => e, V = (e, t) => e, d = (e, t) => {
  var r = t.options;
  return r[e];
}, x = (e, t) => e;
export {
  i as formatValue,
  K as getDisplayValue,
  o as getValueByKey,
  c as setValueByKey
};
