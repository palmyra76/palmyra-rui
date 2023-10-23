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

import { Scatter } from 'react-chartjs-2';
import { ChartInput } from '../Types';

ChartJS.register(LinearScale,CategoryScale, PointElement, LineElement,Title, Tooltip, Legend);

export const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top'
        }
    }    
};

const ScatterChart = (props: ChartInput) => {
    var options = props.chartOptions || defaultOptions;
    return <Scatter options={options} data={props.data} height={props.height} />;
};

export default ScatterChart;