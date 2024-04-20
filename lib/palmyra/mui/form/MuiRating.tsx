import { useRef, useImperativeHandle, forwardRef, useContext, MutableRefObject } from 'react';
import { Rating } from '@mui/material';
import { IEventListeners, IFormFieldError, IFormFieldManager, IGetFieldManager, IRatingFieldDefinition } from '../../form/interface';
import { copyMuiOptions, getFieldLabel } from './MuiUtil';
import { FieldManagerContext } from '../../layout/flexiLayout/FlexiLayoutContext';
import FieldDecorator from './FieldDecorator';
import { ITextField, IMutateOptions, IRatingField } from '../../form/interfaceFields';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

const MuiRating = forwardRef(function MuiTextField(props: IRatingFieldDefinition, ref: MutableRefObject<IRatingField>) {
    const getFieldManager: IGetFieldManager = useContext(FieldManagerContext);
    const currentRef = ref ? ref : useRef<ITextField>(null);
    const fieldManager: IFormFieldManager = getFieldManager(props, 'string', currentRef);
    const { mutateOptions, setMutateOptions } = fieldManager;
    const error: IFormFieldError = fieldManager.error;
    const eventListeners: IEventListeners = fieldManager.eventListeners;
    const inputRef: any = useRef(null);
    const variant = props.variant || 'standard';
    const autoFocus = props.autoFocus || false;
    const precision = props.precision || 1;
    const max = props.max || 5;
    const Icon = props.icon || StarIcon;
    const EmptyIcon = props.emptyIcon || StarOutlineIcon;

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
    }

    var callbacks = {
        onBlur: eventListeners.onBlur,
        onFocus: eventListeners.onFocus,
        onChange: (d: any) => (eventListeners.onValueChange(d.target.value))
    }

    return (<>{mutateOptions.visible &&
        <FieldDecorator label={getFieldLabel(props)} customContainerClass={props.customContainerClass} colspan={props.colspan}
            customFieldClass={props.customFieldClass} customLabelClass={props.customLabelClass}>
            <Rating {...inputProps}
                variant={variant}
                precision={precision}
                readOnly={props.readonly}
                disabled={props.disabled}
                inputRef={inputRef}
                size={props.size}
                icon={<Icon />}
                emptyIcon={<EmptyIcon />}
                max={max}
                {...callbacks}
                error={error.status}
                helperText={error.message}
                autoFocus={autoFocus}
            />
        </FieldDecorator>}
    </>
    );
});

export default MuiRating;