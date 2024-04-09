import { InteractionItem } from 'chart.js';
import { ITransformOptions, RawDataType } from '../Types';
import { ChartDataConverter, DataSetType } from '..';
type IgetPointData = (data: any, options: ITransformOptions, element: InteractionItem[], elements: InteractionItem[]) => Record<string, any>;
interface DataConverterGen {
    (options: ITransformOptions): ChartDataConverter<DataSetType>;
}
declare const getDataConverter: (chartType: string, sourceType: RawDataType, options: ITransformOptions) => ChartDataConverter<any>;
declare const addDataConverter: (chartType: string, sourceType: string, converterGen: DataConverterGen) => void;
declare const getPointConverter: (chartType: string) => IgetPointData;
export type { DataConverterGen, IgetPointData };
export { getPointConverter, addDataConverter, getDataConverter };
