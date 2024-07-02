import { MutableRefObject } from "react";
import { Converter } from ".";
import { FieldDefinition, FieldType } from "../../form/Definitions";
import { DateTimeConverter } from "./DateConverter";
import { DateRangeConverter } from "./DateRangeConverter";
import { noopConverter } from "./NoopConverter";
import { ServerlookupTransformer } from "./ServerlookupTransformer";
import { SliderRangeConverter } from "./SliderRangeConverter";
import { IPattern } from "../../form/interface";

interface IFormat extends FieldDefinition, IPattern {

}

const getFormatConverter = (props: IFormat, formDataRef?: MutableRefObject<any>): Converter<any, any> => {

    const type: FieldType = props.type;

    switch (type) {
        case 'date':
            return new DateTimeConverter(props, 'YYYY-MM-DD');
        case 'datetime':
            return new DateTimeConverter(props, 'YYYY-MM-DDTHH:mm:ss');
        case 'dateRange':
            return new DateRangeConverter(props, 'YYYY-MM-DD');
        case 'serverlookup':
            return new ServerlookupTransformer(props, formDataRef);
        case 'sliderRange':
            //@ts-ignore
            return new SliderRangeConverter(props);
        default:
            return noopConverter;
    }
}

export { getFormatConverter };