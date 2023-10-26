import { jsx as r } from "react/jsx-runtime";
import a from "./FlexiLayoutGridRenderer.js";
import { forwardRef as f } from "react";
import { ErrorBoundary as l } from "../ErrorBoundary.js";
import { StoreFactoryContext as s, LayoutParamsContext as y } from "./FlexiLayoutContext.js";
import i from "./FlexiLayoutFormRenderer.js";
const x = (o) => {
  switch (o) {
    case "grid":
      return a;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), i;
    case "formEdit":
    case "formNew":
    case "formView":
      return i;
    default:
      return a;
  }
}, v = f(function(e, t) {
  const { layout: n } = e, d = e.mode ? e.mode : n.type ? n.type : "grid", m = e.layoutParams || {}, c = x(d);
  return /* @__PURE__ */ r(l, { fallback: /* @__PURE__ */ r("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ r(s.Provider, { value: e.storeFactory, children: /* @__PURE__ */ r(y.Provider, { value: m, children: /* @__PURE__ */ r(c, { ...e, ref: (u) => {
    t && (t.current = u);
  } }) }) }) });
});
export {
  v as default
};
