import { AttributeDefinition, IDecoration } from "../../form/interface";
import { IMutateOptions } from "../../form/interfaceFields";

const copyMuiOptions = (props: AttributeDefinition, value: any, label?: string, mutateOptions?: IMutateOptions) => {
    const fieldProps = props.fieldProps || {};
    const mOptions = mutateOptions || {
        required: props.required == true,
        readonly: props.readonly == true,
        visible: props.visible == false ? false : true,
        disabled: props.disabled == true
    };

    var result: any = {        
        placeholder: props.placeHolder, value, variant: props.variant,
        ...fieldProps, disabled: mOptions.disabled, required: mOptions.required
    }

    if (mOptions.readonly) {
        result.inputProps = { readOnly: true };
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