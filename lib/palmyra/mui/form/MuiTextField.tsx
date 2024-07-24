import { useRef, useImperativeHandle, forwardRef, useContext, MutableRefObject } from 'react';
import { TextField } from '@mui/material';
import { IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManager, ITextFieldDefinition } from '../../form/interface';
import { copyMuiOptions, getFieldLabel } from './MuiUtil';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import FieldDecorator from './FieldDecorator';
import { ITextField, IMutateOptions } from '../../form/interfaceFields';

const MuiTextField = forwardRef(function MuiTextField(props: ITextFieldDefinition, ref: MutableRefObject<ITextField>) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef = ref ? ref : useRef<ITextField>(null);
    const fieldManager: IFormFieldManager = getFieldManager(props, 'string', currentRef);
    const { mutateOptions, setMutateOptions } = fieldManager;
    const error: IFormFieldError = fieldManager.error;
    const eventListeners: IEventListeners = fieldManager.eventListeners;
    const inputRef: any = useRef(null);
    const variant = props.variant || 'standard';
    const autoFocus = props.autoFocus || false;

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
            setDisabled(disabled: boolean) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, disabled }));
            },
            setAttribute(options: IMutateOptions) {
                setMutateOptions((d: IMutateOptions) => ({ ...d, ...options }));
            }
        };
    }, [fieldManager]);

    var inputProps: any = copyMuiOptions(props, fieldManager.data, props.label, mutateOptions);

    var callbacks = {
        onBlur: eventListeners.onBlur,
        onFocus: eventListeners.onFocus,
        onChange: (d: any) => { if (!inputProps.readOnly) eventListeners.onValueChange(d.target.value); }
    }

    return (<>{mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <TextField {...inputProps}
                variant={variant}
                fullWidth={true}
                inputRef={inputRef}
                {...callbacks}
                error={error.status}
                helperText={error.message}
                autoFocus={autoFocus}
            />
        </FieldDecorator>}
    </>
    );
});

export default MuiTextField;