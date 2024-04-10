import { DataConverterGen } from '../DataConverterFactory';
import { RawDataType } from '../../Types';

declare const converters: Partial<Record<RawDataType, DataConverterGen>>;
export default converters;
