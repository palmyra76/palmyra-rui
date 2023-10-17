/**
 * Custom Hook for form validation
 */

import { getValidators } from "../../validator/DataValidator";
import { FlexiLayoutDefinition } from "./Definitions";
import { getValueByKey, setValueByKey } from "../../form/FormUtil";
import { FieldDefinition, FieldValidStatus } from "../../form/Definitions";
import { useEffect, useMemo, useRef } from "react";
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


function useFormValidator(props : FlexiLayoutRendererInput, mode: FormMode) {
    const { layout, callbacks } = props;
    const formData = props.data;
    const onDataValidityChange = callbacks.onFormValidChange;

    const isNewForm = () => {
        return mode && mode == 'new';
    }

    const { validationRules, defaultData } = useMemo(
        () => {
            var validationFormat: Record<string, FieldDefinition> = getValidationFormat(layout);
            var validationRules = getValidators(validationFormat);

            if (isNewForm()) {
                var defaultData = getDefaultData(validationFormat);
                return { validationRules, defaultData };
            } else {
                return { validationRules: validationRules, defaultData: {} };
            }
        },
        [layout, mode]
    );

    const data = useRef(clone({ ...defaultData, ...formData }));
    const isValid = useRef(false)

    var dataValid = calcValidationStatus(data, validationRules);

    useEffect(() => {
        data.current = clone({ ...defaultData, ...formData });
        dataValid = calcValidationStatus(data.current, validationRules);
        isValid.current = isValidForm(dataValid);
    }, [formData]);

    const onDataChange = (updateData) => {
        dataValid = Object.assign({}, dataValid, updateData.dataValid);
        mergeDeep(data.current, updateData.data);
        const _isValid = isValidForm(dataValid);

        if(_isValid != isValid.current)
        {
            isValid.current = _isValid;
            if(onDataValidityChange){
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

    return { validationRules, data, onDataChange, isValid };
}

export { useFormValidator };