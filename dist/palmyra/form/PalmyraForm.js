import { jsx as o, Fragment as l } from "react/jsx-runtime";
import { forwardRef as c, useImperativeHandle as f } from "react";
import { createFormData as g } from "./PalmyraFormManager.js";
import { FieldManagerContext as F } from "../layout/flexiLayout/FlexiLayoutContext.js";
const V = c(function(r, n) {
  const a = r.formData, e = r.onValidChange, t = r.mode;
  var { getFieldManager: m, getFormData: i, isFormValid: d } = g(a, e, t);
  return f(n, () => ({
    getData() {
      return i();
    },
    isValid() {
      return d();
    }
  }), [a, e, t]), /* @__PURE__ */ o(l, { children: /* @__PURE__ */ o(F.Provider, { value: m, children: r.children }) });
});
export {
  V as PalmyraForm
};
