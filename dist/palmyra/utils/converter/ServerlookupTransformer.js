var m = Object.defineProperty;
var A = (p, t, e) => t in p ? m(p, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : p[t] = e;
var i = (p, t, e) => (A(p, typeof t != "symbol" ? t + "" : t, e), e);
import { getValueByKey as o, setValueByKey as c } from "../../form/FormUtil.js";
class k {
  constructor(t, e) {
    i(this, "props");
    i(this, "formDataRef");
    i(this, "getRawdata", (t, e) => {
      var u;
      const r = e, n = ((u = r == null ? void 0 : r.lookupOptions) == null ? void 0 : u.idAttribute) || "id", s = o(e.attribute, t);
      return s == null ? void 0 : s[n];
    });
    i(this, "getFieldData", (t, e) => {
      var n, s;
      const r = this.props;
      if (r.multiple)
        return o(r.attribute, t);
      if (r.displayAttribute) {
        const u = r.attribute, l = r.displayAttribute, a = {}, b = o(u, t);
        if (b == null)
          return;
        const y = o(l, t), f = ((n = r.lookupOptions) == null ? void 0 : n.idAttribute) || "id", d = ((s = r.lookupOptions) == null ? void 0 : s.displayAttribute) || "name";
        return c(f, a, b), c(d, a, y), a;
      } else
        return o(this.props.attribute, t);
    });
    i(this, "format", (t) => {
      var u, l;
      const e = this.props;
      if (e.multiple)
        return t;
      const r = ((u = e.lookupOptions) == null ? void 0 : u.idAttribute) || "id", n = ((l = e.lookupOptions) == null ? void 0 : l.displayAttribute) || "name";
      return o(r, t) != null && e.displayAttribute && c(e.displayAttribute, this.formDataRef.current, o(n, t)), o(r, t);
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
