import { jsx as a, Fragment as b, jsxs as x } from "react/jsx-runtime";
import { forwardRef as C, useContext as g, useRef as h } from "react";
import { FieldManagerContext as y } from "../../layout/flexiLayout/FlexiLayoutContext.js";
import F from "../form/FieldDecorator.js";
import { copyMuiOptions as w, getFieldLabel as A } from "../form/MuiUtil.js";
import { hasDot as L } from "../../utils/StringUtil.js";
import { getValueByKey as M } from "../../form/FormUtil.js";
/* empty css                        */const P = C(function(e, s) {
  const m = g(y), d = s || h(null), o = m(e, "serverlookup", d), { mutateOptions: u } = o, l = o.data, i = e.lookupOptions || {}, n = (i == null ? void 0 : i.displayAttribute) || "name", f = e.textAlign || "left", v = e.variant || "standard";
  var c = w(e, l, e.label);
  const r = L(n) ? (t) => M(n, t) : (t) => t == null ? void 0 : t[n];
  return /* @__PURE__ */ a(b, { children: u.visible && /* @__PURE__ */ a(
    F,
    {
      label: A(e),
      customContainerClass: e.customContainerClass,
      colspan: e.colspan,
      customFieldClass: e.customFieldClass,
      customLabelClass: e.customLabelClass,
      children: e.label ? /* @__PURE__ */ x("div", { ...c, className: "text-view-field-container", children: [
        /* @__PURE__ */ a("div", { className: "text-view-label", children: e.label }),
        /* @__PURE__ */ a("div", { className: v == "standard" ? "text-view-value" : "text-view-value-outlined", children: r(l) || "N/A" })
      ] }) : /* @__PURE__ */ a("div", { ...c, style: { textAlign: f }, children: r(l) || "N/A" })
    }
  ) });
});
export {
  P as default
};
