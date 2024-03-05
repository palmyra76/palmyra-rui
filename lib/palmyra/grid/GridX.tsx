import React, { MutableRefObject, forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { TextField, InputAdornment, Button, ClickAwayListener, Pagination, FormControl, Select, MenuItem } from '@mui/material';
import { generateColumns } from './base/ColumnConverter';
import { AiOutlineSearch } from 'react-icons/ai';
import { default as defaultEmptyChild } from './base/EmptyChildTable';
import TableX from "./base/TableX";
import { Menu, DensitySmall, DensityLarge, Add, KeyboardArrowDown } from '@mui/icons-material';
import { ColumnDefinition, GridCustomizer, NoopCustomizer } from './Types';
import Filter from './plugins/filter/Filter';
import useServerQuery, { IServerQueryInput } from '../form/ServerQueryManager';
import { IPageQueryable } from '../form/interfaceFields';
import { IPagination } from "../../palmyra/store/Types"
import { TbFilterShare, TbTableExport } from "react-icons/tb";
import { PiFileXls, PiFilePdf } from "react-icons/pi";
import { BsInfoCircle } from "react-icons/bs";
import { InfoTooltip } from '../tooltip/InfoTooltip';


//TODO - show errors on data fetching

interface GridXOptions extends IServerQueryInput {
  columns: ColumnDefinition[],
  children?: any,
  EmptyChild?: React.FC,
  onRowClick?: Function,
  onNewClick?: Function,
  customizer?: GridCustomizer,
  customButton?: React.ReactNode[],
  title?: any,
  customAddButton?: any,
  titleInfo?: String
}

const GridX = forwardRef(function GridX(props: GridXOptions, ref: MutableRefObject<IPageQueryable>) {
  const { columns, children, EmptyChild, onRowClick, quickSearch } = props;
  const EmptyChildContainer = EmptyChild || defaultEmptyChild;
  const customizer: GridCustomizer = props.customizer || NoopCustomizer;
  const customButton = props.customButton;
  const title = props.title;

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [exportDropdownOpen, setExportDropdownOpen] = useState(false);
  const [selectedDensity, setSelectedDensity] = useState('standard');
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [querySearchText, setQuickSearchText] = useState("");

  const {
    setQueryFilter, setQuickSearch, setSortColumns, setEndPointOptions,
    gotoPage, setPageSize, getPageNo, refreshData, setQueryLimit, getQueryLimit,
    data, totalRecords, queryLimit, pageSizeOptions, filter } = useServerQuery(props);

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
  }, [getQueryLimit]);


  const nextPage = (event, newPage) => {
    gotoPage(newPage - 1);
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


  const onFilterClick = (event: any) => {
    setFilterDropdownOpen(!filterDropdownOpen);
  }

  const onExportClick = () => {
    setExportDropdownOpen(!exportDropdownOpen);
  }

  const handlePdfGen = () => {

  }

  const handleExcelGen = () => {

  }
  const onNewClick = () => {
    props.onNewClick();
  }
  const width = 200;
  const visiblePagination = !!props.pageSize;
  const visibleFilter = !!quickSearch;

  const arrowStyles = {
    transform: dropdownOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
  };
  const filterArrowStyles = {
    transform: filterDropdownOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
  };
  const exportArrowStyles = {
    transform: exportDropdownOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
  };

  const totalPages = Math.ceil(totalRecords / queryLimit.limit);
  return (
    <div>
      <div>
        {children}
        <div className='grid-header'>
          <div className='grid-header-right-content'>
            {props.titleInfo ? (
              <InfoTooltip placement='right' title={props.titleInfo} arrow>
                <div className='info-grid-header'>
                  <span className='grid-header-right-content-text'>{title}</span>
                  <BsInfoCircle class='grid-header-info-icon' />
                </div>
              </InfoTooltip>
            ) : (
              <span className='grid-header-right-content-text'>{title}</span>
            )}
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
                <Button className='grid-btn' disableRipple>
                  {densityIcon()}
                  <span>Density</span>
                  <KeyboardArrowDown style={arrowStyles} className='avathar-arrw-icon' />
                </Button>
                {dropdownOpen && (
                  <div className="density-dropdown-content">
                    <ul>
                      <li onClick={() => handleDensityChange('standard')}>
                        <Menu className='density-icon grid-button-icon' />
                        <span className='drodown-content-text'>Standard</span>
                      </li>
                      <li onClick={() => handleDensityChange('compact')}>
                        <DensitySmall className='density-icon grid-button-icon' />
                        <span className='drodown-content-text'>Compact</span>
                      </li>
                      <li onClick={() => handleDensityChange('comfortable')}>
                        <DensityLarge className='density-icon grid-button-icon' />
                        <span className='drodown-content-text'>Comfortable</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </ClickAwayListener>
            {columns.some(column => column.searchable) && (
              <ClickAwayListener onClickAway={() => { setFilterDropdownOpen(false) }}>
                <div className='grid-header-button grid-filter-btn' onClick={onFilterClick}>
                  <Button className='grid-btn' disableRipple>
                    <TbFilterShare className='grid-button-icon' />
                    <span>Filter</span>
                    <KeyboardArrowDown style={filterArrowStyles} className='avathar-arrw-icon' />
                  </Button>
                  {filterDropdownOpen && (
                    <div className="filter-dropdown-content" onClick={(e) => e.stopPropagation()}>
                      <Filter columns={columns} setFilter={setQueryFilter}
                        defaultFilter={filter}
                        isOpen={filterDialogOpen} onClose={() => setFilterDialogOpen(false)} />
                    </div>
                  )}
                </div>
              </ClickAwayListener>)}
            <ClickAwayListener onClickAway={() => { setExportDropdownOpen(false) }}>
              <div className='grid-header-button grid-export-btn' onClick={onExportClick}>
                <Button className='grid-btn' disableRipple>
                  <TbTableExport className='grid-button-icon' />
                  <span>Export</span>
                  <KeyboardArrowDown style={exportArrowStyles} className='avathar-arrw-icon' />
                </Button>
                {exportDropdownOpen && (
                  <div className="density-dropdown-content">
                    <ul>
                      <li onClick={handlePdfGen}>
                        <PiFilePdf className='density-icon grid-button-icon' />
                        <span className='drodown-content-text'>Export as PDF</span>
                      </li>
                      <li onClick={handleExcelGen}>
                        <PiFileXls className='density-icon grid-button-icon' />
                        <span className='drodown-content-text'>Export as Excel</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </ClickAwayListener>
            {props.onNewClick ? (
              <div className='grid-header-button grid-add-btn'>
                <div onClick={onNewClick}>
                  <Button className='grid-btn' disableRipple>
                    {props.customAddButton && props.customAddButton.icon ? (
                      React.cloneElement(props.customAddButton.icon, {
                        className: 'grid-button-icon'
                      })
                    ) : (
                      <Add className='grid-button-icon' />
                    )}
                    {props.customAddButton && props.customAddButton.text ? (
                      <>{props.customAddButton.text}</>
                    ) : (
                      <span>Add</span>
                    )}
                  </Button>
                </div>
              </div>) : <></>}
            {customButton && customButton.map((button: any, index: any) => (
              <div key={index} className='grid-custom-button'>
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
            {(visiblePagination && totalPages !== 0) && (
              <div>
                {/* <TablePagination
                  component="div"
                  count={totalRecords || 0}
                  page={getPageNo()}
                  onPageChange={nextPage}
                  rowsPerPage={queryLimit.limit}
                  rowsPerPageOptions={pageSizeOptions || []}
                  onRowsPerPageChange={handleRowsPerPageChange}
                /> */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ width: '50%' }}>
                    {
                      pageSizeOptions && pageSizeOptions.length > 1 ? (
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div><span>Showing</span></div>
                            <div>
                              <Select
                                labelId="rows-per-page-select-label"
                                id="rows-per-page-select"
                                defaultValue={pageSizeOptions[0]}
                                onChange={handleRowsPerPageChange}
                                label="Rows per page"
                              >
                                {pageSizeOptions.map((pageSize) => (
                                  <MenuItem key={pageSize} value={pageSize}>
                                    {pageSize}
                                  </MenuItem>
                                ))}
                              </Select>
                            </div>
                            <div><span>of {totalRecords} Results</span></div>
                          </div>
                        </FormControl>

                      ) : null
                    }
                  </div>
                  <div style={{}}>
                    <Pagination count={totalPages} shape="rounded" componentName='div'
                      onChange={nextPage} page={getPageNo() + 1}
                    />
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div >
    </div >
  )
});

export default GridX;