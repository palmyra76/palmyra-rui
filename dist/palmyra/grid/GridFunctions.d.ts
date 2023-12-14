import { ColumnDefinition } from ".";
declare function columnSum(column: ColumnDefinition): (info: any) => any;
declare const gridFn: {
    columnSum: typeof columnSum;
};
export { gridFn };
