import { MutableRefObject } from 'react';
import { Converter } from '.';
import { FieldDefinition } from '../../form/Definitions';
import { IPattern } from '../../form/interface';

interface IFormat extends FieldDefinition, IPattern {
}
declare const getFormatConverter: (props: IFormat, formDataRef?: MutableRefObject<any>) => Converter<any, any>;
export { getFormatConverter };
