/// <reference types="react" />
import { PageContext } from './Types';
import { TableLayout } from '.';
import { GridCustomizer } from '../../grid';
interface GridRendererInput {
    layout: TableLayout;
    context: PageContext;
    customizer?: GridCustomizer;
}
declare const GridRenderer: import("react").ForwardRefExoticComponent<GridRendererInput & import("react").RefAttributes<unknown>>;
export default GridRenderer;
export type { GridRendererInput };
