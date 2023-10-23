import { default as LineConverters } from './converters/LineConverter';
import { default as BarConverters } from './converters/BarConverter';
import { ChartLayout } from '../layout/flexiLayout';

interface ChartDataConverter {
    (data: any, options?: any): any;
}

interface DataConverterGen{
    (layout:ChartLayout) : ChartDataConverter
}

const NoopConverter = (data: any): any => {
    return data;
}

var dataMap: Record<string, Record<string, DataConverterGen>> = {
    "Line": LineConverters,
    "Bar": BarConverters
}

const getDataConverter = (chartType: string, layout?: ChartLayout): ChartDataConverter => {
    var options = layout.transformOptions || {sourceType : "default"};
    var type = options.sourceType || "default";
    var converter:DataConverterGen = dataMap[chartType]?.[type];
    return (converter ? converter(layout) : NoopConverter);
}


export type { DataConverterGen, ChartDataConverter }
export default getDataConverter;