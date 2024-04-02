import { ChartInput } from '../Types';
export declare const defaultOptions: {
    responsive: boolean;
    maintainAspectRatio: boolean;
    plugins: {
        legend: {
            position: string;
        };
    };
};
declare const ScatterChart: (props: ChartInput<'scatter'>) => import("react/jsx-runtime").JSX.Element;
export default ScatterChart;
