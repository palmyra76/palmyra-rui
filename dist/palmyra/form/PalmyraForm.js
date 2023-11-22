import { jsx as o, Fragment as F } from "react/jsx-runtime";
import { forwardRef as g, useImperativeHandle as f } from "react";
import { b as v, d as h } from "../../assets/PalmyraFormManager.js";
import { StoreFactoryContext as C, FieldManagerContext as y } from "../layout/flexiLayout/FlexiLayoutContext.js";
const z = g(function(e, m) {
  const r = e.customizer || v, a = e.formData, n = e.onValidChange, i = e.mode;
  var t = r.getFormHelper();
  const s = r.getEventListeners(t), l = r.getValueListeners(t);
  var { getFieldManager: d, getFormData: c, isFormValid: u } = h(
    a,
    n,
    i,
    t,
    { eventListeners: s, valueListeners: l }
  );
  return f(m, () => ({
    getData() {
      return c();
    },
    isValid() {
      return u();
    }
  }), [a, n, i]), /* @__PURE__ */ o(F, { children: /* @__PURE__ */ o(C.Provider, { value: e.storeFactory, children: /* @__PURE__ */ o(y.Provider, { value: d, children: e.children }) }) });
});
export {
  z as PalmyraForm
};
