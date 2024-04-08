import { default as MemoryTreeStore } from './MemoryTreeStore';
import { MenuDef } from '../../layout/tree/types';

declare class MemoryMenuStore extends MemoryTreeStore<MenuDef> {
    getIdentity(o: MenuDef): string;
}
export default MemoryMenuStore;
