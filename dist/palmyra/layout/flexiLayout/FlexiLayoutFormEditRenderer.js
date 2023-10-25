import { jsx as t } from "react/jsx-runtime";
import { forwardRef as f, useImperativeHandle as x } from "react";
import { useFormValidator as p } from "./FormValidator.js";
import v from "./TabRenderer.js";
const h = f(function(r, o) {
  const { layout: n } = r, { data: e, onDataChange: i, validationRules: d, isValid: m } = p(r, "edit");
  x(o, () => ({
    getData() {
      return e.current;
    },
    isValid() {
      return m;
    }
  }), []);
  var u = {
    data: e.current,
    onDataChange: i,
    rules: d
  };
  const l = { formContext: u }, s = n.tabs;
  return /* @__PURE__ */ t("div", { children: s.map((a, c) => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
    v,
    {
      layout: a,
      context: l
    }
  ) }, a.name + c)) });
});
export {
  h as default
};
