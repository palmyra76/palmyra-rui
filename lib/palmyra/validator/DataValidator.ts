import validator from 'validator';
import { isFolder, isPortRange } from './Validation';
import { FieldDefinition, FieldValidStatus, IValidatableField } from '../form/Definitions';

const getValidators = (fieldDefs: Record<string, FieldDefinition>) => {
    let fieldValidators = {};
    for (var key in fieldDefs) {
        const fieldDef: FieldDefinition = fieldDefs[key];
        const validator = validate(fieldDef);
        fieldValidators[key] = validator;
    }
    return fieldValidators;
}

const validate = (format: IValidatableField) => {
    let validators = [];
    let required = format.required;

    if (format.required == true && isRequiredSupported(format)) {
        var message = format.missingMessage || 'This field is mandatory';
        validators.push(constructMethod(isNotEmpty, message));
    }

    if (format.length) {
        var lengthMessage = format.length.errorMessage || format.errorMessage["length"] || 'Invalid size';
        validators.push(constructMethod(getLengthValidator(format), lengthMessage));
    }

    if (format.range) {
        var rangeMessage = format.range.errorMessage || format.errorMessage["range"] || 'Invalid range';
        validators.push(constructMethod(getRangeValidator(format), rangeMessage));
    }

    if (format.regExp) {
        var regexMessage = format.errorMessage["regExp"] || format.errorMessage || "Invalid data";
        validators.push(constructMethod(getRegexValidator(format), regexMessage))
    }

    if (format.validFn) {
        var validFnMessage = format.errorMessage["validFn"] || format.errorMessage || "Invalid data";
        validators.push(constructMethod(getValidFnValidator(format), validFnMessage))
    }

    const rules = format.validRule || format.regExp || format.validFn
    if (rules instanceof Array && rules.length > 0) {
        const clause = rules[0];
        validators.push(getRuleValidators(format, clause == 'OR'));
    } else {
        const rule: any = rules;
        var typeValidator = getRuleValidator(format, rule);
        var validRule: any = format?.validRule;
        var typeMessage = format?.errorMessage || format.errorMessage[validRule] || "Invalid";
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

const getRuleValidators = (format: IValidatableField, anyMatch: boolean) => {
    var validators = [];
    var rules = format;
    if (rules instanceof Array) {
        rules.map((rule, index) => {
            if (anyMatch && 0 == index)
                return;
            var typeValidator = getRuleValidator(format, rule);
            var validRule: any = format.validRule;
            var typeMessage = format.errorMessage || format.errorMessage[validRule] || "Invalid";
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

const getLengthValidator = (format: IValidatableField) => {
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

const getRangeValidator = (format) => {
    if (format.range) {
        const start = format.range.start;
        const end = format.range.end;

        if (start) {
            if (end) {
                return (val) => {
                    const r = val;
                    return start <= r && r <= end;
                }
            } else {
                return (val) => {
                    return start <= val;
                }
            }
        } else {
            if (end) {
                return (val) => {
                    return val <= end;
                }
            }
        }
    }
}

const getRegexValidator = (format) => {
    const regExp = format.regExp;
    return (value: any) => { return regExp.test(value) }
}

const getValidFnValidator = (format) => {
    const validFn = format.validFn;
    return (value: any) => { return validFn(value) }
}

const getRuleValidator = (format: IValidatableField, rule: string) => {
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

function isRequiredSupported(format: IValidatableField) {
    switch (format.type) {
        case 'switch':
            return false;

        default:
            return true;
    }
    return true;
}