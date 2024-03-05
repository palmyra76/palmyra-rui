import { jsx as e, jsxs as d } from "react/jsx-runtime";
import l from "./ChartRenderer.js";
import { S as c } from "../../../chunks/SectionContainer.js";
import { ErrorBoundary as h } from "../ErrorBoundary.js";
const f = (t) => {
  const { layout: r } = t;
  var o = r.Renderer || l, n = r.Container || c;
  const a = (i) => /* @__PURE__ */ e(
    o,
    {
      layout: i
    }
  );
  return /* @__PURE__ */ e(h, { fallback: /* @__PURE__ */ d("div", { children: [
    "Error while loading chart ",
    r.title
  ] }), children: /* @__PURE__ */ e(n, { ...r, children: a(r.chartLayout) }) });
};
export {
  f as default
};
