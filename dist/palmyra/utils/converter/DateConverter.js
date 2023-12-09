var i = Object.defineProperty;
var s = (e, r, t) => r in e ? i(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var n = (e, r, t) => (s(e, typeof r != "symbol" ? r + "" : r, t), t);
import a from "dayjs";
class p {
  constructor(r, t) {
    n(this, "pattern");
    this.pattern = r.serverPattern || r.displayPattern || t;
  }
  format(r) {
    return r && a(r).format(this.pattern);
  }
  parse(r) {
    return r instanceof Date ? r : r && a(r, this.pattern).toDate();
  }
}
export {
  p as DateTimeConverter
};
