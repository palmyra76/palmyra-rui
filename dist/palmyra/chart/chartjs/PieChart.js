import { jsx as i } from "react/jsx-runtime";
import { Chart as o, ArcElement as r, Tooltip as a, Legend as n } from "chart.js";
import { Pie as s } from "react-chartjs-2";
o.register(r, a, n);
const p = {
  responsive: !0,
  maintainAspectRatio: !1,
  plugins: {
    legend: {
      position: "top"
    }
  }
}, d = (t) => {
  var e = t.chartOptions || p;
  return /* @__PURE__ */ i(s, { options: e, data: t.data, height: t.height });
};
export {
  d as default,
  p as defaultOptions
};
