import { InteractionItem } from "chart.js";
import { transformOptions } from "../../layout/Types";
import { ChartLayout } from "../../layout/flexiLayout";
import { DataConverterGen, ChartDataConverter } from "../DataConverterFactory";
import { LineDataInput, ChartDataSet } from "../chartjs/Types";

const NoopConverter = (layout: ChartLayout): ChartDataConverter => {
    return (data) => { data };
}

function getKeys(transformOptions: transformOptions): { xKey: string, yKeys: string[] } {
    const xKey: any = transformOptions?.xKey || 'name';
    const yKe = transformOptions?.yKey || 'value';
    const yKeys = yKe instanceof Array ? yKe : [yKe];

    return {
        xKey: xKey,
        yKeys: yKeys
    }
}


const ArrayConverter = (layout: ChartLayout): ChartDataConverter => {
    const { xKey, yKeys } = getKeys(layout.transformOptions);
    return (records: any[]): LineDataInput => {
        var result: LineDataInput = {
            labels: [],
            datasets: []
        };

        var dataMap: Record<string, ChartDataSet> = {};

        yKeys.map((key, index) => {
            var data: ChartDataSet = { label: key, data: [] };
            dataMap[key] = data;
            result.datasets[index] = data;
            assignColors(layout.transformOptions, key, data);
        })

        records.map((record, index) => {
            var label = record[xKey];
            result.labels.push(label);

            yKeys.map((key) => {
                var dataset = dataMap[key];
                dataset.data[index] = record[key];
            })
        });

        return result;
    }
}

const converters: Record<string, DataConverterGen> = {
    "default": ArrayConverter,
    "noop": NoopConverter
}


const getPointData = (data: any, transformOptions: transformOptions, element: InteractionItem[], elements: InteractionItem[]) => {
    
    var { xKey } = getKeys(transformOptions);    
    var result = {[xKey]: data.labels[element[0].index]};

    element.map((e) =>{
        var { index, datasetIndex } = e;
        var dataSet = data.datasets[datasetIndex];
        var label = dataSet.label;
        result[label] = dataSet.data[index];
    });

    return result;
}


export default converters;
export { getPointData };


function assignColors(transformOptions: transformOptions,
    key: string, data: ChartDataSet) {
    data.backgroundColor = transformOptions?.chart?.[key]?.backgroundColor || 'blue';
    data.borderColor = transformOptions?.chart?.[key]?.borderColor || 'grey';
}
