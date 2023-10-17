import validator from 'validator';

import { isHost, isFolder, isPortRange } from './Validation';
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

    if (format.required == true) {
        var message = format.errorMessage?.required || 'This field is mandatory';
        validators.push(constructMethod(isNotEmpty, message));
    }

    if (format.length) {
        var lengthMessage = format.length.message || 'Invalid size';
        validators.push(constructMethod(getLengthValidator(format), lengthMessage));
    }

    if (format.validationRule) {
        var rules = format.validationRule;
        if (rules instanceof Array) {
            rules.map((rule, index) => {
                var typeValidator = getRuleValidator(format, rule);
                var typeMessage = format.errorMessage?.[rule] || "Invalid";
                validators.push(constructMethod(typeValidator, typeMessage));
            })
        } else {
            const rule = rules;
            var typeValidator = getRuleValidator(format, rule);
            var typeMessage = format.errorMessage?.[rule] || "Invalid";
            validators.push(constructMethod(typeValidator, typeMessage));
        }
    }

    return (value:any):FieldValidStatus => {
        if (!required && isEmpty(value))
            return {status:true, message:''};

        for (var validator of validators) {            
            const validStatus:FieldValidStatus = validator.call(null, value);
            if(!validStatus.status)
                return validStatus;
        }
        return {status:true, message:''};
    }
}

const getLengthValidator = (format: FieldDefinition) => {
    if (format.length) {
        const length = format.length.is;
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
                return validator.isNumeric;
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
            case 'host':
                return isHost;
            case 'folder':
                return isFolder;
            case 'portrange':
                return isPortRange;
        }
    }
    return noopValid;
}

const noopValid = () => {
    return true;
}

const isEmpty = (val) => {
    if (val == undefined || val == null) {
        return true;
    }
    return validator.isEmpty(val);
}

const isNotEmpty = (val) => {
    if (val == undefined || val == null) {
        return false;
    }
    return !validator.isEmpty(val);
}

function constructMethod(func, message) {
    return (val):FieldValidStatus => {
        if (func.call(null, val)) {
            return {status:true, message:''};
        } else {
            return {status:false, message};
        }
    };
}

export default validate;

export { getValidators };