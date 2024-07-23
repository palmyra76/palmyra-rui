import { useMemo, useRef, forwardRef } from 'react';
import getField from '../../form/FieldGenerator';

import { FieldDefinition } from '../../form/Definitions';
import { FormLayout } from './Definitions';
import { PageContext } from './Types';

interface EditFormRendererInput {
    formLayout: FormLayout,
    context: PageContext
}

const FormRenderer = forwardRef(function FormRenderer(props: EditFormRendererInput, ref) {

    const { formLayout, context } = props;
    const { formData } = context;
    const FieldContainer: any = formLayout.Container;
    const fieldRefs = useRef({});

    const generateField = useMemo(() => (field: FieldDefinition) => {
        return getField(field, fieldRefs);
    }, [formData.data]);


    var columns = formLayout.options?.columns || 1;
    var options = { columns };
    if (FieldContainer) {
        return (
            <form className="palmyra-form-field-container-wrapper" noValidate>
                {
                    formLayout.fields.map((field: any, index: any) => (
                        <FieldContainer key={field.attribute + field.name + field.type} index={index}
                            field={field} label={field.label} options={options}>
                            {generateField(field)}
                        </FieldContainer>
                    ))
                }
            </form>
        );
    } else {
        return (
            <form className="palmyra-form-field-container-wrapper" noValidate>
                {
                    formLayout.fields.map((field, _index) => generateField(field))
                }
            </form>
        );
    }
});

export default FormRenderer;
