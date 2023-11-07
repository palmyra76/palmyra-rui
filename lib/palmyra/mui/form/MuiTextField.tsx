import { useRef, useImperativeHandle, forwardRef } from 'react';
import { TextField } from '@mui/material';
import { IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManagerDefinition, ITextFieldDefinition } from '../../form/interface';
import { copyMuiOptions } from './MuiUtil';

const MuiTextField = forwardRef(function MuiTextField(props: ITextFieldDefinition & IGetFieldManagerDefinition, ref) {
    const { getFieldManager } = props;
    const fieldManager: IFormFieldManager = getFieldManager(props, 'string');

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

    var inputProps: any = copyMuiOptions(props, fieldManager.data, props.label);    

    var callbacks = {
        onBlur: eventListeners.onBlur,
        onFocus: eventListeners.onFocus,
        onChange: (d: any) => (eventListeners.onValueChange(d.target.value))
    }

    return (
        <TextField {...inputProps}
            fullWidth={true}
            inputRef={inputRef}
            {...callbacks}
            error={error.status}
            helperText={error.message}
        />
    );
});

export default MuiTextField;