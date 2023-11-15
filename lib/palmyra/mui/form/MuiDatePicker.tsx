import { useRef, useImperativeHandle, forwardRef, useContext } from 'react';
import { IDateTimeDefinition, IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManager } from '../../form/interface';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
import { copyMuiOptions } from './MuiUtil';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';

const MuiDatePicker = forwardRef(function MuiDatePicker(props: IDateTimeDefinition , ref) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const displayFormat: string = props.displayPattern || props.serverPattern || "YYYY-MM-DD";
    const fieldManager: IFormFieldManager = getFieldManager(props, 'date');
    const error: IFormFieldError = fieldManager.error;
    const data: any = fieldManager.data;
    const eventListeners: IEventListeners = fieldManager.eventListeners;

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

    var inputProps: any = copyMuiOptions(props, toDayjs());

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
                slotProps={{
                    textField: {
                        error: error.status,
                        helperText: error.message,
                        variant: 'standard',
                        fullWidth: true
                    },
                }}
            />
        </LocalizationProvider>
    );
});

export default MuiDatePicker;