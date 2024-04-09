import { FieldDefinition } from "../form/Definitions";
import { BaseValidator } from "./BaseValidator";
declare class TextValidator {
    validator: BaseValidator;
    validate: (format: FieldDefinition) => void;
}
export default TextValidator;
