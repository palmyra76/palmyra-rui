import { Converter } from ".";
import { FieldDefinition } from "../../form/Definitions";
interface IDateRange {
    from?: Date;
    to?: Date;
}
declare class DateRangeConverter implements Converter<any, IDateRange> {
    serverPattern: string;
    constructor(props: FieldDefinition, defaultFormat: string);
    format(data: IDateRange): any;
    _formatDate(d: Date): string;
    parse(text: any): IDateRange;
    _parseDate(t: string): Date;
    convert(t: string): string;
}
export { DateRangeConverter };
