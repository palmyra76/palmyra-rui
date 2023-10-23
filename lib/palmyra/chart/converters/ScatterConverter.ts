import { transformOptions } from "../../layout/Types";
import { ChartLayout } from "../../layout/flexiLayout";
import { DataConverterGen, ChartDataConverter } from "../DataConverterFactory";
import { ScatterDataInput, ScatterDataSet } from "../chartjs/Types";


const NoopConverter = (layout: ChartLayout): ChartDataConverter => {
    return (data) => { data };
}

function getKeys(layout: ChartLayout): { x: string, y: string, label: string } {
    const xLabel: string = layout.transformOptions?.xLabel || 'name';
    const xKey: string = layout.transformOptions?.xKey || 'x';
    const yKey: any = layout.transformOptions?.yKey || 'y';

    if (yKey instanceof Array) {
        console.error("ScatterChart: yKey should be string only, not an array " + layout.transformOptions.yKey);
    }

    return {
        x: xKey,
        y: yKey,
        label: xLabel
    }
}


const ArrayConverter = (layout: ChartLayout): ChartDataConverter => {
    const { x, y, label } = getKeys(layout);
    return (records: any[]): ScatterDataInput => {
        var result: ScatterDataInput = {
            datasets: []
        };

        var dataMap: Record<string, ScatterDataSet> = {};

        records.map((record, index) => {
            var dataSet: ScatterDataSet = getData(dataMap, record[label], layout.transformOptions);
            dataSet.data.push({
                x: record[x],
                y: record[y]
            });
        });

        Object.values(dataMap).map((dataSet) => {
            result.datasets.push(dataSet);
        });
        console.log(result);
        return result;
    }
}

const converters: Record<string, DataConverterGen> = {
    "default": ArrayConverter,
    "noop": NoopConverter
}

export default converters;

function assignColors(transformOptions: transformOptions,
    key: string, data: ScatterDataSet) {
    data.backgroundColor = transformOptions?.chart?.[key]?.backgroundColor || 'blue';
}

function getData(dataMap: Record<string, ScatterDataSet>, key: string, transformOptions: transformOptions): ScatterDataSet {
    var r: ScatterDataSet = dataMap[key];
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

