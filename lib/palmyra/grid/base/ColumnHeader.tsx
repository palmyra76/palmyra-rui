import { useState } from 'react';
import { TableCell } from '@mui/material';
import { LuArrowDownUp, LuArrowUpDown } from "react-icons/lu";

const ColumnHeader = ({ header, children, onSortChange, onHeaderStyle }) => {

    const [sortOrder, setSortOrder] = useState('');
    const columnAttribute = header.column.columnDef.meta?.attribute || header.id;
    const sortDisabled = !header.column.columnDef.enableSorting;
    const width = header.column.columnDef.meta?.columnDef?.width || 'auto';

    const handleSortColumn = () => {
        if (onSortChange === undefined || sortDisabled)
            return;

        var order = sortOrder;
        switch (order) {
            case 'asc':
                order = 'desc'
                break;
            case 'desc':
                order = '';
                break;
            default:
                order = 'asc'
                break;
        }
        setSortOrder(order);
        onSortChange(columnAttribute, order)
    };

    var headerStyle = onHeaderStyle(header.original)
    if (!sortDisabled)
        headerStyle.cursor = 'pointer';

    const meta: any = header.column.columnDef.meta;

    if (header.column.columnDef.columns) {
        // Render Grouped Columns
        return (
            <TableCell key={header.id} colSpan={header.colSpan} style={{ ...headerStyle }}>
                <div style={{
                    display: 'flex',
                    fontWeight: 'bold',
                    alignItems: 'center',
                    gap: '10px',
                    width: width,
                    justifyContent: 'center'
                }} >
                    {children}
                </div>
            </TableCell>
        )
    } else
        return (
            <TableCell key={header.id} colSpan={header.colSpan} style={{ ...headerStyle }}>
                <div style={{
                    display: 'flex',
                    fontWeight: 'bold',
                    alignItems: 'center',
                    gap: '10px',
                    width: width,
                    justifyContent: meta?.columnDef?.type === 'number' ? 'flex-end' : 'flex-start'
                }} onClick={() => handleSortColumn()}>
                    {children}
                    {sortOrder === 'asc' ? (
                        <LuArrowUpDown style={{ fontSize: '18px', color: 'rgb(0,0,0,0.5)' }} />
                    ) :
                        sortOrder === 'desc' ? (
                            <LuArrowDownUp style={{ fontSize: '18px', color: 'rgb(0,0,0,0.5)' }} />
                        ) : null}

                </div>
            </TableCell>
        )
}

export default ColumnHeader;
