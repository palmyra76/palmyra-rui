import { QueryRequest, QueryResponse, LookupStore, APIErrorHandlerFactory } from "../../../main";
import { IEndPoint } from "../../layout/Types";
import { strings } from "../../form/interface";
import { PalmyraAbstractStore } from "./AbstractStore";
declare class PalmyraLookupStore extends PalmyraAbstractStore implements LookupStore<any> {
    idProperty: strings;
    constructor(options: Record<string, any>, endPoint: IEndPoint, factory: APIErrorHandlerFactory, idProperty?: strings);
    getEndPoint(): IEndPoint;
    queryUrl(): string;
    getUrl(): string;
    query(request: QueryRequest): Promise<QueryResponse<any>>;
}
export { PalmyraLookupStore };
