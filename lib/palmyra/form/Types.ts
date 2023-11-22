import { MutableRefObject } from "react";
import { FieldDefinition, FormData, MuiFieldDef } from "./Definitions";
import { createFormHelper } from "./PalmyraFormManager";

type EventHandler = Record<FieldEvents, Function>;
type FieldEvents = "onEntryComplete" | "onEntryClear" | "asyncValid";

type FormMode = 'view' | 'new' | 'edit';

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
    muiFieldDef: MuiFieldDef,
    runtime?: FieldContext,
    value: any,
    displayValue?: any
}


interface IFormCustomizer {
    getFormHelper: () => IFormHelper,
    getEventListeners: (form: IFormHelper) => Record<string, IFieldEventListener>
    getValueListeners: (form: IFormHelper) => Record<string, IFieldValueListener>
}

interface IFormHelper {
    getFieldRef: <T>(field: string) => T;
    addFieldRef: (field: string, ref: MutableRefObject<any>) => void;
}

const NoopFormHelper: IFormHelper = {
    getFieldRef: function (field: string): any {

    },
    addFieldRef: function (field: string, ref: MutableRefObject<any>): void {

    }
}

const NoopFormCustomizer: IFormCustomizer = {
    getFormHelper: function () {
        return createFormHelper()
    },
    getEventListeners: function (form: IFormHelper): Record<string, IFieldEventListener> {
        return {};
    },
    getValueListeners: function (form: IFormHelper): Record<string, IFieldValueListener> {
        return {};
    }
}

interface IFieldValueListener {
    onValue: (key: string, value: any, valid?: boolean) => void
}

interface IFieldEventListener {
    onChange: (key: string, value: any, valid?: boolean) => void
}

const NoopFieldEventListener: IFieldEventListener = {
    onChange: function (key: string, value: any): void {
    }
}

const NoopFieldValueListener: IFieldValueListener = {
    onValue: function (key: string, value: any, valid?: boolean): void {

    }
}

type onDataChangeCallback = (data: any, valid: boolean) => void;

interface FormEventHandler {
    onDataChange(key: string, listener: onDataChangeCallback)
}

export type { FieldContext, FieldProperties, FormContext, IFormCustomizer, IFormHelper };
export type { EventHandler, FormMode, IFieldEventListener, IFieldValueListener, FormEventHandler, onDataChangeCallback };
export { NoopFieldEventListener, NoopFormHelper, NoopFormCustomizer, NoopFieldValueListener }