import { ChartStore, QueryStore, DataStore, StoreFactory, LookupStore } from "../../../main";
import { strings } from "../../form/interface";
import { IEndPoint } from "../../layout/Types";
import { PalmyraDataStore } from "./PalmyraDataStore";
import { PalmyraGridStore } from "./PalmyraGridStore";
import { PalmyraLookupStore } from "./PalmyraLookupStore";

interface PalmyraStoreFactoryArg {
    baseUrl?: string
}

class PalmyraStoreFactory implements StoreFactory<any>{
    baseUrl: string = '/palmyra';

    constructor(props: PalmyraStoreFactoryArg) {
        this.baseUrl = props.baseUrl || '/palmyra';
    }

    getGridStore(options: Record<string, string>, endPoint: IEndPoint, idProperty?: strings): QueryStore<any> {
        var storeOptions = { target: this.baseUrl, ...options }
        return new PalmyraGridStore(storeOptions, endPoint, idProperty);
    }
    getFormStore(options: Record<string, string>, endPoint: IEndPoint, idProperty?: strings): DataStore<any> {
        var storeOptions = { target: this.baseUrl, ...options }
        return new PalmyraDataStore(storeOptions, endPoint, idProperty);
    }
    getChartStore(options: Record<string, string>): ChartStore<any> {
        throw new Error("Method not implemented.");
    }
    getLookupStore(options: Record<string, string>, endPoint: IEndPoint, idProperty: strings): LookupStore<any> {
        var storeOptions = { target: this.baseUrl, ...options }
        return new PalmyraLookupStore(storeOptions, endPoint, idProperty);
    }
}

export { PalmyraStoreFactory };