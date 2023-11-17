import { jsx as a, Fragment as u } from "react/jsx-runtime";
import { forwardRef as F, useImperativeHandle as f } from "react";
import { b as h, d as v } from "../../PalmyraFormManager-389e1592.js";
import { StoreFactoryContext as C, FieldManagerContext as y } from "../layout/flexiLayout/FlexiLayoutContext.js";
const z = F(function(e, m) {
  const r = e.customizer || h, o = e.formData, n = e.onValidChange, i = e.mode;
  var t = r.getFormHelper();
  const s = r.getOnChangeListeners(t), l = r.getValueListeners(t);
  var { getFieldManager: d, getFormData: c, isFormValid: g } = v(o, n, i, t, { changeListeners: s, valueListeners: l });
  return f(m, () => ({
    getData() {
      return c();
    },
    isValid() {
      return g();
    }
  }), [o, n, i]), /* @__PURE__ */ a(u, { children: /* @__PURE__ */ a(C.Provider, { value: e.storeFactory, children: /* @__PURE__ */ a(y.Provider, { value: d, children: e.children }) }) });
});
export {
  z as PalmyraForm
};
