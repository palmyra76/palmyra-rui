import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Bubble } from 'react-chartjs-2';
import { ChartInput } from '../Types';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const defaultOptions = {
    responsive: true,
    maintainAspectRatio:false,
    plugins: {
        legend: {
            position: 'top'
        }
    },
};

const BubbleChart = (props: ChartInput) => {
    var options = props.chartOptions || defaultOptions;
    return <Bubble options={options} data={props.data} height={props.height}/>;
};

export default BubbleChart;