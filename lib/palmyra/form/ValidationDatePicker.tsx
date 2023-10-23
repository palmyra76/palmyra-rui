import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { FieldProperties } from "./Types";
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
import useValidator from "./useValidator";

const ValidationDatePicker = forwardRef(function ValidationDatePicker(props: FieldProperties, ref) {
    const { error, fieldCallbacks } = useValidator(props);
    const dataFormat: string = props.fieldDef.displayPattern || "YYYY-MM-DD";
    const inputRef: any = useRef(null);

    const parseDate = (val) => {
        return dayjs(val, dataFormat)
    }

    // const formatDate = (val) => {
    //     return dayjs(val).format(dataFormat)
    // }
    const [data, setData] = useState(parseDate(props.value));

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

    var inputProps: any = { ...props.muiFieldDef, value: data };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker {...inputProps}
                {...fieldCallbacks}
                onError={error.status}
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