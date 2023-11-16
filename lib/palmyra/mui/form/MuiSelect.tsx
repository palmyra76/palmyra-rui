import { useRef, useImperativeHandle, forwardRef, useContext } from 'react';
import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material';
import { IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManager, ISelectDefinition } from '../../form/interface';
import { copyMuiOptions } from './MuiUtil';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import FieldDecorator from './FieldDecorator';


const MuiSelect = forwardRef(function MuiSelect(props: ISelectDefinition, ref) {
    const { options } = props;
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);

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

    if (props.readonly) {
        inputProps.inputProps = { readOnly: true };
    }

    var callbacks = {
        onBlur: eventListeners.onBlur,
        onFocus: eventListeners.onFocus,
        onChange: (d: any) => (eventListeners.onValueChange(d.target.value))
    }

    return (
        <FieldDecorator label={props.title} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
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
        </FieldDecorator>
    );
});

export default MuiSelect;