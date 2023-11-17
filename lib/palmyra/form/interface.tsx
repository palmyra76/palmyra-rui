import { IEndPoint } from "../layout";
import { LookupStore } from "../store"

/**
 * This definitions will cater to the Form Definition format
 * 
 */
type FieldType = "string" | "number"
    | "date" | "radio" | "select"
    | "datetime" | "textarea" | "checkbox" | "serverlookup" | "switch" | "multiSelect" | "dateRange";

type InputType = string | number;

interface RangeValidation<T> {
    is?: T,
    min?: T,
    max?: T,
    message: string
}

interface LookupOptions {
    idAttribute?: string,
    searchAttribute?: string,
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
    variant?: string
}

interface abstractValidation {
    validationRule?: string | string[],
    errorMessage?: Record<string, string>,
}

interface TextValidation extends abstractValidation {
    length?: RangeValidation<number>,
    regex?: string
}

interface IDecoration {
    customContainerClass?: string,
    customFieldClass?: string,
    customLabelClass?: string,
    colspan?: number,
    label?: string,
    title?: string
}

interface ITextFieldDefinition extends AttributeDefinition, TextValidation, IDecoration {

}

interface ISwitchDefinition extends AttributeDefinition, IDecoration {
    options: Record<string | number, string | number>
}

interface ISelectDefinition extends AttributeDefinition, IDecoration {
    options: Record<any, any> | Record<string, any>
}

interface ICheckboxDefinition extends AttributeDefinition, IDecoration {
    options: Record<any, any> | Record<string, any>,
    flexDirection?: 'column' | 'row'
}

interface IRadioGroupDefinition extends AttributeDefinition, IDecoration {
    options: Record<any, any> | Record<string, any>,
    flexDirection?: 'column' | 'row'
}

interface IDateTimeDefinition extends AttributeDefinition, IDecoration {
    range?: RangeValidation<string>,
    serverPattern?: string,
    displayPattern?: string
}

interface IServerLookupDefinition extends AttributeDefinition, IDecoration {
    lookupOptions: IFormFieldServerLookup,
    store?: LookupStore<any>,
    storeOptions: {
        endPoint: IEndPoint
    }
}

interface IEventListeners {
    onBlur: () => void,
    onFocus: () => void,
    onValueChange: (data: any) => void,
    onSearch?: (searchKey: string, limt?: number, offset?: number) => void
}

interface IFormFieldSelect {
    options?: Record<any, any>,
    defaultSelected: any
}

interface IFormFieldServerLookup {
    idAttribute?: string,
    searchAttribute?: string,
    titleAttribute?: string
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
    setData: Function,
    error: any,
    eventListeners: IEventListeners,
    displayValue?: any,
    store?: LookupStore<any>
}

interface IFieldDefinition extends AttributeDefinition, LookupOptions {
    type: string
}

type IGetFieldManager = (fieldDef: AttributeDefinition, type: FieldType) => IFormFieldManager;

interface IFormFieldInputDefinition extends IFieldDefinition {
    toolkitOptions?: any
}


interface IFormListener {
    onSaveSuccess: (data: any) => void,
    onSaveFailure: (e: any) => void,
    onChange: (attribute: string, value: any) => void
}

const NoopFormListener: IFormListener = {
    onSaveSuccess: function (data: any): void {
    },
    onSaveFailure: function (e: any): void {
        console.error('Error while saving', e);
    },
    onChange: function (attribute: string, value: any): void {
    }
};


export type { ITextFieldDefinition, ISelectDefinition, IDateTimeDefinition, IFieldDefinition, AttributeDefinition, FieldType }
export type { IServerLookupDefinition, ISwitchDefinition, IFormListener, ICheckboxDefinition, IRadioGroupDefinition }
export type { IEventListeners, IFormFieldError, IFormFieldInput, IFormFieldSelect, IFormFieldInputDefinition, IFormFieldManager, IGetFieldManager }

export { NoopFormListener }