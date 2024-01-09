import "../../../assets/CardLayout.css";
import { jsx as t, jsxs as m } from "react/jsx-runtime";
import { EmptyChildCard as y } from "./EmptyChildCard.js";
const v = (r) => {
  const { children: e, dataList: a, Child: o, childProps: s } = r, l = r.childKeyProvider || ((d, i) => i), n = r.preProcess || ((d) => d), h = r.EmptyChild ? r.EmptyChild : y;
  return /* @__PURE__ */ t("div", { children: !a || a.length == 0 ? /* @__PURE__ */ t(h, {}) : /* @__PURE__ */ m("div", { className: "card-container", children: [
    e,
    /* @__PURE__ */ t("div", { className: "card-wrapper", children: a.map((d, i) => {
      const c = n(d);
      return /* @__PURE__ */ t(
        o,
        {
          ...s,
          data: c
        },
        l(c, i)
      );
    }) })
  ] }) });
};
export {
  v as default
};
