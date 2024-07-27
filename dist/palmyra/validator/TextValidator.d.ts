import { IValidatableField } from '../form/Definitions';
import { BaseValidator } from './BaseValidator';

declare class TextValidator {
    validator: BaseValidator;
    validate: (format: IValidatableField) => void;
}
export default TextValidator;
