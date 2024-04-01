import { jsx as o } from "react/jsx-runtime";
import { ChartFactory as D } from "../../chart/chartjs/ChartFactory.js";
import { useContext as u, useState as T, useMemo as F } from "react";
import { getDataConverter as P } from "../../chart/chartjs/DataConverterFactory.js";
import { StoreFactoryContext as R, LayoutParamsContext as j } from "./FlexiLayoutContext.js";
import { mergeDeep as q } from "../../utils/index.js";
import { getStyleConverter as b } from "../../chart/chartjs/colors/StyleConverterFactory.js";
const _ = (n) => {
  const e = n.layout, f = D(e.type), y = u(R), l = u(j);
  var h = e.storeOptions || {}, s = {};
  q(s, h, l);
  const d = y.getChartStore(s), [a, c] = T(null), C = (t) => {
  };
  function O(t, r) {
    var p, m;
    const i = (p = r.transformOptions) != null && p.sourceType ? (m = r.transformOptions) == null ? void 0 : m.sourceType : t instanceof Array ? "default" : "object";
    return P(r.type, i, r.transformOptions)(t);
  }
  function g(t, r) {
    return b(r.type, r.styleOptions, r.transformOptions)(t);
  }
  function v(t) {
    c(g(O(t, e), e));
  }
  F(() => {
    d.query({}).then((t) => v(t)).catch(() => c(null));
  }, []);
  function x() {
    return "300px";
  }
  const S = n.layout.transformOptions || { sourceType: "default" };
  return /* @__PURE__ */ o("div", { className: "palmyra-chart-container-wrapper", children: a ? /* @__PURE__ */ o(
    f,
    {
      data: a,
      onPointClick: C,
      height: x(),
      transformOptions: S,
      chartOptions: e.chartOptions
    }
  ) : /* @__PURE__ */ o("div", { children: "loading..." }) });
};
export {
  _ as default
};
