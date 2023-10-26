import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { FieldProperties } from "./Types";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
import { getEventListeners } from "./InputEventListeners";

const ValidationDatePicker = forwardRef(function ValidationDatePicker(props: FieldProperties, ref) {
    const { data, setData, error, eventListeners } = getEventListeners(props);
    const displayFormat: string = props.fieldDef.displayPattern || props.fieldDef.serverPattern || "YYYY-MM-DD";
    const inputRef: any = useRef(null);

    const toDayjs = () => {
        return dayjs(data);
    }

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

    var errorMessage = (error.message);

    var inputProps: any = { ...props.muiFieldDef, value: toDayjs() };

    var callbacks = {
        onBlur: eventListeners.onBlur,
        onFocus: eventListeners.onFocus,
        onChange: (e: any) => {
            if (e && e.toDate)
                eventListeners.onValueChange(e.toDate());
            else
                eventListeners.onValueChange(undefined);
        }
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker {...inputProps}
                format={displayFormat}
                {...callbacks}
                error={error.status}
                slotProps={{
                    textField: {
                        helperText: errorMessage,
                        variant: 'standard',
                        fullWidth: true
                    },
                }}                
            />
        </LocalizationProvider>
    );
})

export default ValidationDatePicker;