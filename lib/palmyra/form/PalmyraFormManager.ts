/**
 * Custom Hook for form validation
 */

import { FieldDefinition } from "./Definitions";
import { getValueByKey } from "./FormUtil";
import { default as getValidator } from "../validator/DataValidator";
import { getEventListeners } from "./PalmyraFieldManager";
import { mergeDeep } from "../utils";
import { AttributeDefinition, FieldType, IFormFieldManager, IGetFieldManager } from "./interface";
import { IFieldEventListener, IFieldValueListener, IFormHelper, FormMode, NoopFormHelper } from "./Types";
import { MutableRefObject, useMemo, useRef } from "react";
import { getLookupStore } from "./PalmyraStoreManager";


function createFormHelper(): IFormHelper {
    const fieldRefs: Record<string, MutableRefObject<any>> = {};

    const getFieldRef = <T>(field: string): T => {
        const ref = fieldRefs[field];
        if (ref)
            return ref.current;
    }

    const addFieldRef = (field: string, ref: MutableRefObject<any>): void => {
        fieldRefs[field] = ref;
    }

    return { addFieldRef, getFieldRef };
}

interface IListeners {
    changeListeners: Record<string, IFieldEventListener>
    valueListeners: Record<string, IFieldValueListener>
}

function createFormData(data, onValidityChange, mode: FormMode, formHelper?: IFormHelper,
    listeners?: IListeners) {
    const formListeners: IListeners = listeners || { changeListeners: {}, valueListeners: {} };

    const _formHelper = formHelper || NoopFormHelper;
    var validationFormat: Record<string, FieldDefinition> = {};
    var validationRules = {};
    const isValid = useRef(false);
    var formDataRef = useRef(mergeDeep({}, data));
    const onDataValidityChange = onValidityChange;
    var dataValidRef = useRef({});
    var dataValid = dataValidRef.current;
    var defaultData = {};

    const isNewForm = () => {
        return mode && mode == 'new';
    }

    if (isNewForm()) {
        mergeDeep(formDataRef.current, defaultData);
    }

    const onDataChange = (attribute: string, value: any, validity: { [x: string]: boolean }) => {
        const data = attribute ? { attribute: value } : {};
        dataValid = Object.assign({}, dataValid, validity);
        mergeDeep(formDataRef.current, data);
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

    const getFieldManager = useMemo((): IGetFieldManager => {
        formDataRef.current = mergeDeep({}, data);
        const generate = (field: AttributeDefinition, type: FieldType, ref: any): IFormFieldManager => {
            var fieldAttrib = field.name || field.attribute;
            // @ts-ignore
            var fieldDef: FieldDefinition = { ...field, type }
            if (ref)
                _formHelper.addFieldRef(fieldAttrib, ref);

            const validationRule = getValidator(fieldDef);
            validationFormat[fieldDef.attribute] = fieldDef;
            validationRules[fieldDef.attribute] = validationRule;

            const changeListener = formListeners.changeListeners[fieldAttrib]
            const valueListener = formListeners.valueListeners[fieldAttrib];
            var result = getEventListeners(fieldDef, getValueByKey(fieldDef.attribute, formDataRef.current),
                onDataChange, validationRule, undefined, changeListener, valueListener);

            try {
                if (requireStore(fieldDef)) {
                    result.store = getLookupStore(fieldDef);
                }
            } catch (error) {
                console.error('Error while getting LookupStore for attribute' + fieldDef.attribute, error);
            }

            if (fieldDef.type == 'serverlookup') {
                var displayAttribute = fieldDef.displayAttribute || fieldDef.attribute;
                result.displayValue = getValueByKey(displayAttribute, data);
            }

            return result;
        }
        return generate;
    }, [data])

    const getFormData = () => {
        return mergeDeep({}, formDataRef.current); // Return deep copied object.
    }

    const isFormValid = () => {
        return isValidForm(dataValid); // TODO
    }

    const initForm = () => {

    }

    return { getFieldManager, getFormData, initForm, isFormValid };
}

export { createFormData, createFormHelper };

function requireStore(fieldDef: FieldDefinition) {
    return (fieldDef.storeOptions?.endPoint) ? true : false;
}
