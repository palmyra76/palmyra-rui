import { DataStore, PostRequest, PutRequest, RemoveRequest } from "../../../main";
import { strings } from "../../form/interface";
import { IEndPoint } from "../../layout/Types";
import { PalmyraGridStore } from "./PalmyraGridStore";
declare class PalmyraDataStore<T> extends PalmyraGridStore implements DataStore<T> {
    constructor(request: Record<string, string>, endPoint: IEndPoint, idProperty?: strings);
    post(data: any, request?: PostRequest): Promise<T>;
    put(data: any, request?: PutRequest): Promise<T>;
    remove(key: any, request?: RemoveRequest): Promise<T>;
    postUrl(): string;
    putUrl(): string;
    deleteUrl(): string;
}
export { PalmyraDataStore };
