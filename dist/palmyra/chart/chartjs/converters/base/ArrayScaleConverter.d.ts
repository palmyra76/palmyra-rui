import { ITransformOptions } from '../../../Types';
import { ChartDataConverter } from '../../Types';

declare const ArrayScaleConverter: (options: ITransformOptions) => ChartDataConverter<any>;
export { ArrayScaleConverter };
