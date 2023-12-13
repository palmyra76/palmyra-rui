import { jsx as t, Fragment as F } from "react/jsx-runtime";
import { forwardRef as v, useImperativeHandle as g } from "react";
import { b as f, d as h } from "../../chunks/PalmyraFieldManager.js";
import { StoreFactoryContext as C, FormHelperContext as x, FieldManagerContext as y } from "../layout/flexiLayout/FlexiLayoutContext.js";
const z = v(function(e, m) {
  const o = e.customizer || f, a = e.formData, n = e.onValidChange, i = e.mode;
  var r = o.getFormHelper();
  const l = o.getEventListeners(r), d = o.getValueListeners(r);
  var { getFieldManager: s, getFormData: c, isFormValid: u } = h(
    a,
    n,
    i,
    r,
    { eventListeners: l, valueListeners: d }
  );
  return g(m, () => ({
    getData() {
      return c();
    },
    isValid() {
      return u();
    }
  }), [a, n, i]), /* @__PURE__ */ t(F, { children: /* @__PURE__ */ t(C.Provider, { value: e.storeFactory, children: /* @__PURE__ */ t(x.Provider, { value: r, children: /* @__PURE__ */ t(y.Provider, { value: s, children: e.children }) }) }) });
});
export {
  z as PalmyraForm
};
