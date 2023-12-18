var A = Object.defineProperty;
var d = (s, t, e) => t in s ? A(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var o = (s, t, e) => (d(s, typeof t != "symbol" ? t + "" : t, e), e);
import { getValueByKey as i, setValueByKey as f } from "../../form/FormUtil.js";
class k {
  constructor(t, e) {
    o(this, "props");
    o(this, "formDataRef");
    o(this, "getFieldData", (t, e) => {
      var u, n;
      const r = this.props;
      if (r.multiple)
        return i(r.attribute, t);
      if (r.idAttribute)
        return i(this.props.attribute, t);
      {
        const p = r.attribute, l = r.displayAttribute, c = {}, a = i(p, t);
        if (a == null)
          return;
        const b = i(l, t), m = ((u = r.lookupOptions) == null ? void 0 : u.idAttribute) || "id", y = ((n = r.lookupOptions) == null ? void 0 : n.titleAttribute) || "name";
        return f(m, c, a), f(y, c, b), c;
      }
    });
    o(this, "format", (t) => {
      var p, l;
      const e = this.props;
      if (e.multiple)
        return console.log(t), t;
      const r = ((p = e.lookupOptions) == null ? void 0 : p.idAttribute) || "id", u = ((l = e.lookupOptions) == null ? void 0 : l.titleAttribute) || "name";
      return i(r, t) != null && f(e.displayAttribute, this.formDataRef.current, i(u, t)), i(r, t);
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
