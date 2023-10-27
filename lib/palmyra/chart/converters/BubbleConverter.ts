import { InteractionItem } from "chart.js";
import { transformOptions } from "../../layout/Types";
import { DataConverterGen, ChartDataConverter, IgetPointData } from "../DataConverterFactory";
import { BubbleDataInput, BubbleDataSet } from "../chartjs/Types";
import generateColors, { getRandomNumber } from "./colors/GenerateColors";


const NoopConverter = (options: transformOptions): ChartDataConverter => {
    return (data) => { data };
}

function assignColors(transformOptions: transformOptions,
    key: string, data: BubbleDataSet) {
    var length = Math.round(getRandomNumber(2, 10));
    var color = generateColors(length);
    data.backgroundColor = transformOptions?.chart?.[key]?.backgroundColor || color[0];
    data.borderColor = transformOptions?.chart?.[key]?.borderColor || color[length - 1];
}

function getData(dataMap: Record<string, BubbleDataSet>, key: string, transformOptions: transformOptions): BubbleDataSet {
    var r: BubbleDataSet = dataMap[key];
    if (r)
        return r;

    r = {
        label: key,
        data: []
    };
    assignColors(transformOptions, key, r);
    dataMap[key] = r;
    return r;
}

function getKeys(transformOptions: transformOptions): { x: string, y: string, r: string, label: string } {
    const xLabel: string = transformOptions?.xLabel || 'name';
    const xKey: any = transformOptions?.xKey || 'x';
    const yKey: any = transformOptions?.yKey || 'y';
    const rKey: string = transformOptions?.rKey || 'r';

    if (yKey instanceof Array) {
        console.error("BubbleChart: yKey should be string only, not an array " + transformOptions.yKey);
    }

    return {
        x: xKey,
        y: yKey,
        r: rKey,
        label: xLabel
    }
}

const ArrayConverter = (options: transformOptions): ChartDataConverter => {
    const { x, y, r, label } = getKeys(options);
    return (records: any[]): BubbleDataInput => {
        var result: BubbleDataInput = {
            labels: [],
            datasets: []
        };

        var dataMap: Record<string, BubbleDataSet> = {};

        records.map((record, index) => {
            var dataSet: BubbleDataSet = getData(dataMap, record[label], options);
            dataSet.data.push({
                x: record[x],
                y: record[y],
                r: record[r]
            });

        });

        Object.values(dataMap).map((dataSet) => {
            result.datasets.push(dataSet);
        });
        return result;
    }
}

const ObjectConverter = (options: transformOptions): ChartDataConverter => {

    const { x, y, r } = getKeys(options);
    return (record: any): BubbleDataInput => {
        var result: BubbleDataInput = {
            labels: [],
            datasets: []
        };

        var dataMap: Record<string, BubbleDataSet> = {};

        for (var xValue in record) {
            var dataSet: BubbleDataSet = getData(dataMap, xValue, options);
            var v = record[xValue];
            dataSet.data.push({
                x: v[x],
                y: v[y],
                r: v[r]
            });
        }

        Object.values(dataMap).map((dataSet) => {
            result.datasets.push(dataSet);
        });
        console.log(result);
        return result;
    }
}

const getPointData: IgetPointData = (data: any, transformOptions: transformOptions, element: InteractionItem[], elements: InteractionItem[]) => {
    const { x, y, r } = getKeys(transformOptions);
    var result = {};

    element.map((e) => {
        var { index, datasetIndex } = e;
        var dataSet = data.datasets[datasetIndex];
        var label = dataSet.label;
        var d = dataSet.data[index];

        result[label] = {
            [x]: d.x,
            [y]: d.y,
            [r]: d.r
        }
    });

    return result;
}

const converters: Record<string, DataConverterGen> = {
    "default": ArrayConverter,
    "object": ObjectConverter,
    "noop": NoopConverter
}

export default converters;
export { getPointData }
