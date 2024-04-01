import LineChart from "./chartjs/LineChart";
import BarChart from "./chartjs/BarChart";
import { ChartInput } from "./Types";
import PieChart from "./chartjs/PieChart";
import DoughnutChart from "./chartjs/DoughnutChart";
import PolarAreaChart from "./chartjs/PolarAreaChart";
import RadarChart from "./chartjs/RadarChart";
import ScatterChart from "./chartjs/ScatterChart";
import BubbleChart from "./chartjs/BubbleChart";

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