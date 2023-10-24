
import { ChartStore, GetRequest, QueryRequest, StringFormat } from "../../../lib/main";

class DummyChartStore implements ChartStore<any>{
    request: Record<string, string>

    constructor(request: Record<string, string>) {
        this.request = request;
    }

    query(request: QueryRequest): Promise<any[]> {
        var format: Record<string, string> = this.request;
        var url: any = StringFormat(format.urlFormat, {});
        return fetch(url)
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