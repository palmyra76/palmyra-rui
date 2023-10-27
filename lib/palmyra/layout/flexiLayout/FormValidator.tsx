/**
 * Custom Hook for form validation
 */

import { getValidators } from "../../validator/DataValidator";
import { FlexiLayoutDefinition } from "./Definitions";
import { getValueByKey, setValueByKey } from "../../form/FormUtil";
import { FieldDefinition, FieldValidStatus } from "../../form/Definitions";
import { useRef } from "react";
import { mergeDeep } from "../../utils";
import { FormMode } from "../../form/Types";
import { FlexiLayoutRendererInput } from "./Types";


const calcValidationStatus = (incomingData, validFunctions) => {
    var validity = {};
    for (var field in validFunctions) {
        var validator = validFunctions[field];
        var value = getValueByKey(field, incomingData);
        var isValid: FieldValidStatus = validator(value);
        validity[field] = isValid.status;
    }
    return validity;
}

const initValidStatus = (fieldDefs: Record<string, FieldDefinition>) => {
    var validity = {};
    for (var name in fieldDefs) {
        var field = fieldDefs[name];
        validity[field.attribute] = !(field.required)
    }
    return validity;
}

const getDefaultData = (fieldDefs: Record<string, FieldDefinition>) => {
    var defaultData = {};
    for (var name in fieldDefs) {
        var field = fieldDefs[name];
        if (undefined != field.defaultValue && null != field.defaultValue)
            setValueByKey(field.attribute, defaultData, field.defaultValue);
    }
    return defaultData;
}


const getValidationFormat = (layout: FlexiLayoutDefinition): Record<string, FieldDefinition> => {
    var result: Record<string, FieldDefinition> = {};
    if (layout.tabs) {
        for (var tab of layout.tabs) {
            if (tab && tab.sections) {
                for (var section of tab.sections) {
                    if (section) {
                        var formLayout = section.formLayout;
                        if (formLayout && formLayout.fields) {
                            for (var field of formLayout.fields) {
                                result[field.attribute] = field;
                            }
                        }
                    }
                }
            }
        }
    }
    return result;
}

function useFormValidator<T>(props: FlexiLayoutRendererInput<T>, mode: FormMode) {
    const { layout, callbacks } = props;
    var formData = mergeDeep({}, props.data);
    const onDataValidityChange = callbacks.onFormValidChange;
    const isValid = useRef(false);
    var dataValid = {};
    var validationRules = {};
    var defaultData = {};

    const isNewForm = () => {
        return mode && mode == 'new';
    }

    if (mode != 'view') {
        var validationFormat: Record<string, FieldDefinition> = getValidationFormat(layout);
        validationRules = getValidators(validationFormat);

        if (isNewForm()) {
            dataValid = initValidStatus(validationFormat);
            defaultData = getDefaultData(validationFormat);
        } else {
            dataValid = calcValidationStatus(formData, validationRules)
            defaultData = {};
        }
    }

    if (isNewForm()) {
        mergeDeep(formData, defaultData);
    }

    const onDataChange = (updateData) => {
        dataValid = Object.assign({}, dataValid, updateData.dataValid);
        mergeDeep(formData, updateData.data);
        const _isValid = isValidForm(dataValid);

        if (_isValid != isValid.current) {
            isValid.current = _isValid;
            if (onDataValidityChange) {
                onDataValidityChange(_isValid);
            }
        }
    }

    const isValidForm = (dv) => {
        for (var key in dv) {
            if (dv[key] == false) {
                return false;
            }
        }
        return true;
    }

    return { validationRules, formData, onDataChange, isValid };
}

export { useFormValidator };