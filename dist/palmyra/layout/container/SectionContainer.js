import "../../../assets/SectionContainer.css";
import { jsx as e, Fragment as r, jsxs as o } from "react/jsx-runtime";
import { Accordion as d, AccordionSummary as l, AccordionDetails as s } from "@mui/material";
import { ExpandMore as m } from "@mui/icons-material";
import { useState as h } from "react";
const v = (i) => {
  const n = i.title, c = i.hideTitle || !1, [t, a] = h(!0);
  return /* @__PURE__ */ e(r, { children: /* @__PURE__ */ e("div", { className: "section-container", children: n ? /* @__PURE__ */ o(d, { expanded: t, onChange: () => {
    a(!t);
  }, children: [
    /* @__PURE__ */ e(l, { className: "palmyra-form-section-header-container", expandIcon: /* @__PURE__ */ e(m, {}), children: n && !c ? /* @__PURE__ */ e("div", { className: "section-header-text", children: n }) : "" }),
    /* @__PURE__ */ e(s, { className: "section-container-child", children: i.children })
  ] }) : /* @__PURE__ */ o("div", { children: [
    n && !c ? /* @__PURE__ */ e("div", { className: "palmyra-form-section-header", children: n }) : "",
    /* @__PURE__ */ e("div", { className: "section-container-child", children: i.children })
  ] }) }) });
};
export {
  v as default
};
