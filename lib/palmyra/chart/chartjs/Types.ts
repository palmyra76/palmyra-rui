import { ITransformOptions } from "../Types"

interface Colorable {
    borderColor?: any,
    backgroundColor?: any
}

interface ScaleDataSet extends Colorable {
    label: string,
    data: number[]
}

interface ScatterDataInput {
    datasets: ScatterDataSet[]
}

interface ScatterDataSet extends Colorable {
    label: string,
    data: Point[]
}

type Point = {
    x: number | string, y: number
}

interface BubbleDataInput {
    labels: string[],
    datasets: BubbleDataSet[]
}

interface BubbleDataSet extends Colorable {
    label: string,
    data: Bubble[]
}

interface Bubble extends Point {
    r: number
}

interface ScaleDataInput {
    labels: string[],
    datasets: ScaleDataSet[]
}

interface ChartInput {
    data: any,
    height: string | number,
    onPointClick: Function,
    transformOptions: ITransformOptions
    chartOptions?: any
}

export type { ChartInput }

export type { ScaleDataInput, ScaleDataSet };
export type { ScatterDataSet, ScatterDataInput, Point };
export type { BubbleDataInput, BubbleDataSet, Bubble };


