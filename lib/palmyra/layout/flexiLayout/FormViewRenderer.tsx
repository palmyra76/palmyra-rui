import { useEffect, useState } from 'react';
import { default as DefaultFieldContainer } from '../container/FieldContainer';

import { getDisplayValue } from '../../form/FormUtil';
import { FieldDefinition, FormData } from '../../form/Types';

import { FormLayout } from '../Types'

interface ViewFormRendererInput {
    formLayout: FormLayout,
    data: FormData,
    FieldContainer?: React.FC
}

const FormViewRenderer = (props: ViewFormRendererInput) => {
    const { formLayout } = props;
    const [data, setData] = useState<FormData>(props.data);
    const FieldContainer = props.FieldContainer || DefaultFieldContainer;

    useEffect(() => {
        setData(props.data);
    }, [props.data]);

    const getField = (field: FieldDefinition) => {
        const displayValue: any = getDisplayValue(field, data);
        return <div>{displayValue}</div>
    }

    var columns = formLayout.options?.columns || 1;
    var options = { columns };

    return (
        <div className="palmyra-form-field-container-wrapper">
            {
                formLayout.fields.map((field, index) => (
                    <FieldContainer label={field.label} field={field}
                        key={field.attribute}
                        options={options} index={index}>
                        {getField(field)}
                    </FieldContainer>
                ))
            }
        </div>
    );
};

export default FormViewRenderer;
export type { ViewFormRendererInput };