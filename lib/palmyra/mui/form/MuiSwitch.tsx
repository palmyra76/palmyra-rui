import { useRef, useImperativeHandle, forwardRef, useState, useMemo, useEffect } from 'react';
import { FormControl, FormControlLabel, FormHelperText, Switch } from '@mui/material';
import { copyMuiOptions } from './MuiUtil';
import { IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManagerDefinition, ISwitchDefinition } from '../../form/interface';

const parseOptions = (options, name) => {
    if (options) {
        var keys = Object.keys(options);
        if (2 == keys.length) {
            const val = Object.values[0];
            var checked = 0;
            var unchecked = 1;
            if (val == 'false' || val == '0' || val == 0 || val == 'unchecked') {
                checked = 1; unchecked = 0;
            }
            return {
                'checked': {
                    title: keys[checked],
                    value: options[keys[checked]]
                },
                'unchecked': {
                    title: keys[unchecked],
                    value: options[keys[unchecked]]
                }
            }
        } else {
            console.error('invalid options, must contain two keys - sample - ')
            console.error({ active: 1, inactive: 0 });
        }
    } else {
        return {
            'checked': {
                title: name,
                value: 1
            },
            'unchecked': {
                title: name,
                value: 0
            }
        }
    }
}

const MuiSwitch = forwardRef(function MuiSwitch(props: ISwitchDefinition & IGetFieldManagerDefinition, ref) {
    const { getFieldManager } = props;
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
        <FormControl fullWidth error={error.status} {...inputProps}>
            <FormControlLabel value={getValue()}
                control={<Switch inputRef={inputRef} checked={isOn} onClick={toggleStatus} />}
                label={getLabel()}
            />
            <FormHelperText className='form-error-text'>{error.message}</FormHelperText>
        </FormControl>
    );
});

export default MuiSwitch;