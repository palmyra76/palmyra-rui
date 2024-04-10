import { RawDataType } from '../../Types';
import { DataConverterGen, IgetPointData } from '../DataConverterFactory';

declare const getPointData: IgetPointData;
declare const converters: Partial<Record<RawDataType, DataConverterGen>>;
export default converters;
export { getPointData };
