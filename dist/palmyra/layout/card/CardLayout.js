import { jsx as r, jsxs as s } from "react/jsx-runtime";
/* empty css                            */import n from "./EmptyChildCard.js";
const v = (a) => {
  const { children: c, dataList: e, Child: t, childProps: l } = a, o = a.childKeyProvider || ((d, i) => i);
  return /* @__PURE__ */ r("div", { children: e.length == 0 ? /* @__PURE__ */ r(n, {}) : /* @__PURE__ */ s("div", { className: "card-container", children: [
    c,
    /* @__PURE__ */ r("div", { className: "card-wrapper", children: e.map((d, i) => /* @__PURE__ */ r(
      t,
      {
        ...l,
        data: d
      },
      o(d, i)
    )) })
  ] }) });
};
export {
  v as default
};
