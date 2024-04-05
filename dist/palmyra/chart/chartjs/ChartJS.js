import { jsx as l } from "react/jsx-runtime";
import { forwardRef as p, useRef as o, useImperativeHandle as C } from "react";
import { useListener as R } from "./ChartEventListener.js";
import { getDataConverter as b } from "./DataConverterFactory.js";
import { Chart as v } from "react-chartjs-2";
import { Chart as S, CategoryScale as A, LinearScale as L, RadialLinearScale as T, BarElement as D, PointElement as E, ArcElement as P, LineElement as x, Title as B, Tooltip as j, Legend as w } from "chart.js";
const J = {
  Line: "line",
  Bar: "bar",
  Bubble: "bubble",
  Doughnut: "doughnut",
  Pie: "pie",
  PolarArea: "polarArea",
  Radar: "radar",
  Scatter: "scatter"
}, O = {
  responsive: !0,
  maintainAspectRatio: !1,
  plugins: {
    legend: {
      display: !1
    }
  }
};
S.register(
  A,
  L,
  T,
  D,
  E,
  P,
  x,
  B,
  j,
  w
);
const F = p(function(r, c) {
  const i = (e) => {
    var n = d(e, r.type, r.transformOptions);
    return r.postProcessors && r.postProcessors.map((a, s) => {
      n = a(n);
    }), n;
  }, u = i(r.data), f = c || o(null), t = o(null), m = (e) => e == null || e == null ? !0 : e instanceof Array ? e.length == 0 : Object.keys(e).length == 0;
  C(f, () => ({
    setData(e) {
      if (console.log(e), m(e))
        t.current.clear(), t.current.data = { datasets: [] }, t.current.update();
      else {
        const n = i(e);
        t.current.data = n, t.current.update();
      }
    },
    clear() {
      t.current.clear(), t.current.data = { datasets: [] }, t.current.update();
    }
  }), [r, c]);
  function d(e, n, a) {
    const s = a != null && a.sourceType ? a == null ? void 0 : a.sourceType : e && e instanceof Array ? "default" : "object";
    return b(n, s, a)(e);
  }
  function h() {
    return r.height || "350px";
  }
  const { onClick: g } = R("Bar", r, t);
  var y = r.options || O;
  return /* @__PURE__ */ l("div", { className: "palmyra-chart-container-wrapper", children: u ? /* @__PURE__ */ l(
    v,
    {
      type: J[r.type],
      ref: t,
      onClick: g,
      plugins: r.plugins,
      options: y,
      data: u,
      height: h()
    }
  ) : /* @__PURE__ */ l("div", { children: "loading..." }) });
});
export {
  F as ChartJS
};
