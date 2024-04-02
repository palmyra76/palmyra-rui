import { ChartInput } from "../Types";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useListener } from "../ChartEventListener";
import { useRef } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false
};


const DoughnutChart = (props: ChartInput<'doughnut'>) => {
    const chartRef = useRef<any>(null);
    var options = props.chartOptions || defaultOptions;
    const { onClick } = useListener("Doughnut", props, chartRef);

    return <Doughnut
        ref={chartRef}
        onClick={onClick}
        options={options} data={props.data} height={props.height} />;
};

export default DoughnutChart;