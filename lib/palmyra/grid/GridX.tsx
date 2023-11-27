import { MutableRefObject, forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { TablePagination, TextField, InputAdornment, Button, Tooltip, ClickAwayListener } from '@mui/material';
import { generateColumns } from './base/ColumnConverter';
import { AiOutlineSearch } from 'react-icons/ai';
import { default as defaultEmptyChild } from './base/EmptyChildTable';
import TableX from "./base/TableX";
import { Menu, DensitySmall, DensityLarge, FileDownloadOutlined, FilterAlt, Add } from '@mui/icons-material';
import { DefaultQueryParams, QueryStore } from '../store';
import { ColumnDefinition, GridCustomizer, NoopCustomizer } from './Types';
import Filter from './plugins/filter/Filter';
import useServerQuery from '../form/ServerQueryManager';


//TODO - show errors on data fetching

interface GridXOptions {
  columns: ColumnDefinition[],
  children?: any,
  fetchAll?: boolean,
  EmptyChild?: React.FC,
  store: QueryStore<any>,
  onRowClick?: Function,
  onNewClick?: Function,
  pageSize?: number[],
  quickSearch?: string,
  customizer?: GridCustomizer,
  defaultParams?: DefaultQueryParams
}

const GridX = forwardRef(function GridX(props: GridXOptions, ref: MutableRefObject<any>) {
  const { columns, children, EmptyChild, onRowClick, quickSearch } = props;
  const EmptyChildContainer = EmptyChild || defaultEmptyChild;
  const customizer: GridCustomizer = props.customizer || NoopCustomizer;

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDensity, setSelectedDensity] = useState('standard');
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [querySearchText, setQuickSearchText] = useState("");

  const {
    setQueryFilter, setQuickSearch, setSortColumns,
    gotoPage, setPageSize, getPageNo, refreshData,
    data, totalRecords, pageSizeOptions, filter, queryLimit } = useServerQuery(props);


  const currentRef = ref ? ref : useRef(null);
  useImperativeHandle(currentRef, () => {
    return {
      setFilter: (d: any) => {
        setQueryFilter(d);
      },
      refresh: () => {
        refreshData();
      }
    };
  }, []);


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
            <div className='grid-header-button' onClick={toggleDropdown}>
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
          <div className='grid-header-button'>
            <Tooltip title='Filter' placement='top'>
              <Button className='grid-btn' disableRipple onClick={() => setFilterDialogOpen(true)}>
                <FilterAlt className='grid-button-icon' />
              </Button>
            </Tooltip>
            <Filter columns={columns} setFilter={setQueryFilter}
              defaultFilter={filter}
              isOpen={filterDialogOpen} onClose={() => setFilterDialogOpen(false)} />
          </div>
          <div className='grid-header-button' onClick={onExportClick}>
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
        </div>
        <div className='grid-table'>
          <TableX columnDefs={columnDefs} EmptyChild={EmptyChildContainer}
            rowData={data} onRowClick={handleRowClick} onRowStyle={handleRowDensityChange}
            onHeaderStyle={handleHeaderDensityChange} onSortColumn={setSortColumns}
          />
        </div>
        <div className='grid-header'>
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

export default GridX;