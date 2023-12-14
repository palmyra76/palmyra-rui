import { AccessorFn, RowData, createColumnHelper } from '@tanstack/react-table'

import { formatColumn } from './CellFormatter';
import { ColumnDefinition, GridCustomizer } from '../Types';
import { getValueByKey } from '../../form/FormUtil';
import { hasDot } from '../../utils';

const columnHelper = createColumnHelper();

function generateColumns(columnDefs: ColumnDefinition[], customizer: GridCustomizer) {
    return columnDefs.map(def => convert(def, customizer));
}

function convert(columnDef: ColumnDefinition, customizer: GridCustomizer) {
    const enableSorting = columnDef.sortable;
    const enableColumnFilter = columnDef.searchable;

    var renderer = columnDef.cellRenderer;
    const header = customizer.formatHeader(columnDef,  getHeader(columnDef));
    const footer = customizer.formatFooter(columnDef,  getFooter(columnDef));

    if (renderer) {
        return columnHelper.display({
            id: getColumnId(columnDef),
            meta: {
                attribute: columnDef.attribute
            },
            enableSorting,
            enableColumnFilter,
            header, footer,
            cell: renderer
        });
    }

    let cell: any = customizer.formatCell(columnDef, formatColumn(columnDef));

    return columnHelper.accessor(getAccessor(columnDef), {
        id: getColumnId(columnDef),
        meta: {
            attribute: columnDef.attribute
        },
        enableSorting,
        enableColumnFilter,
        header, footer,
        cell
    });
}

function getAccessor(columnDef: ColumnDefinition): AccessorFn<RowData> {
    var key = columnDef.attribute ? columnDef.attribute : columnDef.name;
    if (hasDot(key)) {
        return (row: RowData) => getValueByKey(key, row);
    }
    else
        return (row: RowData) => row[key];

}

function getColumnId(columnDef: ColumnDefinition) {
    return columnDef.name ? columnDef.name : columnDef.attribute;
}

function getHeader(columnDef: ColumnDefinition) {
    return () => <span>{columnDef.title}</span>
}

function getFooter(columnDef: ColumnDefinition) {
    return (info: any, arg:any) => {return undefined};
}


export { generateColumns }