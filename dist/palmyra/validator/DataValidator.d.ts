import { FieldDefinition, FieldValidStatus } from '../form/Definitions';

declare const getValidators: (fieldDefs: Record<string, FieldDefinition>) => {};
declare const validate: (format: FieldDefinition) => (value: any) => FieldValidStatus;
export default validate;
export { getValidators };
