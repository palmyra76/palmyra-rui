import { QueryStore,  Store,  StoreFactory } from "../../../lib/main";
import { DummyGridStore } from "./DummyGridStore";

class AppStoreFactory implements StoreFactory<any>{
    getGridStore(request: Record<string, string>): QueryStore<any> {
        return new DummyGridStore();
    }
    getFormStore(request: Record<string, string>): Store<any> {
        throw new Error("Method not implemented.");
    }
    getChartStore(request: Record<string, string>): Store<any> {
        throw new Error("Method not implemented.");
    }   
}

export {AppStoreFactory};