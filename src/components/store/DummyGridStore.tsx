import { ExportRequest, GetRequest, GridStore, QueryRequest, QueryResponse } from "../../../lib/main";

class DummyGridStore implements GridStore<any>{
    query(request: QueryRequest): Promise<QueryResponse<any>> {
        console.log(request);
        return fetch( '/simple/gridData.json')
            .then((response) => response.json());            
    }

    export(request: ExportRequest): void {
        console.log(request);        
    }

    queryLayout(request: QueryRequest): Promise<QueryResponse<any>> {
        throw new Error("Method not implemented.");
    }
    get(request: GetRequest): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getIdentity(o: any) {
        throw new Error("Method not implemented.");
    }
    getIdProperty(): string {
        return "id";
    }
}

export {DummyGridStore};