import { useRef, useImperativeHandle, forwardRef } from 'react';
import { TextField } from '@mui/material';
import { IEventListeners, IFormFieldError, IFormFieldInputDefinition, IFormFieldManager } from '../../form/interface';

const MuiTextField = forwardRef(function MuiTextField(props: IFormFieldInputDefinition, ref) {
    const { getFieldManager } = props;
    const fieldManager: IFormFieldManager = getFieldManager(props);

    const error: IFormFieldError = fieldManager.error;
    const eventListeners: IEventListeners = fieldManager.eventListeners;

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

    var inputProps: any = { fullWidth: true, value: fieldManager.data };

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

export default MuiTextField;