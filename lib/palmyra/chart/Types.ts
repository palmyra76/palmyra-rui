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

interface IChartOptions {
    type: ChartType
    data?: any
    height?: string | number,
    transformOptions?: ITransformOptions
    onPointClick?: Function,
    postProcessors?: PostProcessor<any>[]
}

export type { ChartRegistry, StyleOptions, chartStyle, transformable, ITransformOptions, ChartType }
export type { IChartOptions }