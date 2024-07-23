import { v as a } from "../../chunks/index.js";
const R = (e) => /^(?:[A-Za-z]:\/)?[\w\/]+\w+$/.test(e), F = (e) => /^(102[4-9]|10[3-9]\d|1[1-9]\d{2}|[2-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/.test(e), D = (e) => {
  let r = {};
  for (var t in e) {
    const s = e[t], n = P(s);
    r[t] = n;
  }
  return r;
}, P = (e) => {
  let r = [], t = e.required;
  if (e.required == !0 && z(e)) {
    var s = e.missingMessage || "This field is mandatory";
    r.push(o(q, s));
  }
  if (e.length) {
    var n = e.length.errorMessage || e.errorMessage.length || "Invalid size";
    r.push(o(E(e), n));
  }
  if (e.range) {
    var u = e.range.errorMessage || e.errorMessage.range || "Invalid range";
    r.push(o(S(e), u));
  }
  if (e.regExp) {
    var i = e.errorMessage.regExp || e.errorMessage || "Invalid data";
    r.push(o(C(e), i));
  }
  if (e.validFn) {
    var l = e.errorMessage.validFn || e.errorMessage || "Invalid data";
    r.push(o(b(e), l));
  }
  const c = e.validRule || e.regExp || e.validFn;
  if (c instanceof Array && c.length > 0) {
    const g = c[0];
    r.push(V(e, g == "OR"));
  } else {
    var M = h(e, c), f = e == null ? void 0 : e.validRule, x = w(e, f, "Invalid");
    r.push(o(M, x));
  }
  return (g) => {
    if (!t && v(g))
      return { status: !0, message: "" };
    for (var y of r) {
      const d = y.call(null, g);
      if (!d.status)
        return d;
    }
    return { status: !0, message: "" };
  };
}, w = (e, r, t) => {
  if (e != null && e.errorMessage) {
    if (typeof e.errorMessage == "string")
      return e.errorMessage;
    const s = e.errorMessage[r];
    if (s)
      return s;
  }
  return t;
}, V = (e, r) => {
  var t = [], s = e;
  return s instanceof Array && s.map((n, u) => {
    if (!(r && u == 0)) {
      var i = h(e, n), l = e.validRule, c = e.errorMessage || e.errorMessage[l] || "Invalid";
      t.push(o(i, c));
    }
  }), r ? (n) => {
    if (t.length > 0) {
      var u = "";
      for (var i of t) {
        const l = i.call(null, n);
        if (l.status)
          return l;
        u = l.message;
      }
      return { status: !1, message: u };
    }
  } : (n) => {
    for (var u of t) {
      const i = u.call(null, n);
      if (!i.status)
        return i;
    }
    return { status: !0, message: "" };
  };
}, E = (e) => {
  if (e.length) {
    const r = e.length.min, t = e.length.max;
    if (length)
      return (s) => s.length == length;
    if (r)
      return t ? (s) => {
        const n = s.length;
        return r <= n && n <= t;
      } : (s) => r <= s.length;
    if (t)
      return (s) => s.length <= t;
  }
}, S = (e) => {
  if (e.range) {
    const r = e.range.start, t = e.range.end;
    if (r)
      return t ? (s) => {
        const n = s;
        return r <= n && n <= t;
      } : (s) => r <= s;
    if (t)
      return (s) => s <= t;
  }
}, C = (e) => {
  const r = e.regExp;
  return (t) => r.test(t);
}, b = (e) => {
  const r = e.validFn;
  return (t) => r(t);
}, h = (e, r) => {
  if (r)
    switch (r) {
      case "string":
        return p;
      case "alphabets":
        return a.isAlpha;
      case "date":
        return a.isDate;
      case "time":
        return a.isTime;
      case "number":
        return $;
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
        return R;
      case "portrange":
        return F;
      case "password":
        return a.isStrongPassword;
      case "lowercase":
        return a.isLowercase;
      case "uppercase":
        return a.isUppercase;
      case "oneLowerCase":
        return I;
      case "oneUpperCase":
        return A;
      case "oneSpecialChar":
        return L;
      case "float":
        return N;
    }
  return p;
}, p = () => !0, I = (e) => /^(.*[a-z].*)$/.test(e), A = (e) => /^(.*[A-Z].*)$/.test(e), L = (e) => /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(e), v = (e) => e == null || e == null ? !0 : typeof e == "number" ? !1 : typeof e == "string" ? a.isEmpty(e) : e instanceof Array ? e.length == 0 : !e, q = (e) => !v(e);
function o(e, r) {
  return (t) => e.call(null, t) ? { status: !0, message: "" } : { status: !1, message: r };
}
const $ = (e) => {
  const r = typeof e == "number" ? e.toString() : e;
  return a.isNumeric(r);
}, N = (e) => {
  const r = typeof e == "number" ? e.toString() : e;
  return a.isFloat(r);
};
function z(e) {
  switch (e.type) {
    case "switch":
      return !1;
    default:
      return !0;
  }
}
export {
  P as default,
  D as getValidators
};
