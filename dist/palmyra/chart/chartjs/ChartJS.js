import { jsx as i } from "react/jsx-runtime";
import { forwardRef as C, useState as R, useRef as u, useImperativeHandle as S } from "react";
import { useListener as b } from "./ChartEventListener.js";
import { getDataConverter as v } from "./DataConverterFactory.js";
import { Chart as p } from "react-chartjs-2";
import { Chart as D, CategoryScale as L, LinearScale as T, RadialLinearScale as A, BarElement as P, PointElement as x, ArcElement as B, LineElement as E, Title as w, Tooltip as J, Legend as j } from "chart.js";
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
D.register(
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
  const c = (r) => {
    var a = d(r, e.type, e.transformOptions);
    return e.postProcessors && e.postProcessors.map((t, o) => {
      a = t(a);
    }), a;
  }, [l, m] = R(c(e.data)), f = n || u(null), s = u(null);
  S(f, () => ({
    setData(r) {
      m(c(r));
    }
  }), [e, n]);
  function d(r, a, t) {
    const o = t != null && t.sourceType ? t == null ? void 0 : t.sourceType : r instanceof Array ? "default" : "object";
    return v(a, o, t)(r);
  }
  function h() {
    return e.height || "350px";
  }
  const { onClick: g } = b("Bar", e, s);
  var y = e.options || O;
  return /* @__PURE__ */ i("div", { className: "palmyra-chart-container-wrapper", children: l ? /* @__PURE__ */ i(
    p,
    {
      type: H[e.type],
      ref: s,
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
