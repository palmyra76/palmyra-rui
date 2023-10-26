import { jsx as r } from "react/jsx-runtime";
import { Chart as n, ArcElement as a, Tooltip as s, Legend as m } from "chart.js";
import { useRef as f } from "react";
import { Pie as l } from "react-chartjs-2";
import { useListener as c } from "../ChartEventListener.js";
n.register(a, s, m);
const p = {
  responsive: !0,
  maintainAspectRatio: !1,
  plugins: {
    legend: {
      position: "top"
    }
  }
}, P = (t) => {
  const e = f(null);
  var i = t.chartOptions || p;
  const { onClick: o } = c("Pie", t, e);
  return /* @__PURE__ */ r(
    l,
    {
      ref: e,
      onClick: o,
      options: i,
      data: t.data,
      height: t.height
    }
  );
};
export {
  P as default,
  p as defaultOptions
};
