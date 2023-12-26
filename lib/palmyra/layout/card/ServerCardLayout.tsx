import { MutableRefObject, ReactNode, forwardRef, useImperativeHandle, useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { TablePagination, TextField, InputAdornment } from '@mui/material';
import './CardLayout.css';

import useServerQuery, { IServerQueryInput } from '../../form/ServerQueryManager';
import { CardLayout } from '..';
import { IPageQueryable } from '../../form/interfaceFields';

interface ServerCardLayoutInput extends IServerQueryInput {
    Child: React.FC,
    childProps?: any,
    listKeyProvider?: (data: any, index: number) => string | number,
    EmptyChild?: React.FC,
    children?: ReactNode,
}

const ServerCardLayout = forwardRef(function MuiSelect(props: ServerCardLayoutInput, ref: MutableRefObject<any>) {
    const { children, Child, childProps, pageSize } = props;
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
            setSortOptions(d) {
                setSortColumns(d);
            }
        };
    }, []);


    const nextPage = (event, newPage) => {
        gotoPage(newPage);
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

    return (
        <div>
            <div className="card-page-container" >
                {children}
                <div>
                    <div className='card-header'>
                        <div className='card-filter'>
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
                        </div>
                        <div className='card-pagination'>
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

                    <div>
                        <CardLayout Child={Child} childKeyProvider={listKeyProvider}
                            dataList={data} childProps={childProps} EmptyChild={props.EmptyChild}
                        ></CardLayout>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default ServerCardLayout;
export type { ServerCardLayoutInput }