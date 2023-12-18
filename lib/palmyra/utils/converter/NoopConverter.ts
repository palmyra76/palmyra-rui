import { Converter } from ".";
import { AttributeDefinition } from "../../form/Definitions";
import { getValueByKey } from "../../form/FormUtil";

class NoopConverter implements Converter<any, any>{
    getFieldData = (data: any, props: AttributeDefinition) => {
        return getValueByKey(props.attribute, data);
    };

    format = (data: any): any => {
        return data
    };

    parse = (text: any): any => {
        return text;
    };

    convert = (text: any): any => {
        return text;
    };

    getDefaultValue = (d: any): any => {
        return d || '';
    }
}

const noopConverter = new NoopConverter();

export { noopConverter }