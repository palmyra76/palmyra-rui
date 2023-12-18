interface Converter<TEXT, DATA> {
    /**
     * Format and Parse functions will be used in  form data entry
     */
    format: (data: DATA) => TEXT;
    parse: (text: TEXT) => DATA;
    convert: (text: TEXT) => TEXT;
}
import { getFormatConverter } from './FormatterFactory';
export { getFormatConverter };
export type { Converter };
