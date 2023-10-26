interface Converter<TEXT, DATA> {
    format: (data: DATA) => TEXT;
    parse: (text: TEXT) => DATA;
}


import { getFormatConverter } from './FormatterFactory'

export { getFormatConverter }
export type { Converter }