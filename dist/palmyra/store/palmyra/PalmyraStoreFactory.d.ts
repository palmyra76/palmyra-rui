import { ChartStore, QueryStore, DataStore, StoreFactory, LookupStore } from "../../../main";
import { strings } from "../../form/interface";
import { IEndPoint } from "../../layout/Types";
interface PalmyraStoreFactoryArg {
    baseUrl?: string;
}
declare class PalmyraStoreFactory implements StoreFactory<any> {
    baseUrl: string;
    constructor(props: PalmyraStoreFactoryArg);
    getGridStore(request: Record<string, string>, endPoint: IEndPoint, idProperty?: strings): QueryStore<any>;
    getFormStore(request: Record<string, string>, endPoint: IEndPoint, idProperty?: strings): DataStore<any>;
    getChartStore(request: Record<string, string>): ChartStore<any>;
    getLookupStore(request: Record<string, string>, endPoint: IEndPoint, idProperty: strings): LookupStore<any>;
}
export { PalmyraStoreFactory };
