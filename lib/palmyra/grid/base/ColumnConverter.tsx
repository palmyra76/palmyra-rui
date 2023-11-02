import { createColumnHelper } from '@tanstack/react-table'

import { getFormatFn } from './CellFormatter';
import { ColumnDefinition } from '../Types';

const columnHelper = createColumnHelper();

function generateColumns(columnDefs: ColumnDefinition[]) {
    return columnDefs.map(def => convert(def));
}

function convert(columnDef: ColumnDefinition) {
    //TODO -- reformat this code - break into three functions
    // getHeader, getFooter, getCellRenderer
    var renderer = columnDef.cellRenderer;
    let headerFn = getHeaderFooter(columnDef);

    if (renderer) {
        return columnHelper.display({
            id: getColumnId(columnDef),
            ...headerFn,
            cell: renderer
        });
    }

    let cell = getFormatFn(columnDef);
    return columnHelper.accessor(getColumnId(columnDef), {
        id: getColumnId(columnDef),
        enableSorting: columnDef.sortable,        
        ...headerFn, ...cell
    });
}

function getColumnId(columnDef:ColumnDefinition){
    return columnDef.name ? columnDef.name : columnDef.attribute;
}


function getHeaderFooter(columnDef: ColumnDefinition) {
    let header = columnDef.title;
    return {
        header: () => <span>{header}</span>,
        footer: info => info.column.id
    };
}

export { generateColumns }