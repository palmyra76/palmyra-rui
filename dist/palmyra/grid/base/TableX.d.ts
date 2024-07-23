import { ColumnDef, RowData } from '@tanstack/react-table';
import { GridCustomizer } from '..';

interface ITableX {
    columnDefs: ColumnDef<RowData, any>[];
    rowData: any[];
    onRowClick: Function;
    onRowStyle: Function;
    onHeaderStyle: Function;
    onSortColumn: Function;
    EmptyChild: React.FC;
    customizer: GridCustomizer;
}
export default function TableX({ columnDefs, rowData, onRowClick, onRowStyle, onHeaderStyle, onSortColumn, EmptyChild, customizer }: ITableX): import("react/jsx-runtime").JSX.Element;
export {};
