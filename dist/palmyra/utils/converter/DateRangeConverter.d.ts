import { AttributeDefinition, FieldDefinition } from '../../form/Definitions';
import { Converter } from '.';

interface IDateRange {
    from?: Date;
    to?: Date;
}
declare class DateRangeConverter implements Converter<any, IDateRange> {
    serverPattern: string;
    constructor(props: FieldDefinition, defaultFormat: string);
    getFieldData: (data: any, props: AttributeDefinition) => import('../../form/Definitions').InputType;
    getRawdata: (data: any, props: AttributeDefinition) => import('../../form/Definitions').InputType;
    format(data: IDateRange): any;
    _formatDate(d: Date): string;
    parse(text: any): IDateRange;
    _parseDate(t: string): Date;
    convert(t: string): string;
    getDefaultValue: (d: any) => any;
}
export { DateRangeConverter };
