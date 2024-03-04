import { ChartStore, QueryStore, DataStore, StoreFactory, LookupStore, TreeQueryStore } from "../../../main";
import { strings } from "../../form/interface";
import { IEndPoint } from "../../layout/Types";
interface PalmyraStoreFactoryArg {
    baseUrl?: string;
}
declare class PalmyraStoreFactory implements StoreFactory<any> {
    baseUrl: string;
    constructor(props: PalmyraStoreFactoryArg);
    getGridStore(options: Record<string, string>, endPoint: IEndPoint, idProperty?: strings): QueryStore<any>;
    getFormStore(options: Record<string, string>, endPoint: IEndPoint, idProperty?: strings): DataStore<any>;
    getChartStore(options: Record<string, string>): ChartStore<any>;
    getLookupStore(options: Record<string, string>, endPoint: IEndPoint, idProperty: strings): LookupStore<any>;
    getTreeStore(options: Record<string, string>, endPoint: IEndPoint): TreeQueryStore<any, any>;
}
export { PalmyraStoreFactory };
