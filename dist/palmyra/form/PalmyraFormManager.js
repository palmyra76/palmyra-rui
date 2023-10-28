import { getValueByKey as b } from "./FormUtil.js";
import w from "../validator/DataValidator.js";
import { getEventListeners as y } from "./PalmyraFieldManager.js";
import { mergeDeep as n } from "../utils/index.js";
import { useRef as l, useMemo as M } from "react";
import { getLookupStore as h } from "./PalmyraStoreManager.js";
function I(t, s, m) {
  var F = {}, p = {};
  const c = l(!1);
  var e = l(n({}, t));
  const f = s;
  var D = l({}), u = D.current, V = {};
  (() => m && m == "new")() && n(e.current, V);
  const R = (a, o) => {
    u = Object.assign({}, u, o), n(e.current, a);
    const i = d(u);
    i != c.current && (c.current = i, f && f(i));
  }, d = (a) => {
    for (var o in a)
      if (a[o] == !1)
        return !1;
    return !0;
  };
  return { getFieldManager: M(() => (e.current = n({}, t), (o, i) => {
    var r = { ...o, type: i };
    const g = w(r);
    F[r.attribute] = r, p[r.attribute] = g;
    var v = y(
      r,
      b(r.attribute, e.current),
      R,
      g,
      void 0
    );
    return C(r) && (v.store = h(r)), v;
  }), [t]), getFormData: () => n({}, e.current), initForm: () => {
    console.log("Form Initialization");
  }, isFormValid: () => d(u) };
}
function C(t) {
  var s;
  return !!((s = t.storeOptions) != null && s.endPoint);
}
export {
  I as createFormData
};
