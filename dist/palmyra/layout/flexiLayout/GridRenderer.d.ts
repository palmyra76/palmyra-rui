/// <reference types="react" />
import { PageContext } from './Types';
import { TableLayout } from '.';
import { GridCustomizer } from '../../grid';
import { IQueryable } from '../../form/interfaceFields';
import { DefaultQueryParams } from '../../store';
interface GridRendererInput {
    layout: TableLayout;
    context: PageContext;
    customizer?: GridCustomizer;
    defaultParams?: DefaultQueryParams;
}
declare const GridRenderer: import("react").ForwardRefExoticComponent<GridRendererInput & import("react").RefAttributes<IQueryable>>;
export default GridRenderer;
export type { GridRendererInput };
