import { ChartType, IChartOptions } from '..';
import { MouseEventHandler, MutableRefObject } from 'react';
import { Plugin, ChartType as ChartJsType } from 'chart.js';

interface ListenerResult {
    onClick?: MouseEventHandler<any>;
}
declare const useAreaSelectListener: (chartType: ChartType, chartOptions: any, plugins: Plugin<ChartJsType>[], callback: any) => void;
declare const useClickListener: (chartType: string, props: IChartOptions<any>, chartRef: MutableRefObject<any>) => ListenerResult;
export { useClickListener, useAreaSelectListener };
