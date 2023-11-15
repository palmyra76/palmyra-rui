/// <reference types="react" />
import { TableLayout } from "../layout/flexiLayout";
import { PageContext, StoreFactory } from "../../main";
interface IPalmyraGridInput {
    layout: TableLayout;
    storeFactory: StoreFactory<any>;
    layoutParams: PageContext;
}
interface IPalmyraGrid {
}
declare const PalmyraGrid: import("react").ForwardRefExoticComponent<IPalmyraGridInput & import("react").RefAttributes<unknown>>;
export { PalmyraGrid };
export type { IPalmyraGrid };
