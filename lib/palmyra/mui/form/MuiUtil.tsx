import { AttributeDefinition, IDecoration } from "../../PalmyraForm/interface";


const copyMuiOptions = (props: AttributeDefinition, value: any, label?: string) => {
    const fieldProps = props.fieldProps || {};

    var result: any = {
        disabled: props.disabled, required: props.required,
        placeholder: props.placeHolder, value, variant: props.variant,
        ...fieldProps
    }

    if (label) {
        result.label = label;
    }

    return result;
}

const getFieldLabel = (props: AttributeDefinition & IDecoration) => {
    if (props.required && props.title)
        return (
            <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                    {props.title}
                    <span style={{ color: 'red' }}>*</span>
                </div>
            </>
        );
    else
        return props.title;
}

export { copyMuiOptions, getFieldLabel }