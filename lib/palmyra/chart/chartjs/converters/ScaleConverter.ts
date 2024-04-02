import { InteractionItem } from "chart.js";
import { IgetPointData } from "../DataConverterFactory";
import { ChartDataConverter, ScaleDataInput, ScaleDataSet } from "../Types";
import { ITransformOptions } from "../../Types";
import { getKeys, getLabel, getLabels } from "../util";

const NoopConverter = (options: ITransformOptions): ChartDataConverter<any> => {
    return (data) => { return data };
}

const ArrayScaleConverter = (options: ITransformOptions): ChartDataConverter<any> => {
    const { xKey, yKeys } = getKeys(options);
    const { yLabels } = getLabels(options);

    return (records: any[]): ScaleDataInput => {
        var result: ScaleDataInput = {
            labels: [],
            datasets: []
        };

        var dataMap: Record<string, ScaleDataSet> = {};

        yKeys.map((key, index) => {
            const label = getLabel(yLabels, key, index);
            var data: ScaleDataSet = { key, label: label, data: [] };
            dataMap[key] = data;
            result.datasets[index] = data;
        })

        console.log(yKeys);

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

const ObjectScaleConverter = (options: ITransformOptions): ChartDataConverter<number> => {
    const { yKeys } = getKeys(options);
    const { yLabels } = getLabels(options);

    return (record: any): ScaleDataInput => {
        var result: ScaleDataInput = {
            labels: [],
            datasets: []
        };

        // Initialize the dataset array based on the number of yKeys
        yKeys.map((key, index) => {
            const label = getLabel(yLabels, key, index);
            var data: ScaleDataSet = { key, label: label, data: [] };
            result.datasets[index] = data;
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

const KeyValueScaleConverter = (options: ITransformOptions): ChartDataConverter<number> => {
    const { xKey } = getKeys(options);
    const { xLabel } = getLabels(options);

    return (record: any): ScaleDataInput => {
        var result: ScaleDataInput = {
            labels: [],
            datasets: []
        };

        const label = xLabel || 'value';
        const key = xKey || xLabel || 'value';
        var dataset: ScaleDataSet = { key, label: label, data: [] };
        result.datasets[0] = dataset;

        for (var xValue in record) {
            result.labels.push(xValue);
            dataset.data.push(record[xValue]);
        }
        return result;
    }
}

const getScalePointData: IgetPointData = (data: any, ITransformOptions: ITransformOptions, element: InteractionItem[], elements: InteractionItem[]) => {

    var { xKey } = getKeys(ITransformOptions);
    const xValue = data.labels[element[0].index]

    if (ITransformOptions.sourceType == 'keyValue') {
        var { index, datasetIndex } = element[0];
        var dataSet = data.datasets[datasetIndex];
        var value = dataSet.data[index];
        return { [xValue]: value };
    }

    var result = { [xKey]: xValue };
    element.map((e) => {
        var dataSet = data.datasets[e.datasetIndex];
        var label = dataSet.label;
        result[label] = dataSet.data[e.index];
    });

    return result;
}

export { NoopConverter, ArrayScaleConverter, ObjectScaleConverter, KeyValueScaleConverter, getScalePointData };