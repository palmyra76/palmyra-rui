import { MutableRefObject, ReactNode, SetStateAction } from "react";
import { IEndPoint } from "../layout";
import { IMutateOptions } from "./interfaceFields";
import { IEndPointOptions } from "../layout/Types";
import { IFieldEventListener, IFieldValueListener } from ".";
import { LookupStore, DefaultQueryParams } from 'palmyra-wire';

/**
 * This definitions will cater to the Form Definition format
 * 
 */
type FieldType = "string" | "number" | "date" | "radio" | "select" | "iosswitch"
    | "datetime" | "textarea" | "checkbox" | "serverlookup" | "switch" | "autoComplete"
    | "password" | "multiSelect" | "dateRange" | "float" | "numbersOnly" | "integer"
    | "slider" | "sliderRange" | "rating";

type InputType = string | number | Date;

type strings = string | string[];
type numbers = number | number[];

interface IDecoratedTitle {
    title: string,
    toolTip?: string
}

type widgetFn = () => ReactNode;

type ITitle = string | IDecoratedTitle | widgetFn;

// interface RangeValidation<T> {
//     is?: T,
//     min?: T,
//     max?: T,
//     message: string
// }

interface LookupOptions {
    idAttribute?: string,
    titleAttribute?: string
}

interface AttributeDefinition {
    attribute: string,
    name?: string,
    defaultValue?: InputType,
    value?: InputType,
    required?: boolean,
    readonly?: boolean,
    disabled?: boolean,
    placeHolder?: string,
    autoFocus?: boolean,
    eventListener?: IFieldEventListener,
    valueListener?: IFieldValueListener
}

interface validation {
    validation?: IType | IRegex | IValidateFn
}

interface IType {
    type?: string | string[],
    errorMsg?: string | Record<string, string>,
}

interface ILength {
    min?: number,
    max?: number,
    errorMsg?: string
}

interface IRange {
    start?: number,
    end?: number,
    errorMsg?: string
}

interface IRegex {
    regex?: RegExp,
    errorMsg?: string
}

interface IValidateFn {
    validateFn?: (data: any) => boolean,
    errorMsg?: string
}

interface IFormFieldServerLookup {
    idAttribute?: string,
    displayAttribute?: string
}

interface IDecoration {
    customContainerClass?: string,
    customFieldClass?: string,
    customLabelClass?: string,
    className?: string,
    colspan?: number,
    label?: string,
    title?: string
}

type IRadioGroupOptions = Record<any, any> | Record<string, any> | { value: any, label: string }[];


interface ITextFieldDefinition extends AttributeDefinition, validation, IDecoration {
    length?: ILength
}

interface INumberFieldDefinition extends validation, AttributeDefinition, IDecoration {
    range?: IRange
}

interface IIntegerFieldDefinition extends validation, AttributeDefinition, IDecoration {
    range?: IRange
}

interface ISwitchDefinition extends AttributeDefinition, IDecoration {
    options: Record<string | number | any, string | number | boolean>,
    switch?: 'MaterialUISwitch' | 'Android12Switch' | 'IOSSwitch' | 'Switch';
}

interface ISelectDefinition extends AttributeDefinition, IDecoration {
    options: Record<any, any> | Record<string, any>
}

interface IRatingFieldDefinition extends AttributeDefinition, IDecoration {

}

interface IDatePickerDefinition extends AttributeDefinition, IDecoration {
    serverPattern?: string,
    displayPattern?: string,
}

interface IDateTimePickerDefinition extends AttributeDefinition, IDecoration {
    serverPattern?: string,
    displayPattern?: string,
}

interface IRangeSliderDefinition extends AttributeDefinition, IDecoration {
    minDistance?: number,
    range?: boolean
}

interface ICheckboxDefinition extends AttributeDefinition, IDecoration {

}

interface ICheckboxGroupDefinition extends AttributeDefinition, IDecoration {
    options: Record<any, any> | Record<string, any>
}

interface IServerCheckboxDefinition extends AttributeDefinition, IDecoration {
    hideSelectAll?: boolean,
    lookupOptions: IFormFieldServerLookup,
    storeOptions: {
        endPoint: IEndPoint,
        endPointOptions?: IEndPointOptions
    }
    showSelectedOnly?: boolean
    pageSize?: numbers,
    defaultParams?: DefaultQueryParams,
}

interface IRadioGroupDefinition extends AttributeDefinition, IDecoration {
    options: IRadioGroupOptions
}

