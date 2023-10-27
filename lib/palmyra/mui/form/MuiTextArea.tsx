import { useRef, useImperativeHandle, forwardRef } from 'react';
import { TextField } from '@mui/material';
import { IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManagerDefinition, ITextFieldDefinition } from '../../form/interface';
import { copyMuiOptions } from './MuiUtil';

const MuiTextArea = forwardRef(function MuiTextArea(props: ITextFieldDefinition & IGetFieldManagerDefinition, ref) {
    const { getFieldManager } = props;
    
    // @ts-ignore
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

    var inputProps: any = copyMuiOptions(props, fieldManager.data);    

    var callbacks = {
        onBlur: eventListeners.onBlur,
        onFocus: eventListeners.onFocus,
        onChange: (d: any) => (eventListeners.onValueChange(d.target.value))
    }

    return (
        <TextField
            minRows={2}
            maxRows={5}
            fullWidth={true}
            multiline
            {...inputProps}
            inputRef={inputRef}
            {...callbacks}
            error={error.status}
            helperText={error.message}
        />
    );
});

export default MuiTextArea;