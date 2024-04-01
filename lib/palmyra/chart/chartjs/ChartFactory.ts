import LineChart from "./LineChart";
import BarChart from "./BarChart";
import { ChartInput } from "./Types";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";
import PolarAreaChart from "./PolarAreaChart";
import RadarChart from "./RadarChart";
import ScatterChart from "./ScatterChart";
import BubbleChart from "./BubbleChart";

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