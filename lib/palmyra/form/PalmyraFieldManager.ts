import { MutableRefObject, SetStateAction, useEffect, useRef, useState } from "react";
import { EventHandler, IFieldEventListener, IFieldValueListener, NoopFieldEventListener, NoopFieldValueListener } from "./Types";
import { FieldDefinition, FieldValidStatus } from "./Definitions";

import { Converter, getFormatConverter } from "../utils/converter";
import { IEventListeners, IFormFieldManager } from "./interface";
import { IMutateOptions } from "./interfaceFields";

function useEventListeners<T>(fieldDef: FieldDefinition, formDataRef: MutableRefObject<any>,
    onDataChange: (key: string, d: any, v: { [x: string]: boolean }) => void, constraint: Function,
    eventHandler: EventHandler, eventListener?: IFieldEventListener, valueListener?: IFieldValueListener
): IFormFieldManager {
    const formatter: Converter<any, any> = getFormatConverter(fieldDef, formDataRef);
    const [fieldData, setFieldData] = useState(getDataDefault(formatter.getFieldData(formDataRef.current, fieldDef)));
    const [error, setError] = useState<FieldValidStatus>({ status: false, message: '' });
    const metaInfo = useRef<any>({});
    const timer: any = useRef<ReturnType<typeof setTimeout>>(null);

    useEffect(() => {
        var key = fieldDef.attribute;
        const validStatus = checkConstraints(fieldData);
        onDataChange(undefined, undefined, { [key]: validStatus.status });
    }, []);
    const fieldEventListener = eventListener || NoopFieldEventListener;
    const fieldValueListener = valueListener || NoopFieldValueListener;
    var mutateOptions: IMutateOptions, setMutateOptions: (d: SetStateAction<IMutateOptions>) => void;

    if (fieldDef.mutant) {
        const [opt, setOpt] = useState<IMutateOptions>({
            required: fieldDef.required == true,
            readonly: fieldDef.readonly == true,
            visible: fieldDef.visible == false ? false : true
        });
        mutateOptions = opt;
        setMutateOptions = setOpt;
    } else {
        mutateOptions = {
            required: fieldDef.required == true,
            readonly: fieldDef.readonly == true,
            visible: fieldDef.visible == false ? false : true
        };
        setMutateOptions = (d: SetStateAction<IMutateOptions>) => {
            console.warn("Operation ignored, set mutant={true} in '"
                + fieldDef.attribute + "' field definition");
        };
    }

    function getDataDefault(value: any) {
        var result = value;
        if (value == undefined)
            result = formatter.getDefaultValue(fieldDef.defaultValue);
        return formatter.parse(result)
    }

    const doProcessDataChange = (value: any) => {
        const validStatus = validate(value);
        const attrib = fieldDef.attribute;
        const key = fieldDef.name || attrib;
        if (onDataChange) {
            const formattedValue = formatter.format(value);
            onDataChange(attrib, formattedValue, { [attrib]: validStatus.status });
        }
        if (fieldEventListener.onChange)
            fieldEventListener.onChange(key, value, validStatus.status);

        fieldValueListener.onValue(key, value, validStatus.status);
    }

    /**
     * The doValidate flag is required, when the data validation is not required to be triggered
     *      1. while initializing the field values
     * 
     * @param value 
     * @param doValidate 
     */
    const setValue = (value: any, doValidate?: boolean) => {
        setFieldData(value);
        if (doValidate) {
            clearTimeout(timer.current);
            timer.current = setTimeout(function () {
                doProcessDataChange(value);
            }, 300);
        }
    }

    const getData = () => {
        return formatter.format(fieldData);
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
        return validStatus;
    }

    const applyAttribute = (_attr: any) => {

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

    const onBlur = () => {
        const validStatus = validate(fieldData);
        if (fieldEventListener.onBlur) {
            fieldEventListener.onBlur(fieldDef.attribute, fieldData, validStatus.status);
        }
    };

    const onFocus = () => { hideErrorMessage() };
    const onValueChange = (value: T) => { setValue(value, true) };

    const eventListeners: IEventListeners = { onBlur, onFocus, onValueChange };



    const setMeta = (d: string, v: any) => {
        metaInfo.current[d] = v;
    }

    const getMeta = (d: string) => {
        return metaInfo.current[d];
    }

    return {
        data: fieldData, setData: setValue, getData, error, eventListeners, mutateOptions, setMutateOptions, getMeta, setMeta
    };
}

function decorateListenersForInput(eventListeners: IEventListeners): any {
    return {
        onBlur: eventListeners.onBlur,
        onFocus: eventListeners.onFocus,
        onChange: (e: any) => (eventListeners.onValueChange(e.target.value))
    }
}

export { useEventListeners, decorateListenersForInput };