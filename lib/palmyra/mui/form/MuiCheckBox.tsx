import { useRef, useImperativeHandle, forwardRef } from 'react';
import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@mui/material';
import { IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManagerDefinition, ISelectDefinition } from '../../form/interface';
import { copyMuiOptions } from './MuiUtil';

const MuiCheckBox = forwardRef(function MuiCheckBox(props: ISelectDefinition & IGetFieldManagerDefinition, ref) {
    const { getFieldManager, options } = props;
    const fieldManager: IFormFieldManager = getFieldManager(props, 'checkbox');
    const values = fieldManager.data ? fieldManager.data.split(',') : [];

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


    function _updateData(value: any, checked: any) {
        const currentData = fieldManager.data ? fieldManager.data.split(',') : [];
        var index = currentData.indexOf(value);

        if (checked) {
            if (index < 0)
                currentData.push(value);
        } else {
            if (index >= 0) {
                currentData.splice(index, 1);
            }
        }
        eventListeners.onValueChange(currentData.toString())
    }

    var callbacks = {
        onBlur: eventListeners.onBlur,
        onFocus: eventListeners.onFocus,
        onChange: (d: any) => { _updateData(d.target.value, d.target.checked); }
    }

    const isSelected = (key: string) => {
        return values.includes(key);
    }

    return (
        <FormControl fullWidth error={error.status} {...inputProps} >
            {options ?
                Object.keys(options).map((key) => (
                    <FormControlLabel key={key} value={key}
                        control={<Checkbox {...callbacks} checked={isSelected(key)} />}
                        label={options[key]} />
                ))
                : <div>No options provided</div>}
            <FormHelperText className='form-error-text'>{error.message}</FormHelperText>
        </FormControl>

    )
});

export default MuiCheckBox;
