import { ChartInput } from "../Types";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false
};


const DoughnutChart = (props: ChartInput) => {
    var options = props.chartOptions || defaultOptions;
    return <Doughnut options={options} data={props.data} height={props.height} />;
};

export default DoughnutChart;