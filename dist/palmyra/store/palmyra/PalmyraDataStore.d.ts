import { GetRequest, QueryRequest, QueryResponse, DataStore, QueryOptions } from "../../../main";
declare class PalmyraDataStore<T> implements DataStore<T> {
    request: Record<string, string>;
    target: string;
    constructor(request: Record<string, string>);
    query(queryParam: QueryRequest): Promise<QueryResponse<T>>;
    queryLayout(request: QueryRequest): Promise<T>;
    get(request: GetRequest, idProperty?: string): Promise<T>;
    post(data: any, options?: QueryOptions): Promise<T>;
    put(data: any, options?: QueryOptions, idProperty?: string): Promise<T>;
    remove(key: any, idProperty?: string): Promise<T>;
    getIdentity(o: any): void;
    getIdProperty(): string;
}
export { PalmyraDataStore };
