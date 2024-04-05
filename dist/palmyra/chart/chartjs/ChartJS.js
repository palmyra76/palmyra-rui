import { jsx as i } from "react/jsx-runtime";
import { forwardRef as y, useRef as s, useImperativeHandle as C } from "react";
import { useListener as R } from "./ChartEventListener.js";
import { getDataConverter as b } from "./DataConverterFactory.js";
import { Chart as p } from "react-chartjs-2";
import { Chart as v, CategoryScale as S, LinearScale as L, RadialLinearScale as T, BarElement as A, PointElement as D, ArcElement as P, LineElement as x, Title as B, Tooltip as E, Legend as w } from "chart.js";
const J = {
  Line: "line",
  Bar: "bar",
  Bubble: "bubble",
  Doughnut: "doughnut",
  Pie: "pie",
  PolarArea: "polarArea",
  Radar: "radar",
  Scatter: "scatter"
}, j = {
  responsive: !0,
  maintainAspectRatio: !1,
  plugins: {
    legend: {
      display: !1
    }
  }
};
v.register(
  S,
  L,
  T,
  A,
  D,
  P,
  x,
  B,
  E,
  w
);
const z = y(function(e, c) {
  const l = (r) => {
    var a = d(r, e.type, e.transformOptions);
    return e.postProcessors && e.postProcessors.map((t, o) => {
      a = t(a);
    }), a;
  }, u = l(e.data), m = c || s(null), n = s(null);
  C(m, () => ({
    setData(r) {
      const a = l(r);
      n.current.data = a, n.current.update();
    }
  }), [e, c]);
  function d(r, a, t) {
    const o = t != null && t.sourceType ? t == null ? void 0 : t.sourceType : r && r instanceof Array ? "default" : "object";
    return b(a, o, t)(r);
  }
  function f() {
    return e.height || "350px";
  }
  const { onClick: h } = R("Bar", e, n);
  var g = e.options || j;
  return /* @__PURE__ */ i("div", { className: "palmyra-chart-container-wrapper", children: u ? /* @__PURE__ */ i(
    p,
    {
      type: J[e.type],
      ref: n,
      onClick: h,
      plugins: e.plugins,
      options: g,
      data: u,
      height: f()
    }
  ) : /* @__PURE__ */ i("div", { children: "loading..." }) });
});
export {
  z as ChartJS
};
