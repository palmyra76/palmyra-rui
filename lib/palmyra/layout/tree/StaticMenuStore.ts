import { MenuDef } from "..";
import { strings } from "../../form/interface";
import { TreeQueryStore } from "../../store/AsyncStore";
import { QueryResponse, QueryRequest, GetRequest } from "../../store/Types";

class StaticMenuStore implements TreeQueryStore<MenuDef, MenuDef> {
    data: MenuDef

    constructor(menuList: MenuDef[]) {
        this.data = {
            name: 'root',
            children: menuList
        };
    }

    getChildren(data: MenuDef): Promise<QueryResponse<MenuDef>> {
        var result: QueryResponse<MenuDef> = {
            result: data.children
        }
        return Promise.resolve(result);
    }
    getRoot(): Promise<MenuDef> {
        return Promise.resolve(this.data);
    }

    query(request: QueryRequest): Promise<QueryResponse<MenuDef>> {
        throw new Error("Method not implemented.");
    }
    get(request: GetRequest): Promise<MenuDef> {
        throw new Error("Method not implemented.");
    }
    getIdentity(o: MenuDef) {
        throw new Error("Method not implemented.");
    }
    getIdProperty(): strings {
        throw new Error("Method not implemented.");
    }
}


export { StaticMenuStore }