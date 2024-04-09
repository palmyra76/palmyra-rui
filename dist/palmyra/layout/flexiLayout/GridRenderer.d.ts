/// <reference types="react" />
import { PageContext } from './Types';
import { TableLayout } from '.';
import { GridCustomizer, IExportOptions } from '../../grid';
import { IPageQueryable } from '../../form/interfaceFields';
import { DefaultQueryParams } from '../../store';
import { ITitle } from '../../form/interface';
interface GridRendererInput {
    layout: TableLayout;
    context: PageContext;
    onDataChange?: (newData: any[], oldData?: any[]) => void;
    customizer?: GridCustomizer;
    defaultParams?: DefaultQueryParams;
    customButton?: React.ReactNode[];
    title?: ITitle;
    customAddButton?: any;
    fetchAll?: boolean;
    filterTopic?: string;
    initialFetch?: boolean;
    exportOptions?: IExportOptions;
    densityOption?: any;
}
declare const GridRenderer: import("react").ForwardRefExoticComponent<GridRendererInput & import("react").RefAttributes<IPageQueryable>>;
export default GridRenderer;
export type { GridRendererInput };
