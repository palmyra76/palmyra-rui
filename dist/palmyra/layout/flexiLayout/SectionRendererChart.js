import { jsx as e, jsxs as d, Fragment as l } from "react/jsx-runtime";
import c from "./ChartRenderer.js";
import h from "../container/SectionContainer.js";
import { ErrorBoundary as m } from "../ErrorBoundary.js";
import { renderTitle as f } from "../../mui/widget/InfoTooltip.js";
const R = (t) => {
  const { layout: r } = t;
  var o = r.Renderer || c, n = r.Container || h;
  const a = (i) => /* @__PURE__ */ e(
    o,
    {
      layout: i
    }
  );
  return /* @__PURE__ */ e(m, { fallback: /* @__PURE__ */ d("div", { children: [
    "Error while loading chart ",
    /* @__PURE__ */ e(l, { children: f(r.title) })
  ] }), children: /* @__PURE__ */ e(n, { ...r, children: a(r.chartLayout) }) });
};
export {
  R as default
};
