import { jsx as a } from "react/jsx-runtime";
import { Chart as i, CategoryScale as n, LinearScale as s, BarElement as l, Title as m, Tooltip as f, Legend as c } from "chart.js";
import { Bar as p } from "react-chartjs-2";
import { useRef as h } from "react";
import { useListener as u } from "./ChartEventListener.js";
i.register(
  n,
  s,
  l,
  m,
  f,
  c
);
const g = {
  responsive: !0,
  maintainAspectRatio: !1,
  plugins: {
    legend: {
      position: "top"
    }
  }
}, v = (t) => {
  var r = t.chartOptions || g;
  const e = h(null), { onClick: o } = u("Bar", t, e);
  return /* @__PURE__ */ a(p, { ref: e, onClick: o, options: r, data: t.data, height: t.height });
};
export {
  v as default,
  g as defaultOptions
};
