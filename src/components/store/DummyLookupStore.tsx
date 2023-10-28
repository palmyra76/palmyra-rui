import { LookupStore, QueryRequest, QueryResponse } from "../../../lib/main";

class DummyLookupStore implements LookupStore<any>{
    query(request: QueryRequest): Promise<QueryResponse<any>> {
        return fetch( '/simple/gridData.json')
            .then((response) => response.json());            
    }
}

export {DummyLookupStore};