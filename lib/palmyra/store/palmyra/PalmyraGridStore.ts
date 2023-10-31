import { QueryStore, GetRequest, QueryRequest, StringFormat, QueryResponse } from "../../../../lib/main";
import axios from 'axios';

class PalmyraGridStore implements QueryStore<any>{
    request: Record<string, string>
    target: string
    constructor(request: Record<string, string>) {
        this.request = request;
        this.target = request.target;
    }

    query(request: QueryRequest): Promise<QueryResponse<any>> {        
        var url: any = StringFormat(this.target, {});
        return axios.get(url)
            .then(response => { return response.data });;
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

export { PalmyraGridStore };