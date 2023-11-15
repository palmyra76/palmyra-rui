import { useRef, useImperativeHandle, forwardRef, useContext } from 'react';
import { TextField } from '@mui/material';
import { IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManager, ITextFieldDefinition } from '../../form/interface';
import { copyMuiOptions } from './MuiUtil';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';

const MuiTextField = forwardRef(function MuiTextField(props: ITextFieldDefinition, ref) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
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

    if(props.readonly){
        inputProps.inputProps={ readOnly: true };
    }

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