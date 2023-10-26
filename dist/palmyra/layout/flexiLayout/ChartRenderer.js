import { jsx as e } from "react/jsx-runtime";
import v from "../../chart/ChartFactory.js";
import { useContext as p, useState as x, useMemo as D } from "react";
import F from "../../chart/DataConverterFactory.js";
import { StoreFactoryContext as P, LayoutParamsContext as S } from "./FlexiLayoutContext.js";
import { mergeDeep as j } from "../../utils/index.js";
const A = (n) => {
  const o = n.layout, f = v(o.type), u = p(P), a = p(S);
  var s = o.storeOptions || {};
  a && j(s, a);
  const l = u.getChartStore(s), [i, c] = x(null), h = (t) => {
    console.log(t);
  };
  function y(t, r) {
    var m;
    if (((m = r.transformOptions) == null ? void 0 : m.sourceType) == null)
      var C = t instanceof Array ? "default" : "object";
    return F(r.type, C, r.transformOptions)(t);
  }
  function d(t) {
    c(y(t, o));
  }
  D(() => {
    l.query({}).then((t) => d(t)).catch(() => c(null));
  }, []);
  function O() {
    return "300px";
  }
  const g = n.layout.transformOptions || { sourceType: "default" };
  return /* @__PURE__ */ e("div", { className: "palmyra-chart-container-wrapper", children: i ? /* @__PURE__ */ e(
    f,
    {
      data: i,
      onPointClick: h,
      height: O(),
      transformOptions: g,
      chartOptions: o.chartOptions
    }
  ) : /* @__PURE__ */ e("div", { children: "loading..." }) });
};
export {
  A as default
};
