interface Colorable {
    borderColor?: any,
    backgroundColor?: any
}

interface ChartDataSet extends Colorable {
    label: string,
    data: number[]
}


interface LineDataInput {
    labels: string[],
    datasets: ChartDataSet[]
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
    datasets: ScatterDataSet[]
}

interface BubbleDataSet extends Colorable {
    label: string,
    data: Bubble[]
}

interface Bubble extends Point {
    r: number
}

export type { LineDataInput, ChartDataSet };
export type { ScatterDataSet, ScatterDataInput, Point };
export type { BubbleDataInput, BubbleDataSet, Bubble };