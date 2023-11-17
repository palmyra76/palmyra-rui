import { QueryRequest, QueryResponse, LookupStore } from "../../../main";
import { IEndPoint } from "../../layout/Types";
import { strings } from "../../form/interface";
declare class PalmyraLookupStore implements LookupStore<any> {
    request: Record<string, string>;
    target: string;
    endPoint: IEndPoint;
    idProperty: strings;
    constructor(request: Record<string, string>, endPoint: IEndPoint, idProperty?: strings);
    getEndPoint(): IEndPoint;
    queryUrl(): string;
    getUrl(): string;
    query(queryParam: QueryRequest): Promise<QueryResponse<any>>;
}
export { PalmyraLookupStore };
