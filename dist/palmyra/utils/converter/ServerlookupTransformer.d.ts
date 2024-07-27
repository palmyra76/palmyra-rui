import { MutableRefObject } from 'react';
import { Converter } from '.';
import { AttributeDefinition } from '../../form/Definitions';
import { IMuiServerLookupDefinition } from '../../mui/form/MuiTypes';

declare class ServerlookupTransformer implements Converter<any, any> {
    props: IMuiServerLookupDefinition;
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
