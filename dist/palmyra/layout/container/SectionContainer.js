import "../../../assets/SectionContainer.css";
import { jsx as e, Fragment as l, jsxs as c } from "react/jsx-runtime";
import { Accordion as s, AccordionSummary as m, AccordionDetails as h } from "@mui/material";
import { ExpandMore as u } from "@mui/icons-material";
import { useState as x } from "react";
import { renderTitle as a } from "../../mui/widget/InfoTooltip.js";
const S = (n) => {
  const t = n.title, r = n.customButton, i = n.hideTitle || !1, [o, d] = x(!0);
  return /* @__PURE__ */ e(l, { children: /* @__PURE__ */ e("div", { className: "section-container", children: t ? /* @__PURE__ */ c(s, { expanded: o, onChange: () => {
    d(!o);
  }, children: [
    /* @__PURE__ */ e(m, { className: "palmyra-form-section-header-container", expandIcon: (
      // <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      /* @__PURE__ */ e(u, {})
    ), children: /* @__PURE__ */ c("div", { className: "section-header", children: [
      t && !i ? /* @__PURE__ */ e("div", { className: "section-header-text", children: a(t) }) : null,
      /* @__PURE__ */ e("div", { className: "accordian-custom-btn-container", children: r })
    ] }) }),
    /* @__PURE__ */ e(h, { className: "section-container-child", children: n.children })
  ] }) : /* @__PURE__ */ c("div", { children: [
    t && !i ? /* @__PURE__ */ c("div", { className: "palmyra-form-section-header", children: [
      " ",
      a(t)
    ] }) : "",
    /* @__PURE__ */ e("div", { className: "section-container-child", children: n.children })
  ] }) }) });
};
export {
  S as default
};
