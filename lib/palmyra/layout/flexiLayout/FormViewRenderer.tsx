import { default as DefaultFieldContainer } from '../container/FieldContainer';

import { getDisplayValue } from '../../form/FormUtil';
import { FieldDefinition } from '../../form/Definitions';
import { FormLayout } from './Definitions';
import { PageContext } from './Types';


interface ViewFormRendererInput {
    formLayout: FormLayout,
    context: PageContext
    FieldContainer?: React.FC
}

const FormViewRenderer = (props: ViewFormRendererInput) => {
    const { formLayout } = props;
    const { formData } = props.context;
    const FieldContainer = props.FieldContainer || DefaultFieldContainer;

    const getField = (field: FieldDefinition) => {
        const displayValue: any = getDisplayValue(field, formData);
        return <div>{displayValue}</div>
    }

    var columns = formLayout.options?.columns || 1;
    var options = { columns };

    return (
        <form className="palmyra-form-field-container-wrapper" noValidate>
            {
                formLayout.fields.map((field: any, index: any) => (
                    <FieldContainer label={field.label} field={field}
                        key={field.attribute}
                        options={options} index={index}>
                        {getField(field)}
                    </FieldContainer>
                ))
            }
        </form>
    );
};

export default FormViewRenderer;
export type { ViewFormRendererInput };