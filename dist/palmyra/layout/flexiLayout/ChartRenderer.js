import { jsx as e } from "react/jsx-runtime";
import { ChartFactory as D } from "../../chart/ChartFactory.js";
import { useContext as m, useState as T, useMemo as F } from "react";
import { getDataConverter as P } from "../../chart/DataConverterFactory.js";
import { StoreFactoryContext as R, LayoutParamsContext as S } from "./FlexiLayoutContext.js";
import { mergeDeep as j } from "../../utils/index.js";
const L = (n) => {
  const r = n.layout, u = D(r.type), f = m(R), l = m(S);
  var y = r.storeOptions || {}, a = {};
  j(a, y, l);
  const h = f.getChartStore(a), [s, c] = T(null), d = (t) => {
  };
  function O(t, o) {
    var i, p;
    const v = (i = o.transformOptions) != null && i.sourceType ? (p = o.transformOptions) == null ? void 0 : p.sourceType : t instanceof Array ? "default" : "object";
    return P(o.type, v, o.transformOptions)(t);
  }
  function C(t) {
    c(O(t, r));
  }
  F(() => {
    h.query({}).then((t) => C(t)).catch(() => c(null));
  }, []);
  function g() {
    return "300px";
  }
  const x = n.layout.transformOptions || { sourceType: "default" };
  return /* @__PURE__ */ e("div", { className: "palmyra-chart-container-wrapper", children: s ? /* @__PURE__ */ e(
    u,
    {
      data: s,
      onPointClick: d,
      height: g(),
      transformOptions: x,
      chartOptions: r.chartOptions
    }
  ) : /* @__PURE__ */ e("div", { children: "loading..." }) });
};
export {
  L as default
};
