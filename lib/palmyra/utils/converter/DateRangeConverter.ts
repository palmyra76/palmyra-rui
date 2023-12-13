import dayjs from "dayjs";
import { Converter } from "."
import { FieldDefinition } from "../../form/Definitions"

interface IDateRange {
    from?: Date
    to?: Date
}



function _isValid(d: Date) {
    if(d)
        return dayjs(d).isValid();
    return false;
}


class DateRangeConverter implements Converter<any, IDateRange>{
    pattern: string;

    constructor(props: FieldDefinition, defaultFormat: string) {
        this.pattern = props.serverPattern || props.displayPattern || defaultFormat;
    }

    format(data: IDateRange): any {
        if (data) {            
            if (_isValid(data.from)) {
                if (_isValid(data.to)) {
                    return this._formatDate(data.from) + '...' + this._formatDate(data.to);
                } else {
                    return '>' + this._formatDate(data.from);
                }
            } else {
                if (_isValid(data.to)) {
                    return '<' + this._formatDate(data.to);
                }else{
                    return undefined;
                }
            }
        }
    };


    _formatDate(d: Date): string {
        return dayjs(d).format(this.pattern);
    }

    parse(text: any): IDateRange {
        var from: Date, to: Date;
        if (text && typeof text == 'string') {
            const fc = text.charAt(0);
            if (fc == '>')
                from = this._parseDate(text.slice(1));
            else if (fc == '<')
                to = this._parseDate(text.slice(1));
            else {
                const dts = text.split('...');
                from = this._parseDate(dts[0]);
                if (dts[1])
                    to = this._parseDate(dts[1]);
            }
        }
        return { from, to };
    };

    _parseDate(t: string): Date {
        if (t)
            return dayjs(t, this.pattern).toDate()
    }

}

export { DateRangeConverter }


