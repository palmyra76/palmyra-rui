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

    getGridStore(request: Record<string, string>, endPoint: IEndPoint, idProperty?: strings): QueryStore<any> {
        var options = {target:this.baseUrl, ...request}
        return new PalmyraGridStore(options, endPoint, idProperty);
    }
    getFormStore(request: Record<string, string>, endPoint: IEndPoint, idProperty?: strings): DataStore<any> {
        var options = {target:this.baseUrl, ...request}
        return new PalmyraDataStore(options, endPoint, idProperty);
    }
    getChartStore(request: Record<string, string>): ChartStore<any> {
        throw new Error("Method not implemented.");
    }
    getLookupStore(request: Record<string, string>, endPoint: IEndPoint, idProperty: strings): LookupStore<any> {
        var options = {target:this.baseUrl, ...request}
        return new PalmyraLookupStore(options, endPoint, idProperty);
    }
}

export { PalmyraStoreFactory };