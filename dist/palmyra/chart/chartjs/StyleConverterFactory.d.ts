import { ChartDataConverter, StyleOptions } from '..';
import { ChartType, ITransformOptions } from '../Types';

declare const getStyleConverter: (chartType: ChartType, styleOptions: StyleOptions, options: ITransformOptions) => ChartDataConverter<any>;
export { getStyleConverter };
