import { useRef, useImperativeHandle, forwardRef, useContext, MutableRefObject } from 'react';
import { IDateTimeDefinition, IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManager } from '../../form/interface';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from "dayjs";
import { copyMuiOptions, getFieldLabel } from './MuiUtil';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import FieldDecorator from './FieldDecorator';

const MuiDateTimePicker = forwardRef(function MuiDateTimePicker(props: IDateTimeDefinition, ref: MutableRefObject<any>) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef = ref ? ref : useRef(null);
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
            assignAttribute(data: String) {
                inputRef.current.assignAttribute(data);
            },
            getValue() {
                return fieldManager.getData();
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
                    {...callbacks}
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