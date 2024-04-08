import { ITransformOptions } from '../../Types';
import { ChartDataConverter } from '../Types';
import { IgetPointData } from '../DataConverterFactory';

declare const NoopConverter: (options: ITransformOptions) => ChartDataConverter<any>;
declare const getScalePointData: IgetPointData;
export { NoopConverter, getScalePointData };
