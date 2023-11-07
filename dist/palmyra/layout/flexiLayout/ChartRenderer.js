import { jsx as e } from "react/jsx-runtime";
import D from "../../chart/ChartFactory.js";
import { useContext as m, useState as T, useMemo as F } from "react";
import P from "../../chart/DataConverterFactory.js";
import { StoreFactoryContext as R, LayoutParamsContext as S } from "./FlexiLayoutContext.js";
import { mergeDeep as j } from "../../utils/index.js";
const L = (n) => {
  const o = n.layout, u = D(o.type), f = m(R), l = m(S);
  var y = o.storeOptions || {}, s = {};
  j(s, y, l);
  const h = f.getChartStore(s), [a, c] = T(null), d = (t) => {
    console.log(t);
  };
  function O(t, r) {
    var i, p;
    const v = (i = r.transformOptions) != null && i.sourceType ? (p = r.transformOptions) == null ? void 0 : p.sourceType : t instanceof Array ? "default" : "object";
    return P(r.type, v, r.transformOptions)(t);
  }
  function g(t) {
    c(O(t, o));
  }
  F(() => {
    h.query({}).then((t) => g(t)).catch(() => c(null));
  }, []);
  function C() {
    return "300px";
  }
  const x = n.layout.transformOptions || { sourceType: "default" };
  return /* @__PURE__ */ e("div", { className: "palmyra-chart-container-wrapper", children: a ? /* @__PURE__ */ e(
    u,
    {
      data: a,
      onPointClick: d,
      height: C(),
      transformOptions: x,
      chartOptions: o.chartOptions
    }
  ) : /* @__PURE__ */ e("div", { children: "loading..." }) });
};
export {
  L as default
};
