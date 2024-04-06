import { ITransformOptions } from "../Types";
import { ChartDataConverter } from "../chartjs/Types";
import { GroupArrayScaleConverter } from "../chartjs/converters/base/GroupArrayScaleConverter";


const getD3DataConverter = (chartType: string, sourceType: string, options: ITransformOptions): ChartDataConverter<any> => {
    return GroupArrayScaleConverter(options);
}


export {getD3DataConverter}