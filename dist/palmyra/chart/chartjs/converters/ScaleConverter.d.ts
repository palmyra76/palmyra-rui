import { ChartDataConverter, IgetPointData } from "../DataConverterFactory";
import { ITransformOptions } from "../../Types";
declare const NoopConverter: (options: ITransformOptions) => ChartDataConverter;
declare const ArrayScaleConverter: (options: ITransformOptions) => ChartDataConverter;
declare const ObjectScaleConverter: (options: ITransformOptions) => ChartDataConverter;
declare const KeyValueScaleConverter: (options: ITransformOptions) => ChartDataConverter;
declare const getScalePointData: IgetPointData;
export { NoopConverter, ArrayScaleConverter, ObjectScaleConverter, KeyValueScaleConverter, getScalePointData };
