import { Converter } from ".";
import { FieldDefinition, FieldType } from "../../form/Definitions";
import { DateTimeConverter } from "./DateConverter";
import { DateRangeConverter } from "./DateRangeConverter";
import { noopConverter } from "./NoopConverter";

const getFormatConverter = (props: FieldDefinition): Converter<any, any> => {

    const type: FieldType = props.type;
    switch (type) {
        case 'date':
            return new DateTimeConverter(props, 'YYYY-MM-DD');
        case 'datetime':
            return new DateTimeConverter(props, 'YYYY-MM-DDTHH:mm:ss');
        case 'dateRange':
            return new DateRangeConverter(props, 'YYYY-MM-DD');
        default:
            return noopConverter;
    }
}

export { getFormatConverter };