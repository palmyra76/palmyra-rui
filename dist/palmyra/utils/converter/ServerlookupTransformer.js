var m = Object.defineProperty;
var A = (s, t, e) => t in s ? m(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var i = (s, t, e) => (A(s, typeof t != "symbol" ? t + "" : t, e), e);
import { getValueByKey as o, setValueByKey as c } from "../../form/FormUtil.js";
class k {
  constructor(t, e) {
    i(this, "props");
    i(this, "formDataRef");
    i(this, "getRawdata", (t, e) => o(e.attribute, t));
    i(this, "getFieldData", (t, e) => {
      var u, n;
      const r = this.props;
      if (r.multiple)
        return o(r.attribute, t);
      if (r.displayAttribute) {
        const p = r.attribute, l = r.displayAttribute, a = {}, b = o(p, t);
        if (b == null)
          return;
        const f = o(l, t), y = ((u = r.lookupOptions) == null ? void 0 : u.idAttribute) || "id", d = ((n = r.lookupOptions) == null ? void 0 : n.displayAttribute) || "name";
        return c(y, a, b), c(d, a, f), a;
      } else
        return o(this.props.attribute, t);
    });
    i(this, "format", (t) => {
      var p, l;
      const e = this.props;
      if (e.multiple)
        return t;
      const r = ((p = e.lookupOptions) == null ? void 0 : p.idAttribute) || "id", u = ((l = e.lookupOptions) == null ? void 0 : l.displayAttribute) || "name";
      return o(r, t) != null && e.displayAttribute && c(e.displayAttribute, this.formDataRef.current, o(u, t)), o(r, t);
    });
    i(this, "parse", (t) => t);
    i(this, "convert", (t) => t);
    i(this, "getDefaultValue", (t) => this.props.multiple ? t || [] : t || null);
    this.props = t, this.formDataRef = e;
  }
}
export {
  k as ServerlookupTransformer
};
