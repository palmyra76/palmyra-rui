import { FieldDefinition, FormData } from "./Definitions";

type EventHandler = Record<FieldEvents, Function>;
type FieldEvents = "onEntryComplete" | "onEntryClear" | "asyncValid";


interface FieldContext {
    eventHandler?: EventHandler,
    onDataChange?: Function,
    constraint?: Function,
    options?: Record<string, string>
}

interface FormContext {
    rules: Record<string, Function>,
    data: FormData,
    onDataChange: Function,
    eventHandlers?: Record<string, EventHandler>
}


/**
 * Field Renderer Input
 */
interface FieldProperties {
    fieldDef: FieldDefinition,
    runtime?: FieldContext,
    value: any
}


export type { FieldContext, FieldProperties, FormContext };

export type { EventHandler };