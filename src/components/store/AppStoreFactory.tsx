import { ChartStore, QueryStore, DataStore, StoreFactory, LookupStore, IEndPoint, TreeQueryStore } from "../../../lib/main";
import { strings } from "../../../lib/palmyra/form/interface";
import { DummyChartStore } from "./DummyChartStore";
import { DummyGridStore } from "./DummyGridStore";
import { DummyLookupStore } from "./DummyLookupStore";


class AppStoreFactory implements StoreFactory<any>{
    getGridStore(request: Record<string, string>, endPoint: IEndPoint, idProperty?: strings): QueryStore<any> {
        return new DummyGridStore();
    }
    getFormStore(request: Record<string, string>, endPoint: IEndPoint, idProperty?: strings): DataStore<any> {
        throw new Error("Method not implemented.");
    }
    getChartStore(request: Record<string, string>): ChartStore<any> {
        return new DummyChartStore(request);
    }
    getLookupStore(request: Record<string, string>,endPoint: IEndPoint,  idProperty: strings): LookupStore<any> {
        return new DummyLookupStore();
    }
    getTreeStore(options: Record<string, string>, endPoint: IEndPoint):TreeQueryStore<any, any>{
        throw new Error("Method not implemented.");
    }
}

export { AppStoreFactory };