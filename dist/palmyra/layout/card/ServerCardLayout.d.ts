import { ReactNode } from 'react';
import { QueryStore } from '../../store';
interface ServerCardLayoutInput {
    store: QueryStore<any>;
    Child: React.FC;
    childProps: any;
    pageSize: number[];
    quickSearchKey: string;
    listKeyProvider?: (data: any, index: number) => string | number;
    EmptyChild?: React.FC;
    children?: ReactNode;
}
declare const ServerCardLayout: (props: ServerCardLayoutInput) => import("react/jsx-runtime").JSX.Element;
export default ServerCardLayout;
export type { ServerCardLayoutInput };
