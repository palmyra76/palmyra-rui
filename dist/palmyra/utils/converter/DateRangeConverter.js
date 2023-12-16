var l = Object.defineProperty;
var m = (e, t, r) => t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var n = (e, t, r) => (m(e, typeof t != "symbol" ? t + "" : t, r), r);
import f from "dayjs";
function a(e) {
  return e ? f(e).isValid() : !1;
}
class h {
  constructor(t, r) {
    n(this, "pattern");
    this.pattern = t.serverPattern || t.displayPattern || r;
  }
  format(t) {
    if (t)
      return a(t.from) ? a(t.to) ? this._formatDate(t.from) + "..." + this._formatDate(t.to) : ">" + this._formatDate(t.from) : a(t.to) ? "<" + this._formatDate(t.to) : void 0;
  }
  _formatDate(t) {
    return f(t).format(this.pattern);
  }
  parse(t) {
    var r, s;
    if (t && typeof t == "string") {
      const o = t.charAt(0);
      if (o == ">")
        r = this._parseDate(t.slice(1));
      else if (o == "<")
        s = this._parseDate(t.slice(1));
      else {
        const i = t.split("...");
        r = this._parseDate(i[0]), i[1] && (s = this._parseDate(i[1]));
      }
    }
    return { from: r, to: s };
  }
  _parseDate(t) {
    if (t)
      return f(t, this.pattern).toDate();
  }
}
export {
  h as DateRangeConverter
};
