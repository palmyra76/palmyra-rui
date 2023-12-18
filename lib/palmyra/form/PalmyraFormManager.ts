/**
 * Custom Hook for form validation
 */

import { FieldDefinition } from "./Definitions";
import { default as getValidator } from "../validator/DataValidator";
import { getEventListeners } from "./PalmyraFieldManager";
import { mergeDeep } from "../utils";
import { AttributeDefinition, FieldType, IFormFieldManager } from "./interface";
import { IFieldEventListener, IFieldValueListener, IFormHelper, FormMode } from "./Types";
import { MutableRefObject, useMemo, useRef } from "react";
import { getLookupStore } from "./PalmyraStoreManager";
import { setValueByKey } from "./FormUtil";

function createFormHelper(): IFormHelper {
    const fieldRefs: Record<string, MutableRefObject<any>> = useMemo<any>(() => { return {}; }, []);

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
    eventListeners: Record<string, IFieldEventListener>
    valueListeners: Record<string, IFieldValueListener>
}

function createFormData(data, onValidityChange, mode: FormMode, formHelper?: IFormHelper,
    listeners?: IListeners) {
    const formListeners: IListeners = listeners || { eventListeners: {}, valueListeners: {} };
    const fieldRefs: Record<string, MutableRefObject<any>> = useMemo<any>(() => { return {}; }, [data]);
    const _formHelper = formHelper || createFormHelper();
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
        if (attribute)
            setValueByKey(attribute, formDataRef.current, value)

        dataValid = Object.assign({}, dataValid, validity);
        const _isValid = isValidForm(dataValid);

        if (_isValid != isValid.current) {
            isValid.current = _isValid;
            if (onDataValidityChange) {
                onDataValidityChange(_isValid);
            }
        }
    }

    const isValidForm = (dv: any) => {
        for (var key in dv) {
            if (dv[key] == false) {
                return false;
            }
        }
        return true;
    }

    const getFieldManager = (field: AttributeDefinition, type: FieldType, ref: any): IFormFieldManager => {
        formDataRef.current = mergeDeep({}, data);
        var fieldAttrib = field.name || field.attribute;        
        // @ts-ignore
        var fieldDef: FieldDefinition = { ...field, type }
        if (ref) {
            _formHelper.addFieldRef(fieldAttrib, ref);
            fieldRefs[fieldAttrib] = ref;
        }

        const validationRule = getValidator(fieldDef);
        validationFormat[fieldDef.attribute] = fieldDef;
        validationRules[fieldDef.attribute] = validationRule;

        const eventListener = field.eventListener || formListeners.eventListeners[fieldAttrib]
        const valueListener = formListeners.valueListeners[fieldAttrib];

        var result = getEventListeners(fieldDef, formDataRef, // getter.getFormData(formDataRef.current),
            onDataChange, validationRule, undefined, eventListener, valueListener);

        try {
            if (requireStore(fieldDef)) {
                result.store = getLookupStore(fieldDef);
            }
        } catch (error) {
            console.error('Error while getting LookupStore for attribute' + fieldDef.attribute, error);
        }

        return result;
    };

    const getFormData = (idProperty?: string) => {
        const idp = idProperty || 'id';
        const id = formDataRef.current?.[idp];

        var result = id ? { [idp]: id } : {};

        for (const fieldKey in fieldRefs) {
            const f: any = fieldRefs[fieldKey].current;
            if (f?.getValue) {
                setValueByKey(fieldKey, result, f.getValue());
            }
        }
        return result;
    }

    const isFormValid = () => {
        return isValidForm(dataValid); // TODO
    }

    return { getFieldManager, getFormData, isFormValid };
}

export { createFormData, createFormHelper };

function requireStore(fieldDef: FieldDefinition) {
    return (fieldDef.storeOptions?.endPoint) ? true : false;
}
