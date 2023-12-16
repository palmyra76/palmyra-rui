import { useRef, useImperativeHandle, forwardRef, useContext, useState, MutableRefObject } from 'react';
import { IconButton, TextField } from '@mui/material';
import { IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManager, ITextFieldDefinition } from '../../form/interface';
import { copyMuiOptions, getFieldLabel } from './MuiUtil';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import FieldDecorator from './FieldDecorator';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IMutateOptions, ITextField } from '../../form/interfaceFields';

const MuiPassword = forwardRef(function MuiTextField(props: ITextFieldDefinition, ref: MutableRefObject<ITextField>) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef = ref ? ref : useRef<ITextField>(null);
    const [showPassword, setShowPassword] = useState(false);
    const fieldManager: IFormFieldManager = getFieldManager(props, 'string', currentRef);
    const { mutateOptions, setMutateOptions } = fieldManager;
    const error: IFormFieldError = fieldManager.error;
    const eventListeners: IEventListeners = fieldManager.eventListeners;
    const variant = props.variant || 'standard';
    const autoFocus = props.autoFocus || false;

    const inputRef: any = useRef(null);

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
            }
        };
    }, [fieldManager]);

    var inputProps: any = copyMuiOptions(props, fieldManager.data, props.label);

    if (props.readonly) {
        inputProps.inputProps = { readOnly: true };
    } else {
        inputProps.InputProps = {
            endAdornment: (
                <IconButton onClick={() => setShowPassword((f) => !f)}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
            ),
        }
    }

    var callbacks = {
        onBlur: eventListeners.onBlur,
        onFocus: eventListeners.onFocus,
        onChange: (d: any) => (eventListeners.onValueChange(d.target.value))
    }

    return (<>{mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <TextField {...inputProps}
                variant={variant}
                type={showPassword ? 'text' : 'password'}
                fullWidth={true}
                inputRef={inputRef}
                {...callbacks}
                error={error.status}
                autoFocus={autoFocus}
                helperText={error.message}
            />
        </FieldDecorator>}
    </>
    );
});

export default MuiPassword;