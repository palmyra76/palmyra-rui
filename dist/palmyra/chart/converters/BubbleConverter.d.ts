import { DataConverterGen, IgetPointData } from "../DataConverterFactory";
declare const getPointData: IgetPointData;
declare const converters: Record<string, DataConverterGen>;
export default converters;
export { getPointData };
