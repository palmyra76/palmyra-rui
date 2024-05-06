import { useRef, useImperativeHandle, forwardRef, useContext, MutableRefObject } from 'react';
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material';
import { IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManager, IRadioGroupDefinition } from '../../form/interface';
import { copyMuiOptions, getFieldLabel } from './MuiUtil';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import FieldDecorator from './FieldDecorator';
import { IMutateOptions, IRadioGroupField } from '../../form/interfaceFields';
import { RiRadioButtonFill } from "react-icons/ri";
import { IoMdRadioButtonOff } from "react-icons/io";

const MuiRadioGroup = forwardRef(function MuiRadioGroup(props: IRadioGroupDefinition, ref: MutableRefObject<IRadioGroupField>) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef = ref ? ref : useRef<IRadioGroupField>(null);
    const { options } = props;
    const fieldManager: IFormFieldManager = getFieldManager(props, 'radio', currentRef);
    const { mutateOptions, setMutateOptions } = fieldManager;
    const row: boolean = props.flexDirection != 'column';
    const error: IFormFieldError = fieldManager.error;
    const eventListeners: IEventListeners = fieldManager.eventListeners;
    const autoFocus = props.autoFocus || false;

    const inputRef: any = useRef(null);

    useImperativeHandle(currentRef, () => {
        return {
            focus() {
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

    const readOnly = props.readonly ? true : false;

    var callbacks = {
        onBlur: eventListeners.onBlur,
        onFocus: eventListeners.onFocus,
        onChange: (d: any) => { if (!readOnly) (eventListeners.onValueChange(d.target.value)) }
    }

    const getOptions = (options: any) => {
        if (options) {
            if (options instanceof Array) {
                const o: { value: any, label: string }[] = options;
                const result = o.map((v: { value: any, label: string }, index: number) => (
                    <FormControlLabel key={v.value} value={v.value}
                        control={<Radio
                            icon={<IoMdRadioButtonOff size={24} />} checkedIcon={<RiRadioButtonFill size={24} />}
                            inputRef={inputRef} autoFocus={autoFocus} />} label={v.label} />
                ))
                console.log(result);
                return result;
            }

            if (typeof options == 'object') {
                return Object.keys(options).map((key, index) => (
                    <FormControlLabel key={index} value={key}
                        control={<Radio
                            icon={<IoMdRadioButtonOff size={24} />} checkedIcon={<RiRadioButtonFill size={24} />}
                            inputRef={inputRef} autoFocus={autoFocus} />} label={options[key]} />
                ))
            }
        }

        return <div>No options provided</div>
    }


    return (<>{mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <FormControl fullWidth error={error.status} >
                <FormLabel >{props.label}</FormLabel>
                <RadioGroup icon row={row} {...callbacks} {...inputProps}>
                    {getOptions(options)}
                </RadioGroup>
                <FormHelperText className='form-error-text'>{error.message}</FormHelperText>
            </FormControl>
        </FieldDecorator>}
    </>
    );
});

export default MuiRadioGroup;