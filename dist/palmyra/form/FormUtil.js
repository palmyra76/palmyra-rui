const o = (e, r) => {
  if (!(r === void 0 || r == null)) {
    var t = e.indexOf(".");
    if (t < 0)
      return r[e];
    var s = e.substring(0, t), n = e.substring(t + 1);
    return o(n, r[s]);
  }
}, c = (e, r, t) => {
  var s = e.indexOf(".");
  if (s < 0) {
    r[e] = t;
    return;
  }
  var n = e.substring(0, s), u = e.substring(s + 1);
  return (r[n] === void 0 || r[n] == null) && (r[n] = {}), c(u, r[n], t);
}, d = (e, r) => {
  const t = o(e.attribute, r);
  return i(e, t);
}, i = (e, r) => {
  switch (e.type || "string") {
    case "date":
      return g(r);
    case "radio":
    case "select":
    case "checkbox":
    case "switch":
      return V(r, e);
    case "datetime":
      return y(r);
    case "serverlookup":
      return x(r);
    case "textarea":
      return f(r);
    case "password":
      return p(r);
    case "numbersOnly":
      return b(r);
    case "integer":
      return l(r);
    default:
      return a(r);
  }
}, g = (e, r) => e, y = (e, r) => e, a = (e, r) => e instanceof Object ? JSON.stringify(e) : e, f = (e, r) => e, b = (e, r) => e, l = (e, r) => e, p = (e, r) => e, V = (e, r) => {
  var t = r.options;
  return t[e];
}, x = (e, r) => e;
export {
  i as formatValue,
  d as getDisplayValue,
  o as getValueByKey,
  c as setValueByKey
};
