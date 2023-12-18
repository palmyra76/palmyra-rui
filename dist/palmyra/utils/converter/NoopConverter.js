var n = Object.defineProperty;
var a = (t, e, r) => e in t ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var o = (t, e, r) => (a(t, typeof e != "symbol" ? e + "" : e, r), r);
import { getValueByKey as u } from "../../form/FormUtil.js";
class l {
  constructor() {
    o(this, "getFieldData", (e, r) => u(r.attribute, e));
    o(this, "format", (e) => e);
    o(this, "parse", (e) => e);
    o(this, "convert", (e) => e);
    o(this, "getDefaultValue", (e) => e || "");
  }
}
const c = new l();
export {
  c as noopConverter
};
