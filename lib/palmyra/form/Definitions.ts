import { storeBacked } from "../layout/Types";

/**
 * This definitions will cater to the Form Definition format
 * 
 */
type FieldType = "string" | "number"
    | "date" | "radio" | "select"
    | "datetime" | "textarea" | "checkbox" | "serverlookup";

type InputType = string | number | Date;

type FormData = { [key: string]: InputType | FormData }; // Record<string, InputType | FormData>;

type MuiVariant = "outlined" | "standard" | "filled";

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

interface AttributeDefinition extends storeBacked {
    attribute: string,
    displayAttribute?: string, // To be used for select, links etc
    type: FieldType,
    serverPattern?: string,
    displayPattern?: string, // To be used for Date, DateTime etc.,
    options?: Record<string, string>
}

interface FieldDefinition extends AttributeDefinition {
    title: string,
    name?: string,
    hideTitle?: boolean,
    defaultValue?: InputType,
    value?: InputType,
    required?: boolean,
    disabled?: boolean,
    variant?: MuiVariant,
    placeHolder?: string,
    validationRule?: string | string[],
    errorMessage?: Record<string, string>,
    length?: RangeValidation<number>,
    range?: RangeValidation<any>,
    lookupOptions?: LookupOptions // To be used by server lookup
}

interface FieldValidStatus {
    status: boolean;
    message: string;
}

interface MuiFieldDef {
    value: any,
    required?: boolean,
    disabled?: boolean,
    variant: MuiVariant,
    options?: any
}

const getFieldType = (type: string): FieldType => {
    switch (type) {
        case 'string':
            return 'string';
        case 'integer':
        case 'number':
        case 'float':
        case 'decimal':
            return 'string';

        default:
            return 'string';
    }
}

export type { AttributeDefinition, FieldDefinition, FieldValidStatus, FormData, InputType, FieldType, MuiFieldDef };

export { getFieldType }
