import { DataStore, QueryOptions } from "../../../main";
import { PalmyraGridStore } from "./PalmyraGridStore";
declare class PalmyraDataStore<T> extends PalmyraGridStore implements DataStore<T> {
    constructor(request: Record<string, string>);
    post(data: any, options?: QueryOptions): Promise<T>;
    put(data: any, options?: QueryOptions, idProperty?: string): Promise<T>;
    remove(key: any, idProperty?: string): Promise<T>;
}
export { PalmyraDataStore };
