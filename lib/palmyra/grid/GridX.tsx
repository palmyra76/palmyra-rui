import { useEffect, useState } from 'react';
import { TablePagination, TextField, InputAdornment, Button, Tooltip, ClickAwayListener } from '@mui/material';
import { generateColumns } from './base/ColumnConverter';
import { AiOutlineSearch } from 'react-icons/ai';
import { default as defaultEmptyChild } from './base/EmptyChildTable';
import TableX from "./base/TableX";
import { Menu, DensitySmall, DensityLarge, FileDownloadOutlined, FilterAlt, Add } from '@mui/icons-material';
import { DefaultQueryParams, QueryStore } from '../store';
import { ColumnDefinition, GridCustomizer, NoopCustomizer } from './Types';
import Filter from './plugins/filter/Filter';


//TODO - show errors on data fetching

interface GridXOptions {
  columns: ColumnDefinition[],
  children?: any,
  EmptyChild?: React.FC,
  store: QueryStore<any>,
  onRowClick?: Function,
  onNewClick?: Function,
  pageSize?: number[],
  quickSearch?: string,
  customizer?: GridCustomizer,
  defaultParams?: DefaultQueryParams
}

interface GridXFilter {
  quickSearch?: string
}

function GridX(props: GridXOptions) {
  const { columns, children, EmptyChild, store, onRowClick, quickSearch } = props;
  const [totalData, setTotalData] = useState(null);
  const [filter, setFilter] = useState<GridXFilter>({});
  const [sortOrder, setSortOrder] = useState({});
  const EmptyChildContainer = EmptyChild || defaultEmptyChild;
  const customizer: GridCustomizer = props.customizer || NoopCustomizer;

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDensity, setSelectedDensity] = useState('standard');
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);

  const pageSize = props.pageSize ? props.pageSize : 15;

  var pageSizeOptions = pageSize instanceof Array ? pageSize : [pageSize];
  var defaultPageSize = pageSize instanceof Array ? pageSize[0] : pageSize;

  const [page, setPage] = useState({
    pageNo: 0, pageSize: defaultPageSize
  });

  const nextPage = (event, newPage) => {
    setPage({ ...page, pageNo: newPage });
    setQuery({ ...page, pageSize: newPage });
  };

  const [query, setQuery] = useState({});
  const [data, setData] = useState(null);

  useEffect(() => {
    refreshData();
  }, [query, filter, sortOrder])

  const columnDefs = generateColumns(columns, customizer);

  const refreshData = () => {
    const params = { page, filter, sortOrder, total: true };

    if (store) {
      try {
        store.query(params).then((d) => {
          setData(d.result);
          setTotalData(d.total);
        }).catch((e) => {
          var r = e.response ? e.response : e;
          console.error("error while fetching", r);
          setNoData();
        });
      } catch (e) {
        console.error(e);
        setEmptyData();
      }
    } else {
      console.error("Store is not provided for the Grid");
      setEmptyData();
    }
  }

  const setEmptyData = () => {
    setData([]);
    setTotalData(0);
  }

  const setNoData = () => {
    setData(undefined);
    setTotalData(0);
  }

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
    const key = quickSearch;
    if (val)
      setFilter({ [key]: val });
    else {
      setFilter({});
    }
  };

  const setUserFilter = (filter) => {
    if (filter && Object.keys(filter).length > 0)
      setFilter(filter);
    else {
      setFilter({});
    }
  };

  const handleRowClick = (rowData) => {
    if (onRowClick) {
      onRowClick(rowData);
    }
  }
  const handleRowsPerPageChange = (event) => {
    const newPage = parseInt(event.target.value, 10);
    setPage({ ...page, pageSize: newPage });
  }

  const onSortColumn = (sortOrder) => {
    setSortOrder(sortOrder);
  }

  const onExportClick = () => {
    console.info('Export Clicked');
  }

  const width = 200;
  const visiblePagination = !!pageSize;
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
                value={filter.quickSearch}
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
            <Filter columns={columns} setFilter={setUserFilter}
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
            onHeaderStyle={handleHeaderDensityChange} onSortColumn={onSortColumn}
          />
        </div>
        <div className='grid-header'>
          <div className='grid-filter'>
            {visiblePagination && (
              <TablePagination
                component="div"
                count={totalData || 0}
                page={page.pageNo}
                onPageChange={nextPage}
                rowsPerPage={page.pageSize}
                rowsPerPageOptions={pageSizeOptions || []}
                onRowsPerPageChange={handleRowsPerPageChange}
              />
            )}
          </div>
        </div>
      </div >
    </div >
  )
}

export default GridX;