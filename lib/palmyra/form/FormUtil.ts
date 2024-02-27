import { AttributeDefinition, InputType, FormData } from "./Definitions";

const getValueByKey = (fieldName: string, data: any): InputType => {
    if (data === undefined || data == null) {
        return undefined;
    }

    var index = fieldName.indexOf('.')
    if (index < 0) {
        return data[fieldName];
    }

    var objKey = fieldName.substring(0, index);
    var fieldKey = fieldName.substring(index + 1);

    return getValueByKey(fieldKey, data[objKey]);
}

const setValueByKey = (fieldName: string, data: any, value: InputType): void => {

    var index = fieldName.indexOf('.')
    if (index < 0) {
        data[fieldName] = value;
        return;
    }

    var objKey = fieldName.substring(0, index);
    var fieldKey = fieldName.substring(index + 1);

    if (data[objKey] === undefined || data[objKey] == null) {
        data[objKey] = {};
    }

    return setValueByKey(fieldKey, data[objKey], value);
}

const getDisplayValue = (field: AttributeDefinition, data: FormData) => {
    const value: any = getValueByKey(field.attribute, data);
    return formatValue(field, value);
}

const formatValue = (field: AttributeDefinition, value: any) => {
    const type = field.type || 'string';
    switch (type) {
        case 'date':
            return getDateValue(value, field);
        case 'radio':
        case 'select':
        case 'checkbox':
        case 'iosswitch':
            return getOptionsValue(value, field);
        case 'switch':
            return getOptionsValue(value, field);
        case 'datetime':
            return getDateTimeValue(value, field);
        case 'serverlookup':
            return getServerLookUp(value, field);
        case 'textarea':
            return getTextArea(value, field);
        case 'password':
            return getPassword(value, field);
        case 'numbersOnly':
            return getNumberValue(value, field);
        case 'integer':
            return getIntegerValue(value, field);
        case 'autoComplete':
            return getAutoCompleteValue(value, field);
        default:
            return getTextValue(value, field);
    }
}

const getDateValue = (value: InputType, field: AttributeDefinition) => {
    //TODO : value to be converted
    return value;
}

const getDateTimeValue = (value: InputType, field: AttributeDefinition) => {
    //TODO : value to be converted
    return value;
}

const getTextValue = (value: InputType, field: AttributeDefinition) => {
    if (value instanceof Object)
        return JSON.stringify(value);
    return value;
}

const getTextArea = (value: InputType, field: AttributeDefinition) => {
    return value;
}

const getNumberValue = (value: InputType, field: AttributeDefinition) => {
    return value;
}

const getIntegerValue = (value: InputType, field: AttributeDefinition) => {
    return value;
}

const getAutoCompleteValue = (value: InputType, field: AttributeDefinition) => {
    return value;
}

const getPassword = (value: InputType, field: AttributeDefinition) => {
    return value;
}

const getOptionsValue = (value: string, field: AttributeDefinition) => {
    var options = field.options;
    return options[value];
}

const getServerLookUp = (value: string, field: AttributeDefinition) => {
    return value;
}

export { getValueByKey, setValueByKey, getDisplayValue, formatValue };