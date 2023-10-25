import { jsx as e } from "react/jsx-runtime";
import i from "./FlexiLayoutGridRenderer.js";
import { forwardRef as f } from "react";
import { ErrorBoundary as c } from "../ErrorBoundary.js";
import { StoreFactoryContext as l, LayoutParamsContext as y } from "./FlexiLayoutContext.js";
import s from "./FlexiLayoutFormViewRenderer.js";
import a from "./FlexiLayoutFormEditRenderer.js";
import F from "./FlexiLayoutFormNewRenderer.js";
const x = (t) => {
  switch (t) {
    case "grid":
      return i;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), a;
    case "formEdit":
      return a;
    case "formNew":
      return F;
    case "formView":
      return s;
    default:
      return i;
  }
}, C = f(function(r, R) {
  const { layout: n } = r, m = r.mode ? r.mode : n.type ? n.type : "grid", d = r.layoutParams || {}, u = x(m);
  return /* @__PURE__ */ e(c, { fallback: /* @__PURE__ */ e("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ e(l.Provider, { value: r.storeFactory, children: /* @__PURE__ */ e(y.Provider, { value: d, children: /* @__PURE__ */ e(u, { ...r, ref: (o) => {
    o && (o.current = o);
  } }) }) }) });
});
export {
  C as default
};
