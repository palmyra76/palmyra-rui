import { AttributeDefinition } from "../../form/interface";

const copyMuiOptions = (props: AttributeDefinition, value: any, title?: string) => {
    var result: any = {
        disabled: props.disabled, required: props.required,
        placeholder: props.placeHolder, value ,variant:props.variant
    }

    if (title){
        result.label = title;
    }

    return result;
}

export { copyMuiOptions }