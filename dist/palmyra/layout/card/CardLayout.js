import "../../../assets/CardLayout.css";
import { jsx as r, jsxs as s } from "react/jsx-runtime";
import n from "./EmptyChildCard.js";
const v = (t) => {
  const { children: c, dataList: d, Child: e, childProps: o } = t, l = t.childKeyProvider || ((i, a) => a);
  return /* @__PURE__ */ r("div", { children: !d || d.length == 0 ? /* @__PURE__ */ r(n, {}) : /* @__PURE__ */ s("div", { className: "card-container", children: [
    c,
    /* @__PURE__ */ r("div", { className: "card-wrapper", children: d.map((i, a) => /* @__PURE__ */ r(
      e,
      {
        ...o,
        data: i
      },
      l(i, a)
    )) })
  ] }) });
};
export {
  v as default
};
