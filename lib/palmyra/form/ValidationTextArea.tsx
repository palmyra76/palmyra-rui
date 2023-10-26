import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { TextField } from '@mui/material';
import {decorateListenersForInput, getEventListeners} from './InputEventListeners';
import { FieldProperties } from './Types';


const ValidationTextArea = forwardRef(function ValidationTextArea(props: FieldProperties, ref) {
    const { data, setData, error, eventListeners } = getEventListeners(props);
    var callbacks = decorateListenersForInput(eventListeners);

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

    return (
        <TextField
            minRows={2}
            maxRows={5}
            multiline
            {...inputProps}
            inputRef={inputRef}
            {...callbacks}
            error={error.status}
            helperText={error.message}
        />
    );
});

export default ValidationTextArea;