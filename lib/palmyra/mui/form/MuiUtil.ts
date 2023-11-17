import { AttributeDefinition } from "../../form/interface";

const copyMuiOptions = (props: AttributeDefinition, value: any, label?: string) => {
    var result: any = {
        disabled: props.disabled, required: props.required,
        placeholder: props.placeHolder, value ,variant:props.variant
    }

    if (label){
        result.label = label;
    }

    return result;
}

export { copyMuiOptions }