import { getValueByKey as V } from "./FormUtil.js";
import w from "../validator/DataValidator.js";
import { getEventListeners as M } from "./PalmyraFieldManager.js";
import { mergeDeep as n } from "../utils/index.js";
import { useRef as f, useMemo as h } from "react";
import { getLookupStore as A } from "./PalmyraStoreManager.js";
function P(r, s, m) {
  var D = {}, b = {};
  const c = f(!1);
  var e = f(n({}, r));
  const d = s;
  var y = f({}), u = y.current, R = {};
  (() => m && m == "new")() && n(e.current, R);
  const k = (o, i) => {
    u = Object.assign({}, u, i), n(e.current, o);
    const a = p(u);
    a != c.current && (c.current = a, d && d(a));
  }, p = (o) => {
    for (var i in o)
      if (o[i] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: h(() => (e.current = n({}, r), (i, a) => {
    var v, F;
    var t = { ...i, type: a };
    const g = w(t);
    D[t.attribute] = t, b[t.attribute] = g;
    var l = M(
      t,
      V(t.attribute, e.current),
      k,
      g,
      void 0
    );
    if (C(t) && (l.store = A(t)), t.type == "serverlookup") {
      var O = ((v = t.lookupOptions) == null ? void 0 : v.titleAttribute) || ((F = t.lookupOptions) == null ? void 0 : F.idAttribute);
      l.displayValue = V(O, r);
    }
    return l;
  }), [r]), getFormData: () => n({}, e.current), initForm: () => {
    console.log("Form Initialization");
  }, isFormValid: () => p(u) };
}
function C(r) {
  var s;
  return !!((s = r.storeOptions) != null && s.endPoint);
}
export {
  P as createFormData
};
