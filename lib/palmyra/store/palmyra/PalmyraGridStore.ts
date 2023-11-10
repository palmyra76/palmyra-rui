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
        var url: any = StringFormat(this.target, queryParam.options);
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

    get(request: GetRequest, idProperty?: string): Promise<any> {
        var url: any = StringFormat(this.target, (request.options || {}));
        return axios.get(url)
            .then(response => { return response.data });
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

    const _total:boolean = queryParams.total? true: false;

    const _f = queryParams.filter || {};

    return { ..._f, _total, _orderBy: orderBy.length ? orderBy.join(',') : [] };
}