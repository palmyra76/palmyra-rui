import { jsx as p } from "react/jsx-runtime";
import { forwardRef as b, useRef as o, useImperativeHandle as D, useEffect as P, useMemo as S } from "react";
import { Chart as v } from "react-chartjs-2";
import { getDataConverter as T } from "./DataConverterFactory.js";
import { Chart as A, CategoryScale as E, LinearScale as L, RadialLinearScale as w, BarElement as x, PointElement as B, ArcElement as J, LineElement as O, Title as j, Tooltip as H, Legend as I } from "chart.js";
const M = {
  Line: "line",
  Bar: "bar",
  Bubble: "bubble",
  Doughnut: "doughnut",
  Pie: "pie",
  PolarArea: "polarArea",
  Radar: "radar",
  Scatter: "scatter"
}, N = {
  responsive: !0,
  maintainAspectRatio: !1,
  plugins: {
    legend: {
      display: !1
    }
  }
}, $ = [];
A.register(
  E,
  L,
  w,
  x,
  B,
  J,
  O,
  j,
  H,
  I
);
const U = b(function(n, u) {
  const f = n.plugins || $, h = n.options || N, m = o({ ...n, plugins: f, options: h }), c = () => m.current, l = (e) => {
    const r = c();
    var t = y(e, r.type, r.transformOptions);
    return r.postProcessors && r.postProcessors.map((d, q) => {
      t = d(t);
    }), t;
  }, s = o(l(c().data)), g = u || o(null), a = o(null), i = (e) => {
    if (a.current == null) {
      console.error("Chart Reference is not found, data will not be updated");
      return;
    }
    const r = a.current;
    s.current = e, r.data = e, r.update();
  };
  D(g, () => ({
    setData(e) {
      const r = l(e);
      i(r);
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
  }), [u, a, s, m]), P(() => {
    const e = l(n.data);
    i(e);
  }, [n.data]);
  function y(e, r, t) {
    const d = t != null && t.sourceType ? t == null ? void 0 : t.sourceType : e && e instanceof Array ? "default" : "object";
    return T(r, d, t)(e);
  }
  function R() {
    return c().height || "350px";
  }
  const C = S(() => {
    const e = c();
    return /* @__PURE__ */ p(
      v,
      {
        type: M[e.type],
        ref: a,
        plugins: f,
        options: h,
        data: s.current,
        height: R()
      }
    );
  }, []);
  return /* @__PURE__ */ p("div", { className: "palmyra-chart-container-wrapper", children: s ? C : /* @__PURE__ */ p("div", { children: "loading..." }) });
});
export {
  U as ChartJS
};
