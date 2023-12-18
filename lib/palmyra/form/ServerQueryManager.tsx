import { useEffect, useRef, useState } from 'react';
import { DefaultQueryParams, AbstractQueryStore } from '../store/AsyncStore';
import { numbers } from './interface';
import { QueryRequest, useKeyValue } from '../../main';
import { IEndPointVars } from '../layout/Types';

interface IServerQueryInput {
  store: AbstractQueryStore<any>,
  onDataChange?: (newData: any[], oldData?: any[]) => void,
  pageSize?: numbers,
  quickSearch?: string,
  endPointVars?: IEndPointVars,
  defaultParams?: DefaultQueryParams,
  fetchAll?: boolean,
  filterTopic?: string,
  initialFetch?: boolean
}

const useServerQuery = (props: IServerQueryInput) => {
  const { store, quickSearch, endPointVars } = props;
  const fetchAll = props.fetchAll != false;
  const [totalRecords, setTotalRecords] = useState(null);
  const [filter, setFilter] = props.filterTopic ? useKeyValue(props.filterTopic, {}) : useState<any>({});
  const [sortOrder, setSortOrder] = useState({});

  const firstRun = useRef<Boolean>(props.initialFetch == false);

  const pageSize = props.pageSize ? props.pageSize : 15;

  var pageSizeOptions = pageSize instanceof Array ? pageSize : [pageSize];
  var defaultPageSize = pageSize instanceof Array ? pageSize[0] : pageSize;

  const [queryLimit, setQueryLimit] = useState<QueryRequest>({ limit: defaultPageSize, offset: 0 });
  const [data, setData] = useState(null);

  const getPageNo = () => {
    return Math.round(queryLimit.offset / queryLimit.limit);
  }

  const getLimit = () => {
    return queryLimit.limit;
  }

  const gotoPage = (pageNo: number) => {
    setQueryLimit({ ...queryLimit, offset: (pageNo * defaultPageSize) });
  };

  const setPageSize = (pageSize: number) => {
    const limit = (pageSize > 10 || pageSize == -1) ? pageSize : 15;
    setQueryLimit({ ...queryLimit, limit });
  }

  const isEmptyFilter = () => {
    if (filter) {
      return 0 == Object.keys(filter).length;
    }
    return false;
  }

  const setResult = (result: any) => {
    setData((old: any) => {
      setTimeout(() => {
        if (props.onDataChange) {
          props.onDataChange(data, old);
        }
      }, 300)
      return result;
    })
  }

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }

    if (fetchAll || !isEmptyFilter())
      refreshData();

  }, [queryLimit, filter, sortOrder])

  const refreshData = () => {
    const params: QueryRequest = { filter, sortOrder, total: true, endPointVars, ...queryLimit };
    if (store) {
      try {
        store.query(params).then((d) => {
          setResult(d.result);
          setTotalRecords(d.total);
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
    setResult([]);
    setTotalRecords(0);
  }

  const setNoData = () => {
    setResult(undefined);
    setTotalRecords(null);
  }

  const setQuickSearch = (val: any) => {
    const key = quickSearch;
    if (val)
      setFilter((f: any) => {
        f[key] = val;
        return { ...f }
      });
    else {
      setFilter((f: any) => {
        delete f[key];
        return { ...f };
      });
    }
  };

  const setQueryFilter = (filter) => {
    if (typeof filter == 'function' || filter && Object.keys(filter).length > 0)
      setFilter(filter);
    else {
      setFilter({});
    }
  };

  const setSortColumns = (sortOrder) => {
    setSortOrder(sortOrder);
  }

  return {
    setQueryFilter, setQuickSearch, setSortColumns,
    refreshData, gotoPage, setPageSize, getPageNo, getLimit,
    filter, queryLimit, data, totalRecords, pageSizeOptions
  }

};

export default useServerQuery;
export type { IServerQueryInput };