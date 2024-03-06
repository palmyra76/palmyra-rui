/// <reference types="react" />
import { ColumnDefinition, GridCustomizer } from './Types';
import { IServerQueryInput } from '../form/ServerQueryManager';
import { IPageQueryable } from '../form/interfaceFields';
interface GridXOptions extends IServerQueryInput {
    columns: (data: any) => ColumnDefinition[];
    children?: any;
    EmptyChild?: React.FC;
    onRowClick?: Function;
    onNewClick?: Function;
    customizer?: GridCustomizer;
    customButton?: React.ReactNode[];
    title?: any;
    customAddButton?: any;
}
declare const DynColGridX: import("react").ForwardRefExoticComponent<GridXOptions & import("react").RefAttributes<IPageQueryable>>;
export default DynColGridX;
