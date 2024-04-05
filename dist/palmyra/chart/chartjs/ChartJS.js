import { jsx as l } from "react/jsx-runtime";
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
const z = p(function(t, u) {
  const s = (e) => {
    var n = f(e, t.type, t.transformOptions);
    return t.postProcessors && t.postProcessors.map((a, o) => {
      n = a(n);
    }), n;
  }, c = i(s(t.data)), d = u || i(null), r = i(null);
  y(d, () => ({
    setData(e) {
      if (r.current == null)
        return;
      const n = s(e);
      c.current = n, r.current.data = n, r.current.update();
    },
    clearData() {
      if (r.current == null)
        return;
      const e = r.current;
      e.data.labels.forEach(() => {
        e.data.labels.pop();
      }), e.data.datasets.forEach(() => {
        e.data.datasets.pop();
      }), c.current = { datasets: [] }, e.update();
    },
    clear() {
      r.current != null && r.current.clear();
    },
    reset() {
      r.current != null && r.current.reset();
    }
  }), [t, u, r]);
  function f(e, n, a) {
    const o = a != null && a.sourceType ? a == null ? void 0 : a.sourceType : e && e instanceof Array ? "default" : "object";
    return C(n, o, a)(e);
  }
  function m() {
    return t.height || "350px";
  }
  const { onClick: h } = b("Bar", t, r);
  var g = t.options || j;
  return /* @__PURE__ */ l("div", { className: "palmyra-chart-container-wrapper", children: c ? /* @__PURE__ */ l(
    R,
    {
      type: J[t.type],
      ref: r,
      onClick: h,
      plugins: t.plugins,
      options: g,
      data: c.current,
      height: m()
    }
  ) : /* @__PURE__ */ l("div", { children: "loading..." }) });
});
export {
  z as ChartJS
};
