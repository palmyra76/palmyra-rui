import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material';
import useValidator from './useValidator';
import { FieldProperties } from './Types';

const PalmyraSelect = forwardRef(function PalmyraSelect(props: FieldProperties, ref) {
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
            <Select {...inputProps} {...fieldCallbacks} inputRef={inputRef}>
                {Object.keys(options).map((key, index) => (
                    <MenuItem key={index} value={key}>{options[key]}</MenuItem>
                )
                )}
            </Select>
            <FormHelperText>{error.message}</FormHelperText>
        </FormControl>
    );
});

export default PalmyraSelect;