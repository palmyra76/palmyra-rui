import { ChartStore, QueryStore, DataStore, StoreFactory, LookupStore } from "../../../main";
import { PalmyraGridStore } from "./PalmyraGridStore";

interface PalmyraStoreFactoryArg {
    baseUrl?: string
}

class PalmyraStoreFactory implements StoreFactory<any>{
    baseUrl: string = '/palmyra';

    constructor(props: PalmyraStoreFactoryArg) {
        this.baseUrl = props.baseUrl || '/palmyra';
    }

    getGridStore(request: Record<string, string>, idProperty?: string | string[]): QueryStore<any> {
        const target = this.baseUrl + request.endPoint;
        if (!request.endPoint) {
            throw new Error("Endpoint must be provided under TableLayout definition");
        }
        return new PalmyraGridStore({ target });
    }
    getFormStore(request: Record<string, string>, idProperty?: string | string[]): DataStore<any> {
        throw new Error("Method not implemented.");
    }
    getChartStore(request: Record<string, string>): ChartStore<any> {
        throw new Error("Method not implemented.");
    }
    getLookupStore(request: Record<string, string>, idProperty: string | string[]): LookupStore<any> {
        throw new Error("Method not implemented.");
    }
}

export { PalmyraStoreFactory };