import { ChartStore, QueryStore, DataStore, StoreFactory, LookupStore } from "../../../lib/main";
import { DummyChartStore } from "./DummyChartStore";
import { DummyGridStore } from "./DummyGridStore";
import { DummyLookupStore } from "./DummyLookupStore";


class AppStoreFactory implements StoreFactory<any>{
    getGridStore(request: Record<string, string>, idProperty?: string | string[]): QueryStore<any> {
        return new DummyGridStore();
    }
    getFormStore(request: Record<string, string>, idProperty?: string | string[]): DataStore<any> {
        throw new Error("Method not implemented.");
    }
    getChartStore(request: Record<string, string>): ChartStore<any> {
        return new DummyChartStore(request);
    }
    getLookupStore(request: Record<string, string>, idProperty: string | string[]): LookupStore<any> {
        return new DummyLookupStore();
    }
}

export { AppStoreFactory };