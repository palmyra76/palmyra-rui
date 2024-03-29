import { CellContext, ColumnDef, OnChangeFn, Row, RowData, RowModel, RowSelectionState, Table } from "@tanstack/react-table";
import { AttributeDefinition } from "../form/Definitions";
import { MutableRefObject } from "react";

interface ColumnDefinition extends AttributeDefinition {
    name: string,
    title: string,
    width?: string, // either in px  or percentage
    hideTitle?: boolean,
    hideColumn?: boolean,
    searchable?: boolean,
    sortable?: boolean,
    quickSearch?: boolean,
    cellRenderer?: React.FC,
    columnGroup?: string
}

type CellGetter = ((props: CellContext<RowData, any>) => any);

type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
};

type IExportOptions = PartialRecord<'csv' | 'excel' | 'pdf' | 'docx', string>

type IReactTanstackTable = import("@tanstack/table-core").Table<RowData>;

interface ITableOptions {
    state?: any,
    enableRowSelection?: boolean | ((row: Row<unknown>) => boolean),
    onRowSelectionChange?: OnChangeFn<RowSelectionState>,
    getFilteredRowModel?: (table: Table<any>) => () => RowModel<any>,
    getCoreRowModel?: (table: Table<any>) => () => RowModel<any>, 
    debug: boolean
}


interface GridCustomizer {
    formatCell: (column: ColumnDefinition, cellValueGetter: CellGetter) => CellGetter,
    formatHeader: (column: ColumnDefinition, header: Function) => any,
    formatFooter: (column: ColumnDefinition, footer: Function) => any,
    preProcessColumns?: (columnDefs: ColumnDef<RowData, any>[]) => any,
    preProcessData?: (data: any) => any,
    getTableOptions?: () => ITableOptions,
    getTableRef? : () => MutableRefObject<IReactTanstackTable>
}

const NoopCustomizer: GridCustomizer = {
    formatCell: function (column: ColumnDefinition, cellValueGetter: CellGetter): CellGetter {
        return cellValueGetter;
    },
    formatHeader: function (column: ColumnDefinition, header: Function) {
        return header;
    },
    formatFooter: function (column: ColumnDefinition, footer: Function) {
        return footer;
    }
}

const gridColumnCustomizer = (config: Record<string, ((d: CellGetter) => CellGetter)>,
    factory?: { header?: Record<string, Function>, footer?: Record<string, Function> }
): GridCustomizer => {
    return {
        formatCell: function (column: ColumnDefinition, cellValueGetter: CellGetter)
            : CellGetter {
            const attribute = column.attribute;
            if (config[attribute]) {
                return config[attribute](cellValueGetter);
            } else
                return cellValueGetter;
        },
        formatHeader: function (column: ColumnDefinition, header: Function) {
            const attribute = column.attribute;
            if (factory?.header?.[attribute])
                return factory.header[attribute](column, header);
            return header;
        },
        formatFooter: function (column: ColumnDefinition, footer: Function) {
            const attribute = column.attribute;
            if (factory?.footer?.[attribute])
                return factory.footer[attribute](column, footer)
            return footer;
        }
    }
}



export type { ColumnDefinition, GridCustomizer, CellGetter, IExportOptions, IReactTanstackTable, ITableOptions };
export { NoopCustomizer, gridColumnCustomizer }