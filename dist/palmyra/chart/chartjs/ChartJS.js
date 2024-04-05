import { jsx as i } from "react/jsx-runtime";
import { forwardRef as C, useState as R, useRef as m, useImperativeHandle as S } from "react";
import { useListener as b } from "./ChartEventListener.js";
import { getDataConverter as v } from "./DataConverterFactory.js";
import { Chart as D } from "react-chartjs-2";
import { Chart as p, CategoryScale as L, LinearScale as T, RadialLinearScale as A, BarElement as P, PointElement as x, ArcElement as B, LineElement as E, Title as w, Tooltip as J, Legend as j } from "chart.js";
const H = {
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
p.register(
  L,
  T,
  A,
  P,
  x,
  B,
  E,
  w,
  J,
  j
);
const G = C(function(e, n) {
  const c = (a) => {
    var r = d(a, e.type, e.transformOptions);
    return e.postProcessors && e.postProcessors.map((t, u) => {
      r = t(r);
    }), r;
  }, [l, s] = R(c(e.data)), f = n || m(null), o = m(null);
  S(f, () => ({
    setData(a) {
      const r = c(a);
      s(r);
    },
    clearData() {
      s({ datasets: [] });
    }
  }), [e, n]);
  function d(a, r, t) {
    const u = t != null && t.sourceType ? t == null ? void 0 : t.sourceType : a && a instanceof Array ? "default" : "object";
    return v(r, u, t)(a);
  }
  function h() {
    return e.height || "350px";
  }
  const { onClick: g } = b("Bar", e, o);
  var y = e.options || O;
  return /* @__PURE__ */ i("div", { className: "palmyra-chart-container-wrapper", children: l ? /* @__PURE__ */ i(
    D,
    {
      type: H[e.type],
      ref: o,
      onClick: g,
      plugins: e.plugins,
      options: y,
      data: l,
      height: h()
    }
  ) : /* @__PURE__ */ i("div", { children: "loading..." }) });
});
export {
  G as ChartJS
};
