import { IgetPointData } from "../DataConverterFactory";
import { ChartDataConverter } from "../Types";
import { ITransformOptions } from "../../Types";
declare const NoopConverter: (options: ITransformOptions) => ChartDataConverter<any>;
declare const ArrayScaleConverter: (options: ITransformOptions) => ChartDataConverter<any>;
declare const ObjectScaleConverter: (options: ITransformOptions) => ChartDataConverter<number>;
declare const KeyValueScaleConverter: (options: ITransformOptions) => ChartDataConverter<number>;
declare const getScalePointData: IgetPointData;
export { NoopConverter, ArrayScaleConverter, ObjectScaleConverter, KeyValueScaleConverter, getScalePointData };
