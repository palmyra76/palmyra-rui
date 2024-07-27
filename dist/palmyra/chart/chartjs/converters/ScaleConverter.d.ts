import { IgetPointData } from '../DataConverterFactory';
import { ChartDataConverter } from '../Types';
import { ITransformOptions } from '../../Types';

declare const NoopConverter: (options: ITransformOptions) => ChartDataConverter<any>;
declare const getScalePointData: IgetPointData;
export { NoopConverter, getScalePointData };
