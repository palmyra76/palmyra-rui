import { jsx as d } from "react/jsx-runtime";
import { styled as f, Tooltip as t, tooltipClasses as r } from "@mui/material";
const s = f(({ className: o, ...p }) => /* @__PURE__ */ d(t, { ...p, classes: { popper: o } }))(({ theme: o }) => ({
  [`& .${r.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 250,
    fontSize: o.typography.pxToRem(14),
    border: "1px solid #dadde9"
  },
  [`& .${r.arrow}`]: {
    color: "#f5f5f9",
    "&::before": {
      backgroundColor: "#f5f5f9",
      border: "1px solid #dadde9"
    }
  }
}));
export {
  s as InfoTooltip
};
