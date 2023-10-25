import { TreeQueryStore } from "../AsyncStore";
import { QueryRequest, GetRequest, Tree, QueryResponse } from "../Types";
declare abstract class MemoryTreeStore<T extends Tree<T>> implements TreeQueryStore<T> {
    root: T;
    constructor(data: T);
    query(request: QueryRequest): Promise<QueryResponse<T>>;
    get(request: GetRequest): Promise<T>;
    abstract getIdentity(o: T): any;
    getRoot(): Promise<QueryResponse<T>>;
    getChildren(data: T): Promise<QueryResponse<T>>;
    getIdProperty(): string;
}
export default MemoryTreeStore;
