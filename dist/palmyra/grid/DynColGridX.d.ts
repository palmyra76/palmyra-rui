import { GridStore } from 'palmyra-wire';
import { IPageQueryable } from '../form/interfaceFields';
import { IServerQueryInput } from '../form/ServerQueryManager';
import { ColumnDefinition, GridCustomizer, IExportOptions } from './Types';

interface GridXOptions extends IServerQueryInput {
    store: GridStore<any>;
    columns: (data: any) => ColumnDefinition[];
    children?: any;
    EmptyChild?: React.FC;
    onRowClick?: Function;
    onNewClick?: Function;
    customizer?: GridCustomizer;
    customButton?: React.ReactNode[];
    exportOptions?: IExportOptions;
    title?: any;
    customAddButton?: any;
}
declare const DynColGridX: import('react').ForwardRefExoticComponent<GridXOptions & import("react").RefAttributes<IPageQueryable>>;
export default DynColGridX;
