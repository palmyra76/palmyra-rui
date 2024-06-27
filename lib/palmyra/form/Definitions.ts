
import { storeBacked } from "../layout/Types";
import { FieldType } from "./interface";

type validators = "email" | "password" 
type validationOptions = validators | "regExp" | "validFn" | string;

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

interface IType {
    type?: string | string[],
    errorMsg?: string | Record<string, string>,
}

interface IRegex {
    regex?: RegExp,
    errorMsg?: string
}

interface IValidateFn {
    validateFn?: (data: any) => boolean,
    errorMsg?: string
}

interface IValidation {
    regExp?: RegExp
    validRule?: String
    validFn?: (data: any) => boolean | string
    errorMessage?: string | Partial<Record<validationOptions, string>>
}

type InputType = string | number | Date;
type FormData = { [key: string]: InputType | FormData };
type MuiVariant = "outlined" | "standard" | "filled";

interface LookupOptions {
    idAttribute?: string,
    titleAttribute?: string,
    attribute?: string
}

interface AttributeDefinition extends storeBacked {
    attribute: string,
    displayAttribute?: string, // To be used for links etc
    type: FieldType,
    serverPattern?: string,
    displayPattern?: string, // To be used for Date, DateTime etc.,
    options?: any
}

interface DisplayDefinition {
    width?: string
}

interface FieldDefinition extends
    AttributeDefinition, DisplayDefinition, IValidation {
    title?: string,
    label?: string,
    name?: string,
    hideTitle?: boolean,
    defaultValue?: InputType,
    value?: InputType,
    required?: boolean,
    disabled?: boolean,
    readonly?: boolean,
    visible?: boolean,
    mutant?: boolean,
    placeHolder?: string,
    length?: ILength,
    range?: IRange,
    missingMessage?: string,
    invalidMessage?: string,
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
export type { DisplayDefinition, LookupOptions }

export type { IType, IRegex, IValidateFn }
export { getFieldType }
