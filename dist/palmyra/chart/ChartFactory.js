import "./ChartEventListener.js";
import "./DataConverterFactory.js";
import r from "./chartjs/LineChart.js";
import a from "./chartjs/BarChart.js";
import e from "./chartjs/PieChart.js";
import o from "./chartjs/DoughnutChart.js";
import m from "./chartjs/PolarAreaChart.js";
import u from "./chartjs/RadarChart.js";
import i from "./chartjs/ScatterChart.js";
import n from "./chartjs/BubbleChart.js";
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
