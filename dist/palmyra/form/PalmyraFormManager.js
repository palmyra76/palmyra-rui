import { getValueByKey as V } from "./FormUtil.js";
import O from "../validator/DataValidator.js";
import { getEventListeners as L } from "./PalmyraFieldManager.js";
import { mergeDeep as n } from "../utils/index.js";
import { useRef as c, useMemo as M } from "react";
import { getLookupStore as S } from "./PalmyraStoreManager.js";
function _(t, u, f) {
  var D = {}, b = {};
  const m = c(!1);
  var e = c(n({}, t));
  const g = u;
  var y = c({}), s = y.current, k = {};
  (() => f && f == "new")() && n(e.current, k);
  const R = (o, i) => {
    s = Object.assign({}, s, i), n(e.current, o);
    const a = p(s);
    a != m.current && (m.current = a, g && g(a));
  }, p = (o) => {
    for (var i in o)
      if (o[i] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: M(() => (e.current = n({}, t), (i, a) => {
    var v, F;
    var r = { ...i, type: a };
    const d = O(r);
    D[r.attribute] = r, b[r.attribute] = d;
    var l = L(
      r,
      V(r.attribute, e.current),
      R,
      d,
      void 0
    );
    try {
      A(r) && (l.store = S(r));
    } catch (w) {
      console.error("Error while getting LookupStore for attribute" + r.attribute, w);
    }
    if (r.type == "serverlookup") {
      var h = ((v = r.lookupOptions) == null ? void 0 : v.titleAttribute) || ((F = r.lookupOptions) == null ? void 0 : F.idAttribute);
      l.displayValue = V(h, t);
    }
    return l;
  }), [t]), getFormData: () => n({}, e.current), initForm: () => {
    console.log("Form Initialization");
  }, isFormValid: () => p(s) };
}
function A(t) {
  var u;
  return !!((u = t.storeOptions) != null && u.endPoint);
}
export {
  _ as createFormData
};
