import { jsx as e } from "react/jsx-runtime";
import v from "../../chart/ChartFactory.js";
import { useContext as u, useState as D, useMemo as T } from "react";
import F from "../../chart/DataConverterFactory.js";
import { StoreFactoryContext as P, LayoutParamsContext as S } from "./FlexiLayoutContext.js";
import { mergeDeep as j } from "../../utils/index.js";
const H = (n) => {
  const o = n.layout, f = v(o.type), l = u(P), s = u(S);
  var a = o.storeOptions || {};
  s && j(a, s);
  const y = l.getChartStore(a), [c, i] = D(null), h = (t) => {
    console.log(t);
  };
  function d(t, r) {
    var p, m;
    const x = (p = r.transformOptions) != null && p.sourceType ? (m = r.transformOptions) == null ? void 0 : m.sourceType : t instanceof Array ? "default" : "object";
    return F(r.type, x, r.transformOptions)(t);
  }
  function O(t) {
    i(d(t, o));
  }
  T(() => {
    y.query({}).then((t) => O(t)).catch(() => i(null));
  }, []);
  function g() {
    return "300px";
  }
  const C = n.layout.transformOptions || { sourceType: "default" };
  return /* @__PURE__ */ e("div", { className: "palmyra-chart-container-wrapper", children: c ? /* @__PURE__ */ e(
    f,
    {
      data: c,
      onPointClick: h,
      height: g(),
      transformOptions: C,
      chartOptions: o.chartOptions
    }
  ) : /* @__PURE__ */ e("div", { children: "loading..." }) });
};
export {
  H as default
};
