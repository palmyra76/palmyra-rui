/// <reference types="react" />
import { CellContext, RowData } from "@tanstack/react-table";
import { AttributeDefinition } from "../form/Definitions";
interface ColumnDefinition extends AttributeDefinition {
    name: string;
    title: string;
    width?: string;
    hideTitle?: boolean;
    hideColumn?: boolean;
    searchable?: boolean;
    sortable?: boolean;
    quickSearch?: boolean;
    cellRenderer?: React.FC;
    columnGroup?: string;
}
type CellGetter = ((props: CellContext<RowData, any>) => any);
type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
type IExportOptions = PartialRecord<'csv' | 'excel' | 'pdf' | 'docx', string>;
interface GridCustomizer {
    formatCell: (column: ColumnDefinition, cellValueGetter: CellGetter) => CellGetter;
    formatHeader: (column: ColumnDefinition, header: Function) => any;
    formatFooter: (column: ColumnDefinition, footer: Function) => any;
    preProcessData?: (data: any) => any;
}
declare const NoopCustomizer: GridCustomizer;
declare const gridColumnCustomizer: (config: Record<string, (d: CellGetter) => CellGetter>, factory?: {
    header?: Record<string, Function>;
    footer?: Record<string, Function>;
}) => GridCustomizer;
export type { ColumnDefinition, GridCustomizer, CellGetter, IExportOptions };
export { NoopCustomizer, gridColumnCustomizer };
