import { transformOptions } from '../layout/Types';
import { InteractionItem } from 'chart.js';
interface ChartDataConverter {
    (data: any, options?: any): any;
}
type IgetPointData = (data: any, options: transformOptions, element: InteractionItem[], elements: InteractionItem[]) => Record<string, any>;
interface DataConverterGen {
    (options: transformOptions): ChartDataConverter;
}
declare const getDataConverter: (chartType: string, sourceType: string, options: transformOptions) => ChartDataConverter;
declare const addDataConverter: (chartType: string, sourceType: string, converter: ChartDataConverter) => void;
declare const getPointConverter: (chartType: string) => IgetPointData;
export type { DataConverterGen, ChartDataConverter, IgetPointData };
export { getPointConverter, addDataConverter, getDataConverter };
