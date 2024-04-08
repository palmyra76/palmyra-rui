import { DataConverterGen } from '../DataConverterFactory';
import { RawDataType } from '../..';

declare const converters: Partial<Record<RawDataType, DataConverterGen>>;
export default converters;
