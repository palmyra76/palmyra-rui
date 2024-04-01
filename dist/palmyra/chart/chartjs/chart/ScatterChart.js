import { jsx as a } from "react/jsx-runtime";
import { Chart as i, LinearScale as o, CategoryScale as r, PointElement as n, LineElement as s, Title as l, Tooltip as m, Legend as p } from "chart.js";
import { Scatter as c } from "react-chartjs-2";
i.register(o, r, n, s, l, m, p);
const g = {
  responsive: !0,
  maintainAspectRatio: !1,
  plugins: {
    legend: {
      position: "top"
    }
  }
}, u = (t) => {
  var e = t.chartOptions || g;
  return /* @__PURE__ */ a(c, { options: e, data: t.data, height: t.height });
};
export {
  u as default,
  g as defaultOptions
};
