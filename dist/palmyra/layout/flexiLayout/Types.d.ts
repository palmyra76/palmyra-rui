import { Titleable } from '../Types';
import { FlexiLayoutDefinition, SectionDefinition, TabDefinition, flexiPrimaryType } from './Definitions';
import { FormData } from '../../form/Definitions';
import { StoreFactory } from 'palmyra-wire';

interface Parent {
    children?: any;
}
interface SectionRendererInput {
    layout: SectionDefinition;
    context: PageContext;
}
interface TabRendererInput {
    layout: TabDefinition;
    context: PageContext;
}
interface FlexiEventHandlers {
    onFormValidChange?: Function;
}
interface LayoutParams extends Record<string, string> {
}
interface FlexiLayoutRendererInput<T> {
    layoutParams: LayoutParams;
    layout: FlexiLayoutDefinition;
    mode?: flexiPrimaryType;
    recordId?: string;
    data?: FormData;
    callbacks?: FlexiEventHandlers;
    options?: any;
    storeFactory: StoreFactory<T>;
}
interface PageContext {
    formData?: any;
}
interface TabContainerInput extends TabDefinition, Parent {
}
interface SectionContainerInput extends Titleable, Parent {
    customButton?: React.ReactNode[];
}
export type { SectionRendererInput, TabRendererInput, PageContext, StoreFactory, LayoutParams };
export type { TabContainerInput, SectionContainerInput, FlexiLayoutRendererInput, FlexiEventHandlers };
