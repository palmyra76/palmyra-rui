import { ChartDataConverter } from '../chartjs/Types';
import { ITransformOptions } from '../Types';

declare const getD3DataConverter: (chartType: string, sourceType: string, options: ITransformOptions) => ChartDataConverter<any>;
export { getD3DataConverter };
