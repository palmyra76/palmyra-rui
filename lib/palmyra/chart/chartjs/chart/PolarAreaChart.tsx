import { ChartInput } from "../Types";
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import { useListener } from "../ChartEventListener";
import { useRef } from "react";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false
};


const PolarAreaChart = (props: ChartInput) => {
    const chartRef = useRef<any>(null);
    var options = props.chartOptions || defaultOptions;
    const { onClick } = useListener("PolarArea", props, chartRef);

    return <PolarArea ref={chartRef}
        onClick={onClick}
        options={options} data={props.data} height={props.height} />;
};

export default PolarAreaChart;