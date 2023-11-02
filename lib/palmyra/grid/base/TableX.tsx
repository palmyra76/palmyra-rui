/**
 * Basic structure to draw the table
 */
import { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Paper, Box } from '@mui/material';
import './Grid.css';
import ColumnHeader from './ColumnHeader'

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'


function TableX({ columnDefs, rowData, onRowClick, onRowStyle, onHeaderStyle, onSortColumn }) {
  const table = useReactTable({
    data: rowData,
    manualSorting: true,
    manualFiltering: true,
    manualPagination: true,
    columns: columnDefs,
    getCoreRowModel: getCoreRowModel(),
  })

  const [sortColumn, setSortColumn] = useState({});

  useEffect(() => {
    onSortColumn(sortColumn);
  }, [sortColumn])

  const onSortChange = (column, sortOrder) => {
    var sort = { ...sortColumn };

    if (sortOrder == '') {
      delete sort[column];
    } else {
      sort[column] = sortOrder;
    }
    setSortColumn(sort);
  }


  const onSort = onSortColumn ? onSortChange : undefined;

  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" className='table'>
          <TableHead className='table-head'>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    header.isPlaceholder ? null : (
                      <ColumnHeader header={header}
                        key={header.id}
                        onSortChange={onSort}
                        onHeaderStyle={onHeaderStyle}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </ColumnHeader>
                    )
                  )
                })}
              </TableRow>
            ))}
          </TableHead>
          <TableBody >
            {
              table.getRowModel().rows
                .map(row => {
                  const rowStyle = onRowStyle(row.original);
                  return (
                    <TableRow key={row.id} className='table-row' >
                      {row.getVisibleCells().map(cell => {
                        return (
                          <TableCell key={cell.id} style={rowStyle} onClick={() => onRowClick(row.original)}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}

                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default TableX;