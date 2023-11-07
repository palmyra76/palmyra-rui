import { useMemo, useRef, forwardRef } from 'react';
import getField from '../../form/FieldGenerator';

import { FieldDefinition } from '../../form/Definitions';
import { FormLayout } from './Definitions';
import { PageContext } from './Types';

interface EditFormRendererInput {
    formLayout: FormLayout,
    context: PageContext
}

const FormFieldOnlyRenderer = forwardRef(function FormFieldOnlyRenderer(props: EditFormRendererInput, ref) {
    checkInputs(props);
    const { formLayout, context } = props;
    const { getFieldManager, formData } = context;
    const fieldRefs = useRef({});

    const generateField = useMemo(() => (field: FieldDefinition) => {
        return getField(field, getFieldManager, fieldRefs, field.title);
    }, [formData.data]);

    return (
        <form className="palmyra-form-field-container-wrapper" noValidate>
            {
                formLayout.fields.map((field, index) => (
                    <div key={field.attribute} >
                        {generateField(field)}
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
