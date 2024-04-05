import { jsx as s } from "react/jsx-runtime";
import { forwardRef as R, useRef as o, useImperativeHandle as b, useEffect as D, useMemo as P } from "react";
import { useListener as S } from "./ChartEventListener.js";
import { getDataConverter as v } from "./DataConverterFactory.js";
import { Chart as L } from "react-chartjs-2";
import { Chart as T, CategoryScale as A, LinearScale as E, RadialLinearScale as w, BarElement as x, PointElement as B, ArcElement as J, LineElement as O, Title as j, Tooltip as k, Legend as H } from "chart.js";
const I = {
  Line: "line",
  Bar: "bar",
  Bubble: "bubble",
  Doughnut: "doughnut",
  Pie: "pie",
  PolarArea: "polarArea",
  Radar: "radar",
  Scatter: "scatter"
}, M = {
  responsive: !0,
  maintainAspectRatio: !1,
  plugins: {
    legend: {
      display: !1
    }
  }
}, N = [];
T.register(
  A,
  E,
  w,
  x,
  B,
  J,
  O,
  j,
  k,
  H
);
const Q = R(function(e, u) {
  const f = e.plugins || N, d = e.options || M, l = (t) => {
    var r = g(t, e.type, e.transformOptions);
    return e.postProcessors && e.postProcessors.map((n, m) => {
      r = n(r);
    }), r;
  }, c = o(l(e.data)), h = u || o(null), a = o(null), i = (t) => {
    if (a.current == null) {
      console.error("Chart Reference is not found, data will not be updated");
      return;
    }
    const r = a.current;
    c.current = t, r.data = t, r.update();
  };
  b(h, () => ({
    setData(t) {
      const r = l(t);
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
  }), [u, a, c]), D(() => {
    const t = l(e.data);
    i(t);
  }, [e.data]);
  function g(t, r, n) {
    const m = n != null && n.sourceType ? n == null ? void 0 : n.sourceType : t && t instanceof Array ? "default" : "object";
    return v(r, m, n)(t);
  }
  function y() {
    return e.height || "350px";
  }
  const C = P(() => {
    const { onClick: t } = S("Bar", e, a);
    return /* @__PURE__ */ s(
      L,
      {
        type: I[e.type],
        ref: a,
        onClick: t,
        plugins: f,
        options: d,
        data: c.current,
        height: y()
      }
    );
  }, [e.type, e.onPointClick, e.transformOptions, f, d, e.height]);
  return /* @__PURE__ */ s("div", { className: "palmyra-chart-container-wrapper", children: c ? C : /* @__PURE__ */ s("div", { children: "loading..." }) });
});
export {
  Q as ChartJS
};
