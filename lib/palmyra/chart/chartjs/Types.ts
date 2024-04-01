import { ITransformOptions } from "../Types"

interface Colorable {
    borderColor?: any,
    backgroundColor?: any
}

type Point = {
    x: number | string, y: number
}

interface Bubble extends Point {
    r: number
}

interface DataSet<T> extends Colorable {
    label: string,
    data: T[]
}

type DataSetType = number | Bubble | Point;

interface ScaleDataSet extends DataSet<number> { }

interface ScatterDataSet extends DataSet<Point> { }

interface BubbleDataSet extends DataSet<Bubble> { }

interface DataSets<DataSetType> {
    labels?: string[]
    datasets: DataSet<DataSetType>[]
}

interface ScaleDataInput extends DataSets<number> {
    labels: string[]
}

interface BubbleDataInput extends DataSets<Bubble> {
    labels: string[]
}

interface ScatterDataInput extends DataSets<Point> { }

interface ChartInput {
    data: any,
    height: string | number,
    onPointClick: Function,
    transformOptions: ITransformOptions
    chartOptions?: any
}


interface ChartDataConverter<DataSetType> {
    (data: any, options?: any): DataSets<DataSetType>;
}

interface ChartColorConverter<DataSetType> {
    (data: DataSets<DataSetType>, options?: any): DataSets<DataSetType>;
}

export type { ChartInput }

export type { ScaleDataInput, DataSets, DataSetType };
export type { ScatterDataInput, Point };
export type { BubbleDataInput, Bubble };
export type { ScaleDataSet, ScatterDataSet, BubbleDataSet }

export type { ChartDataConverter, ChartColorConverter }

