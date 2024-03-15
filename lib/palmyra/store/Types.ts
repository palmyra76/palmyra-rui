import { IEndPointOptions } from "../layout/Types"

interface IPagination {
    offset?: number,
    limit?: number,
    total?: boolean
}

interface AbstractRequest {
    options?: QueryOptions,
    endPointVars?: IEndPointOptions
}

interface CriteriaOptions {
    filter?: Record<string, any>,
}

interface QueryRequest extends IPagination, CriteriaOptions, AbstractRequest {
    sortOrder?: QueryOptions
}

type EXPORT_FORMAT = 'csv' | 'excel' | 'pdf' | 'doc';

interface ExportRequest extends QueryRequest {
    format: EXPORT_FORMAT;
}

interface QueryParams extends IPagination, CriteriaOptions {
    sortOrder?: QueryOptions
}

interface QueryResponse<T> {
    result: T[],
    offset?: number,
    limit?: number,
    total?: number
}

interface GetRequest extends CriteriaOptions, AbstractRequest {
    key?: string
}

interface PostRequest extends AbstractRequest {

}

interface PutRequest extends AbstractRequest {

}

interface RemoveRequest extends AbstractRequest {

}

interface QueryOptions extends Record<string, any> {

}

interface ErrorResponse {
    status: number,
    message: string
}

interface QueryResponseHandler<T> {
    onResponse(response: QueryResponse<T>): void;
    onFailure?(body: ErrorResponse): void;
}

interface ResponseHandler<T> {
    onResponse(response: T): void;
    onFailure?(body: ErrorResponse): void;
}

interface Tree<T extends Tree<T>> {
    children?: T[];
}

export type { IPagination, CriteriaOptions, QueryRequest, QueryResponse, QueryOptions, Tree, QueryParams, AbstractRequest }
export type { GetRequest, PostRequest, PutRequest, RemoveRequest, ExportRequest }
export type { QueryResponseHandler, ResponseHandler, ErrorResponse,  EXPORT_FORMAT}