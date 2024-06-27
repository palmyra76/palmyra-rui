/**
 * Custom Hook for form validation
 */

import { FieldDefinition } from "./Definitions";
import { default as getValidator } from "../validator/DataValidator";
import { useEventListeners } from "./PalmyraFieldManager";
import { mergeDeep } from "../utils";
import { IAbstractField, FieldType, IFormFieldManager, IGetFieldManager } from "./interface";
import { IFieldEventListener, IFieldValueListener, IFormHelper, FormMode } from "./Types";
import { MutableRefObject, useEffect, useMemo, useRef } from "react";
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

function useFormData(data, onValidityChange, mode: FormMode, formHelper?: IFormHelper,
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

    useEffect(() => {
        formDataRef.current = mergeDeep({}, data);
    }, [data])

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
            if (fieldRefs[key]) {
                const f: any = fieldRefs[key].current;
                if (f && dv[key] == false) {
                    return false;
                }
            }
        }
        return true;
    }

    const getFieldManager = useMemo((): IGetFieldManager => {

        const generator = (field: IAbstractField, type: FieldType, ref: any): IFormFieldManager => {
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
            const valueListener = field.valueListener || formListeners.valueListeners[fieldAttrib];

            var result = useEventListeners(fieldDef, formDataRef, // getter.getFormData(formDataRef.current),
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

        return generator
    }, [data]);

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

export { useFormData, createFormHelper };

function requireStore(fieldDef: FieldDefinition) {
    return (fieldDef.storeOptions?.endPoint) ? true : false;
}
