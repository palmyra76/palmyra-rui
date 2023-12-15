import { useState } from 'react';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import { TableCell } from '@mui/material';

const ColumnHeader = ({ header, children, onSortChange, onHeaderStyle }) => {

    const [sortOrder, setSortOrder] = useState('');
    const columnAttribute = header.column.columnDef.meta?.attribute || header.id;
    const sortDisabled = !header.column.columnDef.enableSorting;

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

    return (
        <TableCell key={header.id} colSpan={header.colSpan} style={headerStyle}>
            <div style={{
                display: 'flex',
                gap: '2px',
                justifyContent: meta.columnDef.type === 'select' ? 'flex-end' : 'flex-start'
            }} onClick={() => handleSortColumn()}>
                {children}
                {sortOrder === 'asc' ? (
                    <ArrowUpward style={{ fontSize: '22px', color: 'rgb(0,0,0,0.5)' }} />
                ) :
                    sortOrder === 'desc' ? (
                        <ArrowDownward style={{ fontSize: '22px', color: 'rgb(0,0,0,0.5)' }} />
                    ) : null}

            </div>
        </TableCell>
    )
}

export default ColumnHeader;
