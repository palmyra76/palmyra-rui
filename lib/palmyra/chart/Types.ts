import { strings } from "../form/interface";


interface ITransformOptions {
    sourceType: string,
    xKey?: strings,
    yKey?: strings,
    rKey?: string,
    xLabel?: string,
    yLabel?: strings
}

type StyleOptions = Record<string, chartStyle> | chartStyle[] | Record<string, chartStyle[]>;

interface chartStyle {
    backgroundColor?: string,
    borderColor?: string
}

interface transformable {
    transformOptions?: ITransformOptions;
}

export type { StyleOptions, transformable, ITransformOptions }