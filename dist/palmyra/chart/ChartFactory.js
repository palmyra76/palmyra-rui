import r from "./chartjs/LineChart.js";
import a from "./chartjs/BarChart.js";
import e from "./chartjs/PieChart.js";
import o from "./chartjs/DoughnutChart.js";
import u from "./chartjs/PolarAreaChart.js";
import m from "./chartjs/RadarChart.js";
import n from "./chartjs/ScatterChart.js";
import c from "./chartjs/BubbleChart.js";
const d = (t) => {
  switch (t) {
    case "Line":
      return r;
    case "Bar":
      return a;
    case "Pie":
      return e;
    case "Doughnut":
      return o;
    case "PolarArea":
      return u;
    case "Radar":
      return m;
    case "Scattter":
      return n;
    case "Bubble":
      return c;
    default:
      return r;
  }
};
export {
  d as default
};
