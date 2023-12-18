var l = Object.defineProperty;
var m = (t, r, e) => r in t ? l(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var n = (t, r, e) => (m(t, typeof r != "symbol" ? r + "" : r, e), e);
import a from "dayjs";
function o(t) {
  return t ? a(t).isValid() : !1;
}
class h {
  constructor(r, e) {
    n(this, "serverPattern");
    this.serverPattern = r.serverPattern || r.displayPattern || e;
  }
  format(r) {
    if (r)
      return o(r.from) ? o(r.to) ? this._formatDate(r.from) + "..." + this._formatDate(r.to) : ">" + this._formatDate(r.from) : o(r.to) ? "<" + this._formatDate(r.to) : void 0;
  }
  _formatDate(r) {
    return a(r).format(this.serverPattern);
  }
  parse(r) {
    var e, s;
    if (r && typeof r == "string") {
      const f = r.charAt(0);
      if (f == ">")
        e = this._parseDate(r.slice(1));
      else if (f == "<")
        s = this._parseDate(r.slice(1));
      else {
        const i = r.split("...");
        e = this._parseDate(i[0]), i[1] && (s = this._parseDate(i[1]));
      }
    }
    return { from: e, to: s };
  }
  _parseDate(r) {
    if (r)
      return a(r, this.serverPattern).toDate();
  }
  convert(r) {
    return r;
  }
}
export {
  h as DateRangeConverter
};
