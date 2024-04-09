import { FC } from "react";
import { FieldDefinition, FieldValidStatus } from "../form/Definitions";
import validator from 'validator';

interface validator {
    validate: FC
}

class BaseValidator {

    validate = (format: FieldDefinition) => {
        // Mandatory Check 

        let validators = [];
        let required = format.required;

        if (required == true && isRequiredSupported(format)) {
            var message = format.errorMessage?.required || 'This field is mandatory';
            validators.push(constructMethod(isNotEmpty, message));
        }
    }
}

const isEmpty = (val: any) => {
    if (val == undefined || val == null) {
        return true;
    }

    if (typeof val == "number")
        return false;

    if (typeof val == 'string')
        return validator.isEmpty(val);

    if (val instanceof Array) {
        return val.length == 0;
    }

    return (!val);
}

const isNotEmpty = (val: any) => {
    return !isEmpty(val);
}

function constructMethod(func, message) {
    return (val): FieldValidStatus => {
        if (func.call(null, val)) {
            return { status: true, message: '' };
        } else {
            return { status: false, message };
        }
    };
}

function isRequiredSupported(format: FieldDefinition) {
    switch (format.type) {
        case 'switch':
            return false;

        default:
            return true;
    }
}

export { isEmpty, isNotEmpty, constructMethod, isRequiredSupported }
export { validator };
export { BaseValidator };