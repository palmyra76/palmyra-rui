import { IEndPointOptions } from "../layout/Types";
interface Pagination {
    offset?: number;
    limit?: number;
    total?: boolean;
}
interface AbstractRequest {
    options?: QueryOptions;
    endPointVars?: IEndPointOptions;
}
interface CriteriaOptions {
    filter?: Record<string, any>;
}
interface QueryRequest extends Pagination, CriteriaOptions, AbstractRequest {
    sortOrder?: QueryOptions;
}
interface QueryParams extends Pagination, CriteriaOptions {
    sortOrder?: QueryOptions;
}
interface QueryResponse<T> {
    result: T[];
    offset?: number;
    limit?: number;
    total?: number;
}
interface GetRequest extends CriteriaOptions, AbstractRequest {
    key?: string;
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
    status: number;
    message: string;
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
export type { Pagination, CriteriaOptions, QueryRequest, QueryResponse, QueryOptions, Tree, QueryParams, AbstractRequest };
export type { GetRequest, PostRequest, PutRequest, RemoveRequest };
export type { QueryResponseHandler, ResponseHandler, ErrorResponse };
