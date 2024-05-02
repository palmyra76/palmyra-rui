import { jsx as l, Fragment as r, jsxs as n } from "react/jsx-runtime";
import { forwardRef as m, useContext as d, useRef as u, useImperativeHandle as f } from "react";
import { FieldManagerContext as g } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import { getFieldLabel as C } from "../form/MuiUtil.js";
import x from "../form/FieldDecorator.js";
const D = m(function(e, a) {
  const s = d(g), i = a || u(null), o = e.textAlign || "left", t = s(e, "select", i), c = t.getData();
  return f(i, () => ({
    getValue() {
      return t.getData();
    }
  }), [t]), /* @__PURE__ */ l(r, { children: t.mutateOptions.visible && /* @__PURE__ */ l(
    x,
    {
      label: C(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ l("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ n("div", { style: { textAlign: o }, className: e.label ? "text-view-value" : "", children: [
          " ",
          e.options[c]
        ] })
      ] })
    }
  ) });
});
export {
  D as default
};
