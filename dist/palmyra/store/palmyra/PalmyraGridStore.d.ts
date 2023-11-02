import { QueryStore, GetRequest, QueryRequest, QueryResponse } from "../../../../lib/main";
declare class PalmyraGridStore implements QueryStore<any> {
    request: Record<string, string>;
    target: string;
    constructor(request: Record<string, string>);
    query(queryParam: QueryRequest): Promise<QueryResponse<any>>;
    get(request: GetRequest): Promise<any>;
    getIdentity(o: any): void;
    getIdProperty(): string;
}
export { PalmyraGridStore };
