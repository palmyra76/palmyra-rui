import { jsx as a, Fragment as r, jsxs as d } from "react/jsx-runtime";
import { forwardRef as m, useContext as u, useRef as f, useImperativeHandle as v } from "react";
import { FieldManagerContext as g } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import { getFieldLabel as x } from "../form/MuiUtil.js";
import C from "../form/FieldDecorator.js";
const L = m(function(e, l) {
  const n = u(g), i = l || f(null), s = e.textAlign || "left", o = e.variant || "standard", t = n(e, "select", i), c = t.getData();
  return v(i, () => ({
    getValue() {
      return t.getData();
    }
  }), [t]), /* @__PURE__ */ a(r, { children: t.mutateOptions.visible && /* @__PURE__ */ a(
    C,
    {
      label: x(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ d("div", { className: "text-view-field-container", children: [
        /* @__PURE__ */ a("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ a(
          "div",
          {
            style: { textAlign: s },
            className: e.label ? o === "outlined" ? "text-view-value-outlined" : "text-view-value" : "",
            children: e.options[c]
          }
        )
      ] })
    }
  ) });
});
export {
  L as default
};
