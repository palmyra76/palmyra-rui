import { jsxs as P, Fragment as v, jsx as l } from "react/jsx-runtime";
import { forwardRef as S, useRef as m, useState as p, useImperativeHandle as y, useEffect as C } from "react";
import { D3ScatterPlot as O } from "../d3/D3ScatterPlot.js";
import { getD3DataConverter as x } from "../d3/DataConverterFactory.js";
import { useChartDataManager as R } from "../hooks/useChartDataManager.js";
const T = "Scatter";
function j(o, t) {
  const r = t != null && t.sourceType ? t == null ? void 0 : t.sourceType : "default";
  return x(o, r, t);
}
const M = S(function(t, r) {
  const n = m({ ...t }), f = t.filter, [a, d] = p({ datasets: null }), D = () => n.current, s = (c) => {
    var e = c;
    t.postProcessors && t.postProcessors.map((g) => {
      e = g(e);
    }), d(e);
  }, u = j(T, D().transformOptions), i = r || m(null), { fetchData: h } = R({
    storeOptions: t.storeOptions,
    onData: s,
    transformData: u
  });
  return y(i, () => ({
    setData(c) {
      const e = u(c);
      s(e);
    },
    clearData() {
      s({ datasets: [] });
    },
    clear() {
    },
    reset() {
    }
  }), [r, a, n]), C(() => {
    h(f);
  }, [f]), /* @__PURE__ */ P(v, { children: [
    " ",
    a ? /* @__PURE__ */ l(
      O,
      {
        height: 800,
        width: 1400,
        data: a
      }
    ) : /* @__PURE__ */ l("div", { children: "Error loading data" })
  ] });
});
export {
  M as ScatterPlot
};
