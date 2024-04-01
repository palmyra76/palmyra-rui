import LineChart from "./chart/LineChart";
import BarChart from "./chart/BarChart";
import { ChartInput } from "./Types";
import PieChart from "./chart/PieChart";
import DoughnutChart from "./chart/DoughnutChart";
import PolarAreaChart from "./chart/PolarAreaChart";
import RadarChart from "./chart/RadarChart";
import ScatterChart from "./chart/ScatterChart";
import BubbleChart from "./chart/BubbleChart";

const ChartFactory = (chartType: string): React.FunctionComponent<ChartInput> => {
    switch (chartType) {
        case "Line":
            return LineChart;
        case "Bar":
            return BarChart;
        case "Pie":
            return PieChart;
        case "Doughnut":
            return DoughnutChart;
        case "PolarArea":
            return PolarAreaChart;
        case "Radar":
            return RadarChart;
        case "Scattter":
            return ScatterChart;
        case "Bubble":
            return BubbleChart;
        default:
            return LineChart;
    }
}

export { ChartFactory };