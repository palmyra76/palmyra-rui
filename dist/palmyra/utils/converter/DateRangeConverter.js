var n = Object.defineProperty;
var m = (e, r, t) => r in e ? n(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var f = (e, r, t) => (m(e, typeof r != "symbol" ? r + "" : r, t), t);
import a from "dayjs";
class D {
  constructor(r, t) {
    f(this, "pattern");
    this.pattern = r.serverPattern || r.displayPattern || t;
  }
  format(r) {
    if (r) {
      if (r.from)
        return r.to ? this._formatDate(r.from) + "..." + this._formatDate(r.to) : ">" + this._formatDate(r.from);
      if (r.to)
        return "<" + this._formatDate(r.to);
    }
    return r;
  }
  _formatDate(r) {
    return a(r).format(this.pattern);
  }
  parse(r) {
    var t, s;
    if (r && typeof r == "string") {
      const o = r.charAt(0);
      if (o == ">")
        t = this._parseDate(r.slice(1));
      else if (o == "<")
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
