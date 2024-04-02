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
declare const PieChart: (props: ChartInput<'pie'>) => import("react/jsx-runtime").JSX.Element;
export default PieChart;
