var l = Object.defineProperty;
var m = (e, r, t) => r in e ? l(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var n = (e, r, t) => (m(e, typeof r != "symbol" ? r + "" : r, t), t);
import a from "dayjs";
function o(e) {
  return e ? a(e).isValid() : !1;
}
class D {
  constructor(r, t) {
    n(this, "pattern");
    this.pattern = r.serverPattern || r.displayPattern || t;
  }
  format(r) {
    if (r)
      return o(r.from) ? o(r.to) ? this._formatDate(r.from) + "..." + this._formatDate(r.to) : ">" + this._formatDate(r.from) : o(r.to) ? "<" + this._formatDate(r.to) : void 0;
  }
  _formatDate(r) {
    return a(r).format(this.pattern);
  }
  parse(r) {
    var t, s;
    if (r && typeof r == "string") {
      const f = r.charAt(0);
      if (f == ">")
        t = this._parseDate(r.slice(1));
      else if (f == "<")
        s = this._parseDate(r.slice(1));
      else {
        const i = r.split("...");
        t = this._parseDate(i[0]), i[1] && (s = this._parseDate(i[1]));
      }
    }
    return { from: t, to: s };
  }
  _parseDate(r) {
    if (r)
      return a(r, this.pattern).toDate();
  }
}
export {
  D as DateRangeConverter
};
