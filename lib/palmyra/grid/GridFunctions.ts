import { ColumnDefinition } from ".";

function columnSum(column: ColumnDefinition) {
    return (info: any) => {
        const rows = info.table.getFilteredRowModel().rows;
        return rows.reduce((total: any, row: any) => (total + row.getValue(column.attribute)), 0)
    }
}

const gridFn = { columnSum };

export { gridFn }