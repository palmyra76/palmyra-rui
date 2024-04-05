import { jsx as l } from "react/jsx-runtime";
import { forwardRef as C, useState as R, useRef as f, useImperativeHandle as S } from "react";
import { useListener as b } from "./ChartEventListener.js";
import { getDataConverter as v } from "./DataConverterFactory.js";
import { Chart as D } from "react-chartjs-2";
import { Chart as L, CategoryScale as T, LinearScale as A, RadialLinearScale as P, BarElement as p, PointElement as x, ArcElement as B, LineElement as E, Title as w, Tooltip as J, Legend as j } from "chart.js";
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
L.register(
  T,
  A,
  P,
  p,
  x,
  B,
  E,
  w,
  J,
  j
);
const G = C(function(e, c) {
  const i = (a) => {
    var n = d(a, e.type, e.transformOptions);
    return e.postProcessors && e.postProcessors.map((r, o) => {
      n = r(n);
    }), n;
  }, [u, s] = R(i(e.data)), m = c || f(null), t = f(null);
  S(m, () => ({
    setData(a) {
      if (t.current == null)
        return;
      const n = i(a);
      s(n);
    },
    clearData() {
      s({ datasets: [] });
    },
    clear() {
      t.current != null && t.current.clear();
    },
    reset() {
      t.current != null && t.current.reset();
    }
  }), [e, c, t, e.data]);
  function d(a, n, r) {
    const o = r != null && r.sourceType ? r == null ? void 0 : r.sourceType : a && a instanceof Array ? "default" : "object";
    return v(n, o, r)(a);
  }
  function h() {
    return e.height || "350px";
  }
  const { onClick: g } = b("Bar", e, t);
  var y = e.options || O;
  return /* @__PURE__ */ l("div", { className: "palmyra-chart-container-wrapper", children: u ? /* @__PURE__ */ l(
    D,
    {
      type: H[e.type],
      ref: t,
      onClick: g,
      plugins: e.plugins,
      options: y,
      data: u,
      height: h()
    }
  ) : /* @__PURE__ */ l("div", { children: "loading..." }) });
});
export {
  G as ChartJS
};
