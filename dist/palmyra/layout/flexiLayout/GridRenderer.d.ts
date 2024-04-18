import { ITitle } from '../../form/interface';
import { DefaultQueryParams } from 'palmyra-wire';
import { IPageQueryable } from '../../form/interfaceFields';
import { GridCustomizer, IExportOptions } from '../../grid';
import { TableLayout } from '.';
import { PageContext } from './Types';

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
declare const GridRenderer: import('react').ForwardRefExoticComponent<GridRendererInput & import("react").RefAttributes<IPageQueryable>>;
export default GridRenderer;
export type { GridRendererInput };
