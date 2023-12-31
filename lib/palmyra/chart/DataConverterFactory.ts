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
import { InteractionItem } from 'chart.js';

interface ChartDataConverter {
    (data: any, options?: any): any;
}

type IgetPointData = (data: any, options: transformOptions, element: InteractionItem[], elements: InteractionItem[]) => Record<string, any>;

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

var PointConverterMap: Record<string, IgetPointData> = {
    "Line": getScalePointData,
    "Bar": getScalePointData,
    "Pie": getScalePointData,
    "Doughnut": getScalePointData,
    "PolarArea": getScalePointData,
    "Radar": getScalePointData,
    "Bubble": getBubblePointData
}

const getDataConverter = (chartType: string, sourceType: string, options: transformOptions): ChartDataConverter => {
    var converter: DataConverterGen = dataMap[chartType]?.[sourceType];
    return (converter ? converter(options) : NoopConverter);
}

const addDataConverter = (chartType: string, sourceType: string,
    converter: ChartDataConverter): void => {
    if (!dataMap[chartType][sourceType])
        dataMap[chartType][sourceType] = converter;
    else {
        throw new Error("Converter already set for " + chartType + "/" + sourceType);
    }
}

const getPointConverter = (chartType: string): IgetPointData => {
    var converter: IgetPointData = PointConverterMap[chartType];
    return converter ? converter : (d) => { return d };
}

export type { DataConverterGen, ChartDataConverter, IgetPointData };
export { getPointConverter, addDataConverter };
export default getDataConverter;