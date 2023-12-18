/// <reference types="react" />
import { PageContext } from './Types';
import { TableLayout } from '.';
import { GridCustomizer } from '../../grid';
import { IQueryable } from '../../form/interfaceFields';
interface GridRendererInput {
    layout: TableLayout;
    context: PageContext;
    customizer?: GridCustomizer;
}
declare const GridRenderer: import("react").ForwardRefExoticComponent<GridRendererInput & import("react").RefAttributes<IQueryable>>;
export default GridRenderer;
export type { GridRendererInput };
