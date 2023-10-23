import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from 'chart.js';

import { Scatter } from 'react-chartjs-2';
import { ChartInput } from '../Types';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const defaultOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        }
    },
};

const ScatterChart = (props: ChartInput) => {
    var options = props.chartOptions || defaultOptions;
    return <Scatter options={options} data={props.data} />;
};

export default ScatterChart;