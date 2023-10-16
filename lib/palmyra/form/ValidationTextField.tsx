import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { TextField } from '@mui/material';
import useValidator from './useValidator';
import { FieldDefinition, FieldProperties, FieldRuntime } from './Types';

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




const ValidationTextField = forwardRef(function ValidationTextField(props: FieldProperties, ref) {
    const { data, setData, error, fieldCallbacks } = useValidator(props);
    const inputRef: any = useRef(null);

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



    useEffect(() => {
        setData(props.value);
    }, [props.value]);

    var inputProps: any = { fullWidth: true, ...props.fieldDef, value: data };

    return (
        <TextField {...inputProps}
            inputRef={inputRef}
            {...fieldCallbacks}
            error={error.status}
            helperText={error.message}
        />
    );
});

export default ValidationTextField;