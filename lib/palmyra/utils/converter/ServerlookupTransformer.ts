import { MutableRefObject } from "react";
import { Converter } from ".";
import { AttributeDefinition } from "../../form/Definitions";
import { getValueByKey, setValueByKey } from "../../form/FormUtil";
import { IServerLookupDefinition } from "../../form/interface";


// TODO - idKey and labelKey to be calculated based on props.attribute/idAttribute/displayAttribute.

class ServerlookupTransformer implements Converter<any, any> {
    props: IServerLookupDefinition;
    formDataRef: MutableRefObject<any>
    constructor(props: AttributeDefinition, formDataRef: MutableRefObject<any>) {
        //@ts-ignore
        this.props = props;
        this.formDataRef = formDataRef;
    }

    getRawdata = (data: any, props: AttributeDefinition) => {
        const p: any = props;
        const idKey = p?.lookupOptions?.idAttribute || 'id';
        const r: any = getValueByKey(props.attribute, data);
        if (r instanceof Array)
            return r;
        if (r instanceof Object)
            return r?.[idKey];
        return r;
    };

    getFieldData = (data: any, p: AttributeDefinition) => {
        const props: IServerLookupDefinition = this.props;
        if (props.multiple) {
            return getValueByKey(props.attribute, data);
        }

        const idKey = props.lookupOptions?.idAttribute || 'id';
        const labelKey = props.lookupOptions?.displayAttribute || 'name';

        if (props.displayAttribute) {
            const idAttribute = props.attribute;
            const displayAttribute = props.displayAttribute;

            const option = {};
            const value = getValueByKey(idAttribute, data);
            if (undefined == value) {
                return;
            }

            const displayValue = getValueByKey(displayAttribute, data);
            setValueByKey(idKey, option, value);
            setValueByKey(labelKey, option, displayValue);
            return option;
        } else {
            const v = getValueByKey(this.props.attribute, data);
            if (v?.[idKey] || v?.[labelKey])
                return v;
            return undefined;
        }
    };

    format = (data: any): any => {

        const props: IServerLookupDefinition = this.props;
        // return the data as it is for Array and Objects - where displayAttribute is not specified
        if (props.multiple || undefined == props.displayAttribute || null == props.displayAttribute) {
            return data;
        }

        const idKey = props.lookupOptions?.idAttribute || 'id';
        const labelKey = props.lookupOptions?.displayAttribute || 'name';
        const result = getValueByKey(idKey, data);
        if (undefined != result && props.displayAttribute) {
            setValueByKey(props.displayAttribute, this.formDataRef.current, getValueByKey(labelKey, data));
        }
        return getValueByKey(idKey, data);
    };

    parse = (text: any): any => {
        return text;
    };

    convert = (text: any): any => {
        return text;
    }

    getDefaultValue = (d: any): any => {
        if (this.props.multiple)
            return d || [];
        return d || null;
    }
}

export { ServerlookupTransformer };