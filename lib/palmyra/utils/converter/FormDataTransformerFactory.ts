import { FormDataTransformer } from ".";
import { AttributeDefinition, FieldDefinition, FieldType } from "../../form/Definitions";
import { getValueByKey } from "../../form/FormUtil";
import { IInputField } from "../../form/interfaceFields";
import { ServerlookupTransformer } from "./ServerLookupFormatter";

class NoopTransformer implements FormDataTransformer {
    props: any;
    constructor(props: AttributeDefinition) {
        this.props = props;
    }
    getFormData = (data: any) => {
        return getValueByKey(this.props.attribute, data);
    };
    getFieldData = (field: IInputField) => {
        return field.getValue();
    };
}

const getDataTransformer = (props: FieldDefinition): FormDataTransformer => {

    const type: FieldType = props.type;
    switch (type) {
        case 'serverlookup':
            return new ServerlookupTransformer(props);
        default:
            return new NoopTransformer(props);
    }
}

export { getDataTransformer };