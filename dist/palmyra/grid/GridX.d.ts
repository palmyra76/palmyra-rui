/// <reference types="react" />
import { DefaultQueryParams, QueryStore } from '../store';
import { ColumnDefinition, GridCustomizer } from './Types';
interface GridXOptions {
    columns: ColumnDefinition[];
    children?: any;
    fetchAll?: boolean;
    EmptyChild?: React.FC;
    store: QueryStore<any>;
    onRowClick?: Function;
    onNewClick?: Function;
    pageSize?: number[];
    quickSearch?: string;
    customizer?: GridCustomizer;
    defaultParams?: DefaultQueryParams;
}
declare const GridX: import("react").ForwardRefExoticComponent<GridXOptions & import("react").RefAttributes<any>>;
export default GridX;
