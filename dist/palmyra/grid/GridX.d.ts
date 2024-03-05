import React from 'react';
import { ColumnDefinition, GridCustomizer } from './Types';
import { IServerQueryInput } from '../form/ServerQueryManager';
import { IPageQueryable } from '../form/interfaceFields';
import { ITitle } from '../form/interface';
interface GridXOptions extends IServerQueryInput {
    columns: ColumnDefinition[];
    children?: any;
    EmptyChild?: React.FC;
    onRowClick?: Function;
    onNewClick?: Function;
    customizer?: GridCustomizer;
    customButton?: React.ReactNode[];
    title?: ITitle;
    customAddButton?: any;
}
declare const GridX: React.ForwardRefExoticComponent<GridXOptions & React.RefAttributes<IPageQueryable>>;
export default GridX;
