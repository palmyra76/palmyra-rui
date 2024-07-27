import { ITransformOptions } from '../Types';
import { ChartDataConverter } from '../chartjs/Types';

declare const getD3DataConverter: (chartType: string, sourceType: string, options: ITransformOptions) => ChartDataConverter<any>;
export { getD3DataConverter };
