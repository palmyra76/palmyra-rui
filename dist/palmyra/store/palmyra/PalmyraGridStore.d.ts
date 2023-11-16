import { QueryStore, GetRequest, QueryRequest, QueryResponse } from "../../../../lib/main";
import { AxiosInstance } from 'axios';
import { IEndPoint } from "../../layout/Types";
declare class PalmyraGridStore implements QueryStore<any> {
    request: Record<string, string>;
    target: string;
    endPoint: IEndPoint;
    idProperty: string;
    constructor(request: Record<string, string>, endPoint: IEndPoint, idProperty?: string);
    getClient(): AxiosInstance;
    getEndPoint(): IEndPoint;
    queryUrl(): string;
    getUrl(): string;
    query(queryParam: QueryRequest): Promise<QueryResponse<any>>;
    queryLayout(request: QueryRequest): Promise<any>;
    get(request: GetRequest, idProperty?: string): Promise<any>;
    getIdentity(o: any): void;
    getIdProperty(): string;
}
export { PalmyraGridStore };
