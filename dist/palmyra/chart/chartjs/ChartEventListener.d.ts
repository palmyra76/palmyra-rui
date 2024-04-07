import { MouseEventHandler, MutableRefObject } from "react";
import { IChartOptions } from "..";
interface ListenerResult {
    onClick?: MouseEventHandler<any>;
}
declare const useListener: (chartType: string, props: IChartOptions<any>, chartRef: MutableRefObject<any>) => ListenerResult;
export { useListener };
