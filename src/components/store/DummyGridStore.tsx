import { GetRequest, QueryRequest, QueryResponse, QueryStore } from "../../../lib/main";

class DummyGridStore implements QueryStore<any>{
    query(request: QueryRequest): Promise<QueryResponse<any>> {
        return fetch( '/simple/gridData.json')
            .then((response) => response.json());            
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