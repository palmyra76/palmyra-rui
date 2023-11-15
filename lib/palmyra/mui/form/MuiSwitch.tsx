import { useRef, useImperativeHandle, forwardRef, useState, useMemo, useEffect, useContext } from 'react';
import { FormControl, FormControlLabel, FormHelperText, Switch } from '@mui/material';
import { copyMuiOptions } from './MuiUtil';
import { IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManager, ISwitchDefinition } from '../../form/interface';
import parseOptions from './MuiSwitchOption';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';

const MuiSwitch = forwardRef(function MuiSwitch(props: ISwitchDefinition , ref) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const fieldManager: IFormFieldManager = getFieldManager(props, 'switch');

    const error: IFormFieldError = fieldManager.error;
    const eventListeners: IEventListeners = fieldManager.eventListeners;

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

    useImperativeHandle(ref, () => {
        return {
            focus() {
                inputRef.current.focus();
            },
            isValid() {
                return !error.status;
            },
            assignAttribute(data) {
                inputRef.current.assignAttribute(data);
            }
        };
    }, []);

    var inputProps: any = copyMuiOptions(props, fieldManager.data);

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

    return (
        <FormControl error={error.status} {...inputProps}>
            <FormControlLabel value={getValue()}
                control={<Switch inputRef={inputRef} checked={isOn} onClick={toggleStatus} />}
                label={getLabel()}
            />
            <FormHelperText className='form-error-text'>{error.message}</FormHelperText>
        </FormControl>
    );
});

export default MuiSwitch;