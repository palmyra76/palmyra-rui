import { ChartLayout } from '../layout/flexiLayout';
interface ChartDataConverter {
    (data: any, options?: any): any;
}
interface DataConverterGen {
    (layout: ChartLayout): ChartDataConverter;
}
declare const getDataConverter: (chartType: string, layout?: ChartLayout) => ChartDataConverter;
declare const getPointConverter: (chartType: string) => Function;
export type { DataConverterGen, ChartDataConverter };
export { getPointConverter };
export default getDataConverter;
