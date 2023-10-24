import { ChartStore, QueryStore,  DataStore,  StoreFactory } from "../../../lib/main";
import { DummyChartStore } from "./DummyChartStore";
import { DummyGridStore } from "./DummyGridStore";


class AppStoreFactory implements StoreFactory<any>{
    getGridStore(request: Record<string, string>): QueryStore<any> {
        return new DummyGridStore();
    }
    getFormStore(request: Record<string, string>): DataStore<any> {
        throw new Error("Method not implemented.");
    }
    getChartStore(request: Record<string, string>): ChartStore<any> {
        return new DummyChartStore(request);
    }   
}

export {AppStoreFactory};