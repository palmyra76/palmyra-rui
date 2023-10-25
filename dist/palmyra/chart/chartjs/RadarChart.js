import { jsx as a } from "react/jsx-runtime";
import { Chart as i, RadialLinearScale as o, PointElement as r, LineElement as n, Filler as l, Tooltip as s, Legend as d } from "chart.js";
import { Radar as m } from "react-chartjs-2";
i.register(
  o,
  r,
  n,
  l,
  s,
  d
);
const p = {
  responsive: !0,
  maintainAspectRatio: !1,
  plugins: {
    legend: {
      position: "top"
    }
  }
}, c = (t) => {
  var e = t.chartOptions || p;
  return /* @__PURE__ */ a(m, { options: e, data: t.data, height: t.height });
};
export {
  c as default,
  p as defaultOptions
};
