import { FormDataTransformer } from ".";
import { AttributeDefinition } from "../../form/Definitions";
import { getValueByKey, setValueByKey } from "../../form/FormUtil";
import { IServerLookupDefinition } from "../../form/interface";
import { IInputField } from "../../form/interfaceFields";

class ServerlookupTransformer implements FormDataTransformer {
    props: IServerLookupDefinition;
    constructor(props: AttributeDefinition) {
        //@ts-ignore
        this.props = props;
    }

    getFormData = (data: any) => {
        const props: IServerLookupDefinition = this.props;
        
        if (props.multiple) {
            return getValueByKey(props.attribute, data);
        }

        if (props.displayAttribute) {
            const idAttribute = props.idAttribute || props.attribute;
            const displayAttribute = props.displayAttribute;

            const options = {};
            const value = getValueByKey(idAttribute, data);
            if (undefined == value)
                return;
            const displayValue = getValueByKey(displayAttribute, data);

            const idKey = props.lookupOptions?.idAttribute || 'id';
            const labelKey = props.lookupOptions?.titleAttribute || 'name';
            setValueByKey(idKey, options, value);
            setValueByKey(labelKey, options, displayValue);
            return options;
        } else {
            return getValueByKey(this.props.attribute, data);
        }
    };
    getFieldData = (field: IInputField) => {
        return field.getValue();
    };
}

export { ServerlookupTransformer };