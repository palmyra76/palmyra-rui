/**
 * Custom Hook for form validation
 */

import { getValidators } from "../../validator/DataValidator";
import { FlexiLayoutDefinition } from "./Definitions";
import { getValueByKey, setValueByKey } from "../../form/FormUtil";
import { FieldDefinition, FormData } from "../../form/Definitions";
import { useEffect, useMemo, useRef, useState } from "react";
import { FormMode } from "../../form/Types";



const calcValidationStatus = (incomingData, validFunctions) => {
    var validity = {};
    for (var field in validFunctions) {
        var validator = validFunctions[field];
        var value = getValueByKey(field, incomingData);
        var [isValid] = validator(value);
        validity[field] = isValid;
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

const clone = (data) => {
    return JSON.parse(JSON.stringify(data));
}


function useFormValidator(pageLayout: FlexiLayoutDefinition, mode: FormMode, formData: FormData) {

    const isNewForm = () => {
        return mode && mode == 'new';
    }

    const { validationRules, defaultData } = useMemo(
        () => {
            var validationFormat: Record<string, FieldDefinition> = getValidationFormat(pageLayout);
            var validationRules = getValidators(validationFormat);

            if (isNewForm()) {
                var defaultData = getDefaultData(validationFormat);
                return { validationRules, defaultData };
            } else {
                return { validationRules: validationRules, defaultData: {} };
            }
        },
        [pageLayout, mode]
    );

    const data = useRef(clone({ ...defaultData, ...formData }));

    var dataValid = calcValidationStatus(data, validationRules);

    useEffect(() => {
        data.current = clone({ ...defaultData, ...formData });
        dataValid = calcValidationStatus(data.current, validationRules);
    }, [formData]);

    const onDataChange = (updateData) => {
        dataValid = Object.assign({}, dataValid, updateData.dataValid);
        var allValid = isValid(dataValid);        
    }

    const isValid = (dv) => {
        for (var key in dv) {
            if (dv[key] == false) {
                return false;
            }
        }
        return true;
    }

    return { validationRules, data, onDataChange };
}

export { useFormValidator };