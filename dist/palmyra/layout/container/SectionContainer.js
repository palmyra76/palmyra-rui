import "../../../assets/SectionContainer.css";
import { jsxs as c, jsx as o } from "react/jsx-runtime";
const l = (e) => {
  const n = e.title, t = e.hideTitle || !1, i = e.columns ? "section-container section-container-" + e.columns + "columns" : "section-container";
  return /* @__PURE__ */ c("div", { className: i, children: [
    n && !t ? /* @__PURE__ */ o("div", { className: "palmyra-form-section-header", children: n }) : "",
    e.children
  ] });
};
export {
  l as default
};
