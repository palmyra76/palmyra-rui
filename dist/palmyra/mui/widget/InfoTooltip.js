import { jsx as o, jsxs as n, Fragment as c } from "react/jsx-runtime";
import { styled as i, Tooltip as l, tooltipClasses as a } from "@mui/material";
import { G as s } from "../../../chunks/iconBase.js";
function d(r) {
  return s({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" }, child: [] }, { tag: "path", attr: { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" }, child: [] }] })(r);
}
const p = i(({ className: r, ...e }) => /* @__PURE__ */ o(l, { ...e, classes: { popper: r } }))(({ theme: r }) => ({
  [`& .${a.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 500,
    fontSize: r.typography.pxToRem(16),
    border: "1px solid #dadde9"
  },
  [`& .${a.arrow}`]: {
    color: "#f5f5f9",
    "&::before": {
      backgroundColor: "#f5f5f9",
      border: "1px solid #dadde9"
    }
  }
})), f = function() {
  return /* @__PURE__ */ o(d, { className: "header-info-icon" });
}, g = (r) => {
  if (r) {
    if (typeof r == "function")
      return r();
    if (typeof r == "object" && r.toolTip) {
      const t = r;
      return /* @__PURE__ */ n("div", { className: "info-header", children: [
        /* @__PURE__ */ o("span", { className: "header-content-text", children: t.title }),
        /* @__PURE__ */ o(p, { placement: "right", title: t.toolTip, arrow: !0, children: /* @__PURE__ */ o("span", { style: { paddingBottom: "2px" }, children: /* @__PURE__ */ o(f, {}) }) })
      ] });
    }
    const e = typeof r == "string" ? r : r.title;
    return /* @__PURE__ */ o("span", { className: "header-content-text", children: e });
  } else
    return /* @__PURE__ */ o(c, {});
};
export {
  f as InfoCircle,
  p as InfoTooltip,
  g as renderTitle
};
