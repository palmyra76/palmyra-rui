var i = Object.defineProperty;
var s = (n, e, t) => e in n ? i(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var r = (n, e, t) => s(n, typeof e != "symbol" ? e + "" : e, t);
import { BaseValidator as h, constructMethod as g } from "./BaseValidator.js";
class c {
  constructor() {
    r(this, "validator", new h());
    r(this, "validate", (e) => {
      let t = [];
      if (this.validator.validate, e.length) {
        var l = e.length.errorMessage || "Invalid size";
        t.push(g(o(e), l));
      }
    });
  }
}
const o = (n) => {
  if (n.length) {
    const e = n.length.min, t = n.length.max;
    if (length)
      return (l) => l.length == length;
    if (e)
      return t ? (l) => {
        const a = l.length;
        return e <= a && a <= t;
      } : (l) => e <= l.length;
    if (t)
      return (l) => l.length <= t;
  }
};
export {
  c as default
};
