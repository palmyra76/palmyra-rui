interface Pagination {
    offset?: number,
    limit?: number,
    total?: boolean
}

interface CriteriaOptions {
    filter?: any,
}

interface QueryRequest extends Pagination, CriteriaOptions {
    options?: QueryOptions
}

interface QueryResponse<T> {
    result: T[],
    offset?: number,
    limit?: number,
    total?: number
}

interface GetRequest extends CriteriaOptions {
    key: any
}

interface QueryOptions {

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

export type { Pagination, CriteriaOptions, QueryRequest, QueryResponse, GetRequest, QueryOptions, Tree }
export type { QueryResponseHandler, ResponseHandler, ErrorResponse }