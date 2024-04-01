import { ITransformOptions } from "../Types";
declare function getKeys(options: ITransformOptions): {
    xKey: any;
    yKeys: string[];
};
declare function getLabels(options: ITransformOptions): {
    xLabel: any;
    yLabels: string[];
};
declare const getLabel: (yLabels: any, key: string, index: number) => any;
export { getLabel, getLabels, getKeys };
