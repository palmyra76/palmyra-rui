import { FormData } from "../../form/Definitions";
import { strings } from "../../form/interface";
import { ChartStore, QueryStore, DataStore, LookupStore } from "../../store";
import { IEndPoint, Titleable } from "../Types";
import { FlexiLayoutDefinition, SectionDefinition, TabDefinition, flexiPrimaryType } from "./Definitions";


interface Parent {
    children?: any
}

interface SectionRendererInput {
    layout: SectionDefinition,
    context: PageContext
}

interface TabRendererInput {
    layout: TabDefinition,
    context: PageContext
}

interface FlexiEventHandlers {
    onFormValidChange?: Function
}

interface LayoutParams extends Record<string, string> {

}

interface StoreFactory<T> {
    getGridStore(options: Record<string, string>, endPoint: IEndPoint, idProperty?: strings): QueryStore<T>;
    getFormStore(options: Record<string, string>, endPoint: IEndPoint, idProperty?: strings): DataStore<T>;
    getChartStore(options: Record<string, string>, endPoint?: IEndPoint): ChartStore<T>;
    getLookupStore(options: Record<string, string>, endPoint: IEndPoint, idProperty: strings): LookupStore<T>;
}

interface FlexiLayoutRendererInput<T> {
    layoutParams: LayoutParams,
    layout: FlexiLayoutDefinition,
    mode?: flexiPrimaryType,
    recordId?: string,
    data?: FormData,
    callbacks?: FlexiEventHandlers,
    options?: any,
    storeFactory: StoreFactory<T>
}

interface PageContext {
    formData?: any
}


interface TabContainerInput extends TabDefinition, Parent {

}

interface SectionContainerInput extends Titleable, Parent {

}


export type { SectionRendererInput, TabRendererInput, PageContext, StoreFactory, LayoutParams }

export type { TabContainerInput, SectionContainerInput, FlexiLayoutRendererInput, FlexiEventHandlers }