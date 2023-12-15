import { useRef, useImperativeHandle, forwardRef, useContext, MutableRefObject } from 'react';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManager, ISelectDefinition } from '../../form/interface';
import { copyMuiOptions, getFieldLabel } from './MuiUtil';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import FieldDecorator from './FieldDecorator';


const MuiSelect = forwardRef(function MuiSelect(props: ISelectDefinition, ref: MutableRefObject<any>) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef = ref ? ref : useRef(null);
    const { options } = props;
    const variant = props.variant || 'standard';
    const autoFocus = props.autoFocus || false;
    const required = props.required || false;

    // @ts-ignore
    const fieldManager: IFormFieldManager = getFieldManager(props, 'select', currentRef);
    const { mutateOptions, setMutateOptions } = fieldManager;
    const error: IFormFieldError = fieldManager.error;
    const eventListeners: IEventListeners = fieldManager.eventListeners;

    const inputRef: MutableRefObject<any> = useRef(null);

    useImperativeHandle(currentRef, () => {
        return {
            focus() {
                if (inputRef)
                    inputRef.current.focus();
            },
            isValid() {
                return !error.status;
            },
            assignAttribute(data: String) {
                inputRef.current.assignAttribute(data);
            },
            getValue() {
                return fieldManager.getData();
            },
            clear() {
                fieldManager.setData('');
            },
            setValue(d: any) {
                fieldManager.setData(d)
            },
            setVisible(d: boolean) {
                setMutateOptions({ visible: d })
            }
        };
    }, [fieldManager]);

    var inputProps: any = copyMuiOptions(props, fieldManager.data, props.label);

    if (props.readonly) {
        inputProps.inputProps = { readOnly: true };
    }

    var callbacks = {
        onBlur: eventListeners.onBlur,
        onFocus: eventListeners.onFocus,
        onChange: (d: any) => (eventListeners.onValueChange(d.target.value))
    }

    return (<>{mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <FormControl variant={variant} fullWidth error={error.status}>
                {props.label ?
                    <InputLabel required={required}>{props.label}</InputLabel> : <></>}
                <Select {...inputProps} {...callbacks} inputRef={(i) => { inputRef.current = i; }} autoFocus={autoFocus}>
                    {options ?
                        Object.keys(options).map((key, index) => (
                            <MenuItem key={index} value={key}>{options[key]}</MenuItem>
                        )
                        ) : <div>No options provided</div>}
                </Select>
                <FormHelperText className='form-error-text'>{error.message}</FormHelperText>
            </FormControl>
        </FieldDecorator>}
    </>
    );
});

export default MuiSelect;