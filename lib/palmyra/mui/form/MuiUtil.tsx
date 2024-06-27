import { AttributeDefinition, IDecoration } from "../../form/interface";

const copyMuiOptions = (props: AttributeDefinition, value: any, label?: string) => {
    // const fieldProps = props.fieldProps || {};

    var result: any = {
        disabled: props.disabled, required: props.required,
        placeholder: props.placeHolder, value
    }

    if (label) {
        result.label = label;
    }

    return result;
}

const getFieldLabel = (props: AttributeDefinition & IDecoration) => {
    const title = props.labelMode == 'title' ? props.label : ''
    if (props.required && title)
        return (
            <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                    {title}
                    <span style={{ color: 'red' }}>*</span>
                </div>
            </>
        );
    else
        return title;
}


export { copyMuiOptions, getFieldLabel }