import "./ChartEventListener.js";
import "./DataConverterFactory.js";
import r from "./chart/LineChart.js";
import a from "./chart/BarChart.js";
import e from "./chart/PieChart.js";
import o from "./chart/DoughnutChart.js";
import m from "./chart/PolarAreaChart.js";
import u from "./chart/RadarChart.js";
import i from "./chart/ScatterChart.js";
import n from "./chart/BubbleChart.js";
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
      return m;
    case "Radar":
      return u;
    case "Scattter":
      return i;
    case "Bubble":
      return n;
    default:
      return r;
  }
};
export {
  d as ChartFactory
};
