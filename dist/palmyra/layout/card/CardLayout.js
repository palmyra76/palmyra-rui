import { jsx as r, jsxs as s } from "react/jsx-runtime";
/* empty css                            */import n from "./EmptyChildCard.js";
const v = (e) => {
  const { children: c, dataList: d, Child: t, childProps: l } = e, o = e.childKeyProvider || ((i, a) => a);
  return /* @__PURE__ */ r("div", { children: !d || d.length == 0 ? /* @__PURE__ */ r(n, {}) : /* @__PURE__ */ s("div", { className: "card-container", children: [
    c,
    /* @__PURE__ */ r("div", { className: "card-wrapper", children: d.map((i, a) => /* @__PURE__ */ r(
      t,
      {
        ...l,
        data: i
      },
      o(i, a)
    )) })
  ] }) });
};
export {
  v as default
};
