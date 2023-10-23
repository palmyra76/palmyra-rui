import { ChartStore, GetRequest, QueryRequest } from "../../../lib/main";

class DummyChartStore implements ChartStore<any>{
    query(request: QueryRequest): Promise<any[]> {
        return fetch('/simple/chartData.json')
            .then((response) => response.json());
    }
    get(request: GetRequest): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getIdentity(o: any) {
        throw new Error("Method not implemented.");
    }
}

export { DummyChartStore };