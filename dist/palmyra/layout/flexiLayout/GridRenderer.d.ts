/// <reference types="react" />
import { PageContext } from './Types';
import { TableLayout } from '.';
interface GridRendererInput {
    layout: TableLayout;
    context: PageContext;
}
declare const GridRenderer: import("react").ForwardRefExoticComponent<GridRendererInput & import("react").RefAttributes<unknown>>;
export default GridRenderer;
export type { GridRendererInput };
