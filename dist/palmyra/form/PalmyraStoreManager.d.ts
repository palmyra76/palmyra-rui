import { LookupStore } from '@palmyralabs/palmyra-wire';
import { ILookupOptions } from './Definitions';

declare const getLookupStore: (fieldDef: ILookupOptions) => LookupStore<any>;
export { getLookupStore };
