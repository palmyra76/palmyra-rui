import { AttributeDefinition } from "../../form/interface";

const copyMuiOptions = (props: AttributeDefinition, value: any) => {
    return {
        disabled: props.disabled, required: props.required,
        placeholder: props.placeHolder, value
    }
}

export {copyMuiOptions}