import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { TextField } from '@mui/material';
import { delay } from '../utils';

/**
 * Supported Event Handlers
 *  1. asyncValid
 *  2. onComplete - for TextField - after 300ms, for select - onSelect.
 *  3. onClear - reset of all the value (empty value)
 */


/* asyncValid - this function will be called after local constraints are validated.
1. value - as in the widtet
2. onValid callback
3. onError callback 

input of onValid function (on callback)
 - reset : reset the current value (not sure how to do)
 - data : 'current selected / edited value' - applicable for 
                All Widgets
 - options : 'list of options in the widget - applicable for 
                CheckBox, RadioGroup, Select
 - filter :   ServerLookup

input of onError function (on callback)
    - error : {status:false, message :""}
*/

interface Error {
    status: boolean;
    message: string;
}

const ValidationTextField = forwardRef(function ValidationTextField(props:any, ref) {
    const [error, setError] = useState({ status: false, message: "" });
    const [data, setData] = useState<typeof String>(props.value);
    const [name] = useState(props.name);
    const inputRef: any = useRef(null);
    const { eventHandler } = props;

    const onDataChange = props.onDataChange;
    const constraint = props.constraint;

    useImperativeHandle(ref, () => {
        return {
            focus() {
                inputRef.current.focus();
            },
            isValid() {
                return !error.status;
            },
            assignAttribute(data: String) {
                inputRef.current.assignAttribute(data);
            }
        };
    }, []);

    const setErrorMode = (error: Error) => {
        if (error.status)
            setError(error);
        else {
            setError({
                status: false, message: ""
            });
        }
    }

    useEffect(() => {
        setData(props.value);
    }, [props.value]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue:any = e.target.value;
        setData(inputValue);
        if (onDataChange) {
            if (name) {
                onDataChange({ [name]: inputValue })
            } else
                onDataChange(e);
        }

        delay(() => {
            validate(inputValue);
        });
    };

    const applyAttribute = (attr: any) => {
        // TODO - assign values based attr as documented above
        console.log(attr);
    }

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

    const clearError = () => {
        if (error.message != "") {
            setError({
                status: error.status,
                message: ""
            });
        }
    }

    const checkConstraints = (value: String) => {
        if (constraint && constraint instanceof Function) {
            return constraint(value);
        }
        return [false, ''];
    };

    var inputProps: any = { fullWidth: true, ...props, value: data };

    delete inputProps.constraint;
    delete inputProps.onDataChange;
    delete inputProps.eventHandler;

    return (
        <TextField {...inputProps}
            inputRef={inputRef}
            onChange={onChange}
            onBlur={(e: React.ChangeEvent<HTMLInputElement>) => validate(e.target.value)}
            onFocus={clearError}
            error={error.status}
            helperText={error.message}
        />
    );
});

export default ValidationTextField;