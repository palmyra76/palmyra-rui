import { transformOptions } from "../../layout/Types";
import { DataConverterGen, ChartDataConverter } from "../DataConverterFactory";
import { ScatterDataInput, ScatterDataSet } from "../chartjs/Types";
import { NoopConverter } from "./ScaleConverter";


function getKeys(options:transformOptions): { x: string, y: string, label: string } {
    const xLabel: string = options?.xLabel || 'name';
    const xKey: any = options?.xKey || 'x';
    const yKey: any = options?.yKey || 'y';

    if (yKey instanceof Array) {
        console.error("ScatterChart: yKey should be string only, not an array " + options.yKey);
    }

    return {
        x: xKey,
        y: yKey,
        label: xLabel
    }
}


const ArrayConverter = (options: transformOptions): ChartDataConverter => {
    const { x, y, label } = getKeys(options);
    return (records: any[]): ScatterDataInput => {
        var result: ScatterDataInput = {
            datasets: []
        };

        var dataMap: Record<string, ScatterDataSet> = {};

        records.map((record, index) => {
            var dataSet: ScatterDataSet = getData(dataMap, record[label], options);
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

