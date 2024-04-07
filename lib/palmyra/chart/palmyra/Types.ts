import { IEndPoint, IEndPointOptions, storeBacked } from "../../layout/Types";
import { IChartOptions, RawDataType } from "../Types";

interface IScatterPlotOptions extends IChartOptions<'Scatter'>, storeBacked {
    storeOptions: {
        endPoint: IEndPoint
        endPointOptions?: IEndPointOptions
        hasLayout?: boolean
    },
    filter?: Record<string, string | number>
    transformOptions: {
        sourceType: RawDataType,
        xKey: string,
        yKey: string,
        xLabel?: string,
        yLabel?: string,
        group?: string
    }
}


export type { IScatterPlotOptions }