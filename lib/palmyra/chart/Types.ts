import { strings } from "../form/interface";

interface ChartRegistry {
    Line: {},
    Bar: {},
    Scatter: {},
    Bubble: {},
    Pie: {},
    Doughnut: {},
    Radar: {},
    PolarArea: {}
}

interface ITransformOptions {
    sourceType: string,
    xKey?: strings,
    group?: string,
    yKey?: strings,
    rKey?: string,
    xLabel?: string,
    yLabel?: strings
}

type ChartType = keyof ChartRegistry;

type StyleOptions = Record<string, chartStyle> | chartStyle[] | Record<string, chartStyle[]>;

interface chartStyle {
    backgroundColor?: string,
    borderColor?: string
}

interface transformable {
    transformOptions?: ITransformOptions;
}

type PostProcessor<T> = (data: T) => T;
type DataTransformer<T> = (d: any) => T;

interface IChartOptions<T extends ChartType> {
    data?: any
    height?: string | number,
    transformOptions?: TransformOptions<T>
    onPointClick?: Function,
    postProcessors?: PostProcessor<any>[]
}

interface LineTransformOptions extends ITransformOptions { }
interface BarTransformOptions extends ITransformOptions { }
interface ScatterTransformOptions extends ITransformOptions { }
interface BubbleTransformOptions extends ITransformOptions { }
interface PieTransformOptions extends ITransformOptions { }
interface DoughnutTransformOptions extends ITransformOptions { }
interface RadarTransformOptions extends ITransformOptions { }
interface PolarAreaTransformOptions extends ITransformOptions { }


type TransformOptions<T extends ChartType> =
    T extends 'Bar' ? BarTransformOptions :
    T extends 'Line' ? LineTransformOptions :
    T extends 'Scatter' ? ScatterTransformOptions :
    T extends 'Bubble' ? BubbleTransformOptions :
    T extends 'Pie' ? PieTransformOptions :
    T extends 'Doughnut' ? DoughnutTransformOptions :
    T extends 'Radar' ? RadarTransformOptions :
    T extends 'PolarArea' ? PolarAreaTransformOptions :
    never;



interface IChart {
    setData: (data: any) => void,
    clearData: () => void,
    clear: () => void,
    reset: () => void
}

export type { ChartRegistry, StyleOptions, chartStyle, transformable, ITransformOptions, ChartType }
export type { IChartOptions, IChart, PostProcessor, DataTransformer }