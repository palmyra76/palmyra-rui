import { ChartInput } from "../Types";
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const defaultOptions = {
    responsive: true,
    maintainAspectRatio: false
};


const PolarAreaChart = (props: ChartInput) => {
    var options = props.chartOptions || defaultOptions;
    return <PolarArea options={options} data={props.data} height={props.height}/>;
};

export default PolarAreaChart;