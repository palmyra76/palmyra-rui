import { jsx as r } from "react/jsx-runtime";
import { forwardRef as F, useImperativeHandle as g } from "react";
import v from "./TabRenderer.js";
import { createFormData as x } from "../../form/PalmyraFormManager.js";
import { FieldManagerContext as w } from "./FlexiLayoutContext.js";
const h = (t) => {
  switch (t) {
    case "formEdit":
      return "edit";
    case "formNew":
      return "new";
    case "formView":
      return "view";
    default:
      return "edit";
  }
}, p = F(function(e, i) {
  var o;
  const a = e.data || {}, { layout: m } = e;
  var { getFieldManager: d, getFormData: c, isFormValid: l } = x(a, (o = e.callbacks) == null ? void 0 : o.onFormValidChange, h(e.mode));
  g(i, () => ({
    getData() {
      return c();
    },
    isValid() {
      return l();
    }
  }), []);
  const u = { formData: a }, s = m.tabs;
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(w.Provider, { value: d, children: s.map((n, f) => /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
    v,
    {
      layout: n,
      context: u
    }
  ) }, n.name + f)) }) });
});
export {
  p as default
};
