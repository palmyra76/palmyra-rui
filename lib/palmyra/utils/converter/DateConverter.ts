import dayjs from "dayjs";
import { Converter } from "."
import { FieldDefinition } from "../../form/Definitions"

class DateTimeConverter implements Converter<any, Date>{
    pattern: string;

    constructor(props: FieldDefinition, defaultFormat: string) {
        this.pattern = props.serverPattern || props.displayPattern || defaultFormat;
    }

    format(data: Date): any {
        if (data) {
            return dayjs(data)
                .format(this.pattern)
        }
        return data;
    };

    parse(text: any): Date {
        if (text) {
            return dayjs(text, this.pattern)
                .toDate()
        }
        return text;
    };
}

export { DateTimeConverter }
