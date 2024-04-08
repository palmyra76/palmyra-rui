import { ITransformOptions } from '../../../Types';
import { ChartDataConverter } from '../../Types';

declare const KeyValueScaleConverter: (options: ITransformOptions) => ChartDataConverter<number>;
export { KeyValueScaleConverter };
