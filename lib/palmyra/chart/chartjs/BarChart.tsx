
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { ChartInput } from '../Types';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
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

const BarChart = (props: ChartInput) => {
    console.log(props);
    var options = props.chartOptions || defaultOptions;
    return <Bar options={options} data={props.data} height={props.height} />;
};

export default BarChart;