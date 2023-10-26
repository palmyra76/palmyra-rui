var s = Object.defineProperty;
var i = (e, r, t) => r in e ? s(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var n = (e, r, t) => (i(e, typeof r != "symbol" ? r + "" : r, t), t);
import a from "dayjs";
class f {
  constructor(r, t) {
    n(this, "pattern");
    this.pattern = r.serverPattern || r.displayPattern || t;
  }
  format(r) {
    return r && a(r).format(this.pattern);
  }
  parse(r) {
    return r && a(r, this.pattern).toDate();
  }
}
export {
  f as DateTimeConverter
};
