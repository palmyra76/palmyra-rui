var s = Object.defineProperty;
var u = (e, t, r) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var a = (e, t, r) => (u(e, typeof t != "symbol" ? t + "" : t, r), r);
import n from "dayjs";
import { getValueByKey as i } from "../../form/FormUtil.js";
class P {
  constructor(t, r) {
    a(this, "serverPattern");
    a(this, "displayPattern");
    a(this, "getFieldData", (t, r) => i(r.attribute, t));
    a(this, "getRawdata", (t, r) => i(r.attribute, t));
    a(this, "getDefaultValue", (t) => t || "");
    this.serverPattern = t.serverPattern || t.displayPattern || r, this.displayPattern = t.displayPattern;
  }
  format(t) {
    return t && n(t).format(this.serverPattern);
  }
  parse(t) {
    return t instanceof Date ? t : t && n(t, this.serverPattern).toDate();
  }
  convert(t) {
    const r = this.parse(t);
    return r && r instanceof Date && this.displayPattern ? n(r).format(this.displayPattern) : t;
  }
}
export {
  P as DateTimeConverter
};
