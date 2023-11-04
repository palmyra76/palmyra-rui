import { Tree as TreeType } from "../../store/Types";
interface MenuDef extends TreeType<MenuDef> {
    name: string;
    title?: string;
    path?: string;
    children?: MenuDef[];
    icon?: string;
    isExternal?: boolean;
}
export type { MenuDef };
interface TreeMenuInput {
    data: MenuDef[];
}
export default function TreeMenu(props: TreeMenuInput): import("react/jsx-runtime").JSX.Element;
