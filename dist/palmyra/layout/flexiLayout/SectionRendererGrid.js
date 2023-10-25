import { jsx as r } from "react/jsx-runtime";
import i from "./GridRenderer.js";
import c from "../container/SectionContainer.js";
import { ErrorBoundary as d } from "../ErrorBoundary.js";
const y = (t) => {
  const { layout: e, context: o } = t;
  var n = e.Container || c;
  return /* @__PURE__ */ r(d, { fallback: /* @__PURE__ */ r("p", { children: "SectionRendererGrid: Something went wrong" }), children: /* @__PURE__ */ r(n, { ...e, children: ((a) => /* @__PURE__ */ r(
    i,
    {
      context: o,
      layout: a
    }
  ))(e.tableLayout) }) });
};
export {
  y as default
};
