import { useRef, useImperativeHandle, forwardRef } from 'react';
import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material';
import { IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManagerDefinition, ISelectDefinition } from '../../form/interface';
import { copyMuiOptions } from './MuiUtil';


const MuiSelect = forwardRef(function MuiSelect(props: ISelectDefinition & IGetFieldManagerDefinition, ref) {
    const { options, getFieldManager } = props;

    // @ts-ignore
    const fieldManager: IFormFieldManager = getFieldManager(props, 'select');

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
            <Select {...inputProps} {...callbacks} inputRef={inputRef}>

                {options ?
                    Object.keys(options).map((key, index) => (
                        <MenuItem key={index} value={key}>{options[key]}</MenuItem>
                    )
                    ) : <div>No options provided</div>}
            </Select>
            <FormHelperText className='form-error-text'>{error.message}</FormHelperText>
        </FormControl>
    );
});

export default MuiSelect;