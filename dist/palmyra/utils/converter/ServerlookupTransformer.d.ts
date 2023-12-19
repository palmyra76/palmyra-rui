import { MutableRefObject } from "react";
import { Converter } from ".";
import { AttributeDefinition } from "../../form/Definitions";
import { IServerLookupDefinition } from "../../form/interface";
declare class ServerlookupTransformer implements Converter<any, any> {
    props: IServerLookupDefinition;
    formDataRef: MutableRefObject<any>;
    constructor(props: AttributeDefinition, formDataRef: MutableRefObject<any>);
    getRawdata: (data: any, props: AttributeDefinition) => import("../../form/Definitions").InputType;
    getFieldData: (data: any, p: AttributeDefinition) => {};
    format: (data: any) => any;
    parse: (text: any) => any;
    convert: (text: any) => any;
    getDefaultValue: (d: any) => any;
}
export { ServerlookupTransformer };
