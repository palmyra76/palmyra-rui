import { MutableRefObject } from "react";
import { IEndPoint } from "../layout";
import { LookupStore } from "../store";
import { IMutateOptions } from "./interfaceFields";
import { IEndPointVars } from "../layout/Types";
import { IFieldEventListener } from ".";
/**
 * This definitions will cater to the Form Definition format
 *
 */
type FieldType = "string" | "number" | "date" | "radio" | "select" | "datetime" | "textarea" | "checkbox" | "serverlookup" | "switch" | "password" | "multiSelect" | "dateRange";
type InputType = string | number;
type strings = string | string[];
type numbers = number | number[];
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
    readonly?: boolean;
    mutant?: boolean;
    visible?: boolean;
    disabled?: boolean;
    placeHolder?: string;
    variant?: string;
    eventListener?: IFieldEventListener;
}
interface abstractValidation {
    validationRule?: strings;
    errorMessage?: Record<string, string>;
}
interface TextValidation extends abstractValidation {
    length?: RangeValidation<number>;
    regex?: string;
}
interface IDecoration {
    customContainerClass?: string;
    customFieldClass?: string;
    customLabelClass?: string;
    className?: string;
    colspan?: number;
    label?: string;
    title?: string;
}
interface ITextFieldDefinition extends AttributeDefinition, TextValidation, IDecoration {
}
interface ISwitchDefinition extends AttributeDefinition, IDecoration {
    options: Record<string | number, string | number>;
}
interface ISelectDefinition extends AttributeDefinition, IDecoration {
    options: Record<any, any> | Record<string, any>;
}
interface ICheckboxDefinition extends AttributeDefinition, IDecoration {
    options: Record<any, any> | Record<string, any>;
    flexDirection?: 'column' | 'row';
}
interface IRadioGroupDefinition extends AttributeDefinition, IDecoration {
    options: Record<any, any> | Record<string, any>;
    flexDirection?: 'column' | 'row';
}
interface IDateTimeDefinition extends AttributeDefinition, IDecoration {
    range?: RangeValidation<string>;
    serverPattern?: string;
    displayPattern?: string;
}
interface IServerLookupDefinition extends AttributeDefinition, IDecoration {
    displayAttribute: string;
    lookupOptions: IFormFieldServerLookup;
    store?: LookupStore<any>;
    storeOptions: {
        endPoint: IEndPoint;
        endPointVars?: IEndPointVars;
    };
}
interface IServerCheckboxDefinition extends AttributeDefinition, IDecoration {
    displayAttribute: string;
    lookupOptions: IFormFieldServerLookup;
    storeOptions: {
        endPoint: IEndPoint;
        endPointVars?: IEndPointVars;
    };
    flexDirection?: 'column' | 'row';
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
    mutateOptions?: IMutateOptions;
    setMutateOptions?: (d: IMutateOptions) => void;
}
interface IFieldDefinition extends AttributeDefinition, LookupOptions {
    type: string;
}
type IGetFieldManager = (fieldDef: AttributeDefinition, type: FieldType, ref: MutableRefObject<any>) => IFormFieldManager;
interface IFormFieldInputDefinition extends IFieldDefinition {
    toolkitOptions?: any;
}
interface IFormListener {
    onSaveSuccess: (data: any) => void;
    onSaveFailure: (e: any) => void;
    onChange: (attribute: string, value: any) => void;
}
declare const NoopFormListener: IFormListener;
export type { ITextFieldDefinition, ISelectDefinition, IDateTimeDefinition, IFieldDefinition, AttributeDefinition, FieldType };
export type { IServerCheckboxDefinition, IServerLookupDefinition, ISwitchDefinition, IFormListener, ICheckboxDefinition, IRadioGroupDefinition, strings, numbers };
export type { IEventListeners, IFormFieldError, IFormFieldInput, IFormFieldSelect, IFormFieldInputDefinition, IFormFieldManager, IGetFieldManager, IDecoration };
export { NoopFormListener };
