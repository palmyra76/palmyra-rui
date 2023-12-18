import { MutableRefObject } from "react";
import { Converter } from ".";
import { FieldDefinition } from "../../form/Definitions";
declare const getFormatConverter: (props: FieldDefinition, formDataRef?: MutableRefObject<any>) => Converter<any, any>;
export { getFormatConverter };
