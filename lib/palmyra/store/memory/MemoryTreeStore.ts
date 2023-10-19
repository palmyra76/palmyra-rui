
import { TreeQueryStore } from "../AsyncStore";
import { QueryResponseHandler, QueryRequest, GetRequest, ResponseHandler, Tree, QueryResponse } from "../Types";

class MemoryTreeStore<T extends Tree<T>> implements TreeQueryStore<T>{
    root: T;
    constructor(data: T) {
        this.root = data;
    }
    getRoot(handler: QueryResponseHandler<T>): void {
        const children = this.root.children;
        const response: QueryResponse<T> = {
            result: children
        }
        handler.onResponse(response);
    }

    getChildren(data: T, handler: QueryResponseHandler<T>): void {
        if (data.children) {
            const response: QueryResponse<T> = {
                result: data.children
            }
            handler.onResponse(response);
        }
    }
    query(request: QueryRequest, handler: QueryResponseHandler<T>): void {
        throw new Error("Method not implemented.");
    }
    get(request: GetRequest, handler: ResponseHandler<T>): void {
        throw new Error("Method not implemented.");
    }
}

export default MemoryTreeStore;