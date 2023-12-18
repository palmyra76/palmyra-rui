/**
 * Custom Hook for form validation
 */

import { FieldDefinition } from "./Definitions";
import { setValueByKey } from "./FormUtil";
import { default as getValidator } from "../validator/DataValidator";
import { useEventListeners } from "./PalmyraFieldManager";
import { mergeDeep } from "../utils";
import { AttributeDefinition, FieldType, IFormFieldManager, IGetFieldManager } from "./interface";
import { IFieldEventListener, IFieldValueListener, IFormHelper } from "./Types";
import { MutableRefObject, useMemo, useRef } from "react";
import { getLookupStore } from "./PalmyraStoreManager";


function createFilterFormHelper(): IFormHelper {
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

function createFilterData(data, formHelper?: IFormHelper, listeners?: IListeners) {
    const formListeners: IListeners = listeners || { eventListeners: {}, valueListeners: {} };
    const fieldRefs: Record<string, MutableRefObject<any>> = useMemo<any>(() => { return {}; }, []);
    const _formHelper = formHelper || createFilterFormHelper();
    var validationFormat: Record<string, FieldDefinition> = {};
    var validationRules = {};
    var formDataRef = useRef(mergeDeep({}, data));

    const onDataChange = (attribute: string, value: any, validity: { [x: string]: boolean }) => {
        if (attribute)
            setValueByKey(attribute, formDataRef.current, value)
    }

    const getFieldManager = useMemo((): IGetFieldManager => {
        formDataRef.current = mergeDeep({}, data);
        const generate = (field: AttributeDefinition, type: FieldType, ref: any): IFormFieldManager => {
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
            var result = useEventListeners(fieldDef, formDataRef.current?.[fieldDef.attribute],
                onDataChange, validationRule, undefined, eventListener, valueListener);

            try {
                if (requireStore(fieldDef)) {
                    result.store = getLookupStore(fieldDef);
                }
            } catch (error) {
                console.error('Error while getting LookupStore for attribute' + fieldDef.attribute, error);
            }

            // if (fieldDef.type == 'serverlookup') {
            //     var displayAttribute = fieldDef.displayAttribute || fieldDef.attribute;
            //     result.displayValue = getValueByKey(displayAttribute, data);
            //     result.setDisplayValue = (v) => {
            //         if (fieldDef.displayAttribute != fieldDef.attribute) {
            //             setValueByKey(fieldDef.displayAttribute, formDataRef.current, v);
            //         }
            //     }
            // }

            return result;
        }
        return generate;
    }, [data])

    const getFilterData = (idProperty?: string) => {
        const idp = idProperty || 'id';
        const id = formDataRef.current?.[idp];

        var result = id ? { [idp]: id } : {};

        for (const fieldKey in fieldRefs) {
            const f: any = fieldRefs[fieldKey].current;
            if (f?.getValue) {
                const v = f.getValue();
                if (v && v != '')
                    result[fieldKey] = v;
            }
        }
        return result;
    }

    return { getFieldManager, getFilterData };
}

export { createFilterData, createFilterFormHelper };

function requireStore(fieldDef: FieldDefinition) {
    return (fieldDef.storeOptions?.endPoint) ? true : false;
}
