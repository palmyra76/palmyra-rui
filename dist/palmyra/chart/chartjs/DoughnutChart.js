import { jsx as n } from "react/jsx-runtime";
import { Chart as i, ArcElement as a, Tooltip as s, Legend as u } from "chart.js";
import { Doughnut as m } from "react-chartjs-2";
import { useListener as f } from "../ChartEventListener.js";
import { useRef as h } from "react";
i.register(a, s, u);
const c = {
  responsive: !0,
  maintainAspectRatio: !1
}, D = (t) => {
  const e = h(null);
  var o = t.chartOptions || c;
  const { onClick: r } = f("Doughnut", t, e);
  return /* @__PURE__ */ n(
    m,
    {
      ref: e,
      onClick: r,
      options: o,
      data: t.data,
      height: t.height
    }
  );
};
export {
  D as default,
  c as defaultOptions
};
