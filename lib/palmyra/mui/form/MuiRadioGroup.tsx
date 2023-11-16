import { useRef, useImperativeHandle, forwardRef, useContext } from 'react';
import { FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup } from '@mui/material';
import { IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManager, IRadioGroupDefinition } from '../../form/interface';
import { copyMuiOptions } from './MuiUtil';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import FieldDecorator from './FieldDecorator';

const MuiRadioGroup = forwardRef(function MuiRadioGroup(props: IRadioGroupDefinition, ref) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const { options } = props;
    const fieldManager: IFormFieldManager = getFieldManager(props, 'radio');
    const row: boolean = props.flexDirection != 'column';
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
            <FormControl fullWidth error={error.status} >
                <RadioGroup row={row} {...callbacks} {...inputProps}>
                    {options ?
                        Object.keys(options).map((key, index) => (
                            <FormControlLabel key={index} value={key}
                                control={<Radio inputRef={inputRef} inputProps={inputProps} />} label={options[key]} />
                        ))
                        : <div>No options provided</div>}
                </RadioGroup>
                <FormHelperText className='form-error-text'>{error.message}</FormHelperText>
            </FormControl>
        </FieldDecorator>
    );
});

export default MuiRadioGroup;