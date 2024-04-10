import { IServerLookupDefinition } from '../../form/interface';
import { AttributeDefinition } from '../../form/Definitions';
import { Converter } from '.';
import { MutableRefObject } from 'react';

declare class ServerlookupTransformer implements Converter<any, any> {
    props: IServerLookupDefinition;
    formDataRef: MutableRefObject<any>;
    constructor(props: AttributeDefinition, formDataRef: MutableRefObject<any>);
    getRawdata: (data: any, props: AttributeDefinition) => any;
    getFieldData: (data: any, p: AttributeDefinition) => {};
    format: (data: any) => any;
    parse: (text: any) => any;
    convert: (text: any) => any;
    getDefaultValue: (d: any) => any;
}
export { ServerlookupTransformer };
