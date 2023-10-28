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
import { useMemo, useRef } from "react";
import { getLookupStore } from "./PalmyraStoreManager";


function createFormData(data, onValidityChange, mode: FormMode) {
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

    const onDataChange = (data: any, validity: any) => {
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

    const getFieldManager = useMemo(() => {
        formDataRef.current = mergeDeep({}, data);
        const generate = (field: AttributeDefinition, type: FieldType): IFormFieldManager => {
            // @ts-ignore
            var fieldDef: FieldDefinition = { ...field, type }
            const validationRule = getValidator(fieldDef);
            validationFormat[fieldDef.attribute] = fieldDef;
            validationRules[fieldDef.attribute] = validationRule;
            var result = getEventListeners(fieldDef, getValueByKey(fieldDef.attribute, formDataRef.current),
                onDataChange, validationRule, undefined);

            if (requireStore(fieldDef)) {
                result.store = getLookupStore(fieldDef);
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
        console.log("Form Initialization");
    }

    return { getFieldManager, getFormData, initForm, isFormValid };
}

export { createFormData };

function requireStore(fieldDef: FieldDefinition) {
    return (fieldDef.storeOptions?.endPoint) ? true : false;
}
