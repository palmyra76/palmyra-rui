var A = Object.defineProperty;
var m = (n, t, e) => t in n ? A(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var o = (n, t, e) => (m(n, typeof t != "symbol" ? t + "" : t, e), e);
import { getValueByKey as s, setValueByKey as c } from "../../form/FormUtil.js";
class k {
  constructor(t, e) {
    o(this, "props");
    o(this, "formDataRef");
    o(this, "getRawdata", (t, e) => {
      var u;
      const r = e, p = ((u = r == null ? void 0 : r.lookupOptions) == null ? void 0 : u.idAttribute) || "id", i = s(e.attribute, t);
      return i instanceof Array ? i : i instanceof Object ? i == null ? void 0 : i[p] : i;
    });
    o(this, "getFieldData", (t, e) => {
      var p, i;
      const r = this.props;
      if (r.multiple)
        return s(r.attribute, t);
      if (r.displayAttribute) {
        const u = r.attribute, l = r.displayAttribute, a = {}, b = s(u, t);
        if (b == null)
          return;
        const f = s(l, t), y = ((p = r.lookupOptions) == null ? void 0 : p.idAttribute) || "id", d = ((i = r.lookupOptions) == null ? void 0 : i.displayAttribute) || "name";
        return c(y, a, b), c(d, a, f), a;
      } else
        return s(this.props.attribute, t);
    });
    o(this, "format", (t) => {
      var u, l;
      const e = this.props;
      if (e.multiple || e.displayAttribute == null || e.displayAttribute == null)
        return t;
      const r = ((u = e.lookupOptions) == null ? void 0 : u.idAttribute) || "id", p = ((l = e.lookupOptions) == null ? void 0 : l.displayAttribute) || "name";
      return s(r, t) != null && e.displayAttribute && c(e.displayAttribute, this.formDataRef.current, s(p, t)), s(r, t);
    });
    o(this, "parse", (t) => t);
    o(this, "convert", (t) => t);
    o(this, "getDefaultValue", (t) => this.props.multiple ? t || [] : t || null);
    this.props = t, this.formDataRef = e;
  }
}
export {
  k as ServerlookupTransformer
};
