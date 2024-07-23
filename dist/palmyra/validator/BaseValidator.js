var i = Object.defineProperty;
var u = (e, t, r) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var s = (e, t, r) => u(e, typeof t != "symbol" ? t + "" : t, r);
import { v as n } from "../../chunks/index.js";
class c {
  constructor() {
    s(this, "validate", (t) => {
      t.required == !0 && f(t) && t.missingMessage;
    });
  }
}
const o = (e) => e == null || e == null ? !0 : typeof e == "number" ? !1 : typeof e == "string" ? n.isEmpty(e) : e instanceof Array ? e.length == 0 : !e, l = (e) => !o(e);
function p(e, t) {
  return (r) => e.call(null, r) ? { status: !0, message: "" } : { status: !1, message: t };
}
function f(e) {
  switch (e.type) {
    case "switch":
      return !1;
    default:
      return !0;
  }
}
export {
  c as BaseValidator,
  p as constructMethod,
  o as isEmpty,
  l as isNotEmpty,
  f as isRequiredSupported,
  n as validator
};
