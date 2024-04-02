import { ITransformOptions, StyleOptions, chartStyle } from "../../Types";
import { ChartStyleConverter, DataSet, DataSetType, DataSets } from "../Types"
import { getKeys } from "../util";
import generateColors from "./GenerateColors";


interface IStyleConverterFactory {
    (styleOptions: StyleOptions, transformOptions?: ITransformOptions): ChartStyleConverter<DataSetType>
}
const LabelStyleConverterFactory: IStyleConverterFactory = (styleOptions: StyleOptions,
    transformOptions?: ITransformOptions) => {
    return (data: DataSets<DataSetType>, options?: any): DataSets<DataSetType> => {
        if(null == data || undefined == data)
            return data;

        data.datasets?.map((dataset: DataSet<DataSetType>) => {
            const key = dataset.key;
            const style: chartStyle = styleOptions[key];
            if (style) {
                dataset.backgroundColor = style.backgroundColor || generateColors(1);
                dataset.borderColor = style.borderColor || generateColors(1);
            } else {
                dataset.backgroundColor = generateColors(1);
                dataset.borderColor = generateColors(1);
            }
        })
        return data;
    }
}

const DatasetStyleConverterFactory: IStyleConverterFactory = (styleOptions: StyleOptions,
    transformOptions?: ITransformOptions) => {
    return (data: DataSets<DataSetType>, options?: any): DataSets<DataSetType> => {
        if(null == data || undefined == data)
            return data;

        const backgroundColor: any[] = generateColors(data.labels.length);
        const borderColor: any[] = generateColors(data.labels.length);

        data.labels.map((label, index) => {
            const style: chartStyle = styleOptions[label];
            if (style) {
                if (style.backgroundColor)
                    backgroundColor[index] = style.backgroundColor;
                if (style.borderColor)
                    borderColor[index] = style.borderColor;
            }
        })

        if (data.datasets[0]) {
            data.datasets[0].backgroundColor = backgroundColor;
            data.datasets[0].borderColor = backgroundColor;
        }

        return data;
    }
}

const ArrayStyleConverterFactory: IStyleConverterFactory = (styleOptions: StyleOptions,
    transformOptions?: ITransformOptions) => {
    return (data: DataSets<DataSetType>, options?: any): DataSets<DataSetType> => {
        if (null == styleOptions || null == data || undefined == data)
            return data;

        const backgroundColor: any[] = [];
        const borderColor: any[] = [];

        // @ts-ignore
        const length: number = styleOptions.length;

        data.labels.map((label, index) => {
            const i = index % length;
            const style: chartStyle = styleOptions[i];
            backgroundColor.push(style?.backgroundColor)
            borderColor.push(style?.borderColor);
        })

        if (data.datasets[0]) {
            data.datasets[0].backgroundColor = backgroundColor;
            data.datasets[0].borderColor = backgroundColor;
        }

        return data;
    }
}

const NoopStyleConverter: ChartStyleConverter<DataSetType> = (data: DataSets<number>, options?: any): DataSets<number> => {
    return data;
}

const RandomStyleConverterFactory: IStyleConverterFactory = (o: StyleOptions) => {
    return (data: DataSets<DataSetType>, options?: any): DataSets<DataSetType> => {
        if(null == data || undefined == data)
            return data;

        data.datasets?.map((dataset: DataSet<DataSetType>) => {
            dataset.backgroundColor = generateColors(1);
            dataset.borderColor = generateColors(1);
        })
        return data;
    }
}


const getStyleConverter = (chartType: string, styleOptions: StyleOptions, transformOptions: ITransformOptions): ChartStyleConverter<DataSetType> => {
    if (null == styleOptions)
        // return NoopStyleConverter;
        return RandomStyleConverterFactory({});

    const { yKeys } = getKeys(transformOptions);

    if (styleOptions instanceof Array) {
        return ArrayStyleConverterFactory(styleOptions, transformOptions);
    } else {
        if (yKeys.length > 1)
            return LabelStyleConverterFactory(styleOptions, transformOptions);
        else
            return DatasetStyleConverterFactory(styleOptions, transformOptions);
    }
    return RandomStyleConverterFactory({});
}

export type { IStyleConverterFactory }
export { NoopStyleConverter, LabelStyleConverterFactory, DatasetStyleConverterFactory, RandomStyleConverterFactory }
export { getStyleConverter }