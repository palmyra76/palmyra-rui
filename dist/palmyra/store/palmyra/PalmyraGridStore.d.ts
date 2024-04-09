import { GetRequest, QueryRequest, QueryResponse, GridStore, ExportRequest, APIErrorHandlerFactory } from "../../../../lib/main";
import { IEndPoint } from "../../layout/Types";
import { strings } from "../../form/interface";
import { PalmyraAbstractStore } from "./AbstractStore";
declare class PalmyraGridStore extends PalmyraAbstractStore implements GridStore<any> {
    idProperty: strings;
    constructor(options: Record<string, any>, endPoint: IEndPoint, factory: APIErrorHandlerFactory, idProperty?: strings);
    getEndPoint(): IEndPoint;
    queryUrl(): string;
    getUrl(): string;
    query(request: QueryRequest): Promise<QueryResponse<any>>;
    export(request: ExportRequest): void;
    queryLayout(request: QueryRequest): Promise<any>;
    get(request: GetRequest, idProperty?: string): Promise<any>;
    getIdentity(o: any): void;
    getIdProperty(): string;
}
export { PalmyraGridStore };
