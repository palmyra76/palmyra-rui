import { GetRequest, QueryOptions, QueryRequest, QueryResponse } from "./Types";

interface LookupStore<T> {
    query(request: QueryRequest): Promise<QueryResponse<T>>;
}

interface QueryStore<T> {
    query(request: QueryRequest): Promise<QueryResponse<T>>;
    get(request: GetRequest): Promise<T>;
    getIdentity(o: T): any;
    getIdProperty(): string | string[];
}

interface TreeQueryStore<T> extends QueryStore<T> {
    getChildren(data: T): Promise<QueryResponse<T>>;
    getRoot(): Promise<T>;
}

interface DataStore<T> extends QueryStore<T> {
    post(data: T, options?: QueryOptions): Promise<T>;
    put(data: T, options?: QueryOptions): Promise<T>;
    remove(key: T | any): Promise<T>;
}

interface ChartStore<T> {
    query(request: QueryRequest): Promise<T[]>;
}

interface AuthDecorator {
    decorate(request: any): void;
}


export type { DataStore, QueryStore, TreeQueryStore, ChartStore, AuthDecorator, LookupStore };