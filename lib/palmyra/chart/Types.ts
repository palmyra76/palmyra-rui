import { transformOptions } from "../layout/Types"

interface ChartInput {
    data: any,
    height: string | number,
    onPointClick: Function,
    transformOptions: transformOptions
    chartOptions?: any
}

export type { ChartInput }