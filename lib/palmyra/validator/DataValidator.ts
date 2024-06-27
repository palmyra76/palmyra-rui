import validator from 'validator';

import { isFolder, isPortRange } from './Validation';
import { FieldDefinition, FieldValidStatus } from '../form/Definitions';

const getValidators = (fieldDefs: Record<string, FieldDefinition>) => {
    let fieldValidators = {};
    for (var key in fieldDefs) {
        var fieldDef = fieldDefs[key];
        const validator = validate(fieldDef);
        fieldValidators[key] = validator;
    }
    return fieldValidators;
}

const validate = (format: FieldDefinition) => {
    let validators = [];
    let required = format.required;

    if (format.required == true && isRequiredSupported(format)) {
        var message = format.missingMessage || 'This field is mandatory';
        validators.push(constructMethod(isNotEmpty, message));
    }

    if (format.length) {
        var lengthMessage = format.length.errorMsg || 'Invalid size';
        validators.push(constructMethod(getLengthValidator(format), lengthMessage));
    }

    if (format.regExp) {
        const regex: RegExp = format.regExp;
        const error: any = format.errorMessage;
        return (value: any): FieldValidStatus => { return { status: regex.test(value), message: error } }
    }

    if (format.validFn) {
        const validFn: any = format?.validFn;
        const error: any = format?.errorMessage;
        return (value: any): FieldValidStatus => { return { status: validFn(value), message: error } }
    }

    const rules = format.validRule || format.regExp || format.validFn
    if (rules instanceof Array && rules.length > 0) {
        const clause = rules[0];
        validators.push(getRuleValidators(format, clause == 'OR'));
    } else {
        const rule: any = rules;
        var typeValidator = getRuleValidator(format, rule);
        var typeMessage = format.errorMessage || "Invalid";
        validators.push(constructMethod(typeValidator, typeMessage));
    }

    return (value: any): FieldValidStatus => {
        if (!required && isEmpty(value))
            return { status: true, message: '' };

        for (var validator of validators) {
            const validStatus: FieldValidStatus = validator.call(null, value);
            if (!validStatus.status)
                return validStatus;
        }
        return { status: true, message: '' };
    }
}

const getRuleValidators = (format: FieldDefinition, anyMatch: boolean) => {
    var validators = [];
    var rules = format;
    if (rules instanceof Array) {
        rules.map((rule, index) => {
            if (anyMatch && 0 == index)
                return;
            var typeValidator = getRuleValidator(format, rule);
            var typeMessage = format.errorMessage || "Invalid";
            validators.push(constructMethod(typeValidator, typeMessage));
        })
    }

    if (anyMatch) {
        return (value: any): FieldValidStatus => {
            if (validators.length > 0) {
                var message = '';
                for (var validator of validators) {
                    const validStatus: FieldValidStatus = validator.call(null, value);
                    if (validStatus.status) {
                        return validStatus;
                    } else
                        message = validStatus.message;
                }
                return { status: false, message };
            }
        }
    } else {
        return (value: any): FieldValidStatus => {
            for (var validator of validators) {
                const validStatus: FieldValidStatus = validator.call(null, value);
                if (!validStatus.status)
                    return validStatus;
            }
            return { status: true, message: '' };
        }
    }
}

const getLengthValidator = (format: FieldDefinition) => {
    if (format.length) {
        // const length = format.length.is;
        const minLength = format.length.min;
        const maxLength = format.length.max;

        if (length) {
            return (val) => { return val.length == length; };
        } else if (minLength) {
            if (maxLength) {
                return (val) => {
                    const l = val.length;
                    return minLength <= l && l <= maxLength;
                }
            } else {
                return (val) => {
                    return minLength <= val.length;
                }
            }
        } else {
            if (maxLength) {
                return (val) => {
                    return val.length <= maxLength;
                }
            }
        }
    }
}

// const getFormatValidator = (format) => {

// }

// const getConstraintValidator = (format) => {

// }

// const getRangeValidator = (format) => {

// }

const getRuleValidator = (format: FieldDefinition, rule: string) => {
    if (rule) {
        switch (rule) {
            case 'string':
                return noopValid;
            case 'alphabets':
                return validator.isAlpha;
            case 'date':
                return validator.isDate;
            case 'time':
                return validator.isTime;
            case 'number':
                return isNumeric;
            case 'email':
                return validator.isEmail;
            case 'mobilePhone':
                return validator.isMobilePhone;
            case 'port':
                return validator.isPort;
            case 'ip':
                return validator.isIP;
            case 'fqdn':
                return validator.isFQDN;
            case 'folder':
                return isFolder;
            case 'portrange':
                return isPortRange;
            case 'password':
                return validator.isStrongPassword;
            case 'lowercase':
                return validator.isLowercase;
            case 'uppercase':
                return validator.isUppercase;
            case 'oneLowerCase':
                return oneLowerCase;
            case 'oneUpperCase':
                return oneUpperCase;
            case 'oneSpecialChar':
                return oneSpecialChar;
            case 'float':
                return isFloat;
        }
    }
    return noopValid;
}

const noopValid = () => {
    return true;
}

const oneLowerCase = (val) => {
    const regex = /^(.*[a-z].*)$/;
    return regex.test(val);
}

const oneUpperCase = (val) => {
    const regex = /^(.*[A-Z].*)$/;
    return regex.test(val);
}

const oneSpecialChar = (val) => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(val);
}

const isEmpty = (val) => {
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

const isNotEmpty = (val) => {
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

const isNumeric = (val: any) => {
    const v = (typeof val == "number" ? val.toString() : val)
    return validator.isNumeric(v);
}

const isFloat = (val: any) => {
    const v = (typeof val == "number" ? val.toString() : val)
    return validator.isFloat(v);
}

export default validate;

export { getValidators };

function isRequiredSupported(format: FieldDefinition) {
    switch (format.type) {
        case 'switch':
            return false;

        default:
            return true;
    }
    return true;
}