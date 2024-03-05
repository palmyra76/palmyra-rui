import { jsx as t } from "react/jsx-runtime";
import { styled as e, Tooltip as l, tooltipClasses as r } from "@mui/material";
import { G as f } from "./iconBase.js";
function i(o) {
  return f({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" } }, { tag: "path", attr: { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" } }] })(o);
}
const n = e(({ className: o, ...a }) => /* @__PURE__ */ t(l, { ...a, classes: { popper: o } }))(({ theme: o }) => ({
  [`& .${r.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 500,
    fontSize: o.typography.pxToRem(16),
    border: "1px solid #dadde9"
  },
  [`& .${r.arrow}`]: {
    color: "#f5f5f9",
    "&::before": {
      backgroundColor: "#f5f5f9",
      border: "1px solid #dadde9"
    }
  }
})), p = function() {
  return /* @__PURE__ */ t(i, { className: "grid-header-info-icon" });
};
export {
  i as B,
  p as I,
  n as a
};
