/// <reference types="react" />
import { DefaultQueryParams, AbstractQueryStore } from '../store/AsyncStore';
import { numbers } from './interface';
import { Pagination } from '../../main';
import { IEndPointOptions } from '../layout/Types';
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
    setEndPointOptions: import("react").Dispatch<import("react").SetStateAction<IEndPointOptions>>;
    refreshData: () => void;
    gotoPage: (pageNo: number) => void;
    setPageSize: (pageSize: number) => void;
    getPageNo: () => number;
    getQueryLimit: () => Pagination;
    setQueryLimit: import("react").Dispatch<import("react").SetStateAction<Pagination>>;
    filter: any;
    queryLimit: Pagination;
    data: any;
    totalRecords: any;
    pageSizeOptions: number[];
};
export default useServerQuery;
export type { IServerQueryInput };
