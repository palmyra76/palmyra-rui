import { MutableRefObject, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { TablePagination, TextField, InputAdornment, Button, Tooltip, ClickAwayListener } from '@mui/material';
import { generateColumns } from './base/ColumnConverter';
import { AiOutlineSearch } from 'react-icons/ai';
import { default as defaultEmptyChild } from './base/EmptyChildTable';
import TableX from "./base/TableX";
import { Menu, DensitySmall, DensityLarge, FileDownloadOutlined, FilterAlt, Add } from '@mui/icons-material';
import { ColumnDefinition, GridCustomizer, NoopCustomizer } from './Types';
import Filter from './plugins/filter/Filter';
import useServerQuery, { IServerQueryInput } from '../form/ServerQueryManager';
import { IPageQueryable } from '../form/interfaceFields';
import { IPagination } from "../store/Types"


//TODO - show errors on data fetching

interface GridXOptions extends IServerQueryInput {
  columns: (data: any) => ColumnDefinition[],
  children?: any,
  EmptyChild?: React.FC,
  onRowClick?: Function,
  onNewClick?: Function,
  customizer?: GridCustomizer,
  customButton?: React.ReactNode[],
  gridTitle?: any
}

const DynColGridX = forwardRef(function DynColGridX(props: GridXOptions, ref: MutableRefObject<IPageQueryable>) {
  const { children, EmptyChild, onRowClick, quickSearch } = props;
  const colGenerator = props.columns;

  const EmptyChildContainer = EmptyChild || defaultEmptyChild;
  const customizer: GridCustomizer = props.customizer || NoopCustomizer;
  const customButton = props.customButton;
  const gridTitle = props.gridTitle;

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDensity, setSelectedDensity] = useState('standard');
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [querySearchText, setQuickSearchText] = useState("");

  const {
    setQueryFilter, setQuickSearch, setSortColumns, setEndPointOptions,
    gotoPage, setPageSize, getPageNo, refreshData, setQueryLimit, getQueryLimit,
    data, totalRecords, queryLimit, pageSizeOptions, filter } = useServerQuery(props);

  const [columns, setColumns] = useState(colGenerator(data));

  const currentRef = ref ? ref : useRef<IPageQueryable>(null);
  useImperativeHandle(currentRef, () => {
    return {
      setFilter: (d: any) => {
        setQueryFilter(d);
      },
      refresh: () => {
        refreshData();
      },
      resetFilter() {
        setQueryFilter({});
      },
      setEndPointOptions: (d: any) => {
        setEndPointOptions(d);
      },
      addFilter: (key: string, v: any) => {
        setQueryFilter((f: any) => {
          f[key] = v;
          return { ...f }
        })
      },
      setQueryLimit: (d: IPagination) => {
        setQueryLimit(d);
      },
      getQueryLimit: () => {
        return getQueryLimit();
      },
      setSortOptions(d) {
        setSortColumns(d);
      },
      getCurrentData: () => {
        return data;
      }
    };
  }, [getQueryLimit, columns]);


  useEffect(() => {
    setColumns(colGenerator(data));
  }, [data])

  const nextPage = (event, newPage) => {
    gotoPage(newPage);
  };

  const columnDefs = generateColumns(columns, customizer);

  const handleDensityChange = (density) => {
    setSelectedDensity(density);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleRowDensityChange = () => {
    if (selectedDensity === 'compact') {
      return { padding: '3px' };
    } else if (selectedDensity === 'comfortable') {
      return { padding: '15px', fontSize: '18px' };
    } else {
      return { padding: '7px' };
    }
  }

  const handleHeaderDensityChange = () => {
    if (selectedDensity === 'compact') {
      return { padding: '3px' };
    } else if (selectedDensity === 'comfortable') {
      return { padding: '15px', fontSize: '18px' };
    } else {
      return { padding: '7px' };
    }
  }

  const densityIcon = () => {
    var iconComponent: any;

    switch (selectedDensity) {
      case 'compact':
        iconComponent = <DensitySmall className='density-icon' />;
        break;
      case 'comfortable':
        iconComponent = <DensityLarge className='density-icon' />;
        break;
      default:
        iconComponent = <Menu className="grid-button-icon" />;
        break;
    }
    return iconComponent;
  }


  const handleSearch = (event) => {
    const val = event.target.value;
    setQuickSearchText(val);

    if (val)
      setQuickSearch(val)
    else {
      setQueryFilter({});
    }
  };

  const handleRowClick = (rowData) => {
    if (onRowClick) {
      onRowClick(rowData);
    }
  }
  const handleRowsPerPageChange = (event) => {
    const limit = parseInt(event.target.value, 10);
    setPageSize(limit);
  }

  const onExportClick = () => {
    console.info('Export Clicked');
  }

  const width = 200;
  const visiblePagination = !!props.pageSize;
  const visibleFilter = !!quickSearch;

  return (
    <div>
      <div>
        {children}
        <div className='grid-header'>
          <div className='grid-header-right-content'>
            <span className='grid-header-right-content-text'>{gridTitle}</span>
          </div>
          <div className='grid-header-left-content'>
            <div className='grid-header-filter'>
              {visibleFilter && (
                <TextField
                  sx={{ width: width }}
                  type="text"
                  value={querySearchText}
                  onChange={handleSearch}
                  style={{ border: "0px" }}
                  size="small"
                  placeholder="Name"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <AiOutlineSearch className="card-filter-icon" />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            </div>
            <ClickAwayListener onClickAway={() => { setDropdownOpen(false) }}>
              <div className='grid-header-button grid-density-btn' onClick={toggleDropdown}>
                <Tooltip title='Density' placement='top'>
                  <Button className='grid-btn' disableRipple>
                    {densityIcon()}
                  </Button>
                </Tooltip>
                {dropdownOpen && (
                  <div className="density-dropdown-content">
                    <ul>
                      <li onClick={() => handleDensityChange('standard')}>
                        <Menu className='density-icon' />
                        <span className='drodown-content-text'>Standard</span>
                      </li>
                      <li onClick={() => handleDensityChange('compact')}>
                        <DensitySmall className='density-icon' />
                        <span className='drodown-content-text'>Compact</span>
                      </li>
                      <li onClick={() => handleDensityChange('comfortable')}>
                        <DensityLarge className='density-icon' />
                        <span className='drodown-content-text'>Comfortable</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </ClickAwayListener>
            {columns.some(column => column.searchable) && (
              <div className='grid-header-button grid-filter-btn'>
                <Tooltip title='Filter' placement='top'>
                  <Button className='grid-btn' disableRipple onClick={() => setFilterDialogOpen(true)}>
                    <FilterAlt className='grid-button-icon' />
                  </Button>
                </Tooltip>
                <Filter columns={columns} setFilter={setQueryFilter}
                  defaultFilter={filter}
                  isOpen={filterDialogOpen} onClose={() => setFilterDialogOpen(false)} />
              </div>)}
            <div className='grid-header-button grid-export-btn' onClick={onExportClick}>
              <Tooltip title='Export' placement='top'>
                <Button className='grid-btn' disableRipple>
                  <FileDownloadOutlined className='grid-button-icon' />
                </Button>
              </Tooltip>
            </div>
            {props.onNewClick ? (
              <div className='grid-header-button' onClick={() => { props.onNewClick(); }}>
                <Tooltip title='New' placement='top'>
                  <Button className='grid-btn' disableRipple>
                    <Add className='grid-button-icon' />
                  </Button>
                </Tooltip>
              </div>) : <></>}
            {customButton && customButton.map((button: any, index: any) => (
              <div key={index} className='grid-custom-button grid-export-btn'>
                {button}
              </div>
            ))}
          </div>
        </div>
        <div className='grid-table'>
          <TableX columnDefs={columnDefs} EmptyChild={EmptyChildContainer} customizer={customizer}
            rowData={data} onRowClick={handleRowClick} onRowStyle={handleRowDensityChange}
            onHeaderStyle={handleHeaderDensityChange} onSortColumn={setSortColumns}
          />
        </div>
        <div className='grid-footer'>
          <div className='grid-filter'>
            {visiblePagination && (
              <TablePagination
                component="div"
                count={totalRecords || 0}
                page={getPageNo()}
                onPageChange={nextPage}
                rowsPerPage={queryLimit.limit}
                rowsPerPageOptions={pageSizeOptions || []}
                onRowsPerPageChange={handleRowsPerPageChange}
              />
            )}
          </div>
        </div>
      </div >
    </div >
  )
});

export default DynColGridX;