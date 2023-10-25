import { jsx as o } from "react/jsx-runtime";
import { getDisplayValue as l } from "../../form/FormUtil.js";
const s = (e, i) => {
  const r = l(e, i);
  return /* @__PURE__ */ o("div", { children: r });
}, a = (e, i) => l(e, i);
export {
  a as EditFieldProvider,
  s as ViewFieldProvider
};
