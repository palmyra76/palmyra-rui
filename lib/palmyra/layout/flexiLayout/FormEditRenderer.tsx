import { useMemo, useRef, useImperativeHandle, forwardRef } from 'react';
import { default as DefaultFieldContainer } from '../container/FieldContainer';
import getField from '../../form/FieldGenerator';

import { FieldContext, FormContext } from '../../form/Types';
import { FieldDefinition, FormData } from '../../form/Definitions';
import { FormLayout } from './Definitions';

interface EditFormRendererInput {
    formLayout: FormLayout,
    formContext: FormContext
}

const FormRenderer = forwardRef(function FormRenderer(props: EditFormRendererInput, ref) {
    checkInputs(props);

    const { formLayout, formContext } = props;
    const { rules, onDataChange } = formContext;

    const eventHandlers = formContext.eventHandlers || {};
    //    const { fieldGenerators } = props; // TODO  generate custom fields using the array of generators provided
    const FieldContainer = formLayout.Container || DefaultFieldContainer;
    const fieldRefs = useRef({});
    const data = formContext.data;

    const updateData = (kv) => {
        for (var field in kv) {
            var value = kv[field];
            setValueByKey(field, data, value);
        }
        setSubmitStatus(kv, data);
    };

    // useEffect(() => {
    //     setData(formContext.data);
    // }, [formContext.data]);

    const _focus = () => {
        var firstField = formLayout.fields[0];
        var inputRef = fieldRefs.current[firstField.attribute];
        if (inputRef) {
            inputRef.focus();
        }
    }

    const _focusErrorInput = () => {
        for (var field of formLayout.fields) {
            var inputRef = fieldRefs.current[field.attribute];
            if (inputRef && inputRef.valid && inputRef.focus) {
                if (!inputRef.isValid()) {
                    inputRef.focus();
                    return true;
                }
            }
        }
        return false;
    }

    useImperativeHandle(ref, () => {
        return {
            focus() {
                _focus();
            },
            focusErrorInput() {
                return _focusErrorInput();
            }
        };
    }, []);

    const setSubmitStatus = (kv, newData) => {
        var dValid = {};
        for (var field in kv) {
            var value = kv[field];
            var validator = rules[field];
            if (validator) {
                var { status } = validator(value);
                dValid[field] = status;
            } else {
                dValid[field] = true;
            }
        }
        onDataChange({ data: newData, dataValid: dValid });
    }

    const generateField = useMemo(() => (field: FieldDefinition) => {        
        const fieldRuntime = getFieldRuntime(field, data);
        return getField(field, fieldRuntime, fieldRefs, data);
    }, [data]);

    const getValueByKey = (fieldName, data) => {
        if (data === undefined || data == null) {
            return undefined;
        }

        var index = fieldName.indexOf('.')
        if (index < 0) {
            return data[fieldName];
        }

        var objKey = fieldName.substring(0, index);
        var fieldKey = fieldName.substring(index + 1);

        return getValueByKey(fieldKey, data[objKey]);
    }

    const setValueByKey = (fieldName, data, value) => {

        var index = fieldName.indexOf('.')
        if (index < 0) {
            data[fieldName] = value;
            return;
        }

        var objKey = fieldName.substring(0, index);
        var fieldKey = fieldName.substring(index + 1);

        if (data[objKey] === undefined || data[objKey] == null) {
            data[objKey] = {};
        }

        return setValueByKey(fieldKey, data[objKey], value);
    }

    const getFieldRuntime = (field: FieldDefinition, formData: FormData): FieldContext => {
        var eventHandler = eventHandlers[field.attribute]
        var constraint = rules[field.attribute]
        var runtime: FieldContext = {}

        if (!field.disabled)
            runtime.onDataChange = updateData;
        if (constraint)
            runtime.constraint = constraint;
        if (eventHandler)
            runtime.eventHandler = eventHandler;

        return runtime;
    }

    var columns = formLayout.options?.columns || 1;
    var options = { columns };

    return (
        <div className="palmyra-form-field-container-wrapper">
            {
                formLayout.fields.map((field, index) => (
                    <FieldContainer key={field.attribute} index={index}
                        field={field} label={field.title} options={options}>
                        {generateField(field)}
                    </FieldContainer>
                ))
            }
        </div>
    );
});

export default FormRenderer;

function checkInputs(props: EditFormRendererInput) {
    if (!props.formContext)
        throw new Error('Form Context not available, if this the form page, set the type as "form" in the definition');
}
