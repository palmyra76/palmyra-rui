import { ITransformOptions, StyleOptions, ChartStyle } from "../../Types";
import { ChartStyleConverter, DataSet, DataSetType, DataSets } from "../Types"
import { getKeys } from "../util";
import generateColors from "./GenerateColors";


interface IStyleConverterFactory {
    (styleOptions: StyleOptions, transformOptions?: ITransformOptions): ChartStyleConverter<DataSetType>
}
const LabelStyleConverterFactory: IStyleConverterFactory = (styleOptions: StyleOptions,
    transformOptions?: ITransformOptions) => {
    return (data: DataSets<DataSetType>, options?: any): DataSets<DataSetType> => {
        if (null == data || undefined == data)
            return data;

        data.datasets?.map((dataset: DataSet<DataSetType>) => {
            const key = dataset.key;
            const style: ChartStyle = styleOptions[key];
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

const TwoXDatasetStyleConverterFactory: IStyleConverterFactory = (styleOptions: StyleOptions,
    transformOptions?: ITransformOptions) => {
    return (data: DataSets<DataSetType>, options?: any): DataSets<DataSetType> => {
        if (null == data || undefined == data)
            return data;

        data.datasets.map((d) => {
            const style = styleOptions[d.label];
            d.backgroundColor = style?.backgroundColor;
            d.borderColor = style?.borderColor;
        });

        return data;
    }
}

const TwoXArrayStyleConverterFactory: IStyleConverterFactory = (styleOptions: StyleOptions,
    transformOptions?: ITransformOptions) => {
    return (data: DataSets<DataSetType>, options?: any): DataSets<DataSetType> => {
        if (null == data || undefined == data)
            return data;

        data.datasets.map((d, index) => {
            const style = styleOptions[index];
            d.backgroundColor = style?.backgroundColor;
            d.borderColor = style?.borderColor;
        });

        return data;
    }
}

const assignStyles = (d, style: ChartStyle) => {
    d.backgroundColor = style?.backgroundColor || generateColors(1)[0];
    d.borderColor = style?.borderColor || generateColors(1)[0];
    assign(style, d, 'radius');
    assign(style, d, 'borderWidth');
    assign(style, d, 'hoverRadius');
}

const assign = (src, tgt, key: keyof ChartStyle) => {
    if (src[key])
        tgt[key] = src[key];
}


const GroupArrayStyleConverterFactory: IStyleConverterFactory = (styleOptions: StyleOptions,
    transformOptions?: ITransformOptions) => {
    return (data: DataSets<DataSetType>, options?: any): DataSets<DataSetType> => {
        if (null == data || undefined == data)
            return data;

        data.datasets.map((d, index) => {
            const style = styleOptions[d.key];
            assignStyles(d, style);
        });
        return data;
    }
}

const DatasetStyleConverterFactory: IStyleConverterFactory = (styleOptions: StyleOptions,
    transformOptions?: ITransformOptions) => {
    return (data: DataSets<DataSetType>, options?: any): DataSets<DataSetType> => {
        if (null == data || undefined == data)
            return data;

        const backgroundColor: any[] = generateColors(data.labels.length);
        const borderColor: any[] = generateColors(data.labels.length);

        data.labels.map((label, index) => {
            const style: ChartStyle = styleOptions[label];
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
            const style: ChartStyle = styleOptions[i];
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
        if (null == data || undefined == data)
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

    if (transformOptions.group) {
        return GroupArrayStyleConverterFactory(styleOptions, transformOptions);
    }

    const { xKey, yKeys } = getKeys(transformOptions);

    if (styleOptions instanceof Array) {
        if (xKey instanceof Array) {
            return TwoXArrayStyleConverterFactory(styleOptions, transformOptions);
        } else
            return ArrayStyleConverterFactory(styleOptions, transformOptions);
    } else {
        if (yKeys.length > 1)
            return LabelStyleConverterFactory(styleOptions, transformOptions);
        else if (xKey instanceof Array) {
            return TwoXDatasetStyleConverterFactory(styleOptions, transformOptions);
        } else
            return DatasetStyleConverterFactory(styleOptions, transformOptions);
    }
    return RandomStyleConverterFactory({});
}

export type { IStyleConverterFactory }
export { NoopStyleConverter, LabelStyleConverterFactory, DatasetStyleConverterFactory, RandomStyleConverterFactory }
export { getStyleConverter }