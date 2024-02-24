import "../../../assets/SectionContainer.css";
import { jsx as e, Fragment as d, jsxs as i } from "react/jsx-runtime";
import { Accordion as l, AccordionSummary as s, AccordionDetails as m } from "@mui/material";
import { ExpandMore as h } from "@mui/icons-material";
import { useState as u } from "react";
const y = (n) => {
  const c = n.title, a = n.customButton, t = n.hideTitle || !1, [o, r] = u(!0);
  return /* @__PURE__ */ e(d, { children: /* @__PURE__ */ i("div", { className: "section-container", children: [
    /* @__PURE__ */ i(l, { expanded: o, onChange: () => {
      r(!o);
    }, children: [
      /* @__PURE__ */ e(s, { className: "palmyra-form-section-header-container", expandIcon: (
        // <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        /* @__PURE__ */ e(h, {})
      ), children: /* @__PURE__ */ i("div", { className: "section-header", children: [
        c && !t ? /* @__PURE__ */ e("div", { className: "section-header-text", children: /* @__PURE__ */ e("div", { children: c }) }) : null,
        /* @__PURE__ */ e("div", { className: "accordian-custom-btn-container", children: a })
      ] }) }),
      /* @__PURE__ */ e(m, { className: "section-container-child", children: n.children })
    ] }),
    /* @__PURE__ */ i("div", { children: [
      c && !t ? /* @__PURE__ */ e("div", { className: "palmyra-form-section-header", children: c }) : "",
      /* @__PURE__ */ e("div", { className: "section-container-child", children: n.children })
    ] })
  ] }) });
};
export {
  y as default
};
