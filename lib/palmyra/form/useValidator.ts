import { useState } from "react";
import { FieldProperties, FieldContext } from "./Types";
import { FieldDefinition, FieldValidStatus, InputType } from "./Definitions";

import { delay } from '../utils';

const getDefaultValue = (runtime: FieldContext, fieldDef: FieldDefinition, value: InputType) => {
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

    const checkConstraints = (value: String):FieldValidStatus => {
        if (constraint && constraint instanceof Function) {
            const validStatus = constraint(value);
            if(!validStatus.status)
                return validStatus;
        }
        return {status:true, message:''};
    };

    const setValid = (valid:FieldValidStatus)=>{
        setErrorMode({
            status: !valid.status, 
            message: valid.message
        })
    }

    const validate = (inputValue: String) => {
        const validStatus = checkConstraints(inputValue);

        if (!validStatus.status) {
            setValid(validStatus);
        } else if (eventHandler?.asyncValid) {
            resetError();
            eventHandler.asyncValid(inputValue, applyAttribute, setErrorMode);
        } else {
            setValid(validStatus);
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

    const resetError =() =>{
        setErrorMode({
            status: false, message: ""
        });
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