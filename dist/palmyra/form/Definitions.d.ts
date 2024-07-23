import { storeBacked } from '../layout/Types';
import { FieldType } from './interface';

type inbuiltValidators = "email" | "password" | 'string' | 'alphabets' | 'number' | 'mobilePhone' | 'port' | 'ip' | 'fqdn' | 'folder' | 'portrange' | 'password' | 'oneLowerCase' | 'oneUpperCase' | 'oneSpecialChar' | 'float' | 'lowercase' | 'uppercase';
interface IValidationMessage {
    type?: FieldType;
    errorMessage?: string | Record<string, string>;
}
interface ILengthValidation {
    length?: {
        min?: number;
        max?: number;
        errorMessage?: string;
    };
}
interface IRangeValidation {
    range?: {
        start?: number;
        end?: number;
        errorMessage?: string;
    };
}
interface IRuleValidation extends IValidationMessage {
    validRule?: inbuiltValidators | string[];
}
interface IRegexValidation extends IValidationMessage {
    regExp?: RegExp;
}
interface IFunctionValidation extends IValidationMessage {
    validFn?: (data: any) => boolean;
}
interface IRequiredValidation {
    required?: boolean;
    missingMessage?: string;
    invalidMessage?: string;
}
interface IValidatableField extends IFunctionValidation, IRequiredValidation, ILengthValidation, IRangeValidation, IRegexValidation, IRuleValidation {
}
type InputType = string | number | Date;
type FormData = {
    [key: string]: InputType | FormData;
};
interface LookupOptions {
    idAttribute?: string;
    displayAttribute?: string;
}
interface AttributeDefinition {
    attribute: string;
    displayAttribute?: string;
    type?: FieldType;
    options?: any;
}
interface DisplayDefinition {
    width?: string;
}
interface ILookupOptions extends storeBacked {
    lookupOptions?: LookupOptions;
}
interface FieldDefinition extends AttributeDefinition, DisplayDefinition, IRequiredValidation {
    name?: string;
    defaultValue?: InputType;
    value?: InputType;
    disabled?: boolean;
    readonly?: boolean;
    visible?: boolean;
    mutant?: boolean;
    placeHolder?: string;
}
interface FieldValidStatus {
    status: boolean;
    message: string;
}
declare const getFieldType: (type: string) => FieldType;
export type { AttributeDefinition, FieldDefinition, FieldValidStatus, FormData, InputType, FieldType };
export type { DisplayDefinition, LookupOptions, ILookupOptions };
export type { ILengthValidation, IFunctionValidation, IRangeValidation, IRequiredValidation, IRegexValidation, IRuleValidation, IValidatableField };
export { getFieldType };
