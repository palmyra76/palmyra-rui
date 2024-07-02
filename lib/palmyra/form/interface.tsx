import { MutableRefObject, ReactNode, SetStateAction } from "react";
import { IEndPoint } from "../layout";
import { IMutateOptions } from "./interfaceFields";
import { IEndPointOptions } from "../layout/Types";
import { LookupStore, DefaultQueryParams } from 'palmyra-wire';
import { FieldDefinition, IFunctionValidation, ILengthValidation, IRangeValidation, IRegexValidation, IRuleValidation, LookupOptions } from "./Definitions";
import { IFieldEventListener, IFieldValueListener } from "./Types";
import { numbers } from "../utils/CommonTypes";

/**
 * This definitions will cater to the Form Definition format 
 */
type FieldType = "string" | "number" | "date" | "radio" | "select" | "iosswitch"
    | "datetime" | "textarea" | "checkbox" | "serverlookup" | "switch" | "autoComplete"
    | "password" | "multiSelect" | "dateRange" | "float" | "numbersOnly" | "integer"
    | "slider" | "sliderRange" | "rating";



interface IDecoratedTitle {
    title: string,
    toolTip?: string
}

interface IPattern {
    serverPattern?: string,
    displayPattern?: string,
}

type widgetFn = () => ReactNode;
type ITitle = string | IDecoratedTitle | widgetFn;


interface IAbstractField extends FieldDefinition {
    autoFocus?: boolean,
    eventListener?: IFieldEventListener,
    valueListener?: IFieldValueListener
}

// interface IFormFieldServerLookup {
//     idAttribute?: string,
//     displayAttribute?: string
// }

interface IDecoration {
    customContainerClass?: string,
    customFieldClass?: string,
    customLabelClass?: string,
    className?: string,
    colspan?: number,
    label?: string,
    labelMode?: 'header' | 'title'
}

type IRadioGroupOptions = Record<any, any> | Record<string, any> | { value: any, label: string }[];


interface ITextFieldDefinition extends IAbstractField, IDecoration,
    ILengthValidation, IFunctionValidation, IRuleValidation, IRegexValidation {

}

interface INumberFieldDefinition extends IAbstractField, IDecoration,
    IRangeValidation, IFunctionValidation, IRuleValidation, IRegexValidation {

}

interface IIntegerFieldDefinition extends IAbstractField, IDecoration,
    IRangeValidation, IFunctionValidation, IRuleValidation, IRegexValidation {

}

interface ISwitchDefinition extends IAbstractField, IDecoration {
    options: Record<string | number | any, string | number | boolean>,
    switch?: 'MaterialUISwitch' | 'Android12Switch' | 'IOSSwitch' | 'Switch';
}

interface ISelectDefinition extends IAbstractField, IDecoration {
    options: Record<any, any> | Record<string, any>
}

interface IRatingFieldDefinition extends IAbstractField, IDecoration {

}

interface IDatePickerDefinition extends IAbstractField, IDecoration, IPattern {

}

interface IDateTimePickerDefinition extends IAbstractField, IDecoration, IPattern {
}

interface IRangeSliderDefinition extends IAbstractField, IDecoration {
    minDistance?: number,
    range?: never
}

interface ICheckboxDefinition extends IAbstractField, IDecoration {

}

interface ICheckboxGroupDefinition extends IAbstractField, IDecoration {
    options: Record<any, any> | Record<string, any>
}

interface IServerCheckboxDefinition extends IAbstractField, IDecoration {
    hideSelectAll?: boolean,
    lookupOptions: LookupOptions,
    storeOptions: {
        endPoint: IEndPoint,
        endPointOptions?: IEndPointOptions
    }
    showSelectedOnly?: boolean
    pageSize?: numbers,
    defaultParams?: DefaultQueryParams,
}

interface IRadioGroupDefinition extends IAbstractField, IDecoration {
    options: IRadioGroupOptions
}

interface IServerLookupDefinition extends IAbstractField, IDecoration {
    displayAttribute?: string,
    idAttribute?: string,
    lookupOptions: LookupOptions,
    store?: LookupStore<any>,
    storeOptions: {
        endPoint: IEndPoint,
        endPointOptions?: IEndPointOptions
    }
    fetchDefault?: number,
    pageSize?: numbers,
    defaultParams?: DefaultQueryParams,
}


interface IPasswordDefinition extends IAbstractField, IDecoration,
    ILengthValidation, IFunctionValidation, IRuleValidation, IRegexValidation {
}

interface IAutoCompleteDefinition extends IAbstractField, IDecoration {
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

// interface IFormFieldServerLookup {
//     idAttribute?: string,
//     displayAttribute?: string
// }

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
    lookup?: LookupOptions  // TBD- use onSearch and hide the complexity of serverLookup
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

// interface IFieldDefinition extends IAbstractField {
//     type: string
// }

type IGetFieldManager = (fieldDef: IAbstractField, type: FieldType, ref: MutableRefObject<any>) => IFormFieldManager;

// interface IFormFieldInputDefinition extends IFieldDefinition {
//     toolkitOptions?: any
// }

interface IFormListener {
    onSaveSuccess?: (data: any) => void,
    onSaveFailure?: (e: any) => void,
    preProcessSaveData?: (data: FormData) => FormData
}
interface TextViewAttributeDefinition extends IAbstractField {
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
    lookupOptions?: LookupOptions
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
    IRadioGroupDefinition, IServerLookupDefinition, IPasswordDefinition,
    ITextViewDefinition, ILookupViewDefinition, IOptionsViewDefinition, IDateViewDefinition
}
export type {
    FieldType, IFormListener, IAbstractField
}

export type {
    IEventListeners, IFormFieldError, IFormFieldInput,
    IFormFieldSelect, IFormFieldManager, IGetFieldManager, IDecoration
}

export type {
    IPattern, ITitle, IDecoratedTitle,
}

export { NoopFormListener }