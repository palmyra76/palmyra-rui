import { GetRequest, QueryOptions, QueryRequest, QueryResponseHandler, ResponseHandler } from "./Types";

interface QueryStore<T> {
    query(request: QueryRequest, handler: QueryResponseHandler<T>): void;
    get(request: GetRequest, handler: ResponseHandler<T>): void;
}

interface TreeQueryStore<T> extends QueryStore<T> {
    getChildren(data: T, handler: QueryResponseHandler<T>): void;
    getRoot(handler: QueryResponseHandler<T>): void;
}

interface Store<T> extends QueryStore<T> {
    post(data: T, handler: ResponseHandler<T>, options?: QueryOptions): T;
    put(data: T, handler: ResponseHandler<T>, options?: QueryOptions): T;
    delete(key: T | any): T;
}

export type { Store, QueryStore, TreeQueryStore };