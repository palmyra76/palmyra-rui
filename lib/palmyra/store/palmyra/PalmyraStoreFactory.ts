import { ChartStore, DataStore, StoreFactory, LookupStore, TreeQueryStore, GridStore } from "../../../main";
import { strings } from "../../form/interface";
import { IEndPoint } from "../../layout/Types";
import { PalmyraChartStore } from "./PalmyraChartStore";
import { PalmyraDataStore } from "./PalmyraDataStore";
import { PalmyraGridStore } from "./PalmyraGridStore";
import { PalmyraLookupStore } from "./PalmyraLookupStore";
import { PalmyraTreeStore } from "./PalmyraTreeStore";

interface PalmyraStoreFactoryArg {
    baseUrl?: string
}

class PalmyraStoreFactory implements StoreFactory<any>{
    baseUrl: string = '/palmyra';

    constructor(props: PalmyraStoreFactoryArg) {
        this.baseUrl = props.baseUrl || '/palmyra';
    }

    getGridStore(options: Record<string, string>, endPoint: IEndPoint, idProperty?: strings): GridStore<any> {
        var storeOptions = { target: this.baseUrl, ...options }
        return new PalmyraGridStore(storeOptions, endPoint, idProperty);
    }
    getFormStore(options: Record<string, string>, endPoint: IEndPoint, idProperty?: strings): DataStore<any> {
        var storeOptions = { target: this.baseUrl, ...options }
        return new PalmyraDataStore(storeOptions, endPoint, idProperty);
    }
    getChartStore(options: Record<string, string>, endPoint: IEndPoint, idProperty?: strings): ChartStore<any> {
        var storeOptions = { target: this.baseUrl, ...options }
        return new PalmyraChartStore(storeOptions, endPoint, idProperty);
    }
    getLookupStore(options: Record<string, string>, endPoint: IEndPoint, idProperty: strings): LookupStore<any> {
        var storeOptions = { target: this.baseUrl, ...options }
        return new PalmyraLookupStore(storeOptions, endPoint, idProperty);
    }
    getTreeStore(options: Record<string, string>, endPoint: IEndPoint):TreeQueryStore<any, any>{
        var storeOptions = { target: this.baseUrl, ...options }
        return new PalmyraTreeStore(storeOptions, endPoint);
    }
}

export { PalmyraStoreFactory };