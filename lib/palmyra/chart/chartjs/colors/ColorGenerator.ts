import { ChartColorConverter, DataSets } from "../Types"

// const LabelColorConverter = (options: any): ChartColorConverter<any> => {
//     return (data: DataSets<number>, options?: any): DataSets<number> => {
//         return data;
//     }
// }

// const DataSetColorConverter = (options: any): ChartColorConverter<any> => {
//     return (data: DataSets<number>, options?: any): DataSets<number> => {
//         return data;
//     }
// }

const NoopColorConverter = (options: any): ChartColorConverter<any> => {
    return (data: DataSets<number>, options?: any): DataSets<number> => {
        return data;
    }
}

export { NoopColorConverter }