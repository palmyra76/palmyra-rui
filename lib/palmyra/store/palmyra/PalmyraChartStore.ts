import { QueryRequest, QueryParams, ChartStore } from "../../../main";
import axios from 'axios';
import { IEndPoint } from "../../layout/Types";
import { strings } from "../../form/interface";
import { PalmyraAbstractStore } from "./AbstractStore";

class PalmyraChartStore extends PalmyraAbstractStore implements ChartStore<any>{
        
    idProperty: strings

    constructor(request: Record<string, string>, endPoint: IEndPoint, idProperty?: strings) {
        super(request, endPoint);
        this.idProperty = idProperty;
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

    query(request: QueryRequest): Promise<any> {
        var urlFormat = this.target + this.queryUrl();
        var url: any = this.formatUrl(urlFormat, request);
        const urlSortParams = (convertQueryParams(request));
        const params = { params: urlSortParams };
        return axios.get(url, params)
            .then(response => { return response.data });
    }
}

export { PalmyraChartStore };

function convertQueryParams(queryParams: QueryParams): any {
    const orderBy = Object.keys(queryParams?.sortOrder || {}).map(field => {
        const order = queryParams.sortOrder[field] === "asc" ? "+" : "-";
        return order + field;
    });

    const _total: boolean = queryParams.total ? true : false;

    const _f = queryParams.filter || {};

    return { ..._f, _total, _orderBy: orderBy.length ? orderBy.join(',') : [] };
}