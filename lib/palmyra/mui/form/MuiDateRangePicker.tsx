import { useRef, useImperativeHandle, forwardRef, useContext, MutableRefObject, useState, useEffect } from 'react';
import { IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManager } from '../../form/interface';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
import { copyMuiOptions, getFieldLabel } from './MuiUtil';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import FieldDecorator from './FieldDecorator';
import { IDateField, IMutateOptions } from '../../form/interfaceFields';
import { IMuiDateRangePickerDefinition } from './MuiTypes';

const MuiDateRangePicker = forwardRef(function MuiDatePicker(props: IMuiDateRangePickerDefinition, ref: MutableRefObject<IDateField>) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef = ref ? ref : useRef<IDateField>(null);
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
        if (d)
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
            getValue() {
                return fieldManager.getData();
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
            setCurrent() {

            },
        };
    }, [fieldManager]);

    var fromInputProps: any = copyMuiOptions(props, toDayjs(data.from), props.label);

    var toInputProps: any = copyMuiOptions(props, toDayjs(data.to), props.label);

    const fromOnChange = (date: any) => {
        setFromDate(date);
    }

    const toOnChange = (date: any) => {
        setToDate(date);
    }

    useEffect(() => {
        eventListeners.onValueChange({ from: fromDate, to: toDate });
    }, [fromDate, toDate])


    return (<>
        {mutateOptions.visible &&
            <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
                customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker {...fromInputProps}
                        value={fromInputProps.value ?? dayjs}
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
                    />
                    <span style={{ width: '40%', textAlign: 'center', padding: '5px' }}>to</span>
                    <DatePicker {...toInputProps}
                        value={toInputProps.value ?? dayjs}
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