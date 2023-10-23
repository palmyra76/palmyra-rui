import { ChartInput } from "../Types";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = (props: ChartInput) => {
    return <Pie data={props.data} />;
};

export default PieChart;