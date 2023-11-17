/// <reference types="react" />
import { ColumnDefinition, GridCustomizer, IEndPoint, PageContext, StoreFactory } from "../../main";
import { ActionOptions } from "../layout/Types";
interface IPalmyraGridInput {
    columns: ColumnDefinition[];
    actions?: ActionOptions;
    quickSearch?: string;
    customizer?: GridCustomizer;
    endPoint: IEndPoint;
    storeFactory: StoreFactory<any>;
    layoutParams: PageContext;
}
interface IPalmyraGrid {
}
declare const PalmyraGrid: import("react").ForwardRefExoticComponent<IPalmyraGridInput & import("react").RefAttributes<unknown>>;
export { PalmyraGrid };
export type { IPalmyraGrid };
