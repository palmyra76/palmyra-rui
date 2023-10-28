import { jsx as r } from "react/jsx-runtime";
import i from "./FlexiLayoutGridRenderer.js";
import { forwardRef as l, useRef as s, useEffect as y } from "react";
import { ErrorBoundary as x } from "../ErrorBoundary.js";
import { StoreFactoryContext as R, LayoutParamsContext as F } from "./FlexiLayoutContext.js";
import d from "./FlexiLayoutFormRenderer.js";
const g = (n) => {
  switch (n) {
    case "grid":
      return i;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), d;
    case "formEdit":
    case "formNew":
    case "formView":
      return d;
    default:
      return i;
  }
}, p = l(function(e, a) {
  const { layout: o } = e, c = e.mode ? e.mode : o.type ? o.type : "grid", u = e.layoutParams || {}, m = g(c), t = s(0);
  return y(() => {
    t.current < 999999 ? t.current++ : t.current = 0;
  }, [o]), /* @__PURE__ */ r(x, { fallback: /* @__PURE__ */ r("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ r(R.Provider, { value: e.storeFactory, children: /* @__PURE__ */ r(F.Provider, { value: u, children: /* @__PURE__ */ r(m, { ...e, ref: (f) => {
    a && (a.current = f);
  } }, t.current) }) }) });
});
export {
  p as default
};
