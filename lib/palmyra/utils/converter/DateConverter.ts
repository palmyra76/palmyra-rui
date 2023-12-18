import dayjs from "dayjs";
import { Converter } from "."
import { FieldDefinition } from "../../form/Definitions"

class DateTimeConverter implements Converter<any, Date>{
    serverPattern: string;
    displayPattern: string;

    constructor(props: FieldDefinition, defaultFormat: string) {
        this.serverPattern = props.serverPattern || props.displayPattern || defaultFormat;
        this.displayPattern = props.displayPattern;
    }

    format(data: Date): any {
        if (data) {
            return dayjs(data)
                .format(this.serverPattern)
        }
        return data;
    };

    parse(text: any): Date {
        if (text instanceof Date)
            return text;

        if (text) {
            return dayjs(text, this.serverPattern)
                .toDate()
        }
        return text;
    };

    convert(text: any): any {
        const d: Date = this.parse(text);
        if (d && d instanceof Date && this.displayPattern) {
            return dayjs(d)
                .format(this.displayPattern)
        }
        return text;
    }
}

export { DateTimeConverter }
