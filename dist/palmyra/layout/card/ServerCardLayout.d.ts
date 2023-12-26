import { ReactNode } from 'react';
import { IServerQueryInput } from '../../form/ServerQueryManager';
interface ServerCardLayoutInput extends IServerQueryInput {
    Child: React.FC;
    childProps?: any;
    listKeyProvider?: (data: any, index: number) => string | number;
    EmptyChild?: React.FC;
    children?: ReactNode;
    preProcess?: (data: any) => any;
}
declare const ServerCardLayout: import("react").ForwardRefExoticComponent<ServerCardLayoutInput & import("react").RefAttributes<any>>;
export default ServerCardLayout;
export type { ServerCardLayoutInput };
