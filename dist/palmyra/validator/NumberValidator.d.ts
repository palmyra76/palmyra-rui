import { FieldDefinition } from '../form/Definitions';

declare class NumberValidator {
    validate: (format: FieldDefinition) => void;
}
export default NumberValidator;
