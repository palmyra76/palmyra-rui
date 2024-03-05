import "../assets/SectionContainer.css";
import { jsx as e, Fragment as d, jsxs as i } from "react/jsx-runtime";
import { Accordion as s, AccordionSummary as m, AccordionDetails as h } from "@mui/material";
import { ExpandMore as f } from "@mui/icons-material";
import { useState as u } from "react";
import { G as g } from "./iconBase.js";
import { InfoTooltip as v } from "../palmyra/tooltip/InfoTooltip.js";
function x(t) {
  return g({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" } }, { tag: "path", attr: { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" } }] })(t);
}
const C = (t) => {
  const n = t.title, c = t.titleInfo, r = t.customButton, o = t.hideTitle || !1, [a, l] = u(!0);
  return /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e("div", { className: "section-container", children: n ? /* @__PURE__ */ i(s, { expanded: a, onChange: () => {
    l(!a);
  }, children: [
    /* @__PURE__ */ e(m, { className: "palmyra-form-section-header-container", expandIcon: (
      // <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      /* @__PURE__ */ e(f, {})
    ), children: /* @__PURE__ */ i("div", { className: "section-header", children: [
      n && !o ? /* @__PURE__ */ e("div", { className: "section-header-text", children: c ? /* @__PURE__ */ e(v, { placement: "right", title: c, arrow: !0, children: /* @__PURE__ */ i("div", { className: "section-header-info", children: [
        n,
        /* @__PURE__ */ e(x, { class: "grid-header-info-icon" })
      ] }) }) : /* @__PURE__ */ e("div", { children: n }) }) : null,
      /* @__PURE__ */ e("div", { className: "accordian-custom-btn-container", children: r })
    ] }) }),
    /* @__PURE__ */ e(h, { className: "section-container-child", children: t.children })
  ] }) : /* @__PURE__ */ i("div", { children: [
    n && !o ? /* @__PURE__ */ e("div", { className: "palmyra-form-section-header", children: n }) : "",
    /* @__PURE__ */ e("div", { className: "section-container-child", children: t.children })
  ] }) }) });
};
export {
  x as B,
  C as S
};
