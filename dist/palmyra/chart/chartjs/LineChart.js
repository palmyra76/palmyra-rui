import { jsx as o } from "react/jsx-runtime";
import { Chart as r, CategoryScale as a, LinearScale as s, PointElement as l, LineElement as m, Title as f, Tooltip as c, Legend as h } from "chart.js";
import { Chart as p } from "react-chartjs-2";
import { useRef as u } from "react";
import { useListener as g } from "../ChartEventListener.js";
r.register(
  a,
  s,
  l,
  m,
  f,
  c,
  h
);
const d = {
  responsive: !0,
  maintainAspectRatio: !1,
  plugins: {
    legend: {
      position: "top"
    }
  }
}, y = (t) => {
  const e = u(null);
  var i = t.chartOptions || d;
  const { onClick: n } = g("Line", t, e);
  return /* @__PURE__ */ o(
    p,
    {
      type: "line",
      ref: e,
      onClick: n,
      options: i,
      data: t.data,
      height: t.height
    }
  );
};
export {
  y as default,
  d as defaultOptions
};
