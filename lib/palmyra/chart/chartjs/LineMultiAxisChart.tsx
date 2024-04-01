
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { ChartInput } from './Types';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const defaultOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        }
    },
};

const LineChart = (props: ChartInput) => {
    var options = props.chartOptions || defaultOptions;
    return <Line options={options} data={props.data} />;
};

export default LineChart;