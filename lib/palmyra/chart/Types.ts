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

interface IChartOptions {
    data?: any
    height?: string | number,
    transformOptions?: ITransformOptions
    onPointClick?: Function,
    postProcessors?: PostProcessor<any>[]
}

interface IChart {
    setData: (data: any) => void,
    clearData: () => void,
    clear: () => void,
    reset: () => void
}

export type { ChartRegistry, StyleOptions, chartStyle, transformable, ITransformOptions, ChartType }
export type { IChartOptions, IChart, PostProcessor, DataTransformer }