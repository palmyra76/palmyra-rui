
type FieldType = "string" | "number"
    | "date" | "radio" | "select"
    | "datetime" | "textarea" | "checkbox" | "serverlookup";

type InputType = string | number | Date;

type FormData = { [key: string]: InputType | FormData }; // Record<string, InputType | FormData>;
type EventHandler = Record<FieldEvents, Function>;
type MuiVariant = "outline" | "standard";
type FieldEvents = "onEntryComplete" | "onEntryClear" | "asyncValid";

interface LengthValidation {
    min: number,
    max: number,
    message: string
}

interface FieldDefinition {
    attribute: string,
    label: string,
    defaultValue?: InputType,
    value?: InputType,
    targetUrl?: string,
    required?: boolean,
    disabled?: boolean,
    variant?: MuiVariant,
    type: FieldType,
    errorMessageType?: string,
    length?: LengthValidation,
    options?: Record<string, string>
}

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


interface FieldValidStatus {
    status: boolean;
    message: string;
}

interface FieldProperties {
    fieldDef: FieldDefinition,
    runtime?: FieldContext,
    value: any
}


export type { FieldDefinition, FieldContext, FieldValidStatus, FieldProperties, FormData, FormContext};

export type { InputType, EventHandler };