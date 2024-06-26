import { useRef, useImperativeHandle, forwardRef, useContext, MutableRefObject } from 'react';
import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@mui/material';
import { IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManager } from '../../form/interface';
import { copyMuiOptions, getFieldLabel } from './MuiUtil';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import FieldDecorator from './FieldDecorator';
import { ICheckBoxField, IMutateOptions } from '../../form/interfaceFields';
import { TbSquareRounded } from "react-icons/tb";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
import { IMuiCheckBoxGroupDefinition } from './MuiTypes';


const MuiCheckBoxGroup = forwardRef(function MuiCheckBoxGroup(props: IMuiCheckBoxGroupDefinition, ref: MutableRefObject<ICheckBoxField>) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef = ref ? ref : useRef<ICheckBoxField>(null);
    const { options } = props;
    const fieldManager: IFormFieldManager = getFieldManager(props, 'checkbox', currentRef);
    const { mutateOptions, setMutateOptions } = fieldManager;
    const values = fieldManager.data ? fieldManager.data.split(',') : [];
    const flexDirection = props.flexDirection || 'row';
    const error: IFormFieldError = fieldManager.error;
    const eventListeners: IEventListeners = fieldManager.eventListeners;
    const autoFocus = props.autoFocus || false;

    const inputRef: any = useRef(null);

    useImperativeHandle(currentRef, () => {
        return {
            focus() {
                inputRef.current.checked = true;
                inputRef.current.focus();
            },
            isValid() {
                return !error.status;
            },
            getValue() {
                return fieldManager.getData();
            },
            clear() {
                fieldManager.setData('', true);
            },
            setValue(d: any, doValidate: boolean = false) {
                fieldManager.setData(d, doValidate);
            },
            setVisible(visible: boolean) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, visible }));
            },
            setRequired(required: boolean) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, required }));
            },
            setReadOnly(readonly: boolean) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, readonly }));
            },
            setAttribute(options: IMutateOptions) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, ...options }));
            },
            setOptions(d: any) {
            },
            getOptions() {
            }
        };
    }, [fieldManager]);

    var inputProps: any = copyMuiOptions(props, fieldManager.data, props.label);

    if (props.readonly) {
        inputProps.inputProps = { readOnly: true };
    }

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


    return (<>{mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <FormControl fullWidth error={error.status} {...inputProps} style={{ flexDirection: flexDirection }}>
                {options ?
                    Object.keys(options).map((key, i) => (
                        <FormControlLabel key={key} value={key}
                            control={<Checkbox icon={<TbSquareRounded style={{ fontSize: '20px' }} />} checkedIcon={<TbSquareRoundedCheckFilled style={{ fontSize: '20px' }} />}
                                {...callbacks} checked={isSelected(key)} autoFocus={autoFocus}
                                disabled={props.readonly}
                                inputRef={(r) => { if (0 == i) inputRef.current = r }}
                            />}
                            label={options[key]} />
                    ))
                    : <div>No options provided</div>}
                <FormHelperText className='form-error-text'>{error.message}</FormHelperText>
            </FormControl>
        </FieldDecorator>}
    </>
    )
});

export default MuiCheckBoxGroup;

