import { GetRequest, QueryOptions, QueryRequest, QueryResponse } from "./Types";

interface QueryStore<T> {
    query(request: QueryRequest): Promise<QueryResponse<T>>;
    get(request: GetRequest): Promise<T>;
    getIdentity(o: T): any;
}

interface TreeQueryStore<T> extends QueryStore<T> {
    getChildren(data: T): Promise<QueryResponse<T>>;
    getRoot(): Promise<QueryResponse<T>>;
}

interface Store<T> extends QueryStore<T> {
    post(data: T, options?: QueryOptions): Promise<T>;
    put(data: T, options?: QueryOptions): Promise<T>;
    remote(key: T | any): Promise<T>;
}

export type { Store, QueryStore, TreeQueryStore };