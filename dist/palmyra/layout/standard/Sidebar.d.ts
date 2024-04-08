import { FC } from 'react';

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
declare const Sidebar: (props: SidebarInput) => import("react/jsx-runtime").JSX.Element;
export { Sidebar };
export type { SidebarInput };
