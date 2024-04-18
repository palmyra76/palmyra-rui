import { FieldDefinition } from './Definitions';
import { LookupStore } from 'palmyra-wire';

declare const getLookupStore: (fieldDef: FieldDefinition) => LookupStore<any>;
export { getLookupStore };
