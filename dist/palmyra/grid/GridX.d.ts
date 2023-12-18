/// <reference types="react" />
import { ColumnDefinition, GridCustomizer } from './Types';
import { IServerQueryInput } from '../form/ServerQueryManager';
import { IQueryable } from '../form/interfaceFields';
interface GridXOptions extends IServerQueryInput {
    columns: ColumnDefinition[];
    children?: any;
    EmptyChild?: React.FC;
    onRowClick?: Function;
    onNewClick?: Function;
    customizer?: GridCustomizer;
}
declare const GridX: import("react").ForwardRefExoticComponent<GridXOptions & import("react").RefAttributes<IQueryable>>;
export default GridX;
