import { MutableRefObject, SetStateAction } from "react";
import { IEndPoint } from "../layout";
import { LookupStore } from "../store";
import { IMutateOptions } from "./interfaceFields";
import { IEndPointOptions } from "../layout/Types";
import { IFieldEventListener } from ".";
/**
 * This definitions will cater to the Form Definition format
 *
 */
type FieldType = "string" | "number" | "date" | "radio" | "select" | "datetime" | "textarea" | "checkbox" | "serverlookup" | "switch" | "autoComplete" | "password" | "multiSelect" | "dateRange" | "float" | "numbersOnly" | "integer";
type InputType = string | number | Date;
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
    titleAttribute?: string;
}
interface AttributeDefinition {
    attribute: string;
    name?: string;
    defaultValue?: InputType;
    value?: InputType;
    required?: boolean;
    readonly?: boolean;
    hideSelectAll?: boolean;
    mutant?: boolean;
    visible?: boolean;
    disabled?: boolean;
    placeHolder?: string;
    autoFocus?: boolean;
    variant?: 'standard' | 'outlined' | 'filled';
    eventListener?: IFieldEventListener;
    fieldProps?: IFieldProps;
}
interface IFieldProps {
    size?: 'small';
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
interface INumberFieldDefinition extends AttributeDefinition, IDecoration, abstractValidation {
}
interface IIntegerFieldDefinition extends AttributeDefinition, IDecoration, abstractValidation {
}
interface ISwitchDefinition extends AttributeDefinition, IDecoration {
    options: Record<string | number, string | number>;
}
interface ISelectDefinition extends AttributeDefinition, IDecoration {
    options: Record<any, any> | Record<string, any>;
}
interface ICheckboxGroupDefinition extends AttributeDefinition, IDecoration {
    options: Record<any, any> | Record<string, any>;
    flexDirection?: 'column' | 'row';
}
interface ICheckboxDefinition extends AttributeDefinition, IDecoration {
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
    displayAttribute?: string;
    idAttribute?: string;
    multiple?: boolean;
    renderOption?: Function;
    lookupOptions: IFormFieldServerLookup;
    store?: LookupStore<any>;
    storeOptions: {
        endPoint: IEndPoint;
        endPointOptions?: IEndPointOptions;
    };
}
interface IAutoCompleteDefinition extends AttributeDefinition, IDecoration {
    renderOption?: Function;
    lookupOptions: {
        attribute?: string;
    };
    store?: LookupStore<any>;
    storeOptions: {
        endPoint: IEndPoint;
        endPointOptions?: IEndPointOptions;
    };
}
interface IServerLookupDefinition extends AttributeDefinition, IDecoration {
    displayAttribute?: string;
    idAttribute?: string;
    multiple?: boolean;
    renderOption?: Function;
    lookupOptions: IFormFieldServerLookup;
    store?: LookupStore<any>;
    storeOptions: {
        endPoint: IEndPoint;
        endPointOptions?: IEndPointOptions;
    };
}
interface IServerCheckboxDefinition extends AttributeDefinition, IDecoration {
    lookupOptions: IFormFieldServerLookup;
    storeOptions: {
        endPoint: IEndPoint;
        endPointOptions?: IEndPointOptions;
    };
    flexDirection?: 'column' | 'row';
    showSelectedOnly?: boolean;
}
interface IEventListeners {
    onBlur: (data: any) => void;
    onFocus: (data: any) => void;
    onValueChange: (data: any) => void;
    onSearch?: (searchKey: string, limt?: number, offset?: number) => void;
}
interface IFormFieldSelect {
    options?: Record<any, any>;
    defaultSelected: any;
}
interface IFormFieldServerLookup {
    idAttribute?: string;
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
    setData: (d: any, doValidate?: boolean) => void;
    getData: () => any;
    setMeta: (d: string, v: any) => void;
    getMeta: (d: string) => any;
    error: any;
    eventListeners: IEventListeners;
    store?: LookupStore<any>;
    mutateOptions?: IMutateOptions;
    setMutateOptions?: (d: SetStateAction<IMutateOptions>) => void;
}
interface IFieldDefinition extends AttributeDefinition, LookupOptions {
    type: string;
}
type IGetFieldManager = (fieldDef: AttributeDefinition, type: FieldType, ref: MutableRefObject<any>) => IFormFieldManager;
interface IFormFieldInputDefinition extends IFieldDefinition {
    toolkitOptions?: any;
}
interface IFormListener {
    onSaveSuccess?: (data: any) => void;
    onSaveFailure?: (e: any) => void;
    preProcessSaveData?: (data: FormData) => FormData;
}
declare const NoopFormListener: IFormListener;
export type { ITextFieldDefinition, ISelectDefinition, IDateTimeDefinition, IFieldDefinition, AttributeDefinition, FieldType, INumberFieldDefinition, IIntegerFieldDefinition };
export type { IServerCheckboxDefinition, ICheckboxGroupDefinition, IAutoCompleteDefinition, IServerLookupDefinition, ISwitchDefinition, IFormListener, ICheckboxDefinition, IRadioGroupDefinition, strings, numbers };
export type { IEventListeners, IFormFieldError, IFormFieldInput, IFormFieldSelect, IFormFieldInputDefinition, IFormFieldManager, IGetFieldManager, IDecoration };
export { NoopFormListener };
