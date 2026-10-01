import { LookupStore } from '@palmyralabs/palmyra-wire';
import { FieldDefinition } from './Definitions';

declare const getLookupStore: (fieldDef: FieldDefinition) => LookupStore<any>;
export { getLookupStore };
