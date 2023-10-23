import { default as LineConverters } from './converters/LineConverter';
import { default as BarConverters } from './converters/BarConverter';

interface ChartDataConverter {
    (data: any): any;
}

const NoopConverter = (data: any): any => {
    return data;
}

var dataMap: Record<string, Record<string, ChartDataConverter>> = {
    "Line": LineConverters,
    "Bar": BarConverters
}

const DataConverterFactory = (chartType: string, sourceType?: string) => {
    var type = sourceType || "default";
    var converter = dataMap[chartType]?.[type];
    return (converter ? converter : NoopConverter);
}


export type { ChartDataConverter }
export default DataConverterFactory;