import { ChartStore, QueryStore, DataStore, StoreFactory, LookupStore } from "../../../main";
import { IEndPoint } from "../../layout/Types";
import { PalmyraDataStore } from "./PalmyraDataStore";
import { PalmyraGridStore } from "./PalmyraGridStore";

interface PalmyraStoreFactoryArg {
    baseUrl?: string
}

class PalmyraStoreFactory implements StoreFactory<any>{
    baseUrl: string = '/palmyra';

    constructor(props: PalmyraStoreFactoryArg) {
        this.baseUrl = props.baseUrl || '/palmyra';
    }

    getGridStore(request: Record<string, string>, endPoint: IEndPoint, idProperty?: string | string[]): QueryStore<any> {
        var options = {target:this.baseUrl, ...request}
        return new PalmyraGridStore(options, endPoint);
    }
    getFormStore(request: Record<string, string>, endPoint: IEndPoint, idProperty?: string | string[]): DataStore<any> {
        var options = {target:this.baseUrl, ...request}
        return new PalmyraDataStore(options, endPoint);
    }
    getChartStore(request: Record<string, string>): ChartStore<any> {
        throw new Error("Method not implemented.");
    }
    getLookupStore(request: Record<string, string>, endPoint: IEndPoint, idProperty: string | string[]): LookupStore<any> {
        throw new Error("Method not implemented.");
    }
}

export { PalmyraStoreFactory };