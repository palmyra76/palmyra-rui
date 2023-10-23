
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
import { useRef } from 'react';
import { useListener } from '../ChartEventListener';

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
    var options = props.chartOptions || defaultOptions;
    const chartRef = useRef(null);
    const { onClick } = useListener("Bar", props.transformOptions, props.data, chartRef);
    return <Bar ref={chartRef} onClick={onClick} options={options} data={props.data} height={props.height} />;
};

export default BarChart;