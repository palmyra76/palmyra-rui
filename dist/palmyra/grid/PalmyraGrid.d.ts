/// <reference types="react" />
import { ColumnDefinition, DefaultQueryParams, GridCustomizer, IEndPoint, PageContext, StoreFactory } from "../../main";
import { ActionOptions } from "../layout/Types";
interface IPalmyraGridInput {
    columns: ColumnDefinition[];
    actions?: ActionOptions;
    topic?: string;
    quickSearch?: string;
    customizer?: GridCustomizer;
    endPoint: IEndPoint;
    storeFactory: StoreFactory<any>;
    layoutParams: PageContext;
    defaultParams?: DefaultQueryParams;
}
interface IPalmyraGrid {
    setFilter: (d: any) => void;
}
declare const PalmyraGrid: import("react").ForwardRefExoticComponent<IPalmyraGridInput & import("react").RefAttributes<unknown>>;
export { PalmyraGrid };
export type { IPalmyraGrid };
