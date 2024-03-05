import "../assets/SectionContainer.css";
import { jsx as e, Fragment as d, jsxs as n } from "react/jsx-runtime";
import { Accordion as s, AccordionSummary as m, AccordionDetails as h } from "@mui/material";
import { ExpandMore as f } from "@mui/icons-material";
import { useState as u } from "react";
import { G as g } from "./iconBase.js";
import { InfoTooltip as p } from "../palmyra/tooltip/InfoTooltip.js";
function v(t) {
  return g({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" } }, { tag: "path", attr: { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" } }] })(t);
}
const C = (t) => {
  const i = t.title, c = t.titleTooltip, r = t.customButton, o = t.hideTitle || !1, [a, l] = u(!0);
  return /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e("div", { className: "section-container", children: i ? /* @__PURE__ */ n(s, { expanded: a, onChange: () => {
    l(!a);
  }, children: [
    /* @__PURE__ */ e(m, { className: "palmyra-form-section-header-container", expandIcon: (
      // <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      /* @__PURE__ */ e(f, {})
    ), children: /* @__PURE__ */ n("div", { className: "section-header", children: [
      i && !o ? /* @__PURE__ */ e("div", { className: "section-header-text", children: c ? /* @__PURE__ */ e(p, { placement: "right", title: c, arrow: !0, children: /* @__PURE__ */ n("div", { className: "section-header-info", children: [
        i,
        /* @__PURE__ */ e(v, { class: "grid-header-info-icon" })
      ] }) }) : /* @__PURE__ */ e("div", { children: i }) }) : null,
      /* @__PURE__ */ e("div", { className: "accordian-custom-btn-container", children: r })
    ] }) }),
    /* @__PURE__ */ e(h, { className: "section-container-child", children: t.children })
  ] }) : /* @__PURE__ */ n("div", { children: [
    i && !o ? /* @__PURE__ */ e("div", { className: "palmyra-form-section-header", children: i }) : "",
    /* @__PURE__ */ e("div", { className: "section-container-child", children: t.children })
  ] }) }) });
};
export {
  v as B,
  C as S
};
