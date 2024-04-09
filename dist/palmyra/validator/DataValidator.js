import { v as a } from "../../chunks/index.js";
const y = (e) => /^(?:[A-Za-z]:\/)?[\w\/]+\w+$/.test(e), P = (e) => /^(102[4-9]|10[3-9]\d|1[1-9]\d{2}|[2-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/.test(e), M = (e) => {
  let t = {};
  for (var s in e) {
    var u = e[s];
    const r = R(u);
    t[s] = r;
  }
  return t;
}, R = (e) => {
  var l, g;
  let t = [], s = e.required;
  if (e.required == !0 && F(e)) {
    var u = ((l = e.errorMessage) == null ? void 0 : l.required) || "This field is mandatory";
    t.push(d(V, u));
  }
  if (e.length) {
    var r = e.length.message || "Invalid size";
    t.push(d(S(e), r));
  }
  if (e.validationRule) {
    var n = e.validationRule;
    if (n instanceof Array && n.length > 0) {
      const c = n[0];
      t.push(w(e, c == "OR"));
    } else {
      var i = h(e, n), o = ((g = e.errorMessage) == null ? void 0 : g.rule) || "Invalid";
      t.push(d(i, o));
    }
  }
  return (c) => {
    if (!s && v(c))
      return { status: !0, message: "" };
    for (var m of t) {
      const p = m.call(null, c);
      if (!p.status)
        return p;
    }
    return { status: !0, message: "" };
  };
}, w = (e, t) => {
  var s = [], u = e.validationRule;
  return u instanceof Array && u.map((r, n) => {
    var l;
    if (!(t && n == 0)) {
      var i = h(e, r), o = ((l = e.errorMessage) == null ? void 0 : l[r]) || "Invalid";
      s.push(d(i, o));
    }
  }), t ? (r) => {
    if (s.length > 0) {
      var n = "";
      for (var i of s) {
        const o = i.call(null, r);
        if (o.status)
          return o;
        n = o.message;
      }
      return { status: !1, message: n };
    }
  } : (r) => {
    for (var n of s) {
      const i = n.call(null, r);
      if (!i.status)
        return i;
    }
    return { status: !0, message: "" };
  };
}, S = (e) => {
  if (e.length) {
    const t = e.length.is, s = e.length.min, u = e.length.max;
    if (t)
      return (r) => r.length == t;
    if (s)
      return u ? (r) => {
        const n = r.length;
        return s <= n && n <= u;
      } : (r) => s <= r.length;
    if (u)
      return (r) => r.length <= u;
  }
}, h = (e, t) => {
  if (t)
    switch (t) {
      case "string":
        return f;
      case "alphabets":
        return a.isAlpha;
      case "date":
        return a.isDate;
      case "time":
        return a.isTime;
      case "number":
        return q;
      case "email":
        return a.isEmail;
      case "mobilePhone":
        return a.isMobilePhone;
      case "port":
        return a.isPort;
      case "ip":
        return a.isIP;
      case "fqdn":
        return a.isFQDN;
      case "folder":
        return y;
      case "portrange":
        return P;
      case "password":
        return a.isStrongPassword;
      case "oneLowerCase":
        return C;
      case "oneUpperCase":
        return b;
      case "oneSpecialChar":
        return x;
      case "float":
        return A;
    }
  return f;
}, f = () => !0, C = (e) => /^(.*[a-z].*)$/.test(e), b = (e) => /^(.*[A-Z].*)$/.test(e), x = (e) => /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(e), v = (e) => e == null || e == null ? !0 : typeof e == "number" ? !1 : typeof e == "string" ? a.isEmpty(e) : e instanceof Array ? e.length == 0 : !e, V = (e) => !v(e);
function d(e, t) {
  return (s) => e.call(null, s) ? { status: !0, message: "" } : { status: !1, message: t };
}
const q = (e) => {
  const t = typeof e == "number" ? e.toString() : e;
  return a.isNumeric(t);
}, A = (e) => {
  const t = typeof e == "number" ? e.toString() : e;
  return a.isFloat(t);
};
function F(e) {
  switch (e.type) {
    case "switch":
      return !1;
    default:
      return !0;
  }
}
export {
  R as default,
  M as getValidators
};
