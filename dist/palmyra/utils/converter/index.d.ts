import { FieldDefinition } from '../../form/Definitions';
import { getFormatConverter } from './FormatterFactory';
interface Converter<TEXT, DATA> {
    /**
     * Format and Parse functions will be used in  form data entry
     */
    format: (data: DATA) => TEXT;
    parse: (text: TEXT) => DATA;
    getFieldData: (formData: any, props: FieldDefinition) => any;
    convert: (text: TEXT) => TEXT;
    getDefaultValue: (d: any) => any;
    hasMultiUpdate?: () => boolean;
}
export { getFormatConverter };
export type { Converter };
