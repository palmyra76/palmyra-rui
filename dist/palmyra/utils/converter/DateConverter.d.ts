import { Converter } from ".";
import { FieldDefinition } from "../../form/Definitions";
declare class DateTimeConverter implements Converter<any, Date> {
    pattern: string;
    constructor(props: FieldDefinition, defaultFormat: string);
    format(data: Date): any;
    parse(text: any): Date;
}
export { DateTimeConverter };
