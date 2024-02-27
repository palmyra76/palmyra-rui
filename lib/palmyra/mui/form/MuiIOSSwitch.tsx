import { useRef, useImperativeHandle, forwardRef, useState, useMemo, useEffect, useContext, MutableRefObject } from 'react';
import { FormControl, FormControlLabel, FormHelperText, Switch, SwitchProps, styled } from '@mui/material';
import { copyMuiOptions, getFieldLabel } from './MuiUtil';
import { IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManager, ISwitchDefinition } from '../../form/interface';
import parseOptions from './OptionsParser';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import FieldDecorator from './FieldDecorator';
import { IMutateOptions, ISwitchField } from '../../form/interfaceFields';

const MuiIOSSwitch = forwardRef(function MuiIOSSwitch(props: ISwitchDefinition, ref: MutableRefObject<ISwitchField>) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef = ref ? ref : useRef<ISwitchField>(null);
    const fieldManager: IFormFieldManager = getFieldManager(props, 'iosswitch', currentRef);
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
            getValue() {
                return getValue();
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
            getOptions() {

            },
            setOptions(d) {

            },
        };
    }, [fieldManager]);

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

    const IOSSwitch = styled((props: SwitchProps) => (
        <Switch {...props} />
    ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transition: theme.transitions.create(['transform'], { // Ensure smooth transition for transform
                duration: theme.transitions.duration.shortest,
              }),
            // transitionDuration: '350ms',
            // transitionTimingFunction: 'ease-in-out',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    }));

    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
        '&:active': {
          '& .MuiSwitch-thumb': {
            width: 15,
          },
          '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
            transition: theme.transitions.create(['transform'], { // Ensure smooth transition for transform
                duration: theme.transitions.duration.shortest,
              }),
          },
        },
        '& .MuiSwitch-switchBase': {
          padding: 2,
          transition: theme.transitions.create(['transform'], { // Ensure smooth transition for transform
            duration: theme.transitions.duration.shortest,
          }),
          '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              opacity: 1,
              backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
            },
          },
        },
        '& .MuiSwitch-thumb': {
          boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
          width: 12,
          height: 12,
          borderRadius: 6,
          transition: theme.transitions.create(['width','transform'], {
            duration: 200,
          }),
        },
        '& .MuiSwitch-track': {
          borderRadius: 16 / 2,
          opacity: 1,
          backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
          boxSizing: 'border-box',
        },
      }));
    return (<>{mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <FormControl error={error.status} {...inputProps}>
                <FormControlLabel value={getValue()} inputRef={(i) => { inputRef.current = i; }}
                    control={<IOSSwitch  sx={{ m: 1 }} checked={isOn} onClick={toggleStatus}
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

export default MuiIOSSwitch;