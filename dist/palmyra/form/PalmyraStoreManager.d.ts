import { FieldDefinition } from './Definitions';
import { LookupStore } from '../store';

declare const getLookupStore: (fieldDef: FieldDefinition) => LookupStore<any>;
export { getLookupStore };
