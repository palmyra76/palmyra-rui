import { useState } from "react";
import { FieldDefinition, FieldProperties, FieldContext, FieldValidStatus, InputType } from "./Types";

import { delay } from '../utils';

const getDefaultValue = (runtime:FieldContext, fieldDef : FieldDefinition, value:InputType) => {
    return value || '';
}

function useValidator(props: FieldProperties) {
    const { runtime, fieldDef, value } = props;
    const { eventHandler, onDataChange, constraint } = runtime || {};
    const [data, setData] = useState(getDefaultValue(runtime, fieldDef, value));
    const [error, setError] = useState<FieldValidStatus>({ status: false, message: '' });
   
    const setValue = (value: any) => {
        setData(value || '');
        if (onDataChange) {
            onDataChange({ [fieldDef.attribute]: value })
        }
        delay(() => {
            validate(value);
        });
    }

    const checkConstraints = (value: String) => {
        if (constraint && constraint instanceof Function) {
            return constraint(value);
        }
        return [false, ''];
    };


    const validate = (inputValue: String) => {
        const [status, message] = checkConstraints(inputValue);

        if (!status) {
            setErrorMode({
                status: !status,
                message: message
            });
        } else if (eventHandler?.asyncValid) {
            setErrorMode({
                status: false, message: ""
            });
            eventHandler.asyncValid(inputValue, applyAttribute, setErrorMode);
        } else {
            setErrorMode({
                status: !status,
                message: message
            });
        }
    }

    const applyAttribute = (attr: any) => {
        console.log(attr);
    }

    const hideErrorMessage = () => {
        if (error.message != "") {
            setError({
                status: error.status,
                message: ""
            });
        }
    }

    const setErrorMode = (error: FieldValidStatus) => {
        if (error.status)
            setError(error);
        else {
            setError({
                status: false, message: ""
            });
        }
    }

    const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => { validate(e.target.value) };
    const onFocus = () => { hideErrorMessage() };
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => { setValue(e.target.value) };

    const fieldCallbacks = { onBlur, onFocus, onChange };

    return { data, setData: setValue, error, fieldCallbacks };
}

export default useValidator;