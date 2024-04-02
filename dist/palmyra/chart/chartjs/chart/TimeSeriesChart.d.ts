import { ChartInput } from '../Types';
export declare const defaultOptions: {
    responsive: boolean;
    plugins: {
        legend: {
            position: string;
        };
    };
};
declare const LineChart: (props: ChartInput<'line'>) => import("react/jsx-runtime").JSX.Element;
export default LineChart;
