/// <reference types="react" />
import { ColumnDefinition, DefaultQueryParams, GridCustomizer, IEndPoint, IPageQueryable, PageContext, StoreFactory } from "../../main";
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
    pagination?: number[];
}
interface IPalmyraGrid extends IPageQueryable {
}
declare const PalmyraGrid: import("react").ForwardRefExoticComponent<IPalmyraGridInput & import("react").RefAttributes<IPageQueryable>>;
export { PalmyraGrid };
export type { IPalmyraGrid };
