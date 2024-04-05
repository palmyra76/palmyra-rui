/// <reference types="react" />
import { ChartType as ChartJSType, ChartOptions, Plugin } from 'chart.js';
import { IChartOptions } from '..';
interface IChartJSOptions extends IChartOptions {
    plugins?: Plugin<ChartJSType>[];
    options?: ChartOptions<ChartJSType>;
}
interface IChartJS {
    setData: (data: any) => void;
    clearData: () => void;
}
declare const ChartJS: import("react").ForwardRefExoticComponent<IChartJSOptions & import("react").RefAttributes<IChartJS>>;
export { ChartJS };
export type { IChartJS, IChartJSOptions };
