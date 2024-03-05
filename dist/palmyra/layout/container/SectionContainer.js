import "../../../assets/SectionContainer.css";
import { jsx as e, Fragment as l, jsxs as t } from "react/jsx-runtime";
import { Accordion as s, AccordionSummary as m, AccordionDetails as h } from "@mui/material";
import { ExpandMore as f } from "@mui/icons-material";
import { useState as u } from "react";
import { a as x, B as p } from "../../../chunks/InfoTooltip.js";
const S = (i) => {
  const n = i.title, c = i.titleTooltip, r = i.customButton, o = i.hideTitle || !1, [a, d] = u(!0);
  return /* @__PURE__ */ e(l, { children: /* @__PURE__ */ e("div", { className: "section-container", children: n ? /* @__PURE__ */ t(s, { expanded: a, onChange: () => {
    d(!a);
  }, children: [
    /* @__PURE__ */ e(m, { className: "palmyra-form-section-header-container", expandIcon: (
      // <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      /* @__PURE__ */ e(f, {})
    ), children: /* @__PURE__ */ t("div", { className: "section-header", children: [
      n && !o ? /* @__PURE__ */ e("div", { className: "section-header-text", children: c ? /* @__PURE__ */ e(x, { placement: "right", title: c, arrow: !0, children: /* @__PURE__ */ t("div", { className: "section-header-info", children: [
        n,
        /* @__PURE__ */ e(p, { class: "grid-header-info-icon" })
      ] }) }) : /* @__PURE__ */ e("div", { children: n }) }) : null,
      /* @__PURE__ */ e("div", { className: "accordian-custom-btn-container", children: r })
    ] }) }),
    /* @__PURE__ */ e(h, { className: "section-container-child", children: i.children })
  ] }) : /* @__PURE__ */ t("div", { children: [
    n && !o ? /* @__PURE__ */ e("div", { className: "palmyra-form-section-header", children: n }) : "",
    /* @__PURE__ */ e("div", { className: "section-container-child", children: i.children })
  ] }) }) });
};
export {
  S as default
};
