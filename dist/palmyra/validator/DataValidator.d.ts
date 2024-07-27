import { FieldDefinition, FieldValidStatus, IValidatableField } from '../form/Definitions';

declare const getValidators: (fieldDefs: Record<string, FieldDefinition>) => {};
declare const validate: (format: IValidatableField) => (value: any) => FieldValidStatus;
export default validate;
export { getValidators };
