import { QueryStore } from "../store"
import { FieldDefinition } from "./Definitions"

interface IEventListeners {
    onBlur: () => void,
    onFocus: () => void,
    onValueChange: (data: any) => void,
    onSearch?: (data: string) => void
}

interface IFormFieldSelect {
    options?: Record<any, any>,
    defaultSelected: any
}

interface IFormFieldServerLookup {
    idAttribute?: string,
    searchAttribute?: string,
    titleAttribute?: string,
    store?: QueryStore<any>
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
    eventListeners: IEventListeners
}

// interface IFormFieldInput {
//     data: any,
//     setData: Function,
//     error: any,
//     eventListeners: IEventListeners,
//     displayValue?: any,
//     toolkitOptions?: Record<string, any>,
//     select?: IFormFieldSelect,
//     lookup?: IFormFieldServerLookup  // TBD- use onSearch and hide the complexity of serverLookup
// }

type IGetFieldManager = (fieldDef: FieldDefinition) => IFormFieldManager;

interface IFormFieldInputDefinition extends FieldDefinition{    
    getFieldManager: IGetFieldManager
}

export type { IEventListeners, IFormFieldError, IFormFieldInput, IFormFieldSelect, IFormFieldInputDefinition, IFormFieldManager }