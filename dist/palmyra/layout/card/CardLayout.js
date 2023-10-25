import "../../../assets/CardLayout.css";
import { jsx as r, jsxs as o } from "react/jsx-runtime";
import s from "./EmptyChildCard.js";
const h = (d) => {
  const { children: i, dataList: a, Child: t, childProps: c } = d;
  return /* @__PURE__ */ r("div", { children: a.length == 0 ? /* @__PURE__ */ r(s, {}) : /* @__PURE__ */ o("div", { className: "card-container", children: [
    i,
    /* @__PURE__ */ r("div", { className: "card-wrapper", children: a.map((e, n) => /* @__PURE__ */ r(t, { ...c, data: e })) })
  ] }) });
};
export {
  h as default
};
