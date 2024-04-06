/// <reference types="react" />
import { IChart, IChartJSOptions } from '..';
interface IChartJS extends IChart {
}
declare const ChartJS: import("react").ForwardRefExoticComponent<IChartJSOptions & import("react").RefAttributes<IChartJS>>;
export { ChartJS };
export type { IChartJS };
