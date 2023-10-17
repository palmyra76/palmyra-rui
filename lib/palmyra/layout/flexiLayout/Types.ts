import { FormData } from "../../form/Definitions";
import { FormContext } from "../../form/Types";
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

interface FlexiLayoutRendererInput {
    layout: FlexiLayoutDefinition,
    recordId?: string,
    data?: FormData,
    callbacks?: FlexiEventHandlers,
    options?: any
}

interface PageContext {
    formContext?: FormContext
}


interface TabContainerInput extends TabDefinition, Parent {

}

interface SectionContainerInput extends SectionDefinition, Parent {

}


export type { SectionRendererInput, TabRendererInput, PageContext }

export type { TabContainerInput, SectionContainerInput, FlexiLayoutRendererInput, FlexiEventHandlers }