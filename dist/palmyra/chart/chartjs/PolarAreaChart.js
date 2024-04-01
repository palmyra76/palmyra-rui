import { jsx as o } from "react/jsx-runtime";
import { Chart as i, RadialLinearScale as n, ArcElement as s, Tooltip as l, Legend as m } from "chart.js";
import { PolarArea as f } from "react-chartjs-2";
import { useListener as c } from "./ChartEventListener.js";
import { useRef as h } from "react";
i.register(n, s, l, m);
const u = {
  responsive: !0,
  maintainAspectRatio: !1
}, C = (t) => {
  const e = h(null);
  var r = t.chartOptions || u;
  const { onClick: a } = c("PolarArea", t, e);
  return /* @__PURE__ */ o(
    f,
    {
      ref: e,
      onClick: a,
      options: r,
      data: t.data,
      height: t.height
    }
  );
};
export {
  C as default,
  u as defaultOptions
};
