import { createFormData as l } from "./PalmyraFormManager.js";
import { jsx as o, Fragment as c } from "react/jsx-runtime";
import { forwardRef as f, useImperativeHandle as g } from "react";
import { FieldManagerContext as F } from "../layout/flexiLayout/FlexiLayoutContext.js";
const V = f(function(r, n) {
  const a = r.formData, e = r.onValidChange, t = r.mode;
  var { getFieldManager: m, getFormData: i, isFormValid: d } = l(a, e, t);
  return g(n, () => ({
    getData() {
      return i();
    },
    isValid() {
      return d();
    }
  }), [a, e, t]), /* @__PURE__ */ o(c, { children: /* @__PURE__ */ o(F.Provider, { value: m, children: r.children }) });
});
export {
  V as PalmyraForm
};
