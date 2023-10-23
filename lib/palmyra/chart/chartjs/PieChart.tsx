import { ChartInput } from "../Types";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

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
    var options = props.chartOptions || defaultOptions;
    return <Pie options={options} data={props.data} height={props.height} />;
};

export default PieChart;