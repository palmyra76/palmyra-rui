
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

import { Chart } from 'react-chartjs-2';
import { ChartInput } from '../Types';
import { useRef } from 'react';
import { useListener } from '../ChartEventListener';

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
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top'
        }
    },
};



const LineChart = (props: ChartInput<'line'>) => {
    const chartRef = useRef<ChartJS>(null);
    var options = props.chartOptions || defaultOptions;
    const { onClick } = useListener("Line", props, chartRef);

    return <Chart type={'line'} ref={chartRef}
        onClick={onClick}
        options={options} data={props.data} height={props.height} />;
};

export default LineChart;