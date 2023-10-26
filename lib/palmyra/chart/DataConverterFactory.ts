import { default as LineConverters } from './converters/LineConverter';
import { default as BarConverters } from './converters/BarConverter';
import { default as ScatterConverters } from './converters/ScatterConverter';
import { default as BubbleConverters, getPointData as getBubblePointData } from './converters/BubbleConverter';
import { default as RadarConverters } from './converters/RadarConverter';
import { default as PolarAreaConverters } from './converters/PolarConverter';
import { default as PieConverters } from './converters/PieConverter';
import { default as DoughnutConverters } from './converters/DoughnutConverter';

import { transformOptions } from '../layout/Types';
import { getScalePointData } from './converters/ScaleConverter';

interface ChartDataConverter {
    (data: any, options?: any): any;
}

interface DataConverterGen {
    (options: transformOptions): ChartDataConverter
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

var PointConverterMap: Record<string, Function> = {
    "Line": getScalePointData,
    "Bar": getScalePointData,
    "Bubble": getBubblePointData
}

const getDataConverter = (chartType: string, sourceType:string, options: transformOptions): ChartDataConverter => {    
    var converter: DataConverterGen = dataMap[chartType]?.[sourceType];
    return (converter ? converter(options) : NoopConverter);
}

const getPointConverter = (chartType: string) => {
    var converter = PointConverterMap[chartType];
    return converter ? converter : () => { };
}

export type { DataConverterGen, ChartDataConverter };
export { getPointConverter };
export default getDataConverter;