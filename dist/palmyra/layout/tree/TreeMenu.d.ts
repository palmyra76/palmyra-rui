import { Tree } from "../../store/Types";
interface MenuDef extends Tree<MenuDef> {
    name: string;
    title?: string;
    path?: string;
    children?: MenuDef[];
    icon?: string;
    isExternal?: boolean;
}
export type { MenuDef };
export default function TreeMenu({ appRoutes }: {
    appRoutes: any;
}): import("react/jsx-runtime").JSX.Element;
