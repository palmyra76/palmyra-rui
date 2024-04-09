import { LookupStore } from "../store";
import { FieldDefinition } from "./Definitions";
declare const getLookupStore: (fieldDef: FieldDefinition) => LookupStore<any>;
export { getLookupStore };
