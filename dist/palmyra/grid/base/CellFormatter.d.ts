import { ColumnDefinition } from "..";
declare const formatBIT: (columnDef: any) => (info: any) => any;
declare const formatColumn: (columnDef: ColumnDefinition) => (info: any) => import("../../form/Definitions").InputType;
declare const getFormatFn: (columnDef: any) => {
    cell: (info: any) => import("../../form/Definitions").InputType;
};
export { getFormatFn, formatBIT, formatColumn };
