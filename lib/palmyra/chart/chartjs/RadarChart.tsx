import { ChartInput } from "../Types";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top'
        }
    },
};

const RadarChart = (props: ChartInput) => {
    var options = props.chartOptions || defaultOptions;
    return <Radar options={options} data={props.data} height={props.height} />;
};

export default RadarChart;