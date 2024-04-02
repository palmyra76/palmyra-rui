import { ChartInput } from '../..';
export declare const defaultOptions: {
    responsive: boolean;
    maintainAspectRatio: boolean;
    plugins: {
        legend: {
            position: string;
        };
    };
};
declare const BarChart: (props: ChartInput<'bar'>) => import("react/jsx-runtime").JSX.Element;
export default BarChart;
