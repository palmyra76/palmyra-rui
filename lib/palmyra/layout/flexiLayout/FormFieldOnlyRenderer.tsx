import { useMemo, useRef, forwardRef } from 'react';
import getField from '../../form/FieldGenerator';

import { FieldDefinition } from '../../form/Definitions';
import { FormLayout } from './Definitions';
import { PageContext } from './Types';
import '../container/FormFieldOnlyLayout.css';

interface EditFormRendererInput {
    formLayout: FormLayout,
    context: PageContext
}

const calcContainerClass = (props: EditFormRendererInput) => {
    const { formLayout } = props;
    var containerClass = 'palmyra-form-field-container';
    const options = formLayout.options;

    if (options && options.columns) {
        switch (options.columns) {
            case 2:
                return containerClass + ' palmyra-form-field-container-2column';
            case 3:
                return containerClass + ' palmyra-form-field-container-3column';
            case 4:
                return containerClass + ' palmyra-form-field-container-4column';
        }
    }
    return containerClass;
}

const FormFieldOnlyRenderer = forwardRef(function FormFieldOnlyRenderer(props: EditFormRendererInput, ref) {
    
    const { formLayout, context } = props;
    const { formData } = context;
    const fieldRefs = useRef({});
    const containerClass = calcContainerClass(props);
    const fieldClass = 'palmyra-form-field-data';

    const generateField = useMemo(() => (field: FieldDefinition) => {
        return getField(field, fieldRefs, field.label);
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

