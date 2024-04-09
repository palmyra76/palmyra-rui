import { MenuDef } from "..";
import { strings } from "../../form/interface";
import { TreeQueryStore } from "../../store/AsyncStore";
import { QueryResponse, QueryRequest, GetRequest } from "../../store/Types";
declare class StaticMenuStore implements TreeQueryStore<MenuDef, MenuDef> {
    data: MenuDef;
    constructor(menuList: MenuDef[]);
    getChildren(data: MenuDef): Promise<QueryResponse<MenuDef>>;
    getRoot(): Promise<MenuDef>;
    query(request: QueryRequest): Promise<QueryResponse<MenuDef>>;
    get(request: GetRequest): Promise<MenuDef>;
    getIdentity(o: MenuDef): void;
    getIdProperty(): strings;
}
export { StaticMenuStore };
