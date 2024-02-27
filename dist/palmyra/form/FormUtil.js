const u = (e, t) => {
  if (!(t === void 0 || t == null)) {
    var r = e.indexOf(".");
    if (r < 0)
      return t[e];
    var s = e.substring(0, r), n = e.substring(r + 1);
    return u(n, t[s]);
  }
}, i = (e, t, r) => {
  var s = e.indexOf(".");
  if (s < 0) {
    t[e] = r;
    return;
  }
  var n = e.substring(0, s), c = e.substring(s + 1);
  return (t[n] === void 0 || t[n] == null) && (t[n] = {}), i(c, t[n], r);
}, K = (e, t) => {
  const r = u(e.attribute, t);
  return g(e, r);
}, g = (e, t) => {
  switch (e.type || "string") {
    case "date":
      return a(t);
    case "radio":
    case "select":
    case "checkbox":
    case "iosswitch":
      return o(t, e);
    case "switch":
      return o(t, e);
    case "datetime":
      return y(t);
    case "serverlookup":
      return d(t);
    case "textarea":
      return p(t);
    case "password":
      return x(t);
    case "numbersOnly":
      return l(t);
    case "integer":
      return b(t);
    case "autoComplete":
      return V(t);
    default:
      return f(t);
  }
}, a = (e, t) => e, y = (e, t) => e, f = (e, t) => e instanceof Object ? JSON.stringify(e) : e, p = (e, t) => e, l = (e, t) => e, b = (e, t) => e, V = (e, t) => e, x = (e, t) => e, o = (e, t) => {
  var r = t.options;
  return r[e];
}, d = (e, t) => e;
export {
  g as formatValue,
  K as getDisplayValue,
  u as getValueByKey,
  i as setValueByKey
};
