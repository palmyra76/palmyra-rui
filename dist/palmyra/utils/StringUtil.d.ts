declare const hasChar: (val: string, c: string) => boolean;
declare const hasDot: (val: string) => boolean;
declare const StringFormat: (str: string, data: any) => string;
declare function concatValues(param: Object): string;
export { StringFormat, hasChar, hasDot, concatValues };
