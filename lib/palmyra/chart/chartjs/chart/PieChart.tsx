import { ChartInput } from "../Types";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useRef } from "react";
import { Pie } from 'react-chartjs-2';
import { useListener } from "../ChartEventListener";

ChartJS.register(ArcElement, Tooltip, Legend);

export const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top'
        }
    },
};

const PieChart = (props: ChartInput) => {
    const chartRef = useRef<any>(null);
    var options = props.chartOptions || defaultOptions;
    const { onClick } = useListener("Pie", props, chartRef);

    return <Pie ref={chartRef}
        onClick={onClick}
        options={options} data={props.data} height={props.height} />;
};

export default PieChart;