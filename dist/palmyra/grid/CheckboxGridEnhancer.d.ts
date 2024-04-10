import { ColumnDef, RowData } from '@tanstack/react-table';
import { IReactTanstackTable, ITableOptions } from '.';
import { MutableRefObject } from 'react';

interface IGridEnhancer {
    getTableOptions: () => ITableOptions;
    getTableRef: () => MutableRefObject<IReactTanstackTable>;
    preProcessColumns: (columnDefs: ColumnDef<RowData, any>[]) => any;
    getSelectedIds: () => any;
}
declare const CheckboxGridEnhancer: () => IGridEnhancer;
export { CheckboxGridEnhancer };
export type { IGridEnhancer };
