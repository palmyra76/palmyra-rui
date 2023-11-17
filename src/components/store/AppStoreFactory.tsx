import { ChartStore, QueryStore, DataStore, StoreFactory, LookupStore, IEndPoint } from "../../../lib/main";
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
}

export { AppStoreFactory };