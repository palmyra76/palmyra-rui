import { MutableRefObject } from "react";
import { FieldDefinition, FormData, MuiFieldDef } from "./Definitions";
type EventHandler = Record<FieldEvents, Function>;
type FieldEvents = "onEntryComplete" | "onEntryClear" | "asyncValid";
type FormMode = 'view' | 'new' | 'edit';
interface FieldContext {
    eventHandler?: EventHandler;
    onDataChange?: Function;
    constraint?: Function;
    options?: Record<string, string>;
}
interface FormContext {
    rules: Record<string, Function>;
    data: FormData;
    onDataChange: Function;
    eventHandlers?: Record<string, EventHandler>;
}
/**
 * Field Renderer Input
 */
interface FieldProperties {
    fieldDef: FieldDefinition;
    muiFieldDef: MuiFieldDef;
    runtime?: FieldContext;
    value: any;
    displayValue?: any;
}
interface IFormCustomizer {
    getFormHelper: () => IFormHelper;
    getOnChangeListeners: (form: IFormHelper) => Record<string, IFieldEventListener>;
    getValueListeners: (form: IFormHelper) => Record<string, IFieldValueListener>;
}
interface IFormHelper {
    getFieldRef: <T>(field: string, type: T) => T;
    addFieldRef: (field: string, ref: MutableRefObject<any>) => void;
}
declare const NoopFormHelper: IFormHelper;
declare const NoopFormCustomizer: IFormCustomizer;
interface IFieldValueListener {
    onValue: (key: string, value: any, valid?: boolean) => void;
}
interface IFieldEventListener {
    onChange: (key: string, value: any, valid?: boolean) => void;
}
declare const NoopFieldEventListener: IFieldEventListener;
declare const NoopFieldValueListener: IFieldValueListener;
type onDataChangeCallback = (data: any, valid: boolean) => void;
interface FormEventHandler {
    onDataChange(key: string, listener: onDataChangeCallback): any;
}
export type { FieldContext, FieldProperties, FormContext, IFormCustomizer, IFormHelper };
export type { EventHandler, FormMode, IFieldEventListener, IFieldValueListener, FormEventHandler, onDataChangeCallback };
export { NoopFieldEventListener, NoopFormHelper, NoopFormCustomizer, NoopFieldValueListener };
