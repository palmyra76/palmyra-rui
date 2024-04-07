import { strings } from "../form/interface";
interface ChartRegistry {
    Line: {};
    MultiLine: {};
    AreaChart: {};
    Bar: {};
    GroupedBar: {};
    StackedBar: {};
    Scatter: {};
    Bubble: {};
    Pie: {};
    Doughnut: {};
    Radar: {};
    PolarArea: {};
}
type RawDataType = 'Array' | 'Object' | 'KeyValue' | 'Custom' | 'noop';
interface ITransformOptions {
    sourceType?: RawDataType;
    xKey?: string;
    group?: string;
    yKey?: strings;
    rKey?: string;
    xLabel?: string;
    yLabel?: strings;
}
type ChartType = keyof ChartRegistry;
type StyleOptions = Record<string, chartStyle> | chartStyle[] | Record<string, chartStyle[]>;
interface chartStyle {
    backgroundColor?: string;
    borderColor?: string;
}
interface transformable {
    transformOptions?: ITransformOptions;
}
type PostProcessor<T> = (data: T) => T;
type DataTransformer<T> = (d: any) => T;
interface LineTransformOptions extends ITransformOptions {
    xKey?: string;
    group?: never;
    yKey?: string;
    rKey?: never;
}
interface BarTransformOptions extends ITransformOptions {
    xKey?: string;
    group?: never;
    yKey?: string;
    rKey?: never;
}
interface GroupedBarTransformOptions extends ITransformOptions {
    xKey?: string;
    group?: string;
    yKey?: string;
    rKey?: never;
}
interface ScatterTransformOptions extends ITransformOptions {
}
interface BubbleTransformOptions extends ITransformOptions {
}
interface PieTransformOptions extends ITransformOptions {
}
interface DoughnutTransformOptions extends ITransformOptions {
}
interface RadarTransformOptions extends ITransformOptions {
}
interface PolarAreaTransformOptions extends ITransformOptions {
}
type TypedTransformOptions<T extends ChartType> = T extends 'Bar' ? BarTransformOptions : T extends 'GroupedBar' ? GroupedBarTransformOptions : T extends 'Line' ? LineTransformOptions : T extends 'Scatter' ? ScatterTransformOptions : T extends 'Bubble' ? BubbleTransformOptions : T extends 'Pie' ? PieTransformOptions : T extends 'Doughnut' ? DoughnutTransformOptions : T extends 'Radar' ? RadarTransformOptions : T extends 'PolarArea' ? PolarAreaTransformOptions : never;
interface IChartOptions<T extends ChartType> {
    data?: any;
    height?: string | number;
    transformOptions?: TypedTransformOptions<T>;
    onPointClick?: Function;
    postProcessors?: PostProcessor<any>[];
}
interface IChart {
    setData: (data: any) => void;
    clearData: () => void;
    clear: () => void;
    reset: () => void;
}
export type { ChartRegistry, StyleOptions, chartStyle, transformable, ITransformOptions, ChartType, RawDataType };
export type { IChartOptions, IChart, PostProcessor, DataTransformer, TypedTransformOptions };
