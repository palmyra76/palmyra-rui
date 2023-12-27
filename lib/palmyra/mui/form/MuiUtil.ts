import { AttributeDefinition, IDecoration } from "../../form/interface";

const copyMuiOptions = (props: AttributeDefinition, value: any, label?: string) => {
    var result: any = {
        disabled: props.disabled, required: props.required,
        placeholder: props.placeHolder, value, variant: props.variant, 
        size: props.fieldProps?.size
    }

    if (label) {
        result.label = label;
    }

    return result;
}

const getFieldLabel = (props: AttributeDefinition & IDecoration) => {
    if (props.required && props.title)
        return props.title + '*';
    else
        return props.title;
}

export { copyMuiOptions, getFieldLabel }