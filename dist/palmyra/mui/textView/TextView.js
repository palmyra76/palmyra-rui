import { jsx as t, Fragment as m, jsxs as u } from "react/jsx-runtime";
import { forwardRef as d, useContext as f, useRef as v } from "react";
import { FieldManagerContext as x } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import b from "../form/FieldDecorator.js";
import { copyMuiOptions as g, getFieldLabel as C } from "../form/MuiUtil.js";
const D = d(function(e, a) {
  const s = f(x), c = a || v(null), i = s(e, "string", c), { mutateOptions: o } = i, l = i.getData(), r = e.textAlign || "left";
  var n = g(e, l, e.label);
  return /* @__PURE__ */ t(m, { children: o.visible && /* @__PURE__ */ t(
    b,
    {
      label: C(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ u("div", { ...n, children: [
        /* @__PURE__ */ t("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ t("div", { className: "text-view-value", children: l })
      ] }) : /* @__PURE__ */ t("div", { ...n, style: { textAlign: r }, className: "text-view-value", children: l })
    }
  ) });
});
export {
  D as default
};
