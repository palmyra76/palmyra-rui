var s = Object.defineProperty;
var i = (e, r, t) => r in e ? s(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var a = (e, r, t) => (i(e, typeof r != "symbol" ? r + "" : r, t), t);
import n from "dayjs";
class P {
  constructor(r, t) {
    a(this, "serverPattern");
    a(this, "displayPattern");
    this.serverPattern = r.serverPattern || r.displayPattern || t, this.displayPattern = r.displayPattern;
  }
  format(r) {
    return r && n(r).format(this.serverPattern);
  }
  parse(r) {
    return r instanceof Date ? r : r && n(r, this.serverPattern).toDate();
  }
  convert(r) {
    const t = this.parse(r);
    return t && t instanceof Date && this.displayPattern ? n(t).format(this.displayPattern) : r;
  }
}
export {
  P as DateTimeConverter
};
