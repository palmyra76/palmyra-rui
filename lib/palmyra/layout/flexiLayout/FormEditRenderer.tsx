import { useMemo, useRef, forwardRef } from 'react';
import { default as DefaultFieldContainer } from '../container/FieldContainer';
import getField from '../../form/FieldGenerator';

import { FieldDefinition } from '../../form/Definitions';
import { FormLayout } from './Definitions';
import { PageContext } from './Types';

interface EditFormRendererInput {
    formLayout: FormLayout,
    context: PageContext
}

const FormRenderer = forwardRef(function FormRenderer(props: EditFormRendererInput, ref) {
    checkInputs(props);
    const { formLayout, context } = props;
    const { getFieldManager, formData } = context;
    const FieldContainer = formLayout.Container || DefaultFieldContainer;
    const fieldRefs = useRef({});

    const generateField = useMemo(() => (field: FieldDefinition) => {
        return getField(field, getFieldManager, fieldRefs);
    }, [formData.data]);


    var columns = formLayout.options?.columns || 1;
    var options = { columns };

    return (
        <form className="palmyra-form-field-container-wrapper" noValidate>
            {
                formLayout.fields.map((field, index) => (
                    <FieldContainer key={field.attribute} index={index}
                        field={field} label={field.title} options={options}>
                        {generateField(field)}
                    </FieldContainer>
                ))
            }
        </form>
    );
});

export default FormRenderer;

function checkInputs(props: EditFormRendererInput) {
    if (!props.context?.getFieldManager)
        throw new Error('Form Context not available, if this the form page, set the type as "form" in the definition');
}
