import { strings } from "../form/interface";


interface ITransformOptions {
    sourceType: string,
    xKey?: strings,
    yKey?: strings,
    rKey?: string,
    xLabel?: string,
    yLabel?: strings,
    chart?: Record<string, chartOptions>
}

interface chartOptions {
    backgroundColor: string,
    borderColor: string
}

interface transformable {
    transformOptions?: ITransformOptions;
}

export type { chartOptions, transformable, ITransformOptions }