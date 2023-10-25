import { jsx as o } from "react/jsx-runtime";
import { Chart as r, ArcElement as a, Tooltip as i, Legend as n } from "chart.js";
import { Doughnut as s } from "react-chartjs-2";
r.register(a, i, n);
const h = {
  responsive: !0,
  maintainAspectRatio: !1
}, g = (t) => {
  var e = t.chartOptions || h;
  return /* @__PURE__ */ o(s, { options: e, data: t.data, height: t.height });
};
export {
  g as default,
  h as defaultOptions
};
