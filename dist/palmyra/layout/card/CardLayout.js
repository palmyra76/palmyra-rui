import "../../../assets/CardLayout.css";
import { jsx as i, jsxs as h } from "react/jsx-runtime";
import { EmptyChildCard as m } from "./EmptyChildCard.js";
const v = (r) => {
  const { children: e, dataList: t, Child: a, childProps: l } = r, o = r.childKeyProvider || ((d, c) => c), s = r.preProcess || ((d) => d), n = r.EmptyChild ? r.EmptyChild : m;
  return /* @__PURE__ */ i("div", { children: !t || t.length == 0 ? /* @__PURE__ */ i(n, {}) : /* @__PURE__ */ h("div", { className: "card-container", children: [
    e,
    /* @__PURE__ */ i("div", { className: "card-wrapper", children: t.map((d, c) => /* @__PURE__ */ i(
      a,
      {
        ...l,
        data: d
      },
      o(s(d), c)
    )) })
  ] }) });
};
export {
  v as default
};
