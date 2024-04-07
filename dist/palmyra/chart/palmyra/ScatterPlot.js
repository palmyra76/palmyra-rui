import { jsxs as p, Fragment as P, jsx as l } from "react/jsx-runtime";
import { forwardRef as v, useRef as d, useState as O, useImperativeHandle as S, useEffect as y } from "react";
import { D3ScatterPlot as C } from "../d3/D3ScatterPlot.js";
import { getD3DataConverter as T } from "../d3/DataConverterFactory.js";
import { useChartDataManager as x } from "../hooks/useChartDataManager.js";
const R = "Scatter";
function j(c, t) {
  const r = t != null && t.sourceType ? t == null ? void 0 : t.sourceType : "default";
  return T(c, r, t);
}
const M = v(function(t, r) {
  const n = d({ ...t }), f = t.filter, [s, i] = O({ datasets: null }), u = () => n.current, o = (e) => {
    var a = e;
    t.postProcessors && t.postProcessors.map((g) => {
      a = g(a);
    }), i(a);
  }, m = j(R, u().transformOptions), D = r || d(null), { fetchData: h } = x({
    storeOptions: t.storeOptions,
    onData: o,
    transformData: m
  });
  return S(D, () => ({
    setData(e) {
      const a = m(e);
      o(a);
    },
    setTransformOptions(e) {
      u().transformOptions = e;
    },
    clearData() {
      o({ datasets: [] });
    },
    clear() {
    },
    reset() {
    }
  }), [r, s, n]), y(() => {
    h(f);
  }, [f]), /* @__PURE__ */ p(P, { children: [
    " ",
    s ? /* @__PURE__ */ l(
      C,
      {
        height: 800,
        width: 1400,
        data: s
      }
    ) : /* @__PURE__ */ l("div", { children: "Error loading data" })
  ] });
});
export {
  M as ScatterPlot
};
