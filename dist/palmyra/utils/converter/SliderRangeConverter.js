var m = Object.defineProperty;
var u = (e, r, t) => r in e ? m(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var i = (e, r, t) => u(e, typeof r != "symbol" ? r + "" : r, t);
import { getValueByKey as a } from "../../form/FormUtil.js";
class l {
  constructor(r) {
    i(this, "min", 0);
    i(this, "max", 100);
    i(this, "getFieldData", (r, t) => a(t.attribute, r));
    i(this, "getRawdata", (r, t) => a(t.attribute, r));
    i(this, "getDefaultValue", (r) => r || this.min + "..." + this.max);
    this.min = r.min || this.min, this.max = r.max || this.max, console.log(this.min);
  }
  format(r) {
    if (r)
      return r[0] + "..." + r[1];
  }
  parse(r) {
    var t, n;
    if (r && typeof r == "string") {
      const s = r.split("...");
      t = this._parseNumber(s[0]), n = this._parseNumber(s[1]);
    }
    return [t, n];
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
  l as SliderRangeConverter
};
