import { QueryStore, GetRequest, QueryRequest, StringFormat, QueryResponse, QueryParams } from "../../../../lib/main";
import axios from 'axios';

class PalmyraGridStore implements QueryStore<any>{
    request: Record<string, string>
    target: string

    constructor(request: Record<string, string>) {
        this.request = request;
        this.target = request.target;
    }

    query(queryParam: QueryRequest): Promise<QueryResponse<any>> {
        var url: any = StringFormat(this.target, {});
        const urlSortParams = (convertQueryParams(queryParam));
        const params = { params: urlSortParams };
        return axios.get(url, params)
            .then(response => { return response.data });;
    }

    queryLayout(request: QueryRequest): Promise<any> {
        var url: any = StringFormat(this.target, {});        
        return axios.get(url, {
            headers: {
                action: 'schema'
            }
        })
            .then((response) => response.data);
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

function convertQueryParams(queryParams: QueryParams): any {
    const orderBy = Object.keys(queryParams?.sortOrder || {}).map(field => {
        const order = queryParams.sortOrder[field] === "asc" ? "+" : "-";
        return order + field;
    });

    const _f = queryParams.filter || {};

    return { ..._f, _orderBy: orderBy.length ? orderBy.join(',') : [] };
}