import { useRef, useImperativeHandle, forwardRef, useContext, MutableRefObject, useState } from 'react';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManager, ISelectDefinition } from '../../../form/interface';
import { copyMuiOptions } from './../MuiUtil';
import { FieldManagerContext } from '../../../layout/flexiLayout/FlexiLayoutContext';
import FieldDecorator from './../FieldDecorator';
import { IDynamicOptions } from '../../../form/interfaceFields';

const MuiDFSelect = forwardRef(function MuiSelect(props: ISelectDefinition, ref: MutableRefObject<any>) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef = ref ? ref : useRef(null);
    const { options } = props;

    const [dynamicOptions, setDynamicOptions] = useState<IDynamicOptions>({
        readonly: props.readonly == true,
        visible: props.visible == false ? false : true
    });

    // @ts-ignore
    const fieldManager: IFormFieldManager = getFieldManager(props, 'select', currentRef);

    const error: IFormFieldError = fieldManager.error;
    const eventListeners: IEventListeners = fieldManager.eventListeners;

    const inputRef: any = useRef(null);

    useImperativeHandle(currentRef, () => {
        return {
            focus() {
                inputRef.current.focus();
            },
            isValid() {
                return !error.status;
            },
            assignAttribute(data: String) {
                inputRef.current.assignAttribute(data);
            },
            setValue(d: any) {
                fieldManager.setData(d);
            },
            setVisible(d: boolean) {
                setDynamicOptions({ visible: d })
            }
        };
    }, []);

    var inputProps: any = copyMuiOptions(props, fieldManager.data, props.label);

    if (props.readonly) {
        inputProps.inputProps = { readOnly: true };
    }

    var callbacks = {
        onBlur: eventListeners.onBlur,
        onFocus: eventListeners.onFocus,
        onChange: (d: any) => (eventListeners.onValueChange(d.target.value))
    }

    console.log('re-rendering', dynamicOptions);

    return (
        <>
            {dynamicOptions.visible == false ? <></> : (
                < FieldDecorator label={props.title} customContainerClass={props.customContainerClass} colspan={props.colspan}
                    customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass} >
                    <FormControl fullWidth error={error.status}>
                        {props.label ?
                            <InputLabel>{props.label}</InputLabel> : <></>}
                        <Select {...inputProps} {...callbacks} inputRef={inputRef}>

                            {options ?
                                Object.keys(options).map((key, index) => (
                                    <MenuItem key={index} value={key}>{options[key]}</MenuItem>
                                )
                                ) : <div>No options provided</div>}
                        </Select>
                        <FormHelperText className='form-error-text'>{error.message}</FormHelperText>
                    </FormControl>
                </FieldDecorator >)
            }</>
    );
});

export default MuiDFSelect;