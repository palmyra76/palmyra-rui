import { IEndPoint, IEndPointOptions, storeBacked } from "../../layout/Types";
import { IChartOptions } from "../Types";

interface IScatterPlotOptions extends IChartOptions, storeBacked {
    storeOptions: {
        endPoint: IEndPoint
        endPointOptions?: IEndPointOptions
        hasLayout?: boolean
    },
    filter?: Record<string, string | number>
    transformOptions: {
        sourceType: string,
        xKey: string,
        yKey: string,
        xLabel?: string,
        yLabel?: string,
        group?: string
    }
}


export type { IScatterPlotOptions }