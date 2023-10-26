import { jsx as r } from "react/jsx-runtime";
import { forwardRef as x, useImperativeHandle as v } from "react";
import { useFormValidator as w } from "./FormValidator.js";
import F from "./TabRenderer.js";
const R = (t) => {
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
}, C = x(function(e, n) {
  const { layout: i } = e, { formData: o, onDataChange: m, validationRules: d, isValid: u } = w(e, R(e.mode));
  v(n, () => ({
    getData() {
      return o;
    },
    isValid() {
      return u;
    }
  }), []);
  var s = {
    data: o,
    onDataChange: m,
    rules: d
  };
  const f = { formContext: s }, l = i.tabs;
  return /* @__PURE__ */ r("div", { children: l.map((a, c) => /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
    F,
    {
      layout: a,
      context: f
    }
  ) }, a.name + c)) });
});
export {
  C as default
};
