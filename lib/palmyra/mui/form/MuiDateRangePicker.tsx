import { useRef, useImperativeHandle, forwardRef, useContext, MutableRefObject, useState, useEffect } from 'react';
import { IDateTimeDefinition, IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManager } from '../../form/interface';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
import { copyMuiOptions, getFieldLabel } from './MuiUtil';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import FieldDecorator from './FieldDecorator';

const MuiDateRangePicker = forwardRef(function MuiDatePicker(props: IDateTimeDefinition, ref: MutableRefObject<any>) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef = ref ? ref : useRef(null);
    const displayFormat: string = props.displayPattern || props.serverPattern || "YYYY-MM-DD";
    const fieldManager: IFormFieldManager = getFieldManager(props, 'dateRange', currentRef);
    const { mutateOptions, setMutateOptions } = fieldManager;
    const error: IFormFieldError = fieldManager.error;
    const data: any = fieldManager.data;
    const eventListeners: IEventListeners = fieldManager.eventListeners;
    const variant = props.variant || 'standard';
    const inputRef: any = useRef(null);

    const [fromDate, setFromDate] = useState();
    const [toDate, setToDate] = useState();

    const toDayjs = (d) => {
        if(d)
            return dayjs(d);
    }

    useImperativeHandle(currentRef, () => {
        return {
            focus() {
                inputRef.current.focus();
            },
            isValid() {
                return !error.status;
            },
            assignAttribute(data: String) {
                inputRef.current.assignAttribute(data);
            },
            clear() {
                fieldManager.setData('');
            },
            setValue(d: any) {
                fieldManager.setData(d)
            },
            setVisible(d: boolean) {
                setMutateOptions({ visible: d })
            }
        };
    }, []);

    var fromInputProps: any = copyMuiOptions(props, toDayjs(data.from), props.label);

    var toInputProps: any = copyMuiOptions(props, toDayjs(data.to), props.label);

    const fromOnChange = (date: any) => {
        setFromDate(date);
    }

    const toOnChange = (date: any) => {
        setToDate(date);
    }

    useEffect(() => {
        eventListeners.onValueChange({ from:fromDate, to:toDate });
    }, [fromDate, toDate])

    return (<>{mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker {...fromInputProps}
                    readOnly={props.readonly}
                    format={displayFormat}
                    onChange={fromOnChange}
                    slotProps={{
                        textField: {
                            error: error.status,
                            helperText: error.message,
                            variant: variant,
                            inputRef
                        },
                    }}
                /> to
                <DatePicker {...toInputProps}
                    readOnly={props.readonly}
                    format={displayFormat}
                    onChange={toOnChange}
                    slotProps={{
                        textField: {
                            error: error.status,
                            helperText: error.message,
                            variant: variant,
                            inputRef
                        },
                    }}
                />
            </LocalizationProvider>
        </FieldDecorator>}
    </>
    );
});

export default MuiDateRangePicker;