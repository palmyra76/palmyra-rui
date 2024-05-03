import { jsx as t, Fragment as u, jsxs as m } from "react/jsx-runtime";
import { forwardRef as v, useContext as f, useRef as x } from "react";
import { FieldManagerContext as b } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import g from "../form/FieldDecorator.js";
import { copyMuiOptions as C, getFieldLabel as F } from "../form/MuiUtil.js";
const N = v(function(e, a) {
  const s = f(b), c = a || x(null), i = s(e, "string", c), { mutateOptions: o } = i, l = i.getData(), r = e.textAlign || "left", d = e.variant || "standard";
  var n = C(e, l, e.label);
  return /* @__PURE__ */ t(u, { children: o.visible && /* @__PURE__ */ t(
    g,
    {
      label: F(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ m("div", { ...n, className: "text-view-field-container", children: [
        /* @__PURE__ */ t("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ t("div", { className: e.label ? d === "outlined" ? "text-view-value-outlined" : "text-view-value" : "", children: l })
      ] }) : /* @__PURE__ */ t("div", { ...n, style: { textAlign: r }, children: l })
    }
  ) });
});
export {
  N as default
};
