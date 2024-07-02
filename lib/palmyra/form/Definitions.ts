
import { storeBacked } from "../layout/Types";
import { FieldType } from "./interface";

type inbuiltValidators = "email" | "password" | 'string' | 'alphabets' | 'number' | 'mobilePhone' | 'port' |
    'ip' | 'fqdn' | 'folder' | 'portrange' | 'password' | 'oneLowerCase' | 'oneUpperCase' | 'oneSpecialChar'
    | 'float' | 'lowercase' | 'uppercase'

// type validationOptions = inbuiltValidators | "regExp" | "validFn" | string;

interface IValidationMessage {
    type?: FieldType,
    errorMessage?: string | Record<string, string>
}

interface ILengthValidation {
    length?: {
        min?: number,
        max?: number,
        errorMessage?: string
    }
}

interface IRangeValidation {
    range?: {
        start?: number,
        end?: number
        errorMessage?: string
    }
}

interface IRuleValidation extends IValidationMessage {
    validRule?: inbuiltValidators | string[]
}

interface IRegexValidation extends IValidationMessage {
    regExp?: RegExp
}

interface IFunctionValidation extends IValidationMessage {
    validFn?: (data: any) => boolean
}

interface IRequiredValidation {
    required?: boolean,
    missingMessage?: string,
    invalidMessage?: string,
}

interface IValidatableField extends IFunctionValidation, IRequiredValidation,
    ILengthValidation, IRangeValidation, IRegexValidation, IRuleValidation {

}

// interface IValidation {
//     regExp?: RegExp
//     validRule?: String
//     validFn?: (data: any) => boolean | string
//     errorMessage?: string | Partial<Record<validationOptions, string>>
// }

type InputType = string | number | Date;
type FormData = { [key: string]: InputType | FormData };

interface LookupOptions {
    idAttribute?: string,
    displayAttribute?: string
}

interface AttributeDefinition {
    attribute: string,
    displayAttribute?: string, // To be used for links etc
    type?: FieldType,
    options?: any
}

interface DisplayDefinition {
    width?: string
}

interface ILookupOptions extends storeBacked {
    lookupOptions?: LookupOptions // To be used by server lookup
}

interface FieldDefinition extends
    AttributeDefinition, DisplayDefinition, IRequiredValidation {
    title?: string,
    label?: string,
    name?: string,
    hideTitle?: boolean,
    defaultValue?: InputType,
    value?: InputType,
    disabled?: boolean,
    readonly?: boolean,
    visible?: boolean,
    mutant?: boolean,
    placeHolder?: string
}

interface FieldValidStatus {
    status: boolean;
    message: string;
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

export type { AttributeDefinition, FieldDefinition, FieldValidStatus, FormData, InputType, FieldType };
export type { DisplayDefinition, LookupOptions, ILookupOptions }

export type {
    ILengthValidation, IFunctionValidation, IRangeValidation, IRequiredValidation,
    IRegexValidation, IRuleValidation, IValidatableField
}

export { getFieldType }
