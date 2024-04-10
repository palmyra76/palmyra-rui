import { AttributeDefinition } from '../../form/Definitions';
import { Converter } from '.';

declare class NoopConverter implements Converter<any, any> {
    getFieldData: (data: any, props: AttributeDefinition) => import('../../form/Definitions').InputType;
    getRawdata: (data: any, props: AttributeDefinition) => import('../../form/Definitions').InputType;
    format: (data: any) => any;
    parse: (text: any) => any;
    convert: (text: any) => any;
    getDefaultValue: (d: any) => any;
}
declare const noopConverter: NoopConverter;
export { noopConverter };
