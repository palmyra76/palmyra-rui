import r from "./chart/LineChart.js";
import a from "./chart/BarChart.js";
import e from "./chart/PieChart.js";
import o from "./chart/DoughnutChart.js";
import m from "./chart/PolarAreaChart.js";
import u from "./chart/RadarChart.js";
import n from "./chart/ScatterChart.js";
import c from "./chart/BubbleChart.js";
const B = (t) => {
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
      return m;
    case "Radar":
      return u;
    case "Scattter":
      return n;
    case "Bubble":
      return c;
    default:
      return r;
  }
};
export {
  B as ChartFactory
};
