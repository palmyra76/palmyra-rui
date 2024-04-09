import { BaseValidator } from './BaseValidator';
import { FieldDefinition } from '../form/Definitions';

declare class TextValidator {
    validator: BaseValidator;
    validate: (format: FieldDefinition) => void;
}
export default TextValidator;
