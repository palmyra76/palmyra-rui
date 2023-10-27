/**
 * Custom Hook for form validation
 */

import { FieldDefinition } from "./Definitions";
import { getValueByKey } from "./FormUtil";
import { default as getValidator } from "../validator/DataValidator";
import { getEventListeners } from "./PalmyraFieldManager";
import { mergeDeep } from "../utils";
import { AttributeDefinition, FieldType, IFormFieldManager } from "./interface";
import { FormMode } from "./Types";
import { useRef } from "react";


function createFormData(data, onValidityChange, mode: FormMode) {
    var validationFormat: Record<string, FieldDefinition> = {};
    var validationRules = {};
    const isValid = useRef(false);
    var formDataRef = useRef(mergeDeep({}, data));
    var formData = formDataRef.current;
    const onDataValidityChange = onValidityChange;
    var dataValidRef = useRef({});
    var dataValid = dataValidRef.current;

    var fieldManagerCache = {};

    var validationRules = {};
    var defaultData = {};

    const isNewForm = () => {
        return mode && mode == 'new';
    }

    if (isNewForm()) {
        mergeDeep(formData, defaultData);
    }

    const onDataChange = (data: any, validity: any) => {
        dataValid = Object.assign({}, dataValid, validity);
        mergeDeep(formData, data);
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

    const getFieldManager = (field: AttributeDefinition, type: FieldType): IFormFieldManager => {
        var key = field.attribute;
        // @ts-ignore
        var fieldDef: FieldDefinition = {...field, type}        

        const validationRule = getValidator(fieldDef);
        validationFormat[fieldDef.attribute] = fieldDef;
        validationRules[fieldDef.attribute] = validationRule;

        var result = getEventListeners(fieldDef, getValueByKey(fieldDef.attribute, data),
            onDataChange, validationRule, undefined);
        fieldManagerCache[key] = result;
        return result;
    }

    const getFormData = () => {
        return mergeDeep({}, formData); // Return deep copied object.
    }

    const isFormValid = () => {
        return isValidForm(dataValid);
    }

    const initForm = () => {
        console.log("Form Initialization");
    }

    return { getFieldManager, getFormData, initForm, isFormValid };
}

export { createFormData };