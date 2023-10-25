import { jsx as r } from "react/jsx-runtime";
import { forwardRef as f, useImperativeHandle as x } from "react";
import { useFormValidator as p } from "./FormValidator.js";
import v from "./TabRenderer.js";
const h = f(function(e, o) {
  const { layout: n } = e, { data: t, onDataChange: i, validationRules: d, isValid: m } = p(e, "new");
  x(o, () => ({
    getData() {
      return t.current;
    },
    isValid() {
      return m;
    }
  }), []);
  var u = {
    data: t.current,
    onDataChange: i,
    rules: d
  };
  const l = { formContext: u }, s = n.tabs;
  return /* @__PURE__ */ r("div", { children: s.map((a, c) => /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
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
