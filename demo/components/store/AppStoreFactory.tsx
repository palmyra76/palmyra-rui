import { ChartStore, QueryRequest } from "palmyra-wire";
import { DummyChartStore } from "./DummyChartStore";


class AppStoreFactory implements ChartStore<any> {
    query(request: QueryRequest): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
    getChartStore(request: Record<string, string>): ChartStore<any> {
        return new DummyChartStore(request);
    }
}

export { AppStoreFactory };