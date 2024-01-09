import { QueryStore, GetRequest, QueryRequest, QueryResponse, QueryParams } from "../../../../lib/main";
import axios, { AxiosInstance } from 'axios';
import { IEndPoint } from "../../layout/Types";
import { strings } from "../../form/interface";
import { PalmyraAbstractStore } from "./AbstractStore";

class PalmyraGridStore extends PalmyraAbstractStore implements QueryStore<any>{
    idProperty: strings

    constructor(options: Record<string, any>, endPoint: IEndPoint, idProperty?: strings) {
        super(options, endPoint);
        this.idProperty = idProperty;
    }

    getClient(): AxiosInstance {
        return axios;
    }

    getEndPoint(): IEndPoint {
        return this.endPoint;
    }

    queryUrl(): string {
        if (typeof this.endPoint == 'string') {
            return this.endPoint;
        } else {
            this.endPoint.query;
        }
    }

    getUrl(): string {
        if (typeof this.endPoint == 'string') {
            return this.endPoint;
        } else {
            this.endPoint.get;
        }
    }

    query(request: QueryRequest): Promise<QueryResponse<any>> {
        var urlFormat = this.target + this.queryUrl();
        var url: any = this.formatUrl(urlFormat, request);
        const urlSortParams = (convertQueryParams(request));
        const params = { params: urlSortParams };
        return this.isUrlValid(url) || this.getClient().get(url, params)
            .then(response => { return response.data });
    }

    queryLayout(request: QueryRequest): Promise<any> {
        var urlFormat = this.target + this.queryUrl();
        var url: any = this.formatUrl(urlFormat, request);
        return this.isUrlValid(url) || this.getClient().get(url, {
            headers: {
                action: 'schema'
            }
        })
            .then((response) => response.data);
    }

    get(request: GetRequest, idProperty?: string): Promise<any> {
        var urlFormat = this.target + this.queryUrl();
        var url: any = this.formatUrl(urlFormat, request);
        return this.isUrlValid(url) || this.getClient().get(url)
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

    const _total: boolean = queryParams.total ? true : false;

    const _f = queryParams.filter || {};

    const _offset = queryParams.offset || 0;
    const _limit = queryParams.limit || 15;

    return { ..._f, _total, _orderBy: orderBy.length ? orderBy.join(',') : [], _offset, _limit };
}