import { LookupStore } from 'palmyra-wire';
import { ILookupOptions } from './Definitions';

declare const getLookupStore: (fieldDef: ILookupOptions) => LookupStore<any>;
export { getLookupStore };
