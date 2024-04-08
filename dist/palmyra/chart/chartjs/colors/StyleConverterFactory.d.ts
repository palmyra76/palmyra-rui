import { ChartStyleConverter, DataSetType } from '../Types';
import { ITransformOptions, StyleOptions } from '../../Types';

interface IStyleConverterFactory {
    (styleOptions: StyleOptions, transformOptions?: ITransformOptions): ChartStyleConverter<DataSetType>;
}
declare const LabelStyleConverterFactory: IStyleConverterFactory;
declare const DatasetStyleConverterFactory: IStyleConverterFactory;
declare const NoopStyleConverter: ChartStyleConverter<DataSetType>;
declare const RandomStyleConverterFactory: IStyleConverterFactory;
declare const getStyleConverter: (chartType: string, styleOptions: StyleOptions, transformOptions: ITransformOptions) => ChartStyleConverter<DataSetType>;
export type { IStyleConverterFactory };
export { NoopStyleConverter, LabelStyleConverterFactory, DatasetStyleConverterFactory, RandomStyleConverterFactory };
export { getStyleConverter };
