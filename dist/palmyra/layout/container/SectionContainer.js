import "../../../assets/SectionContainer.css";
import { jsx as e, Fragment as c, jsxs as a } from "react/jsx-runtime";
import { Accordion as d, AccordionSummary as s, AccordionDetails as l } from "@mui/material";
import { ExpandMore as m } from "@mui/icons-material";
import { useState as h } from "react";
const S = (t) => {
  const n = t.title, i = t.hideTitle || !1, [o, r] = h(!0);
  return /* @__PURE__ */ e(c, { children: /* @__PURE__ */ e("div", { className: "section-container", children: /* @__PURE__ */ a(d, { expanded: o, onChange: () => {
    r(!o);
  }, children: [
    n && /* @__PURE__ */ e(s, { className: "palmyra-form-section-header-container", expandIcon: /* @__PURE__ */ e(m, {}), children: n && !i ? /* @__PURE__ */ e("div", { className: "section-header-text", children: n }) : "" }),
    /* @__PURE__ */ e(l, { children: t.children })
  ] }) }) });
};
export {
  S as default
};
