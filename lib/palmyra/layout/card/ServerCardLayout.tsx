import { MutableRefObject, ReactNode, forwardRef, useImperativeHandle, useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { TablePagination, TextField, InputAdornment } from '@mui/material';
import './CardLayout.css';
import { DefaultQueryParams, QueryStore } from '../../store';
import useServerQuery from '../../form/ServerQueryManager';
import { CardLayout } from '..';
import { IGrid } from '../../form/interfaceFields';

interface ServerCardLayoutInput {
    quickSearch?: string,
    fetchAll?: boolean,
    defaultParams?: DefaultQueryParams,
    store: QueryStore<any>,
    Child: React.FC,
    childProps?: any,
    pageSize?: number[],
    listKeyProvider?: (data: any, index: number) => string | number,
    EmptyChild?: React.FC,
    children?: ReactNode,
}

const ServerCardLayout = forwardRef(function MuiSelect(props: ServerCardLayoutInput, ref: MutableRefObject<any>) {
    const { children, Child, childProps, pageSize } = props;
    const currentRef: MutableRefObject<IGrid> = ref ? ref : useRef(null);
    const { setQueryFilter,
        setQuickSearch, gotoPage, setPageSize, getPageNo,
        data, pageSizeOptions, queryLimit } = useServerQuery(props);

    const listKeyProvider = props.listKeyProvider || ((data, index) => index);

    useImperativeHandle(currentRef, () => {
        return {
            setFilter(d) {
                setQueryFilter(d);
            },
            gotoPage(p: number) {
                gotoPage(p)
            },
            nextPage() {

            },
            prevPage() {

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
                <div className='card-container'>
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
                                    count={data}
                                    page={getPageNo()}
                                    onPageChange={nextPage}
                                    rowsPerPage={queryLimit.limit}
                                    rowsPerPageOptions={pageSizeOptions || []}
                                    onRowsPerPageChange={handleRowsPerPageChange}
                                />
                            )}
                        </div>
                    </div>

                    <div className="card-wrapper" >
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