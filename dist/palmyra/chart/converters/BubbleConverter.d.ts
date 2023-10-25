import { InteractionItem } from "chart.js";
import { transformOptions } from "../../layout/Types";
import { DataConverterGen } from "../DataConverterFactory";
declare const getPointData: (data: any, transformOptions: transformOptions, element: InteractionItem[], elements: InteractionItem[]) => {};
declare const converters: Record<string, DataConverterGen>;
export default converters;
export { getPointData };
