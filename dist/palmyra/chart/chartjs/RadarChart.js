import { jsx as r } from "react/jsx-runtime";
import { Chart as o, RadialLinearScale as n, PointElement as s, LineElement as l, Filler as m, Tooltip as f, Legend as d } from "chart.js";
import { useRef as c } from "react";
import { Radar as p } from "react-chartjs-2";
import { useListener as h } from "./ChartEventListener.js";
o.register(
  n,
  s,
  l,
  m,
  f,
  d
);
const u = {
  responsive: !0,
  maintainAspectRatio: !1,
  plugins: {
    legend: {
      position: "top"
    }
  }
}, x = (t) => {
  const e = c(null);
  var a = t.chartOptions || u;
  const { onClick: i } = h("Radar", t, e);
  return /* @__PURE__ */ r(
    p,
    {
      ref: e,
      onClick: i,
      options: a,
      data: t.data,
      height: t.height
    }
  );
};
export {
  x as default,
  u as defaultOptions
};
