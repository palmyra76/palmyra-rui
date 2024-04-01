import { jsx as o } from "react/jsx-runtime";
import { Chart as i, CategoryScale as n, LinearScale as r, PointElement as a, LineElement as s, Title as l, Tooltip as p, Legend as m } from "chart.js";
import { Line as d } from "react-chartjs-2";
i.register(
  n,
  r,
  a,
  s,
  l,
  p,
  m
);
const c = {
  responsive: !0,
  plugins: {
    legend: {
      position: "top"
    }
  }
}, L = (t) => {
  var e = t.chartOptions || c;
  return /* @__PURE__ */ o(d, { options: e, data: t.data });
};
export {
  L as default,
  c as defaultOptions
};
