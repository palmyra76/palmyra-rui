
type FieldType = "string" | "number"
    | "date";

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
    required?: boolean,
    disabled?: boolean,
    variant?: MuiVariant,
    type: FieldType,
    errorMessageType?: string,
    length?: LengthValidation,
    options?: Record<string, string>
}

interface FieldRuntime {
    eventHandler?: Record<FieldEvents, Function>,
    onDataChange: Function,
    constraint?: Function
}

interface FieldValidStatus {
    status: boolean;
    message: string;
}

interface FieldProperties {
    fieldDef: FieldDefinition,
    runtime?: FieldRuntime,
    value: any
}


export type { FieldDefinition, FieldRuntime, FieldValidStatus, FieldProperties };