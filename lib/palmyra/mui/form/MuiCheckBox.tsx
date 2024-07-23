import { useRef, useImperativeHandle, forwardRef, useContext, MutableRefObject } from 'react';
import { Checkbox, FormControl, FormControlLabel } from '@mui/material';
import { IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManager } from '../../form/interface';
import { copyMuiOptions, getFieldLabel } from './MuiUtil';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import FieldDecorator from './FieldDecorator';
import { ICheckBoxField, IMutateOptions } from '../../form/interfaceFields';
import { TbSquareRounded } from "react-icons/tb";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
import { IMuiCheckBoxDefinition } from './MuiTypes';


const MuiCheckBox = forwardRef(function MuiCheckBox(props: IMuiCheckBoxDefinition, ref: MutableRefObject<ICheckBoxField>) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef = ref ? ref : useRef<ICheckBoxField>(null);
    var p = { ...props, required: false };
    const fieldManager: IFormFieldManager = getFieldManager(p, 'checkbox', currentRef);
    const { mutateOptions, setMutateOptions } = fieldManager;
    const value: boolean = fieldManager.data == true;
    const error: IFormFieldError = fieldManager.error;
    const eventListeners: IEventListeners = fieldManager.eventListeners;
    const autoFocus = props.autoFocus || false;
    const Icon = props.icon || TbSquareRounded;
    const CheckedIcon = props.checkedIcon || TbSquareRoundedCheckFilled;

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
            setRequired(_required: boolean) {
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

    var callbacks = {
        onBlur: eventListeners.onBlur,
        onFocus: eventListeners.onFocus,
        onChange: (d: any) => { if (!props.readonly) { eventListeners.onValueChange(d.target.checked); } }
    }

    return (<>{mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <FormControl {...inputProps}>
                <FormControlLabel
                    control={<Checkbox className="customCheckbox" icon={<Icon />} checkedIcon={<CheckedIcon />}
                        {...callbacks} checked={value} autoFocus={autoFocus}
                        disabled={props.disabled} readOnly={props.readonly}
                        inputRef={(r) => { inputRef.current = r }}
                    />}
                    label={props.label} />
            </FormControl>
        </FieldDecorator>}
    </>
    )
});

export default MuiCheckBox;

