import { jsx as e } from "react/jsx-runtime";
import { Chart as r, RadialLinearScale as o, ArcElement as i, Tooltip as n, Legend as s } from "chart.js";
import { PolarArea as l } from "react-chartjs-2";
r.register(o, i, n, s);
const m = {
  responsive: !0,
  maintainAspectRatio: !1
}, f = (t) => {
  var a = t.chartOptions || m;
  return /* @__PURE__ */ e(l, { options: a, data: t.data, height: t.height });
};
export {
  f as default,
  m as defaultOptions
};
