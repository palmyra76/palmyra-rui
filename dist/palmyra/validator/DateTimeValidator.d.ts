import { FieldDefinition } from '../form/Definitions';

declare class DateTimeValidator {
    validate: (format: FieldDefinition) => void;
}
export default DateTimeValidator;
