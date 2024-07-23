import { DefaultQueryParams, AbstractQueryStore, IPagination, QueryRequest } from 'palmyra-wire';
import { IEndPointOptions } from '../layout/Types';
import { numbers } from '../utils/CommonTypes';

interface IServerQueryInput {
    store: AbstractQueryStore<any>;
    onDataChange?: (newData: any[], oldData?: any[]) => void;
    pageSize?: numbers;
    quickSearch?: string;
    endPointOptions?: IEndPointOptions;
    defaultParams?: DefaultQueryParams;
    fetchAll?: boolean;
    filterTopic?: string;
    initialFetch?: boolean;
}
declare const useServerQuery: (props: IServerQueryInput) => {
    setQueryFilter: (filter: any) => void;
    setQuickSearch: (val: any) => void;
    setSortColumns: (sortOrder: any) => void;
    setEndPointOptions: import('react').Dispatch<import('react').SetStateAction<IEndPointOptions>>;
    refreshData: () => void;
    gotoPage: (pageNo: number) => void;
    setPageSize: (pageSize: number) => void;
    getPageNo: () => number;
    getQueryLimit: () => IPagination;
    setQueryLimit: import('react').Dispatch<import('react').SetStateAction<IPagination>>;
    getQueryRequest: () => QueryRequest;
    filter: any;
    queryLimit: IPagination;
    data: any;
    totalRecords: any;
    pageSizeOptions: number[];
};
export default useServerQuery;
export type { IServerQueryInput };
