import { MenuDef } from "..";
import { TreeQueryStore } from "../../store/AsyncStore";
import { QueryResponse, QueryRequest, GetRequest } from "../../store/Types";
declare class StaticMenuStore implements TreeQueryStore<MenuDef> {
    data: MenuDef;
    constructor(menuList: MenuDef[]);
    getChildren(data: MenuDef): Promise<QueryResponse<MenuDef>>;
    getRoot(): Promise<MenuDef>;
    query(request: QueryRequest): Promise<QueryResponse<MenuDef>>;
    get(request: GetRequest): Promise<MenuDef>;
    getIdentity(o: MenuDef): void;
    getIdProperty(): string | string[];
}
export { StaticMenuStore };
