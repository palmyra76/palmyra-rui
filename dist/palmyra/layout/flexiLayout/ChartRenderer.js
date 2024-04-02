import { jsx as s } from "react/jsx-runtime";
import { useContext as a, useRef as O, useState as v, useMemo as x } from "react";
import { StoreFactoryContext as S, LayoutParamsContext as D } from "./FlexiLayoutContext.js";
import { mergeDeep as P } from "../../utils/index.js";
import { getStyleConverter as R } from "../../chart/chartjs/colors/StyleConverterFactory.js";
import { ChartJS as q } from "../../chart/chartjs/ChartJS.js";
const L = (o) => {
  const r = o.layout, c = a(S), i = a(D);
  var u = r.storeOptions || {};
  const e = O(null);
  var n = {};
  P(n, u, i);
  const p = c.getChartStore(n), [m, f] = v(null), l = (t) => {
  };
  function y(t) {
    return R(t.type, t.styleOptions, t.transformOptions);
  }
  function h(t) {
    e.current && e.current.setData(t);
  }
  x(() => {
    p.query({}).then((t) => h(t)).catch(() => f(null));
  }, [e.current]);
  function C() {
    return "300px";
  }
  const d = y(r), g = o.layout.transformOptions || { sourceType: "default" };
  return /* @__PURE__ */ s("div", { className: "palmyra-chart-container-wrapper", children: /* @__PURE__ */ s(
    q,
    {
      type: r.type,
      data: m,
      onPointClick: l,
      height: C(),
      transformOptions: g,
      postProcessors: [d],
      options: r.chartOptions,
      ref: e
    }
  ) });
};
export {
  L as default
};
