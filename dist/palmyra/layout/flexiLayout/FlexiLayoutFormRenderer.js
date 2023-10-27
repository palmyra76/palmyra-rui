import { jsx as r } from "react/jsx-runtime";
import { forwardRef as F, useImperativeHandle as g } from "react";
import w from "./TabRenderer.js";
import { createFormData as x } from "../../form/PalmyraFormManager.js";
const v = (t) => {
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
}, V = F(function(e, i) {
  var o;
  const a = e.data || {}, { layout: m } = e;
  var { getFieldManager: d, getFormData: c, isFormValid: u } = x(a, (o = e.callbacks) == null ? void 0 : o.onFormValidChange, v(e.mode));
  g(i, () => ({
    getData() {
      return c();
    },
    isValid() {
      return u();
    }
  }), []);
  const l = { getFieldManager: d, formData: a }, s = m.tabs;
  return /* @__PURE__ */ r("div", { children: s.map((n, f) => /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
    w,
    {
      layout: n,
      context: l
    }
  ) }, n.name + f)) });
});
export {
  V as default
};
