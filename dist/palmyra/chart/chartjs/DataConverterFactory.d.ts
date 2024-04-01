import { InteractionItem } from 'chart.js';
import { ITransformOptions } from '../Types';
interface ChartDataConverter {
    (data: any, options?: any): any;
}
type IgetPointData = (data: any, options: ITransformOptions, element: InteractionItem[], elements: InteractionItem[]) => Record<string, any>;
interface DataConverterGen {
    (options: ITransformOptions): ChartDataConverter;
}
declare const getDataConverter: (chartType: string, sourceType: string, options: ITransformOptions) => ChartDataConverter;
declare const addDataConverter: (chartType: string, sourceType: string, converter: ChartDataConverter) => void;
declare const getPointConverter: (chartType: string) => IgetPointData;
export type { DataConverterGen, ChartDataConverter, IgetPointData };
export { getPointConverter, addDataConverter, getDataConverter };
