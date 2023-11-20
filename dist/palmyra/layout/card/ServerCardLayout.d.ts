import { ReactNode } from 'react';
import { DefaultQueryParams, QueryStore } from '../../store';
interface ServerCardLayoutInput {
    quickSearch?: string;
    defaultParams?: DefaultQueryParams;
    store: QueryStore<any>;
    Child: React.FC;
    childProps?: any;
    pageSize?: number[];
    listKeyProvider?: (data: any, index: number) => string | number;
    EmptyChild?: React.FC;
    children?: ReactNode;
}
declare const ServerCardLayout: (props: ServerCardLayoutInput) => import("react/jsx-runtime").JSX.Element;
export default ServerCardLayout;
export type { ServerCardLayoutInput };
