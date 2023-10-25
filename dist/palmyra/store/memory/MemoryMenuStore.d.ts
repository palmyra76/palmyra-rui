import { MenuDef } from "../../layout/tree/TreeMenu";
import MemoryTreeStore from "./MemoryTreeStore";
declare class MemoryMenuStore extends MemoryTreeStore<MenuDef> {
    getIdentity(o: MenuDef): string;
}
export default MemoryMenuStore;
