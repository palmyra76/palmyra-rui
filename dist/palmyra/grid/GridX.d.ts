/// <reference types="react" />
import { QueryStore } from '../store';
import { ColumnDefinition } from './Types';
interface GridXOptions {
    columns: ColumnDefinition[];
    children?: any;
    EmptyChild?: React.FC;
    store: QueryStore<any>;
    onRowClick?: Function;
    onNewClick?: Function;
    pageSize?: number[];
    quickSearch?: string;
}
declare function GridX(props: GridXOptions): import("react/jsx-runtime").JSX.Element;
export default GridX;
