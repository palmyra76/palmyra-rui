import { jsx as r, Fragment as v } from "react/jsx-runtime";
import { forwardRef as F, useImperativeHandle as g } from "react";
import { b as f, u as h } from "../../chunks/PalmyraFieldManager.js";
import { StoreFactoryContext as C, FormHelperContext as x, FieldManagerContext as y } from "../layout/flexiLayout/FlexiLayoutContext.js";
const z = F(function(e, m) {
  const o = e.customizer || f, a = e.formData, n = e.onValidChange, i = e.mode;
  var t = o.getFormHelper();
  const l = o.getEventListeners(t), d = o.getValueListeners(t);
  var { getFieldManager: s, getFormData: c, isFormValid: u } = h(
    a,
    n,
    i,
    t,
    { eventListeners: l, valueListeners: d }
  );
  return g(m, () => ({
    getData() {
      return c();
    },
    isValid() {
      return u();
    }
  }), [a, n, i]), /* @__PURE__ */ r(v, { children: /* @__PURE__ */ r(C.Provider, { value: e.storeFactory, children: /* @__PURE__ */ r(x.Provider, { value: t, children: /* @__PURE__ */ r(y.Provider, { value: s, children: /* @__PURE__ */ r("div", { children: e.children }) }) }) }) });
});
export {
  z as PalmyraForm
};
