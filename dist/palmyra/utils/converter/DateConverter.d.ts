import { Converter } from ".";
import { AttributeDefinition, FieldDefinition } from "../../form/Definitions";
declare class DateTimeConverter implements Converter<any, Date> {
    serverPattern: string;
    displayPattern: string;
    constructor(props: FieldDefinition, defaultFormat: string);
    getFieldData: (data: any, props: AttributeDefinition) => import("../../form/Definitions").InputType;
    format(data: Date): any;
    parse(text: any): Date;
    convert(text: any): any;
    getDefaultValue: (d: any) => any;
}
export { DateTimeConverter };
