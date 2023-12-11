import { useRef, useImperativeHandle, forwardRef, useContext, MutableRefObject } from 'react';
import { TextField } from '@mui/material';
import { IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManager, INumberFieldDefinition } from '../../form/interface';
import { copyMuiOptions, getFieldLabel } from './MuiUtil';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import FieldDecorator from './FieldDecorator';

const MuiNumberField = forwardRef(function MuiNumberField(props: INumberFieldDefinition, ref: MutableRefObject<any>) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef = ref ? ref : useRef(null);
    const fieldManager: IFormFieldManager = getFieldManager(props, 'numbersOnly', currentRef);
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
    }, [fieldManager]);

    var inputProps: any = copyMuiOptions(props, fieldManager.data, props.label);

    if (props.readonly) {
        inputProps.inputProps = { readOnly: true };
    }

    // const onChange = (d: any) => {
    //     switch (props.validationRule) {
    //         case 'number': {
    //             return (eventListeners.onValueChange(d.target.value.replace(/\D/g, '')))
    //         }
    //         case 'alphabets': {
    //             return (eventListeners.onValueChange(d.target.value.replace(/[^a-z]/gi, '')))
    //         }
    //         default:
    //             return (eventListeners.onValueChange(d.target.value))
    //     }
    // }

    var callbacks = {
        onBlur: eventListeners.onBlur,
        onFocus: eventListeners.onFocus,
        onChange: (d: any) => (eventListeners.onValueChange(d.target.value.replace(/[^\d\.\+\-]/g, '')))
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

export default MuiNumberField;