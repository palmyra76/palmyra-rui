import { DefaultQueryParams, IEndPoint, IEndPointOptions, LookupStore } from "palmyra-wire";
import { IFieldEventListener, IFieldValueListener } from "../form";

/**
 * This definitions will cater to the Form Definition format
 * 
 */

type InputType = string | number | Date;

type numbers = number | number[];

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
    variant?: 'standard' | 'outlined' | 'filled',
    eventListener?: IFieldEventListener,
    valueListener?: IFieldValueListener,
    fieldProps?: IFieldProps
}

interface IFieldProps {
    size?: 'small' | 'medium' | 'large'
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

interface IDateRangePickerValue {
    from?: Date,
    to?: Date
}

interface IDateRangePickerLabel {
    from?: string,
    to?: string
}

interface IDateRangePickerBoolean {
    from?: boolean,
    to?: boolean
}

interface RangeValidation<T> {
    is?: T,
    min?: T,
    max?: T,
    message: string
}

interface ValueLabel {
    value: number,
    label: string
}

interface IServerLookupDefinition extends AttributeDefinition, IDecoration {
    displayAttribute?: string,
    idAttribute?: string,
    multiple?: boolean,
    renderOption?: Function,
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

interface ITextFieldDefinition extends validation, AttributeDefinition, IDecoration {
    length?: ILength
}

interface ITextAreaDefinition extends validation, AttributeDefinition, IDecoration {
    length?: ILength
}

interface INumberFieldDefinition extends validation, AttributeDefinition, IDecoration {
    range?: IRange
}

interface IIntegerFieldDefinition extends validation, AttributeDefinition, IDecoration {
    range?: IRange
}

interface IPasswordDefinition extends AttributeDefinition, IDecoration {
    errorMsg?: Record<string, string>
}

interface IDateFieldDef {
    serverPattern?: string,
    displayPattern?: string,
    disableFuture?: boolean,
    disablePast?: boolean,
    disableHighlightToday?: boolean,
    displayWeekNumber?: boolean,
}

interface IDatePickerDefinition extends AttributeDefinition, IDecoration, IDateFieldDef {
    range?: {
        maxDate?: object,
        minDate?: object
    }
}

interface IDateTimePickerDefinition extends AttributeDefinition, IDecoration, IDateFieldDef {
    range?: {
        maxDate?: object,
        minDate?: object,
        maxDateTime?: object,
        minDateTime?: object,
        maxTime?: object,
        minTime?: object,
    }
}

interface IRangeSliderDefinition extends AttributeDefinition, validation, IDecoration {
    minDistance?: number,
    range?: boolean,
    sliderProps?: {
        disableSwap?: boolean,
        valueLabelDisplay?: 'auto' | 'on' | 'off',
        min?: number,
        max?: number,
        step?: number,
        marks?: boolean | ValueLabel[]
    }
}

interface IRatingFieldDefinition extends AttributeDefinition, IDecoration {
    precision?: number,
    max?: number,
    icon?: any,
    emptyIcon?: any
}

interface ICheckboxDefinition extends AttributeDefinition, IDecoration {
    icon?: any,
    checkedIcon?: any
}

// interface IDateRangePickerDefinition {
//     attribute: string,
//     name?: string,
//     defaultValue?: IDateRangePickerValue,
//     value?: IDateRangePickerValue,
//     required?: IDateRangePickerBoolean,
//     readonly?: IDateRangePickerBoolean,
//     disabled?: IDateRangePickerBoolean,
//     placeHolder?: string,
//     autoFocus?: IDateRangePickerBoolean,
//     variant?: 'standard' | 'outlined' | 'filled',
//     eventListener?: IFieldEventListener,
//     valueListener?: IFieldValueListener,
//     fieldProps?: IFieldProps,
//     label?: IDateRangePickerLabel,
//     title?: string,
//     range?: RangeValidation<string>,
//     serverPattern?: string,
//     displayPattern?: string,
//     disableFuture?: IDateRangePickerBoolean,
//     disablePast?: IDateRangePickerBoolean,
//     disableHighLightToday?: IDateRangePickerBoolean,
//     disableWeekNumber?: IDateRangePickerBoolean
//     customContainerClass?: string,
//     customFieldClass?: string,
//     customLabelClass?: string,
//     className?: string,
//     colspan?: number
// }


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



export type {
    AttributeDefinition, IDecoration, ILength, IRange, IType, IRegex, IValidateFn, IDateRangePickerLabel
}

export type {
    ITextFieldDefinition, INumberFieldDefinition, ITextAreaDefinition, IIntegerFieldDefinition, IPasswordDefinition, IRatingFieldDefinition,
    IServerLookupDefinition, IDatePickerDefinition, IDateTimePickerDefinition, IRangeSliderDefinition, ICheckboxDefinition
}

export type {
    ITextViewDefinition, ILookupViewDefinition, IOptionsViewDefinition, IDateViewDefinition
}