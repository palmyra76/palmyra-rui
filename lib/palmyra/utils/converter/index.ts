import { IInputField } from '../../form/interfaceFields';
import { getFormatConverter } from './FormatterFactory'
import { getDataTransformer } from './FormDataTransformerFactory'

interface Converter<TEXT, DATA> {
    /**
     * Format and Parse functions will be used in  form data entry
     */
    format: (data: DATA) => TEXT;
    parse: (text: TEXT) => DATA;

    // Convert function to be used in Table/Data Grid for display purpose
    convert: (text: TEXT) => TEXT;
}

interface FormDataTransformer {
    getFormData: (data: any) => any;
    getFieldData: (field: IInputField) => any;
}

export { getFormatConverter, getDataTransformer }
export type { Converter, FormDataTransformer }