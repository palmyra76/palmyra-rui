import { ChartDataConverter } from "../DataConverterFactory";

const DefaultConverter = (data: any): any => {
    return data;
}

const converters: Record<string, ChartDataConverter> = {
    "default": DefaultConverter
}

export default converters;