import { ChartLayout } from "../../layout/flexiLayout";
import { DataConverterGen, ChartDataConverter } from "../DataConverterFactory";

const DefaultConverter = (layout: ChartLayout): ChartDataConverter => {
    return (data) => { data };
}

const converters: Record<string, DataConverterGen> = {
    "default": DefaultConverter
}

export default converters;