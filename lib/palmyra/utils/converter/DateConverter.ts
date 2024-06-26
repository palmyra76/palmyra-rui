import dayjs from "dayjs";
import { Converter } from "."
import { AttributeDefinition, FieldDefinition } from "../../form/Definitions"
import { getValueByKey } from "../../form/FormUtil";

class DateTimeConverter implements Converter<any, Date> {
    serverPattern: string;
    displayPattern: string;

    constructor(props: FieldDefinition, defaultFormat: string) {
        this.serverPattern = props.serverPattern || props.displayPattern || defaultFormat;
        this.displayPattern = props.displayPattern;
    }

    getFieldData = (data: any, props: AttributeDefinition) => {
        return getValueByKey(props.attribute, data);
    };

    getRawdata = (data: any, props: AttributeDefinition) => {
        return getValueByKey(props.attribute, data);
    };

    format(data: Date): any {
        if (data) {
            return dayjs(data)
                .format(this.serverPattern)
        }
        return data;
    };

    parse(text: any): Date {
        if (text) {
            if (text instanceof Date)
                return text;
    
            const timestamp = Number(text);
            if (!isNaN(timestamp) && timestamp.toString() === text.toString()) {
                return new Date(timestamp);
            }

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

    getDefaultValue = (d: any): any => {
        return d || '';
    }
}

export { DateTimeConverter }
