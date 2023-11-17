import { jsx as e, Fragment as l } from "react/jsx-runtime";
import { forwardRef as c, useImperativeHandle as F } from "react";
import { createFormData as f } from "./PalmyraFormManager.js";
import { StoreFactoryContext as g, FieldManagerContext as u } from "../layout/flexiLayout/FlexiLayoutContext.js";
const C = c(function(r, n) {
  const a = r.formData, t = r.onValidChange, o = r.mode;
  var { getFieldManager: i, getFormData: m, isFormValid: d } = f(a, t, o);
  return F(n, () => ({
    getData() {
      return m();
    },
    isValid() {
      return d();
    }
  }), [a, t, o]), /* @__PURE__ */ e(l, { children: /* @__PURE__ */ e(g.Provider, { value: r.storeFactory, children: /* @__PURE__ */ e(u.Provider, { value: i, children: r.children }) }) });
});
export {
  C as PalmyraForm
};
