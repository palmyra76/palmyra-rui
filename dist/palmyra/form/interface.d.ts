import { LookupStore } from "../store";
/**
 * This definitions will cater to the Form Definition format
 *
 */
type FieldType = "string" | "number" | "date" | "radio" | "select" | "datetime" | "textarea" | "checkbox" | "serverlookup" | "switch" | "multiSelect" | "dateRange";
type InputType = string | number;
interface RangeValidation<T> {
    is?: T;
    min?: T;
    max?: T;
    message: string;
}
interface LookupOptions {
    idAttribute?: string;
    searchAttribute?: string;
    titleAttribute?: string;
}
interface AttributeDefinition {
    attribute: string;
    name?: string;
    defaultValue?: InputType;
    value?: InputType;
    required?: boolean;
    disabled?: boolean;
    placeHolder?: string;
}
interface abstractValidation {
    validationRule?: string | string[];
    errorMessage?: Record<string, string>;
}
interface TextValidation extends abstractValidation {
    length?: RangeValidation<number>;
    regex?: string;
}
interface ITextFieldDefinition extends AttributeDefinition, TextValidation {
    label?: string;
}
interface ISwitchDefinition extends AttributeDefinition {
    options: Record<string | number, string | number>;
}
interface ISelectDefinition extends AttributeDefinition {
    options: Record<any, any>;
}
interface IDateTimeDefinition extends AttributeDefinition {
    range?: RangeValidation<string>;
    serverPattern?: string;
    displayPattern?: string;
}
interface IServerLookupDefinition extends AttributeDefinition {
    lookupOptions: IFormFieldServerLookup;
    store?: LookupStore<any>;
    storeOptions?: {
        endPoint: string;
    };
}
interface IEventListeners {
    onBlur: () => void;
    onFocus: () => void;
    onValueChange: (data: any) => void;
    onSearch?: (searchKey: string, limt?: number, offset?: number) => void;
}
interface IFormFieldSelect {
    options?: Record<any, any>;
    defaultSelected: any;
}
interface IFormFieldServerLookup {
    idAttribute?: string;
    searchAttribute?: string;
    titleAttribute?: string;
}
interface IFormFieldError {
    status: boolean;
    message: string;
}
interface IFormFieldInput {
    data: any;
    setData: Function;
    error: any;
    eventListeners: IEventListeners;
    displayValue?: any;
    toolkitOptions?: Record<string, any>;
    select?: IFormFieldSelect;
    lookup?: IFormFieldServerLookup;
}
interface IFormFieldManager {
    data: any;
    setData: Function;
    error: any;
    eventListeners: IEventListeners;
    displayValue?: any;
    store?: LookupStore<any>;
}
interface IFieldDefinition extends AttributeDefinition, LookupOptions {
    type: string;
}
type IGetFieldManager = (fieldDef: AttributeDefinition, type: FieldType) => IFormFieldManager;
interface IFormFieldInputDefinition extends IFieldDefinition, IGetFieldManagerDefinition {
    toolkitOptions?: any;
}
interface IGetFieldManagerDefinition {
    getFieldManager: IGetFieldManager;
}
export type { ITextFieldDefinition, ISelectDefinition, IDateTimeDefinition, IFieldDefinition, IGetFieldManagerDefinition, AttributeDefinition, FieldType };
export type { IServerLookupDefinition, ISwitchDefinition };
export type { IEventListeners, IFormFieldError, IFormFieldInput, IFormFieldSelect, IFormFieldInputDefinition, IFormFieldManager, IGetFieldManager };
