import { useRef, useImperativeHandle, forwardRef, useState, useMemo, useEffect, useContext, MutableRefObject } from 'react';
import { FormControl, FormControlLabel, FormHelperText, Switch } from '@mui/material';
import { copyMuiOptions, getFieldLabel } from './MuiUtil';
import { IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManager, ISwitchDefinition } from '../../form/interface';
import parseOptions from './OptionsParser';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import FieldDecorator from './FieldDecorator';

const MuiSwitch = forwardRef(function MuiSwitch(props: ISwitchDefinition, ref: MutableRefObject<any>) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef = ref ? ref : useRef(null);
    const fieldManager: IFormFieldManager = getFieldManager(props, 'switch', currentRef);
    const { mutateOptions, setMutateOptions } = fieldManager;
    const error: IFormFieldError = fieldManager.error;
    const eventListeners: IEventListeners = fieldManager.eventListeners;
    const autoFocus = props.autoFocus || false;

    const parsedOptions = useMemo(() => parseOptions(props.options, props.name),
        [props.options, props.name]);

    const parseValue = (value, defaultValue): boolean => {
        var checkedValue = parsedOptions['checked'].value;
        if (value != undefined && value != null) {
            return checkedValue == value;
        } else
            return checkedValue == defaultValue;
    }

    const [isOn, setIsOn] = useState(parseValue(fieldManager.data, props.defaultValue));

    const inputRef = useRef(null);

    useEffect(() => {
        setIsOn(parseValue(fieldManager.data, props.defaultValue));
    }, [fieldManager.data])

    useImperativeHandle(currentRef, () => {
        return {
            focus() {
                inputRef.current.checked = true;
                inputRef.current.focus();
            },
            isValid() {
                return !error.status;
            },
            assignAttribute(data) {
                inputRef.current.assignAttribute(data);
            },
            setValue(d: any) {
                fieldManager.setData(d)
            },
            setVisible(d: boolean) {
                setMutateOptions({ visible: d })
            }
        };
    }, []);

    var inputProps: any = copyMuiOptions(props, fieldManager.data, props.label);

    if (props.readonly) {
        inputProps.inputProps = { readOnly: true };
    }

    const toggleStatus = () => {
        setIsOn(!isOn);
    };

    useEffect(() => {
        eventListeners.onValueChange(getValue());
    }, [isOn])

    const getLabel = () => {
        var key = isOn ? 'checked' : 'unchecked';
        return parsedOptions[key].title;
    }

    const getValue = () => {
        var key = isOn ? 'checked' : 'unchecked';
        return parsedOptions[key].value;
    }

    return (<>{mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <FormControl error={error.status} {...inputProps}>
                <FormControlLabel value={getValue()} inputRef={(i) => { inputRef.current = i; }}
                    control={<Switch checked={isOn} onClick={toggleStatus}
                        disabled={props.readonly} autoFocus={autoFocus}
                    />}
                    label={getLabel()}
                />
                <FormHelperText className='form-error-text'>{error.message}</FormHelperText>
            </FormControl>
        </FieldDecorator>}
    </>
    );
});

export default MuiSwitch;