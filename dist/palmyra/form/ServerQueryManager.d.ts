import { DefaultQueryParams, QueryStore } from '../store';
import { numbers } from './interface';
import { QueryRequest } from '../../main';
import { IEndPointVars } from '../layout/Types';
interface IServerQueryInput {
    store: QueryStore<any>;
    pageSize?: numbers;
    quickSearch?: string;
    endPointVars?: IEndPointVars;
    defaultParams?: DefaultQueryParams;
    fetchAll?: boolean;
}
declare const useServerQuery: (props: IServerQueryInput) => {
    setQueryFilter: (filter: any) => void;
    setQuickSearch: (val: any) => void;
    setSortColumns: (sortOrder: any) => void;
    refreshData: () => void;
    gotoPage: (pageNo: number) => void;
    setPageSize: (pageSize: number) => void;
    getPageNo: () => number;
    getLimit: () => number;
    filter: any;
    queryLimit: QueryRequest;
    data: any;
    totalRecords: any;
    pageSizeOptions: number[];
};
export default useServerQuery;
