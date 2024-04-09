var m = Object.defineProperty;
var u = (e, r, t) => r in e ? m(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var i = (e, r, t) => (u(e, typeof r != "symbol" ? r + "" : r, t), t);
import { getValueByKey as a } from "../../form/FormUtil.js";
class f {
  constructor(r) {
    i(this, "min", 0);
    i(this, "max", 100);
    i(this, "getFieldData", (r, t) => a(t.attribute, r));
    i(this, "getRawdata", (r, t) => a(t.attribute, r));
    i(this, "getDefaultValue", (r) => r || this.min + "..." + this.max);
    var t, s;
    this.min = ((t = r.fieldProps) == null ? void 0 : t.min) || this.min, this.max = ((s = r.fieldProps) == null ? void 0 : s.max) || this.max, console.log(this.min);
  }
  format(r) {
    if (r)
      return r[0] + "..." + r[1];
  }
  parse(r) {
    var t, s;
    if (r && typeof r == "string") {
      const n = r.split("...");
      t = this._parseNumber(n[0]), s = this._parseNumber(n[1]);
    }
    return [t, s];
  }
  _parseNumber(r) {
    if (r)
      return Number.parseInt(r);
  }
  convert(r) {
    return r;
  }
}
export {
  f as SliderRangeConverter
};
