var u = Object.defineProperty;
var l = (t, e, r) => e in t ? u(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var s = (t, e, r) => (l(t, typeof e != "symbol" ? e + "" : e, r), r);
import f from "dayjs";
import { getValueByKey as m } from "../../form/FormUtil.js";
function o(t) {
  return t ? f(t).isValid() : !1;
}
class _ {
  constructor(e, r) {
    s(this, "serverPattern");
    s(this, "getFieldData", (e, r) => m(r.attribute, e));
    s(this, "getDefaultValue", (e) => e || "");
    this.serverPattern = e.serverPattern || e.displayPattern || r;
  }
  format(e) {
    if (e)
      return o(e.from) ? o(e.to) ? this._formatDate(e.from) + "..." + this._formatDate(e.to) : ">" + this._formatDate(e.from) : o(e.to) ? "<" + this._formatDate(e.to) : void 0;
  }
  _formatDate(e) {
    return f(e).format(this.serverPattern);
  }
  parse(e) {
    var r, i;
    if (e && typeof e == "string") {
      const n = e.charAt(0);
      if (n == ">")
        r = this._parseDate(e.slice(1));
      else if (n == "<")
        i = this._parseDate(e.slice(1));
      else {
        const a = e.split("...");
        r = this._parseDate(a[0]), a[1] && (i = this._parseDate(a[1]));
      }
    }
    return { from: r, to: i };
  }
  _parseDate(e) {
    if (e)
      return f(e, this.serverPattern).toDate();
  }
  convert(e) {
    return e;
  }
}
export {
  _ as DateRangeConverter
};
