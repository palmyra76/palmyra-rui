import { jsx as r } from "react/jsx-runtime";
import i from "./FlexiLayoutGridRenderer.js";
import { forwardRef as s, useState as y, useRef as x, useEffect as R } from "react";
import { ErrorBoundary as F } from "../ErrorBoundary.js";
import { StoreFactoryContext as L, LayoutParamsContext as g } from "./FlexiLayoutContext.js";
import u from "./FlexiLayoutFormRenderer.js";
const h = (o) => {
  switch (o) {
    case "grid":
      return i;
    case "form":
      return console.info("type is provided as 'form', defaulting to formEdit mode"), u;
    case "formEdit":
    case "formNew":
    case "formView":
      return u;
    default:
      return i;
  }
}, b = s(function(e, n) {
  const [a, d] = y(e.layout), c = e.mode ? e.mode : a.type ? a.type : "grid", m = e.layoutParams || {}, f = h(c), t = x(0);
  return R(() => {
    d(e.layout), t.current < 999999 ? t.current++ : t.current = 0;
  }, [e.layout]), /* @__PURE__ */ r(F, { fallback: /* @__PURE__ */ r("p", { children: "FlexiLayoutRenderer: Something went wrong" }), children: /* @__PURE__ */ r(L.Provider, { value: e.storeFactory, children: /* @__PURE__ */ r(g.Provider, { value: m, children: /* @__PURE__ */ r(f, { ...e, ref: (l) => {
    n && (n.current = l);
  } }, t.current) }) }) });
});
export {
  b as default
};
