import { Converter } from ".";
declare class NoopConverter implements Converter<any, any> {
    format: (data: any) => any;
    parse: (text: any) => any;
}
declare const noopConverter: NoopConverter;
export { noopConverter };
