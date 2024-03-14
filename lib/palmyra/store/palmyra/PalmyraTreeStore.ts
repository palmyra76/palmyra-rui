import { QueryRequest, QueryResponse, QueryParams, TreeQueryStore } from "../../../main";
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { IEndPoint } from "../../layout/Types";
import { strings } from "../../form/interface";
import { PalmyraAbstractStore } from "./AbstractStore";

interface IChildTreeRequest {
    parent?: number
}

class PalmyraTreeStore extends PalmyraAbstractStore implements TreeQueryStore<IChildTreeRequest, any>{
    idProperty: strings

    constructor(options: Record<string, any>, endPoint: IEndPoint, idProperty?: strings) {
        super(options, endPoint);
        this.idProperty = idProperty;
    }
    getChildren(data: IChildTreeRequest): Promise<QueryResponse<any>> {
        const request: QueryRequest = { filter: { parent: data.parent } };
        return this.query(request);
    }
    getRoot(): Promise<any> {
        const request: QueryRequest = {};
        return this.query(request);
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

    query(request: QueryRequest): Promise<QueryResponse<any>> {
        var urlFormat = this.target + this.queryUrl();
        var url: any = this.formatUrl(urlFormat, request);
        const urlSortParams = (convertQueryParams(request));
        const params: AxiosRequestConfig = { params: urlSortParams, headers: { action: 'nativeQuery' } };
        return axios.get(url, params)
            .then(response => { return response.data });
    }
}

export { PalmyraTreeStore };

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

export type { IChildTreeRequest }