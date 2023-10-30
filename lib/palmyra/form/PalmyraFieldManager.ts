import { useEffect, useState } from "react";
import { EventHandler } from "./Types";
import { FieldDefinition, FieldValidStatus, InputType } from "./Definitions";

import { delay } from '../utils';
import { Converter, getFormatConverter } from "../utils/converter";
import { IEventListeners, IFormFieldManager } from "./interface";


const getDefaultValue = (fieldDef: FieldDefinition, value: InputType): any => {
    if(value == undefined)
        return fieldDef.defaultValue || '';
    return value;
}

function getEventListeners<T>(fieldDef: FieldDefinition,
    value: any,
    onDataChange: Function, constraint: Function,
    eventHandler: EventHandler): IFormFieldManager {

    const formatter: Converter<any, any> = getFormatConverter(fieldDef);
    const [_v, setVal] = useState(value);
    const [data, setData] = useState(getData(value));
    const [error, setError] = useState<FieldValidStatus>({ status: false, message: '' });

    useEffect(() => {
        setVal(value);
        setData(getData(value));
    }, [value])

    function getData(value) {
        return formatter.parse(getDefaultValue(fieldDef, value))
    }

    /**
     * The doValidate flag is required, when the data validation is not required to be triggered
     *      1. while initializing the field values
     * 
     * @param value 
     * @param doValidate 
     */
    const setValue = (value: any, doValidate?: boolean) => {
        setData(value || '');
        if (doValidate) {
            delay(() => {
                validate(value);
                if (onDataChange) {
                    const formattedValue = formatter.format(value);
                    var key = fieldDef.attribute;
                    const validStatus = checkConstraints(value);
                    onDataChange({ [key]: formattedValue }, { [key]: validStatus.status });
                }
            });
        }
    }

    const checkConstraints = (value: String): FieldValidStatus => {
        if (constraint && constraint instanceof Function) {
            const validStatus = constraint(value);
            if (!validStatus.status)
                return validStatus;
        }
        return { status: true, message: '' };
    };

    const setValid = (valid: FieldValidStatus) => {
        setErrorMode({
            status: !valid.status,
            message: valid.message
        })
    }

    const validate = (inputValue: any) => {
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

    const resetError = () => {
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

    const onBlur = () => { validate(data); };
    const onFocus = () => { hideErrorMessage() };
    const onValueChange = (value: T) => { setValue(value, true) };

    const eventListeners: IEventListeners = { onBlur, onFocus, onValueChange };

    useEffect(() => {
        var key = fieldDef.attribute;
        const validStatus = checkConstraints(data);
        onDataChange({}, { [key]: validStatus.status });
    }, []);

    return { data, setData: setValue, error, eventListeners };
}

function decorateListenersForInput(eventListeners: IEventListeners): any {
    return {
        onBlur: eventListeners.onBlur,
        onFocus: eventListeners.onFocus,
        onChange: (e: any) => (eventListeners.onValueChange(e.target.value))
    }
}

export { getEventListeners, decorateListenersForInput };