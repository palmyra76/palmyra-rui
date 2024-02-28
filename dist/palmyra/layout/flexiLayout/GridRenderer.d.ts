/// <reference types="react" />
import { PageContext } from './Types';
import { TableLayout } from '.';
import { GridCustomizer } from '../../grid';
import { IPageQueryable } from '../../form/interfaceFields';
import { DefaultQueryParams } from '../../store';
interface GridRendererInput {
    layout: TableLayout;
    context: PageContext;
    onDataChange?: (newData: any[], oldData?: any[]) => void;
    customizer?: GridCustomizer;
    defaultParams?: DefaultQueryParams;
    customButton?: React.ReactNode[];
    gridTitle?: any;
    customAddButton?: any;
    fetchAll?: boolean;
    filterTopic?: string;
    initialFetch?: boolean;
}
declare const GridRenderer: import("react").ForwardRefExoticComponent<GridRendererInput & import("react").RefAttributes<IPageQueryable>>;
export default GridRenderer;
export type { GridRendererInput };
