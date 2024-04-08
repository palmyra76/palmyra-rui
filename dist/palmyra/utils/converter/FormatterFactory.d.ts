import { FieldDefinition } from '../../form/Definitions';
import { Converter } from '.';
import { MutableRefObject } from 'react';

declare const getFormatConverter: (props: FieldDefinition, formDataRef?: MutableRefObject<any>) => Converter<any, any>;
export { getFormatConverter };
