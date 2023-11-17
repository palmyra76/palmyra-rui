import { DataStore, QueryOptions } from "../../../main";
import { strings } from "../../form/interface";
import { IEndPoint } from "../../layout/Types";
import { PalmyraGridStore } from "./PalmyraGridStore";
declare class PalmyraDataStore<T> extends PalmyraGridStore implements DataStore<T> {
    constructor(request: Record<string, string>, endPoint: IEndPoint, idProperty?: strings);
    post(data: any, options?: QueryOptions): Promise<T>;
    put(data: any, options?: QueryOptions, idProperty?: string): Promise<T>;
    remove(key: any, idProperty?: string): Promise<T>;
    postUrl(): string;
    putUrl(): string;
    deleteUrl(): string;
}
export { PalmyraDataStore };
