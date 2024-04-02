import { ChartInput } from "../Types";
export declare const defaultOptions: {
    responsive: boolean;
    maintainAspectRatio: boolean;
    plugins: {
        legend: {
            position: string;
        };
    };
};
declare const RadarChart: (props: ChartInput<'radar'>) => import("react/jsx-runtime").JSX.Element;
export default RadarChart;
