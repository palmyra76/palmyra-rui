import { ReactNode } from 'react';
import { DefaultQueryParams, QueryStore } from '../../store';
interface ServerCardLayoutInput {
    quickSearch?: string;
    fetchAll?: boolean;
    defaultParams?: DefaultQueryParams;
    store: QueryStore<any>;
    Child: React.FC;
    childProps?: any;
    pageSize?: number[];
    listKeyProvider?: (data: any, index: number) => string | number;
    EmptyChild?: React.FC;
    children?: ReactNode;
}
declare const ServerCardLayout: import("react").ForwardRefExoticComponent<ServerCardLayoutInput & import("react").RefAttributes<any>>;
export default ServerCardLayout;
export type { ServerCardLayoutInput };
