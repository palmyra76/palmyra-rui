import { jsx as l, Fragment as b, jsxs as v } from "react/jsx-runtime";
import { forwardRef as x, useContext as C, useRef as g } from "react";
import { FieldManagerContext as h } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import y from "../form/FieldDecorator.js";
import { copyMuiOptions as F, getFieldLabel as A } from "../form/MuiUtil.js";
import { hasDot as w } from "../../utils/StringUtil.js";
import { getValueByKey as L } from "../../form/FormUtil.js";
const V = x(function(e, o) {
  const m = C(h), u = o || g(null), n = m(e, "serverlookup", u), { mutateOptions: d } = n, a = n.data, i = e.lookupOptions || {}, s = (i == null ? void 0 : i.displayAttribute) || "name", f = e.textAlign || "left";
  var c = F(e, a, e.label);
  const r = w(s) ? (t) => L(s, t) : (t) => t == null ? void 0 : t[s];
  return /* @__PURE__ */ l(b, { children: d.visible && /* @__PURE__ */ l(
    y,
    {
      label: A(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ v("div", { ...c, children: [
        /* @__PURE__ */ l("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ l("div", { className: "text-view-value", children: r(a) || "N/A" })
      ] }) : /* @__PURE__ */ l("div", { ...c, style: { textAlign: f }, className: "text-view-value", children: r(a) || "N/A" })
    }
  ) });
});
export {
  V as default
};
