import { jsx as p } from "react/jsx-runtime";
import { useRef as o, useImperativeHandle as C, useEffect as D, useMemo as P } from "react";
import { Chart as v } from "react-chartjs-2";
import { getDataConverter as A } from "./DataConverterFactory.js";
import { Chart as S, CategoryScale as T, LinearScale as E, RadialLinearScale as L, BarElement as x, PointElement as B, ArcElement as O, LineElement as w, Title as j, Tooltip as H, Legend as J } from "chart.js";
const G = {
  Line: "line",
  Bar: "bar",
  GroupedBar: "bar",
  Bubble: "bubble",
  Doughnut: "doughnut",
  Pie: "pie",
  PolarArea: "polarArea",
  Radar: "radar",
  Scatter: "scatter"
}, I = {
  responsive: !0,
  maintainAspectRatio: !1,
  plugins: {
    legend: {
      display: !1
    }
  }
}, M = [];
S.register(
  T,
  E,
  L,
  x,
  B,
  O,
  w,
  j,
  H,
  J
);
function K(n) {
  const u = n.chartRef, d = n.plugins || M, h = n.options || I, m = o({ ...n, plugins: d, options: h }), c = () => m.current, l = (r) => {
    const e = c();
    var t = y(r, e.type, e.transformOptions);
    return e.postProcessors && e.postProcessors.map((f, N) => {
      t = f(t);
    }), t;
  }, s = o(l(c().data)), g = u || o(null), a = o(null), i = (r) => {
    if (a.current == null) {
      console.error("Chart Reference is not found, data will not be updated");
      return;
    }
    const e = a.current;
    s.current = r, e.data = r, e.update();
  };
  C(g, () => ({
    setData(r) {
      const e = l(r);
      i(e);
    },
    clearData() {
      i({ datasets: [] });
    },
    clear() {
      a.current != null && a.current.clear();
    },
    reset() {
      a.current != null && a.current.reset();
    }
  }), [u, a, s, m]), D(() => {
    const r = l(n.data);
    i(r);
  }, [n.data]);
  function y(r, e, t) {
    const f = t != null && t.sourceType ? t == null ? void 0 : t.sourceType : r && r instanceof Array ? "Array" : "Object";
    return A(e, f, t)(r);
  }
  function R() {
    return c().height || "350px";
  }
  const b = P(() => {
    const r = c();
    return /* @__PURE__ */ p(
      v,
      {
        type: G[r.type],
        ref: a,
        plugins: d,
        options: h,
        data: s.current,
        height: R()
      }
    );
  }, []);
  return /* @__PURE__ */ p("div", { className: "palmyra-chart-container-wrapper", children: s ? b : /* @__PURE__ */ p("div", { children: "loading..." }) });
}
export {
  K as ChartJS
};
