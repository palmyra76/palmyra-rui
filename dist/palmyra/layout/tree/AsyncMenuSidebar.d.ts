import { FC } from "react";
interface ISideMenuInput {
    sidebarWidth: boolean;
}
interface SidebarInput {
    appTitle: string;
    width: string;
    mobileOpen?: boolean;
    setMobileOpen?: any;
    responsive?: boolean;
    SideMenu: FC<ISideMenuInput>;
}
declare const AsyncMenuSidebar: (props: SidebarInput) => import("react/jsx-runtime").JSX.Element;
export { AsyncMenuSidebar };
export type { SidebarInput };
