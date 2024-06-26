import { FieldDefinition } from "../form/Definitions";
import { BaseValidator, constructMethod } from "./BaseValidator";


class TextValidator {

    validator = new BaseValidator();

    validate = (format: FieldDefinition) => {
        // Mandatory, Length,
        // Typed Validator: string, alphabets, email, mobilePhone
        let validators = [];
        this.validator.validate;

        if (format.length) {
            var lengthMessage = format.length.errorMsg || 'Invalid size';
            validators.push(constructMethod(getLengthValidator(format), lengthMessage));
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

export default TextValidator;