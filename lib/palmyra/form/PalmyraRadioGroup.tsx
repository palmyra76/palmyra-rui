import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup } from '@mui/material';
import useValidator from './useValidator';
import { FieldProperties } from './Types';

const PalmyraRadioGroup = forwardRef(function PalmyraRadioGroup(props: FieldProperties, ref) {
    const { data, setData, error, fieldCallbacks } = useValidator(props);
    const inputRef: any = useRef(null);
    const { options } = props.fieldDef;

    useImperativeHandle(ref, () => {
        return {
            focus() {
                inputRef.current.focus();
            },
            isValid() {
                return !error.status;
            },
            assignAttribute(data: String) {
                inputRef.current.assignAttribute(data);
            }
        };
    }, []);

    useEffect(() => {
        setData(props.value);
    }, [props.value]);

    var inputProps: any = { ...props.fieldDef, value: data };

    return (
        <FormControl fullWidth error={error.status}>
            <RadioGroup row {...inputProps} {...fieldCallbacks}>
                {Object.keys(options).map((key, index) => (
                    <FormControlLabel key={index} value={key} control={<Radio inputRef={inputRef} />} label={options[key]} />
                ))}
            </RadioGroup>
            <FormHelperText>{error.message}</FormHelperText>
        </FormControl>
    );
});

export default PalmyraRadioGroup;