import { transformOptions } from "../../layout/Types";
import { ChartLayout } from "../../layout/flexiLayout";
import { DataConverterGen, ChartDataConverter } from "../DataConverterFactory";
import { BubbleDataInput, BubbleDataSet } from "../chartjs/Types";


const NoopConverter = (layout: ChartLayout): ChartDataConverter => {
    return (data) => { data };
}

function assignColors(transformOptions: transformOptions,
    key: string, data: BubbleDataSet) {

    data.backgroundColor = transformOptions?.chart?.[key]?.backgroundColor || 'blue';
    data.borderColor = transformOptions?.chart?.[key]?.borderColor || 'grey';
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

function getKeys(layout: ChartLayout): { x: string, y: string, r: string, label: string } {
    const xLabel: string = layout.transformOptions?.xLabel || 'name';
    const xKey: any = layout.transformOptions?.xKey || 'x';
    const yKey: any = layout.transformOptions?.yKey || 'y';
    const rKey: string = layout.transformOptions?.rKey || 'r';

    if (yKey instanceof Array) {
        console.error("BubbleChart: yKey should be string only, not an array " + layout.transformOptions.yKey);
    }

    return {
        x: xKey,
        y: yKey,
        r: rKey,
        label: xLabel
    }
}

const ArrayConverter = (layout: ChartLayout): ChartDataConverter => {
    const { x, y, r, label } = getKeys(layout);
    return (records: any[]): BubbleDataInput => {
        var result: BubbleDataInput = {
            datasets: []
        };

        var dataMap: Record<string, BubbleDataSet> = {};

        records.map((record, index) => {
            var dataSet: BubbleDataSet = getData(dataMap, record[label], layout.transformOptions);
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

const converters: Record<string, DataConverterGen> = {
    "default": ArrayConverter,
    "noop": NoopConverter
}

export default converters;
