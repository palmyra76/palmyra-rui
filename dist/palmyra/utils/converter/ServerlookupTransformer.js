var A = Object.defineProperty;
var m = (p, t, e) => t in p ? A(p, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : p[t] = e;
var s = (p, t, e) => (m(p, typeof t != "symbol" ? t + "" : t, e), e);
import { getValueByKey as n, setValueByKey as f } from "../../form/FormUtil.js";
class k {
  constructor(t, e) {
    s(this, "props");
    s(this, "formDataRef");
    s(this, "getRawdata", (t, e) => {
      var u;
      const r = e, l = ((u = r == null ? void 0 : r.lookupOptions) == null ? void 0 : u.idAttribute) || "id", i = n(e.attribute, t);
      return i instanceof Array ? i : i instanceof Object ? i == null ? void 0 : i[l] : i;
    });
    s(this, "getFieldData", (t, e) => {
      var u, a;
      const r = this.props;
      if (r.multiple)
        return n(r.attribute, t);
      const l = ((u = r.lookupOptions) == null ? void 0 : u.idAttribute) || "id", i = ((a = r.lookupOptions) == null ? void 0 : a.displayAttribute) || "name";
      if (r.displayAttribute) {
        const o = r.attribute, y = r.displayAttribute, c = {}, b = n(o, t);
        if (b == null)
          return;
        const d = n(y, t);
        return f(l, c, b), f(i, c, d), c;
      } else {
        const o = n(this.props.attribute, t);
        return o != null && o[l] || o != null && o[i] ? o : void 0;
      }
    });
    s(this, "format", (t) => {
      var u, a;
      const e = this.props;
      if (e.multiple || e.displayAttribute == null || e.displayAttribute == null)
        return t;
      const r = ((u = e.lookupOptions) == null ? void 0 : u.idAttribute) || "id", l = ((a = e.lookupOptions) == null ? void 0 : a.displayAttribute) || "name";
      return n(r, t) != null && e.displayAttribute && f(e.displayAttribute, this.formDataRef.current, n(l, t)), n(r, t);
    });
    s(this, "parse", (t) => t);
    s(this, "convert", (t) => t);
    s(this, "getDefaultValue", (t) => this.props.multiple ? t || [] : t || null);
    this.props = t, this.formDataRef = e;
  }
}
export {
  k as ServerlookupTransformer
};
