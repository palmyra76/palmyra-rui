import "../../../assets/SectionContainer.css";
import { jsxs as n, Fragment as o, jsx as r } from "react/jsx-runtime";
const l = (e) => {
  const t = e.title, i = e.hideTitle || !1;
  return /* @__PURE__ */ n(o, { children: [
    t && !i ? /* @__PURE__ */ r("div", { className: "palmyra-form-section-header", children: t }) : "",
    e.children
  ] });
};
export {
  l as default
};
