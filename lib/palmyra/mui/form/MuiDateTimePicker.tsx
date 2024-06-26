import { useRef, useImperativeHandle, forwardRef, useContext, MutableRefObject } from 'react';
import { IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManager } from '../../form/interface';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
import { copyMuiOptions, getFieldLabel } from './MuiUtil';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import FieldDecorator from './FieldDecorator';
import { IDateTimeField, IMutateOptions } from '../../form/interfaceFields';
import { IDateTimePickerDefinition } from '../../PalmyraForm/interface';

const MuiDateTimePicker = forwardRef(function MuiDateTimePicker(props: IDateTimePickerDefinition, ref: MutableRefObject<IDateTimeField>) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef = ref ? ref : useRef<IDateTimeField>(null);
    const displayFormat: string = props.displayPattern || props.serverPattern || "YYYY-MM-DD HH:mm:ss";
    const fieldManager: IFormFieldManager = getFieldManager(props, 'datetime', currentRef);
    const { mutateOptions, setMutateOptions } = fieldManager;
    const error: IFormFieldError = fieldManager.error;
    const data: any = fieldManager.data;
    const eventListeners: IEventListeners = fieldManager.eventListeners;
    const variant = props.variant || 'standard';
    const autoFocus = props.autoFocus || false;
    const inputRef: any = useRef(null);

    const toDayjs = () => {
        return dayjs(data);
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

    var inputProps: any = copyMuiOptions(props, toDayjs(), props.label);

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

    return (<>{mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker {...inputProps}
                    readOnly={props.readonly}
                    format={displayFormat}
                    autoFocus={autoFocus}
                    maxDate={props?.range?.maxDate}
                    minDate={props?.range?.minDate}
                    maxDateTime={props?.range?.maxDateTime}
                    minDateTime={props?.range?.minDateTime}
                    maxTime={props?.range?.maxTime}
                    minTime={props?.range?.minTime}
                    {...callbacks}
                    views={['year', 'day', 'hours', 'minutes', 'seconds']}
                    slotProps={{
                        textField: {
                            error: error.status,
                            helperText: error.message,
                            variant: variant,
                            fullWidth: true,
                            inputRef
                        },
                    }}
                />
            </LocalizationProvider>
        </FieldDecorator>}
    </>
    );
});

export default MuiDateTimePicker;