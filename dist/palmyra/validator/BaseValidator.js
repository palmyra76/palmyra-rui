var i = Object.defineProperty;
var n = (e, r, t) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var u = (e, r, t) => (n(e, typeof r != "symbol" ? r + "" : r, t), t);
import { v as o } from "../../chunks/index.js";
class l {
  constructor() {
    u(this, "validate", (r) => {
      var s;
      r.required == !0 && a(r) && (s = r.errorMessage) != null && s.required;
    });
  }
}
const f = (e) => e == null || e == null ? !0 : typeof e == "number" ? !1 : typeof e == "string" ? o.isEmpty(e) : e instanceof Array ? e.length == 0 : !e, p = (e) => !f(e);
function y(e, r) {
  return (t) => e.call(null, t) ? { status: !0, message: "" } : { status: !1, message: r };
}
function a(e) {
  switch (e.type) {
    case "switch":
      return !1;
    default:
      return !0;
  }
}
export {
  l as BaseValidator,
  y as constructMethod,
  f as isEmpty,
  p as isNotEmpty,
  a as isRequiredSupported,
  o as validator
};
