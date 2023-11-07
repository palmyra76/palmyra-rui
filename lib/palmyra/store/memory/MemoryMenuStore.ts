
import { MenuDef } from "../../layout/tree/types";
import MemoryTreeStore from "./MemoryTreeStore";

class MemoryMenuStore extends MemoryTreeStore<MenuDef>{
    getIdentity(o: MenuDef) {
        return o.name;
    }
}

export default MemoryMenuStore;