import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { TextField } from '@mui/material';
import { getEventListeners } from './InputEventListeners';
import { FieldProperties } from './Types';

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
    const { data, setData, error, eventListeners } = getEventListeners(props);
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

    var inputProps: any = { fullWidth: true, ...props.muiFieldDef, value: data };

    var callbacks = {
        onBlur: eventListeners.onBlur,
        onFocus: eventListeners.onFocus,
        onChange: (d: any) => (eventListeners.onValueChange(d.target.value))
    }

    return (
        <TextField {...inputProps}
            inputRef={inputRef}
            {...callbacks}
            error={error.status}
            helperText={error.message}
        />
    );
});

export default ValidationTextField;