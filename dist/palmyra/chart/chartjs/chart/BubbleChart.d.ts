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
declare const BubbleChart: (props: ChartInput<'bubble'>) => import("react/jsx-runtime").JSX.Element;
export default BubbleChart;
