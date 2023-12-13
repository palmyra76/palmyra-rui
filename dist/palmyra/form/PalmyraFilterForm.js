import { jsx as t, Fragment as d } from "react/jsx-runtime";
import { forwardRef as F, useImperativeHandle as u } from "react";
import { b as v } from "../../chunks/PalmyraFieldManager.js";
import { StoreFactoryContext as f, FormHelperContext as g, FieldManagerContext as h } from "../layout/flexiLayout/FlexiLayoutContext.js";
import { createFilterData as x } from "./PalmyraFilterManager.js";
const p = F(function(e, i) {
  const o = e.customizer || v, a = e.formData, n = e.mode;
  var r = o.getFormHelper();
  const m = o.getEventListeners(r), l = o.getValueListeners(r);
  var { getFieldManager: s, getFilterData: c } = x(
    a,
    r,
    { eventListeners: m, valueListeners: l }
  );
  return u(i, () => ({
    getFilterData() {
      return c();
    }
  }), [a, n]), /* @__PURE__ */ t(d, { children: /* @__PURE__ */ t(f.Provider, { value: e.storeFactory, children: /* @__PURE__ */ t(g.Provider, { value: r, children: /* @__PURE__ */ t(h.Provider, { value: s, children: e.children }) }) }) });
});
export {
  p as PalmyraFilterForm
};
