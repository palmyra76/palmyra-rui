import { jsx as r } from "react/jsx-runtime";
import { Chart as n, LinearScale as a, PointElement as s, Tooltip as l, Legend as m } from "chart.js";
import { Bubble as f } from "react-chartjs-2";
import { useRef as u } from "react";
import { useListener as c } from "../ChartEventListener.js";
n.register(a, s, l, m);
const p = {
  responsive: !0,
  maintainAspectRatio: !1,
  plugins: {
    legend: {
      position: "top"
    }
  }
}, C = (t) => {
  var o = t.chartOptions || p;
  const e = u(null), { onClick: i } = c("Bubble", t, e);
  return /* @__PURE__ */ r(f, { ref: e, onClick: i, options: o, data: t.data, height: t.height });
};
export {
  C as default,
  p as defaultOptions
};
