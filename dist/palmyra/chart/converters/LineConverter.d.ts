import { InteractionItem } from "chart.js";
import { transformOptions } from "../../layout/Types";
import { DataConverterGen } from "../DataConverterFactory";
declare const converters: Record<string, DataConverterGen>;
declare const getPointData: (data: any, transformOptions: transformOptions, element: InteractionItem[], elements: InteractionItem[]) => {
    [x: number]: any;
};
export default converters;
export { getPointData };
