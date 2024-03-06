import { jsxs as r, jsx as i } from "react/jsx-runtime";
import { renderTitle as n } from "../../mui/widget/InfoTooltip.js";
const d = (t) => {
  const e = t.title;
  return /* @__PURE__ */ r("div", { children: [
    /* @__PURE__ */ i("h2", { children: n(e) }),
    t.children
  ] });
};
export {
  d as default
};
