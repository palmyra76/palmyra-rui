var A = Object.defineProperty;
var d = (s, t, e) => t in s ? A(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var i = (s, t, e) => (d(s, typeof t != "symbol" ? t + "" : t, e), e);
import { getValueByKey as o, setValueByKey as c } from "../../form/FormUtil.js";
class g {
  constructor(t, e) {
    i(this, "props");
    i(this, "formDataRef");
    i(this, "getRawdata", (t, e) => o(e.attribute, t));
    i(this, "getFieldData", (t, e) => {
      var u, n;
      const r = this.props;
      if (r.multiple)
        return o(r.attribute, t);
      if (r.idAttribute)
        return o(this.props.attribute, t);
      {
        const p = r.attribute, l = r.displayAttribute, a = {}, f = o(p, t);
        if (f == null)
          return;
        const b = o(l, t), m = ((u = r.lookupOptions) == null ? void 0 : u.idAttribute) || "id", y = ((n = r.lookupOptions) == null ? void 0 : n.titleAttribute) || "name";
        return c(m, a, f), c(y, a, b), a;
      }
    });
    i(this, "format", (t) => {
      var p, l;
      const e = this.props;
      if (e.multiple)
        return console.log(t), t;
      const r = ((p = e.lookupOptions) == null ? void 0 : p.idAttribute) || "id", u = ((l = e.lookupOptions) == null ? void 0 : l.titleAttribute) || "name";
      return o(r, t) != null && c(e.displayAttribute, this.formDataRef.current, o(u, t)), o(r, t);
    });
    i(this, "parse", (t) => t);
    i(this, "convert", (t) => t);
    i(this, "getDefaultValue", (t) => this.props.multiple ? t || [] : t || null);
    this.props = t, this.formDataRef = e;
  }
}
export {
  g as ServerlookupTransformer
};
