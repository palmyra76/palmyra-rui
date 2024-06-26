import { default as validator } from 'validator';
import { FieldDefinition, FieldValidStatus } from '../form/Definitions';
import { FC } from 'react';

interface validator {
    validate: FC;
}
declare class BaseValidator {
    validate: (format: FieldDefinition) => void;
}
declare const isEmpty: (val: any) => any;
declare const isNotEmpty: (val: any) => boolean;
declare function constructMethod(func: any, message: any): (val: any) => FieldValidStatus;
declare function isRequiredSupported(format: FieldDefinition): boolean;
export { isEmpty, isNotEmpty, constructMethod, isRequiredSupported };
export { validator };
export { BaseValidator };
