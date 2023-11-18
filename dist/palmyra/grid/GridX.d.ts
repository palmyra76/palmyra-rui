/// <reference types="react" />
import { DefaultQueryParams, QueryStore } from '../store';
import { ColumnDefinition, GridCustomizer } from './Types';
interface GridXOptions {
    columns: ColumnDefinition[];
    children?: any;
    EmptyChild?: React.FC;
    store: QueryStore<any>;
    onRowClick?: Function;
    onNewClick?: Function;
    pageSize?: number[];
    quickSearch?: string;
    customizer?: GridCustomizer;
    defaultParams?: DefaultQueryParams;
}
declare function GridX(props: GridXOptions): import("react/jsx-runtime").JSX.Element;
export default GridX;
