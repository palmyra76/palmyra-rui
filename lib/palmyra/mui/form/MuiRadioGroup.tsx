import { useRef, useImperativeHandle, forwardRef } from 'react';
import { FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup } from '@mui/material';
import { IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManagerDefinition, ISelectDefinition } from '../../form/interface';
import { copyMuiOptions } from './MuiUtil';

const MuiRadioGroup = forwardRef(function MuiRadioGroup(props: ISelectDefinition & IGetFieldManagerDefinition, ref) {
    const { getFieldManager, options } = props;
    const fieldManager: IFormFieldManager = getFieldManager(props, 'radio');

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
        <FormControl fullWidth error={error.status}>
            <RadioGroup row {...inputProps} {...callbacks}>
                {options ?
                    Object.keys(options).map((key, index) => (
                        <FormControlLabel key={index} value={key} control={<Radio inputRef={inputRef} />} label={options[key]} />
                    ))
                    : <div>No options provided</div>}
            </RadioGroup>
            <FormHelperText className='form-error-text'>{error.message}</FormHelperText>
        </FormControl>
    );
});

export default MuiRadioGroup;