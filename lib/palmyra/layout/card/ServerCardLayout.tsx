import { ReactNode, useEffect, useState } from 'react';
import { default as defaultEmptyChild } from './EmptyChildCard';
import { AiOutlineSearch } from 'react-icons/ai';
import { TablePagination, TextField, InputAdornment } from '@mui/material';
import './CardLayout.css';
import { QueryStore } from '../../store';

interface ServerCardLayoutInput {
    store: QueryStore<any>,
    Child: React.FC,
    childProps: any,
    pageSize: number[],
    quickSearchKey: string,
    listKeyProvider?: (data: any, index: number) => string | number,
    EmptyChild?: React.FC,
    children?: ReactNode,
}

const ServerCardLayout = (props: ServerCardLayoutInput) => {
    const { children, Child, EmptyChild, childProps, store, pageSize, quickSearchKey } = props;
    const listKeyProvider = props.listKeyProvider || ((data, index) => index);
    const EmptyChildContainer = EmptyChild || defaultEmptyChild;
    const [dataList, setDataList] = useState(null);
    const [data, setData] = useState(null);
    const [filter, setFilter] = useState({});

    var pageSizeOptions = pageSize instanceof Array ? pageSize : [pageSize];
    var defaultPageSize = pageSize instanceof Array ? pageSize[0] : pageSize;

    const [page, setPage] = useState({
        pageNo: 0, pageSize: defaultPageSize
    });

    const nextPage = (event, newPage) => {
        setPage({ ...page, pageNo: newPage });
    };

    useEffect(() => {
        store.query({}).then((data) => {
            setDataList(data.result);
            setData(data.total);
        });
    }, [page, filter]);

    const handleFilter = (event) => {
        const val = event.target.value;
        const key = quickSearchKey
        setFilter({ [key]: val });
    };

    const handleRowsPerPageChange = (event) => {
        const newPage = parseInt(event.target.value, 10);
        setPage({ ...page, pageSize: newPage });
    }

    const width = 200;
    const visiblePagination = !!pageSize;
    const visibleFilter = !!quickSearchKey;

    return (
        <div>
            {null != dataList ? dataList.length == 0 ? (
                <EmptyChildContainer />
            ) : (
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
                                        page={page.pageNo}
                                        onPageChange={nextPage}
                                        rowsPerPage={page.pageSize}
                                        rowsPerPageOptions={pageSizeOptions || []}
                                        onRowsPerPageChange={handleRowsPerPageChange}
                                    />
                                )}
                            </div>
                        </div>

                        <div className="card-wrapper" >
                            {dataList.map((data: any, index: number) => (
                                <Child key={listKeyProvider(data, index)} {...childProps} data={data} ></Child>
                            ))}
                        </div>
                    </div>
                </div>) : (<div></div>)}
        </div>
    )
}
export default ServerCardLayout;
export type { ServerCardLayoutInput }