var s = Object.defineProperty;
var h = (t, e, n) => e in t ? s(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var i = (t, e, n) => (h(t, typeof e != "symbol" ? e + "" : e, n), n);
import { BaseValidator as g, constructMethod as d } from "./BaseValidator.js";
class v {
  constructor() {
    i(this, "validator", new g());
    i(this, "validate", (e) => {
      let n = [];
      if (this.validator.validate, e.length) {
        var r = e.length.message || "Invalid size";
        n.push(d(o(e), r));
      }
    });
  }
}
const o = (t) => {
  if (t.length) {
    const e = t.length.is, n = t.length.min, r = t.length.max;
    if (e)
      return (l) => l.length == e;
    if (n)
      return r ? (l) => {
        const a = l.length;
        return n <= a && a <= r;
      } : (l) => n <= l.length;
    if (r)
      return (l) => l.length <= r;
  }
};
export {
  v as default
};
