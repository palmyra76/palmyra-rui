import { jsx as i } from "react/jsx-runtime";
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
  const l = (e) => {
    var n = d(e, r.type, r.transformOptions);
    return r.postProcessors && r.postProcessors.map((t, s) => {
      n = t(n);
    }), n;
  }, u = l(r.data), f = c || o(null), a = o(null), m = (e) => e == null || e == null ? !0 : e instanceof Array ? e.length == 0 : Object.keys(e).length == 0;
  C(f, () => ({
    setData(e) {
      if (m(e))
        a.current.clear(), a.current.data = { datasets: [] }, a.current.update();
      else {
        const n = l(e);
        a.current.data = n, a.current.update();
      }
    }
  }), [r, c]);
  function d(e, n, t) {
    const s = t != null && t.sourceType ? t == null ? void 0 : t.sourceType : e && e instanceof Array ? "default" : "object";
    return b(n, s, t)(e);
  }
  function h() {
    return r.height || "350px";
  }
  const { onClick: g } = R("Bar", r, a);
  var y = r.options || O;
  return /* @__PURE__ */ i("div", { className: "palmyra-chart-container-wrapper", children: u ? /* @__PURE__ */ i(
    v,
    {
      type: J[r.type],
      ref: a,
      onClick: g,
      plugins: r.plugins,
      options: y,
      data: u,
      height: h()
    }
  ) : /* @__PURE__ */ i("div", { children: "loading..." }) });
});
export {
  F as ChartJS
};
