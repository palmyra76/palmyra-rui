import { useMemo, useRef, forwardRef } from 'react';
import getField from '../../form/FieldGenerator';

import { FieldDefinition } from '../../form/Definitions';
import { FormLayout } from './Definitions';
import { PageContext } from './Types';

interface EditFormRendererInput {
    formLayout: FormLayout,
    context: PageContext
}

const calcContainerClass = (props: EditFormRendererInput) => {
    const { formLayout } = props;
    var containerClass = 'palmyra-form-field-only-container';
    const options = formLayout.options;

    if (options && options.columns) {
        switch (options.columns) {
            case 2:
                return containerClass + ' palmyra-form-field-only-container-2column';
            case 3:
                return containerClass + ' palmyra-form-field-only-container-3column';
            case 4:
                return containerClass + ' palmyra-form-field-only-container-4column';
        }
    }
    return containerClass;
}

const FormFieldOnlyRenderer = forwardRef(function FormFieldOnlyRenderer(props: EditFormRendererInput, ref) {
    checkInputs(props);
    const { formLayout, context } = props;
    const { getFieldManager, formData } = context;
    const fieldRefs = useRef({});
    const containerClass = calcContainerClass(props);
    const fieldClass = 'palmyra-form-field-only-data';

    const generateField = useMemo(() => (field: FieldDefinition) => {
        return getField(field, getFieldManager, fieldRefs, field.title);
    }, [formData.data]);

    return (
        <form className='palmyra-form-field-only-container-wrapper' noValidate>
            {
                formLayout.fields.map((field, index) => (
                    <div key={field.attribute} className={containerClass}>
                        <div className={fieldClass}>
                            {generateField(field)}
                        </div>
                    </div>
                ))
            }
        </form>
    );
});

export default FormFieldOnlyRenderer;

function checkInputs(props: EditFormRendererInput) {
    if (!props.context?.getFieldManager)
        throw new Error('Form Context not available, if this the form page, set the type as "form" in the definition');
}
