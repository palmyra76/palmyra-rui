import { ChartDataConverter } from '../../Types';
import { ITransformOptions } from '../../../Types';

declare const KeyValueScaleConverter: (options: ITransformOptions) => ChartDataConverter<number>;
export { KeyValueScaleConverter };
