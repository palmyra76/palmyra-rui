import { ITransformOptions } from '../../../Types';
import { ChartDataConverter } from '../../Types';

declare const ObjectScaleConverter: (options: ITransformOptions) => ChartDataConverter<number>;
export { ObjectScaleConverter };
