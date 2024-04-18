import { GridStore } from 'palmyra-wire';
import { ITitle } from '../form/interface';
import { IPageQueryable } from '../form/interfaceFields';
import { IServerQueryInput } from '../form/ServerQueryManager';
import { ColumnDefinition, GridCustomizer, IExportOptions } from './Types';
import { default as React } from 'react';

interface GridXOptions extends IServerQueryInput {
    store: GridStore<any>;
    columns: ColumnDefinition[];
    children?: any;
    EmptyChild?: React.FC;
    exportOptions?: IExportOptions;
    densityOption?: any;
    onRowClick?: Function;
    onNewClick?: Function;
    customizer?: GridCustomizer;
    customButton?: React.ReactNode[];
    title?: ITitle;
    customAddButton?: any;
}
declare const GridX: React.ForwardRefExoticComponent<GridXOptions & React.RefAttributes<IPageQueryable>>;
export default GridX;
