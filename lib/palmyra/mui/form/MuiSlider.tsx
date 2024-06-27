import { useRef, useImperativeHandle, forwardRef, useContext, MutableRefObject } from 'react';
import { Slider } from '@mui/material';
import {
    FieldType, IEventListeners, IFormFieldError,
    IFormFieldManager, IGetFieldManager
} from '../../form/interface';
import { copyMuiOptions, getFieldLabel } from './MuiUtil';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import FieldDecorator from './FieldDecorator';
import { ISliderField, IMutateOptions } from '../../form/interfaceFields';
import { IMuiRangeSliderDefinition } from './MuiTypes';
import { numbers } from '../../utils/CommonTypes';

const MuiSlider = forwardRef(function MuiSlider(props: IMuiRangeSliderDefinition, ref: MutableRefObject<ISliderField>) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef = ref ? ref : useRef<ISliderField>(null);
    const fieldType: FieldType = props.range ? 'sliderRange' : 'slider';
    const fieldManager: IFormFieldManager = getFieldManager(props, fieldType, currentRef);
    const { mutateOptions, setMutateOptions } = fieldManager;
    const error: IFormFieldError = fieldManager.error;
    const eventListeners: IEventListeners = fieldManager.eventListeners;
    const inputRef: any = useRef(null);
    const variant = props.variant || 'standard';
    const autoFocus = props.autoFocus || false;
    const minDistance = props.minDistance || 5;
    const label = props.label || '';

    const min = props.min || 0;
    const max = props.max || 100;

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
            }
        };
    }, [fieldManager]);

    const getData = (data: numbers): numbers => {
        if (data)
            return data;
        if (props.range) {
            return (props.range ? [min, max] : 0);
        }
    }

    var inputProps: any = copyMuiOptions(props, getData(fieldManager.data), props.label);

    if (props.readonly) {
        inputProps.inputProps = { readOnly: true };
    }

    const onSliderChange = (
        _event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            eventListeners.onValueChange(newValue);
            return;
        }
        const value = getData(fieldManager.data);

        const v = (activeThumb === 0) ?
            [Math.min(newValue[0], value[1] - minDistance), value[1]] :
            [value[0], Math.max(newValue[1], value[0] + minDistance)];
        eventListeners.onValueChange(v);
    };

    var callbacks = {
        onBlur: eventListeners.onBlur,
        onFocus: eventListeners.onFocus,
        onChange: onSliderChange
    }

    return (<>{mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass}
            colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <div style={{ width: '100%', textAlign: 'center' }}>
                {label}
                <Slider {...inputProps}
                    variant={variant}
                    fullWidth={true}
                    inputRef={inputRef}
                    {...callbacks}
                    marks={props.marks}
                    size={props.fieldProps?.size}
                    disableSwap={props.disableSwap}
                    valueLabelDisplay={props.valueLabelDisplay}
                    min={min}
                    step={props.step}
                    max={max}
                    error={error.status}
                    helperText={error.message}
                    autoFocus={autoFocus}
                />
            </div>
        </FieldDecorator>}
    </>
    );
});

export default MuiSlider;