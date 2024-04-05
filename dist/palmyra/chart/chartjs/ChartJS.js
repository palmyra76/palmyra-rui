import { jsx as s } from "react/jsx-runtime";
import { forwardRef as p, useRef as i, useImperativeHandle as y } from "react";
import { useListener as b } from "./ChartEventListener.js";
import { getDataConverter as C } from "./DataConverterFactory.js";
import { Chart as R } from "react-chartjs-2";
import { Chart as v, CategoryScale as S, LinearScale as D, RadialLinearScale as E, BarElement as L, PointElement as T, ArcElement as A, LineElement as P, Title as x, Tooltip as B, Legend as w } from "chart.js";
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
  D,
  E,
  L,
  T,
  A,
  P,
  x,
  B,
  w
);
const z = p(function(t, l) {
  const u = (e) => {
    var r = f(e, t.type, t.transformOptions);
    return t.postProcessors && t.postProcessors.map((a, o) => {
      r = a(r);
    }), r;
  }, c = i(u(t.data)), d = l || i(null), n = i(null);
  y(d, () => ({
    setData(e) {
      const r = u(e);
      c.current = r, n.current.data = r, n.current.update();
    },
    clearData() {
      const e = n.current;
      e.data.labels.forEach(() => {
        e.data.labels.pop();
      }), e.data.datasets.forEach(() => {
        e.data.datasets.pop();
      }), c.current = { datasets: [] }, e.update();
    }
  }), [t, l]);
  function f(e, r, a) {
    const o = a != null && a.sourceType ? a == null ? void 0 : a.sourceType : e && e instanceof Array ? "default" : "object";
    return C(r, o, a)(e);
  }
  function m() {
    return t.height || "350px";
  }
  const { onClick: h } = b("Bar", t, n);
  var g = t.options || j;
  return /* @__PURE__ */ s("div", { className: "palmyra-chart-container-wrapper", children: c ? /* @__PURE__ */ s(
    R,
    {
      type: J[t.type],
      ref: n,
      onClick: h,
      plugins: t.plugins,
      options: g,
      data: c.current,
      height: m()
    }
  ) : /* @__PURE__ */ s("div", { children: "loading..." }) });
});
export {
  z as ChartJS
};
