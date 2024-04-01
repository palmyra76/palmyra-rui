import "./ChartEventListener.js";
import "./DataConverterFactory.js";
import r from "./LineChart.js";
import a from "./BarChart.js";
import e from "./PieChart.js";
import o from "./DoughnutChart.js";
import m from "./PolarAreaChart.js";
import u from "./RadarChart.js";
import i from "./ScatterChart.js";
import n from "./BubbleChart.js";
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
