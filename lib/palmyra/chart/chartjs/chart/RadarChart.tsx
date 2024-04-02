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
import { useRef } from "react";
import { Radar } from 'react-chartjs-2';
import { useListener } from "../ChartEventListener";

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

const RadarChart = (props: ChartInput<'radar'>) => {
    const chartRef = useRef<any>(null);
    var options = props.chartOptions || defaultOptions;
    const { onClick } = useListener("Radar", props, chartRef);

    return <Radar
        ref={chartRef}
        onClick={onClick}
        options={options} data={props.data} height={props.height} />;
};

export default RadarChart;