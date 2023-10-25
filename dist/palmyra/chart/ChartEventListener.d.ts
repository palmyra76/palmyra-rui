import { MouseEventHandler, MutableRefObject } from "react";
import { ChartInput } from "./Types";
interface ListenerResult {
    onClick?: MouseEventHandler<any>;
}
declare const useListener: (chartType: string, props: ChartInput, chartRef: MutableRefObject<any>) => ListenerResult;
export { useListener };
