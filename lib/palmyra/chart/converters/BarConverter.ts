import { transformOptions } from "../../layout/Types";
import { ChartLayout } from "../../layout/flexiLayout";
import { DataConverterGen, ChartDataConverter } from "../DataConverterFactory";
import { LineDataInput, ChartDataSet } from "../chartjs/Types";

const NoopConverter = (layout: ChartLayout): ChartDataConverter => {
    return (data) => { data };
}

function getKeys(layout: ChartLayout) {
    const xKey: any = layout.transformOptions?.xKey || 'name';
    const yKe = layout.transformOptions?.yKey || 'value';

    const yKeys = yKe instanceof Array ? yKe : [yKe];

    return {
        xKey: xKey,
        yKeys: yKeys
    }
}


const ArrayConverter = (layout: ChartLayout): ChartDataConverter => {
    const { xKey, yKeys } = getKeys(layout);
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

const ObjectConverter = (layout: ChartLayout): ChartDataConverter => {
    const { yKeys } = getKeys(layout);
    return (record: any): LineDataInput => {
        var result: LineDataInput = {
            labels: [],
            datasets: []
        };

        // Initialize the dataset array based on the number of yKeys
        yKeys.map((key, index) => {
            var data: ChartDataSet = { label: key, data: [] };
            result.datasets[index] = data;
            assignColors(layout.transformOptions, key, data);
        })

        // Populate the record for each entry in the object
        for (var xValue in record) {
            result.labels.push(xValue);

            // Populate the data for each yKey
            var data = record[xValue]
            yKeys.map((key, index) => {
                result.datasets[index].data.push(data[key]);
            })
        }

        return result;
    }
}

const KeyValueConverter = (layout: ChartLayout): ChartDataConverter => {
    return (record: any): LineDataInput => {
        var result: LineDataInput = {
            labels: [],
            datasets: []
        };

        var dataset: ChartDataSet = { label: 'value', data: [] };
        result.datasets[0] = dataset;
        assignColors(layout.transformOptions, 'value', dataset);

        for (var xValue in record) {
            result.labels.push(xValue);

            dataset.data.push(record[xValue]);
        }

        return result;
    }
}

const converters: Record<string, DataConverterGen> = {
    "default": ArrayConverter,
    "object": ObjectConverter,
    "keyValue": KeyValueConverter,
    "noop": NoopConverter
}

export default converters;

function assignColors(transformOptions: transformOptions,
    key: string, data: ChartDataSet) {

    data.backgroundColor = transformOptions?.chart?.[key]?.backgroundColor || 'blue';
    data.borderColor = transformOptions?.chart?.[key]?.borderColor || 'grey';
}
