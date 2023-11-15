import { DataStore, QueryOptions } from "../../../main";
import { IEndPoint } from "../../layout/Types";
import { PalmyraGridStore } from "./PalmyraGridStore";

class PalmyraDataStore<T> extends PalmyraGridStore implements DataStore<T>{
    constructor(request: Record<string, string>, endPoint:IEndPoint, idProperty?:string) {
        super(request, endPoint, idProperty);
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
