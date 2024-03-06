import { jsx as e, jsxs as i, Fragment as n } from "react/jsx-runtime";
import { styled as s, Tooltip as c, tooltipClasses as a } from "@mui/material";
import { G as l } from "./iconBase.js";
function d(r) {
  return l({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" } }, { tag: "path", attr: { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" } }] })(r);
}
const p = s(({ className: r, ...o }) => /* @__PURE__ */ e(c, { ...o, classes: { popper: r } }))(({ theme: r }) => ({
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
  return /* @__PURE__ */ e(d, { className: "grid-header-info-icon", style: { verticalAlign: "middle" } });
}, u = (r) => {
  if (r) {
    if (typeof r == "function")
      return r();
    if (typeof r == "object" && r.toolTip) {
      const t = r;
      return /* @__PURE__ */ i("div", { className: "info-grid-header", children: [
        /* @__PURE__ */ e("span", { className: "grid-header-right-content-text", children: t.title }),
        /* @__PURE__ */ e(p, { placement: "right", title: t.toolTip, arrow: !0, children: /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(f, {}) }) })
      ] });
    }
    const o = typeof r == "string" ? r : r.title;
    return /* @__PURE__ */ e("span", { className: "grid-header-right-content-text", children: o });
  } else
    return /* @__PURE__ */ e(n, {});
};
export {
  d as B,
  f as I,
  p as a,
  u as r
};
