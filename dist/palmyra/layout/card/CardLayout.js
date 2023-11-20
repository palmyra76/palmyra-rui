import "../../../assets/CardLayout.css";
import { jsx as i, jsxs as n } from "react/jsx-runtime";
import { EmptyChildCard as m } from "./EmptyChildCard.js";
const p = (d) => {
  const { children: c, dataList: r, Child: e, childProps: l } = d, o = d.childKeyProvider || ((t, a) => a), h = d.EmptyChild ? d.EmptyChild : m;
  return /* @__PURE__ */ i("div", { children: !r || r.length == 0 ? /* @__PURE__ */ i(h, {}) : /* @__PURE__ */ n("div", { className: "card-container", children: [
    c,
    /* @__PURE__ */ i("div", { className: "card-wrapper", children: r.map((t, a) => /* @__PURE__ */ i(
      e,
      {
        ...l,
        data: t
      },
      o(t, a)
    )) })
  ] }) });
};
export {
  p as default
};
