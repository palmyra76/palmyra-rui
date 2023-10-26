import { transformOptions } from "../../layout/Types";
import { ChartDataConverter, IgetPointData } from "../DataConverterFactory";
declare const NoopConverter: (options: transformOptions) => ChartDataConverter;
declare const ArrayScaleConverter: (options: transformOptions) => ChartDataConverter;
declare const ObjectScaleConverter: (options: transformOptions) => ChartDataConverter;
declare const KeyValueScaleConverter: (options: transformOptions) => ChartDataConverter;
declare const getScalePointData: IgetPointData;
export { NoopConverter, ArrayScaleConverter, ObjectScaleConverter, KeyValueScaleConverter, getScalePointData };
