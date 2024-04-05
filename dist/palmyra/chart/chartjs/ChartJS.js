import { jsx as i } from "react/jsx-runtime";
import { forwardRef as p, useRef as o, useImperativeHandle as v } from "react";
import { useListener as C } from "./ChartEventListener.js";
import { getDataConverter as R } from "./DataConverterFactory.js";
import { Chart as b } from "react-chartjs-2";
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
    return r.postProcessors && r.postProcessors.map((t, u) => {
      n = t(n);
    }), n;
  }, s = l(r.data), f = c || o(null), a = o(null), m = (e) => e == null || e == null ? !0 : e instanceof Array ? e.length == 0 : Object.keys(e).length == 0;
  v(f, () => ({
    setData(e) {
      if (m(e))
        console.log("clearing canvas"), a.current.clear(), a.current.data = { datasets: [] }, a.current.update();
      else {
        const n = l(e);
        a.current.data = n, a.current.update();
      }
    }
  }), [r, c]);
  function d(e, n, t) {
    const u = t != null && t.sourceType ? t == null ? void 0 : t.sourceType : e && e instanceof Array ? "default" : "object";
    return R(n, u, t)(e);
  }
  function g() {
    return r.height || "350px";
  }
  const { onClick: h } = C("Bar", r, a);
  var y = r.options || O;
  return /* @__PURE__ */ i("div", { className: "palmyra-chart-container-wrapper", children: s ? /* @__PURE__ */ i(
    b,
    {
      type: J[r.type],
      ref: a,
      onClick: h,
      plugins: r.plugins,
      options: y,
      data: s,
      height: g()
    }
  ) : /* @__PURE__ */ i("div", { children: "loading..." }) });
});
export {
  F as ChartJS
};
