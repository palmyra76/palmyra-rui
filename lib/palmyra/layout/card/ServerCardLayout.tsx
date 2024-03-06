import { MutableRefObject, forwardRef, useImperativeHandle, useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { TextField, InputAdornment, MenuItem, Pagination, FormControl, Select, Stack } from '@mui/material';
import './CardLayout.css';
import useServerQuery, { IServerQueryInput } from '../../form/ServerQueryManager';
import { CardLayout } from '..';
import { IPageQueryable } from '../../form/interfaceFields';
import { renderTitle } from '../../mui/widget/InfoTooltip';
import { ITitle } from '../../form';

interface ServerCardLayoutInput extends IServerQueryInput {
    Child: React.FC,
    childProps?: any,
    listKeyProvider?: (data: any, index: number) => string | number,
    EmptyChild?: React.FC,
    title?: ITitle,
    customButton?: React.ReactNode[],
    preProcess?: (data: any) => any
}

const ServerCardLayout = forwardRef(function MuiSelect(props: ServerCardLayoutInput, ref: MutableRefObject<any>) {
    const { title, Child, childProps, pageSize, customButton } = props;
    const currentRef: MutableRefObject<IPageQueryable> = ref ? ref : useRef(null);

    const { setQueryFilter, refreshData, setSortColumns, setEndPointOptions,
        setQuickSearch, gotoPage, setPageSize, getPageNo, setQueryLimit, getQueryLimit,
        data, totalRecords, pageSizeOptions, queryLimit } = useServerQuery(props);


    const listKeyProvider = props.listKeyProvider || ((data, index) => index);

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
            setQueryLimit: (d) => {
                setQueryLimit(d);
            },
            getQueryLimit: () => {
                return getQueryLimit();
            },
            getCurrentData: () => {
                return data;
            },
            setSortOptions(d) {
                setSortColumns(d);
            }
        };
    }, [setQueryFilter]);


    const nextPage = (event, newPage) => {
        gotoPage(newPage - 1);
    };

    const handleFilter = (event) => {
        const val = event.target.value;
        setQuickSearch(val);
    };

    const handleRowsPerPageChange = (event) => {
        const limit = parseInt(event.target.value, 10);
        setPageSize(limit);
    }

    const width = 200;
    const visiblePagination = !!pageSize;
    const visibleFilter = !!props.quickSearch;

    const totalPages = Math.ceil(totalRecords / queryLimit.limit);

    return (
        <div>
            <div className="card-page-container" >
                <div>
                    <div className='card-header'>
                        <div className='card-left-content'>
                            {renderTitle(title)}
                        </div>
                        <div className='card-right-content'>
                            {visibleFilter && (
                                <TextField
                                    sx={{ width: width }}
                                    type="text"
                                    onChange={handleFilter}
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
                            {customButton && customButton.map((button: any, index: any) => (
                                <div key={index} className='card-custom-button'>
                                    {button}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <CardLayout Child={Child} childKeyProvider={listKeyProvider} preProcess={props.preProcess}
                            dataList={data} childProps={childProps} EmptyChild={props.EmptyChild}
                        ></CardLayout>
                    </div>
                    <div className='card-pagination'>
                        {(visiblePagination && totalPages !== 0) && (
                            // <TablePagination
                            //     component="div"
                            //     count={totalRecords || 0}
                            //     page={getPageNo()}
                            //     onPageChange={nextPage}
                            //     rowsPerPage={queryLimit.limit}
                            //     rowsPerPageOptions={pageSizeOptions || []}
                            //     onRowsPerPageChange={handleRowsPerPageChange}
                            // />
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div>
                                    {
                                        pageSizeOptions && pageSizeOptions.length > 1 ? (
                                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                    <div><span>Showing</span></div>
                                                    <div>
                                                        <Select
                                                            labelId="rows-per-page-select-label"
                                                            id="rows-per-page-select"
                                                            // value={pag}
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
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <Pagination count={totalPages} shape="rounded"
                                            onChange={nextPage} page={getPageNo() + 1}
                                        />
                                    </Stack>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
});

export default ServerCardLayout;
export type { ServerCardLayoutInput }