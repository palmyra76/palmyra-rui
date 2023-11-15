import { FormData } from "../../form/Definitions";
import { ChartStore, QueryStore, DataStore, LookupStore } from "../../store";
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
    getGridStore(request: Record<string, string>, idProperty?: string | string[]): QueryStore<T>;
    getFormStore(request: Record<string, string>, idProperty?: string | string[]): DataStore<T>;
    getChartStore(request: Record<string, string>): ChartStore<T>;
    getLookupStore(request: Record<string, string>, idProperty: string | string[]): LookupStore<T>;
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

interface SectionContainerInput extends SectionDefinition, Parent {

}


export type { SectionRendererInput, TabRendererInput, PageContext, StoreFactory, LayoutParams }

export type { TabContainerInput, SectionContainerInput, FlexiLayoutRendererInput, FlexiEventHandlers }