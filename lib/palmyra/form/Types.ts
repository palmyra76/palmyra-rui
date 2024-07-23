import { MutableRefObject } from "react";
import { AttributeDefinition, FormData, ILookupOptions, IRequiredValidation } from "./Definitions";
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

// type MuiVariant = "outlined" | "standard" | "filled";

// interface MuiFieldDef {
//     value: any,
//     required?: boolean,
//     disabled?: boolean,
//     variant: MuiVariant,
//     options?: any
// }

/**
 * Field Renderer Input
 */

interface iField extends ILookupOptions, IRequiredValidation{

}
interface FieldProperties {
    fieldDef: iField,
    // muiFieldDef: MuiFieldDef,
    runtime?: FieldContext,
    value: any,
    displayValue?: any
}

interface IPalmyraFilter extends ILookupOptions, AttributeDefinition {

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
    onChange?: (key: string, value: any, valid?: boolean) => void
    onBlur?: (key: string, value: any, valid?: boolean) => void
}

const NoopFieldEventListener: IFieldEventListener = {    
}

const NoopFieldValueListener: IFieldValueListener = {
    onValue: function (key: string, value: any, valid?: boolean): void {

    }
}

type onDataChangeCallback = (data: any, valid: boolean) => void;

interface FormEventHandler {
    onDataChange(key: string, listener: onDataChangeCallback)
}

export type { FieldContext, FieldProperties, FormContext, IFormCustomizer, IFormHelper, IPalmyraFilter };
export type { EventHandler, FormMode, IFieldEventListener, IFieldValueListener, FormEventHandler, onDataChangeCallback };
export { NoopFieldEventListener, NoopFormHelper, NoopFormCustomizer, NoopFieldValueListener }