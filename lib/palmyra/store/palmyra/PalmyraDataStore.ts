import { GetRequest, QueryRequest, StringFormat, QueryResponse, QueryParams, DataStore, QueryOptions } from "../../../main";
import axios from 'axios';

class PalmyraDataStore<T> implements DataStore<T>{
    request: Record<string, string>
    target: string

    constructor(request: Record<string, string>) {
        this.request = request;
        this.target = request.target;
    }

    query(queryParam: QueryRequest): Promise<QueryResponse<T>> {
        var url: any = StringFormat(this.target, {});
        const urlSortParams = (convertQueryParams(queryParam));
        const params = { params: urlSortParams };
        return axios.get(url, params)
            .then(response => { return response.data });
    }

    queryLayout(request: QueryRequest): Promise<T> {

        var url: any = StringFormat(this.target, (request.options || {}));
        return axios.get(url, {
            headers: {
                action: 'schema'
            }
        })
            .then((response) => response.data);
    }

    get(request: GetRequest, idProperty?: string): Promise<T> {
        var url: any = StringFormat(this.target, (request.options || {}));
        return axios.get(url)
            .then(response => { return response.data });
    }

    post(data: any, options?: QueryOptions): Promise<T> {
        throw new Error("Method not implemented.");
    }
    put(data: any, options?: QueryOptions, idProperty?: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
    remove(key: any, idProperty?: string): Promise<T> {
        throw new Error("Method not implemented.");
    }

    getIdentity(o: any) {
        throw new Error("Method not implemented.");
    }

    getIdProperty(): string {
        return "id";
    }
}

export { PalmyraDataStore };

function convertQueryParams(queryParams: QueryParams): any {
    const orderBy = Object.keys(queryParams?.sortOrder || {}).map(field => {
        const order = queryParams.sortOrder[field] === "asc" ? "+" : "-";
        return order + field;
    });

    const _f = queryParams.filter || {};

    return { ..._f, _orderBy: orderBy.length ? orderBy.join(',') : [] };
}