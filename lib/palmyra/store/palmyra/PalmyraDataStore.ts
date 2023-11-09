import { DataStore, QueryOptions } from "../../../main";
import { PalmyraGridStore } from "./PalmyraGridStore";

class PalmyraDataStore<T> extends PalmyraGridStore implements DataStore<T>{
    constructor(request: Record<string, string>) {
        super(request);
    }

    post(data: any, options?: QueryOptions): Promise<T> {
        throw new Error("Method not implemented.");
    }
    put(data: any, options?: QueryOptions, idProperty?: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
    remove(key: any, idProperty?: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
}

export { PalmyraDataStore };
