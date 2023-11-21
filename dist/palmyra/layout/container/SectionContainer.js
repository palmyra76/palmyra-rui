import "../../../assets/SectionContainer.css";
import { jsx as e, Fragment as c, jsxs as a } from "react/jsx-runtime";
import { Accordion as d, AccordionSummary as l, AccordionDetails as s } from "@mui/material";
import { ExpandMore as m } from "@mui/icons-material";
import { useState as h } from "react";
const S = (n) => {
  const t = n.title, i = n.hideTitle || !1, [o, r] = h(!0);
  return /* @__PURE__ */ e(c, { children: /* @__PURE__ */ e("div", { className: "section-container", children: /* @__PURE__ */ a(d, { expanded: o, onChange: () => {
    r(!o);
  }, children: [
    /* @__PURE__ */ e(l, { className: "palmyra-form-section-header-container", expandIcon: /* @__PURE__ */ e(m, {}), children: t && !i ? /* @__PURE__ */ e("div", { children: t }) : "" }),
    /* @__PURE__ */ e(s, { children: n.children })
  ] }) }) });
};
export {
  S as default
};
