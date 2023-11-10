import { Tree } from "../../store/Types";
import { IconProvider } from "../flexiLayout/IconProvider";
interface TreeListener<T> {
    onClick: (id: string, e: T) => void;
    expand: (id: string, e: T) => void;
    collapse: (id: string, e: T) => void;
}
interface MenuDef extends Tree<MenuDef> {
    name: string;
    title?: string;
    path?: string;
    children?: MenuDef[];
    icon?: string;
    isExternal?: boolean;
}
interface TreeMenuInput {
    data: MenuDef[];
    iconProvider?: IconProvider;
    sidebarWidth?: boolean;
}
export type { TreeListener, MenuDef, TreeMenuInput };
