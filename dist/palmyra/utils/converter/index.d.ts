import { getFormatConverter } from './FormatterFactory';
import { FieldDefinition } from '../../form/Definitions';

interface Converter<TEXT, DATA> {
    /**
     * Format and Parse functions will be used in  form data entry
     */
    format: (data: DATA) => TEXT;
    parse: (text: TEXT) => DATA;
    getRawdata: (data: DATA, props: FieldDefinition) => TEXT;
    getFieldData: (formData: any, props: FieldDefinition) => any;
    convert: (text: TEXT) => TEXT;
    getDefaultValue: (d: any) => any;
    hasMultiUpdate?: () => boolean;
}
export { getFormatConverter };
export type { Converter };
