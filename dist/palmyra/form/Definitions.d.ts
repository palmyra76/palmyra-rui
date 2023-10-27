import { storeBacked } from "../layout/Types";
import { FieldType } from "./interface";
/**
 * This definitions will cater to the Form Definition format
 *
 */
type InputType = string | number | Date;
type FormData = {
    [key: string]: InputType | FormData;
};
type MuiVariant = "outlined" | "standard" | "filled";
interface RangeValidation<T> {
    is?: T;
    min?: T;
    max?: T;
    message: string;
}
interface LookupOptions {
    idAttribute?: string;
    searchAttribute?: string;
    titleAttribute?: string;
}
interface AttributeDefinition extends storeBacked {
    attribute: string;
    displayAttribute?: string;
    type: FieldType;
    serverPattern?: string;
    displayPattern?: string;
    options?: Record<string, string>;
}
interface FieldDefinition extends AttributeDefinition {
    title: string;
    name?: string;
    hideTitle?: boolean;
    defaultValue?: InputType;
    value?: InputType;
    required?: boolean;
    disabled?: boolean;
    variant?: MuiVariant;
    placeHolder?: string;
    validationRule?: string | string[];
    errorMessage?: Record<string, string>;
    length?: RangeValidation<number>;
    range?: RangeValidation<any>;
    lookupOptions?: LookupOptions;
}
interface FieldValidStatus {
    status: boolean;
    message: string;
}
interface MuiFieldDef {
    value: any;
    required?: boolean;
    disabled?: boolean;
    variant: MuiVariant;
    options?: any;
}
declare const getFieldType: (type: string) => FieldType;
export type { AttributeDefinition, FieldDefinition, FieldValidStatus, FormData, InputType, FieldType, MuiFieldDef };
export { getFieldType };
