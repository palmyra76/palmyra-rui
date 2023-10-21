import { FormData } from "../../form/Definitions";
import { FormContext } from "../../form/Types";
import { ChartStore, QueryStore, DataStore } from "../../store";
import { FlexiLayoutDefinition, SectionDefinition, TabDefinition } from "./Definitions";


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

interface LayoutParams extends Record<string, string>{

}

interface StoreFactory<T> {
    getGridStore(request: Record<string, string>): QueryStore<T>;
    getFormStore(request: Record<string, string>): DataStore<T>;
    getChartStore(request: Record<string, string>): ChartStore<T>;
}

interface FlexiLayoutRendererInput<T> {
    layoutParams: LayoutParams,
    layout: FlexiLayoutDefinition,
    recordId?: string,
    data?: FormData,
    callbacks?: FlexiEventHandlers,
    options?: any,
    storeFactory: StoreFactory<T>
}

interface PageContext {
    formContext?: FormContext
}


interface TabContainerInput extends TabDefinition, Parent {

}

interface SectionContainerInput extends SectionDefinition, Parent {

}


export type { SectionRendererInput, TabRendererInput, PageContext, StoreFactory, LayoutParams }

export type { TabContainerInput, SectionContainerInput, FlexiLayoutRendererInput, FlexiEventHandlers }