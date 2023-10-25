import { jsx as e } from "react/jsx-runtime";
import v from "../../chart/ChartFactory.js";
import { useContext as f, useState as x, useMemo as D } from "react";
import F from "../../chart/DataConverterFactory.js";
import { StoreFactoryContext as P, LayoutParamsContext as S } from "./FlexiLayoutContext.js";
import { mergeDeep as j } from "../../utils/index.js";
const A = (n) => {
  const o = n.layout, u = v(o.type), l = f(P), s = f(S);
  var a = o.storeOptions || {};
  s && j(a, s);
  const d = l.getChartStore(a), [i, c] = x(null), h = (t) => {
    console.log(t);
  };
  function O(t, r) {
    var p;
    if (((p = r.transformOptions) == null ? void 0 : p.sourceType) == null) {
      var m = t instanceof Array ? "default" : "object";
      r.transformOptions == null ? r.transformOptions = { sourceType: m } : r.transformOptions.sourceType = m;
    }
    return F(r.type, r)(t);
  }
  function y(t) {
    c(O(t, o));
  }
  D(() => {
    d.query({}).then((t) => y(t)).catch(() => c(null));
  }, []);
  function g() {
    return "300px";
  }
  const C = n.layout.transformOptions || { sourceType: "default" };
  return /* @__PURE__ */ e("div", { className: "palmyra-chart-container-wrapper", children: i ? /* @__PURE__ */ e(
    u,
    {
      data: i,
      onPointClick: h,
      height: g(),
      transformOptions: C,
      chartOptions: o.chartOptions
    }
  ) : /* @__PURE__ */ e("div", { children: "loading..." }) });
};
export {
  A as default
};
