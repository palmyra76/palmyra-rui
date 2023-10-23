import { default as LineConverters } from './converters/LineConverter';
import { default as BarConverters } from './converters/BarConverter';
import { default as ScatterConverters } from './converters/ScatterConverter';
import { default as BubbleConverters } from './converters/BubbleConverter';
import { default as RadarConverters } from './converters/RadarConverter';
import { default as PolarAreaConverters } from './converters/PolarConverter';
import { default as PieConverters } from './converters/PieConverter';
import { default as DoughnutConverters } from './converters/DoughnutConverter';

import { ChartLayout } from '../layout/flexiLayout';

interface ChartDataConverter {
    (data: any, options?: any): any;
}

interface DataConverterGen {
    (layout: ChartLayout): ChartDataConverter
}

const NoopConverter = (data: any): any => {
    return data;
}

var dataMap: Record<string, Record<string, DataConverterGen>> = {
    "Line": LineConverters,
    "Bar": BarConverters,
    "Scatter": ScatterConverters,
    "Bubble": BubbleConverters,
    "Radar": RadarConverters,
    "PolarArea": PolarAreaConverters,
    "Pie": PieConverters,
    "Doughnut": DoughnutConverters
}

const getDataConverter = (chartType: string, layout?: ChartLayout): ChartDataConverter => {
    var options = layout.transformOptions || { sourceType: "default" };
    var type = options.sourceType || "default";
    var converter: DataConverterGen = dataMap[chartType]?.[type];
    return (converter ? converter(layout) : NoopConverter);
}


export type { DataConverterGen, ChartDataConverter }
export default getDataConverter;