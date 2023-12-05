import { QueryStore, GetRequest, QueryRequest, StringFormat, QueryResponse, QueryParams } from "../../../../lib/main";
import axios, { AxiosInstance } from 'axios';
import { IEndPoint } from "../../layout/Types";
import { strings } from "../../form/interface";

class PalmyraGridStore implements QueryStore<any>{
    request: Record<string, string>
    target: string
    endPoint:IEndPoint
    idProperty:strings

    constructor(request: Record<string, string>, endPoint:IEndPoint, idProperty?:strings) {
        this.request = request;
        this.target = request.target;
        this.endPoint = endPoint;
        this.idProperty = idProperty;
    }

    getClient():AxiosInstance {
        return axios;
    }

    getEndPoint():IEndPoint {
        return this.endPoint;
    }

    queryUrl():string{
        if(typeof this.endPoint == 'string'){
            return this.endPoint;
        }else{
            this.endPoint.query;
        }
    }

    getUrl():string{
        if(typeof this.endPoint == 'string'){
            return this.endPoint;
        }else{
            this.endPoint.get;
        }
    }

    query(queryParam: QueryRequest): Promise<QueryResponse<any>> {
        var urlFormat = this.target + this.queryUrl();
        var url: any = StringFormat(urlFormat, queryParam.options);
        const urlSortParams = (convertQueryParams(queryParam));
        const params = { params: urlSortParams };
        return axios.get(url, params)
            .then(response => { return response.data });
    }

    queryLayout(request: QueryRequest): Promise<any> {
        var urlFormat = this.target + this.queryUrl();
        var url: any = StringFormat(urlFormat, {});        
        return axios.get(url, {
            headers: {
                action: 'schema'
            }
        })
            .then((response) => response.data);
    }

    get(request: GetRequest, idProperty?: string): Promise<any> {
        var urlFormat = this.target + this.queryUrl();
        var url: any = StringFormat(urlFormat, (request.options || {}));
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

    const _offset = queryParams.offset || 0;
    const _limit = queryParams.limit || 15;

    return { ..._f, _total, _orderBy: orderBy.length ? orderBy.join(',') : [], _offset, _limit };
}