interface IServerLookupDefinition extends AttributeDefinition, IDecoration {
    displayAttribute?: string,
    idAttribute?: string,
    lookupOptions: IFormFieldServerLookup,
    store?: LookupStore<any>,
    storeOptions: {
        endPoint: IEndPoint,
        endPointOptions?: IEndPointOptions
    }
    fetchDefault?: number,
    pageSize?: numbers,
    defaultParams?: DefaultQueryParams,
}


interface IPasswordDefinition extends AttributeDefinition, IDecoration {
    errorMsg?: Record<string, string>
}

interface IAutoCompleteDefinition extends AttributeDefinition, IDecoration {
    lookupOptions: { attribute?: string },
    store?: LookupStore<any>,
    storeOptions: {
        endPoint: IEndPoint,
        endPointOptions?: IEndPointOptions
    }
}



interface IEventListeners {
    onBlur: (data: any) => void,
    onFocus: (data: any) => void,
    onValueChange: (data: any) => void,
    onSearch?: (searchKey: string, limt?: number, offset?: number) => void
}

interface IFormFieldSelect {
    options?: Record<any, any>,
    defaultSelected: any
}

interface IFormFieldServerLookup {
    idAttribute?: string,
    displayAttribute?: string
}

interface IFormFieldError {
    status: boolean,
    message: string
}

interface IFormFieldInput {
    data: any,
    setData: Function,
    error: any,
    eventListeners: IEventListeners,
    displayValue?: any,
    toolkitOptions?: Record<string, any>,
    select?: IFormFieldSelect,
    lookup?: IFormFieldServerLookup  // TBD- use onSearch and hide the complexity of serverLookup
}

interface IFormFieldManager {
    data: any,
    setData: (d: any, doValidate?: boolean) => void,
    getData: () => any,
    setMeta: (d: string, v: any) => void,
    getMeta: (d: string) => any
    error: any,
    eventListeners: IEventListeners,
    store?: LookupStore<any>,
    mutateOptions?: IMutateOptions,
    setMutateOptions?: (d: SetStateAction<IMutateOptions>) => void
}

interface IFieldDefinition extends AttributeDefinition, LookupOptions {
    type: string
}

type IGetFieldManager = (fieldDef: AttributeDefinition, type: FieldType, ref: MutableRefObject<any>) => IFormFieldManager;

interface IFormFieldInputDefinition extends IFieldDefinition {
    toolkitOptions?: any
}

interface IFormListener {
    onSaveSuccess?: (data: any) => void,
    onSaveFailure?: (e: any) => void,
    preProcessSaveData?: (data: FormData) => FormData
}
interface TextViewAttributeDefinition {
    attribute: string,
    textAlign?: 'left' | 'right' | 'center',
    variant?: 'standard' | 'outlined'
}
interface ITextViewDefinition extends TextViewAttributeDefinition, IDecoration {
}
interface IDateViewDefinition extends TextViewAttributeDefinition, IDecoration {
    displayPattern?: string
}
interface ILookupViewDefinition extends TextViewAttributeDefinition, IDecoration {
    displayAttribute: string,
    lookupOptions?: IFormFieldServerLookup
}

interface IOptionsViewDefinition extends TextViewAttributeDefinition, IDecoration {
    options: Record<any, any> | Record<string, any>
}

const NoopFormListener: IFormListener = {
    onSaveSuccess: function (data: any): void {
    },
    onSaveFailure: function (e: any): void {
        console.error('Error while saving', e);
    }
};

export type {
    ITextFieldDefinition, INumberFieldDefinition, IIntegerFieldDefinition, ISwitchDefinition, IAutoCompleteDefinition,
    ISelectDefinition, IRatingFieldDefinition, IDatePickerDefinition, IDateTimePickerDefinition,
    IRangeSliderDefinition, ICheckboxDefinition, ICheckboxGroupDefinition, IServerCheckboxDefinition,
    IRadioGroupDefinition, IServerLookupDefinition, IPasswordDefinition, IFieldDefinition,
    ITextViewDefinition, ILookupViewDefinition, IOptionsViewDefinition, IDateViewDefinition
}
export type {
    numbers, strings, AttributeDefinition, FieldType, IFormListener,
    ILength, IRange, IRegex, IType, IValidateFn
}

export type { IEventListeners, IFormFieldError, IFormFieldInput, IFormFieldSelect, IFormFieldInputDefinition, IFormFieldManager, IGetFieldManager, IDecoration }

export type {
    ITitle, IDecoratedTitle
}

export { NoopFormListener }