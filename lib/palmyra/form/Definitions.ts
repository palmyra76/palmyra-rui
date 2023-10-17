/**
 * This definitions will cater to the Form Definition format
 * 
 */
type FieldType = "string" | "number"
    | "date" | "radio" | "select"
    | "datetime" | "textarea" | "checkbox" | "serverlookup";

type InputType = string | number | Date;

type FormData = { [key: string]: InputType | FormData }; // Record<string, InputType | FormData>;

type MuiVariant = "outline" | "standard";


interface LengthValidation {
    min: number,
    max: number,
    message: string
}

interface FieldDefinition {
    attribute: string,
    title: string,
    hideTitle: boolean,
    defaultValue?: InputType,
    value?: InputType,
    targetUrl?: string,
    required?: boolean,
    disabled?: boolean,
    variant?: MuiVariant,
    type: FieldType,
    validationRule?: string | string[],
    errorMessageType?: string,
    length?: LengthValidation,
    options?: Record<string, string>
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


export type { FieldDefinition, FieldValidStatus, FormData, InputType, MuiFieldDef };